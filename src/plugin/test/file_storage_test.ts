import * as tf from '@tensorflow/tfjs-core';
import { fileStorageIO } from '../utils/file_storage';

class FakeFileSystemManager {
  private _storage: {};
  constructor(storage) {
    this._storage = storage;
  }

  unlink({ filePath, success, fail }) {
    const res = delete this._storage[filePath];
    success({ data: res });
  }

  readFile({ filePath, encoding, success, fail }) {
    success({ data: this._storage[filePath] });
  }

  writeFile({ filePath, data, encoding, success, fail }) {
    this._storage[filePath] = data;
    success({ data: this._storage[filePath] });
  }

  access({ path, success, fail }) {
    if (this._storage[path]) {
      success();
    } else {
      fail();
    }
  }

  mkdir({ dirPath, recursive, success, fail }) {
    success();
  }
}

describe('fileStorageIO', () => {
  // Test data.
  const modelTopology1: {} = {
    'class_name': 'Sequential',
    'keras_version': '2.1.4',
    'config': [{
      'class_name': 'Dense',
      'config': {
        'kernel_initializer': {
          'class_name': 'VarianceScaling',
          'config': {
            'distribution': 'uniform',
            'scale': 1.0,
            'seed': null,
            'mode': 'fan_avg'
          }
        },
        'name': 'dense',
        'kernel_constraint': null,
        'bias_regularizer': null,
        'bias_constraint': null,
        'dtype': 'float32',
        'activation': 'linear',
        'trainable': true,
        'kernel_regularizer': null,
        'bias_initializer': { 'class_name': 'Zeros', 'config': {} },
        'units': 1,
        'batch_input_shape': [null, 3],
        'use_bias': true,
        'activity_regularizer': null
      }
    }],
    'backend': 'tensorflow'
  };

  const weightSpecs1: tf.io.WeightsManifestEntry[] = [
    {
      name: 'dense/kernel',
      shape: [3, 1],
      dtype: 'float32',
    },
    {
      name: 'dense/bias',
      shape: [1],
      dtype: 'float32',
    }
  ];
  const weightData1 = new ArrayBuffer(16);

  const artifacts1: tf.io.ModelArtifacts = {
    modelTopology: modelTopology1,
    weightSpecs: weightSpecs1,
    weightData: weightData1,
    format: 'layers-model',
    generatedBy: 'TensorFlow.js v0.0.0',
    convertedBy: null
  };

  const artifactsV0: tf.io.ModelArtifacts = {
    modelTopology: modelTopology1,
    weightSpecs: weightSpecs1,
    weightData: weightData1
  };

  let storage = {};
  let fileSystemManager: FakeFileSystemManager;

  beforeEach(() => {
    storage = {};
    fileSystemManager = new FakeFileSystemManager(storage);
    if (!wx.getFileSystemManager) {
      wx.getFileSystemManager = () => null; // miniprogram-simulate don't have it
    }
    spyOn(wx, 'getFileSystemManager').and.callFake(() => {
      return fileSystemManager;
    });
  });

  it('constructs an IOHandler', async () => {
    const handler = fileStorageIO('foo');
    expect(typeof handler.load).toBe('function');
    expect(typeof handler.save).toBe('function');
  });

  it('save returns a SaveResult', async () => {
    const handler = fileStorageIO('FooModel');
    const result = await handler.save(artifacts1);
    expect(result.modelArtifactsInfo).toBeDefined();
    expect(result.modelArtifactsInfo).not.toBeNull();

    expect(result.modelArtifactsInfo.modelTopologyType).toBe('JSON');
    expect(result.modelArtifactsInfo.weightDataBytes).toBe(16);
  });

  it('Save-load round trip succeeds', async () => {
    const handler = fileStorageIO('FooModel');
    await handler.save(artifacts1);

    const handler2 = fileStorageIO('FooModel');
    const loaded = await handler2.load();

    expect(loaded.modelTopology).toEqual(modelTopology1);
    expect(loaded.weightSpecs).toEqual(weightSpecs1);
    expect(loaded.weightData).toEqual(weightData1);
    expect(loaded.format).toEqual('layers-model');
    expect(loaded.generatedBy).toEqual('TensorFlow.js v0.0.0');
    expect(loaded.convertedBy).toEqual(null);
  });

  it('Save-load round trip succeeds: v0 format', async () => {
    const handler1 = fileStorageIO('FooModel');
    await handler1.save(artifactsV0);

    const handler2 = fileStorageIO('FooModel');
    const loaded = await handler2.load();

    expect(loaded.modelTopology).toEqual(modelTopology1);
    expect(loaded.weightSpecs).toEqual(weightSpecs1);
    expect(loaded.weightData).toEqual(weightData1);
    expect(loaded.format).toEqual(undefined);
    expect(loaded.generatedBy).toEqual(undefined);
    expect(loaded.convertedBy).toEqual(undefined);
  });
});
