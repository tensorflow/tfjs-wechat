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

import * as tf from '@tensorflow/tfjs';
import { setWechatFetch } from 'fetch-wechat';
import { btoa, atob } from 'abab';

// WeChat WebGL backend name
export const WECHAT_WEBGL_BACKEND = 'wechat-webgl';

/**
 * Setup the fetch polyfill and WebGL backend for WeChat.
 * @param canvasId: canvasid field of the webgl canvas.
 * @param debug: flag to enable/disable debugging.
 */
export function setupWechatPlatform(
    component: any, canvasId: string, debug = true): void {
  const systemInfo = wx.getSystemInfoSync();
  if (debug) {
    console.log('selecting node ' + '#' + canvasId);
  }

  setWechatFetch();
  setBase64Methods();
  // devtools still not supporting webgl apis
  if (systemInfo.platform !== 'devtools') {
    setTimeout(() => {
      const selector = wx.createSelectorQuery().in(component);
      (selector.select('#' + canvasId) as any)
        .node((res: any) => initWebGL(res, systemInfo.platform, debug))
        .exec();
    }, 500);
  }
}

/**
 * Polyfill btoa and atob method on the global scope which will be used by
 * model parser.
 */
export function setBase64Methods() {
  global.btoa = btoa;
  global.atob = atob;
}
/**
 * Initialize webgl backend using the GlRenderingContext from the webgl canvas node.
 * @param res: webgl canvas node container return from node selector.
 * @param platform: platform name where the mini app is running (ios, android, devtool).
 * @param debug: enable/disable debug logging.
 */
export function initWebGL(res: any, platform: string, debug = false): void {
  const canvas = res.node;
  if (debug) {
    console.log('found the canvas: ' + canvas);
  }
  if (tf.ENV.findBackend(WECHAT_WEBGL_BACKEND) == null) {
    const WEBGL_ATTRIBUTES = {
      alpha: false,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      depth: false,
      stencil: false,
      failIfMajorPerformanceCaveat: true
    };
    const gl = canvas.getContext('webgl', WEBGL_ATTRIBUTES);
    if (debug) {
      console.log('start backend registration');
    }
    tf.ENV.set('WEBGL_VERSION', 1);
    if (platform === 'ios') {
      tf.ENV.set('WEBGL_RENDER_FLOAT32_ENABLED', false);
    }
    try {
      tf.ENV.registerBackend('wechat-webgl', () => {
        const context = new tf.webgl.GPGPUContext(gl);
        return new tf.webgl.MathBackendWebGL(context);
      }, 2);
    } catch (e) {
      console.error(e);
    }
    if (tf.ENV.findBackend(WECHAT_WEBGL_BACKEND) != null) {
      tf.setBackend(WECHAT_WEBGL_BACKEND);
    }
    if (debug) {
      console.log('current backend = ', tf.getBackend());
    }
  }
}
