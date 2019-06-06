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

import {setupWechatPlatform, WECHAT_WEBGL_BACKEND} from '../utils/wechat_platform';

const fetchFunc = () => {};
let backends: {[key: string]: {}} = {};
let platformName: string;
let platform: Platform;
let flags: {[key: string]: boolean|
            number} = {WEBGL_RENDER_FLOAT32_ENABLED: true};
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
  ENV: {
    global,
    setPlatform: (name, p) => {
      platformName = name;
      platform = p;
    },
    set: (flag: string, value: boolean|number) => flags[flag] = value
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
  flags = {WEBGL_RENDER_FLOAT32_ENABLED: true};
  currentBackend = undefined;
  global = {};
}
describe('setupWechatPlatform android', () => {
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
    setupWechatPlatform(config);
    expect(platform.fetch).toBeDefined();
  });

  it('should polyfill btoa', () => {
    setupWechatPlatform(config);
    expect(tf.ENV.global.btoa).toBeDefined();
  });

  it('should polyfill atob', () => {
    setupWechatPlatform(config);
    expect(tf.ENV.global.atob).toBeDefined();
  });

  it('should register wechat-webgl backend', () => {
    setupWechatPlatform(config);
    expect(tf.findBackend(WECHAT_WEBGL_BACKEND)).toBeDefined();
  });

  it('should set tf backend to wechat-webgl', () => {
    setupWechatPlatform(config);
    expect(tf.getBackend()).toEqual(WECHAT_WEBGL_BACKEND);
  });

  it('should set the WEBGL version to 1', () => {
    setupWechatPlatform(config);
    expect(flags['WEBGL_VERSION']).toBe(1);
  });

  it('should not disable float32 rendering for android ', () => {
    setupWechatPlatform(config);
    expect(flags['WEBGL_RENDER_FLOAT32_ENABLED']).toBeTruthy();
  });
});

describe('setupWechatPlatform android', () => {
  beforeEach(() => {
    backends = {};
    systemInfo = {platform: 'ios'};
    spyOn(wx, 'getSystemInfoSync').and.returnValue(systemInfo);
  });

  afterEach(() => clearState());

  it('should disable float32 rendering for ios ', () => {
    setupWechatPlatform(config);

    expect(flags['WEBGL_RENDER_FLOAT32_ENABLED']).toBeFalsy();
  });
});
