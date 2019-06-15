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
const config = {
  fetchFunc,
  tf,
  canvas
};
// tslint:disable-next-line:no-any
let systemInfo: any;

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
    systemInfo = {platform: 'android'};
    spyOn(wx, 'getSystemInfoSync').and.returnValue(systemInfo);
  });

  afterEach(() => clearState());

  it('should register platform', () => {
    setupWechatPlatform(config);
    expect(platformName).toEqual('wechat');
    expect(platform).toBeDefined();
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

  it('should set tf backend to wechat-webgl', () => {
    setupWechatPlatform(config);
    expect(tf.getBackend()).toEqual(WECHAT_WEBGL_BACKEND_NAME);
  });

  it('should set the WEBGL context', () => {
    spyOn(tf.webgl, 'setWebGLContext');
    setupWechatPlatform(config);
    expect(tf.webgl.setWebGLContext).toHaveBeenCalledWith(1, gl);
  });
});
