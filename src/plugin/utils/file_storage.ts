/**
 *  Save and load model into miniprogram file system
 *  FileSystemManager https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileSystemManager.html
 */
import { io } from '@tensorflow/tfjs-core';
import { getModelArtifactsInfoForJSON } from './model_artifacts';

type StoragePaths = {
  info: string,
  modelArtifactsWithoutWeights: string,
  weightData: string,
};

const PATH_SEPARATOR = '/';
const PATH_PREFIX = 'tensorflowjs_models';
const INFO_SUFFIX = 'info.json';
const MODEL_SUFFIX = 'model_without_weight.json';
const WEIGHT_DATA_SUFFIX = 'weight_data';

// get user path
// https://developers.weixin.qq.com/miniprogram/dev/api/base/env/env.html
function getUserDataPath() {
  if (!wx.env) {
    wx.env = {
      USER_DATA_PATH: 'http://usr'
    };
  }
  return wx.env.USER_DATA_PATH;
}
const MODEL_PATH = [getUserDataPath(), PATH_PREFIX].join(PATH_SEPARATOR);

function getModelPaths(prefix: string): StoragePaths {
  return {
    info: [MODEL_PATH, `${prefix}_${INFO_SUFFIX}`].join(PATH_SEPARATOR),
    modelArtifactsWithoutWeights:
      [MODEL_PATH, `${prefix}_${MODEL_SUFFIX}`].join(PATH_SEPARATOR),
    weightData: [MODEL_PATH, `${prefix}_${WEIGHT_DATA_SUFFIX}`].join(PATH_SEPARATOR),
  };
}

/**
 * Make remove file
 * This function will ignore removed error (file not existed)
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html
 * @param filePath the file path to be removed
 */
// tslint:disable-next-line:no-any
function removeFile(filePath: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const fsm = wx.getFileSystemManager();
    fsm.unlink({
      filePath,
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        resolve(null);
      }
    });
  });
}

/**
 * Read file
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html
 * @param filePath the file path
 * @param encoding the encoding, default reture ArrayBuffer if undefined
 */
// tslint:disable-next-line:no-any
function readFile(filePath: string, encoding?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const fsm = wx.getFileSystemManager();
    fsm.readFile({
      filePath,
      encoding,
      success: (res) => {
        if (res.data) {
          resolve(res.data);
          return;
        }
        reject(new Error('Empty File'));
      },
      fail: (res) => {
        reject(new Error(res.errMsg));
      }
    });
  });
}

/**
 * Write file
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFile.html
 * @param filePath the file path
 * @param data data to save
 * @param encoding  encoding
 */
// tslint:disable-next-line:no-any
function writeFile(filePath: string, data: any, encoding: any = 'binary'): Promise<any> {
  return new Promise((resolve, reject) => {
    removeFile(filePath).then(() => {
      const fsm = wx.getFileSystemManager();
      fsm.writeFile({
        filePath,
        data,
        encoding,
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          reject(new Error(res.errMsg));
        }
      });
    });
  });
}

// tslint:disable-next-line:no-any
function mkdir(dirPath: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const fsm = wx.getFileSystemManager();
    fsm.access({
      path: dirPath,
      success: () => {
        resolve();
      },
      fail: () => {
        fsm.mkdir({
          dirPath,
          recursive: true,
          success: (res) => {
            resolve(res);
          },
          fail: (res) => {
            reject(new Error(res.errMsg));
          }
        });
      }
    });
  });
}

class FileStorageHandler implements io.IOHandler {
  protected readonly paths: StoragePaths;
  protected readonly prefix: string;

  constructor(prefix) {
    if (prefix == null || !prefix) {
      throw new Error('prefix must not be null, undefined or empty.');
    }
    this.prefix = prefix;
    this.paths = getModelPaths(this.prefix);
  }

  /**
   * Save model artifacts to File
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
      const modelArtifactsInfo =
        getModelArtifactsInfoForJSON(modelArtifacts);
      const { weightData, ...modelArtifactsWithoutWeights } = modelArtifacts;

      try {
        await mkdir(MODEL_PATH);
        await writeFile(this.paths.info, JSON.stringify(modelArtifactsInfo), 'utf-8');
        await writeFile(
          this.paths.modelArtifactsWithoutWeights,
          JSON.stringify(modelArtifactsWithoutWeights),
          'utf-8'
        );
        await writeFile(this.paths.weightData, weightData);
        return { modelArtifactsInfo };
      } catch (err) {
        // If saving failed, clean up all items saved so far.
        await removeFile(this.paths.info);
        await removeFile(this.paths.modelArtifactsWithoutWeights);
        await removeFile(this.paths.weightData);

        throw new Error(err);
      }
    }
  }

  /**
   * Load a model from files.
   *
   * @returns The loaded model (if loading succeeds).
   */
  async load(): Promise<io.ModelArtifacts> {
    const info =
      JSON.parse(await readFile(this.paths.info, 'utf-8'));
    if (info == null) {
      throw new Error(
        `In file storage, there is no model with name '${this.prefix}'`);
    }

    if (info.modelTopologyType !== 'JSON') {
      throw new Error(
        'fileStorage does not support loading non-JSON model ' +
        'topology yet.');
    }

    const modelArtifacts =
      JSON.parse(await readFile(this.paths.modelArtifactsWithoutWeights, 'utf-8'));

    // load weight data
    modelArtifacts.weightData = await readFile(this.paths.weightData);
    return modelArtifacts;
  }
}

/**
 * Factory function for FileStorage IOHandler.
 *
 * This `IOHandler` supports both `save` and `load`.
 *
 * For each model's saved artifacts, three items are saved to user files.
 *   - `${PATH_PREFIX}/${prefix}/info.json`: Contains meta-info about the
 *     model, such as date saved, type of the topology, size in bytes, etc.
 *   - `${PATH_PREFIX}/${prefix}/model_without_weight.json`: The topology,
 *     weights_specs and all other information about the model except for the
 *     weights.
 *   - `${PATH_PREFIX}/${prefix}/weight_data`: Concatenated binary
 *     weight values, stored as binary.
 *
 * @param prefix A unique identifier for the model to be saved. Must be a
 *   non-empty string.
 * @returns An instance of `IOHandler`
 */
export function fileStorageIO(prefix: string): io.IOHandler {
  return new FileStorageHandler(prefix);
}
