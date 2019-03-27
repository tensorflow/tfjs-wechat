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
export declare const WECHAT_WEBGL_BACKEND = "wechat-webgl";
/**
 * Setup the fetch polyfill and WebGL backend for WeChat.
 * @param canvasId: canvasid field of the webgl canvas.
 * @param debug: flag to enable/disable debugging.
 */
export declare function setupWechatPlatform(component: any, canvasId: string, debug?: boolean): void;
/**
 * Polyfill btoa and atob method on the global scope which will be used by
 * model parser.
 */
export declare function setBase64Methods(): void;
/**
 * Initialize webgl backend using the GlRenderingContext from the webgl canvas node.
 * @param res: webgl canvas node container return from node selector.
 * @param platform: platform name where the mini app is running (ios, android, devtool).
 * @param debug: enable/disable debug logging.
 */
export declare function initWebGL(res: any, platform: string, debug?: boolean): void;
