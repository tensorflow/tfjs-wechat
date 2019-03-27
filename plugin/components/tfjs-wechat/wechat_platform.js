"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs");
var fetch_wechat_1 = require("fetch-wechat");
var abab_1 = require("abab");
// WeChat WebGL backend name
exports.WECHAT_WEBGL_BACKEND = 'wechat-webgl';
/**
 * Setup the fetch polyfill and WebGL backend for WeChat.
 * @param canvasId: canvasid field of the webgl canvas.
 * @param debug: flag to enable/disable debugging.
 */
function setupWechatPlatform(component, canvasId, debug) {
    if (debug === void 0) { debug = true; }
    var systemInfo = wx.getSystemInfoSync();
    if (debug) {
        console.log('selecting node ' + '#' + canvasId);
    }
    fetch_wechat_1.setWechatFetch();
    setBase64Methods();
    // devtools still not supporting webgl apis
    if (systemInfo.platform !== 'devtools') {
        setTimeout(function () {
            var selector = wx.createSelectorQuery().in(component);
            selector.select('#' + canvasId)
                .node(function (res) { return initWebGL(res, systemInfo.platform, debug); })
                .exec();
        }, 500);
    }
}
exports.setupWechatPlatform = setupWechatPlatform;
/**
 * Polyfill btoa and atob method on the global scope which will be used by
 * model parser.
 */
function setBase64Methods() {
    global.btoa = abab_1.btoa;
    global.atob = abab_1.atob;
}
exports.setBase64Methods = setBase64Methods;
/**
 * Initialize webgl backend using the GlRenderingContext from the webgl canvas node.
 * @param res: webgl canvas node container return from node selector.
 * @param platform: platform name where the mini app is running (ios, android, devtool).
 * @param debug: enable/disable debug logging.
 */
function initWebGL(res, platform, debug) {
    if (debug === void 0) { debug = false; }
    var canvas = res.node;
    if (debug) {
        console.log('found the canvas: ' + canvas);
    }
    if (tf.ENV.findBackend(exports.WECHAT_WEBGL_BACKEND) == null) {
        var WEBGL_ATTRIBUTES = {
            alpha: false,
            antialias: false,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
            depth: false,
            stencil: false,
            failIfMajorPerformanceCaveat: true
        };
        var gl_1 = canvas.getContext('webgl', WEBGL_ATTRIBUTES);
        if (debug) {
            console.log('start backend registration');
        }
        tf.ENV.set('WEBGL_VERSION', 1);
        if (platform === 'ios') {
            tf.ENV.set('WEBGL_RENDER_FLOAT32_ENABLED', false);
        }
        try {
            tf.ENV.registerBackend('wechat-webgl', function () {
                var context = new tf.webgl.GPGPUContext(gl_1);
                return new tf.webgl.MathBackendWebGL(context);
            }, 2);
        }
        catch (e) {
            console.error(e);
        }
        if (tf.ENV.findBackend(exports.WECHAT_WEBGL_BACKEND) != null) {
            tf.setBackend(exports.WECHAT_WEBGL_BACKEND);
        }
        if (debug) {
            console.log('current backend = ', tf.getBackend());
        }
    }
}
exports.initWebGL = initWebGL;
//# sourceMappingURL=wechat_platform.js.map