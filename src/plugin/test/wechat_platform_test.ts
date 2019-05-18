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

// import * as path from 'path';

import {setupWechatPlatform, WECHAT_WEBGL_BACKEND} from '../utils/wechat_platform';

// let component = {};
const fetchFunc = () => {};
let backends: {[key: string]: {}} = {};
const tf = {
  getBackend: () => {},
  findBackend: (name: string) => backends[name],
  registerBackend: (name: string, callback: {}, priority: number) => {
    backends[name] = callback;
  },
  setBackend: (name: string) => {},
  ENV: {global: {}, setPlatform: () => {}, set: (flag: string) => {}}
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
describe('setupWechatPlatform', () => {
  beforeEach(() => {
    backends = {};
    systemInfo = {platform: 'devtools'};
    spyOn(wx, 'getSystemInfoSync').and.returnValue(systemInfo);
  });
  it('should polyfill fetch', () => {
    setupWechatPlatform(config);
    expect(global.fetch).toBeDefined();
  });
  it('should polyfill btoa', () => {
    setupWechatPlatform(config);
    expect(global.btoa).toBeDefined();
  });
  it('should polyfill atob', () => {
    setupWechatPlatform(config);
    expect(global.atob).toBeDefined();
  });
  it('should register wechat-webgl backend', () => {
    spyOn(tf, 'registerBackend');
    setupWechatPlatform(config);
    expect(tf.registerBackend)
        .toHaveBeenCalledWith(WECHAT_WEBGL_BACKEND, jasmine.any(Function), 2);
  });
  it('should set tf backend to wechat-webgl', () => {
    spyOn(tf, 'setBackend');
    setupWechatPlatform(config);
    expect(tf.setBackend).toHaveBeenCalledWith(WECHAT_WEBGL_BACKEND);
  });
  it('should set the WEBGL version to 1', () => {
    spyOn(tf.ENV, 'set');
    setupWechatPlatform(config);
    expect(tf.ENV.set).toHaveBeenCalledWith('WEBGL_VERSION', 1);
  });
  it('should disable float32 rendering for iOS ', () => {
    systemInfo.platform = 'ios';
    spyOn(tf.ENV, 'set');
    setupWechatPlatform(config);
    expect(tf.ENV.set)
        .toHaveBeenCalledWith('WEBGL_RENDER_FLOAT32_ENABLED', false);
  });
});
