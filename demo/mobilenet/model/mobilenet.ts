/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
import * as tfc from '@tensorflow/tfjs-converter';
import * as tf from '@tensorflow/tfjs-core';

const GOOGLE_CLOUD_STORAGE_DIR =
  'https://tfhub.dev/google/tfjs-model/imagenet/';
const MODEL_FILE_URL = 'mobilenet_v2_050_224/feature_vector/3/default/1';
const PREPROCESS_DIVISOR = 255 / 2;
const STORAGE_KEY = 'mobilenet_model';

export interface TopKValue {
  label: string;
  value: number;
}
export class MobileNet {
  private model: tfc.GraphModel;
  constructor() { }

  async load() {
    // save model into local storage as base64 string
    // const storageHandler = getApp().globalData.localStorageIO(STORAGE_KEY);
    // save model into files (weight binary)
    const storageHandler = getApp().globalData.fileStorageIO(
      STORAGE_KEY, wx.getFileSystemManager());

    try {
      this.model = await tfc.loadGraphModel(storageHandler);
    } catch (e) {
      this.model = await tfc.loadGraphModel(
        GOOGLE_CLOUD_STORAGE_DIR + MODEL_FILE_URL, { fromTFHub: true });
      this.model.save(storageHandler);
    }
  }

  dispose() {
    if (this.model) {
      this.model.dispose();
    }
  }
  /**
   * Infer through MobileNet. This does standard ImageNet pre-processing before
   * inferring through the model. This method returns named activations as well
   * as softmax logits.
   *
   * @param input un-preprocessed input Array.
   * @return The softmax logits.
   */
  predict(input: tf.Tensor) {
    const preprocessedInput = tf.div(
      tf.sub(tf.cast(input, 'float32'), PREPROCESS_DIVISOR),
      PREPROCESS_DIVISOR);
    const reshapedInput =
      tf.reshape(preprocessedInput, [1, ...preprocessedInput.shape]);
    return this.model.predict(reshapedInput);
  }
}
