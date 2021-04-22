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

import * as webgl_backend from '@tensorflow/tfjs-backend-webgl';
import * as tfjs from '@tensorflow/tfjs-core';
import { atob, btoa } from 'abab';
import { TextDecoder, TextEncoder } from 'text-encoder';

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
   * TensorFlow.js webgl backend object.
   */
  // tslint:disable-next-line:no-any
  webgl: any;
  /**
   * The WeChat offline canvas, can be created by calling
   * wx.createOfflineCanvas()
   */
  // tslint:disable-next-line:no-any
  canvas: any;
  /**
   * Optional name of wechat webgl backend.
   */
  // tslint:disable-next-line:no-any
  backendName?: string;
}

export let systemFetchFunc: Function;

// Implement the WeChat Platform for TFJS
export class PlatformWeChat implements tfjs.Platform {
  constructor(fetchFunc: Function) {
    systemFetchFunc = fetchFunc;
  }
  fetch(path: string, requestInits?: RequestInit): Promise<Response> {
    return systemFetchFunc(path, requestInits);
  }
  now(): number {
    return Date.now();
  }
  encode(text: string, encoding: string): Uint8Array {
    if (encoding !== 'utf-8' && encoding !== 'utf8') {
      throw new Error(
        `Browser's encoder only supports utf-8, but got ${encoding}`);
    }
    return new TextEncoder(encoding).encode(text);
  }
  decode(bytes: Uint8Array, encoding: string): string {
    return new TextDecoder(encoding).decode(bytes);
  }
}

export const WECHAT_WEBGL_BACKEND_NAME = 'wechat-webgl';

/**
 * Setup the fetch polyfill and WebGL backend for WeChat.
 * @param config: SystemConfig object contains Tensorflow.js runtime, fetch
 *     polyfill and WeChat offline canvas.
 * @param debug: flag to enable/disable debugging.
 */
export function setupWechatPlatform(config: SystemConfig, debug = false): void {
  const tf = config.tf as typeof tfjs;
  const backendName = config.backendName || WECHAT_WEBGL_BACKEND_NAME;
  if (debug) {
    console.log(tf);
  }
  // Skip initialization if the backend has been set.
  if (tf.getBackend() === backendName) {
    return;
  }
  const webgl = config.webgl as typeof webgl_backend;
  tf.ENV.setPlatform('wechat', new PlatformWeChat(config.fetchFunc));
  setBase64Methods(tf);
  if (config.webgl && config.canvas) {
    initWebGL(tf, webgl, config.canvas, backendName, debug);
  } else {
    console.log(
      'webgl backend is not initialized, ' +
      'please inject webgl backend and the offscreen canvas.');
  }
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
 * Initialize webgl backend using the WebGLRenderingContext from the webgl
 * canvas node.
 * @param canvas: webgl canvas node container return from node selector.
 * @param platform: platform name where the mini app is running (ios, android,
 *     devtool).
 * @param debug: enable/disable debug logging.
 */
const BACKEND_PRIORITY = 2;
export function initWebGL(
  // tslint:disable-next-line:no-any
  tf: typeof tfjs, webgl: typeof webgl_backend, canvas: any,
  backendName = WECHAT_WEBGL_BACKEND_NAME, debug = false): void {
  if (tf.findBackend(backendName) == null) {
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
    webgl.setWebGLContext(1, gl);
    tf.ENV.set('WEBGL_VERSION', 1);
    try {
      tf.registerBackend(backendName, () => {
        const context = new webgl.GPGPUContext(gl);
        return new webgl.MathBackendWebGL(context);
      }, BACKEND_PRIORITY);

      // Register all the webgl kernels on the rn-webgl backend
      const kernels = tf.getKernelsForBackend('webgl');
      kernels.forEach(kernelConfig => {
        const newKernelConfig = Object.assign({}, kernelConfig, { backendName });
        tf.registerKernel(newKernelConfig);
      });
    } catch (e) {
      throw (new Error(`Failed to register Webgl backend: ${e.message}`));
    }
  }
  tf.setBackend(backendName);
  if (debug) {
    console.log('current backend = ', tf.getBackend());
  }
}
