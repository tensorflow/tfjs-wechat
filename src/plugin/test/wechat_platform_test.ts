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

import {Platform} from '@tensorflow/tfjs-core/dist/platforms/platform';

import {setupWechatPlatform, WECHAT_WEBGL_BACKEND_NAME} from '../utils/wechat_platform';

const fetchFunc = () => {};
let backends: {[key: string]: {}} = {};
let platformName: string;
let platform: Platform;
let currentBackend: string;
// tslint:disable-next-line:no-any
let global: any = {};
const tf = {
  getBackend: () => currentBackend,
  findBackend: (name: string) => backends[name],
  registerBackend: (name: string, callback: {}, priority: number) => {
    backends[name] = callback;
  },
  setBackend: (name: string) => currentBackend = name,
  webgl: {
    setWebGLContext: () => {},
  },
  ENV: {
    global,
    setPlatform: (name, p) => {
      platformName = name;
      platform = p;
    }
  }
};
const gl = {};
const canvas = {
  getContext: () => gl
};
const backendName = 'test-webgl';
const config = {
  fetchFunc,
  tf,
  canvas
};

function clearState() {
  platform = undefined;
  platformName = undefined;
  backends = {};
  currentBackend = undefined;
  global = {};
}

describe('setupWechatPlatform', () => {
  beforeEach(() => {
    backends = {};
  });

  afterEach(() => clearState());

  it('should register platform', () => {
    setupWechatPlatform(config);
    expect(platformName).toEqual('wechat');
    expect(platform).toBeDefined();
  });

  it('should polyfill now', () => {
    setupWechatPlatform(config);
    const earlier = Date.now();
    const result = platform.now();
    expect(result).toBeGreaterThanOrEqual(earlier);
  });

  it('encodeUTF8 single string', () => {
    setupWechatPlatform(config);
    const bytes = platform.encode('hello', 'utf-8');
    expect(bytes.length).toBe(5);
    expect(bytes).toEqual(new Uint8Array([104, 101, 108, 108, 111]));
  });

  it('encodeUTF8 two strings delimited', () => {
    setupWechatPlatform(config);
    const bytes = platform.encode('hello\x00world', 'utf-8');
    expect(bytes.length).toBe(11);
    expect(bytes).toEqual(
        new Uint8Array([104, 101, 108, 108, 111, 0, 119, 111, 114, 108, 100]));
  });

  it('encodeUTF8 cyrillic', () => {
    setupWechatPlatform(config);
    const bytes = platform.encode('Здраво', 'utf-8');
    expect(bytes.length).toBe(12);
    expect(bytes).toEqual(new Uint8Array(
        [208, 151, 208, 180, 209, 128, 208, 176, 208, 178, 208, 190]));
  });

  it('decode single string', () => {
    setupWechatPlatform(config);
    const s =
        platform.decode(new Uint8Array([104, 101, 108, 108, 111]), 'utf-8');
    expect(s.length).toBe(5);
    expect(s).toEqual('hello');
  });

  it('decode two strings delimited', () => {
    setupWechatPlatform(config);
    const s = platform.decode(
        new Uint8Array([104, 101, 108, 108, 111, 0, 119, 111, 114, 108, 100]),
        'utf-8');
    expect(s.length).toBe(11);
    expect(s).toEqual('hello\x00world');
  });

  it('decode cyrillic', () => {
    setupWechatPlatform(config);
    const s = platform.decode(
        new Uint8Array(
            [208, 151, 208, 180, 209, 128, 208, 176, 208, 178, 208, 190]),
        'utf-8');
    expect(s.length).toBe(6);
    expect(s).toEqual('Здраво');
  });

  it('should polyfill fetch', () => {
    spyOn(config, 'fetchFunc');
    setupWechatPlatform(config);
    platform.fetch('url', {});
    expect(config.fetchFunc).toHaveBeenCalledWith('url', {});
  });

  it('should polyfill btoa', () => {
    setupWechatPlatform(config);
    expect(tf.ENV.global.btoa).toBeDefined();
  });

  it('should polyfill atob', () => {
    setupWechatPlatform(config);
    expect(tf.ENV.global.atob).toBeDefined();
  });

  it('should set tf backend to test-webgl', () => {
    setupWechatPlatform(config);
    expect(tf.getBackend()).toEqual(WECHAT_WEBGL_BACKEND_NAME);
  });

  it('should set tf backend to wechat-webgl', () => {
    const configWithBackendName = {
      fetchFunc,
      tf,
      canvas,
      backendName
    };
    setupWechatPlatform(configWithBackendName);
    expect(tf.getBackend()).toEqual(backendName);
  });

  it('should set the WEBGL context', () => {
    spyOn(tf.webgl, 'setWebGLContext');
    setupWechatPlatform(config);
    expect(tf.webgl.setWebGLContext).toHaveBeenCalledWith(1, gl);
  });
});
