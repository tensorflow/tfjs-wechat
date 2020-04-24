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

const fetchWechat = require('fetch-wechat');
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-wasm';
import { setWasmPath } from '@tensorflow/tfjs-backend-wasm';

const plugin = requirePlugin('tfjsPlugin');
const ENABLE_DEBUG = true;
//app.js
App({
  globalData: {
    localStorageIO: plugin.localStorageIO,
    fileStorageIO: plugin.fileStorageIO,
  },
  onLaunch: function () {
    plugin.configPlugin({
      fetchFunc: fetchWechat.fetchFunc(),
      tf, canvas: wx.createOffscreenCanvas()
    }, ENABLE_DEBUG);
    const info = wx.getSystemInfoSync();
    console.log(info.platform);
    if (info.platform == 'android') {
      setWasmPath('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@1.7.3/wasm-out/tfjs-backend-wasm.wasm', true);
      tf.setBackend('wasm').then(() => console.log('set wasm as backend'));
    }
  }
})
