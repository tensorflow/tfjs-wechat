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

import * as tfjs from '@tensorflow/tfjs';
import {atob, btoa} from 'abab';

export interface SystemConfig {
  /**
   * A function used to override the `window.fetch` function.
   */
  fetchFunc: Function;
  /**
   * TensorFlow.js exported root object.
   */
  // tslint:disable-next-line:no-any
  tf: any;
  /**
   * The WeChat offline canvas, can be created by calling
   * wx.createOfflineCanvas()
   */
  // tslint:disable-next-line:no-any
  canvas: any;
}

// Implement the WeChat Platform for TFJS
export class PlatformWeChat implements tfjs.Platform {
  constructor(private fetchFunc: Function) {}
  fetch(path: string, requestInits?: RequestInit): Promise<Response> {
    return this.fetchFunc(path, requestInits);
  }
}

// WeChat WebGL backend name
export const WECHAT_WEBGL_BACKEND = 'wechat-webgl';

/**
 * Setup the fetch polyfill and WebGL backend for WeChat.
 * @param config: SystemConfig object contains Tensorflow.js runtime, fetch polyfill and WeChat offline canvas.
 * @param debug: flag to enable/disable debugging.
 */
export function setupWechatPlatform(config: SystemConfig, debug = true): void {
  const tf = config.tf as typeof tfjs;
  if (debug) {
    console.log(tf);
  }
  // Skip initialization if the backend has been set.
  if (tf.getBackend() === WECHAT_WEBGL_BACKEND) {
    return;
  }
  const systemInfo = wx.getSystemInfoSync();

  setWechatFetch(config.tf, config.fetchFunc);
  setBase64Methods(tf);
  initWebGL(tf, config.canvas, systemInfo.platform, debug);
}
/**
 * Polyfill btoa and atob method on the global scope which will be used by
 * model parser.
 */
export function setWechatFetch(tf: typeof tfjs, fetchFunc: Function) {
  tf.ENV.setPlatform('wechat', new PlatformWeChat(fetchFunc));
}

/**
 * Polyfill btoa and atob method on the global scope which will be used by
 * model parser.
 */
export function setBase64Methods(tf: typeof tfjs) {
  tf.ENV.global.btoa = btoa;
  tf.ENV.global.atob = atob;
}
/**
 * Initialize webgl backend using the GlRenderingContext from the webgl canvas
 * node.
 * @param res: webgl canvas node container return from node selector.
 * @param platform: platform name where the mini app is running (ios, android,
 *     devtool).
 * @param debug: enable/disable debug logging.
 */
export function initWebGL(
    // tslint:disable-next-line:no-any
    tf: typeof tfjs, canvas: any, platform: string, debug = false): void {
  if (tf.findBackend(WECHAT_WEBGL_BACKEND) == null) {
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
      tf.registerBackend('wechat-webgl', () => {
        const context = new tf.webgl.GPGPUContext(gl);
        return new tf.webgl.MathBackendWebGL(context);
      }, 2);
    } catch (e) {
      console.error(e);
    }
    if (tf.findBackend(WECHAT_WEBGL_BACKEND) != null) {
      tf.setBackend(WECHAT_WEBGL_BACKEND);
    }
    if (debug) {
      console.log('current backend = ', tf.getBackend());
    }
  }
}
