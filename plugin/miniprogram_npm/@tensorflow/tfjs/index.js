module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1553229508477, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("@tensorflow/tfjs-core"));
__export(require("@tensorflow/tfjs-layers"));
__export(require("@tensorflow/tfjs-converter"));
// Export data api as tf.data
var data = require("@tensorflow/tfjs-data");
exports.data = data;
// Import versions of all sub-packages.
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var tfjs_data_1 = require("@tensorflow/tfjs-data");
var tfjs_layers_1 = require("@tensorflow/tfjs-layers");
var tfjs_converter_1 = require("@tensorflow/tfjs-converter");
var version_1 = require("./version");
exports.version = {
    'tfjs-core': tfjs_core_1.version_core,
    'tfjs-data': tfjs_data_1.version_data,
    'tfjs-layers': tfjs_layers_1.version_layers,
    'tfjs-converter': tfjs_converter_1.version_converter,
    'tfjs': version_1.version
};
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./version":1553229508478}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508478, function(require, module, exports) {
"use strict";
/** @license See the LICENSE file. */
Object.defineProperty(exports, "__esModule", { value: true });
// This code is auto-generated, do not modify this file!
var version = '1.0.2';
exports.version = version;
//# sourceMappingURL=version.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1553229508477);
})()
//# sourceMappingURL=index.js.map