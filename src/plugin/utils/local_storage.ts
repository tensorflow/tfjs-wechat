/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import { io } from '@tensorflow/tfjs-core';
import { fromByteArray, toByteArray } from 'base64-js';

type StorageKeys = {
  info: string,
  modelArtifactsWithoutWeights: string,
  weightData: string,
  weightDataChunkSize: string
};

const PATH_SEPARATOR = '/';
const PATH_PREFIX = 'tensorflowjs_models';
const INFO_SUFFIX = 'info';
const MODEL_SUFFIX = 'model_without_weight';
const WEIGHT_DATA_SUFFIX = 'weight_data';
const WEIGHT_DATA_SIZE_SUFFIX = 'weight_data_size';

function getModelKeys(path: string): StorageKeys {
  return {
    info: [PATH_PREFIX, path, INFO_SUFFIX].join(PATH_SEPARATOR),
    modelArtifactsWithoutWeights:
      [PATH_PREFIX, path, MODEL_SUFFIX].join(PATH_SEPARATOR),
    weightData: [PATH_PREFIX, path, WEIGHT_DATA_SUFFIX].join(PATH_SEPARATOR),
    weightDataChunkSize:
      [PATH_PREFIX, path, WEIGHT_DATA_SIZE_SUFFIX].join(PATH_SEPARATOR)
  };
}
/**
 * Populate ModelArtifactsInfo fields for a model with JSON topology.
 * @param modelArtifacts
 * @returns A ModelArtifactsInfo object.
 */
function getModelArtifactsInfoForJSON(modelArtifacts: io.ModelArtifacts):
  io.ModelArtifactsInfo {
  if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
    throw new Error('Expected JSON model topology, received ArrayBuffer.');
  }

  return {
    dateSaved: new Date(),
    // TODO followup on removing this from the the interface
    modelTopologyType: 'JSON',
    weightDataBytes: modelArtifacts.weightData == null ?
      0 :
      modelArtifacts.weightData.byteLength,
  };
}

/**
 * Split the string into array of substrings with the same size.
 * @param str the str to be splitted
 * @param size
 */
function splitString(str: string, size: number): string[] {
  return str.match(new RegExp(`.{1,${size}}`, 'g'));
}

// tslint:disable-next-line:no-any
function getStorage(key: string): Promise<any> {
  return new Promise((resolve, reject) => {
    wx.getStorage(
      { key, success: (res) => resolve(res.data), fail: (res) => reject(res) });
  });
}
class LocalStorageHandler implements io.IOHandler {
  protected readonly keys: StorageKeys;

  constructor(protected readonly modelPath: string) {
    if (modelPath == null || !modelPath) {
      throw new Error('modelPath must not be null, undefined or empty.');
    }
    this.keys = getModelKeys(this.modelPath);
  }

  /**
   * Save model artifacts to AsyncStorage
   *
   * @param modelArtifacts The model artifacts to be stored.
   * @returns An instance of SaveResult.
   */
  async save(modelArtifacts: io.ModelArtifacts): Promise<io.SaveResult> {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error(
        'AsyncStorageHandler.save() does not support saving model topology ' +
        'in binary format.');
    } else {
      // We save three items separately for each model,
      // a ModelArtifactsInfo, a ModelArtifacts without weights
      // and the model weights.
      const modelArtifactsInfo: io.ModelArtifactsInfo =
        getModelArtifactsInfoForJSON(modelArtifacts);
      const { weightData, ...modelArtifactsWithoutWeights } = modelArtifacts;
      const weights = splitString(fromByteArray(new Uint8Array(weightData)),
        800 * 1024);

      try {
        wx.setStorageSync(this.keys.info, JSON.stringify(modelArtifactsInfo));
        wx.setStorageSync(
          this.keys.modelArtifactsWithoutWeights,
          JSON.stringify(modelArtifactsWithoutWeights));
        // split the weight string into 10M chunk, size local storage has a
        // size limit.
        wx.setStorageSync(this.keys.weightDataChunkSize, weights.length);
        weights.forEach((value, index) => {
          wx.setStorageSync(
            `${this.keys.weightData}:${index}`, value);
        });
        return { modelArtifactsInfo };
      } catch (err) {
        // If saving failed, clean up all items saved so far.
        wx.removeStorageSync(this.keys.info);
        weights.forEach((value, index) => {
          wx.removeStorageSync(`${this.keys.weightData}:${index}`);
        });
        wx.removeStorageSync(this.keys.weightDataChunkSize);
        wx.removeStorageSync(this.keys.modelArtifactsWithoutWeights);

        throw new Error(
          `Failed to save model '${this.modelPath}' to local storage.
            Error info ${err}`);
      }
    }
  }

  /**
   * Load a model from local storage.
   *
   * See the documentation to `browserLocalStorage` for details on the saved
   * artifacts.
   *
   * @returns The loaded model (if loading succeeds).
   */
  async load(): Promise<io.ModelArtifacts> {
    const info =
      JSON.parse(await getStorage(this.keys.info)) as io.ModelArtifactsInfo;
    if (info == null) {
      throw new Error(
        `In local storage, there is no model with name '${this.modelPath}'`);
    }

    if (info.modelTopologyType !== 'JSON') {
      throw new Error(
        'BrowserLocalStorage does not support loading non-JSON model ' +
        'topology yet.');
    }

    const modelArtifacts: io.ModelArtifacts =
      JSON.parse(await getStorage(this.keys.modelArtifactsWithoutWeights));

    // Load weight data.
    const weightDataSize = await getStorage(this.keys.weightDataChunkSize);
    let weightDataBase64 = '';
    for (let i = 0; i < weightDataSize; i++) {
      const partialData = await getStorage(`${this.keys.weightData}:${i}`);
      if (partialData == null) {
        throw new Error(
          `In local storage, the binary weight values of model ` +
          `'${this.modelPath}' are missing.`);
      }
      weightDataBase64 += partialData;
    }
    modelArtifacts.weightData = toByteArray(weightDataBase64).buffer;

    return modelArtifacts;
  }
}

/**
 * Factory function for AsyncStorage IOHandler.
 *
 * This `IOHandler` supports both `save` and `load`.
 *
 * For each model's saved artifacts, three items are saved to async storage.
 *   - `${PATH_PREFIX}/${modelPath}/info`: Contains meta-info about the
 *     model, such as date saved, type of the topology, size in bytes, etc.
 *   - `${PATH_PREFIX}/${modelPath}/model_without_weight`: The topology,
 *     weights_specs and all other information about the model except for the
 *     weights.
 *   - `${PATH_PREFIX}/${modelPath}/weight_data`: Concatenated binary
 *     weight values, stored as a base64-encoded string.
 *
 * @param modelPath A unique identifier for the model to be saved. Must be a
 *   non-empty string.
 * @returns An instance of `IOHandler`
 */
export function localStorageIO(modelPath: string): io.IOHandler {
  return new LocalStorageHandler(modelPath);
}
