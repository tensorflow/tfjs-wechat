module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1553229508422, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
// This file lists all exports of TensorFlow.js Layers
var constraints = require("./exports_constraints");
exports.constraints = constraints;
var initializers = require("./exports_initializers");
exports.initializers = initializers;
var layers = require("./exports_layers");
exports.layers = layers;
var metrics = require("./exports_metrics");
exports.metrics = metrics;
var models = require("./exports_models");
exports.models = models;
var regularizers = require("./exports_regularizers");
exports.regularizers = regularizers;
var base_callbacks_1 = require("./base_callbacks");
exports.CallbackList = base_callbacks_1.CallbackList;
exports.CustomCallback = base_callbacks_1.CustomCallback;
exports.History = base_callbacks_1.History;
var callbacks_1 = require("./callbacks");
exports.Callback = callbacks_1.Callback;
var topology_1 = require("./engine/topology");
exports.InputSpec = topology_1.InputSpec;
exports.SymbolicTensor = topology_1.SymbolicTensor;
var training_1 = require("./engine/training");
exports.LayersModel = training_1.LayersModel;
var exports_1 = require("./exports");
exports.input = exports_1.input;
exports.loadLayersModel = exports_1.loadLayersModel;
exports.model = exports_1.model;
exports.registerCallbackConstructor = exports_1.registerCallbackConstructor;
exports.sequential = exports_1.sequential;
// tslint:disable-next-line:max-line-length
var recurrent_1 = require("./layers/recurrent");
exports.RNN = recurrent_1.RNN;
var models_1 = require("./models");
exports.Sequential = models_1.Sequential;
var variables_1 = require("./variables");
exports.LayerVariable = variables_1.LayerVariable;
var version_1 = require("./version");
exports.version_layers = version_1.version;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./exports_constraints":1553229508423,"./exports_initializers":1553229508429,"./exports_layers":1553229508436,"./exports_metrics":1553229508473,"./exports_models":1553229508474,"./exports_regularizers":1553229508475,"./base_callbacks":1553229508443,"./callbacks":1553229508476,"./engine/topology":1553229508438,"./engine/training":1553229508445,"./exports":1553229508442,"./layers/recurrent":1553229508470,"./models":1553229508457,"./variables":1553229508441,"./version":1553229508450}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508423, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
// tslint:disable-next-line:max-line-length
var constraints_1 = require("./constraints");
/**
 * @doc {
 *   heading: 'Constraints',
 *   namespace: 'constraints',
 *   useDocsFrom: 'MaxNorm'
 * }
 */
function maxNorm(args) {
    return new constraints_1.MaxNorm(args);
}
exports.maxNorm = maxNorm;
/**
 * @doc {
 *   heading: 'Constraints',
 *   namespace: 'constraints',
 *   useDocsFrom: 'UnitNorm'
 * }
 */
function unitNorm(args) {
    return new constraints_1.UnitNorm(args);
}
exports.unitNorm = unitNorm;
/**
 * @doc {
 *   heading: 'Constraints',
 *   namespace: 'constraints',
 *   useDocsFrom: 'NonNeg'
 * }
 */
function nonNeg() {
    return new constraints_1.NonNeg();
}
exports.nonNeg = nonNeg;
/**
 * @doc {
 *   heading: 'Constraints',
 *   namespace: 'constraints',
 *   useDocsFrom: 'MinMaxNormConfig'
 * }
 */
function minMaxNorm(config) {
    return new constraints_1.MinMaxNorm(config);
}
exports.minMaxNorm = minMaxNorm;
//# sourceMappingURL=exports_constraints.js.map
}, function(modId) { var map = {"./constraints":1553229508424}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508424, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* Original source: keras/contraints.py */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var common_1 = require("./backend/common");
var state_1 = require("./backend/state");
var generic_utils_1 = require("./utils/generic_utils");
/**
 * Helper function used by many of the Constraints to find the L2Norms.
 */
function calcL2Norms(w, axis) {
    return tfjs_core_1.tidy(function () { return tfc.sqrt(tfc.sum(tfc.mulStrict(w, w), axis, true)); });
}
/**
 * Base class for functions that impose constraints on weight values
 */
/**
 * @doc {
 *   heading: 'Constraints',
 *   subheading: 'Classes',
 *   namespace: 'constraints'
 * }
 */
var Constraint = /** @class */ (function (_super) {
    __extends(Constraint, _super);
    function Constraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Constraint.prototype.getConfig = function () {
        return {};
    };
    return Constraint;
}(tfjs_core_1.serialization.Serializable));
exports.Constraint = Constraint;
/**
 * MaxNorm weight constraint.
 *
 * Constrains the weights incident to each hidden unit
 * to have a norm less than or equal to a desired value.
 *
 * References
 *       - [Dropout: A Simple Way to Prevent Neural Networks from Overfitting
 * Srivastava, Hinton, et al.
 * 2014](http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
 */
var MaxNorm = /** @class */ (function (_super) {
    __extends(MaxNorm, _super);
    function MaxNorm(args) {
        var _this = _super.call(this) || this;
        _this.defaultMaxValue = 2;
        _this.defaultAxis = 0;
        _this.maxValue =
            args.maxValue != null ? args.maxValue : _this.defaultMaxValue;
        _this.axis = args.axis != null ? args.axis : _this.defaultAxis;
        return _this;
    }
    MaxNorm.prototype.apply = function (w) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            var norms = calcL2Norms(w, _this.axis);
            var desired = tfc.clipByValue(norms, 0, _this.maxValue);
            return tfc.mul(w, tfc.div(desired, tfc.add(state_1.getScalar(common_1.epsilon()), norms)));
        });
    };
    MaxNorm.prototype.getConfig = function () {
        return { maxValue: this.maxValue, axis: this.axis };
    };
    /** @nocollapse */
    MaxNorm.className = 'MaxNorm';
    return MaxNorm;
}(Constraint));
exports.MaxNorm = MaxNorm;
tfjs_core_1.serialization.registerClass(MaxNorm);
/**
 * Constrains the weights incident to each hidden unit to have unit norm.
 */
var UnitNorm = /** @class */ (function (_super) {
    __extends(UnitNorm, _super);
    function UnitNorm(args) {
        var _this = _super.call(this) || this;
        _this.defaultAxis = 0;
        _this.axis = args.axis != null ? args.axis : _this.defaultAxis;
        return _this;
    }
    UnitNorm.prototype.apply = function (w) {
        var _this = this;
        return tfjs_core_1.tidy(function () { return tfc.div(w, tfc.add(state_1.getScalar(common_1.epsilon()), calcL2Norms(w, _this.axis))); });
    };
    UnitNorm.prototype.getConfig = function () {
        return { axis: this.axis };
    };
    /** @nocollapse */
    UnitNorm.className = 'UnitNorm';
    return UnitNorm;
}(Constraint));
exports.UnitNorm = UnitNorm;
tfjs_core_1.serialization.registerClass(UnitNorm);
/**
 * Constains the weight to be non-negative.
 */
var NonNeg = /** @class */ (function (_super) {
    __extends(NonNeg, _super);
    function NonNeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonNeg.prototype.apply = function (w) {
        return tfc.relu(w);
    };
    /** @nocollapse */
    NonNeg.className = 'NonNeg';
    return NonNeg;
}(Constraint));
exports.NonNeg = NonNeg;
tfjs_core_1.serialization.registerClass(NonNeg);
var MinMaxNorm = /** @class */ (function (_super) {
    __extends(MinMaxNorm, _super);
    function MinMaxNorm(args) {
        var _this = _super.call(this) || this;
        _this.defaultMinValue = 0.0;
        _this.defaultMaxValue = 1.0;
        _this.defaultRate = 1.0;
        _this.defaultAxis = 0;
        _this.minValue =
            args.minValue != null ? args.minValue : _this.defaultMinValue;
        _this.maxValue =
            args.maxValue != null ? args.maxValue : _this.defaultMaxValue;
        _this.rate = args.rate != null ? args.rate : _this.defaultRate;
        _this.axis = args.axis != null ? args.axis : _this.defaultAxis;
        return _this;
    }
    MinMaxNorm.prototype.apply = function (w) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            var norms = calcL2Norms(w, _this.axis);
            var desired = tfc.add(tfc.mul(state_1.getScalar(_this.rate), tfc.clipByValue(norms, _this.minValue, _this.maxValue)), tfc.mul(state_1.getScalar(1.0 - _this.rate), norms));
            return tfc.mul(w, tfc.div(desired, tfc.add(state_1.getScalar(common_1.epsilon()), norms)));
        });
    };
    MinMaxNorm.prototype.getConfig = function () {
        return {
            minValue: this.minValue,
            maxValue: this.maxValue,
            rate: this.rate,
            axis: this.axis
        };
    };
    /** @nocollapse */
    MinMaxNorm.className = 'MinMaxNorm';
    return MinMaxNorm;
}(Constraint));
exports.MinMaxNorm = MinMaxNorm;
tfjs_core_1.serialization.registerClass(MinMaxNorm);
// Maps the JavaScript-like identifier keys to the corresponding registry
// symbols.
exports.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    'maxNorm': 'MaxNorm',
    'minMaxNorm': 'MinMaxNorm',
    'nonNeg': 'NonNeg',
    'unitNorm': 'UnitNorm'
};
function serializeConstraint(constraint) {
    return generic_utils_1.serializeKerasObject(constraint);
}
exports.serializeConstraint = serializeConstraint;
function deserializeConstraint(config, customObjects) {
    if (customObjects === void 0) { customObjects = {}; }
    return generic_utils_1.deserializeKerasObject(config, tfjs_core_1.serialization.SerializationMap.getMap().classNameMap, customObjects, 'constraint');
}
exports.deserializeConstraint = deserializeConstraint;
function getConstraint(identifier) {
    if (identifier == null) {
        return null;
    }
    if (typeof identifier === 'string') {
        var className = identifier in exports.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP ?
            exports.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] :
            identifier;
        var config = { className: className, config: {} };
        return deserializeConstraint(config);
    }
    else if (identifier instanceof Constraint) {
        return identifier;
    }
    else {
        return deserializeConstraint(identifier);
    }
}
exports.getConstraint = getConstraint;
//# sourceMappingURL=constraints.js.map
}, function(modId) { var map = {"./backend/common":1553229508425,"./backend/state":1553229508426,"./utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508425, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var _epsilon;
/**
 * Returns the value of the fuzz factor used in numeric expressions.
 */
function epsilon() {
    if (_epsilon == null) {
        _epsilon = tfjs_core_1.ENV.get('EPSILON');
    }
    return _epsilon;
}
exports.epsilon = epsilon;
/**
 * Sets the value of the fuzz factor used in numeric expressions.
 * @param e New value of epsilon.
 */
function setEpsilon(e) {
    _epsilon = e;
}
exports.setEpsilon = setEpsilon;
/**
 * Returns the default image data format convention.
 */
function imageDataFormat() {
    return 'channelsLast';
}
exports.imageDataFormat = imageDataFormat;
//# sourceMappingURL=common.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508426, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utilities related to persistent state in the backend.
 */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
/**
 * An ID to track `tf.SymbolicTensor`s and derived classes.
 * Required in different places in engine/topology.ts to identify unique
 * tensors.
 */
var _nextUniqueTensorId = 0;
function getNextUniqueTensorId() {
    return _nextUniqueTensorId++;
}
exports.getNextUniqueTensorId = getNextUniqueTensorId;
var _uidPrefixes = {};
/**
 * Provides a unique UID given a string prefix.
 *
 * @param prefix
 */
function getUid(prefix) {
    if (prefix === void 0) { prefix = ''; }
    if (!(prefix in _uidPrefixes)) {
        _uidPrefixes[prefix] = 0;
    }
    _uidPrefixes[prefix] += 1;
    return prefix + _uidPrefixes[prefix].toString();
}
exports.getUid = getUid;
var scalarCache = {};
var DEFAULT_DTYPE = 'float32';
/**
 * Get scalar, with caching.
 */
function getScalar(value, dtype) {
    if (dtype === undefined) {
        dtype = DEFAULT_DTYPE;
    }
    if (scalarCache[dtype] == null) {
        scalarCache[dtype] = {};
    }
    if (scalarCache[dtype][value] == null) {
        scalarCache[dtype][value] = tfjs_core_1.scalar(value, dtype);
        tfjs_core_1.keep(scalarCache[dtype][value]);
    }
    return scalarCache[dtype][value];
}
exports.getScalar = getScalar;
function disposeScalarCache() {
    for (var typeKey in scalarCache) {
        for (var key in scalarCache[typeKey]) {
            scalarCache[typeKey][key].dispose();
            delete scalarCache[typeKey][key];
        }
    }
}
exports.disposeScalarCache = disposeScalarCache;
//# sourceMappingURL=state.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508427, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Original source: utils/generic_utils.py */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var errors_1 = require("../errors");
// tslint:enable
/**
 * If `value` is an Array, equivalent to Python's `value * numValues`.
 * If `value` is not an Array, equivalent to Python's `[value] * numValues`
 */
// tslint:disable-next-line:no-any
function pyListRepeat(value, numValues) {
    if (Array.isArray(value)) {
        // tslint:disable-next-line:no-any
        var newArray = [];
        for (var i = 0; i < numValues; i++) {
            newArray = newArray.concat(value);
        }
        return newArray;
    }
    else {
        var newArray = new Array(numValues);
        newArray.fill(value);
        return newArray;
    }
}
exports.pyListRepeat = pyListRepeat;
function assert(val, message) {
    if (!val) {
        throw new errors_1.AssertionError(message);
    }
}
exports.assert = assert;
/**
 * Count the number of elements of the `array` that are equal to `reference`.
 */
function count(array, refernce) {
    var counter = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (item === refernce) {
            counter++;
        }
    }
    return counter;
}
exports.count = count;
/**
 * If an array is of length 1, just return the first element. Otherwise, return
 * the full array.
 * @param tensors
 */
function singletonOrArray(xs) {
    if (xs.length === 1) {
        return xs[0];
    }
    return xs;
}
exports.singletonOrArray = singletonOrArray;
/**
 * Normalizes a list/tensor into a list.
 *
 * If a tensor is passed, we return
 * a list of size 1 containing the tensor.
 *
 * @param x target object to be normalized.
 */
// tslint:disable-next-line:no-any
function toList(x) {
    if (Array.isArray(x)) {
        return x;
    }
    return [x];
}
exports.toList = toList;
/**
 * Generate a UID for a list
 */
// tslint:disable-next-line:no-any
function objectListUid(objs) {
    var objectList = toList(objs);
    var retVal = '';
    for (var _i = 0, objectList_1 = objectList; _i < objectList_1.length; _i++) {
        var obj = objectList_1[_i];
        if (obj.id == null) {
            throw new errors_1.ValueError("Object " + obj + " passed to objectListUid without an id");
        }
        if (retVal !== '') {
            retVal = retVal + ', ';
        }
        retVal = retVal + Math.abs(obj.id);
    }
    return retVal;
}
exports.objectListUid = objectListUid;
/**
 * Converts string to snake-case.
 * @param name
 */
function toSnakeCase(name) {
    var intermediate = name.replace(/(.)([A-Z][a-z0-9]+)/g, '$1_$2');
    var insecure = intermediate.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    /*
     If the class is private the name starts with "_" which is not secure
     for creating scopes. We prefix the name with "private" in this case.
     */
    if (insecure[0] !== '_') {
        return insecure;
    }
    return 'private' + insecure;
}
exports.toSnakeCase = toSnakeCase;
function toCamelCase(identifier) {
    // quick return for empty string or single character strings
    if (identifier.length <= 1) {
        return identifier;
    }
    // Check for the underscore indicating snake_case
    if (identifier.indexOf('_') === -1) {
        return identifier;
    }
    return identifier.replace(/[_]+(\w|$)/g, function (m, p1) { return p1.toUpperCase(); });
}
exports.toCamelCase = toCamelCase;
// tslint:disable-next-line:no-any
var _GLOBAL_CUSTOM_OBJECTS = {};
function serializeKerasObject(instance) {
    if (instance === null || instance === undefined) {
        return null;
    }
    var dict = {};
    dict.className = instance.getClassName();
    dict.config = instance.getConfig();
    return dict;
}
exports.serializeKerasObject = serializeKerasObject;
/**
 * Replace ndarray-style scalar objects in serialization objects with numbers.
 *
 * Background: In some versions of tf.keras, certain scalar values in the HDF5
 * model save file can be serialized as: `{'type': 'ndarray', 'value': num}`,
 * where in `num` is a plain number. This method converts such serialization
 * to a `number`.
 *
 * @param config The keras-format serialization object to be processed
 *   (in place).
 */
function convertNDArrayScalarsInConfig(config) {
    if (config == null || typeof config !== 'object') {
        return;
    }
    else if (Array.isArray(config)) {
        config.forEach(function (configItem) { return convertNDArrayScalarsInConfig(configItem); });
    }
    else {
        var fields = Object.keys(config);
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            var value = config[field];
            if (value != null && typeof value === 'object') {
                if (!Array.isArray(value) && value['type'] === 'ndarray' &&
                    typeof value['value'] === 'number') {
                    config[field] = value['value'];
                }
                else {
                    convertNDArrayScalarsInConfig(value);
                }
            }
        }
    }
}
/**
 * Deserialize a saved Keras Object
 * @param identifier either a string ID or a saved Keras dictionary
 * @param moduleObjects a list of Python class names to object constructors
 * @param customObjects a list of Python class names to object constructors
 * @param printableModuleName debug text for the object being reconstituted
 * @param fastWeightInit Optional flag to use fast weight initialization
 *   during deserialization. This is applicable to cases in which
 *   the initialization will be immediately overwritten by loaded weight
 *   values. Default: `false`.
 * @returns a TensorFlow.js Layers object
 */
// tslint:disable:no-any
function deserializeKerasObject(identifier, moduleObjects, customObjects, printableModuleName, fastWeightInit) {
    if (moduleObjects === void 0) { moduleObjects = {}; }
    if (customObjects === void 0) { customObjects = {}; }
    if (printableModuleName === void 0) { printableModuleName = 'object'; }
    if (fastWeightInit === void 0) { fastWeightInit = false; }
    var _a, _b, _c;
    // tslint:enable
    if (typeof identifier === 'string') {
        var functionName = identifier;
        var fn = void 0;
        if (functionName in customObjects) {
            fn = customObjects[functionName];
        }
        else if (functionName in _GLOBAL_CUSTOM_OBJECTS) {
            fn = _GLOBAL_CUSTOM_OBJECTS[functionName];
        }
        else {
            fn = moduleObjects[functionName];
            if (fn == null) {
                throw new errors_1.ValueError("Unknown " + printableModuleName + ": " + identifier + ". " +
                    "This may be due to one of the following reasons:\n" +
                    ("1. The " + printableModuleName + " is defined in Python, in which ") +
                    "case it needs to be ported to TensorFlow.js or your JavaScript " +
                    "code.\n" +
                    ("2. The custom " + printableModuleName + " is defined in JavaScript, ") +
                    "but is not registered properly with " +
                    "tf.serialization.registerClass().");
                // TODO(cais): Add link to tutorial page on custom layers.
            }
        }
        return fn;
    }
    else {
        // In this case we are dealing with a Keras config dictionary.
        var config = identifier;
        if (config.className == null || config.config == null) {
            throw new errors_1.ValueError(printableModuleName + ": Improper config format: " +
                (JSON.stringify(config) + ".\n") +
                "'className' and 'config' must set.");
        }
        var className = config.className;
        var cls = void 0, fromConfig = void 0;
        if (className in customObjects) {
            _a = customObjects.get(className), cls = _a[0], fromConfig = _a[1];
        }
        else if (className in _GLOBAL_CUSTOM_OBJECTS) {
            _b = _GLOBAL_CUSTOM_OBJECTS.className, cls = _b[0], fromConfig = _b[1];
        }
        else if (className in moduleObjects) {
            _c = moduleObjects[className], cls = _c[0], fromConfig = _c[1];
        }
        if (cls == null) {
            throw new errors_1.ValueError("Unknown " + printableModuleName + ": " + className + ". " +
                "This may be due to one of the following reasons:\n" +
                ("1. The " + printableModuleName + " is defined in Python, in which ") +
                "case it needs to be ported to TensorFlow.js or your JavaScript " +
                "code.\n" +
                ("2. The custom " + printableModuleName + " is defined in JavaScript, ") +
                "but is not registered properly with " +
                "tf.serialization.registerClass().");
            // TODO(cais): Add link to tutorial page on custom layers.
        }
        if (fromConfig != null) {
            // Porting notes: Instead of checking to see whether fromConfig accepts
            // customObjects, we create a customObjects dictionary and tack it on to
            // config.config as config.config.customObjects. Objects can use it, if
            // they want.
            // tslint:disable-next-line:no-any
            var customObjectsCombined = {};
            for (var _i = 0, _d = Object.keys(_GLOBAL_CUSTOM_OBJECTS); _i < _d.length; _i++) {
                var key = _d[_i];
                customObjectsCombined[key] = _GLOBAL_CUSTOM_OBJECTS[key];
            }
            for (var _e = 0, _f = Object.keys(customObjects); _e < _f.length; _e++) {
                var key = _f[_e];
                customObjectsCombined[key] = customObjects[key];
            }
            // Add the customObjects to config
            var nestedConfig = config.config;
            nestedConfig.customObjects = customObjectsCombined;
            var backupCustomObjects = __assign({}, _GLOBAL_CUSTOM_OBJECTS);
            for (var _g = 0, _h = Object.keys(customObjects); _g < _h.length; _g++) {
                var key = _h[_g];
                _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
            }
            convertNDArrayScalarsInConfig(config.config);
            var returnObj = fromConfig(cls, config.config, customObjects, fastWeightInit);
            _GLOBAL_CUSTOM_OBJECTS = __assign({}, backupCustomObjects);
            return returnObj;
        }
        else {
            // Then `cls` may be a function returning a class.
            // In this case by convention `config` holds
            // the kwargs of the function.
            var backupCustomObjects = __assign({}, _GLOBAL_CUSTOM_OBJECTS);
            for (var _j = 0, _k = Object.keys(customObjects); _j < _k.length; _j++) {
                var key = _k[_j];
                _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
            }
            // In python this is **config['config'], for tfjs-layers we require
            // classes that use this fall-through construction method to take
            // a config interface that mimics the expansion of named parameters.
            var returnObj = new cls(config.config);
            _GLOBAL_CUSTOM_OBJECTS = __assign({}, backupCustomObjects);
            return returnObj;
        }
    }
}
exports.deserializeKerasObject = deserializeKerasObject;
/**
 * Compares two numbers for sorting.
 * @param a
 * @param b
 */
function numberCompare(a, b) {
    return (a < b) ? -1 : ((a > b) ? 1 : 0);
}
exports.numberCompare = numberCompare;
/**
 * Comparison of two numbers for reverse sorting.
 * @param a
 * @param b
 */
function reverseNumberCompare(a, b) {
    return -1 * numberCompare(a, b);
}
exports.reverseNumberCompare = reverseNumberCompare;
/**
 * Convert a string into the corresponding DType.
 * @param dtype
 * @returns An instance of DType.
 */
function stringToDType(dtype) {
    switch (dtype) {
        case 'float32':
            return 'float32';
        default:
            throw new errors_1.ValueError("Invalid dtype: " + dtype);
    }
}
exports.stringToDType = stringToDType;
/**
 * Test the element-by-element equality of two Arrays of strings.
 * @param xs First array of strings.
 * @param ys Second array of strings.
 * @returns Wether the two arrays are all equal, element by element.
 */
function stringsEqual(xs, ys) {
    if (xs == null || ys == null) {
        return xs === ys;
    }
    if (xs.length !== ys.length) {
        return false;
    }
    for (var i = 0; i < xs.length; ++i) {
        if (xs[i] !== ys[i]) {
            return false;
        }
    }
    return true;
}
exports.stringsEqual = stringsEqual;
/**
 * Get the unique elements of an array.
 * @param xs Array.
 * @returns An Array consisting of the unique elements in `xs`.
 */
function unique(xs) {
    if (xs == null) {
        return xs;
    }
    var out = [];
    // TODO(cais): Maybe improve performance by sorting.
    for (var _i = 0, xs_1 = xs; _i < xs_1.length; _i++) {
        var x = xs_1[_i];
        if (out.indexOf(x) === -1) {
            out.push(x);
        }
    }
    return out;
}
exports.unique = unique;
/**
 * Determine if an Object is empty (i.e., does not have own properties).
 * @param obj Object
 * @returns Whether the Object is empty.
 * @throws ValueError: If object is `null` or `undefined`.
 */
function isObjectEmpty(obj) {
    if (obj == null) {
        throw new errors_1.ValueError("Invalid value in obj: " + JSON.stringify(obj));
    }
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
exports.isObjectEmpty = isObjectEmpty;
/**
 * Helper function used to build type union/enum run-time checkers.
 * @param values The list of allowed values.
 * @param label A string name for the type
 * @param value The value to test.
 * @throws ValueError: If the value is not in values nor `undefined`/`null`.
 */
function checkStringTypeUnionValue(values, label, value) {
    if (value == null) {
        return;
    }
    if (values.indexOf(value) < 0) {
        throw new errors_1.ValueError(value + " is not a valid " + label + ".  Valid values are " + values + " or null/undefined.");
    }
}
exports.checkStringTypeUnionValue = checkStringTypeUnionValue;
/**
 * Helper function for verifying the types of inputs.
 *
 * Ensures that the elements of `x` are all of type `expectedType`.
 * Also verifies that the length of `x` is within bounds.
 *
 * @param x Object to test.
 * @param expectedType The string expected type of all of the elements in the
 * Array.
 * @param minLength Return false if x.length is less than this.
 * @param maxLength Return false if x.length is greater than this.
 * @returns true if and only if `x` is an `Array<expectedType>` with
 * length >= `minLength` and <= `maxLength`.
 */
// tslint:disable:no-any
function checkArrayTypeAndLength(x, expectedType, minLength, maxLength) {
    if (minLength === void 0) { minLength = 0; }
    if (maxLength === void 0) { maxLength = Infinity; }
    assert(minLength >= 0);
    assert(maxLength >= minLength);
    return (Array.isArray(x) && x.length >= minLength && x.length <= maxLength &&
        x.every(function (e) { return typeof e === expectedType; }));
}
exports.checkArrayTypeAndLength = checkArrayTypeAndLength;
// tslint:enable:no-any
/**
 * Assert that a value or an array of value are positive integer.
 *
 * @param value The value being asserted on. May be a single number or an array
 *   of numbers.
 * @param name Name of the value, used to make the error message.
 */
function assertPositiveInteger(value, name) {
    if (Array.isArray(value)) {
        tfjs_core_1.util.assert(value.length > 0, function () { return name + " is unexpectedly an empty array."; });
        value.forEach(function (v, i) { return assertPositiveInteger(v, "element " + (i + 1) + " of " + name); });
    }
    else {
        tfjs_core_1.util.assert(Number.isInteger(value) && value > 0, function () { return "Expected " + name + " to be a positive integer, but got " +
            (formatAsFriendlyString(value) + "."); });
    }
}
exports.assertPositiveInteger = assertPositiveInteger;
/**
 * Format a value into a display-friendly, human-readable fashion.
 *
 * - `null` is formatted as `'null'`
 * - Strings are formated with flanking pair of quotes.
 * - Arrays are formatted with flanking pair of square brackets.
 *
 * @param value The value to display.
 * @return Formatted string.
 */
// tslint:disable-next-line:no-any
function formatAsFriendlyString(value) {
    if (value === null) {
        return 'null';
    }
    else if (Array.isArray(value)) {
        return '[' + value.map(function (v) { return formatAsFriendlyString(v); }).join(',') + ']';
    }
    else if (typeof value === 'string') {
        return "\"" + value + "\"";
    }
    else {
        return "" + value;
    }
}
exports.formatAsFriendlyString = formatAsFriendlyString;
//# sourceMappingURL=generic_utils.js.map
}, function(modId) { var map = {"../errors":1553229508428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508428, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Explicit error types.
 *
 * See the following link for more information about why the code includes
 * calls to setPrototypeOf:
 *
 * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
// tslint:enable
/**
 * Equivalent of Python's AttributeError.
 */
var AttributeError = /** @class */ (function (_super) {
    __extends(AttributeError, _super);
    function AttributeError(message) {
        var _this = _super.call(this, message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, AttributeError.prototype);
        return _this;
    }
    return AttributeError;
}(Error));
exports.AttributeError = AttributeError;
/**
 * Equivalent of Python's RuntimeError.
 */
var RuntimeError = /** @class */ (function (_super) {
    __extends(RuntimeError, _super);
    function RuntimeError(message) {
        var _this = _super.call(this, message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, RuntimeError.prototype);
        return _this;
    }
    return RuntimeError;
}(Error));
exports.RuntimeError = RuntimeError;
/**
 * Equivalent of Python's ValueError.
 */
var ValueError = /** @class */ (function (_super) {
    __extends(ValueError, _super);
    function ValueError(message) {
        var _this = _super.call(this, message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, ValueError.prototype);
        return _this;
    }
    return ValueError;
}(Error));
exports.ValueError = ValueError;
/**
 * Equivalent of Python's NotImplementedError.
 */
var NotImplementedError = /** @class */ (function (_super) {
    __extends(NotImplementedError, _super);
    function NotImplementedError(message) {
        var _this = _super.call(this, message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, NotImplementedError.prototype);
        return _this;
    }
    return NotImplementedError;
}(Error));
exports.NotImplementedError = NotImplementedError;
/**
 * Equivalent of Python's AssertionError.
 */
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(message) {
        var _this = _super.call(this, message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, AssertionError.prototype);
        return _this;
    }
    return AssertionError;
}(Error));
exports.AssertionError = AssertionError;
/**
 * Equivalent of Python's IndexError.
 */
var IndexError = /** @class */ (function (_super) {
    __extends(IndexError, _super);
    function IndexError(message) {
        var _this = _super.call(this, message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, IndexError.prototype);
        return _this;
    }
    return IndexError;
}(Error));
exports.IndexError = IndexError;
//# sourceMappingURL=errors.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508429, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
// tslint:disable-next-line:max-line-length
var initializers_1 = require("./initializers");
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'Zeros'
 * }
 */
function zeros() {
    return new initializers_1.Zeros();
}
exports.zeros = zeros;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'Ones'
 * }
 */
function ones() {
    return new initializers_1.Ones();
}
exports.ones = ones;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'Constant'
 * }
 */
function constant(args) {
    return new initializers_1.Constant(args);
}
exports.constant = constant;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'RandomUniform'
 * }
 */
function randomUniform(args) {
    return new initializers_1.RandomUniform(args);
}
exports.randomUniform = randomUniform;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'RandomNormal'
 * }
 */
function randomNormal(args) {
    return new initializers_1.RandomNormal(args);
}
exports.randomNormal = randomNormal;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'TruncatedNormal'
 * }
 */
function truncatedNormal(args) {
    return new initializers_1.TruncatedNormal(args);
}
exports.truncatedNormal = truncatedNormal;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'Identity'
 * }
 */
function identity(args) {
    return new initializers_1.Identity(args);
}
exports.identity = identity;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'VarianceScaling'
 * }
 */
function varianceScaling(config) {
    return new initializers_1.VarianceScaling(config);
}
exports.varianceScaling = varianceScaling;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'GlorotUniform'
 * }
 */
function glorotUniform(args) {
    return new initializers_1.GlorotUniform(args);
}
exports.glorotUniform = glorotUniform;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'GlorotNormal'
 * }
 */
function glorotNormal(args) {
    return new initializers_1.GlorotNormal(args);
}
exports.glorotNormal = glorotNormal;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'HeNormal'
 * }
 */
function heNormal(args) {
    return new initializers_1.HeNormal(args);
}
exports.heNormal = heNormal;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'HeUniform'
 * }
 */
function heUniform(args) {
    return new initializers_1.HeUniform(args);
}
exports.heUniform = heUniform;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'LeCunNormal'
 * }
 */
function leCunNormal(args) {
    return new initializers_1.LeCunNormal(args);
}
exports.leCunNormal = leCunNormal;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'LeCunUniform'
 * }
 */
function leCunUniform(args) {
    return new initializers_1.LeCunUniform(args);
}
exports.leCunUniform = leCunUniform;
/**
 * @doc {
 *   heading: 'Initializers',
 *   namespace: 'initializers',
 *   useDocsFrom: 'Orthogonal'
 * }
 */
function orthogonal(args) {
    return new initializers_1.Orthogonal(args);
}
exports.orthogonal = orthogonal;
//# sourceMappingURL=exports_initializers.js.map
}, function(modId) { var map = {"./initializers":1553229508430}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508430, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("./backend/state");
var K = require("./backend/tfjs_backend");
var common_1 = require("./common");
var errors_1 = require("./errors");
var initializer_config_1 = require("./keras_format/initializer_config");
var generic_utils_1 = require("./utils/generic_utils");
var math_utils_1 = require("./utils/math_utils");
function checkFanMode(value) {
    generic_utils_1.checkStringTypeUnionValue(initializer_config_1.VALID_FAN_MODE_VALUES, 'FanMode', value);
}
exports.checkFanMode = checkFanMode;
function checkDistribution(value) {
    generic_utils_1.checkStringTypeUnionValue(initializer_config_1.VALID_DISTRIBUTION_VALUES, 'Distribution', value);
}
exports.checkDistribution = checkDistribution;
/**
 * Initializer base class.
 *
 * @doc {
 *   heading: 'Initializers', subheading: 'Classes', namespace: 'initializers'}
 */
var Initializer = /** @class */ (function (_super) {
    __extends(Initializer, _super);
    function Initializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Initializer.prototype.fromConfigUsesCustomObjects = function () {
        return false;
    };
    Initializer.prototype.getConfig = function () {
        return {};
    };
    return Initializer;
}(tfjs_core_1.serialization.Serializable));
exports.Initializer = Initializer;
/**
 * Initializer that generates tensors initialized to 0.
 */
var Zeros = /** @class */ (function (_super) {
    __extends(Zeros, _super);
    function Zeros() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zeros.prototype.apply = function (shape, dtype) {
        return tfjs_core_1.zeros(shape, dtype);
    };
    /** @nocollapse */
    Zeros.className = 'Zeros';
    return Zeros;
}(Initializer));
exports.Zeros = Zeros;
tfjs_core_1.serialization.registerClass(Zeros);
/**
 * Initializer that generates tensors initialized to 1.
 */
var Ones = /** @class */ (function (_super) {
    __extends(Ones, _super);
    function Ones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ones.prototype.apply = function (shape, dtype) {
        return tfjs_core_1.ones(shape, dtype);
    };
    /** @nocollapse */
    Ones.className = 'Ones';
    return Ones;
}(Initializer));
exports.Ones = Ones;
tfjs_core_1.serialization.registerClass(Ones);
/**
 * Initializer that generates values initialized to some constant.
 */
var Constant = /** @class */ (function (_super) {
    __extends(Constant, _super);
    function Constant(args) {
        var _this = _super.call(this) || this;
        if (typeof args !== 'object') {
            throw new errors_1.ValueError("Expected argument of type ConstantConfig but got " + args);
        }
        if (args.value === undefined) {
            throw new errors_1.ValueError("config must have value set but got " + args);
        }
        _this.value = args.value;
        return _this;
    }
    Constant.prototype.apply = function (shape, dtype) {
        var _this = this;
        return tfjs_core_1.tidy(function () { return tfjs_core_1.mul(tfjs_core_1.scalar(_this.value), tfjs_core_1.ones(shape, dtype)); });
    };
    Constant.prototype.getConfig = function () {
        return {
            value: this.value,
        };
    };
    /** @nocollapse */
    Constant.className = 'Constant';
    return Constant;
}(Initializer));
exports.Constant = Constant;
tfjs_core_1.serialization.registerClass(Constant);
/**
 * Initializer that generates random values initialized to a uniform
 * distribution.
 *
 * Values will be distributed uniformly between the configured minval and
 * maxval.
 */
var RandomUniform = /** @class */ (function (_super) {
    __extends(RandomUniform, _super);
    function RandomUniform(args) {
        var _this = _super.call(this) || this;
        _this.DEFAULT_MINVAL = -0.05;
        _this.DEFAULT_MAXVAL = 0.05;
        _this.minval = args.minval || _this.DEFAULT_MINVAL;
        _this.maxval = args.maxval || _this.DEFAULT_MAXVAL;
        _this.seed = args.seed;
        return _this;
    }
    RandomUniform.prototype.apply = function (shape, dtype) {
        return tfjs_core_1.randomUniform(shape, this.minval, this.maxval, dtype);
    };
    RandomUniform.prototype.getConfig = function () {
        return { minval: this.minval, maxval: this.maxval, seed: this.seed };
    };
    /** @nocollapse */
    RandomUniform.className = 'RandomUniform';
    return RandomUniform;
}(Initializer));
exports.RandomUniform = RandomUniform;
tfjs_core_1.serialization.registerClass(RandomUniform);
/**
 * Initializer that generates random values initialized to a normal
 * distribution.
 */
var RandomNormal = /** @class */ (function (_super) {
    __extends(RandomNormal, _super);
    function RandomNormal(args) {
        var _this = _super.call(this) || this;
        _this.DEFAULT_MEAN = 0.;
        _this.DEFAULT_STDDEV = 0.05;
        _this.mean = args.mean || _this.DEFAULT_MEAN;
        _this.stddev = args.stddev || _this.DEFAULT_STDDEV;
        _this.seed = args.seed;
        return _this;
    }
    RandomNormal.prototype.apply = function (shape, dtype) {
        dtype = dtype || 'float32';
        if (dtype !== 'float32' && dtype !== 'int32') {
            throw new errors_1.NotImplementedError("randomNormal does not support dType " + dtype + ".");
        }
        return K.randomNormal(shape, this.mean, this.stddev, dtype, this.seed);
    };
    RandomNormal.prototype.getConfig = function () {
        return { mean: this.mean, stddev: this.stddev, seed: this.seed };
    };
    /** @nocollapse */
    RandomNormal.className = 'RandomNormal';
    return RandomNormal;
}(Initializer));
exports.RandomNormal = RandomNormal;
tfjs_core_1.serialization.registerClass(RandomNormal);
/**
 * Initializer that generates random values initialized to a truncated normal.
 * distribution.
 *
 * These values are similar to values from a `RandomNormal` except that values
 * more than two standard deviations from the mean are discarded and re-drawn.
 * This is the recommended initializer for neural network weights and filters.
 */
var TruncatedNormal = /** @class */ (function (_super) {
    __extends(TruncatedNormal, _super);
    function TruncatedNormal(args) {
        var _this = _super.call(this) || this;
        _this.DEFAULT_MEAN = 0.;
        _this.DEFAULT_STDDEV = 0.05;
        _this.mean = args.mean || _this.DEFAULT_MEAN;
        _this.stddev = args.stddev || _this.DEFAULT_STDDEV;
        _this.seed = args.seed;
        return _this;
    }
    TruncatedNormal.prototype.apply = function (shape, dtype) {
        dtype = dtype || 'float32';
        if (dtype !== 'float32' && dtype !== 'int32') {
            throw new errors_1.NotImplementedError("truncatedNormal does not support dType " + dtype + ".");
        }
        return tfjs_core_1.truncatedNormal(shape, this.mean, this.stddev, dtype, this.seed);
    };
    TruncatedNormal.prototype.getConfig = function () {
        return { mean: this.mean, stddev: this.stddev, seed: this.seed };
    };
    /** @nocollapse */
    TruncatedNormal.className = 'TruncatedNormal';
    return TruncatedNormal;
}(Initializer));
exports.TruncatedNormal = TruncatedNormal;
tfjs_core_1.serialization.registerClass(TruncatedNormal);
/**
 * Initializer that generates the identity matrix.
 * Only use for square 2D matrices.
 */
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    function Identity(args) {
        var _this = _super.call(this) || this;
        _this.gain = args.gain != null ? tfjs_core_1.scalar(args.gain) : state_1.getScalar(1.0);
        return _this;
    }
    Identity.prototype.apply = function (shape, dtype) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (shape.length !== 2 || shape[0] !== shape[1]) {
                throw new errors_1.ValueError('Identity matrix initializer can only be used for' +
                    ' 2D square matrices.');
            }
            else {
                return tfjs_core_1.mul(_this.gain, tfjs_core_1.eye(shape[0]));
            }
        });
    };
    Identity.prototype.getConfig = function () {
        return { gain: this.gain.dataSync()[0] };
    };
    /** @nocollapse */
    Identity.className = 'Identity';
    return Identity;
}(Initializer));
exports.Identity = Identity;
tfjs_core_1.serialization.registerClass(Identity);
/**
 * Computes the number of input and output units for a weight shape.
 * @param shape Shape of weight.
 * @param dataFormat data format to use for convolution kernels.
 *   Note that all kernels in Keras are standardized on the
 *   CHANNEL_LAST ordering (even when inputs are set to CHANNEL_FIRST).
 * @return An length-2 array: fanIn, fanOut.
 */
function computeFans(shape, dataFormat) {
    if (dataFormat === void 0) { dataFormat = 'channelsLast'; }
    var fanIn;
    var fanOut;
    common_1.checkDataFormat(dataFormat);
    if (shape.length === 2) {
        fanIn = shape[0];
        fanOut = shape[1];
    }
    else if ([3, 4, 5].indexOf(shape.length) !== -1) {
        if (dataFormat === 'channelsFirst') {
            var receptiveFieldSize = math_utils_1.arrayProd(shape, 2);
            fanIn = shape[1] * receptiveFieldSize;
            fanOut = shape[0] * receptiveFieldSize;
        }
        else if (dataFormat === 'channelsLast') {
            var receptiveFieldSize = math_utils_1.arrayProd(shape, 0, shape.length - 2);
            fanIn = shape[shape.length - 2] * receptiveFieldSize;
            fanOut = shape[shape.length - 1] * receptiveFieldSize;
        }
    }
    else {
        var shapeProd = math_utils_1.arrayProd(shape);
        fanIn = Math.sqrt(shapeProd);
        fanOut = Math.sqrt(shapeProd);
    }
    return [fanIn, fanOut];
}
/**
 * Initializer capable of adapting its scale to the shape of weights.
 * With distribution=NORMAL, samples are drawn from a truncated normal
 * distribution centered on zero, with `stddev = sqrt(scale / n)` where n is:
 *   - number of input units in the weight tensor, if mode = FAN_IN.
 *   - number of output units, if mode = FAN_OUT.
 *   - average of the numbers of input and output units, if mode = FAN_AVG.
 * With distribution=UNIFORM,
 * samples are drawn from a uniform distribution
 * within [-limit, limit], with `limit = sqrt(3 * scale / n)`.
 */
var VarianceScaling = /** @class */ (function (_super) {
    __extends(VarianceScaling, _super);
    /**
     * Constructor of VarianceScaling.
     * @throws ValueError for invalid value in scale.
     */
    function VarianceScaling(args) {
        var _this = _super.call(this) || this;
        if (args.scale < 0.0) {
            throw new errors_1.ValueError("scale must be a positive float. Got: " + args.scale);
        }
        _this.scale = args.scale == null ? 1.0 : args.scale;
        _this.mode = args.mode;
        checkFanMode(_this.mode);
        _this.distribution = args.distribution;
        checkDistribution(_this.distribution);
        _this.seed = args.seed;
        return _this;
    }
    VarianceScaling.prototype.apply = function (shape, dtype) {
        var fans = computeFans(shape);
        var fanIn = fans[0];
        var fanOut = fans[1];
        var scale = this.scale;
        if (this.mode === 'fanIn') {
            scale /= Math.max(1, fanIn);
        }
        else if (this.mode === 'fanOut') {
            scale /= Math.max(1, fanOut);
        }
        else {
            scale /= Math.max(1, (fanIn + fanOut) / 2);
        }
        if (this.distribution === 'normal') {
            var stddev = Math.sqrt(scale);
            dtype = dtype || 'float32';
            if (dtype !== 'float32' && dtype !== 'int32') {
                throw new errors_1.NotImplementedError(this.getClassName() + " does not support dType " + dtype + ".");
            }
            return tfjs_core_1.truncatedNormal(shape, 0, stddev, dtype, this.seed);
        }
        else {
            var limit = Math.sqrt(3 * scale);
            return tfjs_core_1.randomUniform(shape, -limit, limit, dtype);
        }
    };
    VarianceScaling.prototype.getConfig = function () {
        return {
            scale: this.scale,
            mode: this.mode,
            distribution: this.distribution,
            seed: this.seed
        };
    };
    /** @nocollapse */
    VarianceScaling.className = 'VarianceScaling';
    return VarianceScaling;
}(Initializer));
exports.VarianceScaling = VarianceScaling;
tfjs_core_1.serialization.registerClass(VarianceScaling);
/**
 * Glorot uniform initializer, also called Xavier uniform initializer.
 * It draws samples from a uniform distribution within [-limit, limit]
 * where `limit` is `sqrt(6 / (fan_in + fan_out))`
 * where `fan_in` is the number of input units in the weight tensor
 * and `fan_out` is the number of output units in the weight tensor
 *
 * Reference:
 *   Glorot & Bengio, AISTATS 2010
 *       http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf.
 */
var GlorotUniform = /** @class */ (function (_super) {
    __extends(GlorotUniform, _super);
    /**
     * Constructor of GlorotUniform
     * @param scale
     * @param mode
     * @param distribution
     * @param seed
     */
    function GlorotUniform(args) {
        return _super.call(this, {
            scale: 1.0,
            mode: 'fanAvg',
            distribution: 'uniform',
            seed: args == null ? null : args.seed
        }) || this;
    }
    GlorotUniform.prototype.getClassName = function () {
        // In Python Keras, GlorotUniform is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    };
    /** @nocollapse */
    GlorotUniform.className = 'GlorotUniform';
    return GlorotUniform;
}(VarianceScaling));
exports.GlorotUniform = GlorotUniform;
tfjs_core_1.serialization.registerClass(GlorotUniform);
/**
 * Glorot normal initializer, also called Xavier normal initializer.
 * It draws samples from a truncated normal distribution centered on 0
 * with `stddev = sqrt(2 / (fan_in + fan_out))`
 * where `fan_in` is the number of input units in the weight tensor
 * and `fan_out` is the number of output units in the weight tensor.
 *
 * Reference:
 *   Glorot & Bengio, AISTATS 2010
 *       http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf
 */
var GlorotNormal = /** @class */ (function (_super) {
    __extends(GlorotNormal, _super);
    /**
     * Constructor of GlorotNormal.
     * @param scale
     * @param mode
     * @param distribution
     * @param seed
     */
    function GlorotNormal(args) {
        return _super.call(this, {
            scale: 1.0,
            mode: 'fanAvg',
            distribution: 'normal',
            seed: args == null ? null : args.seed
        }) || this;
    }
    GlorotNormal.prototype.getClassName = function () {
        // In Python Keras, GlorotNormal is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    };
    /** @nocollapse */
    GlorotNormal.className = 'GlorotNormal';
    return GlorotNormal;
}(VarianceScaling));
exports.GlorotNormal = GlorotNormal;
tfjs_core_1.serialization.registerClass(GlorotNormal);
/**
 * He normal initializer.
 *
 * It draws samples from a truncated normal distribution centered on 0
 * with `stddev = sqrt(2 / fanIn)`
 * where `fanIn` is the number of input units in the weight tensor.
 *
 * Reference:
 *     He et al., http://arxiv.org/abs/1502.01852
 */
var HeNormal = /** @class */ (function (_super) {
    __extends(HeNormal, _super);
    function HeNormal(args) {
        return _super.call(this, {
            scale: 2.0,
            mode: 'fanIn',
            distribution: 'normal',
            seed: args == null ? null : args.seed
        }) || this;
    }
    HeNormal.prototype.getClassName = function () {
        // In Python Keras, HeNormal is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    };
    /** @nocollapse */
    HeNormal.className = 'HeNormal';
    return HeNormal;
}(VarianceScaling));
exports.HeNormal = HeNormal;
tfjs_core_1.serialization.registerClass(HeNormal);
/**
 * He uniform initializer.
 *
 * It draws samples from a uniform distribution within [-limit, limit]
 * where `limit` is `sqrt(6 / fan_in)`
 * where `fanIn` is the number of input units in the weight tensor.
 *
 * Reference:
 *     He et al., http://arxiv.org/abs/1502.01852
 */
var HeUniform = /** @class */ (function (_super) {
    __extends(HeUniform, _super);
    function HeUniform(args) {
        return _super.call(this, {
            scale: 2.0,
            mode: 'fanIn',
            distribution: 'uniform',
            seed: args == null ? null : args.seed
        }) || this;
    }
    HeUniform.prototype.getClassName = function () {
        // In Python Keras, HeUniform is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    };
    /** @nocollapse */
    HeUniform.className = 'HeUniform';
    return HeUniform;
}(VarianceScaling));
exports.HeUniform = HeUniform;
tfjs_core_1.serialization.registerClass(HeUniform);
/**
 * LeCun normal initializer.
 *
 * It draws samples from a truncated normal distribution centered on 0
 * with `stddev = sqrt(1 / fanIn)`
 * where `fanIn` is the number of input units in the weight tensor.
 *
 * References:
 *   [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
 *   [Efficient Backprop](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)
 */
var LeCunNormal = /** @class */ (function (_super) {
    __extends(LeCunNormal, _super);
    function LeCunNormal(args) {
        return _super.call(this, {
            scale: 1.0,
            mode: 'fanIn',
            distribution: 'normal',
            seed: args == null ? null : args.seed
        }) || this;
    }
    LeCunNormal.prototype.getClassName = function () {
        // In Python Keras, LeCunNormal is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    };
    /** @nocollapse */
    LeCunNormal.className = 'LeCunNormal';
    return LeCunNormal;
}(VarianceScaling));
exports.LeCunNormal = LeCunNormal;
tfjs_core_1.serialization.registerClass(LeCunNormal);
/**
 * LeCun uniform initializer.
 *
 * It draws samples from a uniform distribution in the interval
 * `[-limit, limit]` with `limit = sqrt(3 / fanIn)`,
 * where `fanIn` is the number of input units in the weight tensor.
 */
var LeCunUniform = /** @class */ (function (_super) {
    __extends(LeCunUniform, _super);
    function LeCunUniform(args) {
        return _super.call(this, {
            scale: 1.0,
            mode: 'fanIn',
            distribution: 'uniform',
            seed: args == null ? null : args.seed
        }) || this;
    }
    LeCunUniform.prototype.getClassName = function () {
        // In Python Keras, LeCunUniform is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    };
    /** @nocollapse */
    LeCunUniform.className = 'LeCunNormal';
    return LeCunUniform;
}(VarianceScaling));
exports.LeCunUniform = LeCunUniform;
tfjs_core_1.serialization.registerClass(LeCunUniform);
/**
 * Initializer that generates a random orthogonal matrix.
 *
 * Reference:
 * [Saxe et al., http://arxiv.org/abs/1312.6120](http://arxiv.org/abs/1312.6120)
 */
var Orthogonal = /** @class */ (function (_super) {
    __extends(Orthogonal, _super);
    function Orthogonal(args) {
        var _this = _super.call(this) || this;
        _this.DEFAULT_GAIN = 1;
        _this.gain = args.gain == null ? _this.DEFAULT_GAIN : args.gain;
        _this.seed = args.seed;
        if (_this.seed != null) {
            throw new errors_1.NotImplementedError('Random seed is not implemented for Orthogonal Initializer yet.');
        }
        return _this;
    }
    Orthogonal.prototype.apply = function (shape, dtype) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (shape.length !== 2) {
                throw new errors_1.NotImplementedError('The Orthogonal Initializer does not support non-2D shapes yet.');
            }
            if (shape[0] * shape[1] > 2000) {
                console.warn("Orthogonal initializer is being called on a matrix with more " +
                    ("than 2000 (" + shape[0] * shape[1] + ") elements: ") +
                    "Slowness may result.");
            }
            // TODO(cais): Add seed support.
            var normalizedShape = shape[0] > shape[1] ? [shape[1], shape[0]] : shape;
            var a = K.randomNormal(normalizedShape, 0, 1, 'float32');
            var q = tfjs_core_1.linalg.gramSchmidt(a);
            if (shape[0] > shape[1]) {
                q = q.transpose();
            }
            return tfjs_core_1.mul(state_1.getScalar(_this.gain), q);
        });
    };
    Orthogonal.prototype.getConfig = function () {
        return {
            gain: this.gain,
            seed: this.seed,
        };
    };
    /** @nocollapse */
    Orthogonal.className = 'Orthogonal';
    return Orthogonal;
}(Initializer));
exports.Orthogonal = Orthogonal;
tfjs_core_1.serialization.registerClass(Orthogonal);
// Maps the JavaScript-like identifier keys to the corresponding registry
// symbols.
exports.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    'constant': 'Constant',
    'glorotNormal': 'GlorotNormal',
    'glorotUniform': 'GlorotUniform',
    'heNormal': 'HeNormal',
    'heUniform': 'HeUniform',
    'identity': 'Identity',
    'leCunNormal': 'LeCunNormal',
    'leCunUniform': 'LeCunUniform',
    'ones': 'Ones',
    'orthogonal': 'Orthogonal',
    'randomNormal': 'RandomNormal',
    'randomUniform': 'RandomUniform',
    'truncatedNormal': 'TruncatedNormal',
    'varianceScaling': 'VarianceScaling',
    'zeros': 'Zeros'
};
function deserializeInitializer(config, customObjects) {
    if (customObjects === void 0) { customObjects = {}; }
    return generic_utils_1.deserializeKerasObject(config, tfjs_core_1.serialization.SerializationMap.getMap().classNameMap, customObjects, 'initializer');
}
function serializeInitializer(initializer) {
    return generic_utils_1.serializeKerasObject(initializer);
}
exports.serializeInitializer = serializeInitializer;
function getInitializer(identifier) {
    if (typeof identifier === 'string') {
        var className = identifier in exports.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ?
            exports.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] :
            identifier;
        /* We have four 'helper' classes for common initializers that
        all get serialized as 'VarianceScaling' and shouldn't go through
        the deserializeInitializer pathway. */
        if (className === 'GlorotNormal') {
            return new GlorotNormal();
        }
        else if (className === 'GlorotUniform') {
            return new GlorotUniform();
        }
        else if (className === 'HeNormal') {
            return new HeNormal();
        }
        else if (className === 'HeUniform') {
            return new HeUniform();
        }
        else if (className === 'LeCunNormal') {
            return new LeCunNormal();
        }
        else if (className === 'LeCunUniform') {
            return new LeCunUniform();
        }
        else {
            var config = {};
            config.className = className;
            config.config = {};
            return deserializeInitializer(config);
        }
    }
    else if (identifier instanceof Initializer) {
        return identifier;
    }
    else {
        return deserializeInitializer(identifier);
    }
}
exports.getInitializer = getInitializer;
//# sourceMappingURL=initializers.js.map
}, function(modId) { var map = {"./backend/state":1553229508426,"./backend/tfjs_backend":1553229508431,"./common":1553229508432,"./errors":1553229508428,"./keras_format/initializer_config":1553229508435,"./utils/generic_utils":1553229508427,"./utils/math_utils":1553229508434}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508431, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * deeplearn.js backend.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var common_1 = require("../common");
var errors_1 = require("../errors");
var math_utils = require("../utils/math_utils");
var common_2 = require("./common");
// tslint:enable
/* Setting and getting backend from deeplearn.js. */
// Default deeplearn.js backend is WebGL (GPU).
var backend = 'webgl';
function setBackend(requestedBackend) {
    tfc.setBackend(requestedBackend);
    backend = requestedBackend;
    state_1.disposeScalarCache();
}
exports.setBackend = setBackend;
function getBackend() {
    return backend;
}
exports.getBackend = getBackend;
/**
 * Indicates whether the backend is operating symbolically.
 *
 * This function will be used to determine how to interpret user code. If
 * it returns true, calls to the backend construct a symbolic graph; if
 * it returns false, calls to the backend execute immediately.
 */
function isBackendSymbolic() {
    return false;
}
exports.isBackendSymbolic = isBackendSymbolic;
/**
 * Get the number of elements in a Tensor.
 * @param x The Tensor.
 * @return Number of elements in `x`.
 */
function countParams(x) {
    var shape = x.shape;
    if (shape.length > 0) {
        return shape.reduce(function (a, b) { return a * b; });
    }
    else {
        // Scalar.
        return 1;
    }
}
exports.countParams = countParams;
/**
 * Casts a tensor to a different dtype and returns it.
 * @param x Input tensor.
 * @param dtype String: 'float32'|'int32'|'bool'.
 * @returns Tensor of the specified `dtype`.
 */
function cast(x, dtype) {
    return x.asType(dtype);
}
exports.cast = cast;
/**
 * Adds a 1-sized dimension at index "axis".
 * @param x Input tensor.
 * @param axis Position where to add the new axis.
 * @returns Result of the dimension expansion.
 */
function expandDims(x, axis) {
    if (axis === void 0) { axis = -1; }
    var outShape = x.shape.slice();
    if (axis < 0) {
        axis = outShape.length + axis + 1;
    }
    outShape.splice(axis, 0, 1);
    return x.reshape(outShape);
}
exports.expandDims = expandDims;
/**
 * Repeats a 2D tensor.
 *
 * If `x` has shape `[samples, dim]` and `n` is 2, for example, the output
 * will have shape `[samples, 2, dim]`.
 *
 * @param x Input tensor.
 * @param n Integer, number of times to repeat.
 * @returns The result of the repeat operation.
 * @throws ValueError: If input tensor is not 2D.
 */
function repeat(x, n) {
    return tfjs_core_1.tidy(function () {
        if (x.shape.length !== 2) {
            throw new errors_1.ValueError("repeat() expects a rank-2 tensor, but received a " +
                ("rank-" + x.shape.length + " tensor."));
        }
        var y = expandDims(x, 1);
        return tile(y, [1, n, 1]);
    });
}
exports.repeat = repeat;
/**
 * Flatten an Tensor into 1D.
 * @param x Input tensor.
 * @return The result of the flattening `x`.
 */
function flatten(x) {
    var newShape = [math_utils.arrayProd(x.shape)];
    return x.reshape(newShape);
}
exports.flatten = flatten;
/**
 * Turn a nD tensor into a 2D tensor with same 0th dimension.
 * In other words, it flattens each data samples of a batch.
 *
 * @param x The tensor to flatten. The rank of this tensor is required to be 2
 *   or higher.
 * @return The result of the flattening.
 */
function batchFlatten(x) {
    if (x.rank <= 1) {
        throw new errors_1.ValueError("batchFlatten requires a minimum rank of 2. Got rank: " + x.rank + ".");
    }
    var newShape = [x.shape[0], math_utils.arrayProd(x.shape, 1)];
    return x.reshape(newShape);
}
exports.batchFlatten = batchFlatten;
/**
 * Do slicing along the first axis.
 * @param array input `tf.Tensor`.
 * @param start starting index, inclusive.
 * @param size size of the slice along the first axis.
 * @returns result of the slicing.
 * @throws ValueError: If `array` is of an unsupported subtype of `tf.Tensor`.
 */
function sliceAlongFirstAxis(array, start, size) {
    return tfjs_core_1.tidy(function () {
        switch (array.rank) {
            case 1:
                return tfc.slice1d(array, start, size);
            case 2:
                return tfc.slice2d(array, [start, 0], [size, array.shape[1]]);
            case 3:
                return tfc.slice3d(array, [start, 0, 0], [size, array.shape[1], array.shape[2]]);
            case 4:
                return tfc.slice4d(array, [start, 0, 0, 0], [size, array.shape[1], array.shape[2], array.shape[3]]);
            default:
                throw new errors_1.ValueError("sliceAlongFirstAxis() received an unsupported tensor rank: " +
                    ("" + array.rank));
        }
    });
}
exports.sliceAlongFirstAxis = sliceAlongFirstAxis;
/**
 * Do slicing along the last axis.
 * @param array input `tf.Tensor`.
 * @param start starting index, inclusive.
 * @param size size of the slice along the last axis.
 * @returns result of the slicing.
 * @throws ValueError: If `array` is of an unsupported subtype of `tf.Tensor`.
 */
function sliceAlongLastAxis(array, start, size) {
    return tfjs_core_1.tidy(function () {
        switch (array.rank) {
            case 1:
                return tfc.slice1d(array, start, size);
            case 2:
                return tfc.slice2d(array, [0, start], [array.shape[0], size]);
            case 3:
                return tfc.slice3d(array, [0, 0, start], [array.shape[0], array.shape[1], size]);
            case 4:
                return tfc.slice4d(array, [0, 0, 0, start], [array.shape[0], array.shape[1], array.shape[2], size]);
            default:
                throw new errors_1.ValueError("sliceAlongLastAxis() received an unsupported tensor rank: " +
                    ("" + array.rank));
        }
    });
}
exports.sliceAlongLastAxis = sliceAlongLastAxis;
/**
 * Do slicing along the sepcified axis.
 * @param array input `tf.Tensor`.
 * @param start starting index, inclusive.
 * @param size of the slice along the chosen axis.
 * @param choose an axis.
 * @returns result of the slicing.
 * @throws ValueError: If `array` is of an unsupported subtype of `tf.Tensor`.
 */
function sliceAlongAxis(array, start, size, axis) {
    return tfjs_core_1.tidy(function () {
        switch (array.rank) {
            case 1:
                return tfc.slice1d(array, start, size);
            case 2:
                switch (axis) {
                    case 1:
                        return sliceAlongFirstAxis(array, start, size);
                    case 2:
                        return sliceAlongLastAxis(array, start, size);
                    default:
                        throw new errors_1.ValueError("The axis is not within the rank of the tensor " +
                            ("" + axis));
                }
            case 3:
                switch (axis) {
                    case 1:
                        return sliceAlongFirstAxis(array, start, size);
                    case 2:
                        return tfc.slice3d(array, [0, start, 0], [array.shape[0], size, array.shape[2]]);
                    case 3:
                        return sliceAlongLastAxis(array, start, size);
                    default:
                        throw new errors_1.ValueError("The axis is not within the rank of the tensor " +
                            ("" + axis));
                }
            case 4:
                switch (axis) {
                    case 1:
                        return sliceAlongFirstAxis(array, start, size);
                    case 2:
                        return tfc.slice4d(array, [0, start, 0, 0], [array.shape[0], size, array.shape[2], array.shape[3]]);
                    case 3:
                        return tfc.slice4d(array, [0, 0, start, 0], [array.shape[0], array.shape[1], size, array.shape[3]]);
                    case 4:
                        return sliceAlongLastAxis(array, start, size);
                    default:
                        throw new errors_1.ValueError("The axis is not within the rank of the tensor " +
                            ("" + axis));
                }
            default:
                throw new errors_1.ValueError("sliceAlongLastAxis() received an unsupported tensor rank: " +
                    ("" + array.rank));
        }
    });
}
exports.sliceAlongAxis = sliceAlongAxis;
/**
 * Concatenates a list of tensors alongside the specified axis.
 * @param tensors `Array` of tensors to concatenate.
 * @param axis Concatenation axis.
 * @returns The result of the concatenation.
 */
function concatenate(tensors, axis) {
    if (axis === void 0) { axis = -1; }
    var rank;
    if (axis < 0) {
        rank = tensors[0].rank;
        if (rank !== 0) {
            axis = rank;
        }
        else {
            axis = 0;
        }
    }
    if (axis === tensors[0].rank) {
        // Porting Note: This is necessary because tfc.concat() requires axis to be
        //   in the interval [-rank, rank).
        axis = -1;
    }
    // Porting Note: Sparse concat is not supported yet.
    return tfc.concat(tensors, axis);
}
exports.concatenate = concatenate;
/**
 * Concatenate two arrays along the first dimension.
 * @param a The 1st `tf.Tensor` to concatenate.
 * @param b The 2nd `tf.Tensor` to concatenate.
 * @returns Result of the concatenation.
 * @throws ValueError: If `a` is of an unsupported subtype of `tf.Tensor`.
 */
function concatAlongFirstAxis(a, b) {
    switch (a.rank) {
        case 1:
            return tfc.concat1d([a, b]);
        case 2:
            return tfc.concat2d([a, b], 0);
        case 3:
            return tfc.concat3d([a, b], 0);
        case 4:
            return tfc.concat4d([a, b], 0);
        default:
            throw new errors_1.ValueError('concatAlongFirstAxis() received an unsupported tensor rank: ' +
                a.rank);
    }
}
exports.concatAlongFirstAxis = concatAlongFirstAxis;
/**
 * Creates a tensor by tiling `x` by `n`.
 * @param x A tensor.
 * @param n An Array of integers or a single integer. If an Array, the length
 *   must be the same as the number of dimensions in `x`. If a single integer,
 *   it will be treated as an Array of length 1.
 */
function tile(x, n) {
    if (!Array.isArray(n)) {
        n = [n];
    }
    if (x.rank !== n.length) {
        throw new errors_1.ValueError("The length of input n (" + n.length + ") does not match " +
            ("the number of dimensions in input x (" + x.rank + ")"));
    }
    return tfc.tile(x, n);
}
exports.tile = tile;
/* Creation of random tensors. */
/**
 * Get a tensor with normal distribution of values.
 *
 * @param shape Shape of the tensor.
 * @param mean mean value of the normal distribution.
 * @param stddev standard deviation of the normal distribution.
 * @param dtype
 * @param seed
 * @return The normal tensor.
 */
function randomNormal(shape, mean, stddev, dtype, seed) {
    if (mean === void 0) { mean = 0.0; }
    if (stddev === void 0) { stddev = 1.0; }
    return tfc.randomNormal(shape, mean, stddev, dtype, seed);
}
exports.randomNormal = randomNormal;
/* Linear Algebra */
/**
 * Multiply two tensors and returns the result as a tensor.
 *
 * For 2D tensors, this is equivalent to matrix multiplication (matMul).
 * For tensors of higher ranks, it follows the Theano behavior,
 * (e.g. `(2, 3) * (4, 3, 5) -> (2, 4, 5)`).  From the Theano documentation:
 *
 * For N dimensions it is a sum product over the last axis of x and the
 * second-to-last of y:
 *
 * @param x A tensor of at least rank 2.
 * @param y A tensor of at least rank 2.
 * @param fusedActivation (optional) A string identifying the activation
 *   function.
 * @return Result of the dot operation.
 */
function dot(x, y, fusedActivation, bias) {
    if ((x.rank < 2) || (y.rank < 2)) {
        throw new errors_1.NotImplementedError("dot requires both inputs to be rank >= 2" +
            (" but got x shape = " + x.shape + " and y shape = " + y.shape));
    }
    if (y.rank >= 3) {
        var xLastDim = x.shape.slice(-1)[0];
        var ySecondLastDim = y.shape.slice(-2)[0];
        if (xLastDim !== ySecondLastDim) {
            throw new errors_1.NotImplementedError("If rank y >= 3, then the second last dim" +
                (" of y must equal the last dim of x but got x shape = " + x.shape + " and ") +
                (" y shape = " + y.shape));
        }
    }
    // Handle basic 2D x 2D case.
    if ((x.rank === 2) && (y.rank === 2)) {
        var transposeX = false;
        var transposeY = false;
        // tfc.fused.matMul only fuses certain activation functions. Unsupported
        // activation functions are treated as 'linear' activations, which is
        // equivalent to a no-op.
        return tfc.fused.matMul(x, y, transposeX, transposeY, bias ? reshapeBias(x.rank, bias, common_2.imageDataFormat()) : null, fusedActivation);
    }
    else {
        // Reshape x into the analogous 2D Tensor.
        var xFirstDims = x.shape.slice(); // Holds all but the last dim of x.
        var xLastDim = xFirstDims.pop();
        x = x.reshape([-1, xLastDim]);
        // Reshape y into the analogous 2D Tensor, and keep track of the
        // required dimensions to reproduce the output shape.
        var yShape = y.shape.slice();
        var yLastDim = yShape.pop();
        var ySecondLastDim = yShape.pop();
        var yOtherDims = yShape.concat([yLastDim]);
        // permutation should be like [r-2, 0, 1, 2, ... r-4, r-3, r-1]
        // where r is the rank of y.
        var perm = Array.from({ length: y.rank }, function (_, i) {
            if (i === 0) {
                return y.rank - 2;
            }
            else if (i <= y.rank - 2) {
                return i - 1;
            }
            return i;
        });
        y = y.transpose(perm).reshape([ySecondLastDim, -1]);
        // Multiply x and y as 2D Tensors, and then reshape back to original.
        var outputShape = xFirstDims.concat(yOtherDims);
        var transposeX = false;
        var transposeY = false;
        return tfc.fused
            .matMul(x, y, transposeX, transposeY, bias ? reshapeBias(x.rank, bias, common_2.imageDataFormat()) : null, fusedActivation)
            .reshape(outputShape);
    }
}
exports.dot = dot;
/**
 * Compute the sign Tensor of an input Tensor.
 *
 * Elements of the input `tf.Tensor` that are === 0 are mapped to 0.
 * Elements of the input `tf.Tensor` that are > 0 are mapped to 1.
 * Elements of the input `tf.Tensor` that are < 0 are mapped to -1.
 *
 * @param x Input `tf.Tensor`.
 * @return The sign `tf.Tensor`.
 */
function sign(x) {
    // TODO(cais): Move to the core.
    return tfjs_core_1.tidy(function () {
        var zerosLikeX = tfjs_core_1.zerosLike(x);
        var onesLikeX = tfjs_core_1.onesLike(x);
        return tfjs_core_1.where(tfc.equal(x, zerosLikeX), zerosLikeX, tfjs_core_1.where(tfc.greater(x, tfjs_core_1.zerosLike(x)), onesLikeX, tfc.mul(state_1.getScalar(-1), onesLikeX)));
    });
}
exports.sign = sign;
/**
 * Computes the one-hot representation of an integer tensor.
 * @param indices nD integer tensor of shape
 *   `(batch_size, dim1, dim2, ... dim(n-1))`
 * @param numClasses Integer, number of classes to consider.
 * @returns (n + 1)D one hot representation of the input
 *   with shape `(batch_size, dim1, dim2, ... dim(n-1), num_classes)`
 */
function oneHot(indices, numClasses) {
    return tfjs_core_1.tidy(function () {
        if (indices.rank !== 1) {
            throw new Error('Only 1D one-hot tensors are supported in the ' +
                'deeplearn backend, at present.');
        }
        indices = indices.toInt();
        return tfc.oneHot(indices, numClasses).toFloat();
    });
}
exports.oneHot = oneHot;
/* Elementary math functions. */
/**
 * Retrieves the elements of indices `indices` in the tensor `reference`.
 * @param reference A tensor.
 * @param indices An integer tensor of indices or an `Array` of integers.
 * @param axis Axis along which to perform the gather operation.
 * @returns The result of the gathering as a tensor.
 */
function gather(reference, indices, axis) {
    return tfjs_core_1.tidy(function () {
        if (Array.isArray(indices)) {
            indices = tfjs_core_1.tensor1d(indices, 'int32');
        }
        else {
            indices = indices.toInt();
        }
        return tfc.gather(reference, indices, axis);
    });
}
exports.gather = gather;
/**
 * Element-wise square.
 * @param x Input tensor.
 * @return element-wise x^2
 */
function square(x) {
    return tfc.mulStrict(x, x);
}
exports.square = square;
/**
 * Element-wise exponentiation.
 *
 * Porting Note: In PyKeras, `a` (the exponent) is a Python integer, which
 *   takes advatnage of the backend's (e.g., TensorFlow's) automatic conversion
 *   to tensor. Here we allow `a` to be either a number or a tensor.
 *
 * @param x The base tensor.
 * @param a The exponent, tensor or number. If a number, it is rounded to the
 *   nearest integer and converted to a tensor.
 * @returns A tensor of the same shape as `x`.
 */
function pow(x, a) {
    return tfjs_core_1.tidy(function () {
        if (typeof (a) === 'number') {
            a = tfjs_core_1.scalar(Math.round(a), 'int32');
        }
        if (a.dtype !== 'int32') {
            throw new errors_1.NotImplementedError("Non-int32 dtype (" + a.dtype + ") is not supported by pow() yet");
        }
        return tfc.pow(x, a);
    });
}
exports.pow = pow;
/**
 * Reshapes bias tensor according to rank of x.
 */
function reshapeBias(xRank, bias, dataFormat) {
    var biasShape = bias.shape;
    if (bias.rank !== 1 && bias.rank !== xRank) {
        throw new errors_1.ValueError('Unexpected bias dimensions: ' + bias.rank +
            '; expected it to be 1 or ' + xRank);
    }
    if (xRank === 5) {
        if (dataFormat === 'channelsFirst') {
            if (biasShape.length === 1) {
                return bias.reshape([1, biasShape[0], 1, 1, 1]);
            }
            else {
                return bias.reshape([1, biasShape[3], biasShape[0], biasShape[1], biasShape[2]]);
            }
        }
        else if (dataFormat === 'channelsLast') {
            if (biasShape.length === 1) {
                return bias.reshape([1, 1, 1, 1, biasShape[0]]);
            }
            else {
                return bias.reshape([1].concat(biasShape));
            }
        }
    }
    else if (xRank === 4) {
        if (dataFormat === 'channelsFirst') {
            if (biasShape.length === 1) {
                return bias.reshape([1, biasShape[0], 1, 1]);
            }
            else {
                return bias.reshape([1, biasShape[2], biasShape[0], biasShape[1]]);
            }
        }
        else if (dataFormat === 'channelsLast') {
            if (biasShape.length === 1) {
                return bias.reshape([1, 1, 1, biasShape[0]]);
            }
            else {
                return bias.reshape([1].concat(biasShape));
            }
        }
    }
    else if (xRank === 3) {
        if (dataFormat === 'channelsFirst') {
            if (biasShape.length === 1) {
                return bias.reshape([1, biasShape[0], 1]);
            }
            else {
                return bias.reshape([1, biasShape[1], biasShape[0]]);
            }
        }
        else if (dataFormat === 'channelsLast') {
            if (biasShape.length === 1) {
                return bias.reshape([1, 1, biasShape[0]]);
            }
            else {
                return bias.reshape([1].concat(biasShape));
            }
        }
    }
    else if (xRank < 3) {
        return bias;
    }
    throw new errors_1.ValueError("Unsupported input rank by biasAdd: " + bias.rank);
}
/* Neural-network operations. */
/**
 * Add a bias to a tensor.
 *
 * @param x The tensor to add the bias to.
 * @param bias The bias to add to `x`. Must be 1D or the same rank as `x`.
 * @return Result of the bias adding.
 * @throws ValueError: If the rank of `bias` is incorrect.
 */
function biasAdd(x, bias, dataFormat) {
    return tfjs_core_1.tidy(function () {
        if (dataFormat == null) {
            dataFormat = common_2.imageDataFormat();
        }
        common_1.checkDataFormat(dataFormat);
        return x.add(reshapeBias(x.rank, bias, dataFormat));
    });
}
exports.biasAdd = biasAdd;
/**
 * Exponential linear unit (ELU).
 * @param x A tensor or variable to compute the activation function for.
 * @param alpha: A scalar, a scaling factor for the negative section.
 * @return Output of the ELU operation.
 */
function elu(x, alpha) {
    if (alpha === void 0) { alpha = 1; }
    // TODO(cais): Add support for alpha values other than 1.
    if (alpha !== 1) {
        throw new errors_1.NotImplementedError("Support for alpha values other than 1 (" + alpha + ") is not implemented " +
            "yet.");
    }
    return tfc.elu(x);
}
exports.elu = elu;
/**
 * Softsign of a tensor.
 *
 * Defined as x / (abs(x) + 1), element-wise.
 *
 * @param x: Input.
 * @returns Output.
 */
function softsign(x) {
    return tfjs_core_1.tidy(function () { return tfc.div(x, tfc.add(state_1.getScalar(1), tfc.abs(x))); });
}
exports.softsign = softsign;
/**
 * Sets entries in `x` to zero at random, while scaling the entire tensor.
 *
 * @param x input tensor.
 * @param level fraction of the entries in the tensor that will be set to 0.
 * @param noiseShape shape of randomly generated keep/drop flags, must be
 *   broadcastable to the shape of `x`.
 * @param seed random seed to ensure determinism.
 * @returns Result of the dropout operation.
 */
function dropout(x, level, noiseShape, seed) {
    return tfjs_core_1.tidy(function () {
        // TODO(cais): Switch to deeplearn.js implementation of dropout when it
        //   becomes avaialable.
        if (noiseShape != null && !tfjs_core_1.util.arraysEqual(x.shape, noiseShape)) {
            throw new errors_1.NotImplementedError('Non-default noise shape is not implemented yet: ' +
                JSON.stringify(noiseShape));
        }
        if (seed != null) {
            throw new errors_1.NotImplementedError('seed is not implemented for dropout yet.');
        }
        var multiplier = tfc.step(tfc.add(tfc.neg(level), tfc.randomUniform(x.shape, 0, 1, 'float32')));
        // Scale the kept elements, so the expected sum is unchanged.
        multiplier = tfc.mul(tfc.div(state_1.getScalar(1), tfc.sub(state_1.getScalar(1), level)), multiplier);
        return tfc.mul(x, multiplier);
    });
}
exports.dropout = dropout;
/**
 * Element-wise, segment-wise linear approximation of sigmoid.
 *
 * Returns `0.` if `x < -2.5`, `1.` if `x > 2.5`.
 * In `-2.5 <= x <= 2.5`, returns `0.2 * x + 0.5`.
 *
 * @param x Input tensor.
 * @returns Output tensor.
 */
function hardSigmoid(x) {
    return tfjs_core_1.tidy(function () {
        var y = tfc.add(state_1.getScalar(0.5), tfc.mul(state_1.getScalar(0.2), x));
        return tfc.clipByValue(y, 0, 1);
    });
}
exports.hardSigmoid = hardSigmoid;
/**
 * Invoke `x` in the training phase, and `alt` otherwise.
 *
 * Porting Note: We do not create placeholder tensors for the `training` boolean
 *   flag here, because there is no such thing in the TF.js imperative backend.
 *
 * @param x The function to invoke iff `training` is `true`.
 * @param alt The function to invoke iff `training` is `false`.
 * @param training Boolean flag for whether training phase is active.
 * @returns The return value of `x()` if `training` is `true`, or the return
 *   value of `alt()` if `training` is `false`.
 */
function inTrainPhase(x, alt, training) {
    if (training === void 0) { training = false; }
    return training ? x() : alt();
}
exports.inTrainPhase = inTrainPhase;
//# sourceMappingURL=tfjs_backend.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../common":1553229508432,"../errors":1553229508428,"../utils/math_utils":1553229508434,"./common":1553229508425}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508432, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Common functions for TensorFlow.js Layers.
 */
var common_1 = require("./keras_format/common");
var generic_utils_1 = require("./utils/generic_utils");
// A map from the requested scoped name of a Tensor to the number of Tensors
// wanting that name so far.  This allows enforcing name uniqueness by appending
// an incrementing index, e.g. scope/name, scope/name_1, scope/name_2, etc.
var nameMap = new Map();
function checkDataFormat(value) {
    generic_utils_1.checkStringTypeUnionValue(common_1.VALID_DATA_FORMAT_VALUES, 'DataFormat', value);
}
exports.checkDataFormat = checkDataFormat;
function checkPaddingMode(value) {
    generic_utils_1.checkStringTypeUnionValue(common_1.VALID_PADDING_MODE_VALUES, 'PaddingMode', value);
}
exports.checkPaddingMode = checkPaddingMode;
function checkPoolMode(value) {
    generic_utils_1.checkStringTypeUnionValue(common_1.VALID_POOL_MODE_VALUES, 'PoolMode', value);
}
exports.checkPoolMode = checkPoolMode;
var _nameScopeStack = [];
var _nameScopeDivider = '/';
/**
 * Enter namescope, which can be nested.
 */
function nameScope(name, fn) {
    _nameScopeStack.push(name);
    try {
        var val = fn();
        _nameScopeStack.pop();
        return val;
    }
    catch (e) {
        _nameScopeStack.pop();
        throw e;
    }
}
exports.nameScope = nameScope;
/**
 * Get the current namescope as a flat, concatenated string.
 */
function currentNameScopePrefix() {
    if (_nameScopeStack.length === 0) {
        return '';
    }
    else {
        return _nameScopeStack.join(_nameScopeDivider) + _nameScopeDivider;
    }
}
/**
 * Get the name a Tensor (or Variable) would have if not uniqueified.
 * @param tensorName
 * @return Scoped name string.
 */
function getScopedTensorName(tensorName) {
    if (!isValidTensorName(tensorName)) {
        throw new Error('Not a valid tensor name: \'' + tensorName + '\'');
    }
    return currentNameScopePrefix() + tensorName;
}
exports.getScopedTensorName = getScopedTensorName;
/**
 * Get unique names for Tensors and Variables.
 * @param scopedName The fully-qualified name of the Tensor, i.e. as produced by
 *  `getScopedTensorName()`.
 * @return A unique version of the given fully scoped name.
 *   If this is the first time that the scoped name is seen in this session,
 *   then the given `scopedName` is returned unaltered.  If the same name is
 *   seen again (producing a collision), an incrementing suffix is added to the
 *   end of the name, so it takes the form 'scope/name_1', 'scope/name_2', etc.
 */
function getUniqueTensorName(scopedName) {
    if (!isValidTensorName(scopedName)) {
        throw new Error('Not a valid tensor name: \'' + scopedName + '\'');
    }
    if (!nameMap.has(scopedName)) {
        nameMap.set(scopedName, 0);
    }
    var index = nameMap.get(scopedName);
    nameMap.set(scopedName, nameMap.get(scopedName) + 1);
    if (index > 0) {
        var result = scopedName + '_' + index;
        // Mark the composed name as used in case someone wants
        // to call getUniqueTensorName("name_1").
        nameMap.set(result, 1);
        return result;
    }
    else {
        return scopedName;
    }
}
exports.getUniqueTensorName = getUniqueTensorName;
var tensorNameRegex = new RegExp(/^[A-Za-z][-A-Za-z0-9\._\/]*$/);
/**
 * Determine whether a string is a valid tensor name.
 * @param name
 * @returns A Boolean indicating whether `name` is a valid tensor name.
 */
function isValidTensorName(name) {
    return name.match(tensorNameRegex) ? true : false;
}
exports.isValidTensorName = isValidTensorName;
//# sourceMappingURL=common.js.map
}, function(modId) { var map = {"./keras_format/common":1553229508433,"./utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508433, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_DATA_FORMAT_VALUES = ['channelsFirst', 'channelsLast'];
exports.VALID_PADDING_MODE_VALUES = ['valid', 'same', 'causal'];
exports.VALID_POOL_MODE_VALUES = ['max', 'avg'];
exports.VALID_BIDIRECTIONAL_MERGE_MODES = ['sum', 'mul', 'concat', 'ave'];
exports.VALID_SAMPLE_WEIGHT_MODES = ['temporal'];
//# sourceMappingURL=common.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508434, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Math utility functions.
 *
 * This file contains some frequently used math function that operates on
 * number[] or Float32Array and return a number. Many of these functions are
 * not-so-thick wrappers around TF.js Core functions. But they offer the
 * convenience of
 * 1) not having to convert the inputs into Tensors,
 * 2) not having to convert the returned Tensors to numbers.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var errors_1 = require("../errors");
/**
 * Determine if a number is an integer.
 */
function isInteger(x) {
    return x === parseInt(x.toString(), 10);
}
exports.isInteger = isInteger;
/**
 * Calculate the product of an array of numbers.
 * @param array The array to calculate the product over.
 * @param begin Beginning index, inclusive.
 * @param end Ending index, exclusive.
 * @return The product.
 */
function arrayProd(array, begin, end) {
    if (begin == null) {
        begin = 0;
    }
    if (end == null) {
        end = array.length;
    }
    var prod = 1;
    for (var i = begin; i < end; ++i) {
        prod *= array[i];
    }
    return prod;
}
exports.arrayProd = arrayProd;
/**
 * A helper function transforms the two input types to an instance of Tensor1D,
 * so the return value can be fed directly into various TF.js Core functions.
 * @param array
 */
function toArray1D(array) {
    array = Array.isArray(array) ? new Float32Array(array) : array;
    return tfjs_core_1.tensor1d(array);
}
/**
 * Compute minimum value.
 * @param array
 * @return minimum value.
 */
function min(array) {
    return tfc.min(toArray1D(array)).dataSync()[0];
}
exports.min = min;
/**
 * Compute maximum value.
 * @param array
 * @return maximum value
 */
function max(array) {
    return tfc.max(toArray1D(array)).dataSync()[0];
}
exports.max = max;
/**
 * Compute sum of array.
 * @param array
 * @return The sum.
 */
function sum(array) {
    return tfc.sum(toArray1D(array)).dataSync()[0];
}
exports.sum = sum;
/**
 * Compute mean of array.
 * @param array
 * @return The mean.
 */
function mean(array) {
    return sum(array) / array.length;
}
exports.mean = mean;
/**
 * Compute variance of array.
 * @param array
 * @return The variance.
 */
function variance(array) {
    var demeaned = tfc.sub(toArray1D(array), tfjs_core_1.scalar(mean(array)));
    var sumSquare = tfc.sum(tfc.mulStrict(demeaned, demeaned)).dataSync()[0];
    return sumSquare / array.length;
}
exports.variance = variance;
/**
 * Compute median of array.
 * @param array
 * @return The median value.
 */
function median(array) {
    var arraySorted = array.slice().sort(function (a, b) { return a - b; });
    var lowIdx = Math.floor((arraySorted.length - 1) / 2);
    var highIdx = Math.ceil((arraySorted.length - 1) / 2);
    if (lowIdx === highIdx) {
        return arraySorted[lowIdx];
    }
    return (arraySorted[lowIdx] + arraySorted[highIdx]) / 2;
}
exports.median = median;
/**
 * Generate an array of integers in [begin, end).
 * @param begin Beginning integer, inclusive.
 * @param end Ending integer, exclusive.
 * @returns Range array.
 * @throws ValueError, iff `end` < `begin`.
 */
function range(begin, end) {
    if (end < begin) {
        throw new errors_1.ValueError("end (" + end + ") < begin (" + begin + ") is forbidden.");
    }
    var out = [];
    for (var i = begin; i < end; ++i) {
        out.push(i);
    }
    return out;
}
exports.range = range;
//# sourceMappingURL=math_utils.js.map
}, function(modId) { var map = {"../errors":1553229508428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508435, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_FAN_MODE_VALUES = ['fanIn', 'fanOut', 'fanAvg'];
exports.VALID_DISTRIBUTION_VALUES = ['normal', 'uniform'];
// We can't easily extract a string[] from the string union type, but we can
// recapitulate the list, enforcing at compile time that the values are valid
// and that we have the right number of them.
/**
 * A string array of valid Initializer class names.
 *
 * This is guaranteed to match the `InitializerClassName` union type.
 */
exports.initializerClassNames = [
    'Zeros', 'Ones', 'Constant', 'RandomNormal', 'RandomUniform',
    'TruncatedNormal', 'VarianceScaling', 'Orthogonal', 'Identity'
];
//# sourceMappingURL=initializer_config.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508436, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var input_layer_1 = require("./engine/input_layer");
var topology_1 = require("./engine/topology");
exports.Layer = topology_1.Layer;
var exports_1 = require("./exports");
exports.input = exports_1.input;
var advanced_activations_1 = require("./layers/advanced_activations");
var convolutional_1 = require("./layers/convolutional");
var convolutional_depthwise_1 = require("./layers/convolutional_depthwise");
var core_1 = require("./layers/core");
var embeddings_1 = require("./layers/embeddings");
var merge_1 = require("./layers/merge");
var normalization_1 = require("./layers/normalization");
var padding_1 = require("./layers/padding");
var pooling_1 = require("./layers/pooling");
var recurrent_1 = require("./layers/recurrent");
exports.RNN = recurrent_1.RNN;
exports.RNNCell = recurrent_1.RNNCell;
var wrappers_1 = require("./layers/wrappers");
var noise_1 = require("./layers/noise");
// TODO(cais): Add doc string to all the public static functions in this
//   class; include exectuable JavaScript code snippets where applicable
//   (b/74074458).
// Input Layer.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Inputs',
 *   namespace: 'layers',
 *   useDocsFrom: 'InputLayer'
 * }
 */
function inputLayer(args) {
    return new input_layer_1.InputLayer(args);
}
exports.inputLayer = inputLayer;
// Advanced Activation Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers',
 *   useDocsFrom: 'ELU'
 * }
 */
function elu(args) {
    return new advanced_activations_1.ELU(args);
}
exports.elu = elu;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers',
 *   useDocsFrom: 'ReLU'
 * }
 */
function reLU(args) {
    return new advanced_activations_1.ReLU(args);
}
exports.reLU = reLU;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers',
 *   useDocsFrom: 'LeakyReLU'
 * }
 */
function leakyReLU(args) {
    return new advanced_activations_1.LeakyReLU(args);
}
exports.leakyReLU = leakyReLU;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers',
 *   useDocsFrom: 'PReLU'
 * }
 */
function prelu(args) {
    return new advanced_activations_1.PReLU(args);
}
exports.prelu = prelu;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers',
 *   useDocsFrom: 'Softmax'
 * }
 */
function softmax(args) {
    return new advanced_activations_1.Softmax(args);
}
exports.softmax = softmax;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers',
 *   useDocsFrom: 'ThresholdedReLU'
 * }
 */
function thresholdedReLU(args) {
    return new advanced_activations_1.ThresholdedReLU(args);
}
exports.thresholdedReLU = thresholdedReLU;
// Convolutional Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'Conv1D'
 * }
 */
function conv1d(args) {
    return new convolutional_1.Conv1D(args);
}
exports.conv1d = conv1d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'Conv2D'
 * }
 */
function conv2d(args) {
    return new convolutional_1.Conv2D(args);
}
exports.conv2d = conv2d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'Conv2DTranspose'
 * }
 */
function conv2dTranspose(args) {
    return new convolutional_1.Conv2DTranspose(args);
}
exports.conv2dTranspose = conv2dTranspose;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'Conv3D'
 * }
 */
function conv3d(args) {
    return new convolutional_1.Conv3D(args);
}
exports.conv3d = conv3d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'SeparableConv2D'
 * }
 */
function separableConv2d(args) {
    return new convolutional_1.SeparableConv2D(args);
}
exports.separableConv2d = separableConv2d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'Cropping2D'
 * }
 */
function cropping2D(args) {
    return new convolutional_1.Cropping2D(args);
}
exports.cropping2D = cropping2D;
/**
 * @doc{
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'UpSampling2D'
 * }
 */
function upSampling2d(args) {
    return new convolutional_1.UpSampling2D(args);
}
exports.upSampling2d = upSampling2d;
// Convolutional(depthwise) Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Convolutional',
 *   namespace: 'layers',
 *   useDocsFrom: 'DepthwiseConv2D'
 * }
 */
function depthwiseConv2d(args) {
    return new convolutional_depthwise_1.DepthwiseConv2D(args);
}
exports.depthwiseConv2d = depthwiseConv2d;
// Basic Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *   useDocsFrom: 'Activation'
 * }
 */
function activation(args) {
    return new core_1.Activation(args);
}
exports.activation = activation;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *   useDocsFrom: 'Dense'
 * }
 */
function dense(args) {
    return new core_1.Dense(args);
}
exports.dense = dense;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *   useDocsFrom: 'Dropout'
 * }
 */
function dropout(args) {
    return new core_1.Dropout(args);
}
exports.dropout = dropout;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *   useDocsFrom: 'Flatten'
 * }
 */
function flatten(args) {
    return new core_1.Flatten(args);
}
exports.flatten = flatten;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *   useDocsFrom: 'RepeatVector'
 * }
 */
function repeatVector(args) {
    return new core_1.RepeatVector(args);
}
exports.repeatVector = repeatVector;
/**
 * @doc{
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *   useDocsFrom: 'Reshape'
 * }
 */
function reshape(args) {
    return new core_1.Reshape(args);
}
exports.reshape = reshape;
/**
 * @doc{
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *   useDocsFrom: 'Permute'
 * }
 */
function permute(args) {
    return new core_1.Permute(args);
}
exports.permute = permute;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Basic',
 *   namespace: 'layers',
 *    useDocsFrom: 'Embedding'
 * }
 */
function embedding(args) {
    return new embeddings_1.Embedding(args);
}
exports.embedding = embedding;
// Merge Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Merge',
 *   namespace: 'layers',
 *   useDocsFrom: 'Add'
 * }
 */
function add(args) {
    return new merge_1.Add(args);
}
exports.add = add;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Merge',
 *   namespace: 'layers',
 *   useDocsFrom: 'Average'
 * }
 */
function average(args) {
    return new merge_1.Average(args);
}
exports.average = average;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Merge',
 *   namespace: 'layers',
 *   useDocsFrom: 'Concatenate'
 * }
 */
function concatenate(args) {
    return new merge_1.Concatenate(args);
}
exports.concatenate = concatenate;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Merge',
 *   namespace: 'layers',
 *   useDocsFrom: 'Maximum'
 * }
 */
function maximum(args) {
    return new merge_1.Maximum(args);
}
exports.maximum = maximum;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Merge',
 *   namespace: 'layers',
 *   useDocsFrom: 'Minimum'
 * }
 */
function minimum(args) {
    return new merge_1.Minimum(args);
}
exports.minimum = minimum;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Merge',
 *   namespace: 'layers',
 *   useDocsFrom: 'Multiply'
 * }
 */
function multiply(args) {
    return new merge_1.Multiply(args);
}
exports.multiply = multiply;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Merge',
 *   namespace: 'layers',
 *   useDocsFrom: 'Dot'
 * }
 */
function dot(args) {
    return new merge_1.Dot(args);
}
exports.dot = dot;
// Normalization Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Normalization',
 *   namespace: 'layers',
 *   useDocsFrom: 'BatchNormalization'
 * }
 */
function batchNormalization(args) {
    return new normalization_1.BatchNormalization(args);
}
exports.batchNormalization = batchNormalization;
// Padding Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Padding',
 *   namespace: 'layers',
 *   useDocsFrom: 'ZeroPadding2D'
 * }
 */
function zeroPadding2d(args) {
    return new padding_1.ZeroPadding2D(args);
}
exports.zeroPadding2d = zeroPadding2d;
// Pooling Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'AveragePooling1D'
 * }
 */
function averagePooling1d(args) {
    return new pooling_1.AveragePooling1D(args);
}
exports.averagePooling1d = averagePooling1d;
function avgPool1d(args) {
    return averagePooling1d(args);
}
exports.avgPool1d = avgPool1d;
// For backwards compatibility.
// See https://github.com/tensorflow/tfjs/issues/152
function avgPooling1d(args) {
    return averagePooling1d(args);
}
exports.avgPooling1d = avgPooling1d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'AveragePooling2D'
 * }
 */
function averagePooling2d(args) {
    return new pooling_1.AveragePooling2D(args);
}
exports.averagePooling2d = averagePooling2d;
function avgPool2d(args) {
    return averagePooling2d(args);
}
exports.avgPool2d = avgPool2d;
// For backwards compatibility.
// See https://github.com/tensorflow/tfjs/issues/152
function avgPooling2d(args) {
    return averagePooling2d(args);
}
exports.avgPooling2d = avgPooling2d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'GlobalAveragePooling1D'
 * }
 */
function globalAveragePooling1d(args) {
    return new pooling_1.GlobalAveragePooling1D(args);
}
exports.globalAveragePooling1d = globalAveragePooling1d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'GlobalAveragePooling2D'
 * }
 */
function globalAveragePooling2d(args) {
    return new pooling_1.GlobalAveragePooling2D(args);
}
exports.globalAveragePooling2d = globalAveragePooling2d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'GlobalMaxPooling1D'
 * }
 */
function globalMaxPooling1d(args) {
    return new pooling_1.GlobalMaxPooling1D(args);
}
exports.globalMaxPooling1d = globalMaxPooling1d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'GlobalMaxPooling2D'
 * }
 */
function globalMaxPooling2d(args) {
    return new pooling_1.GlobalMaxPooling2D(args);
}
exports.globalMaxPooling2d = globalMaxPooling2d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'MaxPooling1D'
 * }
 */
function maxPooling1d(args) {
    return new pooling_1.MaxPooling1D(args);
}
exports.maxPooling1d = maxPooling1d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Pooling',
 *   namespace: 'layers',
 *   useDocsFrom: 'MaxPooling2D'
 * }
 */
function maxPooling2d(args) {
    return new pooling_1.MaxPooling2D(args);
}
exports.maxPooling2d = maxPooling2d;
// Recurrent Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'GRU'
 * }
 */
function gru(args) {
    return new recurrent_1.GRU(args);
}
exports.gru = gru;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'GRUCell'
 * }
 */
function gruCell(args) {
    return new recurrent_1.GRUCell(args);
}
exports.gruCell = gruCell;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'LSTM'
 * }
 */
function lstm(args) {
    return new recurrent_1.LSTM(args);
}
exports.lstm = lstm;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'LSTMCell'
 * }
 */
function lstmCell(args) {
    return new recurrent_1.LSTMCell(args);
}
exports.lstmCell = lstmCell;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'SimpleRNN'
 * }
 */
function simpleRNN(args) {
    return new recurrent_1.SimpleRNN(args);
}
exports.simpleRNN = simpleRNN;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'SimpleRNNCell'
 * }
 */
function simpleRNNCell(args) {
    return new recurrent_1.SimpleRNNCell(args);
}
exports.simpleRNNCell = simpleRNNCell;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'RNN'
 * }
 */
function rnn(args) {
    return new recurrent_1.RNN(args);
}
exports.rnn = rnn;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Recurrent',
 *   namespace: 'layers',
 *   useDocsFrom: 'RNN'
 * }
 */
function stackedRNNCells(args) {
    return new recurrent_1.StackedRNNCells(args);
}
exports.stackedRNNCells = stackedRNNCells;
// Wrapper Layers.
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Wrapper',
 *   namespace: 'layers',
 *   useDocsFrom: 'Bidirectional'
 * }
 */
function bidirectional(args) {
    return new wrappers_1.Bidirectional(args);
}
exports.bidirectional = bidirectional;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Wrapper',
 *   namespace: 'layers',
 *   useDocsFrom: 'TimeDistributed'
 * }
 */
function timeDistributed(args) {
    return new wrappers_1.TimeDistributed(args);
}
exports.timeDistributed = timeDistributed;
// Aliases for pooling.
exports.globalMaxPool1d = globalMaxPooling1d;
exports.globalMaxPool2d = globalMaxPooling2d;
exports.maxPool1d = maxPooling1d;
exports.maxPool2d = maxPooling2d;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Noise',
 *   namespace: 'layers',
 *   useDocsFrom: 'GaussianNoise'
 * }
 */
function gaussianNoise(args) {
    return new noise_1.GaussianNoise(args);
}
exports.gaussianNoise = gaussianNoise;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Noise',
 *   namespace: 'layers',
 *   useDocsFrom: 'GaussianDropout'
 * }
 */
function gaussianDropout(args) {
    return new noise_1.GaussianDropout(args);
}
exports.gaussianDropout = gaussianDropout;
/**
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Noise',
 *   namespace: 'layers',
 *   useDocsFrom: 'AlphaDropout'
 * }
 */
function alphaDropout(args) {
    return new noise_1.AlphaDropout(args);
}
exports.alphaDropout = alphaDropout;
//# sourceMappingURL=exports_layers.js.map
}, function(modId) { var map = {"./engine/input_layer":1553229508437,"./engine/topology":1553229508438,"./exports":1553229508442,"./layers/advanced_activations":1553229508458,"./layers/convolutional":1553229508461,"./layers/convolutional_depthwise":1553229508463,"./layers/core":1553229508464,"./layers/embeddings":1553229508465,"./layers/merge":1553229508466,"./layers/normalization":1553229508467,"./layers/padding":1553229508468,"./layers/pooling":1553229508469,"./layers/recurrent":1553229508470,"./layers/wrappers":1553229508471,"./layers/noise":1553229508472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508437, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var errors_1 = require("../errors");
var topology_1 = require("./topology");
/**
 * An input layer is an entry point into a `tf.LayersModel`.
 *
 * `InputLayer` is generated automatically for `tf.Sequential`` models by
 * specifying the `inputshape` or `batchInputShape` for the first layer.  It
 * should not be specified explicitly. However, it can be useful sometimes,
 * e.g., when constructing a sequential model from a subset of another
 * sequential model's layers. Like the code snippet below shows.
 *
 * ```js
 * // Define a model which simply adds two inputs.
 * const model1 = tf.sequential();
 * model1.add(tf.layers.dense({inputShape: [4], units: 3, activation: 'relu'}));
 * model1.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
 * model1.summary();
 * model1.predict(tf.zeros([1, 4])).print();
 *
 * // Construct another model, reusing the second layer of `model1` while
 * // not using the first layer of `model1`. Note that you cannot add the second
 * // layer of `model` directly as the first layer of the new sequential model,
 * // because doing so will lead to an error related to the fact that the layer
 * // is not an input layer. Instead, you need to create an `inputLayer` and add
 * // it to the new sequential model before adding the reused layer.
 * const model2 = tf.sequential();
 * // Use an inputShape that matches the input shape of `model1`'s second
 * // layer.
 * model2.add(tf.layers.inputLayer({inputShape: [3]}));
 * model2.add(model1.layers[1]);
 * model2.summary();
 * model2.predict(tf.zeros([1, 3])).print();
 * ```
 */
var InputLayer = /** @class */ (function (_super) {
    __extends(InputLayer, _super);
    function InputLayer(args) {
        var _this = _super.call(this, {
            dtype: args.dtype,
            name: args.name != null ? args.name : state_1.getUid('input').toString()
        }) || this;
        // Normalize config.batchSize and config.sparse
        if (args.batchSize == null) {
            args.batchSize = null;
        }
        if (args.sparse == null) {
            args.sparse = false;
        }
        _this.trainable = false;
        _this.built = true;
        _this.sparse = args.sparse;
        if (args.inputShape != null && args.batchInputShape != null) {
            throw new errors_1.ValueError('Only provide the inputShape OR ' +
                'batchInputShape argument to inputLayer, not both at the same time.');
        }
        var batchInputShape = args.batchInputShape;
        if (batchInputShape == null) {
            if (args.inputShape == null) {
                throw new errors_1.ValueError('An InputLayer should be passed either a ' +
                    '`batchInputShape` or an `inputShape`.');
            }
            else {
                batchInputShape = [args.batchSize].concat(args.inputShape);
            }
        }
        else {
            // TODO(michaelterry): Backport to PyKeras
            if (args.batchSize != null) {
                throw new errors_1.ValueError('Cannot specify batchSize if batchInputShape is ' +
                    'specified when creating an InputLayer.');
            }
        }
        var dtype = args.dtype || 'float32';
        _this.batchInputShape = batchInputShape;
        _this.dtype = dtype;
        // TODO(michaelterry): Backport this to PyKeras?
        _this.inputSpec = [{ shape: batchInputShape }];
        var inputTensor = new topology_1.SymbolicTensor(_this.dtype, _this.batchInputShape, _this, [], {}, _this.name);
        inputTensor.nodeIndex = 0;
        inputTensor.tensorIndex = 0;
        // Create an input node to add to this.outboundNode.
        // (This call has side effects.)
        // tslint:disable-next-line:no-unused-expression
        new topology_1.Node({
            outboundLayer: _this,
            inboundLayers: [],
            nodeIndices: [],
            tensorIndices: [],
            inputTensors: [inputTensor],
            outputTensors: [inputTensor],
            inputMasks: [null],
            outputMasks: [null],
            inputShapes: [batchInputShape],
            outputShapes: [batchInputShape]
        });
        return _this;
    }
    InputLayer.prototype.apply = function (inputs, kwargs) {
        throw new errors_1.ValueError('Cannot pass any input to an ' +
            ("InputLayer's apply() method. InputLayer name: " + this.name));
    };
    InputLayer.prototype.dispose = function () {
        // dispose() for InputLayer is overridden as no-op.
        return { refCountAfterDispose: this._refCount, numDisposedVariables: 0 };
    };
    InputLayer.prototype.getConfig = function () {
        return {
            batchInputShape: this.batchInputShape,
            dtype: this.dtype,
            sparse: this.sparse,
            name: this.name
        };
    };
    /** @nocollapse */
    InputLayer.className = 'InputLayer';
    return InputLayer;
}(topology_1.Layer));
exports.InputLayer = InputLayer;
tfjs_core_1.serialization.registerClass(InputLayer);
/**
 * Used to instantiate an input to a model as a `tf.SymbolicTensor`.
 *
 * Users should call the `input` factory function for
 * consistency with other generator functions.
 *
 * Example:
 *
 * ```js
 * // Defines a simple logistic regression model with 32 dimensional input
 * // and 3 dimensional output.
 * const x = tf.input({shape: [32]});
 * const y = tf.layers.dense({units: 3, activation: 'softmax'}).apply(x);
 * const model = tf.LayersModel({inputs: x, outputs: y});
 * model.predict(tf.ones([2, 32])).print();
 * ```
 *
 * Note: `input` is only necessary when using `model`. When using
 * `sequential`, specify `inputShape` for the first layer or use `inputLayer`
 * as the first layer.
 */
function Input(config) {
    if (config.batchShape == null && config.shape == null) {
        throw new Error('Please provide to Input either a `shape`' +
            ' or a `batchShape` argument. Note that ' +
            '`shape` does not include the batch ' +
            'dimension.');
    }
    if (config.batchShape != null && config.shape != null) {
        // TODO(michaelterry): Backport to PyKeras.
        throw new errors_1.ValueError('Please provide either a `shape` or `batchShape` ' +
            'argument to Input, but not both.');
    }
    var batchShape = config.batchShape;
    if (config.shape != null && batchShape == null) {
        batchShape = [null].concat(config.shape);
    }
    var dtype = config.dtype;
    if (dtype == null) {
        dtype = 'float32';
    }
    var inputLayer = new InputLayer({
        batchInputShape: batchShape,
        name: config.name,
        dtype: dtype,
        sparse: config.sparse
    });
    var outputs = inputLayer.inboundNodes[0].outputTensors;
    return outputs[0];
}
exports.Input = Input;
//# sourceMappingURL=input_layer.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../errors":1553229508428,"./topology":1553229508438}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508438, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* Original source: keras/engine/topology.py */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var common_1 = require("../common");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var generic_utils = require("../utils/generic_utils");
var types_utils = require("../utils/types_utils");
var variable_utils = require("../utils/variable_utils");
var variables_1 = require("../variables");
/**
 * Specifies the ndim, dtype and shape of every input to a layer.
 *
 * Every layer should expose (if appropriate) an `inputSpec` attribute:
 * a list of instances of InputSpec (one per input tensor).
 *
 * A null entry in a shape is compatible with any dimension,
 * a null shape is compatible with any shape.
 */
var InputSpec = /** @class */ (function () {
    function InputSpec(args) {
        this.dtype = args.dtype;
        this.shape = args.shape;
        /*
          TODO(michaelterry): Could throw error if ndim and shape are both defined
            (then backport).
        */
        if (args.shape != null) {
            this.ndim = args.shape.length;
        }
        else {
            this.ndim = args.ndim;
        }
        this.maxNDim = args.maxNDim;
        this.minNDim = args.minNDim;
        this.axes = args.axes || {};
    }
    return InputSpec;
}());
exports.InputSpec = InputSpec;
/**
 * `tf.SymbolicTensor` is a placeholder for a Tensor without any concrete value.
 *
 * They are most often encountered when building a graph of `Layer`s for a
 * a `tf.LayersModel` and the input data's shape, but not values are known.
 */
/** @doc {heading: 'Models', 'subheading': 'Classes'} */
var SymbolicTensor = /** @class */ (function () {
    /**
     *
     * @param dtype
     * @param shape
     * @param sourceLayer The Layer that produced this symbolic tensor.
     * @param inputs The inputs passed to sourceLayer's __call__() method.
     * @param nodeIndex
     * @param tensorIndex
     * @param callArgs The keyword arguments passed to the __call__() method.
     * @param name
     * @param outputTensorIndex The index of this tensor in the list of outputs
     *   returned by apply().
     */
    function SymbolicTensor(dtype, shape, sourceLayer, inputs, callArgs, name, outputTensorIndex) {
        this.dtype = dtype;
        this.shape = shape;
        this.sourceLayer = sourceLayer;
        this.inputs = inputs;
        this.callArgs = callArgs;
        this.outputTensorIndex = outputTensorIndex;
        this.id = state_1.getNextUniqueTensorId();
        if (name != null) {
            this.originalName = common_1.getScopedTensorName(name);
            this.name = common_1.getUniqueTensorName(this.originalName);
        }
        this.rank = shape.length;
    }
    return SymbolicTensor;
}());
exports.SymbolicTensor = SymbolicTensor;
var _nextNodeID = 0;
/**
 * A `Node` describes the connectivity between two layers.
 *
 * Each time a layer is connected to some new input,
 * a node is added to `layer.inboundNodes`.
 *
 * Each time the output of a layer is used by another layer,
 * a node is added to `layer.outboundNodes`.
 *
 * `nodeIndices` and `tensorIndices` are basically fine-grained coordinates
 * describing the origin of the `inputTensors`, verifying the following:
 *
 * `inputTensors[i] ==
 * inboundLayers[i].inboundNodes[nodeIndices[i]].outputTensors[
 *   tensorIndices[i]]`
 *
 * A node from layer A to layer B is added to:
 *     A.outboundNodes
 *     B.inboundNodes
 */
var Node = /** @class */ (function () {
    function Node(args, 
    // TODO(michaelterry): Define actual type for this.
    callArgs) {
        this.callArgs = callArgs;
        this.id = _nextNodeID++;
        /*
          Layer instance (NOT a list).
          this is the layer that takes a list of input tensors
          and turns them into a list of output tensors.
          the current node will be added to
          the inboundNodes of outboundLayer.
        */
        this.outboundLayer = args.outboundLayer;
        /*
            The following 3 properties describe where
            the input tensors come from: which layers,
            and for each layer, which node and which
            tensor output of each node.
        */
        // List of layer instances.
        this.inboundLayers = args.inboundLayers;
        // List of integers, 1:1 mapping with inboundLayers.
        this.nodeIndices = args.nodeIndices;
        // List of integers, 1:1 mapping with inboundLayers.
        this.tensorIndices = args.tensorIndices;
        /*
            Following 2 properties:
            tensor inputs and outputs of outboundLayer.
        */
        // List of tensors. 1:1 mapping with inboundLayers.
        this.inputTensors = args.inputTensors;
        // List of tensors, created by outboundLayer.call().
        this.outputTensors = args.outputTensors;
        /*
            Following 2 properties: input and output masks.
            List of tensors, 1:1 mapping with inputTensor.
        */
        this.inputMasks = args.inputMasks;
        // List of tensors, created by outboundLayer.computeMask().
        this.outputMasks = args.outputMasks;
        // Following 2 properties: input and output shapes.
        // List of shape tuples, shapes of inputTensors.
        this.inputShapes = args.inputShapes;
        // List of shape tuples, shapes of outputTensors.
        this.outputShapes = args.outputShapes;
        // Add nodes to all layers involved.
        for (var _i = 0, _a = args.inboundLayers; _i < _a.length; _i++) {
            var layer = _a[_i];
            if (layer != null) {
                layer.outboundNodes.push(this);
            }
        }
        args.outboundLayer.inboundNodes.push(this);
    }
    Node.prototype.getConfig = function () {
        var inboundNames = [];
        for (var _i = 0, _a = this.inboundLayers; _i < _a.length; _i++) {
            var layer = _a[_i];
            if (layer != null) {
                inboundNames.push(layer.name);
            }
            else {
                inboundNames.push(null);
            }
        }
        return {
            outboundLayer: this.outboundLayer ? this.outboundLayer.name : null,
            inboundLayers: inboundNames,
            nodeIndices: this.nodeIndices,
            tensorIndices: this.tensorIndices
        };
    };
    return Node;
}());
exports.Node = Node;
var _nextLayerID = 0;
/**
 * A layer is a grouping of operations and weights that can be composed to
 * create a `tf.LayersModel`.
 *
 * Layers are constructed by using the functions under the
 * [tf.layers](#Layers-Basic) namespace.
 */
/** @doc {heading: 'Layers', subheading: 'Classes', namespace: 'layers'} */
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer(args) {
        var _this = _super.call(this) || this;
        _this._callHook = null;
        _this._addedWeightNames = [];
        // Porting Notes: PyKeras does not have this property in this base Layer
        //   class. Instead lets Layer subclass set it dynamically and checks the
        //   value with `hasattr`. In tfjs-layers, we let this be a member of this
        //   base class.
        _this._stateful = false;
        _this.id = _nextLayerID++;
        _this.activityRegularizer = null;
        _this.inputSpec = null;
        _this.supportsMasking = false;
        // These properties will be set upon call of this.build()
        _this._trainableWeights = [];
        _this._nonTrainableWeights = [];
        _this._losses = [];
        _this._updates = [];
        _this._built = false;
        /*
          These lists will be filled via successive calls
          to this.addInboundNode().
         */
        _this.inboundNodes = [];
        _this.outboundNodes = [];
        var name = args.name;
        if (!name) {
            var prefix = _this.getClassName();
            name = generic_utils.toSnakeCase(prefix) + '_' + state_1.getUid(prefix);
        }
        _this.name = name;
        _this.trainable_ = args.trainable == null ? true : args.trainable;
        _this.updatable = args.updatable == null ? true : args.updatable;
        if (args.inputShape != null || args.batchInputShape != null) {
            /*
              In this case we will later create an input layer
              to insert before the current layer
             */
            var batchInputShape = void 0;
            if (args.batchInputShape != null) {
                batchInputShape = args.batchInputShape;
            }
            else if (args.inputShape != null) {
                var batchSize = null;
                if (args.batchSize != null) {
                    batchSize = args.batchSize;
                }
                batchInputShape = [batchSize].concat(args.inputShape);
            }
            _this.batchInputShape = batchInputShape;
            // Set dtype.
            var dtype = args.dtype;
            if (dtype == null) {
                dtype = args.inputDType;
            }
            if (dtype == null) {
                dtype = 'float32';
            }
            _this.dtype = dtype;
        }
        if (args.weights != null) {
            _this.initialWeights = args.weights;
        }
        else {
            _this.initialWeights = null;
        }
        // The value of `_refCount` is initialized to null. When the layer is used
        // in a symbolic way for the first time, it will be set to 1.
        _this._refCount = null;
        _this.fastWeightInitDuringBuild = false;
        return _this;
    }
    /**
     * Converts a layer and its index to a unique (immutable type) name.
     * This function is used internally with `this.containerNodes`.
     * @param layer The layer.
     * @param nodeIndex The layer's position (e.g. via enumerate) in a list of
     *   nodes.
     *
     * @returns The unique name.
     */
    Layer.nodeKey = function (layer, nodeIndex) {
        return layer.name + '_ib-' + nodeIndex.toString();
    };
    /**
     * Returns this.inboundNode at index nodeIndex.
     *
     * Porting note: This is a replacement for _get_node_attribute_at_index()
     * @param nodeIndex
     * @param attrName The name of the attribute related to request for this node.
     */
    Layer.prototype.getNodeAtIndex = function (nodeIndex, attrName) {
        if (this.inboundNodes.length === 0) {
            throw new errors_1.RuntimeError('The layer has never been called ' +
                ("and thus has no defined " + attrName + "."));
        }
        if (this.inboundNodes.length <= nodeIndex) {
            throw new errors_1.ValueError("Asked to get " + attrName + " at node " + nodeIndex + ", " +
                ("but the layer has only " + this.inboundNodes.length + " inbound nodes."));
        }
        return this.inboundNodes[nodeIndex];
    };
    /**
     * Retrieves the input tensor(s) of a layer at a given node.
     *
     * @param nodeIndex Integer, index of the node from which to retrieve the
     *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
     *   was called.
     *
     * @return A tensor (or list of tensors if the layer has multiple inputs).
     */
    Layer.prototype.getInputAt = function (nodeIndex) {
        return generic_utils.singletonOrArray(this.getNodeAtIndex(nodeIndex, 'input').inputTensors);
    };
    /**
     * Retrieves the output tensor(s) of a layer at a given node.
     *
     * @param nodeIndex Integer, index of the node from which to retrieve the
     *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
     *   was called.
     *
     * @return A tensor (or list of tensors if the layer has multiple outputs).
     */
    Layer.prototype.getOutputAt = function (nodeIndex) {
        return generic_utils.singletonOrArray(this.getNodeAtIndex(nodeIndex, 'output').outputTensors);
    };
    Object.defineProperty(Layer.prototype, "input", {
        // Properties
        /**
         * Retrieves the input tensor(s) of a layer.
         *
         * Only applicable if the layer has exactly one inbound node,
         * i.e. if it is connected to one incoming layer.
         *
         * @return Input tensor or list of input tensors.
         *
         * @exception AttributeError if the layer is connected to more than one
         *   incoming layers.
         */
        get: function () {
            if (this.inboundNodes.length > 1) {
                throw new errors_1.AttributeError("Layer " + this.name +
                    ' has multiple inbound nodes, ' +
                    'hence the notion of "layer input" ' +
                    'is ill-defined. ' +
                    'Use `getInputAt(nodeIndex)` instead.');
            }
            else if (this.inboundNodes.length === 0) {
                throw new errors_1.AttributeError("Layer " + this.name +
                    ' is not connected, no input to return.');
            }
            return generic_utils.singletonOrArray(this.getNodeAtIndex(0, 'input').inputTensors);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "output", {
        /**
         * Retrieves the output tensor(s) of a layer.
         *
         * Only applicable if the layer has exactly one inbound node,
         * i.e. if it is connected to one incoming layer.
         *
         * @return Output tensor or list of output tensors.
         *
         * @exception AttributeError if the layer is connected to more than one
         *   incoming layers.
         */
        get: function () {
            if (this.inboundNodes.length === 0) {
                throw new errors_1.AttributeError("Layer " + this.name +
                    ' has no inbound nodes.');
            }
            if (this.inboundNodes.length > 1) {
                throw new errors_1.AttributeError("Layer " + this.name +
                    ' has multiple inbound nodes, ' +
                    'hence the notion of "layer output" ' +
                    'is ill-defined. ' +
                    'Use `getOutputAt(nodeIndex)` instead.');
            }
            return generic_utils.singletonOrArray(this.getNodeAtIndex(0, 'output').outputTensors);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "losses", {
        get: function () {
            return this._losses;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the Layer's current loss values.
     *
     * Used for regularizers during training.
     */
    Layer.prototype.calculateLosses = function () {
        // Porting Node: This is an augmentation to Layer.loss in PyKeras.
        //   In PyKeras, Layer.loss returns symbolic tensors. Here a concrete
        //   Tensor (specifically Scalar) values are returned. This is due to the
        //   imperative backend.
        return this.losses.map(function (lossFn) { return lossFn(); });
    };
    Object.defineProperty(Layer.prototype, "updates", {
        get: function () {
            return this._updates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "built", {
        get: function () {
            return this._built;
        },
        set: function (built) {
            this._built = built;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "trainable", {
        get: function () {
            return this.trainable_;
        },
        set: function (trainable) {
            this._trainableWeights.forEach(function (w) {
                w.trainable = trainable;
            });
            this.trainable_ = trainable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "trainableWeights", {
        get: function () {
            if (this.trainable_) {
                return this._trainableWeights;
            }
            else {
                return [];
            }
        },
        set: function (weights) {
            this._trainableWeights = weights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "nonTrainableWeights", {
        get: function () {
            if (!this.trainable_) {
                return this._trainableWeights.concat(this._nonTrainableWeights);
            }
            else {
                return this._nonTrainableWeights;
            }
        },
        set: function (weights) {
            this._nonTrainableWeights = weights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "weights", {
        /**
         * The concatenation of the lists trainableWeights and nonTrainableWeights
         * (in this order).
         */
        get: function () {
            return this.trainableWeights.concat(this.nonTrainableWeights);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "stateful", {
        get: function () {
            return this._stateful;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reset the states of the layer.
     *
     * This method of the base Layer class is essentially a no-op.
     * Subclasses that are stateful (e.g., stateful RNNs) should override this
     * method.
     */
    Layer.prototype.resetStates = function () {
        if (!this.stateful) {
            throw new Error('Cannot call the resetStates() method of a non-stateful Layer ' +
                'object.');
        }
    };
    /**
     * Checks compatibility between the layer and provided inputs.
     *
     * This checks that the tensor(s) `input`
     * verify the input assumptions of the layer
     * (if any). If not, exceptions are raised.
     *
     * @param inputs Input tensor or list of input tensors.
     *
     * @exception ValueError in case of mismatch between
     *   the provided inputs and the expectations of the layer.
     */
    Layer.prototype.assertInputCompatibility = function (inputs) {
        inputs = generic_utils.toList(inputs);
        if (this.inputSpec == null || this.inputSpec.length === 0) {
            return;
        }
        var inputSpec = generic_utils.toList(this.inputSpec);
        if (inputs.length !== inputSpec.length) {
            throw new errors_1.ValueError("Layer " + this.name + " expects " + inputSpec.length + " inputs, " +
                ("but it received " + inputs.length + " input tensors. ") +
                ("Input received: " + inputs));
        }
        for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
            var x = inputs[inputIndex];
            var spec = inputSpec[inputIndex];
            if (spec == null) {
                continue;
            }
            // Check ndim.
            var ndim = x.rank;
            if (spec.ndim != null) {
                if (ndim !== spec.ndim) {
                    throw new errors_1.ValueError("Input " + inputIndex + " is incompatible with layer " + this.name + ": " +
                        ("expected ndim=" + spec.ndim + ", found ndim=" + ndim));
                }
            }
            if (spec.maxNDim != null) {
                if (ndim > spec.maxNDim) {
                    throw new errors_1.ValueError("Input " + inputIndex + " is incompatible with layer " + this.name +
                        (": expected max_ndim=" + spec.maxNDim + ", found ndim=" + ndim));
                }
            }
            if (spec.minNDim != null) {
                if (ndim < spec.minNDim) {
                    throw new errors_1.ValueError("Input " + inputIndex + " is incompatible with layer " + this.name +
                        (": expected min_ndim=" + spec.minNDim + ", found ndim=" + ndim + "."));
                }
            }
            // Check dtype.
            if (spec.dtype != null) {
                if (x.dtype !== spec.dtype) {
                    throw new errors_1.ValueError("Input " + inputIndex + " is incompatible with layer " + this.name + " " +
                        (": expected dtype=" + spec.dtype + ", found dtype=" + x.dtype + "."));
                }
            }
            // Check specific shape axes.
            if (spec.axes) {
                var xShape = x.shape;
                for (var key in spec.axes) {
                    var axis = Number(key);
                    var value = spec.axes[key];
                    // Perform Python-style slicing in case axis < 0;
                    // TODO(cais): Use https://github.com/alvivi/typescript-underscore to
                    // ensure type safety through Underscore calls.
                    var xShapeAtAxis = axis >= 0 ? xShape[axis] : xShape[xShape.length + axis];
                    if (value != null && [value, null].indexOf(xShapeAtAxis) === -1) {
                        throw new errors_1.ValueError("Input " + inputIndex + " is incompatible with layer " +
                            (this.name + ": expected axis " + axis + " of input shape to ") +
                            ("have value " + value + " but got shape " + xShape + "."));
                    }
                }
            }
            // Check shape.
            if (spec.shape != null) {
                for (var i = 0; i < spec.shape.length; ++i) {
                    var specDim = spec.shape[i];
                    var dim = x.shape[i];
                    if (specDim != null && dim != null) {
                        if (specDim !== dim) {
                            throw new errors_1.ValueError("Input " + inputIndex + " is incompatible with layer " +
                                (this.name + ": expected shape=" + spec.shape + ", ") +
                                'found shape=${xShape}.');
                        }
                    }
                }
            }
        }
    };
    /**
     * This is where the layer's logic lives.
     *
     * @param inputs Input tensor, or list/tuple of input tensors.
     * @param kwargs Additional keyword arguments.
     *
     * @return A tensor or list/tuple of tensors.
     */
    Layer.prototype.call = function (inputs, kwargs) {
        return inputs;
    };
    Layer.prototype.invokeCallHook = function (inputs, kwargs) {
        if (this._callHook != null) {
            this._callHook(inputs, kwargs);
        }
    };
    /**
     * Set call hook.
     * This is currently used for testing only.
     * @param callHook
     */
    Layer.prototype.setCallHook = function (callHook) {
        this._callHook = callHook;
    };
    /**
     * Clear call hook.
     * This is currently used for testing only.
     */
    Layer.prototype.clearCallHook = function () {
        this._callHook = null;
    };
    /**
     * Builds or executes a `Layer's logic.
     *
     * When called with `tf.Tensor`(s), execute the `Layer`s computation and
     * return Tensor(s). For example:
     *
     * ```js
     * const denseLayer = tf.layers.dense({
     *   units: 1,
     *   kernelInitializer: 'zeros',
     *   useBias: false
     * });
     *
     * // Invoke the layer's apply() method with a `tf.Tensor` (with concrete
     * // numeric values).
     * const input = tf.ones([2, 2]);
     * const output = denseLayer.apply(input);
     *
     * // The output's value is expected to be [[0], [0]], due to the fact that
     * // the dense layer has a kernel initialized to all-zeros and does not have
     * // a bias.
     * output.print();
     * ```
     *
     * When called with `tf.SymbolicTensor`(s), this will prepare the layer for
     * future execution.  This entails internal book-keeping on shapes of
     * expected Tensors, wiring layers together, and initializing weights.
     *
     * Calling `apply` with `tf.SymbolicTensor`s are typically used during the
     * building of non-`tf.Sequential` models. For example:
     *
     * ```js
     * const flattenLayer = tf.layers.flatten();
     * const denseLayer = tf.layers.dense({units: 1});
     *
     * // Use tf.layers.input() to obtain a SymbolicTensor as input to apply().
     * const input = tf.input({shape: [2, 2]});
     * const output1 = flattenLayer.apply(input);
     *
     * // output1.shape is [null, 4]. The first dimension is the undetermined
     * // batch size. The second dimension comes from flattening the [2, 2]
     * // shape.
     * console.log(JSON.stringify(output1.shape));
     *
     * // The output SymbolicTensor of the flatten layer can be used to call
     * // the apply() of the dense layer:
     * const output2 = denseLayer.apply(output1);
     *
     * // output2.shape is [null, 1]. The first dimension is the undetermined
     * // batch size. The second dimension matches the number of units of the
     * // dense layer.
     * console.log(JSON.stringify(output2.shape));
     *
     * // The input and output and be used to construct a model that consists
     * // of the flatten and dense layers.
     * const model = tf.LayersModel({inputs: input, outputs: output2});
     * ```
     *
     * @param inputs a `tf.Tensor` or `tf.SymbolicTensor` or an Array of them.
     * @param kwargs Additional keyword arguments to be passed to `call()`.
     *
     * @return Output of the layer's `call` method.
     *
     * @exception ValueError error in case the layer is missing shape information
     *   for its `build` call.
     */
    // Porting Note: This is a replacement for __call__() in Python.
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.apply = function (inputs, kwargs) {
        var _this = this;
        kwargs = kwargs || {};
        this.assertNotDisposed();
        // Ensure inputs are all the same type.
        var inputsList = generic_utils.toList(inputs);
        var allAreSymbolic = true;
        for (var _i = 0, inputsList_1 = inputsList; _i < inputsList_1.length; _i++) {
            var input = inputsList_1[_i];
            if (!(input instanceof SymbolicTensor)) {
                allAreSymbolic = false;
                break;
            }
        }
        var noneAreSymbolic = true;
        for (var _a = 0, inputsList_2 = inputsList; _a < inputsList_2.length; _a++) {
            var input = inputsList_2[_a];
            if (input instanceof SymbolicTensor) {
                noneAreSymbolic = false;
                break;
            }
        }
        if (allAreSymbolic === noneAreSymbolic) {
            throw new errors_1.ValueError('Arguments to apply() must be all ' +
                'SymbolicTensors or all Tensors');
        }
        // TODO(michaelterry): nameScope() may not be necessary.
        return common_1.nameScope(this.name, function () {
            // Handle laying building (weight creating, input spec locking).
            if (!_this.built) {
                /*
                  Throw exceptions in case the input is not compatible
                  with the inputSpec specified in the layer constructor.
                 */
                _this.assertInputCompatibility(inputs);
                // Collect input shapes to build layer.
                var inputShapes = [];
                for (var _i = 0, _a = generic_utils.toList(inputs); _i < _a.length; _i++) {
                    var xElem = _a[_i];
                    inputShapes.push(xElem.shape);
                }
                _this.build(generic_utils.singletonOrArray(inputShapes));
                _this.built = true;
                // Load weights that were specified at layer instantiation.
                if (_this.initialWeights) {
                    _this.setWeights(_this.initialWeights);
                }
                if (_this._refCount === null && noneAreSymbolic) {
                    // The first use of this layer is a non-symbolic call, set ref count
                    // to 1 so the Layer can be properly disposed if its dispose() method
                    // is called.
                    _this._refCount = 1;
                }
            }
            /*
              Throw exceptions in case the input is not compatible
              with the inputSpec set at build time.
            */
            _this.assertInputCompatibility(inputs);
            // Handle mask propagation.
            // TODO(michaelterry): Mask propagation not currently implemented.
            // Actually call the layer, collecting output(s), mask(s), and shape(s).
            if (noneAreSymbolic) {
                var output = _this.call(inputs, kwargs);
                // TODO(michaelterry): Compute the outputMask
                // If the layer returns tensors from its inputs, unmodified,
                // we copy them to avoid loss of tensor metadata.
                var outputList = generic_utils.toList(output);
                var outputListCopy = [];
                // TODO(michaelterry): This copying may not be necessary given our eager
                // backend.
                for (var _b = 0, outputList_1 = outputList; _b < outputList_1.length; _b++) {
                    var x = outputList_1[_b];
                    if (inputsList.indexOf(x) !== -1) {
                        x = x.clone();
                    }
                    outputListCopy.push(x);
                }
                output = generic_utils.singletonOrArray(outputListCopy);
                if (_this.activityRegularizer != null) {
                    throw new errors_1.NotImplementedError('Layer invocation in the presence of activity ' +
                        'regularizer(s) is not supported yet.');
                }
                // TODO(michaelterry): Call addInboundNode()?
                return output;
            }
            else {
                var inputShape = collectInputShape(inputs);
                var outputShape = _this.computeOutputShape(inputShape);
                var output = void 0;
                var outputDType_1 = guessOutputDType(inputs);
                _this.warnOnIncompatibleInputShape(Array.isArray(inputs) ? inputShape[0] :
                    inputShape);
                if (outputShape != null && outputShape.length > 0 &&
                    Array.isArray(outputShape[0])) {
                    // We have multiple output shapes. Create multiple output tensors.
                    output = outputShape
                        .map(function (shape, index) { return new SymbolicTensor(outputDType_1, shape, _this, generic_utils.toList(inputs), kwargs, _this.name, index); });
                }
                else {
                    output = new SymbolicTensor(outputDType_1, outputShape, _this, generic_utils.toList(inputs), kwargs, _this.name);
                }
                /*
                  Add an inbound node to the layer, so that it keeps track
                  of the call and of all new variables created during the call.
                  This also updates the layer history of the output tensor(s).
                  If the input tensor(s) had no previous history,
                  this does nothing.
                */
                _this.addInboundNode(inputs, output, null, null, inputShape, outputShape, kwargs);
                _this._refCount++;
                if (_this.activityRegularizer != null) {
                    throw new errors_1.NotImplementedError('Layer invocation in the presence of activity ' +
                        'regularizer(s) is not supported yet.');
                }
                return output;
            }
        });
    };
    /**
     * Check compatibility between input shape and this layer's batchInputShape.
     *
     * Print warning if any incompatibility is found.
     *
     * @param inputShape Input shape to be checked.
     */
    Layer.prototype.warnOnIncompatibleInputShape = function (inputShape) {
        if (this.batchInputShape == null) {
            return;
        }
        else if (inputShape.length !== this.batchInputShape.length) {
            console.warn("The rank of the input tensor provided (shape: " +
                (JSON.stringify(inputShape) + ") does not match that of the ") +
                ("batchInputShape (" + JSON.stringify(this.batchInputShape) + ") ") +
                ("of the layer " + this.name));
        }
        else {
            var dimMismatch_1 = false;
            this.batchInputShape.forEach(function (dimension, i) {
                if (dimension != null && inputShape[i] != null &&
                    inputShape[i] !== dimension) {
                    dimMismatch_1 = true;
                }
            });
            if (dimMismatch_1) {
                console.warn("The shape of the input tensor " +
                    ("(" + JSON.stringify(inputShape) + ") does not ") +
                    ("match the expectation of layer " + this.name + ": ") +
                    ("" + JSON.stringify(this.batchInputShape)));
            }
        }
    };
    Object.defineProperty(Layer.prototype, "outputShape", {
        /**
         * Retrieves the output shape(s) of a layer.
         *
         * Only applicable if the layer has only one inbound node, or if all inbound
         * nodes have the same output shape.
         *
         * @returns Output shape or shapes.
         * @throws AttributeError: if the layer is connected to more than one incoming
         *   nodes.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        get: function () {
            if (this.inboundNodes == null || this.inboundNodes.length === 0) {
                throw new errors_1.AttributeError("The layer " + this.name + " has never been called and thus has no " +
                    "defined output shape.");
            }
            var allOutputShapes = [];
            for (var _i = 0, _a = this.inboundNodes; _i < _a.length; _i++) {
                var node = _a[_i];
                var shapeString = JSON.stringify(node.outputShapes);
                if (allOutputShapes.indexOf(shapeString) === -1) {
                    allOutputShapes.push(shapeString);
                }
            }
            if (allOutputShapes.length === 1) {
                var outputShapes = this.inboundNodes[0].outputShapes;
                if (Array.isArray(outputShapes) && Array.isArray(outputShapes[0]) &&
                    outputShapes.length === 1) {
                    return outputShapes[0];
                }
                else {
                    return outputShapes;
                }
            }
            else {
                throw new errors_1.AttributeError("The layer " + this.name + " has multiple inbound nodes with different " +
                    "output shapes. Hence the notion of \"outut shape\" is ill-defined " +
                    "for the layer.");
                // TODO(cais): Implement getOutputShapeAt().
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Counts the total number of numbers (e.g., float32, int32) in the
     * weights.
     *
     * @returns An integer count.
     * @throws RuntimeError: If the layer is not built yet (in which case its
     *   weights are not defined yet.)
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.countParams = function () {
        if (!this.built) {
            throw new errors_1.RuntimeError("You tried to call countParams() on " + this.name + ", " +
                "but the layer is not built yet. Build it first by calling " +
                "build(batchInputShape).");
        }
        return variable_utils.countParamsInWeights(this.weights);
    };
    /**
     * Creates the layer weights.
     *
     * Must be implemented on all layers that have weights.
     *
     * Called when apply() is called to construct the weights.
     *
     * @param inputShape A `Shape` or array of `Shape` (unused).
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.build = function (inputShape) {
        this.built = true;
    };
    /**
     * Returns the current values of the weights of the layer.
     *
     * @param trainableOnly Whether to get the values of only trainable weights.
     * @returns Weight values as an `Array` of `tf.Tensor`s.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.getWeights = function (trainableOnly) {
        if (trainableOnly === void 0) { trainableOnly = false; }
        return variables_1.batchGetValue(trainableOnly ? this.trainableWeights : this.weights);
    };
    /**
     * Sets the weights of the layer, from Tensors.
     *
     * @param weights a list of Tensors. The number of arrays and their shape
     *   must match number of the dimensions of the weights of the layer (i.e.
     *   it should match the output of `getWeights`).
     *
     * @exception ValueError If the provided weights list does not match the
     *   layer's specifications.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.setWeights = function (weights) {
        var _this = this;
        tfjs_core_1.tidy(function () {
            var params = _this.weights;
            if (params.length !== weights.length) {
                // TODO(cais): Restore the following and use `providedWeights`, instead
                // of `weights` in the error message, once the deeplearn.js bug is
                // fixed: https://github.com/PAIR-code/deeplearnjs/issues/498 const
                // providedWeights = JSON.stringify(weights).substr(0, 50);
                throw new errors_1.ValueError("You called setWeights(weights) on layer \"" + _this.name + "\" " +
                    ("with a weight list of length " + weights.length + ", ") +
                    ("but the layer was expecting " + params.length + " weights. ") +
                    ("Provided weights: " + weights + "..."));
            }
            if (params.length === 0) {
                return;
            }
            var weightValueTuples = [];
            var paramValues = variables_1.batchGetValue(params);
            for (var i = 0; i < paramValues.length; ++i) {
                var pv = paramValues[i];
                var p = params[i];
                var w = weights[i];
                if (!tfjs_core_1.util.arraysEqual(pv.shape, w.shape)) {
                    throw new errors_1.ValueError("Layer weight shape " + pv.shape + " " +
                        ("not compatible with provided weight shape " + w.shape));
                }
                weightValueTuples.push([p, w]);
            }
            variables_1.batchSetValue(weightValueTuples);
        });
    };
    /**
     * Adds a weight variable to the layer.
     *
     * @param name Name of the new weight variable.
     * @param shape The shape of the weight.
     * @param dtype The dtype of the weight.
     * @param initializer An initializer instance.
     * @param regularizer A regularizer instance.
     * @param trainable Whether the weight should be trained via backprop or not
     *   (assuming that the layer itself is also trainable).
     * @param constraint An optional trainable.
     * @return The created weight variable.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.addWeight = function (name, shape, dtype, initializer, regularizer, trainable, constraint) {
        // Reject duplicate weight names.
        if (this._addedWeightNames.indexOf(name) !== -1) {
            throw new errors_1.ValueError("Duplicate weight name " + name + " for layer " + this.name);
        }
        this._addedWeightNames.push(name);
        if (dtype == null) {
            dtype = 'float32';
        }
        if (this.fastWeightInitDuringBuild) {
            initializer = initializers_1.getInitializer('zeros');
        }
        var initValue = initializer.apply(shape, dtype);
        var weight = new variables_1.LayerVariable(initValue, dtype, name, trainable, constraint);
        initValue.dispose();
        // Request backend not to dispose the weights of the model on scope() exit.
        if (regularizer != null) {
            this.addLoss(function () { return regularizer.apply(weight.read()); });
        }
        if (trainable == null) {
            trainable = true;
        }
        if (trainable) {
            this._trainableWeights.push(weight);
        }
        else {
            this._nonTrainableWeights.push(weight);
        }
        return weight;
    };
    /**
     * Set the fast-weight-initialization flag.
     *
     * In cases where the initialized weight values will be immediately
     * overwritten by loaded weight values during model loading, setting
     * the flag to `true` saves unnecessary calls to potentially expensive
     * initializers and speeds up the loading process.
     *
     * @param value Target value of the flag.
     */
    Layer.prototype.setFastWeightInitDuringBuild = function (value) {
        this.fastWeightInitDuringBuild = value;
    };
    /**
     * Add losses to the layer.
     *
     * The loss may potentionally be conditional on some inputs tensors,
     * for instance activity losses are conditional on the layer's inputs.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.addLoss = function (losses) {
        var _a;
        if (losses == null || Array.isArray(losses) && losses.length === 0) {
            return;
        }
        // Update this.losses
        losses = generic_utils.toList(losses);
        if (this._losses !== undefined && this._losses !== null) {
            (_a = this.losses).push.apply(_a, losses);
        }
    };
    /**
     * Computes the output shape of the layer.
     *
     * Assumes that the layer will be built to match that input shape provided.
     *
     * @param inputShape A shape (tuple of integers) or a list of shape tuples
     *   (one per output tensor of the layer). Shape tuples can include null for
     *   free dimensions, instead of an integer.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    /**
     * Computes an output mask tensor.
     *
     * @param inputs Tensor or list of tensors.
     * @param mask Tensor or list of tensors.
     *
     * @return null or a tensor (or list of tensors, one per output tensor of the
     * layer).
     */
    Layer.prototype.computeMask = function (inputs, mask) {
        var _this = this;
        if (!this.supportsMasking) {
            if (mask != null) {
                if (Array.isArray(mask)) {
                    mask.forEach(function (maskElement) {
                        if (maskElement != null) {
                            throw new TypeError("Layer " + _this.name + " does not support masking, " +
                                'but was passed an inputMask.');
                        }
                    });
                }
                else {
                    throw new TypeError("Layer " + this.name + " does not support masking, " +
                        'but was passed an inputMask.');
                }
            }
            // masking not explicitly supported: return null as mask
            return null;
        }
        // if masking is explictly supported, by default
        // carry over the input mask
        return mask;
    };
    /**
     * Internal method to create an inbound node for the layer.
     *
     * @param inputTensors List of input tensors.
     * @param outputTensors List of output tensors.
     * @param inputMasks List of input masks (a mask can be a tensor, or null).
     * @param outputMasks List of output masks (a mask can be a tensor, or null).
     * @param inputShapes List of input shape tuples.
     * @param outputShapes List of output shape tuples.
     * @param kwargs Dictionary of keyword arguments that were passed to the
     *   `call` method of the layer at the call that created the node.
     */
    Layer.prototype.addInboundNode = function (inputTensors, outputTensors, inputMasks, outputMasks, inputShapes, outputShapes, kwargs) {
        if (kwargs === void 0) { kwargs = null; }
        var inputTensorList = generic_utils.toList(inputTensors);
        outputTensors = generic_utils.toList(outputTensors);
        inputMasks = generic_utils.toList(inputMasks);
        outputMasks = generic_utils.toList(outputMasks);
        inputShapes = types_utils.normalizeShapeList(inputShapes);
        outputShapes = types_utils.normalizeShapeList(outputShapes);
        // Collect input tensor(s) coordinates.
        var inboundLayers = [];
        var nodeIndices = [];
        var tensorIndices = [];
        for (var _i = 0, inputTensorList_1 = inputTensorList; _i < inputTensorList_1.length; _i++) {
            var x = inputTensorList_1[_i];
            /*
             * TODO(michaelterry): Keras adds this value to tensors; it's not
             * clear whether we'll use this or not.
             */
            inboundLayers.push(x.sourceLayer);
            nodeIndices.push(x.nodeIndex);
            tensorIndices.push(x.tensorIndex);
        }
        // Create node, add it to inbound nodes.
        // (This call has side effects.)
        // tslint:disable-next-line:no-unused-expression
        new Node({
            outboundLayer: this,
            inboundLayers: inboundLayers,
            nodeIndices: nodeIndices,
            tensorIndices: tensorIndices,
            inputTensors: inputTensorList,
            outputTensors: outputTensors,
            inputMasks: inputMasks,
            outputMasks: outputMasks,
            inputShapes: inputShapes,
            outputShapes: outputShapes
        }, kwargs);
        // Update tensor history
        for (var i = 0; i < outputTensors.length; i++) {
            // TODO(michaelterry: _uses_learning_phase not tracked.
            outputTensors[i].sourceLayer = this;
            outputTensors[i].nodeIndex = this.inboundNodes.length - 1;
            outputTensors[i].tensorIndex = i;
        }
    };
    /**
     * Returns the config of the layer.
     *
     * A layer config is a TS dictionary (serializable)
     * containing the configuration of a layer.
     * The same layer can be reinstantiated later
     * (without its trained weights) from this configuration.
     *
     * The config of a layer does not include connectivity
     * information, nor the layer class name.  These are handled
     * by 'Container' (one layer of abstraction above).
     *
     * Porting Note: The TS dictionary follows TS naming standrds for
     * keys, and uses tfjs-layers type-safe Enums.  Serialization methods
     * should use a helper function to convert to the pythonic storage
     * standard. (see serialization_utils.convertTsToPythonic)
     *
     * @returns TS dictionary of configuration.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.getConfig = function () {
        var config = {
            name: this.name,
            trainable: this.trainable
        };
        if (this.batchInputShape != null) {
            config['batchInputShape'] = this.batchInputShape;
        }
        if (this.dtype != null) {
            config['dtype'] = this.dtype;
        }
        return config;
    };
    /**
     * Dispose the weight variables that this Layer instance holds.
     *
     * @returns {number} Number of disposed variables.
     */
    Layer.prototype.disposeWeights = function () {
        this.weights.forEach(function (weight) { return weight.dispose(); });
        return this.weights.length;
    };
    Layer.prototype.assertNotDisposed = function () {
        if (this._refCount === 0) {
            throw new Error("Layer '" + this.name + "' is already disposed.");
        }
    };
    /**
     * Attempt to dispose layer's weights.
     *
     * This method decrease the reference count of the Layer object by 1.
     *
     * A Layer is reference-counted. Its reference count is incremented by 1
     * the first item its `apply()` method is called and when it becomes a part
     * of a new `Node` (through calling the `apply()`) method on a
     * `tf.SymbolicTensor`).
     *
     * If the reference count of a Layer becomes 0, all the weights will be
     * disposed and the underlying memory (e.g., the textures allocated in WebGL)
     * will be freed.
     *
     * Note: If the reference count is greater than 0 after the decrement, the
     * weights of the Layer will *not* be disposed.
     *
     * After a Layer is disposed, it cannot be used in calls such as `apply()`,
     * `getWeights()` or `setWeights()` anymore.
     *
     * @returns A DisposeResult Object with the following fields:
     *   - refCountAfterDispose: The reference count of the Container after this
     *     `dispose()` call.
     *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
     *     during this `dispose()` call.
     * @throws {Error} If the layer is not built yet, or if the layer has already
     *   been disposed.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    Layer.prototype.dispose = function () {
        if (!this.built) {
            throw new Error("Cannot dispose Layer " + this.name + " because it has not been " +
                "built yet.");
        }
        if (this._refCount === null) {
            throw new Error("Cannot dispose Layer " + this.name + " because it has not been used " +
                "yet.");
        }
        this.assertNotDisposed();
        var numDisposedVariables = 0;
        if (--this._refCount === 0) {
            numDisposedVariables = this.disposeWeights();
        }
        return { refCountAfterDispose: this._refCount, numDisposedVariables: numDisposedVariables };
    };
    return Layer;
}(tfjs_core_1.serialization.Serializable));
exports.Layer = Layer;
/**
 * Collects the input shape(s) of a list of `tf.Tensor`s or
 * `tf.SymbolicTensor`s.
 *
 * TODO(michaelterry): Update PyKeras docs (backport).
 *
 * @param inputTensors List of input tensors (or single input tensor).
 *
 * @return List of shape tuples (or single tuple), one tuple per input.
 */
function collectInputShape(inputTensors) {
    inputTensors =
        generic_utils.toList(inputTensors);
    var shapes = [];
    for (var _i = 0, inputTensors_1 = inputTensors; _i < inputTensors_1.length; _i++) {
        var x = inputTensors_1[_i];
        shapes.push(x.shape);
    }
    return generic_utils.singletonOrArray(shapes);
}
/**
 * Guesses output dtype based on inputs.
 *
 * At present, just returns 'float32' for any input.
 *
 * @param inputTensors List of input tensors (or single input tensor).
 *
 * @return The guessed DType. At present, always returns 'float32'.
 */
function guessOutputDType(inputTensors) {
    return 'float32';
}
/**
 * Returns the list of input tensors necessary to compute `tensor`.
 *
 * Output will always be a list of tensors (potentially with 1 element).
 *
 * @param tensor The tensor to start from.
 * @param layer Origin layer of the tensor.
 * @param nodeIndex Origin node index of the tensor.
 *
 * @return Array of input tensors.
 */
function getSourceInputs(tensor, layer, nodeIndex) {
    if (layer == null || (nodeIndex != null && nodeIndex > 0)) {
        layer = tensor.sourceLayer;
        nodeIndex = tensor.nodeIndex;
    }
    if (layer.inboundNodes.length === 0) {
        return [tensor];
    }
    else {
        var node = layer.inboundNodes[nodeIndex];
        if (node.inboundLayers.length === 0) {
            return node.inputTensors;
        }
        else {
            var sourceTensors = [];
            for (var i = 0; i < node.inboundLayers.length; i++) {
                var x = node.inputTensors[i];
                var layer_1 = node.inboundLayers[i];
                var nodeIndex_1 = node.nodeIndices[i];
                var previousSources = getSourceInputs(x, layer_1, nodeIndex_1);
                // Avoid input redundancy.
                for (var _i = 0, previousSources_1 = previousSources; _i < previousSources_1.length; _i++) {
                    var x_1 = previousSources_1[_i];
                    if (sourceTensors.indexOf(x_1) === -1) {
                        sourceTensors.push(x_1);
                    }
                }
            }
            return sourceTensors;
        }
    }
}
exports.getSourceInputs = getSourceInputs;
//# sourceMappingURL=topology.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../common":1553229508432,"../errors":1553229508428,"../initializers":1553229508430,"../utils/generic_utils":1553229508427,"../utils/types_utils":1553229508439,"../utils/variable_utils":1553229508440,"../variables":1553229508441}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508439, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../errors");
// tslint:enable
/**
 * Determine whether the input is an Array of Shapes.
 */
function isArrayOfShapes(x) {
    return Array.isArray(x) && Array.isArray(x[0]);
}
exports.isArrayOfShapes = isArrayOfShapes;
/**
 * Special case of normalizing shapes to lists.
 *
 * @param x A shape or list of shapes to normalize into a list of Shapes.
 * @return A list of Shapes.
 */
function normalizeShapeList(x) {
    if (x.length === 0) {
        return [];
    }
    if (!Array.isArray(x[0])) {
        return [x];
    }
    return x;
}
exports.normalizeShapeList = normalizeShapeList;
/**
 * Helper function to obtain exactly one Tensor.
 * @param xs: A single `tf.Tensor` or an `Array` of `tf.Tensor`s.
 * @return A single `tf.Tensor`. If `xs` is an `Array`, return the first one.
 * @throws ValueError: If `xs` is an `Array` and its length is not 1.
 */
function getExactlyOneTensor(xs) {
    var x;
    if (Array.isArray(xs)) {
        if (xs.length !== 1) {
            throw new errors_1.ValueError("Expected Tensor length to be 1; got " + xs.length);
        }
        x = xs[0];
    }
    else {
        x = xs;
    }
    return x;
}
exports.getExactlyOneTensor = getExactlyOneTensor;
/**
 * Helper function to obtain exactly on instance of Shape.
 *
 * @param shapes Input single `Shape` or Array of `Shape`s.
 * @returns If input is a single `Shape`, return it unchanged. If the input is
 *   an `Array` containing exactly one instance of `Shape`, return the instance.
 *   Otherwise, throw a `ValueError`.
 * @throws ValueError: If input is an `Array` of `Shape`s, and its length is not
 *   1.
 */
function getExactlyOneShape(shapes) {
    if (Array.isArray(shapes) && Array.isArray(shapes[0])) {
        if (shapes.length === 1) {
            shapes = shapes;
            return shapes[0];
        }
        else {
            throw new errors_1.ValueError("Expected exactly 1 Shape; got " + shapes.length);
        }
    }
    else {
        return shapes;
    }
}
exports.getExactlyOneShape = getExactlyOneShape;
//# sourceMappingURL=types_utils.js.map
}, function(modId) { var map = {"../errors":1553229508428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508440, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Count the elements in an Array of LayerVariables.
 *
 * @param weights: The LayerVariables of which the constituent numbers are to
 *   be counted.
 * @returns A count of the elements in all the LayerVariables
 */
function countParamsInWeights(weights) {
    var count = 0;
    for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
        var weight = weights_1[_i];
        if (weight.shape.length === 0) {
            count += 1;
        }
        else {
            count += weight.shape.reduce(function (a, b) { return a * b; });
        }
    }
    return count;
}
exports.countParamsInWeights = countParamsInWeights;
//# sourceMappingURL=variable_utils.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508441, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("./backend/state");
var common_1 = require("./common");
var errors_1 = require("./errors");
var DEFAULT_VARIABLE_NAME_PREFIX = 'Variable';
/**
 * A `tf.layers.LayerVariable` is similar to a `tf.Tensor` in that it has a
 * dtype and shape, but its value is mutable.  The value is itself represented
 * as a`tf.Tensor`, and can be read with the `read()` method and updated with
 * the `write()` method.
 */
var LayerVariable = /** @class */ (function () {
    /**
     * Construct Variable from a `tf.Tensor`.
     *
     * If not explicitly named, the Variable will be given a name with the
     * prefix 'Variable'. Variable names are unique. In the case of name
     * collision, suffixies '_<num>' will be added to the name.
     *
     * @param val Initial value of the Variable.
     * @param name Name of the variable. If `null` or `undefined` is provided, it
     *   will default a name with the prefix 'Variable'.
     * @param constraint Optional, projection function to be applied to the
     * variable after optimize updates
     * @throws ValueError if `name` is `null` or `undefined`.
     */
    function LayerVariable(val, dtype, name, trainable, constraint) {
        if (dtype === void 0) { dtype = 'float32'; }
        if (name === void 0) { name = DEFAULT_VARIABLE_NAME_PREFIX; }
        if (trainable === void 0) { trainable = true; }
        if (constraint === void 0) { constraint = null; }
        this.dtype = dtype == null ? 'float32' : dtype;
        this.shape = val.shape;
        this.id = state_1.getNextUniqueTensorId();
        name = name == null ? DEFAULT_VARIABLE_NAME_PREFIX : name;
        this.originalName = common_1.getScopedTensorName(name);
        this.name = common_1.getUniqueTensorName(this.originalName);
        this.trainable_ = trainable;
        this.constraint = constraint;
        this.val = tfc.variable(val, this.trainable_, this.name, this.dtype);
    }
    /**
     * Get a snapshot of the Variable's value.
     *
     * The returned value is a snapshot of the Variable's value at the time of
     * the invocation. Future mutations in the value of the tensor will only
     * be reflected by future calls to this method.
     */
    LayerVariable.prototype.read = function () {
        this.assertNotDisposed();
        return this.val;
    };
    /**
     * Update the value of the Variable.
     *
     * @param newVal: The new value to update to. Must be consistent with the
     *   dtype and shape of the Variable.
     * @return This Variable.
     */
    LayerVariable.prototype.write = function (newVal) {
        // TODO(cais): Once  TF.js Core supports Tensor.dtype, check dtype match.
        this.assertNotDisposed();
        checkShapesMatch(this.val, newVal);
        // Skip updating if this is the exact same tensor.
        if (this.val.id !== newVal.id) {
            this.val.assign(newVal);
            if (this.constraint != null) {
                this.val.assign(this.constraint.apply(this.val));
            }
        }
        return this;
    };
    /**
     * Dispose this LayersVariable instance from memory.
     */
    LayerVariable.prototype.dispose = function () {
        this.assertNotDisposed();
        this.val.dispose();
    };
    LayerVariable.prototype.assertNotDisposed = function () {
        if (this.val.isDisposed) {
            throw new Error("LayersVariable " + this.name + " is already disposed.");
        }
    };
    Object.defineProperty(LayerVariable.prototype, "trainable", {
        get: function () {
            return this.trainable_;
        },
        set: function (trainable) {
            this.trainable_ = trainable;
            this.val.trainable = trainable;
        },
        enumerable: true,
        configurable: true
    });
    return LayerVariable;
}());
exports.LayerVariable = LayerVariable;
function checkShapesMatch(x, y) {
    if (x.shape.toString() !== y.shape.toString()) {
        throw new Error('Shape mismatch: ' + JSON.stringify(x.shape) + ' vs. ' +
            JSON.stringify(y.shape));
    }
}
/**
 * Create a Variable.
 * @param x The initial value of the `Variable`.
 * @param dtype optional, the type of the variable.
 * @param name optional, the name of the variable, default provided by
 * Variable.
 * @param constraint optional, a constraint to be applied after every update.
 * @return The newly instantiated `Variable`.
 */
function variable(x, dtype, name, constraint) {
    return new LayerVariable(x, dtype, name, true, constraint);
}
exports.variable = variable;
/**
 * Instantiates an all-zeros Variable and returns it.
 *
 * @param shape Shape of the tensor.
 * @param dtype DType of the tensor.
 * @param name Name of the tensor.
 * @return An all-zero Variable.
 */
function zerosVariable(shape, dtype, name) {
    // TODO(cais): Implement logic for dtype.
    return new LayerVariable(tfc.zeros(shape), dtype, name);
}
exports.zerosVariable = zerosVariable;
/**
 * Instantiates an all-zeros tensor of the same shape as another tensor.
 *
 * @param x The other tensor.
 * @param dtype DType of the tensor.
 * @param name Name of the tensor.
 * @return A newly instantiated Variable.
 */
function zerosLike(x, dtype, name) {
    return new LayerVariable(tfc.zerosLike(x), dtype, name);
}
exports.zerosLike = zerosLike;
/**
 * Instantiates an all-ones tensor and returns it.
 *
 * @param shape Shape of the tensor.
 * @param dtype DType of the tensor.
 * @param name Name of the tensor.
 * @return An all-ones Variable.
 */
function onesVariable(shape, dtype, name) {
    // TODO(cais): Implement logic for dtype.
    var allocated = tfc.ones(shape);
    return new LayerVariable(allocated, dtype, name);
}
exports.onesVariable = onesVariable;
/**
 * Instantiates an all-ones tensor of the same shape as another tensor.
 *
 * @param x The other tensor.
 * @param dtype DType of the tensor.
 * @param name Name of the tensor.
 * @return A newly instantiated Variable.
 */
function onesLike(x, dtype, name) {
    var allocated = tfc.onesLike(x);
    return new LayerVariable(allocated, dtype, name);
}
exports.onesLike = onesLike;
/**
 * Instantiate an identity matrix and returns it, as a Variable
 *
 * @param size Number of rows/columns.
 * @param dtype Data type of returned Variable.
 * @param name Name of returned Variable.
 * @return A Variable, an identity matrix.
 */
function eyeVariable(size, dtype, name) {
    return new LayerVariable(tfc.eye(size), dtype, name);
}
exports.eyeVariable = eyeVariable;
/**
 * Get a Variable with uniform distribution of values.
 * @param shape Shape of the tensor.
 * @param minval Lower bound of the uniform distribution.
 * @param maxval Upper bound of the uniform distribution.
 * @param dtype
 * @param seed
 * @param name Optional name.
 * @return The uniform-random Variable.
 */
function randomUniformVariable(shape, minval, maxval, dtype, seed, name) {
    if (name === void 0) { name = 'randomUniform'; }
    return new LayerVariable(tfc.randomUniform(shape, minval, maxval, dtype), dtype, name);
}
exports.randomUniformVariable = randomUniformVariable;
/**
 * Get a Variable with truncated-normal distribution of values.
 * @param shape Shape of the tensor.
 * @param mean mean value of the normal distribution.
 * @param stddev standard deviation of the normal distribution.
 * @param dtype
 * @param seed
 * @param name Optional name.
 * @return The truncated-normal-random Variable.
 */
function truncatedNormalVariable(shape, mean, stddev, dtype, seed, name) {
    if (mean === void 0) { mean = 0.0; }
    if (stddev === void 0) { stddev = 1.0; }
    if (name === void 0) { name = 'truncatedNormal'; }
    // TODO(cais): Implement logic for dtype and seed once they are supported
    // by deeplearn.js.
    dtype = dtype || 'float32';
    if (dtype !== 'float32' && dtype !== 'int32') {
        throw new errors_1.NotImplementedError("randomNormal does not support dType " + dtype + ".");
    }
    return new LayerVariable(tfc.truncatedNormal(shape, mean, stddev, dtype, seed), dtype, name);
}
exports.truncatedNormalVariable = truncatedNormalVariable;
/**
 * Get a Variable with normal distribution of values.
 * @param shape Shape of the tensor.
 * @param mean mean value of the normal distribution.
 * @param stddev standard deviation of the normal distribution.
 * @param dtype
 * @param seed
 * @param name Optional name.
 * @return The truncated-normal-random Variable.
 */
function randomNormalVariable(shape, mean, stddev, dtype, seed, name) {
    if (mean === void 0) { mean = 0.0; }
    if (stddev === void 0) { stddev = 1.0; }
    if (name === void 0) { name = 'randomNormal'; }
    dtype = dtype || 'float32';
    if (dtype !== 'float32' && dtype !== 'int32') {
        throw new errors_1.NotImplementedError("randomNormalVariable does not support dType " + dtype + ".");
    }
    return new LayerVariable(tfc.randomNormal(shape, mean, stddev, dtype, seed), dtype, name);
}
exports.randomNormalVariable = randomNormalVariable;
/**
 * Update the value of a Variable.
 * @param x The Variable to be updated.
 * @param xNew The new value to update to.
 * @return The Variable updated.
 */
function update(x, xNew) {
    return x.write(xNew);
}
exports.update = update;
/**
 * Update the value of a Variable by adding an increment.
 * @param x The Variable to be updated.
 * @param increment The incrment to add to `x`.
 * @return The Variable updated.
 */
function updateAdd(x, increment) {
    return x.write(tfc.add(x.read(), increment));
}
exports.updateAdd = updateAdd;
/**
 * Update the value of a Variable by subtracting a decrement.
 * @param x The Variable to be updated.
 * @param decrement The decrement to subtract from `x`.
 * @return The Variable updated.
 */
function updateSub(x, decrement) {
    return x.write(tfc.sub(x.read(), decrement));
}
exports.updateSub = updateSub;
/**
 * Get the values of an array of Variables.
 *
 * @param tensors An `Array` of `Variable`s to get the values of.
 * @return The values of the inputs, as an `Array` of`tf.Tensor`s.
 */
function batchGetValue(xs) {
    return xs.map(function (x) { return x.read(); });
}
exports.batchGetValue = batchGetValue;
/**
 * Update the value of multiple Variables at once.
 *
 * @param variablesAndValues An `Array`, each element is of type
 *   [Variable, Tensor]. The first item is the
 *   `Variable` of which the value is to be updated. The second item
 *   carries the new value.
 */
function batchSetValue(variablesAndValues) {
    variablesAndValues.forEach(function (variableAndValue) {
        var variable = variableAndValue[0];
        variable.write(variableAndValue[1]);
    });
}
exports.batchSetValue = batchSetValue;
/**
 * Returns the gradients of `variables` w.r.t. the return value of `lossFn`.
 * @param lossFn A function which returns a Scalar to be used as the function
 *   value (i.e., numerator) for differentiation.
 * @param variables List of variables to be used as the independent variables
 *   (i.e., denominator) for differentiation.
 * @returns An Array of gradients tensors.
 */
function gradients(lossFn, variables) {
    // TODO(cais): The return type signature can be simplified if deeplearn makes
    //   the corresponding type public.
    var variableList = variables.map(function (variable) { return variable.read(); });
    var valudAndGrads = tfjs_core_1.variableGrads(lossFn, variableList);
    return variables.map(function (variable) { return valudAndGrads.grads[variable.name]; });
}
exports.gradients = gradients;
//# sourceMappingURL=variables.js.map
}, function(modId) { var map = {"./backend/state":1553229508426,"./common":1553229508432,"./errors":1553229508428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508442, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var base_callbacks_1 = require("./base_callbacks");
var input_layer_1 = require("./engine/input_layer");
var training_1 = require("./engine/training");
var models_1 = require("./models");
// TODO(cais): Add doc string to all the public static functions in this
//   class; include exectuable JavaScript code snippets where applicable
//   (b/74074458).
// LayersModel and related factory methods.
/**
 * A model is a data structure that consists of `Layers` and defines inputs
 * and outputs.
 *
 * The key difference between `tf.model` and `tf.sequential` is that
 * `tf.model` is more generic, supporting an arbitrary graph (without
 * cycles) of layers. `tf.sequential` is less generic and supports only a linear
 * stack of layers.
 *
 * When creating a `tf.LayersModel`, specify its input(s) and output(s). Layers
 * are used to wire input(s) to output(s).
 *
 * For example, the following code snippet defines a model consisting of
 * two `dense` layers, with 10 and 4 units, respectively.
 *
 * ```js
 * // Define input, which has a size of 5 (not including batch dimension).
 * const input = tf.input({shape: [5]});
 *
 * // First dense layer uses relu activation.
 * const denseLayer1 = tf.layers.dense({units: 10, activation: 'relu'});
 * // Second dense layer uses softmax activation.
 * const denseLayer2 = tf.layers.dense({units: 4, activation: 'softmax'});
 *
 * // Obtain the output symbolic tensor by applying the layers on the input.
 * const output = denseLayer2.apply(denseLayer1.apply(input));
 *
 * // Create the model based on the inputs.
 * const model = tf.model({inputs: input, outputs: output});
 *
 * // The model can be used for training, evaluation and prediction.
 * // For example, the following line runs prediction with the model on
 * // some fake data.
 * model.predict(tf.ones([2, 5])).print();
 * ```
 * See also:
 *   `tf.sequential`, `tf.loadLayersModel`.
 */
/**
 * @doc {heading: 'Models', subheading: 'Creation'}
 */
function model(args) {
    return new training_1.LayersModel(args);
}
exports.model = model;
/**
 * Creates a `tf.Sequential` model.  A sequential model is any model where the
 * outputs of one layer are the inputs to the next layer, i.e. the model
 * topology is a simple 'stack' of layers, with no branching or skipping.
 *
 * This means that the first layer passed to a `tf.Sequential` model should have
 * a defined input shape. What that means is that it should have received an
 * `inputShape` or `batchInputShape` argument, or for some type of layers
 * (recurrent, Dense...) an `inputDim` argument.
 *
 * The key difference between `tf.model` and `tf.sequential` is that
 * `tf.sequential` is less generic, supporting only a linear stack of layers.
 * `tf.model` is more generic and supports an arbitrary graph (without
 * cycles) of layers.
 *
 * Examples:
 *
 * ```js
 * const model = tf.sequential();
 *
 * // First layer must have an input shape defined.
 * model.add(tf.layers.dense({units: 32, inputShape: [50]}));
 * // Afterwards, TF.js does automatic shape inference.
 * model.add(tf.layers.dense({units: 4}));
 *
 * // Inspect the inferred shape of the model's output, which equals
 * // `[null, 4]`. The 1st dimension is the undetermined batch dimension; the
 * // 2nd is the output size of the model's last layer.
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 *
 * It is also possible to specify a batch size (with potentially undetermined
 * batch dimension, denoted by "null") for the first layer using the
 * `batchInputShape` key. The following example is equivalent to the above:
 *
 * ```js
 * const model = tf.sequential();
 *
 * // First layer must have a defined input shape
 * model.add(tf.layers.dense({units: 32, batchInputShape: [null, 50]}));
 * // Afterwards, TF.js does automatic shape inference.
 * model.add(tf.layers.dense({units: 4}));
 *
 * // Inspect the inferred shape of the model's output.
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 *
 * You can also use an `Array` of already-constructed `Layer`s to create
 * a `tf.Sequential` model:
 *
 * ```js
 * const model = tf.sequential({
 *   layers: [tf.layers.dense({units: 32, inputShape: [50]}),
 *            tf.layers.dense({units: 4})]
 * });
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 */
/**
 * @doc {heading: 'Models', subheading: 'Creation'}
 */
function sequential(config) {
    return new models_1.Sequential(config);
}
exports.sequential = sequential;
/**
 * Load a model composed of Layer objects, including its topology and optionally
 * weights. See the Tutorial named "How to import a Keras Model" for usage
 * examples.
 *
 * This method is applicable to:
 *
 * 1. Models created with the `tf.layers.*`, `tf.sequential`, and
 * `tf.model` APIs of TensorFlow.js and later saved with the
 * `tf.LayersModel.save` method.
 * 2. Models converted from Keras or TensorFlow tf.keras using
 *    the [tensorflowjs_converter](https://github.com/tensorflow/tfjs-converter)
 *
 * This mode is *not* applicable to TensorFlow `SavedModel`s or their converted
 * forms. For those models, use `tf.loadGraphModel`.
 *
 * Example 1. Load a model from an HTTP server.
 *
 * ```js
 * const model = await tf.loadLayersModel(
 *     'https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
 * model.summary();
 * ```
 *
 * Example 2: Save `model`'s topology and weights to browser [local
 * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
 * then load it back.
 *
 * ```js
 * const model = tf.sequential(
 *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
 * console.log('Prediction from original model:');
 * model.predict(tf.ones([1, 3])).print();
 *
 * const saveResults = await model.save('localstorage://my-model-1');
 *
 * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
 * console.log('Prediction from loaded model:');
 * loadedModel.predict(tf.ones([1, 3])).print();
 * ```
 *
 * Example 3. Saving `model`'s topology and weights to browser
 * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
 * then load it back.
 *
 * ```js
 * const model = tf.sequential(
 *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
 * console.log('Prediction from original model:');
 * model.predict(tf.ones([1, 3])).print();
 *
 * const saveResults = await model.save('indexeddb://my-model-1');
 *
 * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
 * console.log('Prediction from loaded model:');
 * loadedModel.predict(tf.ones([1, 3])).print();
 * ```
 *
 * Example 4. Load a model from user-selected files from HTML
 * [file input
 * elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
 *
 * ```js
 * // Note: this code snippet will not work without the HTML elements in the
 * //   page
 * const jsonUpload = document.getElementById('json-upload');
 * const weightsUpload = document.getElementById('weights-upload');
 *
 * const model = await tf.loadLayersModel(
 *     tf.io.browserFiles([jsonUpload.files[0], weightsUpload.files[0]]));
 * ```
 *
 * @param pathOrIOHandler Can be either of the two formats
 *   1. A string path to the `ModelAndWeightsConfig` JSON describing
 *      the model in the canonical TensorFlow.js format. For file://
 *      (tfjs-node-only), http:// and https:// schemas, the path can be
 *      either absolute or relative.
 *   2. An `tf.io.IOHandler` object that loads model artifacts with its `load`
 *      method.
 * @param options Optional configuration arguments for the model loading,
 *   including:
 *   - `strict`: Require that the provided weights exactly match those required
 *     by the layers.  Default true.  Passing false means that both extra
 *     weights and missing weights will be silently ignored.
 *   - ｀onProgress｀: A function of the signature `(fraction: number) => void',
 *     that can be used as the progress callback for the model loading.
 * @returns A `Promise` of `tf.LayersModel`, with the topology and weights
 *     loaded.
 */
/** @doc {heading: 'Models', subheading: 'Loading'} */
function loadLayersModel(pathOrIOHandler, options) {
    if (options == null) {
        options = {};
    }
    return models_1.loadLayersModelInternal(pathOrIOHandler, options);
}
exports.loadLayersModel = loadLayersModel;
/**
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Inputs',
 *   useDocsFrom: 'Input'
 * }
 */
function input(config) {
    return input_layer_1.Input(config);
}
exports.input = input;
function registerCallbackConstructor(verbosityLevel, callbackConstructor) {
    base_callbacks_1.CallbackConstructorRegistry.registerCallbackConstructor(verbosityLevel, callbackConstructor);
}
exports.registerCallbackConstructor = registerCallbackConstructor;
//# sourceMappingURL=exports.js.map
}, function(modId) { var map = {"./base_callbacks":1553229508443,"./engine/input_layer":1553229508437,"./engine/training":1553229508445,"./models":1553229508457}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508443, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Original source: keras/callbacks.py */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("./backend/state");
var errors_1 = require("./errors");
var logs_1 = require("./logs");
var generic_utils = require("./utils/generic_utils");
/** Verbosity logging level when fitting a model. */
var ModelLoggingVerbosity;
(function (ModelLoggingVerbosity) {
    ModelLoggingVerbosity[ModelLoggingVerbosity["SILENT"] = 0] = "SILENT";
    ModelLoggingVerbosity[ModelLoggingVerbosity["VERBOSE"] = 1] = "VERBOSE";
})(ModelLoggingVerbosity = exports.ModelLoggingVerbosity || (exports.ModelLoggingVerbosity = {}));
/**
 * Abstract base class used to build new callbacks.
 *
 * The `logs` dictionary that callback methods take as argument will contain
 * keys for quantities relevant to the current batch or epoch.
 *
 * Currently, the `.fit()` method of the `Sequential` model class
 * will include the following quantities in the `logs` that
 * it passes to its callbacks:
 *
 * onEpochEnd: Logs include `acc` and `loss`, and optionally include `valLoss`
 *   (if validation is enabled in `fit`), and `valAcc` (if validation and
 *   accuracy monitoring are enabled).
 * onBatchBegin: Logs include `size`, the number of samples in the current
 *   batch.
 * onBatchEnd: Logs include `loss`, and optionally `acc` (if accuracy monitoring
 *   is enabled).
 */
var BaseCallback = /** @class */ (function () {
    function BaseCallback() {
        // TODO(michaelterry): This type is a best guess.
        this.validationData = null;
    }
    BaseCallback.prototype.setParams = function (params) {
        this.params = params;
    };
    BaseCallback.prototype.onEpochBegin = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    BaseCallback.prototype.onEpochEnd = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    BaseCallback.prototype.onBatchBegin = function (batch, logs) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    BaseCallback.prototype.onBatchEnd = function (batch, logs) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    BaseCallback.prototype.onTrainBegin = function (logs) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    BaseCallback.prototype.onTrainEnd = function (logs) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    // LayersModel needs to call Callback.setModel(), but cannot actually depend
    // on Callback because that creates a cyclic dependency.  Providing this no-op
    // method on BaseCallback breaks the cycle: this way LayersModel can depend on
    // BaseCallback but not on Callback.  The argument is typed as `Container`
    // (the superclass of LayersModel) to avoid recapitulating the cycle. Callback
    // overrides this method and enforces that the argument is really a
    // LayersModel.
    BaseCallback.prototype.setModel = function (model) {
        // Do nothing. Use Callback instead of BaseCallback to track the model.
    };
    return BaseCallback;
}());
exports.BaseCallback = BaseCallback;
/**
 * Container abstracting a list of callbacks.
 */
var CallbackList = /** @class */ (function () {
    // TODO(cais): When the need arises, uncomment the following lines and
    // implement the queue for time values.
    // private deltaTBatch: number;
    // private deltaTsBatchBegin: Array<number>;
    // private deltaTsBatchEnd: Array<number>;
    /**
     * Constructor of CallbackList.
     * @param callbacks Array of `Callback` instances.
     * @param queueLength Queue length for keeping running statistics over
     *   callback execution time.
     */
    function CallbackList(callbacks, queueLength) {
        if (queueLength === void 0) { queueLength = 10; }
        // TODO(cais): Make use of queueLength when implementing the queue for time
        // values.
        if (callbacks == null) {
            callbacks = [];
        }
        this.callbacks = callbacks;
        this.queueLength = queueLength;
    }
    CallbackList.prototype.append = function (callback) {
        this.callbacks.push(callback);
    };
    CallbackList.prototype.setParams = function (params) {
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback.setParams(params);
        }
    };
    CallbackList.prototype.setModel = function (model) {
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback.setModel(model);
        }
    };
    /**
     * Called at the start of an epoch.
     * @param epoch Index of epoch.
     * @param logs Dictionary of logs.
     */
    CallbackList.prototype.onEpochBegin = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, callback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (logs == null) {
                            logs = {};
                        }
                        _i = 0, _a = this.callbacks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        callback = _a[_i];
                        return [4 /*yield*/, callback.onEpochBegin(epoch, logs)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Called at the end of an epoch.
     * @param epoch Index of epoch.
     * @param logs Dictionary of logs.
     */
    CallbackList.prototype.onEpochEnd = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, callback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (logs == null) {
                            logs = {};
                        }
                        _i = 0, _a = this.callbacks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        callback = _a[_i];
                        return [4 /*yield*/, callback.onEpochEnd(epoch, logs)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Called  right before processing a batch.
     * @param batch Index of batch within the current epoch.
     * @param logs Dictionary of logs.
     */
    CallbackList.prototype.onBatchBegin = function (batch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, callback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (logs == null) {
                            logs = {};
                        }
                        _i = 0, _a = this.callbacks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        callback = _a[_i];
                        return [4 /*yield*/, callback.onBatchBegin(batch, logs)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Called at the end of a batch.
     * @param batch Index of batch within the current epoch.
     * @param logs Dictionary of logs.
     */
    CallbackList.prototype.onBatchEnd = function (batch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, callback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (logs == null) {
                            logs = {};
                        }
                        _i = 0, _a = this.callbacks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        callback = _a[_i];
                        return [4 /*yield*/, callback.onBatchEnd(batch, logs)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Called at the beginning of training.
     * @param logs Dictionary of logs.
     */
    CallbackList.prototype.onTrainBegin = function (logs) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, callback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (logs == null) {
                            logs = {};
                        }
                        _i = 0, _a = this.callbacks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        callback = _a[_i];
                        return [4 /*yield*/, callback.onTrainBegin(logs)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Called at the end of training.
     * @param logs Dictionary of logs.
     */
    CallbackList.prototype.onTrainEnd = function (logs) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, callback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (logs == null) {
                            logs = {};
                        }
                        _i = 0, _a = this.callbacks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        callback = _a[_i];
                        return [4 /*yield*/, callback.onTrainEnd(logs)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CallbackList;
}());
exports.CallbackList = CallbackList;
/**
 * A class that manages thread yielding during model training.
 *
 * The lifetime of an instance of `ModelTrainingYielder` is that of a
 * `LayersModel.fit()` call. In other words, each `LayersModel.fit()` call must
 * create and use a separate `ModelTrainingYielder` object.
 */
var ModelTrainingYielder = /** @class */ (function () {
    /**
     * Constructor of ModelTrainingYielder
     *
     * @param yieldEvery The configuration for how often the yielding will occur.
     */
    function ModelTrainingYielder(yieldEvery) {
        this.yieldEvery = yieldEvery;
        this.batchCount = 0;
        this.batchDurationsMillis = [];
        this.autoYieldEveryBatches = null;
        this.batchStartMillis = tfjs_core_1.util.now();
    }
    /**
     * The action taken when a batch ends.
     *
     * The action taken depends on the `yieldEvery` configuration.
     *
     * * In the case of `auto`, during the first several batches, this method
     *   will estimate the average duration of each batch. It will then decide
     *   how often the yielding will occur based on the estimation. The yielding
     *   is achieved through
     *   - Awaiting `data()` on one of the Tensors in `logs`, causing the queued
     *     operations to clear.
     *   - Calling `await nextFrame()`.
     * * In the case of `batch` or `epoch`, the yielding will occur on the end of
     *   every batch or every epoch, respectively.
     * * In the case of `never`, the yielding will never occur.
     *
     * @param logs The logs from the batch.
     */
    ModelTrainingYielder.prototype.maybeYieldOnBatch = function (logs) {
        return __awaiter(this, void 0, void 0, function () {
            var t, meanBatchDuration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.yieldEvery === 'auto')) return [3 /*break*/, 5];
                        this.batchCount++;
                        if (!(this.autoYieldEveryBatches == null)) return [3 /*break*/, 2];
                        t = tfjs_core_1.util.now();
                        return [4 /*yield*/, tfjs_core_1.nextFrame()];
                    case 1:
                        _a.sent();
                        // We skip the first few batches for timing, because they usually
                        // involve some warm-up time.
                        if (this.batchCount > ModelTrainingYielder.SKIP_FIRST_BATCHES) {
                            this.batchDurationsMillis.push(t - this.batchStartMillis);
                            if (this.batchDurationsMillis.length >=
                                ModelTrainingYielder.DECISION_BATCH_COUNT) {
                                meanBatchDuration = this.batchDurationsMillis.reduce(function (dur, prev) { return dur + prev; }) /
                                    this.batchDurationsMillis.length;
                                this.autoYieldEveryBatches = Math.round(ModelTrainingYielder.THRESHOLD_MILLIS / meanBatchDuration);
                                if (this.autoYieldEveryBatches < 1) {
                                    this.autoYieldEveryBatches = 1;
                                }
                            }
                        }
                        this.batchStartMillis = tfjs_core_1.util.now();
                        this.lastYieldBatchCount = this.batchCount;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.batchCount - this.lastYieldBatchCount >=
                            this.autoYieldEveryBatches)) return [3 /*break*/, 4];
                        return [4 /*yield*/, tfjs_core_1.nextFrame()];
                    case 3:
                        _a.sent();
                        this.lastYieldBatchCount = this.batchCount;
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        if (!(this.yieldEvery === 'batch')) return [3 /*break*/, 7];
                        return [4 /*yield*/, tfjs_core_1.nextFrame()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ModelTrainingYielder.prototype.maybeYieldOnEpoch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.yieldEvery === 'epoch')) return [3 /*break*/, 2];
                        return [4 /*yield*/, tfjs_core_1.nextFrame()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // How many batches to skip at the beginning of a `LayersModel.fit` call.
    // The first batches usually are longer than the rest, because they may
    // involve warm-up time.
    ModelTrainingYielder.SKIP_FIRST_BATCHES = 1;
    // How many batches to average over when calculating the average batch
    // duration.
    ModelTrainingYielder.DECISION_BATCH_COUNT = 2;
    // How many milliseconds to wait before yielding again.
    ModelTrainingYielder.THRESHOLD_MILLIS = 16;
    return ModelTrainingYielder;
}());
exports.ModelTrainingYielder = ModelTrainingYielder;
/**
 * Callback that accumulates epoch averages of metrics.
 *
 * This callback is automatically applied to every LayersModel.
 */
var BaseLogger = /** @class */ (function (_super) {
    __extends(BaseLogger, _super);
    function BaseLogger(yieldEvery) {
        var _this = _super.call(this) || this;
        _this.yieldEvery = yieldEvery || 'auto';
        return _this;
    }
    BaseLogger.prototype.onTrainBegin = function (logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.autoYielder = new ModelTrainingYielder(this.yieldEvery);
                return [2 /*return*/];
            });
        });
    };
    BaseLogger.prototype.onEpochBegin = function (epoch) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.seen = 0;
                this.totals = {};
                return [2 /*return*/];
            });
        });
    };
    BaseLogger.prototype.onBatchEnd = function (batch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            var batchSize, _loop_1, this_1, key;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.autoYielder.maybeYieldOnBatch(logs)];
                    case 1:
                        _a.sent();
                        if (logs == null) {
                            logs = {};
                        }
                        batchSize = logs['size'] == null ? 0 : logs['size'];
                        this.seen += batchSize;
                        _loop_1 = function (key) {
                            var value = logs[key];
                            if (typeof value === 'number') {
                                if (!this_1.totals.hasOwnProperty(key)) {
                                    this_1.totals[key] = 0;
                                }
                                this_1.totals[key] = this_1.totals[key] + value * batchSize;
                            }
                            else {
                                var oldTotalsToDispose = void 0;
                                if (key in this_1.totals) {
                                    oldTotalsToDispose = this_1.totals[key];
                                }
                                else {
                                    this_1.totals[key] = state_1.getScalar(0);
                                }
                                this_1.totals[key] = tfjs_core_1.tidy(function () { return tfjs_core_1.add(_this.totals[key], tfjs_core_1.mul(value, state_1.getScalar(batchSize))); });
                                if (oldTotalsToDispose != null) {
                                    oldTotalsToDispose.dispose();
                                }
                            }
                        };
                        this_1 = this;
                        for (key in logs) {
                            _loop_1(key);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseLogger.prototype.onEpochEnd = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_2, this_2, _i, _a, key;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.autoYielder.maybeYieldOnEpoch()];
                    case 1:
                        _b.sent();
                        if (logs != null) {
                            _loop_2 = function (key) {
                                if (this_2.totals[key] == null) {
                                    return "continue";
                                }
                                if (typeof this_2.totals[key] === 'number') {
                                    logs[key] = this_2.totals[key] / this_2.seen;
                                }
                                else {
                                    tfjs_core_1.tidy(function () {
                                        logs[key] = tfjs_core_1.mul(tfjs_core_1.div(state_1.getScalar(1), state_1.getScalar(_this.seen)), _this.totals[key]);
                                        _this.totals[key].dispose();
                                        tfjs_core_1.keep(logs[key]);
                                    });
                                }
                            };
                            this_2 = this;
                            for (_i = 0, _a = this.params['metrics']; _i < _a.length; _i++) {
                                key = _a[_i];
                                _loop_2(key);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return BaseLogger;
}(BaseCallback));
exports.BaseLogger = BaseLogger;
/**
 * Callback that records events into a `History` object. This callback is
 * automatically applied to every TF.js Layers model. The `History` object
 * gets returned by the `fit` method of models.
 */
var History = /** @class */ (function (_super) {
    __extends(History, _super);
    function History() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    History.prototype.onTrainBegin = function (logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.epoch = [];
                this.history = {};
                return [2 /*return*/];
            });
        });
    };
    History.prototype.onEpochEnd = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                if (logs == null) {
                    logs = {};
                }
                this.epoch.push(epoch);
                for (key in logs) {
                    if (this.history[key] == null) {
                        this.history[key] = [];
                    }
                    this.history[key].push(logs[key]);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Await the values of all losses and metrics.
     */
    History.prototype.syncData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, keys, indices, key, valueArray, i, valueScalar, values, n, tensorToDispose;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        keys = [];
                        indices = [];
                        for (key in this.history) {
                            valueArray = this.history[key];
                            for (i = 0; i < valueArray.length; ++i) {
                                if (typeof valueArray[i] !== 'number') {
                                    valueScalar = valueArray[i];
                                    promises.push(valueScalar.data());
                                    keys.push(key);
                                    indices.push(i);
                                }
                            }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        values = _a.sent();
                        for (n = 0; n < values.length; ++n) {
                            tensorToDispose = this.history[keys[n]][indices[n]];
                            tensorToDispose.dispose();
                            this.history[keys[n]][indices[n]] = values[n][0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return History;
}(BaseCallback));
exports.History = History;
/**
 * Custom callback for training.
 */
var CustomCallback = /** @class */ (function (_super) {
    __extends(CustomCallback, _super);
    function CustomCallback(args) {
        var _this = _super.call(this) || this;
        _this.trainBegin = args.onTrainBegin;
        _this.trainEnd = args.onTrainEnd;
        _this.epochBegin = args.onEpochBegin;
        _this.epochEnd = args.onEpochEnd;
        _this.batchBegin = args.onBatchBegin;
        _this.batchEnd = args.onBatchEnd;
        return _this;
    }
    CustomCallback.prototype.onEpochBegin = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.epochBegin != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, logs_1.resolveScalarsInLogs(logs)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.epochBegin(epoch, logs)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomCallback.prototype.onEpochEnd = function (epoch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.epochEnd != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, logs_1.resolveScalarsInLogs(logs)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.epochEnd(epoch, logs)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomCallback.prototype.onBatchBegin = function (batch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.batchBegin != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, logs_1.resolveScalarsInLogs(logs)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.batchBegin(batch, logs)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomCallback.prototype.onBatchEnd = function (batch, logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.batchEnd != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, logs_1.resolveScalarsInLogs(logs)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.batchEnd(batch, logs)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomCallback.prototype.onTrainBegin = function (logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.trainBegin != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, logs_1.resolveScalarsInLogs(logs)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.trainBegin(logs)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomCallback.prototype.onTrainEnd = function (logs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.trainEnd != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, logs_1.resolveScalarsInLogs(logs)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.trainEnd(logs)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CustomCallback;
}(BaseCallback));
exports.CustomCallback = CustomCallback;
/**
 * Standardize callbacks or configurations of them to an Array of callbacks.
 */
function standardizeCallbacks(callbacks) {
    if (callbacks == null) {
        return null;
    }
    if (callbacks instanceof BaseCallback) {
        return [callbacks];
    }
    if (Array.isArray(callbacks) && callbacks[0] instanceof BaseCallback) {
        return callbacks;
    }
    // Convert custom callback configs to custom callback objects.
    var callbackConfigs = generic_utils.toList(callbacks);
    return callbackConfigs.map(function (callbackConfig) { return new CustomCallback(callbackConfig); });
}
exports.standardizeCallbacks = standardizeCallbacks;
/**
 * A global registry for callback constructors to be used during
 * LayersModel.fit().
 */
var CallbackConstructorRegistry = /** @class */ (function () {
    /**
     * Blocks public access to constructor.
     */
    function CallbackConstructorRegistry() {
    }
    /**
     * Register a tf.LayersModel.fit() callback constructor.
     *
     * The registered callback constructor will be used to instantiate
     * callbacks for every tf.LayersModel.fit() call afterwards.
     *
     * @param verbosityLevel Level of verbosity at which the `callbackConstructor`
     *   is to be reigstered.
     * @param callbackConstructor A no-arg constructor for `tf.Callback`.
     * @throws Error, if the same callbackConstructor has been registered before,
     *   either at the same or a different `verbosityLevel`.
     */
    CallbackConstructorRegistry.registerCallbackConstructor = function (verbosityLevel, callbackConstructor) {
        tfjs_core_1.util.assert(verbosityLevel >= 0 && Number.isInteger(verbosityLevel), function () { return "Verbosity level is expected to be an integer >= 0, " +
            ("but got " + verbosityLevel); });
        CallbackConstructorRegistry.checkForDuplicate(callbackConstructor);
        if (CallbackConstructorRegistry.constructors[verbosityLevel] == null) {
            CallbackConstructorRegistry.constructors[verbosityLevel] = [];
        }
        CallbackConstructorRegistry.constructors[verbosityLevel].push(callbackConstructor);
    };
    CallbackConstructorRegistry.checkForDuplicate = function (callbackConstructor) {
        for (var levelName in CallbackConstructorRegistry.constructors) {
            var constructors = CallbackConstructorRegistry.constructors[+levelName];
            constructors.forEach(function (ctor) {
                if (ctor === callbackConstructor) {
                    throw new errors_1.ValueError('Duplicate callback constructor.');
                }
            });
        }
    };
    /**
     * Clear all registered callback constructors.
     */
    CallbackConstructorRegistry.clear = function () {
        CallbackConstructorRegistry.constructors = {};
    };
    /**
     * Create callbacks using the registered callback constructors.
     *
     * Given `verbosityLevel`, all constructors registered at that level or above
     * will be called and the instantiated callbacks will be used.
     *
     * @param verbosityLevel: Level of verbosity.
     */
    CallbackConstructorRegistry.createCallbacks = function (verbosityLevel) {
        var constructors = [];
        for (var levelName in CallbackConstructorRegistry.constructors) {
            var level = +levelName;
            if (verbosityLevel >= level) {
                constructors.push.apply(constructors, CallbackConstructorRegistry.constructors[level]);
            }
        }
        return constructors.map(function (ctor) { return new ctor(); });
    };
    CallbackConstructorRegistry.constructors = {};
    return CallbackConstructorRegistry;
}());
exports.CallbackConstructorRegistry = CallbackConstructorRegistry;
function configureCallbacks(callbacks, yieldEvery, verbose, epochs, initialEpoch, numTrainSamples, stepsPerEpoch, batchSize, doValidation, callbackMetrics) {
    var history = new History();
    var actualCallbacks = [
        new BaseLogger(yieldEvery)
    ].concat(CallbackConstructorRegistry.createCallbacks(verbose));
    if (callbacks != null) {
        actualCallbacks.push.apply(actualCallbacks, callbacks);
    }
    actualCallbacks.push(history);
    var callbackList = new CallbackList(actualCallbacks);
    // TODO(cais): Figure out when this LayersModel instance can have a
    // dynamically
    //   set property called 'callback_model' as in PyKeras.
    callbackList.setParams({
        epochs: epochs,
        initialEpoch: initialEpoch,
        samples: numTrainSamples,
        steps: stepsPerEpoch,
        batchSize: batchSize,
        verbose: verbose,
        doValidation: doValidation,
        metrics: callbackMetrics,
    });
    return { callbackList: callbackList, history: history };
}
exports.configureCallbacks = configureCallbacks;
//# sourceMappingURL=base_callbacks.js.map
}, function(modId) { var map = {"./backend/state":1553229508426,"./errors":1553229508428,"./logs":1553229508444,"./utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508444, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = require("@tensorflow/tfjs-core");
/**
 * Turn any Scalar values in a Logs object into actual number values.
 *
 * @param logs The `Logs` object to be resolved in place.
 */
function resolveScalarsInLogs(logs) {
    return __awaiter(this, void 0, void 0, function () {
        var promises, keys, scalarsToDispose, key, value, valueScalar, values, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (logs == null) {
                        return [2 /*return*/];
                    }
                    promises = [];
                    keys = [];
                    scalarsToDispose = [];
                    for (key in logs) {
                        value = logs[key];
                        if (typeof value !== 'number') {
                            valueScalar = value;
                            promises.push(valueScalar.data());
                            keys.push(key);
                            scalarsToDispose.push(valueScalar);
                        }
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    values = _a.sent();
                    for (i = 0; i < values.length; ++i) {
                        logs[keys[i]] = values[i][0];
                    }
                    // Dispose the original scalar tensors.
                    tfjs_core_1.dispose(scalarsToDispose);
                    return [2 /*return*/];
            }
        });
    });
}
exports.resolveScalarsInLogs = resolveScalarsInLogs;
/**
 * Dispose all Tensors in an UnresolvedLogs object.
 *
 * @param logs An `UnresolvedLogs` object potentially containing `tf.Tensor`s in
 *   places where the values can be `tf.Tensor` or `number`.
 */
function disposeTensorsInLogs(logs) {
    if (logs == null) {
        return;
    }
    for (var key in logs) {
        var value = logs[key];
        if (typeof value !== 'number') {
            value.dispose();
        }
    }
}
exports.disposeTensorsInLogs = disposeTensorsInLogs;
//# sourceMappingURL=logs.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508445, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Original Source: engine/training.py */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var K = require("../backend/tfjs_backend");
var common_1 = require("../common");
var errors_1 = require("../errors");
var losses = require("../losses");
var Metrics = require("../metrics");
var optimizers = require("../optimizers");
var generic_utils_1 = require("../utils/generic_utils");
var layer_utils_1 = require("../utils/layer_utils");
var math_utils_1 = require("../utils/math_utils");
var version_1 = require("../version");
var container_1 = require("./container");
var executor_1 = require("./executor");
var training_dataset_1 = require("./training_dataset");
var training_tensors_1 = require("./training_tensors");
/**
 * Helper function for polymorphic input data: 1. singleton Tensor.
 */
function isDataTensor(x) {
    return x instanceof tfjs_core_1.Tensor;
}
exports.isDataTensor = isDataTensor;
/**
 * Helper function for polymorphic input data: 2. Array of Tensor.
 */
function isDataArray(x) {
    return Array.isArray(x);
}
exports.isDataArray = isDataArray;
/**
 * Helper function for polymorphic input data: 3. "dict" of Tensor.
 */
function isDataDict(x) {
    return !isDataTensor(x) && !isDataArray(x);
}
exports.isDataDict = isDataDict;
/**
 * Normalizes inputs and targets provided by users.
 * @param data User-provided input data (polymorphic).
 * @param names An Array of expected Tensor names.
 * @param shapes Optional Array of expected Tensor shapes.
 * @param checkBatchAxis Whether to check that the batch axis of the arrays
 *   match  the expected value found in `shapes`.
 * @param exceptionPrefix String prefix used for exception formatting.
 * @returns List of standardized input Tensors (one Tensor per model input).
 * @throws ValueError: in case of improperly formatted user data.
 */
function standardizeInputData(data, names, shapes, checkBatchAxis, exceptionPrefix) {
    if (checkBatchAxis === void 0) { checkBatchAxis = true; }
    if (exceptionPrefix === void 0) { exceptionPrefix = ''; }
    if (names == null || names.length === 0) {
        // Check for the case where the model expected no data, but some data got
        // sent.
        if (data != null) {
            var gotUnexpectedData = false;
            if (isDataArray(data) && data.length > 0) {
                gotUnexpectedData = true;
            }
            else if (isDataDict(data)) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        gotUnexpectedData = true;
                        break;
                    }
                }
            }
            else {
                // `data` is a singleton Tensor in this case.
                gotUnexpectedData = true;
            }
            if (gotUnexpectedData) {
                throw new errors_1.ValueError("Error when checking model " + exceptionPrefix + " expected no data, " +
                    ("but got " + data));
            }
        }
        return [];
    }
    if (data == null) {
        return names.map(function (name) { return null; });
    }
    var arrays;
    if (isDataDict(data)) {
        data = data;
        arrays = [];
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var name_1 = names_1[_i];
            if (data[name_1] == null) {
                throw new errors_1.ValueError("No data provided for \"" + name_1 + "\". Need data for each key in: " +
                    ("" + names));
            }
            arrays.push(data[name_1]);
        }
    }
    else if (isDataArray(data)) {
        data = data;
        if (data.length !== names.length) {
            throw new errors_1.ValueError("Error when checking model " + exceptionPrefix + ": the Array of " +
                "Tensors that you are passing to your model is not the size the " +
                ("model expected. Expected to see " + names.length + " Tensor(s), but ") +
                ("instead got the following list of Tensor(s): " + data));
        }
        arrays = data;
    }
    else {
        data = data;
        if (names.length > 1) {
            throw new errors_1.ValueError("The model " + exceptionPrefix + " expects " + names.length + " Tensor(s), " +
                ("but only received one Tensor. Found: Tensor with shape " + data.shape));
        }
        arrays = [data];
    }
    arrays = training_tensors_1.ensureTensorsRank2OrHigher(arrays);
    // Check shape compatibility.
    if (shapes != null) {
        for (var i = 0; i < names.length; ++i) {
            if (shapes[i] == null) {
                continue;
            }
            var array = arrays[i];
            if (array.shape.length !== shapes[i].length) {
                throw new errors_1.ValueError("Error when checking " + exceptionPrefix + ": expected " + names[i] + " " +
                    ("to have " + shapes[i].length + " dimension(s). but got array with ") +
                    ("shape " + array.shape));
            }
            for (var j = 0; j < shapes[i].length; ++j) {
                if (j === 0 && !checkBatchAxis) {
                    // Skip the first (batch) axis.
                    continue;
                }
                var dim = array.shape[j];
                var refDim = shapes[i][j];
                if (refDim != null && refDim >= 0 && dim !== refDim) {
                    throw new errors_1.ValueError("Error when checking " + exceptionPrefix + ": expected " + names[i] + " " +
                        ("to have shape [" + shapes[i] + "], but got array with shape ") +
                        ("[" + array.shape + "]."));
                }
            }
        }
    }
    return arrays;
}
exports.standardizeInputData = standardizeInputData;
/**
 * User input validation for Tensors.
 * @param inputs `Array` of `tf.Tensor`s for inputs.
 * @param targets `Array` of `tf.Tensor`s for targets.
 * @param weights Optional `Array` of `tf.Tensor`s for sample weights.
 * @throws ValueError: in case of incorrectly formatted data.
 */
function checkArrayLengths(inputs, targets, weights) {
    var setX = generic_utils_1.unique(inputs.map(function (input) { return input.shape[0]; }));
    setX.sort();
    var setY = generic_utils_1.unique(targets.map(function (target) { return target.shape[0]; }));
    setY.sort();
    // TODO(cais): Check `weights` as well.
    if (setX.length > 1) {
        throw new errors_1.ValueError("All input Tensors (x) should have the same number of samples. " +
            "Got array shapes: " +
            ("" + JSON.stringify(inputs.map(function (input) { return input.shape; }))));
    }
    if (setY.length > 1) {
        throw new errors_1.ValueError("All target Tensors (y) should have the same number of samples. " +
            "Got array shapes: " +
            ("" + JSON.stringify(targets.map(function (target) { return target.shape; }))));
    }
    if (setX.length > 0 && setY.length > 0 && !tfjs_core_1.util.arraysEqual(setX, setY)) {
        throw new errors_1.ValueError("Input Tensors should have the same number of samples as target " +
            ("Tensors. Found " + setX[0] + " input sample(s) and " + setY[0] + " target ") +
            "sample(s).");
    }
}
exports.checkArrayLengths = checkArrayLengths;
/**
 * Validation on the compatibility of targes and loss functions.
 *
 * This helps prevent users from using loss functions incorrectly.
 *
 * @param targets `Array` of `tf.Tensor`s of targets.
 * @param lossFns `Array` of loss functions.
 * @param outputShapes `Array` of shapes of model outputs.
 */
function checkLossAndTargetCompatibility(targets, lossFns, outputShapes) {
    // TODO(cais): Dedicated test coverage?
    var keyLosses = [
        losses.meanSquaredError, losses.binaryCrossentropy,
        losses.categoricalCrossentropy
    ];
    for (var i = 0; i < targets.length; ++i) {
        var y = targets[i];
        var loss = lossFns[i];
        var shape = outputShapes[i];
        if (loss == null) {
            continue;
        }
        if (loss === losses.categoricalCrossentropy) {
            if (y.shape[y.shape.length - 1] === 1) {
                throw new errors_1.ValueError("You are passing a target array of shape " + y.shape + " while using " +
                    "a loss 'categorical_crossentropy'. 'categorical_crossentropy'" +
                    "expects targets to be binary matrices (1s and 0s) of shape " +
                    "[samples, classes].");
                // TODO(cais): Example code in error message.
            }
        }
        if (keyLosses.indexOf(loss) !== -1) {
            var slicedYShape = y.shape.slice(1);
            var slicedShape = shape.slice(1);
            for (var j = 0; j < slicedYShape.length; ++j) {
                var targetDim = slicedYShape[j];
                var outDim = slicedShape[j];
                if (outDim != null && targetDim !== outDim) {
                    throw new errors_1.ValueError("A target Tensor with shape " + y.shape + " was passed for an " +
                        ("output of shape " + shape + ", while using a loss function that ") +
                        "expects targets to have the same shape as the output.");
                }
            }
        }
    }
}
/**
 * Check inputs provided by the user.
 *
 * Porting Note: This corresponds to _standardize_input_data() in Python
 *   Keras. Because of the strong typing in TF.js, we do not need to convert
 *   the data. Specifically:
 *   1) in PyKeras, `data` can be `DataFrame` instances from pandas, for
 *      example. We don't need to worry about that here because there is no
 *      widely popular javascript/typesdcript equivalent of pandas (so far).
 *      If one becomes available in the future, we can add support.
 *   2) in PyKeras, inputs can be Python dict. But here we are stipulating
 * that the data is either a single `tf.Tensor` or an Array of `tf.Tensor`s. We
 * may add support for `Object` data inputs in the future when the need
 * arises.
 *
 * Instead, we perform basic checks for number of parameters and shapes.
 *
 * @param data: The input data.
 * @param names: Name for the inputs, from the model.
 * @param shapes: Expected shapes for the input data, from the model.
 * @param checkBatchAxis: Whether the size along the batch axis (i.e., the
 *   first dimension) will be checked for matching.
 * @param exceptionPrefix: Execption prefix message, used in generating error
 *   messages.
 * @throws ValueError: on incorrect number of inputs or mismatches in shapes.
 */
function checkInputData(data, names, shapes, checkBatchAxis, exceptionPrefix) {
    if (checkBatchAxis === void 0) { checkBatchAxis = true; }
    if (exceptionPrefix === void 0) { exceptionPrefix = ''; }
    var arrays;
    if (Array.isArray(data)) {
        if (data.length !== names.length) {
            throw new errors_1.ValueError("Error when checking model " + exceptionPrefix + ": the Array of " +
                "Tensors that you are passing to your model is not the size the " +
                ("the model expected. Expected to see " + names.length + " Tensor(s),") +
                (" but instead got " + data.length + " Tensors(s)."));
        }
        arrays = data;
    }
    else {
        if (names.length > 1) {
            throw new errors_1.ValueError("The model expects " + names.length + " " + exceptionPrefix + " Tensors, " +
                "but only received one Tensor. Found: array with shape " +
                (JSON.stringify(data.shape) + "."));
        }
        arrays = [data];
    }
    if (shapes != null) {
        for (var i = 0; i < names.length; ++i) {
            if (shapes[i] == null) {
                continue;
            }
            var array = arrays[i];
            if (array.shape.length !== shapes[i].length) {
                throw new errors_1.ValueError("Error when checking " + exceptionPrefix + ": expected " + names[i] + " " +
                    ("to have " + shapes[i].length + " dimension(s), but got array with ") +
                    ("shape " + JSON.stringify(array.shape)));
            }
            for (var j = 0; j < shapes[i].length; ++j) {
                if (j === 0 && !checkBatchAxis) {
                    continue;
                }
                var dim = array.shape[j];
                var refDim = shapes[i][j];
                if (refDim != null) {
                    if (refDim !== dim) {
                        throw new errors_1.ValueError("Error when checking " + exceptionPrefix + ": expected " +
                            (names[i] + " to have shape " + JSON.stringify(shapes[i]) + " but ") +
                            ("got array with shape " + JSON.stringify(array.shape) + "."));
                    }
                }
            }
        }
    }
}
/**
 * Maps metric functions to model outputs.
 * @param metrics An `Array` or dict (`Object`) of metric functions.
 * @param outputNames An `Array` of the names of model outputs.
 * @returns An `Array` (one entry per model output) of `Array` of metric
 *   functions. For instance, if the model has 2 outputs, and for the first
 *   output we want to compute `binaryAccuracy` and `binaryCrossentropy`,
 *   and just `binaryAccuracy` for the second output, the `Array` would look
 *   like:
 *     `[[binaryAccuracy, binaryCrossentropy],  [binaryAccuracy]]`
 * @throws TypeError: if `null` or `undefined` value is provided.
 */
function collectMetrics(metrics, outputNames) {
    if (metrics == null || Array.isArray(metrics) && metrics.length === 0) {
        return outputNames.map(function (name) { return []; });
    }
    if (Array.isArray(metrics)) {
        // We then apply all metrics to all outputs.
        return outputNames.map(function (name) { return metrics; });
    }
    else if (metrics != null) {
        // In this case, metrics is a dict.
        var nestedMetrics = [];
        for (var _i = 0, outputNames_1 = outputNames; _i < outputNames_1.length; _i++) {
            var name_2 = outputNames_1[_i];
            var outputMetrics = metrics.hasOwnProperty(name_2) ? metrics[name_2] : [];
            if (!Array.isArray(outputMetrics)) {
                outputMetrics = [outputMetrics];
            }
            nestedMetrics.push(outputMetrics);
        }
        return nestedMetrics;
    }
    else {
        throw new TypeError('Type of metrics argument not understood. Expected an Array or ' +
            'Object, found: ' + metrics);
    }
}
var LAYERS_MODEL_FORMAT_NAME = 'layers-model';
/**
 * A `tf.LayersModel` is a directed, acyclic graph of `tf.Layer`s plus methods
 * for training, evaluation, prediction and saving.
 *
 * `tf.LayersModel` is the basic unit of training, inference and evaluation in
 * TensorFlow.js. To create a `tf.LayersModel`, use `tf.LayersModel`.
 *
 * See also:
 *   `tf.Sequential`, `tf.loadLayersModel`.
 */
/** @doc {heading: 'Models', subheading: 'Classes'} */
var LayersModel = /** @class */ (function (_super) {
    __extends(LayersModel, _super);
    function LayersModel(args) {
        var _this = _super.call(this, args) || this;
        _this.isTraining = false;
        return _this;
    }
    /**
     * Print a text summary of the model's layers.
     *
     * The summary includes
     * - Name and type of all layers that comprise the model.
     * - Output shape(s) of the layers
     * - Number of weight parameters of each layer
     * - If the model has non-sequential-like topology, the inputs each layer
     *   receives
     * - The total number of trainable and non-trainable parameters of the model.
     *
     * ```js
     * const input1 = tf.input({shape: [10]});
     * const input2 = tf.input({shape: [20]});
     * const dense1 = tf.layers.dense({units: 4}).apply(input1);
     * const dense2 = tf.layers.dense({units: 8}).apply(input2);
     * const concat = tf.layers.concatenate().apply([dense1, dense2]);
     * const output =
     *     tf.layers.dense({units: 3, activation: 'softmax'}).apply(concat);
     *
     * const model = tf.LayersModel({inputs: [input1, input2], outputs: output});
     * model.summary();
     * ```
     *
     * @param lineLength Custom line length, in number of characters.
     * @param positions Custom widths of each of the columns, as either
     *   fractions of `lineLength` (e.g., `[0.5, 0.75, 1]`) or absolute number
     *   of characters (e.g., `[30, 50, 65]`). Each number corresponds to
     *   right-most (i.e., ending) position of a column.
     * @param printFn Custom print function. Can be used to replace the default
     *   `console.log`. For example, you can use `x => {}` to mute the printed
     *   messages in the console.
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    LayersModel.prototype.summary = function (lineLength, positions, printFn) {
        if (printFn === void 0) { printFn = console.log; }
        if (!this.built) {
            throw new errors_1.ValueError("This model has never been called, thus its weights have not been " +
                "created yet. So no summary can be displayed. Build the model " +
                "first (e.g., by calling it on some test data).");
        }
        layer_utils_1.printSummary(this, lineLength, positions, printFn);
    };
    /**
     * Configures and prepares the model for training and evaluation.  Compiling
     * outfits the model with an optimizer, loss, and/or metrics.  Calling `fit`
     * or `evaluate` on an un-compiled model will throw an error.
     *
     * @param args a `ModelCompileArgs` specifying the loss, optimizer, and
     * metrics to be used for fitting and evaluating this model.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.compile = function (args) {
        var _this = this;
        if (args.loss == null) {
            args.loss = [];
        }
        this.loss = args.loss;
        if (typeof args.optimizer === 'string') {
            this.optimizer_ = optimizers.getOptimizer(args.optimizer);
            this.isOptimizerOwned = true;
        }
        else {
            if (!(args.optimizer instanceof tfjs_core_1.Optimizer)) {
                throw new errors_1.ValueError("User-defined optimizer must be an instance of tf.Optimizer.");
            }
            this.optimizer_ = args.optimizer;
            this.isOptimizerOwned = false;
        }
        // TODO(cais): Add lossWeights.
        // TODO(cais): Add sampleWeightMode.
        // Prepare loss functions.
        var lossFunctions = [];
        if (!Array.isArray(args.loss) && typeof args.loss !== 'string' &&
            typeof args.loss !== 'function') {
            args.loss = args.loss;
            for (var name_3 in args.loss) {
                if (this.outputNames.indexOf(name_3) === -1) {
                    throw new errors_1.ValueError("Unknown entry in loss dictionary: \"" + name_3 + "\". " +
                        ("Only expected the following keys: " + this.outputNames));
                }
            }
            for (var _i = 0, _a = this.outputNames; _i < _a.length; _i++) {
                var name_4 = _a[_i];
                if (args.loss[name_4] == null) {
                    console.warn("Output \"" + name_4 + "\" is missing from loss dictionary. We assume " +
                        "this was done on purpose, and we will not be expecting data " +
                        ("to be passed to " + name_4 + " during training"));
                }
                lossFunctions.push(losses.get(args.loss[name_4]));
            }
        }
        else if (Array.isArray(args.loss)) {
            if (args.loss.length !== this.outputs.length) {
                throw new errors_1.ValueError("When passing an Array as loss, it should have one entry per " +
                    ("model output. The model has " + this.outputs.length + " output(s), ") +
                    ("but you passed loss=" + args.loss + "."));
            }
            var theLosses = args.loss;
            lossFunctions = theLosses.map(function (l) { return losses.get(l); });
        }
        else {
            var lossFunction_1 = losses.get(args.loss);
            this.outputs.forEach(function (_) {
                lossFunctions.push(lossFunction_1);
            });
        }
        this.lossFunctions = lossFunctions;
        this.feedOutputNames = [];
        this.feedOutputShapes = [];
        this.feedLossFns = [];
        for (var i = 0; i < this.outputs.length; ++i) {
            // TODO(cais): Logic for skipping target(s).
            var shape = this.internalOutputShapes[i];
            var name_5 = this.outputNames[i];
            this.feedOutputNames.push(name_5);
            this.feedOutputShapes.push(shape);
            this.feedLossFns.push(this.lossFunctions[i]);
        }
        // TODO(cais): Add logic for weighted losses.
        // TODO(cais): Add logic for output masks.
        // TODO(cais): Add logic for sample weights.
        var skipTargetIndices = [];
        // Prepare metrics.
        this.metrics = args.metrics;
        // TODO(cais): Add weightedMetrics.
        this.metricsNames = ['loss'];
        this.metricsTensors = [];
        // Compute total loss.
        // Porting Note: In PyKeras, metrics_tensors are symbolic tensor objects.
        //   Here, metricsTensors are TypeScript functions. This difference is due
        //   to the difference in symbolic/imperative property of the backends.
        common_1.nameScope('loss', function () {
            for (var i = 0; i < _this.outputs.length; ++i) {
                if (skipTargetIndices.indexOf(i) !== -1) {
                    continue;
                }
                // TODO(cais): Add weightedLoss, sampleWeight and mask.
                //   The following line should be weightedLoss
                var weightedLoss = _this.lossFunctions[i];
                if (_this.outputs.length > 1) {
                    _this.metricsTensors.push([weightedLoss, i]);
                    _this.metricsNames.push(_this.outputNames[i] + '_loss');
                }
            }
            // Porting Note: Due to the imperative nature of the backend, we calculate
            //   the regularizer penalties in the totalLossFunction, instead of here.
        });
        var nestedMetrics = collectMetrics(args.metrics, this.outputNames);
        // TODO(cais): Add nestedWeightedMetrics.
        /**
         * Helper function used in loop below.
         */
        var appendMetric = function (outputIndex, metricName, metricTensor) {
            if (_this.outputNames.length > 1) {
                metricName = _this.outputNames[outputIndex] + '_' + metricName;
            }
            _this.metricsNames.push(metricName);
            _this.metricsTensors.push([metricTensor, outputIndex]);
        };
        common_1.nameScope('metric', function () {
            var _loop_1 = function (i) {
                if (skipTargetIndices.indexOf(i) !== -1) {
                    return "continue";
                }
                var outputMetrics = nestedMetrics[i];
                // TODO(cais): Add weights and outputWeightedMetrics.
                // TODO(cais): Add optional arg `weights` to the following function.
                var handleMetrics = function (metrics) {
                    var metricNamePrefix = '';
                    var metricName;
                    var accFn;
                    var weightedMetricFn;
                    var _loop_2 = function (metric) {
                        if (['accuracy', 'acc', 'crossentropy', 'ce'].indexOf(metric) !==
                            -1) {
                            var outputShape = _this.internalOutputShapes[i];
                            if (outputShape[outputShape.length - 1] === 1 ||
                                _this.lossFunctions[i] === losses.binaryCrossentropy) {
                                // case: binary accuracy/crossentropy.
                                if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                    accFn = Metrics.binaryAccuracy;
                                }
                                else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                    accFn = Metrics.binaryCrossentropy;
                                }
                            }
                            else if (_this.lossFunctions[i] ===
                                losses.sparseCategoricalCrossentropy) {
                                // case: categorical accuracy / crossentropy with sparse
                                // targets.
                                if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                    accFn = Metrics.sparseCategoricalAccuracy;
                                }
                                else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                    accFn = Metrics.sparseCategoricalCrossentropy;
                                }
                            }
                            else {
                                // case: categorical accuracy / crossentropy.
                                if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                    accFn = Metrics.categoricalAccuracy;
                                }
                                else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                    accFn = Metrics.categoricalCrossentropy;
                                }
                            }
                            var suffix = void 0;
                            if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                suffix = 'acc';
                            }
                            else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                suffix = 'ce';
                            }
                            // TODO(cais): Add weighting actually.
                            weightedMetricFn = accFn;
                            metricName = metricNamePrefix + suffix;
                        }
                        else {
                            var metricFn = Metrics.get(metric);
                            // TODO(cais): Add weighting actually.
                            weightedMetricFn = metricFn;
                            metricName = metricNamePrefix + metric;
                        }
                        // TODO(cais): Add weighting and masking to metricResult.
                        var metricResult;
                        common_1.nameScope(metricName, function () {
                            metricResult = weightedMetricFn;
                        });
                        appendMetric(i, metricName, metricResult);
                    };
                    //  TODO(cais): Use 'weights_' for weighted metrics.
                    for (var _i = 0, metrics_1 = metrics; _i < metrics_1.length; _i++) {
                        var metric = metrics_1[_i];
                        _loop_2(metric);
                    }
                };
                handleMetrics(outputMetrics);
            };
            for (var i = 0; i < _this.outputs.length; ++i) {
                _loop_1(i);
            }
        });
        // Porting Notes: Given the imperative backend of tfjs-core,
        //   there is no need for constructing the symbolic graph and placeholders.
        this.collectedTrainableWeights = this.trainableWeights;
    };
    /**
     * Check trainable weights count consistency.
     *
     * This will raise a warning if `this.trainableWeights` and
     * `this.collectedTrainableWeights` are inconsistent (i.e., have different
     * numbers of parameters).
     * Inconsistency will typically arise when one modifies `model.trainable`
     * without calling `model.compile()` again.
     */
    LayersModel.prototype.checkTrainableWeightsConsistency = function () {
        if (this.collectedTrainableWeights == null) {
            return;
        }
        if (this.trainableWeights.length !==
            this.collectedTrainableWeights.length) {
            console.warn('Discrepancy between trainableweights and collected trainable ' +
                'weights. Did you set `model.trainable` without calling ' +
                '`model.compile()` afterwards?');
        }
    };
    /**
     * Returns the loss value & metrics values for the model in test mode.
     *
     * Loss and metrics are specified during `compile()`, which needs to happen
     * before calls to `evaluate()`.
     *
     * Computation is done in batches.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const result = model.evaluate(
     *     tf.ones([8, 10]), tf.ones([8, 1]), {batchSize: 4});
     * result.print();
     * ```
     *
     * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
     * model has multiple inputs.
     * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
     * model has multiple outputs.
     * @param args A `ModelEvaluateArgs`, containing optional fields.
     *
     * @return `Scalar` test loss (if the model has a single output and no
     *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
     *   and/or metrics). The attribute `model.metricsNames`
     *   will give you the display labels for the scalar outputs.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.evaluate = function (x, y, args) {
        if (args === void 0) { args = {}; }
        var batchSize = args.batchSize == null ? 32 : args.batchSize;
        training_tensors_1.checkBatchSize(batchSize);
        // TODO(cais): Standardize `config.sampleWeights` as well.
        // Validate user data.
        var standardizedOuts = this.standardizeUserData(x, y, true, batchSize);
        try {
            // TODO(cais): If uses `useLearningPhase`, set the corresponding element
            // of the input to 0.
            var ins = standardizedOuts[0].concat(standardizedOuts[1]);
            this.makeTestFunction();
            var f = this.testFunction;
            var testOuts = this.testLoop(f, ins, batchSize, args.verbose, args.steps);
            return generic_utils_1.singletonOrArray(testOuts);
        }
        finally {
            training_tensors_1.disposeNewTensors(standardizedOuts[0], x);
            training_tensors_1.disposeNewTensors(standardizedOuts[1], y);
        }
    };
    // TODO(cais): Add code snippet below once real dataset objects are
    //   available.
    /**
     * Evaluate model using a dataset object.
     *
     * Note: Unlike `evaluate()`, this method is asynchronous (`async`);
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for evaluation. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g..
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs. Of the two items in the array, the
     *   first is the input feature(s) and the second is the output target(s).
     * @param args A configuration object for the dataset-based evaluation.
     * @returns Loss and metric values as an Array of `Scalar` objects.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.evaluateDataset = function (dataset, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.makeTestFunction();
                return [2 /*return*/, training_dataset_1.evaluateDataset(this, dataset, args)];
            });
        });
    };
    /**
     * Get number of samples provided for training, evaluation or prediction.
     *
     * @param ins Input `tf.Tensor`.
     * @param batchSize Integer batch size, optional.
     * @param steps Total number of steps (batches of samples) before
     * declaring loop finished. Optional.
     * @param stepsName The public API's parameter name for `steps`.
     * @returns Number of samples provided.
     */
    LayersModel.prototype.checkNumSamples = function (ins, batchSize, steps, stepsName) {
        if (stepsName === void 0) { stepsName = 'steps'; }
        var numSamples;
        if (steps != null) {
            numSamples = null;
            if (batchSize != null) {
                throw new errors_1.ValueError("If " + stepsName + " is set, batchSize must be null or undefined." +
                    ("Got batchSize = " + batchSize));
            }
        }
        else if (ins != null) {
            if (Array.isArray(ins)) {
                numSamples = ins[0].shape[0];
            }
            else {
                numSamples = ins.shape[0];
            }
        }
        else {
            throw new errors_1.ValueError("Either the input data should have a defined shape, or " +
                (stepsName + " shoud be specified."));
        }
        return numSamples;
    };
    /**
     * Execute internal tensors of the model with input data feed.
     * @param inputs Input data feed. Must match the inputs of the model.
     * @param outputs Names of the output tensors to be fetched. Must match
     *   names of the SymbolicTensors that belong to the graph.
     * @returns Fetched values for `outputs`.
     */
    LayersModel.prototype.execute = function (inputs, outputs) {
        if (Array.isArray(outputs) && outputs.length === 0) {
            throw new errors_1.ValueError('`outputs` is an empty Array, which is not allowed.');
        }
        var outputsIsArray = Array.isArray(outputs);
        var outputNames = (outputsIsArray ? outputs :
            [outputs]);
        var outputSymbolicTensors = this.retrieveSymbolicTensors(outputNames);
        // Format the input into a FeedDict.
        var feedDict = new executor_1.FeedDict();
        if (inputs instanceof tfjs_core_1.Tensor) {
            inputs = [inputs];
        }
        if (Array.isArray(inputs)) {
            if (inputs.length !== this.inputs.length) {
                throw new errors_1.ValueError("The number of inputs provided (" + inputs.length + ") " +
                    "does not match the number of inputs of this model " +
                    ("(" + this.inputs.length + ")."));
            }
            for (var i = 0; i < this.inputs.length; ++i) {
                feedDict.add(this.inputs[i], inputs[i]);
            }
        }
        else {
            for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
                var input = _a[_i];
                var tensorValue = inputs[input.name];
                if (tensorValue == null) {
                    throw new errors_1.ValueError("No value is provided for the model's input " + input.name);
                }
                feedDict.add(input, tensorValue);
            }
        }
        // Run execution.
        var executeOutputs = executor_1.execute(outputSymbolicTensors, feedDict);
        return outputsIsArray ? executeOutputs : executeOutputs[0];
    };
    /**
     * Retrieve the model's internal symbolic tensors from symbolic-tensor names.
     */
    LayersModel.prototype.retrieveSymbolicTensors = function (symbolicTensorNames) {
        var outputSymbolicTensors = generic_utils_1.pyListRepeat(null, symbolicTensorNames.length);
        var outputsRemaining = symbolicTensorNames.length;
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            var layerOutputs = Array.isArray(layer.output) ?
                layer.output :
                [layer.output];
            var layerOutputNames = layerOutputs.map(function (output) { return output.name; });
            for (var i = 0; i < symbolicTensorNames.length; ++i) {
                var index = layerOutputNames.indexOf(symbolicTensorNames[i]);
                if (index !== -1) {
                    outputSymbolicTensors[i] = layerOutputs[index];
                    outputsRemaining--;
                }
                if (outputsRemaining === 0) {
                    break;
                }
            }
            if (outputsRemaining === 0) {
                break;
            }
        }
        if (outputsRemaining > 0) {
            var remainingNames_1 = [];
            outputSymbolicTensors.forEach(function (tensor, i) {
                if (tensor == null) {
                    remainingNames_1.push(symbolicTensorNames[i]);
                }
            });
            throw new errors_1.ValueError("Cannot find SymbolicTensors for output name(s): " +
                ("" + JSON.stringify(remainingNames_1)));
        }
        return outputSymbolicTensors;
    };
    /**
     * Helper method to loop over some data in batches.
     *
     * Porting Note: Not using the functional approach in the Python equivalent
     *   due to the imperative backend.
     * Porting Note: Does not support step mode currently.
     *
     * @param ins: input data
     * @param batchSize: integer batch size.
     * @param verbose: verbosity model
     * @returns: Predictions as `tf.Tensor` (if a single output) or an `Array` of
     *   `tf.Tensor` (if multipe outputs).
     */
    LayersModel.prototype.predictLoop = function (ins, batchSize, verbose) {
        var _this = this;
        if (batchSize === void 0) { batchSize = 32; }
        if (verbose === void 0) { verbose = false; }
        return tfc.tidy(function () {
            var numSamples = _this.checkNumSamples(ins);
            if (verbose) {
                throw new errors_1.NotImplementedError('Verbose predictLoop() is not implemented yet.');
            }
            // Sample-based predictions.
            // Porting Note: Tensor currently does not support sliced assignments as
            //   in numpy, e.g., x[1:3] = y. Therefore we use concatenation while
            //   iterating over the batches.
            var batches = training_tensors_1.makeBatches(numSamples, batchSize);
            var outsBatches = _this.outputs.map(function (output) { return []; });
            var _loop_3 = function (batchIndex) {
                var batchOuts = tfc.tidy(function () {
                    var batchStart = batches[batchIndex][0];
                    var batchEnd = batches[batchIndex][1];
                    // TODO(cais): Take care of the case of the last element is a flag for
                    //   training/test.
                    var insBatch = training_tensors_1.sliceArrays(ins, batchStart, batchEnd);
                    // Construct the feeds for execute();
                    var feeds = [];
                    if (Array.isArray(insBatch)) {
                        for (var i = 0; i < insBatch.length; ++i) {
                            feeds.push({ key: _this.inputs[i], value: insBatch[i] });
                        }
                    }
                    else {
                        feeds.push({ key: _this.inputs[0], value: insBatch });
                    }
                    var feedDict = new executor_1.FeedDict(feeds);
                    return executor_1.execute(_this.outputs, feedDict);
                });
                batchOuts.forEach(function (batchOut, i) { return outsBatches[i].push(batchOut); });
            };
            // TODO(cais): Can the scope() be pushed down inside the for loop?
            for (var batchIndex = 0; batchIndex < batches.length; ++batchIndex) {
                _loop_3(batchIndex);
            }
            return generic_utils_1.singletonOrArray(outsBatches.map(function (batches) { return tfc.concat(batches, 0); }));
        });
    };
    /**
     * Generates output predictions for the input samples.
     *
     * Computation is done in batches.
     *
     * Note: the "step" mode of predict() is currently not supported.
     *   This is because the TensorFlow.js core backend is imperative only.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predict(tf.ones([8, 10]), {batchSize: 4}).print();
     * ```
     *
     * @param x The input data, as an Tensor, or an `Array` of `tf.Tensor`s if
     *   the model has multiple inputs.
     * @param args A `ModelPredictArgs` object containing optional fields.
     *
     * @return Prediction results as a `tf.Tensor`(s).
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and the model's expectations, or in case a stateful model receives a
     *   number of samples that is not a multiple of the batch size.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.predict = function (x, args) {
        if (args === void 0) { args = {}; }
        var xsRank2OrHigher = training_tensors_1.ensureTensorsRank2OrHigher(x);
        checkInputData(xsRank2OrHigher, this.inputNames, this.feedInputShapes, false);
        try {
            // TODO(cais): Take care of stateful models.
            //   if (this.stateful) ...
            // TODO(cais): Take care of the learning_phase boolean flag.
            //   if (this.useLearningPhase) ...
            var batchSize = args.batchSize == null ? 32 : args.batchSize;
            training_tensors_1.checkBatchSize(batchSize);
            return this.predictLoop(xsRank2OrHigher, batchSize);
        }
        finally {
            training_tensors_1.disposeNewTensors(xsRank2OrHigher, x);
        }
    };
    /**
     * Returns predictions for a single batch of samples.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predictOnBatch(tf.ones([8, 10])).print();
     * ```
     * @param x: Input samples, as an Tensor
     * @return Tensor(s) of predictions
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    LayersModel.prototype.predictOnBatch = function (x) {
        checkInputData(x, this.inputNames, this.feedInputShapes, true);
        // TODO(cais): Take care of the learning_phase boolean flag.
        //   if (this.useLearningPhase) ...
        return this.predictLoop(x, x.shape[0]);
    };
    LayersModel.prototype.standardizeUserData = function (x, y, checkBatchAxis, batchSize) {
        if (checkBatchAxis === void 0) { checkBatchAxis = true; }
        // TODO(cais): Add sampleWeight, classWeight
        if (this.optimizer_ == null) {
            throw new errors_1.RuntimeError('You must compile a model before training/testing. Use ' +
                'LayersModel.compile(modelCompileArgs).');
        }
        var outputShapes = [];
        for (var i = 0; i < this.feedOutputShapes.length; ++i) {
            var outputShape = this.feedOutputShapes[i];
            var lossFn = this.feedLossFns[i];
            if (lossFn === losses.sparseCategoricalCrossentropy) {
                outputShapes.push(outputShape.slice(0, outputShape.length - 1).concat([1]));
            }
            else {
                // Porting Note: Because of strong typing `lossFn` must be a function.
                outputShapes.push(outputShape);
            }
        }
        x = standardizeInputData(x, this.feedInputNames, this.feedInputShapes, false, 'input');
        y = standardizeInputData(y, this.feedOutputNames, outputShapes, false, 'target');
        // TODO(cais): Standardize sampleWeights & classWeights.
        checkArrayLengths(x, y, null);
        // TODO(cais): Check sampleWeights as well.
        checkLossAndTargetCompatibility(y, this.feedLossFns, this.feedOutputShapes);
        if (this.stateful && batchSize != null && batchSize > 0) {
            if (x[0].shape[0] % batchSize !== 0) {
                throw new errors_1.ValueError("In a stateful network, you should only pass inputs with a " +
                    "number of samples that is divisible by the batch size " +
                    (batchSize + ". Found: " + x[0].shape[0] + " sample(s)."));
            }
        }
        // TODO(cais): Deal with the case of model.stateful == true.
        return [x, y, null];
    };
    /**
     * Loop over some test data in batches.
     * @param f A Function returning a list of tensors.
     * @param ins Array of tensors to be fed to `f`.
     * @param batchSize Integer batch size or `null` / `undefined`.
     * @param verbose verbosity mode.
     * @param steps Total number of steps (batches of samples) before
     * declaring test finished. Ignored with the default value of `null` /
     * `undefined`.
     * @returns Array of Scalars.
     */
    LayersModel.prototype.testLoop = function (f, ins, batchSize, verbose, steps) {
        var _this = this;
        if (verbose === void 0) { verbose = 0; }
        return tfc.tidy(function () {
            var numSamples = _this.checkNumSamples(ins, batchSize, steps, 'steps');
            var outs = [];
            if (verbose > 0) {
                throw new errors_1.NotImplementedError('Verbose mode is not implemented yet.');
            }
            // TODO(cais): Use `indicesForConversionToDense' to prevent slow down.
            if (steps != null) {
                throw new errors_1.NotImplementedError('steps mode in testLoop() is not implemented yet');
            }
            else {
                var batches = training_tensors_1.makeBatches(numSamples, batchSize);
                var indexArray = tfjs_core_1.tensor1d(math_utils_1.range(0, numSamples));
                for (var batchIndex = 0; batchIndex < batches.length; ++batchIndex) {
                    var batchStart = batches[batchIndex][0];
                    var batchEnd = batches[batchIndex][1];
                    var batchIds = K.sliceAlongFirstAxis(indexArray, batchStart, batchEnd - batchStart);
                    // TODO(cais): In ins, train flag can be a number, instead of an
                    //   Tensor? Do we need to handle this in tfjs-layers?
                    var insBatch = training_tensors_1.sliceArraysByIndices(ins, batchIds);
                    var batchOuts = f(insBatch);
                    if (batchIndex === 0) {
                        for (var i = 0; i < batchOuts.length; ++i) {
                            outs.push(state_1.getScalar(0));
                        }
                    }
                    for (var i = 0; i < batchOuts.length; ++i) {
                        var batchOut = batchOuts[i];
                        outs[i] =
                            tfc.add(outs[i], tfc.mul(state_1.getScalar(batchEnd - batchStart), batchOut));
                    }
                }
                for (var i = 0; i < outs.length; ++i) {
                    outs[i] = tfc.div(outs[i], state_1.getScalar(numSamples));
                }
            }
            return outs;
        });
    };
    LayersModel.prototype.getDedupedMetricsNames = function () {
        var outLabels = this.metricsNames;
        // Rename duplicated metrics names (can happen with an output layer
        // shared among multiple dataflows).
        var dedupedOutLabels = [];
        for (var i = 0; i < outLabels.length; ++i) {
            var label = outLabels[i];
            var newLabel = label;
            if (generic_utils_1.count(outLabels, label) > 1) {
                var dupIndex = generic_utils_1.count(outLabels.slice(0, i), label);
                newLabel += "_" + dupIndex;
            }
            dedupedOutLabels.push(newLabel);
        }
        return dedupedOutLabels;
    };
    /**
     * Creates a function that performs the following actions:
     *
     * 1. computes the losses
     * 2. sums them to get the total loss
     * 3. call the optimizer computes the gradients of the LayersModel's
     *    trainable weights w.r.t. the total loss and update the variables
     * 4. calculates the metrics
     * 5. returns the values of the losses and metrics.
     */
    LayersModel.prototype.makeTrainFunction = function () {
        var _this = this;
        return function (data) {
            var losses = [];
            var lossValues = [];
            var inputs = data.slice(0, _this.inputs.length);
            var targets = data.slice(_this.inputs.length, _this.inputs.length + _this.outputs.length);
            var metricsValues = [];
            // Create a function that computes the total loss based on the
            // inputs. This function is used for obtaining gradients through
            // backprop.
            var totalLossFunction = function () {
                var feeds = [];
                for (var i = 0; i < _this.inputs.length; ++i) {
                    feeds.push({ key: _this.inputs[i], value: inputs[i] });
                }
                var feedDict = new executor_1.FeedDict(feeds);
                var outputs = executor_1.execute(_this.outputs, feedDict, { 'training': true });
                // TODO(cais): Take care of the case of multiple outputs from a
                //   single layer?
                var totalLoss;
                for (var i = 0; i < _this.lossFunctions.length; ++i) {
                    var lossFunction = _this.lossFunctions[i];
                    var loss = lossFunction(targets[i], outputs[i]);
                    losses.push(loss);
                    // TODO(cais): push Scalar instead.
                    var meanLoss = tfc.mean(loss);
                    // TODO(cais): Use a scope() instead, to avoid ownership.
                    lossValues.push(meanLoss);
                    if (i === 0) {
                        totalLoss = loss;
                    }
                    else {
                        totalLoss = tfc.add(totalLoss, loss);
                    }
                }
                // Compute the metrics.
                // TODO(cais): These should probably be calculated outside
                //   totalLossFunction to benefit speed?
                for (var i = 0; i < _this.metricsTensors.length; ++i) {
                    var metric = _this.metricsTensors[i][0];
                    var outputIndex = _this.metricsTensors[i][1];
                    // TODO(cais): Replace K.mean() with a proper weighting
                    // function.
                    var meanMetric = tfc.mean(metric(targets[outputIndex], outputs[outputIndex]));
                    tfc.keep(meanMetric);
                    // TODO(cais): Use a scope() instead, to avoid ownership.
                    metricsValues.push(meanMetric);
                }
                totalLoss = tfc.mean(totalLoss);
                // Add regularizer penalties.
                _this.calculateLosses().forEach(function (regularizerLoss) {
                    totalLoss = tfc.add(totalLoss, regularizerLoss);
                });
                return totalLoss;
            };
            var variables = _this.collectedTrainableWeights.map(function (param) { return param.read(); });
            var returnCost = true;
            var totalLossValue = _this.optimizer_.minimize(totalLossFunction, returnCost, variables);
            return [totalLossValue].concat(metricsValues);
        };
    };
    /**
     * Create a function which, when invoked with an array of `tf.Tensor`s as a
     * batch of inputs, returns the prespecified loss and metrics of the model
     * under the batch of input data.
     */
    LayersModel.prototype.makeTestFunction = function () {
        var _this = this;
        this.testFunction = function (data) {
            return tfc.tidy(function () {
                var valOutputs = [];
                var totalLoss;
                var inputs = data.slice(0, _this.inputs.length);
                var targets = data.slice(_this.inputs.length, _this.inputs.length + _this.outputs.length);
                var feeds = [];
                for (var i = 0; i < _this.inputs.length; ++i) {
                    feeds.push({ key: _this.inputs[i], value: inputs[i] });
                }
                var feedDict = new executor_1.FeedDict(feeds);
                var outputs = executor_1.execute(_this.outputs, feedDict);
                // Compute total loss.
                for (var i = 0; i < _this.lossFunctions.length; ++i) {
                    var lossFunction = _this.lossFunctions[i];
                    // TODO(cais): Add sample weighting and replace the simple
                    // averaging.
                    var loss = tfc.mean(lossFunction(targets[i], outputs[i]));
                    if (i === 0) {
                        totalLoss = loss;
                    }
                    else {
                        totalLoss = tfc.add(totalLoss, loss);
                    }
                    valOutputs.push(totalLoss);
                }
                // Compute the metrics.
                for (var i = 0; i < _this.metricsTensors.length; ++i) {
                    var metric = _this.metricsTensors[i][0];
                    var outputIndex = _this.metricsTensors[i][1];
                    // TODO(cais): Replace K.mean() with a proper weighting function.
                    var meanMetric = tfc.mean(metric(targets[outputIndex], outputs[outputIndex]));
                    valOutputs.push(meanMetric);
                }
                return valOutputs;
            });
        };
    };
    /**
     * Trains the model for a fixed number of epochs (iterations on a
     * dataset).
     *
     * ```js
     * const model = tf.sequential({
     *     layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * for (let i = 1; i < 5 ; ++i) {
     *   const h = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
     *       batchSize: 4,
     *       epochs: 3
     *   });
     *   console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);
     * }
     * ```
     *
     * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
     * model has multiple inputs. If all inputs in the model are named, you
     * can also pass a dictionary mapping input names to `tf.Tensor`s.
     * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
     * the model has multiple outputs. If all outputs in the model are named,
     * you can also pass a dictionary mapping output names to `tf.Tensor`s.
     * @param args A `ModelFitArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @exception ValueError In case of mismatch between the provided input
     * data and what the model expects.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.fit = function (x, y, args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, training_tensors_1.fitTensors(this, x, y, args)];
            });
        });
    };
    // TODO(cais): Add code snippet below when it's possible to instantiate
    //   actual dataset objects.
    /**
     * Trains the model using a dataset object.
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for training. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g..
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs.
     *   Of the two items in the array, the first is the input feature(s) and
     *   the second is the output target(s).
     * @param args A `ModelFitDatasetArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.fitDataset = function (dataset, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, training_dataset_1.fitDataset(this, dataset, args)];
            });
        });
    };
    /**
     * Runs a single gradient update on a single batch of data.
     *
     * This method differs from `fit()` and `fitDataset()` in the following
     * regards:
     *   - It operates on exactly one batch of data.
     *   - It returns only the loss and matric values, instead of
     *     returning the batch-by-batch loss and metric values.
     *   - It doesn't support fine-grained options such as verbosity and
     *     callbacks.
     *
     * @param x Input data. It could be one of the following:
     *   - A `tf.Tensor`, or an Array of `tf.Tensor`s (in case the model has
     *     multiple inputs).
     *   - An Object mapping input names to corresponding `tf.Tensor` (if the
     *     model has named inputs).
     * @param y Target darta. It could be either a `tf.Tensor` a multiple
     *   `tf.Tensor`s. It should be consistent with `x`.
     * @returns Training loss or losses (in case the model has
     *   multiple outputs), along with metrics (if any), as numbers.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.trainOnBatch = function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var standardizeOut, inputs, targets, trainFunction, losses, lossValues, _i, losses_1, loss, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        standardizeOut = this.standardizeUserData(x, y);
                        inputs = standardizeOut[0];
                        targets = standardizeOut[1];
                        trainFunction = this.makeTrainFunction();
                        losses = trainFunction(inputs.concat(targets));
                        lossValues = [];
                        _i = 0, losses_1 = losses;
                        _a.label = 1;
                    case 1:
                        if (!(_i < losses_1.length)) return [3 /*break*/, 4];
                        loss = losses_1[_i];
                        return [4 /*yield*/, loss.data()];
                    case 2:
                        v = _a.sent();
                        lossValues.push(v[0]);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        tfc.dispose(losses);
                        return [2 /*return*/, generic_utils_1.singletonOrArray(lossValues)];
                }
            });
        });
    };
    /**
     * Extract weight values of the model.
     *
     * @param config: An instance of `io.SaveConfig`, which specifies
     * model-saving options such as whether only trainable weights are to be
     * saved.
     * @returns A `NamedTensorMap` mapping original weight names (i.e.,
     *   non-uniqueified weight names) to their values.
     */
    LayersModel.prototype.getNamedWeights = function (config) {
        var namedWeights = {};
        var trainableOnly = config != null && config.trainableOnly;
        var weights = trainableOnly ? this.trainableWeights : this.weights;
        var weightValues = this.getWeights(trainableOnly);
        for (var i = 0; i < weights.length; ++i) {
            if (trainableOnly && !weights[i].trainable) {
                // Optionally skip non-trainable weights.
                continue;
            }
            namedWeights[weights[i].originalName] = weightValues[i];
        }
        return namedWeights;
    };
    Object.defineProperty(LayersModel.prototype, "stopTraining", {
        /**
         * Setter used for force stopping of LayersModel.fit() (i.e., training).
         *
         * Example:
         *
         * ```js
         * const input = tf.input({shape: [10]});
         * const output = tf.layers.dense({units: 1}).apply(input);
         * const model = tf.LayersModel({inputs: [input], outputs: [output]});
         * model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
         * const xs = tf.ones([8, 10]);
         * const ys = tf.zeros([8, 1]);
         *
         * const history = await model.fit(xs, ys, {
         *   epochs: 10,
         *   callbacks: {
         *     onEpochEnd: async (epoch, logs) => {
         *       if (epoch === 2) {
         *         model.stopTraining = true;
         *       }
         *     }
         *   }
         * });
         *
         * // There should be only 3 values in the loss array, instead of 10
         * values,
         * // due to the stopping after 3 epochs.
         * console.log(history.history.loss);
         * ```
         */
        set: function (stop) {
            this.stopTraining_ = stop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayersModel.prototype, "optimizer", {
        get: function () {
            return this.optimizer_;
        },
        set: function (optimizer) {
            if (this.optimizer_ !== optimizer) {
                this.optimizer_ = optimizer;
                this.isOptimizerOwned = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    LayersModel.prototype.dispose = function () {
        var result = _super.prototype.dispose.call(this);
        if (result.refCountAfterDispose === 0 && this.optimizer != null &&
            this.isOptimizerOwned) {
            var numTensorsBeforeOptmizerDisposal = tfc.memory().numTensors;
            this.optimizer_.dispose();
            result.numDisposedVariables +=
                numTensorsBeforeOptmizerDisposal - tfc.memory().numTensors;
        }
        return result;
    };
    /**
     * Save the configuration and/or weights of the LayersModel.
     *
     * An `IOHandler` is an object that has a `save` method of the proper
     * signature defined. The `save` method manages the storing or
     * transmission of serialized data ("artifacts") that represent the
     * model's topology and weights onto or via a specific medium, such as
     * file downloads, local storage, IndexedDB in the web browser and HTTP
     * requests to a server. TensorFlow.js provides `IOHandler`
     * implementations for a number of frequently used saving mediums, such as
     * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
     * for more details.
     *
     * This method also allows you to refer to certain types of `IOHandler`s
     * as URL-like string shortcuts, such as 'localstorage://' and
     * 'indexeddb://'.
     *
     * Example 1: Save `model`'s topology and weights to browser [local
     * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 2. Saving `model`'s topology and weights to browser
     * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('indexeddb://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 3. Saving `model`'s topology and weights as two files
     * (`my-model-1.json` and `my-model-1.weights.bin`) downloaded from
     * browser.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * const saveResults = await model.save('downloads://my-model-1');
     * ```
     *
     * Example 4. Send  `model`'s topology and weights to an HTTP server.
     * See the documentation of `tf.io.browserHTTPRequest` for more details
     * including specifying request parameters and implementation of the
     * server.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * const saveResults = await model.save('http://my-server/model/upload');
     * ```
     *
     * @param handlerOrURL An instance of `IOHandler` or a URL-like,
     * scheme-based string shortcut for `IOHandler`.
     * @param config Options for saving the model.
     * @returns A `Promise` of `SaveResult`, which summarizes the result of
     * the saving, such as byte sizes of the saved artifacts for the model's
     *   topology and weight values.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    LayersModel.prototype.save = function (handlerOrURL, config) {
        return __awaiter(this, void 0, void 0, function () {
            var handlers, weightDataAndSpecs, returnString, unusedArg, modelConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof handlerOrURL === 'string') {
                            handlers = tfjs_core_1.io.getSaveHandlers(handlerOrURL);
                            if (handlers.length === 0) {
                                throw new errors_1.ValueError("Cannot find any save handlers for URL '" + handlerOrURL + "'");
                            }
                            else if (handlers.length > 1) {
                                throw new errors_1.ValueError("Found more than one (" + handlers.length + ") save handlers for " +
                                    ("URL '" + handlerOrURL + "'"));
                            }
                            handlerOrURL = handlers[0];
                        }
                        if (handlerOrURL.save == null) {
                            throw new errors_1.ValueError('LayersModel.save() cannot proceed because the IOHandler ' +
                                'provided does not have the `save` attribute defined.');
                        }
                        return [4 /*yield*/, tfjs_core_1.io.encodeWeights(this.getNamedWeights(config))];
                    case 1:
                        weightDataAndSpecs = _a.sent();
                        returnString = false;
                        unusedArg = null;
                        modelConfig = this.toJSON(unusedArg, returnString);
                        return [2 /*return*/, handlerOrURL.save({
                                modelTopology: modelConfig,
                                weightData: weightDataAndSpecs.data,
                                weightSpecs: weightDataAndSpecs.specs,
                                format: LAYERS_MODEL_FORMAT_NAME,
                                generatedBy: "TensorFlow.js tfjs-layers v" + version_1.version,
                                convertedBy: null,
                            })];
                }
            });
        });
    };
    // The class name is 'Model' rather than 'LayersModel' for backwards
    // compatibility since this class name shows up in the serialization format.
    /** @nocollapse */
    LayersModel.className = 'Model';
    return LayersModel;
}(container_1.Container));
exports.LayersModel = LayersModel;
tfjs_core_1.serialization.registerClass(LayersModel);
//# sourceMappingURL=training.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../backend/tfjs_backend":1553229508431,"../common":1553229508432,"../errors":1553229508428,"../losses":1553229508446,"../metrics":1553229508447,"../optimizers":1553229508448,"../utils/generic_utils":1553229508427,"../utils/layer_utils":1553229508449,"../utils/math_utils":1553229508434,"../version":1553229508450,"./container":1553229508451,"./executor":1553229508454,"./training_dataset":1553229508455,"./training_tensors":1553229508456}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508446, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* Original Source: losses.py */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var common_1 = require("./backend/common");
var state_1 = require("./backend/state");
var K = require("./backend/tfjs_backend");
var errors_1 = require("./errors");
/**
 * Normalizes a tensor wrt the L2 norm alongside the specified axis.
 * @param x
 * @param axis Axis along which to perform normalization.
 */
function l2Normalize(x, axis) {
    return tfjs_core_1.tidy(function () {
        var squareSum = tfc.sum(K.square(x), axis, true);
        var epsilonTensor = tfc.fill(squareSum.shape, common_1.epsilon());
        var norm = tfc.sqrt(tfc.maximum(squareSum, epsilonTensor));
        return tfc.div(x, norm);
    });
}
exports.l2Normalize = l2Normalize;
/**
 * Loss or metric function: Mean squared error.
 *
 * ```js
 * const yTrue = tf.tensor2d([[0, 1], [3, 4]]);
 * const yPred = tf.tensor2d([[0, 1], [-3, -4]]);
 * const mse = tf.metrics.meanSquaredError(yTrue, yPred);
 * mse.print();
 * ```
 *
 * Aliases: `tf.metrics.MSE`, `tf.metrics.mse`.
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Mean squared error Tensor.
 */
function meanSquaredError(yTrue, yPred) {
    return tfjs_core_1.tidy(function () { return tfc.mean(K.square(tfc.sub(yPred, yTrue)), -1); });
}
exports.meanSquaredError = meanSquaredError;
/**
 * Loss or metric function: Mean absolute error.
 *
 * Mathematically, mean absolute error is defined as:
 *   `mean(abs(yPred - yTrue))`,
 * wherein the `mean` is applied over feature dimensions.
 *
 * ```js
 * const yTrue = tf.tensor2d([[0, 1], [0, 0], [2, 3]]);
 * const yPred = tf.tensor2d([[0, 1], [0, 1], [-2, -3]]);
 * const mse = tf.metrics.meanAbsoluteError(yTrue, yPred);
 * mse.print();
 * ```
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Mean absolute error Tensor.
 */
function meanAbsoluteError(yTrue, yPred) {
    return tfjs_core_1.tidy(function () { return tfc.mean(tfc.abs(tfc.sub(yPred, yTrue)), -1); });
}
exports.meanAbsoluteError = meanAbsoluteError;
/**
 * Loss or metric function: Mean absolute percentage error.
 *
 * ```js
 * const yTrue = tf.tensor2d([[0, 1], [10, 20]]);
 * const yPred = tf.tensor2d([[0, 1], [11, 24]]);
 * const mse = tf.metrics.meanAbsolutePercentageError(yTrue, yPred);
 * mse.print();
 * ```
 *
 * Aliases: `tf.metrics.MAPE`, `tf.metrics.mape`.
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Mean absolute percentage error Tensor.
 */
function meanAbsolutePercentageError(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var diff = tfc.sub(yTrue, yPred);
        var clippedTrue = tfc.clipByValue(tfc.abs(yTrue), common_1.epsilon(), Number.MAX_VALUE);
        var absResult = tfc.abs(tfc.div(diff, clippedTrue));
        return tfc.mul(state_1.getScalar(100.0), tfc.mean(absResult, -1));
    });
}
exports.meanAbsolutePercentageError = meanAbsolutePercentageError;
function meanSquaredLogarithmicError(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var one = state_1.getScalar(1.0);
        var clippedPred = tfc.clipByValue(yPred, common_1.epsilon(), Number.MAX_VALUE);
        var firstLog = tfc.log(tfc.add(one, clippedPred));
        var clippedTrue = tfc.clipByValue(yTrue, common_1.epsilon(), Number.MAX_VALUE);
        var secondLog = tfc.log(tfc.add(one, clippedTrue));
        return tfc.mean(K.square(tfc.sub(firstLog, secondLog)), -1);
    });
}
exports.meanSquaredLogarithmicError = meanSquaredLogarithmicError;
function squaredHinge(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var zeroTensor = state_1.getScalar(0.0);
        var one = state_1.getScalar(1.0);
        var maxResult = tfc.maximum(zeroTensor, tfc.sub(one, tfc.mul(yTrue, yPred)));
        return tfc.mean(K.square(maxResult), -1);
    });
}
exports.squaredHinge = squaredHinge;
function hinge(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var zeroTensor = state_1.getScalar(0.0);
        var one = state_1.getScalar(1.0);
        var maxResult = tfc.maximum(zeroTensor, tfc.sub(one, tfc.mul(yTrue, yPred)));
        return tfc.mean(maxResult, -1);
    });
}
exports.hinge = hinge;
function categoricalHinge(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var zeroTensor = state_1.getScalar(0.0);
        var one = state_1.getScalar(1.0);
        var pos = tfc.sum(tfc.mul(yTrue, yPred), -1);
        var neg = tfc.max(tfc.mul(tfc.sub(one, yTrue), yPred), -1);
        return tfc.maximum(zeroTensor, tfc.add(one, tfc.sub(neg, pos)));
    });
}
exports.categoricalHinge = categoricalHinge;
/**
 * Logarithm of the hyperbolic cosine of the prediction error.
 *
 * `log(cosh(x))` is approximately equal to `(x ** 2) / 2` for small `x` and
 * to `abs(x) - log(2)` for large `x`. This means that 'logcosh' works mostly
 * like the mean squared error, but will not be so strongly affected by the
 * occasional wildly incorrect prediction.
 */
function logcosh(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var log2 = state_1.getScalar(Math.log(2.0));
        var predictionDiff = tfc.sub(yPred, yTrue);
        var logcoshResult = tfc.sub(tfc.add(predictionDiff, tfc.softplus(tfc.mul(state_1.getScalar(-2.0), predictionDiff))), log2);
        return tfc.mean(logcoshResult, -1);
    });
}
exports.logcosh = logcosh;
/**
 * Categorical crossentropy between an output tensor and a target tensor.
 *
 * @param target A tensor of the same shape as `output`.
 * @param output A tensor resulting from a softmax (unless `fromLogits` is
 *  `true`, in which case `output` is expected to be the logits).
 * @param fromLogits Boolean, whether `output` is the result of a softmax, or is
 *   a tensor of logits.
 */
function categoricalCrossentropy(target, output, fromLogits) {
    if (fromLogits === void 0) { fromLogits = false; }
    return tfjs_core_1.tidy(function () {
        if (fromLogits) {
            output = tfc.softmax(output);
        }
        else {
            // scale preds so that the class probabilities of each sample sum to 1.
            var outputSum = tfc.sum(output, output.shape.length - 1, true);
            output = tfc.div(output, outputSum);
        }
        output = tfc.clipByValue(output, common_1.epsilon(), 1 - common_1.epsilon());
        return tfc.neg(tfc.sum(tfc.mul(target.toFloat(), tfc.log(output)), output.shape.length - 1));
    });
}
exports.categoricalCrossentropy = categoricalCrossentropy;
/**
 * Categorical crossentropy with integer targets.
 *
 * @param target An integer tensor.
 * @param output A tensor resulting from a softmax (unless `fromLogits` is
 *  `true`, in which case `output` is expected to be the logits).
 * @param fromLogits Boolean, whether `output` is the result of a softmax, or is
 *   a tensor of logits.
 */
function sparseCategoricalCrossentropy(target, output) {
    return tfjs_core_1.tidy(function () {
        var flatTarget = tfc.floor(K.flatten(target)).toInt();
        output = tfc.clipByValue(output, common_1.epsilon(), 1 - common_1.epsilon());
        var outputShape = output.shape;
        var oneHotTarget = tfc.oneHot(flatTarget, outputShape[outputShape.length - 1])
            .reshape(outputShape);
        var fromLogits = false;
        return categoricalCrossentropy(oneHotTarget, output, fromLogits);
    });
}
exports.sparseCategoricalCrossentropy = sparseCategoricalCrossentropy;
/**
 * From TensorFlow's implementation in nn_impl.py:
 *
 * For brevity, let `x = logits`, `z = labels`.  The logistic loss is
 *      z * -log(sigmoid(x)) + (1 - z) * -log(1 - sigmoid(x))
 *    = z * -log(1 / (1 + exp(-x))) + (1 - z) * -log(exp(-x) / (1 + exp(-x)))
 *    = z * log(1 + exp(-x)) + (1 - z) * (-log(exp(-x)) + log(1 + exp(-x)))
 *    = z * log(1 + exp(-x)) + (1 - z) * (x + log(1 + exp(-x))
 *    = (1 - z) * x + log(1 + exp(-x))
 *    = x - x * z + log(1 + exp(-x))
 * For x < 0, to avoid overflow in exp(-x), we reformulate the above
 *      x - x * z + log(1 + exp(-x))
 *    = log(exp(x)) - x * z + log(1 + exp(-x))
 *    = - x * z + log(1 + exp(x))
 * Hence, to ensure stability and avoid overflow, the implementation uses this
 * equivalent formulation
 *    max(x, 0) - x * z + log(1 + exp(-abs(x)))
 *
 * @param labels The labels.
 * @param logits The logits.
 */
function sigmoidCrossEntropyWithLogits(labels, logits) {
    if (!tfjs_core_1.util.arraysEqual(labels.shape, logits.shape)) {
        throw new errors_1.ValueError("logits and labels must have the same shape, but got shapes " +
            (JSON.stringify(labels.shape) + " and " + JSON.stringify(logits.shape)));
    }
    return tfjs_core_1.tidy(function () {
        // The logistic loss formula from above is
        //   x - x * z + log(1 + exp(-x))
        // For x < 0, a more numerically stable formula is
        //   -x * z + log(1 + exp(x))
        // Note that these two expressions can be combined into the following:
        //   max(x, 0) - x * z + log(1 + exp(-abs(x)))
        var reluLogits = logits.relu();
        var negAbsLogits = logits.abs().neg();
        return reluLogits.sub(logits.mul(labels)).add(negAbsLogits.exp().log1p());
    });
}
exports.sigmoidCrossEntropyWithLogits = sigmoidCrossEntropyWithLogits;
function binaryCrossentropy(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var y;
        y = tfc.clipByValue(yPred, common_1.epsilon(), 1 - common_1.epsilon());
        y = tfc.log(tfc.div(y, tfc.sub(state_1.getScalar(1), y)));
        return tfc.mean(sigmoidCrossEntropyWithLogits(yTrue, y), -1);
    });
}
exports.binaryCrossentropy = binaryCrossentropy;
function kullbackLeiblerDivergence(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var clippedTrue = tfc.clipByValue(yTrue, common_1.epsilon(), 1);
        var clippedPred = tfc.clipByValue(yPred, common_1.epsilon(), 1);
        return tfc.sum(tfc.mul(yTrue, tfc.log(tfc.div(clippedTrue, clippedPred))), -1);
    });
}
exports.kullbackLeiblerDivergence = kullbackLeiblerDivergence;
function poisson(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var logPred = tfc.log(tfc.add(state_1.getScalar(common_1.epsilon()), yPred));
        return tfc.mean(tfc.sub(yPred, tfc.mul(yTrue, logPred)), -1);
    });
}
exports.poisson = poisson;
/**
 * Loss or metric function: Cosine proximity.
 *
 * Mathematically, cosine proximity is defined as:
 *   `-sum(l2Normalize(yTrue) * l2Normalize(yPred))`,
 * wherein `l2Normalize()` normalizes the L2 norm of the input to 1 and `*`
 * represents element-wise multiplication.
 *
 * ```js
 * const yTrue = tf.tensor2d([[1, 0], [1, 0]]);
 * const yPred = tf.tensor2d([[1 / Math.sqrt(2), 1 / Math.sqrt(2)], [0, 1]]);
 * const proximity = tf.metrics.cosineProximity(yTrue, yPred);
 * proximity.print();
 * ```
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Cosine proximity Tensor.
 */
function cosineProximity(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var trueNormalized = l2Normalize(yTrue, -1);
        var predNormalized = l2Normalize(yPred, -1);
        var trueXPred = tfc.mul(trueNormalized, predNormalized);
        return tfc.neg(tfc.sum(trueXPred, -1));
    });
}
exports.cosineProximity = cosineProximity;
exports.mse = meanSquaredError;
exports.MSE = meanSquaredError;
exports.mae = meanAbsoluteError;
exports.MAE = meanAbsoluteError;
exports.mape = meanAbsolutePercentageError;
exports.MAPE = meanAbsolutePercentageError;
exports.msle = meanSquaredLogarithmicError;
exports.MSLE = meanSquaredLogarithmicError;
exports.kld = kullbackLeiblerDivergence;
exports.KLD = kullbackLeiblerDivergence;
exports.cosine = cosineProximity;
// TODO(michaelterry): Add deserialize() function.
// Porting note: This diverges from the PyKeras implementation and may need to
// change based on (de)serialization requirements.
function get(identifierOrFn) {
    var lossesMap = {
        meanSquaredError: meanSquaredError,
        meanAbsoluteError: meanAbsoluteError,
        meanAbsolutePercentageError: meanAbsolutePercentageError,
        meanSquaredLogarithmicError: meanSquaredLogarithmicError,
        squaredHinge: squaredHinge,
        hinge: hinge,
        categoricalHinge: categoricalHinge,
        logcosh: logcosh,
        categoricalCrossentropy: categoricalCrossentropy,
        sparseCategoricalCrossentropy: sparseCategoricalCrossentropy,
        binaryCrossentropy: binaryCrossentropy,
        kullbackLeiblerDivergence: kullbackLeiblerDivergence,
        poisson: poisson,
        cosineProximity: cosineProximity
    };
    if (typeof identifierOrFn === 'string') {
        if (identifierOrFn in lossesMap) {
            return lossesMap[identifierOrFn];
        }
        var errMsg = "Unknown loss " + identifierOrFn;
        if (identifierOrFn.toLowerCase().includes('softmaxcrossentropy')) {
            errMsg = "Unknown loss " + identifierOrFn + ". " +
                'Use "categoricalCrossentropy" as the string name for ' +
                'tf.losses.softmaxCrossEntropy';
        }
        throw new errors_1.ValueError(errMsg);
    }
    else {
        return identifierOrFn;
    }
}
exports.get = get;
//# sourceMappingURL=losses.js.map
}, function(modId) { var map = {"./backend/common":1553229508425,"./backend/state":1553229508426,"./backend/tfjs_backend":1553229508431,"./errors":1553229508428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508447, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Built-in metrics.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("./backend/state");
var K = require("./backend/tfjs_backend");
var errors_1 = require("./errors");
var losses_1 = require("./losses");
var losses_2 = require("./losses");
/**
 * Binary accuracy metric function.
 *
 * `yTrue` and `yPred` can have 0-1 values. Example:
 * ```js
 * const x = tensor2d([[1, 1, 1, 1], [0, 0, 0, 0]], [2, 4]);
 * const y = tensor2d([[1, 0, 1, 0], [0, 0, 0, 1]], [2, 4]);
 * const accuracy = tfl.metrics.binaryAccuracy(x, y);
 * accuracy.print();
 * ```
 *
 * `yTrue` and `yPred` can also have floating-number values between 0 and 1, in
 * which case the values will be thresholded at 0.5 to yield 0-1 values (i.e.,
 * a value >= 0.5 and <= 1.0 is interpreted as 1.
 * )
 * Example:
 * ```js
 * const x = tensor1d([1, 1, 1, 1, 0, 0, 0, 0]);
 * const y = tensor1d([0.2, 0.4, 0.6, 0.8, 0.2, 0.3, 0.4, 0.7]);
 * const accuracy = tf.metrics.binaryAccuracy(x, y);
 * accuracy.print();
 * ```
 *
 * @param yTrue Binary Tensor of truth.
 * @param yPred Binary Tensor of prediction.
 * @return Accuracy Tensor.
 */
function binaryAccuracy(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var threshold = tfc.mul(state_1.getScalar(0.5), tfc.onesLike(yPred));
        var yPredThresholded = K.cast(tfc.greater(yPred, threshold), yTrue.dtype);
        return tfc.mean(tfc.equal(yTrue, yPredThresholded), -1);
    });
}
exports.binaryAccuracy = binaryAccuracy;
/**
 * Categorical accuracy metric function.
 *
 * Example:
 * ```js
 * const x = tensor2d([[0, 0, 0, 1], [0, 0, 0, 1]]);
 * const y = tensor2d([[0.1, 0.8, 0.05, 0.05], [0.1, 0.05, 0.05, 0.8]]);
 * const accuracy = tf.metrics.categoricalAccuracy(x, y);
 * accuracy.print();
 * ```
 *
 * @param yTrue Binary Tensor of truth: one-hot encoding of categories.
 * @param yPred Binary Tensor of prediction: probabilities or logits for the
 *   same categories as in `yTrue`.
 * @return Accuracy Tensor.
 */
function categoricalAccuracy(yTrue, yPred) {
    return tfjs_core_1.tidy(function () { return K.cast(tfc.equal(tfc.argMax(yTrue, -1), tfc.argMax(yPred, -1)), 'float32'); });
}
exports.categoricalAccuracy = categoricalAccuracy;
function truePositives(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var one = state_1.getScalar(1);
        return tfc.logicalAnd(yTrue.equal(one), yPred.equal(one))
            .sum()
            .cast('float32');
    });
}
function falseNegatives(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var one = state_1.getScalar(1);
        var zero = state_1.getScalar(0);
        return tfc.logicalAnd(yTrue.equal(one), yPred.equal(zero))
            .sum()
            .cast('float32');
    });
}
function falsePositives(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var one = state_1.getScalar(1);
        var zero = state_1.getScalar(0);
        return tfc.logicalAnd(yTrue.equal(zero), yPred.equal(one))
            .sum()
            .cast('float32');
    });
}
/**
 * Computes the precision of the predictions with respect to the labels.
 *
 * Example:
 * ```js
 * const x = tensor2d(
 *    [
 *      [0, 0, 0, 1],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1].
 *      [1, 0, 0, 0],
 *      [0, 0, 1, 0]
 *    ]
 * );
 *
 * const y = tensor2d(
 *    [
 *      [0, 0, 1, 0],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1].
 *      [0, 1, 0, 0],
 *      [0, 1, 0, 0]
 *    ]
 * );
 *
 * const precision = tf.metrics.precision(x, y);
 * precision.print();
 * ```
 *
 * @param yTrue The ground truth values. Expected to be contain only 0-1 values.
 * @param yPred The predicted values. Expected to be contain only 0-1 values.
 * @return Precision Tensor.
 */
function precision(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var zero = state_1.getScalar(0);
        var tp = truePositives(yTrue, yPred);
        var fp = falsePositives(yTrue, yPred);
        var denominator = tp.add(fp);
        return tfc.where(tfc.greater(denominator, zero), tp.div(denominator), zero)
            .cast('float32');
    });
}
exports.precision = precision;
/**
 * Computes the recall of the predictions with respect to the labels.
 *
 * Example:
 * ```js
 * const x = tensor2d(
 *    [
 *      [0, 0, 0, 1],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1].
 *      [1, 0, 0, 0],
 *      [0, 0, 1, 0]
 *    ]
 * );
 *
 * const y = tensor2d(
 *    [
 *      [0, 0, 1, 0],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1].
 *      [0, 1, 0, 0],
 *      [0, 1, 0, 0]
 *    ]
 * );
 *
 * const recall = tf.metrics.recall(x, y);
 * recall.print();
 * ```
 *
 * @param yTrue The ground truth values. Expected to be contain only 0-1 values.
 * @param yPred The predicted values. Expected to be contain only 0-1 values.
 * @return Recall Tensor.
 */
function recall(yTrue, yPred) {
    return tfjs_core_1.tidy(function () {
        var zero = state_1.getScalar(0);
        var tp = truePositives(yTrue, yPred);
        var fn = falseNegatives(yTrue, yPred);
        var denominator = tp.add(fn);
        return tfc.where(tfc.greater(denominator, zero), tp.div(denominator), zero)
            .cast('float32');
    });
}
exports.recall = recall;
/**
 * Binary crossentropy metric function.
 *
 * Example:
 * ```js
 * const x = tensor2d([[0], [1], [1], [1]]);
 * const y = tensor2d([[0], [0], [0.5], [1]]);
 * const crossentropy = tf.metrics.binaryCrossentropy(x, y);
 * crossentropy.print();
 * ```
 *
 * @param yTrue Binary Tensor of truth.
 * @param yPred Binary Tensor of prediction, probabilities for the `1` case.
 * @return Accuracy Tensor.
 */
function binaryCrossentropy(yTrue, yPred) {
    return losses_2.binaryCrossentropy(yTrue, yPred);
}
exports.binaryCrossentropy = binaryCrossentropy;
/**
 * Sparse categorical accuracy metric function.
 *
 * ```Example:
 * const yTrue = tensor1d([1, 1, 2, 2, 0]);
 * const yPred = tensor2d(
 *      [[0, 1, 0], [1, 0, 0], [0, 0.4, 0.6], [0, 0.6, 0.4], [0.7, 0.3, 0]]);
 * const crossentropy = tf.metrics.sparseCategoricalAccuracy(yTrue, yPred);
 * crossentropy.print();
 * ```
 *
 * @param yTrue True labels: indices.
 * @param yPred Predicted probabilities or logits.
 * @returns Accuracy tensor.
 */
function sparseCategoricalAccuracy(yTrue, yPred) {
    if (yTrue.rank === yPred.rank) {
        yTrue = yTrue.squeeze([yTrue.rank - 1]);
    }
    yPred = yPred.argMax(-1);
    if (yPred.dtype !== yTrue.dtype) {
        yPred = yPred.asType(yTrue.dtype);
    }
    return tfc.equal(yTrue, yPred).asType('float32');
}
exports.sparseCategoricalAccuracy = sparseCategoricalAccuracy;
function topKCategoricalAccuracy(yTrue, yPred) {
    throw new errors_1.NotImplementedError();
}
exports.topKCategoricalAccuracy = topKCategoricalAccuracy;
function sparseTopKCategoricalAccuracy(yTrue, yPred) {
    throw new errors_1.NotImplementedError();
}
exports.sparseTopKCategoricalAccuracy = sparseTopKCategoricalAccuracy;
// Aliases.
exports.mse = losses_1.meanSquaredError;
exports.MSE = losses_1.meanSquaredError;
exports.mae = losses_1.meanAbsoluteError;
exports.MAE = losses_1.meanAbsoluteError;
exports.mape = losses_1.meanAbsolutePercentageError;
exports.MAPE = losses_1.meanAbsolutePercentageError;
exports.categoricalCrossentropy = losses_1.categoricalCrossentropy;
exports.cosine = losses_1.cosineProximity;
exports.sparseCategoricalCrossentropy = losses_1.sparseCategoricalCrossentropy;
// TODO(cais, nielsene): Add serialize().
function get(identifier) {
    var metricsMap = {
        binaryAccuracy: binaryAccuracy,
        categoricalAccuracy: categoricalAccuracy,
        precision: precision,
        categoricalCrossentropy: exports.categoricalCrossentropy,
        sparseCategoricalCrossentropy: exports.sparseCategoricalCrossentropy,
        mse: exports.mse,
        MSE: exports.MSE,
        mae: exports.mae,
        MAE: exports.MAE,
        mape: exports.mape,
        MAPE: exports.MAPE,
        cosine: exports.cosine,
    };
    if (typeof identifier === 'string' && identifier in metricsMap) {
        return metricsMap[identifier];
    }
    else if (typeof identifier !== 'string' && identifier != null) {
        return identifier;
    }
    else {
        throw new errors_1.ValueError("Unknown metric " + identifier);
    }
}
exports.get = get;
//# sourceMappingURL=metrics.js.map
}, function(modId) { var map = {"./backend/state":1553229508426,"./backend/tfjs_backend":1553229508431,"./errors":1553229508428,"./losses":1553229508446}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508448, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Optimizers.
 */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var common_1 = require("./backend/common");
var errors_1 = require("./errors");
// Add (de)serialize()
// Porting note: This diverges from the PyKeras implementation and may need to
// change based on (de)serialization requirements.
function getOptimizer(identifier) {
    var optimizerMap = {
        'Adagrad': function () { return tfjs_core_1.train.adagrad(0.01); },
        'Adadelta': function () { return tfjs_core_1.train.adadelta(1, 0.95, common_1.epsilon()); },
        'Adam': function () { return tfjs_core_1.train.adam(0.001, 0.9, 0.999, common_1.epsilon()); },
        'Adamax': function () { return tfjs_core_1.train.adamax(0.002, 0.9, 0.999, common_1.epsilon(), 0); },
        'RMSProp': function () { return tfjs_core_1.train.rmsprop(0.001, 0.9, 0, common_1.epsilon()); },
        'SGD': function () { return tfjs_core_1.train.sgd(0.01); }
    };
    optimizerMap['adagrad'] = optimizerMap['Adagrad'];
    optimizerMap['adadelta'] = optimizerMap['Adadelta'];
    optimizerMap['adam'] = optimizerMap['Adam'];
    optimizerMap['adamax'] = optimizerMap['Adamax'];
    optimizerMap['rmsprop'] = optimizerMap['RMSProp'];
    optimizerMap['sgd'] = optimizerMap['SGD'];
    if (identifier in optimizerMap) {
        return optimizerMap[identifier]();
    }
    throw new errors_1.ValueError("Unknown Optimizer " + identifier);
}
exports.getOptimizer = getOptimizer;
//# sourceMappingURL=optimizers.js.map
}, function(modId) { var map = {"./backend/common":1553229508425,"./errors":1553229508428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508449, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var variable_utils_1 = require("./variable_utils");
/**
 * Print the summary of a LayersModel object.
 *
 * @param model tf.LayersModel instance.
 * @param lineLength Total length of printed lines. Set this to adapt to the
 *   display to different terminal or console sizes.
 * @param positions Relative or absolute positions of log elements in each
 *   line. Each number corresponds to right-most (i.e., ending) position of a
 *   column.
 *   If not provided, defaults to `[0.45, 0.85, 1]` for sequential-like
 *   models and `[0.33, 0.55, 0.67, 1]` for non-sequential like models.
 * @param printFn Print function to use.
 *   It will be called on each line of the summary. You can provide a custom
 *   function in order to capture the string summary. Defaults to `console.log`.
 */
function printSummary(model, lineLength, positions, 
// tslint:disable-next-line:no-any
printFn) {
    if (printFn === void 0) { printFn = console.log; }
    var sequentialLike = isModelSequentialLike(model);
    // Header names for different log elements.
    var toDisplay = ['Layer (type)', 'Output shape', 'Param #'];
    if (sequentialLike) {
        lineLength = lineLength || 65;
        positions = positions || [0.45, 0.85, 1];
    }
    else {
        lineLength = lineLength || 98;
        positions = positions || [0.33, 0.55, 0.67, 1];
        // Header names for different log elements.
    }
    if (positions[positions.length - 1] <= 1) {
        // `positions` is relative. Convert it to absolute positioning.
        positions = positions.map(function (p) { return Math.floor(lineLength * p); });
    }
    var relevantNodes;
    if (!sequentialLike) {
        toDisplay.push('Receives inputs');
        relevantNodes = [];
        for (var depth in model.nodesByDepth) {
            relevantNodes.push.apply(relevantNodes, model.nodesByDepth[depth]);
        }
    }
    printFn('_'.repeat(lineLength));
    printRow(toDisplay, positions, printFn);
    printFn('='.repeat(lineLength));
    var layers = model.layers;
    for (var i = 0; i < layers.length; ++i) {
        if (sequentialLike) {
            printLayerSummary(layers[i], positions, printFn);
        }
        else {
            printLayerSummaryWithConnections(layers[i], positions, relevantNodes, printFn);
        }
        printFn((i === layers.length - 1 ? '=' : '_').repeat(lineLength));
    }
    // tslint:disable-next-line:no-any
    model.checkTrainableWeightsConsistency();
    var trainableCount = countTrainableParams(model);
    var nonTrainableCount = variable_utils_1.countParamsInWeights(model.nonTrainableWeights);
    printFn("Total params: " + (trainableCount + nonTrainableCount));
    printFn("Trainable params: " + trainableCount);
    printFn("Non-trainable params: " + nonTrainableCount);
    printFn('_'.repeat(lineLength));
}
exports.printSummary = printSummary;
function countTrainableParams(model) {
    var trainableCount;
    // tslint:disable:no-any
    if (model.collectedTrainableWeights != null) {
        trainableCount =
            variable_utils_1.countParamsInWeights(model.collectedTrainableWeights);
    }
    else {
        trainableCount = variable_utils_1.countParamsInWeights(model.trainableWeights);
    }
    // tslint:enable:no-any
    return trainableCount;
}
function isModelSequentialLike(model) {
    var sequentialLike = true;
    var nodesByDepth = [];
    var nodes = [];
    for (var depth in model.nodesByDepth) {
        nodesByDepth.push(model.nodesByDepth[depth]);
    }
    for (var _i = 0, nodesByDepth_1 = nodesByDepth; _i < nodesByDepth_1.length; _i++) {
        var depthNodes = nodesByDepth_1[_i];
        if (depthNodes.length > 1 ||
            depthNodes.length === 1 && depthNodes[0].inboundLayers.length > 1) {
            sequentialLike = false;
            break;
        }
        nodes.push.apply(nodes, depthNodes);
    }
    if (sequentialLike) {
        // Search for shared layers.
        for (var _a = 0, _b = model.layers; _a < _b.length; _a++) {
            var layer = _b[_a];
            var flag = false;
            for (var _c = 0, _d = layer.inboundNodes; _c < _d.length; _c++) {
                var node = _d[_c];
                if (nodes.indexOf(node) !== -1) {
                    if (flag) {
                        sequentialLike = false;
                        break;
                    }
                    else {
                        flag = true;
                    }
                }
            }
            if (!sequentialLike) {
                break;
            }
        }
    }
    return sequentialLike;
}
function printRow(fields, positions, 
// tslint:disable-next-line:no-any
printFn) {
    if (printFn === void 0) { printFn = console.log; }
    var line = '';
    for (var i = 0; i < fields.length; ++i) {
        if (i > 0) {
            line = line.slice(0, line.length - 1) + ' ';
        }
        line += fields[i];
        line = line.slice(0, positions[i]);
        line += ' '.repeat(positions[i] - line.length);
    }
    printFn(line);
}
/**
 * Prints a summary for a single Layer, without connectivity information.
 *
 * @param layer: Layer instance to print.
 */
function printLayerSummary(layer, positions, 
// tslint:disable-next-line:no-any
printFn) {
    var outputShape;
    try {
        outputShape = JSON.stringify(layer.outputShape);
    }
    catch (err) {
        outputShape = 'multiple';
    }
    var name = layer.name;
    var className = layer.getClassName();
    var fields = [name + " (" + className + ")", outputShape, layer.countParams().toString()];
    printRow(fields, positions, printFn);
}
/**
 * Prints a summary for a single Layer, with connectivity information.
 */
function printLayerSummaryWithConnections(layer, positions, relevantNodes, 
// tslint:disable-next-line:no-any
printFn) {
    var outputShape;
    try {
        outputShape = JSON.stringify(layer.outputShape);
    }
    catch (err) {
        outputShape = 'multiple';
    }
    var connections = [];
    for (var _i = 0, _a = layer.inboundNodes; _i < _a.length; _i++) {
        var node = _a[_i];
        if (relevantNodes != null && relevantNodes.length > 0 &&
            relevantNodes.indexOf(node) === -1) {
            continue;
        }
        for (var i = 0; i < node.inboundLayers.length; ++i) {
            var inboundLayer = node.inboundLayers[i].name;
            var inboundLayerIndex = node.nodeIndices[i];
            var inboundTensorIndex = node.tensorIndices[i];
            connections.push(inboundLayer + "[" + inboundLayerIndex + "][" + inboundTensorIndex + "]");
        }
    }
    var name = layer.name;
    var className = layer.getClassName();
    var firstConnection = connections.length === 0 ? '' : connections[0];
    var fields = [
        name + " (" + className + ")", outputShape, layer.countParams().toString(),
        firstConnection
    ];
    printRow(fields, positions, printFn);
    for (var i = 1; i < connections.length; ++i) {
        printRow(['', '', '', connections[i]], positions, printFn);
    }
}
//# sourceMappingURL=layer_utils.js.map
}, function(modId) { var map = {"./variable_utils":1553229508440}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508450, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
// This code is auto-generated, do not modify this file!
var version = '1.0.2';
exports.version = version;
//# sourceMappingURL=version.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508451, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* Original source: keras/engine/topology.py */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var errors_1 = require("../errors");
var serialization_1 = require("../layers/serialization");
var generic_utils = require("../utils/generic_utils");
var serialization_utils_1 = require("../utils/serialization_utils");
var types_utils = require("../utils/types_utils");
var variables_1 = require("../variables");
var version_1 = require("../version");
var executor_1 = require("./executor");
var input_layer_1 = require("./input_layer");
var topology_1 = require("./topology");
/**
 * A Container is a directed acyclic graph of layers.
 *
 * It is the topological form of a "model". A LayersModel
 * is simply a Container with added training routines.
 *
 */
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(args) {
        var _this = 
        // No args passed to super's constructor.
        _super.call(this, {}) || this;
        _this.containerNodes = new Set();
        _this.name = args.name;
        if (_this.name == null) {
            var prefix = _this.getClassName().toLowerCase();
            _this.name = state_1.getUid(prefix);
        }
        _this.supportsMasking = false;
        _this.trainable_ = true;
        _this.updatable = true;
        // TODO(michaelterry): Initialize perInputLosses/Updates here.
        // Container-specific properties.
        if (Array.isArray(args.inputs)) {
            _this.inputs = args.inputs.slice();
        }
        else {
            _this.inputs = [args.inputs];
        }
        if (Array.isArray(args.outputs)) {
            _this.outputs = args.outputs.slice();
        }
        else {
            _this.outputs = [args.outputs];
        }
        // Check for redundancy in inputs.
        if (generic_utils.unique(_this.inputs).length !== _this.inputs.length) {
            throw new errors_1.ValueError('The list of inputs passed to the model is ' +
                'redundant. All inputs should only appear once. Found: ' +
                _this.inputs.map(function (x) { return x.name; }));
        }
        // Check for redundancy in outputs.
        if (generic_utils.unique(_this.outputs).length !== _this.outputs.length) {
            console.warn('The list of outputs passed to the model is redundant. ' +
                'All outputs should only appear once. Found: ' +
                _this.outputs.map(function (x) { return x.name; }));
        }
        /*
          List of initial layers (1 to 1 mapping with this.inputs, hence the same
          layer might appear twice)
        */
        _this.inputLayers = [];
        _this.inputLayersNodeIndices = [];
        _this.inputLayersTensorIndices = [];
        /*
          List of layers (1 to 1 mapping with this.outputs, hence the same layer
          might appear twice)
        */
        _this.outputLayers = [];
        _this.outputLayersNodeIndices = [];
        _this.outputLayersTensorIndices = [];
        /*
          All layers in order of horizontal graph traversal. Entries are unique.
          Includes input and output layers.
        */
        _this.layers = [];
        // TODO(michaelterry): Determine if caching still needed with eager
        // backend.
        /*
          This is for performance optimization when calling the Container on new
          inputs. Every time the Container is called on a set on input tensors,
          we compute the output tensors, output masks and output shapes in one pass,
          then cache them here. When one of these outputs is queried later,
          we retrieve it from there instead of recomputing it.
        */
        // this.outputTensorCache = {};
        // this.outputShapeCache = {};
        // Build this.outputLayers:
        for (var _i = 0, _a = _this.outputs; _i < _a.length; _i++) {
            var x = _a[_i];
            var layer = x.sourceLayer;
            var nodeIndex = x.nodeIndex;
            var tensorIndex = x.tensorIndex;
            _this.outputLayers.push(layer);
            _this.outputLayersNodeIndices.push(nodeIndex);
            _this.outputLayersTensorIndices.push(tensorIndex);
        }
        // TODO(michaelterry): Add output mask cache code.
        // Build this.inputLayers:
        for (var _b = 0, _c = _this.inputs; _b < _c.length; _b++) {
            var x = _c[_b];
            var layer = x.sourceLayer;
            var nodeIndex = x.nodeIndex;
            var tensorIndex = x.tensorIndex;
            /*
              It's supposed to be an input layer, so only one node
              and one tensor output.
            */
            generic_utils.assert(nodeIndex === 0, 'input layer has >1 nodes');
            generic_utils.assert(tensorIndex === 0, 'input layer has >1 tensors');
            _this.inputLayers.push(layer);
            _this.inputLayersNodeIndices.push(nodeIndex);
            _this.inputLayersTensorIndices.push(tensorIndex);
        }
        // Build this.inputNames and this.outputNames.
        _this.inputNames = [];
        _this.outputNames = [];
        _this.feedInputShapes = [];
        _this.feedInputNames = [];
        _this.feedOutputNames = [];
        for (var i = 0; i < _this.inputLayers.length; i++) {
            var layer = _this.inputLayers[i];
            // Check that layer is an InputLayer.
            if (!(layer instanceof input_layer_1.InputLayer)) {
                throw new TypeError('Input layers to a LayersModel must be InputLayer objects. ' +
                    ("Received inputs: " + args.inputs + ". ") +
                    ("Input " + i + " (0-based) originates ") +
                    ("from layer type " + layer.getClassName() + "."));
            }
            _this.inputNames.push(layer.name);
            _this.feedInputShapes.push(layer.batchInputShape);
            _this.feedInputNames.push(layer.name);
        }
        for (var _d = 0, _e = _this.outputLayers; _d < _e.length; _d++) {
            var layer = _e[_d];
            _this.outputNames.push(layer.name);
        }
        _this.internalInputShapes = _this.inputs.map(function (x) { return x.shape; });
        _this.internalOutputShapes = _this.outputs.map(function (x) { return x.shape; });
        /*
          Container_nodes: set of nodes included in the graph (not all nodes
          included in the layers are relevant to the current graph).
        */
        // ids of all nodes relevant to the Container:
        var nodesDepths = {};
        // To recover nodes from their ID.
        var nodeIDToNode = {};
        var layersDepths = {};
        // To layers from their ID.
        var layerIDToLayer = {};
        var layerIndices = {};
        var nodesInDecreasingDepth = [];
        /**
         * Builds a map of the graph of layers.
         *
         * This recursively updates the map `layerIndices`,
         * the list `nodesInDecreasingDepth` and the set `containerNodes`.
         *
         * @param tensor Some tensor in a graph.
         * @param finishedNodes Set of nodes whose subgraphs have been traversed
         *         completely. Useful to prevent duplicated work.
         * @param nodesInProgress Set of nodes that are currently active on the
         *         recursion stack. Useful to detect cycles.
         * @param layer Layer from which `tensor` comes from. If not provided,
         *   will be obtained from tensor.sourceLayer.
         * @param nodeIndex Node index from which `tensor` comes from.
         * @param tensorIndex TensorIndex from which `tensor` comes from.
         *
         * @exception RuntimeError if a cycle is detected.
         */
        var buildMapOfGraph = function (tensor, finishedNodes, nodesInProgress, layer, nodeIndex, tensorIndex) {
            if (layer == null || nodeIndex == null || tensorIndex == null) {
                layer = tensor.sourceLayer;
                nodeIndex = tensor.nodeIndex;
                tensorIndex = tensor.tensorIndex;
            }
            var node = layer.inboundNodes[nodeIndex];
            // Prevent cycles.
            if (nodesInProgress.indexOf(node) !== -1) {
                throw new errors_1.RuntimeError("The tensor " + tensor.name + " at layer \"" + layer.name + "\" " +
                    'is part of a cycle.');
            }
            // Don't repeat work for shared subgraphs
            if (finishedNodes.indexOf(node) !== -1) {
                return;
            }
            // Update containerNodes.
            _this.containerNodes.add(Container.nodeKey(layer, nodeIndex));
            // Store the traversal order for layer sorting.
            if (!(layer.id in layerIndices)) {
                layerIndices[layer.id] = Object.keys(layerIndices).length;
            }
            if (nodesInProgress.indexOf(node) === -1) {
                nodesInProgress.push(node);
            }
            // Propagate to all previous tensors connected to this node.
            var numInboundLayers = node.inboundLayers.length;
            for (var i = 0; i < numInboundLayers; i++) {
                var x = node.inputTensors[i];
                var layer_1 = node.inboundLayers[i];
                var nodeIndex_1 = node.nodeIndices[i];
                var tensorIndex_1 = node.tensorIndices[i];
                buildMapOfGraph(x, finishedNodes, nodesInProgress, layer_1, nodeIndex_1, tensorIndex_1);
            }
            finishedNodes.push(node);
            while (nodesInProgress.indexOf(node) >= 0) {
                nodesInProgress.splice(nodesInProgress.indexOf(node), 1);
            }
            nodesInDecreasingDepth.push(node);
        };
        var finishedNodes = [];
        var nodesInProgress = [];
        for (var _f = 0, _g = _this.outputs; _f < _g.length; _f++) {
            var x = _g[_f];
            buildMapOfGraph(x, finishedNodes, nodesInProgress);
        }
        var reversedNodesInDecreasingDepth = nodesInDecreasingDepth.slice().reverse();
        for (var _h = 0, reversedNodesInDecreasingDepth_1 = reversedNodesInDecreasingDepth; _h < reversedNodesInDecreasingDepth_1.length; _h++) {
            var node = reversedNodesInDecreasingDepth_1[_h];
            nodeIDToNode[node.id] = node;
            // If the depth is not set, the node has no outbound nodes (depth 0).
            if (!(node.id in nodesDepths)) {
                nodesDepths[node.id] = 0;
            }
            var depth = nodesDepths[node.id];
            // Update the depth of the corresponding layer
            var previousDepth = (layersDepths[node.outboundLayer.id] == null ?
                0 :
                layersDepths[node.outboundLayer.id]);
            /*
              If we've seen this layer before at a higher depth, we should use that
              depth instead of the node depth.  This is necessary for shared layers
              that have inputs at different depth levels in the graph.
            */
            depth = Math.max(depth, previousDepth);
            layersDepths[node.outboundLayer.id] = depth;
            layerIDToLayer[node.outboundLayer.id] = node.outboundLayer;
            nodesDepths[node.id] = depth;
            // Update the depth of inbound nodes.
            for (var i = 0; i < node.inboundLayers.length; i++) {
                var inboundLayer = node.inboundLayers[i];
                var nodeIndex = node.nodeIndices[i];
                var inboundNode = inboundLayer.inboundNodes[nodeIndex];
                var previousDepth_1 = (nodesDepths[inboundNode.id] == null ? 0 :
                    nodesDepths[inboundNode.id]);
                nodesDepths[inboundNode.id] = Math.max(depth + 1, previousDepth_1);
                nodeIDToNode[inboundNode.id] = inboundNode;
            }
        }
        // Build a dict {depth: list of nodes with this depth}
        var nodesByDepth = {};
        for (var nodeID in nodesDepths) {
            var depth = nodesDepths[nodeID];
            if (!(depth in nodesByDepth)) {
                nodesByDepth[depth] = [];
            }
            nodesByDepth[depth].push(nodeIDToNode[nodeID]);
        }
        // Build a dict {depth: list of layers with this depth}
        var layersByDepth = {};
        for (var layerID in layersDepths) {
            var depth = layersDepths[layerID];
            if (!(depth in layersByDepth)) {
                layersByDepth[depth] = [];
            }
            layersByDepth[depth].push(layerIDToLayer[layerID]);
        }
        // Get sorted list of layer depths.
        var depthKeys = Object.keys(layersByDepth)
            .map(function (x) { return parseInt(x, 10); })
            .sort(generic_utils.reverseNumberCompare);
        // Set this.layers and this.layersByDepth.
        _this.layers = [];
        for (var _j = 0, depthKeys_1 = depthKeys; _j < depthKeys_1.length; _j++) {
            var depth = depthKeys_1[_j];
            var layersForDepth = layersByDepth[depth];
            // Container.layers needs to have a deterministic order:
            // here we order them by traversal order.
            layersForDepth.sort(function (a, b) {
                var aIndex = layerIndices[a.id];
                var bIndex = layerIndices[b.id];
                if (aIndex < bIndex) {
                    return -1;
                }
                if (aIndex > bIndex) {
                    return 1;
                }
                return 0;
            });
            for (var _k = 0, layersForDepth_1 = layersForDepth; _k < layersForDepth_1.length; _k++) {
                var layer = layersForDepth_1[_k];
                _this.layers.push(layer);
            }
        }
        _this.layersByDepth = layersByDepth;
        // Get sorted list of node depths;
        depthKeys = Object.keys(nodesByDepth)
            .map(function (x) { return parseInt(x, 10); })
            .sort(generic_utils.reverseNumberCompare);
        // Check that all tensors required are computable.
        // computable_tensors: all tensors in the graph
        // that can be computed from the inputs provided.
        var computableTensors = _this.inputs.slice();
        // To provide a better error msg.
        var layersWithCompleteInput = [];
        for (var _l = 0, depthKeys_2 = depthKeys; _l < depthKeys_2.length; _l++) {
            var depth = depthKeys_2[_l];
            for (var _m = 0, _o = nodesByDepth[depth]; _m < _o.length; _m++) {
                var node = _o[_m];
                var layer = node.outboundLayer;
                if (layer != null) {
                    for (var _p = 0, _q = node.inputTensors; _p < _q.length; _p++) {
                        var x = _q[_p];
                        if (computableTensors.indexOf(x) === -1) {
                            throw new errors_1.RuntimeError("Graph disconnected: cannot obtain value for tensor " + x +
                                (" at layer \"" + layer.name + "\". ") +
                                'The following previous layers were accessed without ' +
                                ("issue: " + layersWithCompleteInput));
                        }
                    }
                    for (var _r = 0, _s = node.outputTensors; _r < _s.length; _r++) {
                        var x = _s[_r];
                        computableTensors.push(x);
                    }
                    layersWithCompleteInput.push(layer.name);
                }
            }
        }
        // Set this.containerNodes and this.nodesByDepth.
        _this.nodesByDepth = nodesByDepth;
        // Ensure name unicity, which will be crucial for serialization
        // (since serialized nodes refer to layers by their name).
        var allNames = _this.layers.map(function (x) { return x.name; });
        var _loop_1 = function (name_1) {
            var numOccurrences = allNames.filter(function (x) { return x === name_1; }).length;
            if (numOccurrences !== 1) {
                throw new errors_1.RuntimeError("The name \"" + name_1 + "\" is used " + numOccurrences + " times " +
                    'in the model. All layer names should be unique. Layer names: ' +
                    JSON.stringify(allNames));
            }
        };
        for (var _t = 0, allNames_1 = allNames; _t < allNames_1.length; _t++) {
            var name_1 = allNames_1[_t];
            _loop_1(name_1);
        }
        // Layer parameters.
        // The new container starts with a single inbound node
        // for its inputs, and no outbound nodes.
        // Will be appended to by future calls to apply().
        _this.outboundNodes = [];
        // Will be appended to below, and by future calls to apply().
        _this.inboundNodes = [];
        // Create the node linking internal inputs to internal outputs.
        // (This call has side effects.)
        // tslint:disable-next-line:no-unused-expression
        new topology_1.Node({
            outboundLayer: _this,
            inboundLayers: [],
            nodeIndices: [],
            tensorIndices: [],
            inputTensors: _this.inputs,
            outputTensors: _this.outputs,
            inputMasks: _this.inputs.map(function (x) { return null; }),
            outputMasks: _this.outputs.map(function (x) { return null; }),
            inputShapes: _this.inputs.map(function (x) { return x.shape; }),
            outputShapes: _this.outputs.map(function (x) { return x.shape; })
        });
        _this.built = true;
        _this._refCount = 1; // The ref count of a container always start at 1.
        return _this;
    }
    Container.prototype.assertNotDisposed = function () {
        if (this._refCount === 0) {
            throw new Error("Container '" + this.name + "' is already disposed.");
        }
    };
    /**
     * Attempt to dispose a LayersModel's weights.
     *
     * This method decrease the reference count of the LayersModel object by 1.
     *
     * A LayersModel is reference-counted. Its reference count is incremented by 1
     * when it is first constructed and when it is used as a Layer of another
     * LayersModel.
     *
     * If the reference count of a LayersModel becomes 0, the `dispose` method of
     * all its constituent `Layer`s will be called.
     *
     * Note: If the reference count is greater than 0 after the decrement, the
     * `dispose` method of its constituent `Layer`s will *not* be called.
     *
     * After a LayersModel is disposed, it cannot be used in calls such as
     * 'predict`, `evaluate` or `fit` anymore.
     *
     * @returns A DisposeResult Object with the following fields:
     *   - refCountAfterDispose: The reference count of the LayersModel after this
     *     `dispose()` call.
     *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
     *     during this `dispose()` call.
     * @throws {Error} If the layer is not built yet, or if the LayersModel has
     *   already been disposed.
     */
    Container.prototype.dispose = function () {
        this.assertNotDisposed();
        var result = { refCountAfterDispose: null, numDisposedVariables: 0 };
        if (--this._refCount === 0) {
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                result.numDisposedVariables += layer.dispose().numDisposedVariables;
            }
        }
        result.refCountAfterDispose = this._refCount;
        return result;
    };
    Object.defineProperty(Container.prototype, "trainableWeights", {
        get: function () {
            // Porting Note: This check below is to prevent errors where the
            //   _trainableWeights inherited from the parent class (Layer) gets
            //   inadvertently used.
            if (this._trainableWeights.length > 0) {
                throw new errors_1.ValueError('Container instance unexpectedly contains _trainableWeights.' +
                    'The trainable weights of a Container are a union of the ' +
                    'trainable weights of its consituent Layers. Its own ' +
                    '_trainableWeights must remain an empty Array.');
            }
            if (!this.trainable) {
                return [];
            }
            var weights = [];
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                weights = weights.concat(layer.trainableWeights);
            }
            return weights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "nonTrainableWeights", {
        get: function () {
            var weights = [];
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                weights.push.apply(weights, layer.nonTrainableWeights);
            }
            if (!this.trainable) {
                var trainableWeights = [];
                for (var _b = 0, _c = this.layers; _b < _c.length; _b++) {
                    var layer = _c[_b];
                    trainableWeights.push.apply(trainableWeights, layer.trainableWeights);
                }
                return trainableWeights.concat(weights);
            }
            return weights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "weights", {
        get: function () {
            return this.trainableWeights.concat(this.nonTrainableWeights);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loads all layer weights from a JSON object.
     *
     * Porting Note: HDF5 weight files cannot be directly loaded in JavaScript /
     *   TypeScript. The utility script at `scripts/pykeras.py` offers means
     *   to convert them into JSON strings compatible with this method.
     * Porting Note: TensorFlow.js Layers supports only loading by name currently.
     *
     * @param weights A JSON mapping weight names to weight values as nested
     *   arrays of numbers, or a `NamedTensorMap`, i.e., a JSON mapping weight
     *   names to `tf.Tensor` objects.
     * @param strict Require that the provided weights exactly match those
     *   required by the container.  Default: `true`.  Passing `false` means that
     *   extra weights and missing weights will be silently ignored.
     */
    Container.prototype.loadWeights = function (weights, strict) {
        if (strict === void 0) { strict = true; }
        var nameToWeight = {};
        var totalWeightsCount = 0;
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            for (var _b = 0, _c = layer.weights; _b < _c.length; _b++) {
                var weight = _c[_b];
                if (nameToWeight[weight.originalName] != null) {
                    throw new errors_1.ValueError("Duplicate weight name: " + weight.originalName);
                }
                nameToWeight[weight.originalName] = weight;
                totalWeightsCount++;
            }
        }
        var weightValueTuples = [];
        for (var name_2 in weights) {
            if (nameToWeight[name_2] != null) {
                weightValueTuples.push([nameToWeight[name_2], weights[name_2]]);
            }
            else if (strict) {
                throw new errors_1.ValueError("Provided weight data has no target variable: " + name_2);
            }
            delete nameToWeight[name_2];
        }
        if (strict) {
            // Check that all weights are set.
            var unsetNames = [];
            for (var name_3 in nameToWeight) {
                unsetNames.push(name_3);
            }
            if (unsetNames.length > 0) {
                throw new errors_1.ValueError(unsetNames.length + " of " + totalWeightsCount + " weights are not set: " +
                    ("" + unsetNames));
            }
        }
        variables_1.batchSetValue(weightValueTuples);
    };
    /**
     * Util shared between different serialization methods.
     * @returns LayersModel config with Keras version information added.
     */
    Container.prototype.updatedConfig = function () {
        var theConfig = this.getConfig();
        var modelConfig = {};
        modelConfig.className = this.getClassName();
        modelConfig.config = theConfig;
        modelConfig.kerasVersion = "tfjs-layers " + version_1.version;
        // TODO(nielsene): Replace something like K.backend() once
        // possible.
        modelConfig.backend = 'TensorFlow.js';
        return modelConfig;
    };
    /**
     * Returns a JSON string containing the network configuration.
     *
     * To load a network from a JSON save file, use
     * models.modelFromJSON(jsonString);
     * @param extraJsonArgs Unused in tfjs-layers, maintained for PyKeras
     * @param returnString Whether the return value should be stringified
     *    (default: `true`).
     * @returns a JSON string if `returnString` (default), or a JSON object if
     *   `!returnString`.
     */
    // tslint:disable-next-line:no-any
    Container.prototype.toJSON = function (unused, returnString) {
        if (returnString === void 0) { returnString = true; }
        var modelConfig = serialization_utils_1.convertTsToPythonic(this.updatedConfig());
        return returnString ? JSON.stringify(modelConfig) : modelConfig;
    };
    /**
     * Call the model on new inputs.
     *
     * In this case `call` just reapplies all ops in the graph to the new inputs
     * (e.g. build a new computational graph from the provided inputs).
     *
     * @param inputs A tensor or list of tensors.
     * @param mask A mask or list of masks. A mask can be either a tensor or null
     *   (no mask).
     *
     * @return A tensor if there is a single output, or a list of tensors if there
     *   are more than one outputs.
     */
    Container.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = generic_utils.toList(inputs);
            var feedDict = new executor_1.FeedDict();
            for (var i = 0; i < _this.inputs.length; ++i) {
                feedDict.add(_this.inputs[i], inputs[i]);
            }
            return executor_1.execute(_this.outputs, feedDict, kwargs);
        });
    };
    /**
     * Computes an output mask tensor.
     *
     * @param inputs Tensor or list of tensors.
     * @param mask Tensor or list of tensors.
     *
     * @return null or a tensor (or list of tensors, one per output tensor of the
     * layer).
     */
    Container.prototype.computeMask = function (inputs, mask) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = generic_utils.toList(inputs);
            var masks;
            if (mask == null) {
                masks = generic_utils.pyListRepeat(null, inputs.length);
            }
            else {
                masks = generic_utils.toList(mask);
            }
            // TODO(michaelterry): Add support for mask caching.
            return _this.runInternalGraph(inputs, masks)[1];
        });
    };
    /**
     * Computes the output shape of the layer.
     *
     * Assumes that the layer will be built to match that input shape provided.
     *
     * @param inputShape A shape (tuple of integers) or a list of shape tuples
     *   (one per output tensor of the layer). Shape tuples can include null for
     *   free dimensions, instead of an integer.
     */
    Container.prototype.computeOutputShape = function (inputShape) {
        var inputShapes = types_utils.normalizeShapeList(inputShape);
        if (inputShapes.length !== this.inputLayers.length) {
            throw new errors_1.ValueError("Invalid inputShape argument " + inputShape + ": " +
                ("model has " + this.inputLayers.length + " tensor inputs."));
        }
        // TODO(michaelterry): Add caching
        var layersToOutputShapes = {};
        for (var i = 0; i < inputShapes.length; i++) {
            var layer = this.inputLayers[i];
            var inputShape_1 = inputShapes[i];
            // It's an input layer: computeOutputShape is identity,
            // and there is only one node and one tensor output.
            var shapeKey = layer.name + '_0_0';
            layersToOutputShapes[shapeKey] = inputShape_1;
        }
        var depthKeys = Object.keys(this.nodesByDepth)
            .map(function (x) { return parseInt(x, 10); })
            .sort(generic_utils.reverseNumberCompare);
        // Iterate over nodes, by depth level.
        if (depthKeys.length > 1) {
            for (var _i = 0, depthKeys_3 = depthKeys; _i < depthKeys_3.length; _i++) {
                var depth = depthKeys_3[_i];
                var nodes = this.nodesByDepth[depth];
                for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
                    var node = nodes_1[_a];
                    // This is always a single layer, never a list.
                    var layer = node.outboundLayer;
                    if (this.inputLayers.map(function (x) { return x.id; }).indexOf(layer.id) !== -1) {
                        // We've already covered the input layers a few lines above.
                        continue;
                    }
                    // Potentially redundant list, same size of node.inputTensors.
                    var inputShapes_1 = [];
                    for (var j = 0; j < node.inboundLayers.length; j++) {
                        var inboundLayer = node.inboundLayers[j];
                        var nodeIndex_2 = node.nodeIndices[j];
                        var tensorIndex = node.tensorIndices[j];
                        var shapeKey = inboundLayer.name + "_" + nodeIndex_2 + "_" + tensorIndex;
                        var inputShape_2 = layersToOutputShapes[shapeKey];
                        inputShapes_1.push(inputShape_2);
                    }
                    var outputShape = layer.computeOutputShape(generic_utils.singletonOrArray(inputShapes_1));
                    var outputShapes_1 = types_utils.normalizeShapeList(outputShape);
                    var nodeIndex = layer.inboundNodes.indexOf(node);
                    for (var j = 0; j < outputShapes_1.length; j++) {
                        var shapeKey = layer.name + "_" + nodeIndex + "_" + j;
                        layersToOutputShapes[shapeKey] = outputShapes_1[j];
                    }
                }
            }
        }
        // Read final output shapes from layersToOutputShapes.
        var outputShapes = [];
        var outputShapeKeys = [];
        for (var i = 0; i < this.outputLayers.length; i++) {
            var layer = this.outputLayers[i];
            var nodeIndex = this.outputLayersNodeIndices[i];
            var tensorIndex = this.outputLayersTensorIndices[i];
            var shapeKey = layer.name + "_" + nodeIndex + "_" + tensorIndex;
            outputShapeKeys.push(shapeKey);
        }
        for (var i = 0; i < outputShapeKeys.length; i++) {
            var key = outputShapeKeys[i];
            generic_utils.assert(key in layersToOutputShapes);
            outputShapes.push(layersToOutputShapes[key]);
        }
        // TODO(michaelterry): Update cache
        return generic_utils.singletonOrArray(outputShapes);
    };
    /**
     * Computes output tensors for new inputs.
     *
     * Note:
     *   - Expects `inputs` to be a list (potentially with 1 element).
     *
     * @param inputs List of tensors
     * @param masks List of masks (tensors or null).
     * @return Three lists: outputTensors, outputMasks, outputShapes
     */
    Container.prototype.runInternalGraph = function (inputs, masks) {
        if (masks == null) {
            masks = generic_utils.pyListRepeat(null, inputs.length);
        }
        // Dictionary mapping reference tensors to tuples
        // (computed tensor, compute mask)
        // we assume a 1:1 mapping from tensor to mask
        // TODO: raise exception when a `.computeMask()` call
        // does not return a list the same size as `call`
        var tensorMap = {};
        for (var i = 0; i < this.inputs.length; ++i) {
            var x = this.inputs[i];
            var y = inputs[i];
            var mask = masks[i];
            tensorMap[x.id] = [y, mask];
        }
        var depthKeys = Object.keys(this.nodesByDepth)
            .map(function (x) { return parseInt(x, 10); })
            .sort(generic_utils.reverseNumberCompare);
        for (var _i = 0, depthKeys_4 = depthKeys; _i < depthKeys_4.length; _i++) {
            var depth = depthKeys_4[_i];
            var nodes = this.nodesByDepth[depth];
            for (var _a = 0, nodes_2 = nodes; _a < nodes_2.length; _a++) {
                var node = nodes_2[_a];
                // This is always a single layer, never a list.
                var layer = node.outboundLayer;
                var referenceInputTensors = node.inputTensors;
                var referenceOutputTensors = node.outputTensors;
                // If all previous input tensors are available in tensorMap,
                // then call node.inboundLayer on them.
                // List of tuples [input, mask]:
                var computedData = new Array();
                for (var _b = 0, referenceInputTensors_1 = referenceInputTensors; _b < referenceInputTensors_1.length; _b++) {
                    var x = referenceInputTensors_1[_b];
                    if (x.id in tensorMap) {
                        computedData.push(tensorMap[x.id]);
                    }
                }
                if (computedData.length === referenceInputTensors.length) {
                    // TODO(michaelterry): Add K.name_scope here, if we need it.
                    var kwargs = {};
                    var computedTensors = void 0;
                    var computedMasks = void 0;
                    var outputTensors_1 = void 0;
                    var outputMasks_1 = void 0;
                    // call layer
                    if (node.callArgs != null) {
                        kwargs = node.callArgs;
                    }
                    if (computedData.length === 1) {
                        var _c = computedData[0], computedTensor = _c[0], computedMask = _c[1];
                        if (kwargs.mask == null) {
                            kwargs['mask'] = computedMask;
                        }
                        outputTensors_1 =
                            generic_utils.toList(layer.call(computedTensor, kwargs));
                        outputMasks_1 = generic_utils.toList(layer.computeMask(computedTensor, computedMask));
                        computedTensors = [computedTensor];
                        computedMasks = [computedMask];
                    }
                    else {
                        computedTensors = computedData.map(function (x) { return x[0]; });
                        computedMasks = computedData.map(function (x) { return x[1]; });
                        if (kwargs.mask == null) {
                            kwargs['mask'] = computedMasks;
                        }
                        outputTensors_1 =
                            generic_utils.toList(layer.call(computedTensors, kwargs));
                        outputMasks_1 = generic_utils.toList(layer.computeMask(computedTensors, computedMasks));
                    }
                    if (layer.activityRegularizer) {
                        throw new errors_1.NotImplementedError('LayersModel invocation with concrete Tensor value(s) in the ' +
                            'presence of activity regularizer(s) is not supported yet.');
                    }
                    // TODO(michaelterry): Add model updates and losses
                    // Update tensor map.
                    for (var i = 0; i < referenceOutputTensors.length; ++i) {
                        var x = referenceOutputTensors[i];
                        var y = outputTensors_1[i];
                        var mask = outputMasks_1[i];
                        tensorMap[x.id] = [y, mask];
                    }
                }
            }
        }
        var outputTensors = [];
        var outputMasks = [];
        var outputShapes = [];
        for (var _d = 0, _e = this.outputs; _d < _e.length; _d++) {
            var x = _e[_d];
            generic_utils.assert(x.id in tensorMap, "Could not compute output " + x.name + " : " + x.id);
            var _f = tensorMap[x.id], tensor = _f[0], mask = _f[1];
            outputShapes.push(tensor.shape);
            outputTensors.push(tensor);
            outputMasks.push(mask);
        }
        // TODO(michaelterry): Add support for caches.
        return [outputTensors, outputMasks, outputShapes];
    };
    /**
     * Builds a map of internal node keys to node ordering.
     * Used in serializaion a node orderings may change as unused nodes are
     * dropped. Porting Note:  This helper method was pulled out of getConfig to
     * improve readability.
     * @param layers An array of Layers in the model.
     * @returns Map of Node Keys to index order within the layer.
     */
    Container.prototype.buildNodeConversionMap = function (layers) {
        var nodeConversionMap = {};
        var keptNodes;
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            keptNodes = layer instanceof Container ? 1 : 0;
            for (var originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++) {
                var nodeKey = Container.nodeKey(layer, originalNodeIndex);
                if (this.containerNodes.has(nodeKey)) {
                    // i.e. we mark it to be saved
                    nodeConversionMap[nodeKey] = keptNodes;
                    keptNodes += 1;
                }
            }
        }
        return nodeConversionMap;
    };
    /**
     * Retrieves a layer based on either its name (unique) or index.
     *
     * Indices are based on order of horizontal graph traversal (bottom-up).
     *
     * If both `name` and `index` are specified, `index` takes precedence.
     *
     * @param name Name of layer.
     * @param index Index of layer.
     * @returns A Layer instance.
     * @throws ValueError: In case of invalid layer name or index.
     */
    /**
     * @doc {
     *    heading: 'Layers',
     *    subheading: 'Classes',
     *    namespace: 'layers',
     *    subclasses: ['LayersModel']
     * }
     */
    Container.prototype.getLayer = function (name, index) {
        if (index != null) {
            if (this.layers.length <= index) {
                throw new errors_1.ValueError("Was asked to retrieve layer at index " + index + ", but model only " +
                    ("has " + this.layers.length + " layer(s)."));
            }
            else {
                return this.layers[index];
            }
        }
        else {
            if (name == null) {
                throw new errors_1.ValueError('Provide either a layer name or layer index');
            }
        }
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            if (layer.name === name) {
                return layer;
            }
        }
        throw new errors_1.ValueError("No such layer: " + name);
    };
    /**
     * Retrieves the Container's current loss values.
     *
     * Used for regularizers during training.
     */
    Container.prototype.calculateLosses = function () {
        var _this = this;
        // Porting Node: This is an augmentation to Container.loss in PyKeras.
        //   In PyKeras, Container.loss returns symbolic tensors. Here a concrete
        //   Tensor (specifically Scalar) values are returned. This is due to the
        //   imperative backend.
        return tfjs_core_1.tidy(function () {
            var losses = [];
            for (var _i = 0, _a = _this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                for (var nodeIndex = 0; nodeIndex < layer.inboundNodes.length; ++nodeIndex) {
                    var nodeKey = Container.nodeKey(layer, nodeIndex);
                    if (_this.containerNodes.has(nodeKey)) {
                        losses.push.apply(losses, layer.calculateLosses());
                    }
                }
            }
            // TODO(cais): Add any unconditional model-level losses?
            return losses;
        });
    };
    Container.prototype.getConfig = function () {
        var config = { name: this.name };
        // Build a map from layer unique name (self._node_key)
        // to the index of the nodes that are saved in the config.
        // Only nodes in container_nodes are saved.
        var nodeConversionMap = this.buildNodeConversionMap(this.layers);
        // Serialize and save the layers in layerConfigs
        var layerConfigs = [];
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            var layerClassName = layer.getClassName();
            var layerConfig = layer.getConfig();
            var filteredInboundNodes = [];
            for (var originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++) {
                var node = layer.inboundNodes[originalNodeIndex];
                var nodeKey = Container.nodeKey(layer, originalNodeIndex);
                var kwargs = {};
                if (this.containerNodes.has(nodeKey)) {
                    // The node is relevant to the model:
                    // add to filteredInboundNodes.
                    if (node.callArgs) {
                        try {
                            JSON.stringify(node.callArgs);
                            kwargs = node.callArgs;
                        }
                        catch (err) {
                            console.warn("Layer " + layer.name + " was passed " +
                                "non-serializable keyword arguments: " +
                                (node.callArgs + ". They will not be included ") +
                                "in the serialized model (and thus will be " +
                                "missing at deserialization time).");
                            kwargs = {};
                        }
                    }
                    if (node.inboundLayers.length > 0) {
                        var nodeData = [];
                        for (var i = 0; i < node.inboundLayers.length; i++) {
                            var inboundLayer = node.inboundLayers[i];
                            var nodeIndex = node.nodeIndices[i];
                            var tensorIndex = node.tensorIndices[i];
                            var nodeKey_1 = Container.nodeKey(inboundLayer, nodeIndex);
                            var newNodeIndex = nodeConversionMap[nodeKey_1];
                            if (newNodeIndex == null) {
                                newNodeIndex = 0;
                            }
                            nodeData.push([inboundLayer.name, newNodeIndex, tensorIndex, kwargs]);
                        }
                        filteredInboundNodes.push(nodeData);
                    }
                }
            }
            var dict = {};
            dict.name = layer.name;
            dict.className = layerClassName;
            dict.config = layerConfig;
            dict.inboundNodes = filteredInboundNodes;
            layerConfigs.push(dict);
        }
        config['layers'] = layerConfigs;
        // Gather info about inputs and outputs
        var modelInputs = [];
        for (var i = 0; i < this.inputLayers.length; i++) {
            var layer = this.inputLayers[i];
            var nodeIndex = this.inputLayersNodeIndices[i];
            var nodeKey = Container.nodeKey(layer, nodeIndex);
            if (!this.containerNodes.has(nodeKey)) {
                continue;
            }
            var newNodeIndex = nodeConversionMap[nodeKey];
            if (newNodeIndex === null || newNodeIndex === undefined) {
                newNodeIndex = 0;
            }
            var tensorIndex = this.inputLayersTensorIndices[i];
            modelInputs.push([layer.name, newNodeIndex, tensorIndex]);
        }
        config['inputLayers'] = modelInputs;
        var modelOutputs = [];
        for (var i = 0; i < this.outputLayers.length; i++) {
            var layer = this.outputLayers[i];
            var nodeIndex = this.outputLayersNodeIndices[i];
            var nodeKey = Container.nodeKey(layer, nodeIndex);
            if (!this.containerNodes.has(nodeKey)) {
                continue;
            }
            var newNodeIndex = nodeConversionMap[nodeKey];
            if (newNodeIndex === null || newNodeIndex === undefined) {
                newNodeIndex = 0;
            }
            var tensorIndex = this.outputLayersTensorIndices[i];
            modelOutputs.push([layer.name, newNodeIndex, tensorIndex]);
        }
        config['outputLayers'] = modelOutputs;
        return config;
    };
    /**
     * Instantiates a LayersModel from its config (output of `get_config()`).
     * @param cls the class to create
     * @param config LayersModel config dictionary.
     * @param customObjects An optional dictionary of custom objects.
     * @param fastWeightInit Optional flag to use fast weight initialization
     *   during deserialization. This is applicable to cases in which
     *   the initialization will be immediately overwritten by loaded weight
     *   values. Default: `false`.
     * @returns A LayersModel instance.
     * @throws ValueError: In case of improperly formatted config dict.
     */
    /** @nocollapse */
    Container.fromConfig = function (cls, config, customObjects, fastWeightInit) {
        if (customObjects === void 0) { customObjects = {}; }
        if (fastWeightInit === void 0) { fastWeightInit = false; }
        // Layer instances created during
        // the graph reconstruction process
        var createdLayers = {};
        // Dictionary mapping layer instances to
        // node data that specifies a layer call.
        // It acts as a queue that maintains any unprocessed
        // layer call until it becomes possible to process it
        // (i.e. until the input tensors to the call all exist).
        var unprocessedNodes = {};
        function addUnprocessedNode(layer, nodeData) {
            if (!(layer.name in unprocessedNodes)) {
                unprocessedNodes[layer.name] = [nodeData];
            }
            else {
                unprocessedNodes[layer.name].push(nodeData);
            }
        }
        function processNode(layer, nodeData) {
            var inputTensors = [];
            var kwargs;
            for (var _i = 0, nodeData_1 = nodeData; _i < nodeData_1.length; _i++) {
                var inputData = nodeData_1[_i];
                var inboundLayerName = inputData[0];
                var inboundNodeIndex = inputData[1];
                var inboundTensorIndex = inputData[2];
                if (inputData.length === 3) {
                    kwargs = {};
                }
                else if (inputData.length === 4) {
                    kwargs = inputData[3];
                }
                else {
                    throw new errors_1.ValueError("Improperly formatted model config for layer " + JSON.stringify(layer) + ": " + JSON.stringify(inputData));
                }
                if (!(inboundLayerName in createdLayers)) {
                    addUnprocessedNode(layer, nodeData);
                    return;
                }
                var inboundLayer = createdLayers[inboundLayerName];
                if (inboundLayer.inboundNodes.length <= inboundNodeIndex) {
                    addUnprocessedNode(layer, nodeData);
                    return;
                }
                var inboundNode = inboundLayer.inboundNodes[inboundNodeIndex];
                inputTensors.push(inboundNode.outputTensors[inboundTensorIndex]);
            }
            // Call layer on its inputs, thus creating the node
            // and building the layer if needed.
            // Note: This has Eager vs Graph Implications.
            if (inputTensors.length > 0) {
                layer.apply(generic_utils.singletonOrArray(inputTensors), kwargs); // was ** kwargs
            }
        }
        /**
         * Deserialize a layer, then call it on appropriate inputs.
         * @param layerData: layer config dict.
         * @throws ValueError: In case of improperly formatted `layer_data`
         * dict.
         */
        function processLayer(layerData) {
            var layerName = layerData.name;
            // Instantiate layer.
            var layer = serialization_1.deserialize(layerData, config.customObjects != null ?
                config.customObjects :
                {});
            layer.setFastWeightInitDuringBuild(fastWeightInit);
            createdLayers[layerName] = layer;
            // Gather layer inputs.
            var inboundNodesData = layerData.inboundNodes;
            for (var _i = 0, inboundNodesData_1 = inboundNodesData; _i < inboundNodesData_1.length; _i++) {
                var nodeData = inboundNodesData_1[_i];
                if (!(nodeData instanceof Array)) {
                    throw new errors_1.ValueError("Corrupted configuration, expected array for nodeData: " + nodeData);
                }
                // We don't process nodes (i.e. make layer calls)
                // on the fly because the inbound node may not yet exist,
                // in case of layer shared at different topological depths
                // (e.g.a model such as A(B(A(B(x)))))
                addUnprocessedNode(layer, nodeData);
            }
        }
        // First, we create all layers and enqueue nodes to be processed.
        var name = config.name;
        var layersFromConfig = config.layers;
        for (var _i = 0, layersFromConfig_1 = layersFromConfig; _i < layersFromConfig_1.length; _i++) {
            var layerData = layersFromConfig_1[_i];
            processLayer(layerData);
        }
        // Then we process nodes in order of layer depth.
        // Nodes that cannot yet be processed(if the inbound node
        // does not yet exist) are re - enqueued, and the process
        // is repeated until all nodes are processed.
        while (!generic_utils.isObjectEmpty(unprocessedNodes)) {
            for (var _a = 0, layersFromConfig_2 = layersFromConfig; _a < layersFromConfig_2.length; _a++) {
                var layerData = layersFromConfig_2[_a];
                var layer = createdLayers[layerData.name];
                if (layer.name in unprocessedNodes) {
                    var currentUnprocessedNodesForLayer = unprocessedNodes[layer.name];
                    delete unprocessedNodes[layer.name];
                    for (var _b = 0, currentUnprocessedNodesForLayer_1 = currentUnprocessedNodesForLayer; _b < currentUnprocessedNodesForLayer_1.length; _b++) {
                        var nodeData = currentUnprocessedNodesForLayer_1[_b];
                        processNode(layer, nodeData);
                    }
                }
            }
        }
        var inputTensors = [];
        var outputTensors = [];
        var inputLayersFromConfig = config.inputLayers;
        for (var _c = 0, inputLayersFromConfig_1 = inputLayersFromConfig; _c < inputLayersFromConfig_1.length; _c++) {
            var layerData = inputLayersFromConfig_1[_c];
            var layerName = layerData[0];
            var nodeIndex = layerData[1];
            var tensorIndex = layerData[2];
            generic_utils.assert(layerName in createdLayers);
            var layer = createdLayers[layerName];
            var layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
            inputTensors.push(layerOutputTensors[tensorIndex]);
        }
        var outputLayersFromConfig = config.outputLayers;
        for (var _d = 0, outputLayersFromConfig_1 = outputLayersFromConfig; _d < outputLayersFromConfig_1.length; _d++) {
            var layerData = outputLayersFromConfig_1[_d];
            var layerName = layerData[0];
            var nodeIndex = layerData[1];
            var tensorIndex = layerData[2];
            generic_utils.assert(layerName in createdLayers);
            var layer = createdLayers[layerName];
            var layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
            outputTensors.push(layerOutputTensors[tensorIndex]);
        }
        return new cls({ inputs: inputTensors, outputs: outputTensors, name: name });
    };
    Object.defineProperty(Container.prototype, "stateful", {
        /**
         * Determine whether the container is stateful.
         *
         * Porting Note: this is the equivalent of the stateful @property of
         *   the Container class in PyKeras.
         */
        get: function () {
            // Porting Note: This check is to prevent inadvertent setting of the
            //   _stateful property of the Container instance.
            if (this._stateful) {
                throw new errors_1.ValueError('Container instance unexpectedly has _stateful = true. The ' +
                    'statefulness of a Container is determined by the Layers it ' +
                    'contains. Its _stateful property must remain the default false.');
            }
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                if (layer.stateful) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reset the state of all stateful constituent layers (if any).
     *
     * Examples of stateful layers include RNN layers whose `stateful` property
     * is set as `true`.
     */
    Container.prototype.resetStates = function () {
        var _this = this;
        tfjs_core_1.tidy(function () {
            _this.layers.forEach(function (layer) {
                // tslint:disable:no-any
                if (layer.stateful) {
                    layer.resetStates();
                }
                // tslint:enable:no-any
            });
        });
    };
    return Container;
}(topology_1.Layer));
exports.Container = Container;
//# sourceMappingURL=container.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../errors":1553229508428,"../layers/serialization":1553229508452,"../utils/generic_utils":1553229508427,"../utils/serialization_utils":1553229508453,"../utils/types_utils":1553229508439,"../variables":1553229508441,"../version":1553229508450,"./executor":1553229508454,"./input_layer":1553229508437,"./topology":1553229508438}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508452, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* Original Source layers/__init__.py */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var generic_utils_1 = require("../utils/generic_utils");
/**
 * Instantiate a layer from a config dictionary.
 * @param config dict of the form {class_name: str, config: dict}
 * @param customObjects dict mapping class names (or function names)
 *   of custom (non-Keras) objects to class/functions
 * @param fastWeightInit Optional flag to use fast weight initialization
 *   during deserialization. This is applicable to cases in which
 *   the initialization will be immediately overwritten by loaded weight
 *   values. Default: `false`.
 * @returns Layer instance (may be LayersModel, Sequential, Layer...)
 */
function deserialize(config, customObjects, fastWeightInit) {
    if (customObjects === void 0) { customObjects = {}; }
    if (fastWeightInit === void 0) { fastWeightInit = false; }
    return generic_utils_1.deserializeKerasObject(config, tfjs_core_1.serialization.SerializationMap.getMap().classNameMap, customObjects, 'layer', fastWeightInit);
}
exports.deserialize = deserialize;
//# sourceMappingURL=serialization.js.map
}, function(modId) { var map = {"../utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508453, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var generic_utils = require("../utils/generic_utils");
// tslint:enable
/**
 * Test whether a value in an array is the name of a LayersModel or Layer.
 * @param key The key name that the value is found under. Note that the key
 *   may not be at the level immediately above the value, if the value is in a
 *   nested array.
 * @param index Index of the value in the Array that it is found in.
 * @param value The value object.
 * @returns A boolean indicating whether value is a name.
 */
function isArrayItemInputOrOutputName(key, index, value) {
    return (key === 'inboundNodes' || key === 'outputLayers' ||
        key === 'inputLayers') &&
        index === 0 && typeof value === 'string';
}
/**
 * Convert a Pythonic config object to TypeScript config object.
 * @param pythonicConfig The config object to convert.
 * @param key Optional key name of the object being converted.
 * @returns Result of the conversion.
 */
function convertPythonicToTs(pythonicConfig, key) {
    if (pythonicConfig === null) {
        return null;
    }
    else if (typeof pythonicConfig === 'string') {
        return generic_utils.toCamelCase(pythonicConfig);
    }
    else if ((typeof pythonicConfig === 'number') ||
        (typeof pythonicConfig === 'boolean')) {
        return pythonicConfig;
    }
    else if (pythonicConfig instanceof Array) {
        var tsArray = [];
        var arrayLength = pythonicConfig.length;
        for (var i = 0; i < arrayLength; ++i) {
            var item = pythonicConfig[i];
            if (isArrayItemInputOrOutputName(key, i, item)) {
                tsArray.push(item);
            }
            else {
                tsArray.push(convertPythonicToTs(item, key));
            }
        }
        return tsArray;
    }
    else {
        var tsDict = {};
        for (var _i = 0, _a = Object.keys(pythonicConfig); _i < _a.length; _i++) {
            var pythonicKey = _a[_i];
            var pythonicValue = pythonicConfig[pythonicKey];
            if (pythonicKey === 'name' && typeof pythonicValue === 'string') {
                // Special case the 'name' key with a string value. Name values, such as
                // the names of LayersModel and Layer instances, should not undergo the
                // camel-case conversion.
                tsDict[pythonicKey] = pythonicValue;
            }
            else {
                var tsKey = generic_utils.toCamelCase(pythonicKey);
                tsDict[tsKey] = convertPythonicToTs(pythonicValue, tsKey);
            }
        }
        return tsDict;
    }
}
exports.convertPythonicToTs = convertPythonicToTs;
/**
 * Convert a TypeScript config object to Python config object.
 * @param tsConfig The config object to convert.
 * @param key Optional key name of the object being converted.
 * @returns Result of the conversion.
 */
function convertTsToPythonic(tsConfig, key) {
    if (tsConfig === null || tsConfig === undefined) {
        return null;
    }
    else if (typeof tsConfig === 'string') {
        return generic_utils.toSnakeCase(tsConfig);
    }
    else if ((typeof tsConfig === 'number') || (typeof tsConfig === 'boolean')) {
        return tsConfig;
    }
    else if (tsConfig instanceof Array) {
        var pyArray = [];
        var arrayLength = tsConfig.length;
        for (var i = 0; i < arrayLength; ++i) {
            var item = tsConfig[i];
            if (isArrayItemInputOrOutputName(key, i, item)) {
                pyArray.push(item);
            }
            else {
                pyArray.push(convertTsToPythonic(item, key));
            }
        }
        return pyArray;
    }
    else {
        var pyDict = {};
        for (var _i = 0, _a = Object.keys(tsConfig); _i < _a.length; _i++) {
            var tsKey = _a[_i];
            var tsValue = tsConfig[tsKey];
            var pyKey = generic_utils.toSnakeCase(tsKey);
            if ((tsKey === 'name' || tsKey === 'className') &&
                typeof tsValue === 'string') {
                // Special case the 'name' key with a string value. Name values, such as
                // the names of LayersModel and Layer instances, should not undergo the
                // snake-case conversion.
                pyDict[pyKey] = tsValue;
            }
            else {
                pyDict[pyKey] = convertTsToPythonic(tsValue, tsKey);
            }
        }
        return pyDict;
    }
}
exports.convertTsToPythonic = convertTsToPythonic;
//# sourceMappingURL=serialization_utils.js.map
}, function(modId) { var map = {"../utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508454, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Executor: Evaluates SymbolicTensor based on feeds.
 */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var errors_1 = require("../errors");
var generic_utils_1 = require("../utils/generic_utils");
var input_layer_1 = require("./input_layer");
var topology_1 = require("./topology");
/**
 * Helper function to check the dtype and shape compatibility of a feed value.
 */
function assertFeedCompatibility(key, val) {
    // Check dtype compatibility.
    if (key.dtype == null || key.dtype === val.dtype) {
        //  a.  If types match, return val tensor as is.
        return val;
    }
    try {
        //  b. Attempt to convert to expected type.
        return tfjs_core_1.cast(val, key.dtype);
    }
    catch (err) {
        //  c. If conversion fails, return helpful error.
        throw new errors_1.ValueError("The dtype of the feed (" + val.dtype + ") can not be cast to the dtype " +
            ("of the key '" + key.name + "' (" + key.dtype + ")."));
    }
}
/**
 * FeedDict: A mapping from unique SymbolicTensors to feed values for them.
 * A feed value is a concrete value represented as an `Tensor`.
 */
var FeedDict = /** @class */ (function () {
    /**
     * Constructor, optionally does copy-construction.
     * @param feeds An Array of `Feed`s, or another `FeedDict`, in which case
     *   copy-construction will be performed.
     */
    function FeedDict(feeds) {
        this.id2Value = {};
        this.id2Mask = {};
        this.name2Id = {};
        if (feeds instanceof FeedDict) {
            for (var id in feeds.id2Value) {
                this.id2Value[id] = feeds.id2Value[id];
                if (id in feeds.id2Mask) {
                    this.id2Mask[id] = feeds.id2Mask[id];
                }
            }
        }
        else {
            if (feeds == null) {
                return;
            }
            for (var _i = 0, feeds_1 = feeds; _i < feeds_1.length; _i++) {
                var feed = feeds_1[_i];
                this.add(feed.key, feed.value);
            }
        }
    }
    /**
     * Add a key-value pair to the FeedDict.
     *
     * @param key The key of the feed.
     * @param value The value of the tensor feed.
     * @param mask The value of the mask feed (optional).
     * @returns This `FeedDict`.
     * @throws ValueError: If the key `SymbolicTensor` already exists in the
     *   `FeedDict`.
     */
    FeedDict.prototype.add = function (key, value, mask) {
        if (this.id2Value[key.id] == null) {
            this.id2Value[key.id] = assertFeedCompatibility(key, value);
            this.name2Id[key.name] = key.id;
            if (mask != null) {
                this.id2Mask[key.id] = mask;
            }
        }
        else {
            throw new errors_1.ValueError("Duplicate key: name=" + key.name + ", id=" + key.id);
        }
        return this;
    };
    /**
     * Add a Feed to the FeedDict.
     * @param feed The new `Feed` to add.
     * @returns This `FeedDict`.
     */
    FeedDict.prototype.addFeed = function (feed) {
        this.add(feed.key, feed.value);
    };
    /**
     * Probe whether a key already exists in the FeedDict.
     * @param key
     */
    FeedDict.prototype.hasKey = function (key) {
        return this.id2Value[key.id] != null;
    };
    /**
     * Get all the SymbolicTensor available in this FeedDict.
     */
    FeedDict.prototype.names = function () {
        return Object.keys(this.name2Id);
    };
    /**
     * Get the feed value for given key.
     * @param key The SymbolicTensor, or its name (as a string), of which the
     *     value is sought.
     * @returns If `key` exists, the corresponding feed value.
     * @throws ValueError: If `key` does not exist in this `FeedDict`.
     */
    FeedDict.prototype.getValue = function (key) {
        if (key instanceof topology_1.SymbolicTensor) {
            if (this.id2Value[key.id] == null) {
                throw new errors_1.ValueError("Nonexistent key: " + key.name);
            }
            else {
                return this.id2Value[key.id];
            }
        }
        else {
            var id = this.name2Id[key];
            if (id == null) {
                throw new errors_1.ValueError("Feed dict has no SymbolicTensor name: " + key);
            }
            return this.id2Value[id];
        }
    };
    /**
     * Get the feed mask for given key.
     * @param key The SymbolicTensor, or its name (as a string), of which the
     *     value is sought.
     * @returns If `key` exists, the corresponding feed mask.
     * @throws ValueError: If `key` does not exist in this `FeedDict`.
     */
    FeedDict.prototype.getMask = function (key) {
        if (key instanceof topology_1.SymbolicTensor) {
            if (this.id2Value[key.id] == null) {
                throw new errors_1.ValueError("Nonexistent key: " + key.name);
            }
            else {
                return this.id2Mask[key.id];
            }
        }
        else {
            var id = this.name2Id[key];
            if (id == null) {
                throw new errors_1.ValueError("Feed dict has no SymbolicTensor name: " + key);
            }
            return this.id2Mask[id];
        }
    };
    /** Dispose all mask Tensors held by this object. */
    FeedDict.prototype.disposeMasks = function () {
        if (this.id2Mask != null) {
            tfjs_core_1.dispose(this.id2Mask);
        }
    };
    return FeedDict;
}());
exports.FeedDict = FeedDict;
// Cache for topologically sorted SymbolicTensors for given execution
// targets (i.e., fetches).
var cachedSorted = {};
// Cache for recipient count maps for given execution targets (i.e., fetches).
var cachedRecipientCounts = {};
/**
 * Execute a SymbolicTensor by using concrete feed values.
 *
 * A `SymbolicTensor` object is a node in a computation graph of TF.js
 * Layers. The object is backed by a source layer and input
 * `SymbolicTensor`s to the source layer. This method evaluates
 * the `call()` method of the source layer, using concrete values of the
 * inputs obtained from either
 * * `feedDict`, if the input key exists in `feedDict`, or else,
 * * a recursive call to `execute()` itself.
 *
 * @param x: The `SymbolicTensor` to execute.
 * @param feedDict: The feed values, as base condition of the recursion.
 *   execution.
 * @param kwargs: Optional keyword arguments.
 * @param probe: A probe object (of interface `ExecutionProbe`) used for
 *   testing memory footprint of `execute` calls.
 * @returns Result of the execution.
 * @throws ValueError: If any `SymbolicTensor`s from `InputLayer`s
 *   encountered during the execution lacks a feed value in `feedDict`.
 */
function execute(fetches, feedDict, kwargs, probe) {
    var training = kwargs == null ? false : kwargs['training'];
    var arrayFetches = Array.isArray(fetches);
    var fetchArray = arrayFetches ? fetches : [fetches];
    var outputNames = fetchArray.map(function (t) { return t.name; });
    var finalOutputs = [];
    var feedNames = feedDict.names();
    for (var _i = 0, outputNames_1 = outputNames; _i < outputNames_1.length; _i++) {
        var outputName = outputNames_1[_i];
        if (feedNames.indexOf(outputName) !== -1) {
            finalOutputs.push(feedDict.getValue(outputName));
        }
        else {
            finalOutputs.push(null);
        }
    }
    if (probe != null) {
        // For optional probing of memory footprint during execution.
        probe.maxNumTensors = -Infinity;
        probe.minNumTensors = Infinity;
    }
    // Check cache.
    var fetchAndFeedKey = outputNames.join(',') + '|' + feedDict.names().join(',');
    var sorted;
    var recipientCounts;
    if (cachedSorted[fetchAndFeedKey] == null) {
        // Cache doesn't contain the desired combination of fetches. Compute
        // topological sort for the combination for the first time.
        var out = getTopologicalSortAndRecipientCounts(fetchArray, feedDict);
        sorted = out.sorted;
        recipientCounts = out.recipientCounts;
        // Store results in cache for future use.
        cachedSorted[fetchAndFeedKey] = sorted;
        cachedRecipientCounts[fetchAndFeedKey] = recipientCounts;
    }
    sorted = cachedSorted[fetchAndFeedKey];
    recipientCounts = {};
    if (!training) {
        Object.assign(recipientCounts, cachedRecipientCounts[fetchAndFeedKey]);
    }
    var internalFeedDict = new FeedDict(feedDict);
    // Start iterative execution on the topologically-sorted SymbolicTensors.
    for (var i = 0; i < sorted.length; ++i) {
        if (probe != null) {
            // For optional probing of memory usage during execution.
            var numTensors = tfjs_core_1.memory().numTensors;
            if (numTensors > probe.maxNumTensors) {
                probe.maxNumTensors = numTensors;
            }
            if (numTensors < probe.minNumTensors) {
                probe.minNumTensors = numTensors;
            }
        }
        var symbolic = sorted[i];
        var srcLayer = symbolic.sourceLayer;
        if (srcLayer instanceof input_layer_1.InputLayer) {
            continue;
        }
        var inputValues = [];
        var inputMasks = [];
        var tensorsToDispose = [];
        var maskExists = false;
        for (var _a = 0, _b = symbolic.inputs; _a < _b.length; _a++) {
            var input = _b[_a];
            var value = internalFeedDict.getValue(input);
            var mask = internalFeedDict.getMask(input);
            inputValues.push(value);
            inputMasks.push(mask);
            if (mask != null) {
                maskExists = true;
            }
            if (!training) {
                recipientCounts[input.name]--;
                if (recipientCounts[input.name] === 0 && !feedDict.hasKey(input) &&
                    outputNames.indexOf(input.name) === -1 && !value.isDisposed) {
                    tensorsToDispose.push(value);
                }
            }
        }
        if (maskExists) {
            kwargs = kwargs || {};
            kwargs['mask'] = inputMasks[0];
        }
        var outputTensors = generic_utils_1.toList(srcLayer.apply(inputValues, kwargs));
        var outputMask = null;
        if (srcLayer.supportsMasking) {
            outputMask = srcLayer.computeMask(inputValues, inputMasks);
        }
        var layerOutputs = getNodeOutputs(symbolic);
        var outputSymbolicTensors = Array.isArray(layerOutputs) ? layerOutputs : [layerOutputs];
        for (var i_1 = 0; i_1 < outputSymbolicTensors.length; ++i_1) {
            if (!internalFeedDict.hasKey(outputSymbolicTensors[i_1])) {
                internalFeedDict.add(outputSymbolicTensors[i_1], outputTensors[i_1], Array.isArray(outputMask) ? outputMask[0] : outputMask);
            }
            var index = outputNames.indexOf(outputSymbolicTensors[i_1].name);
            if (index !== -1) {
                finalOutputs[index] = outputTensors[i_1];
            }
        }
        if (!training) {
            // Clean up Tensors that are no longer needed.
            tfjs_core_1.dispose(tensorsToDispose);
        }
    }
    // NOTE(cais): Unlike intermediate tensors, we don't discard mask
    // tensors as we go, because these tensors are sometimes passed over a
    // series of mutliple layers, i.e., not obeying the immediate input
    // relations in the graph. If this becomes a memory-usage concern,
    // we can improve this in the future.
    internalFeedDict.disposeMasks();
    return arrayFetches ? finalOutputs : finalOutputs[0];
}
exports.execute = execute;
/**
 * Sort the `SymbolicTensor`s topologically, for an array of fetches.
 *
 * This function calls getTopologicalSortAndRecipientCountsForOneFetch and
 * merges their results.
 *
 * @param fetch The array of fetches requested. Must be a non-empty array.
 * @param feedDict The dictionary of fed values.
 * @returns sorted: Topologically-sorted array of SymbolicTensors.
 *   recipientCounts: Recipient counts for all SymbolicTensors in `sorted`.
 */
function getTopologicalSortAndRecipientCounts(fetches, feedDict) {
    tfjs_core_1.util.assert(fetches != null && fetches.length > 0, function () { return "Expected at least one fetch, got none"; });
    var finalSorted = [];
    var finalRecipientMap = {};
    if (fetches.length === 1) {
        // Special-casing 1 fetch for efficiency.
        var out = getTopologicalSortAndRecipientCountsForOneFetch(fetches[0], feedDict);
        finalSorted = out.sorted;
        finalRecipientMap = out.recipientMap;
    }
    else {
        var visited = new Set();
        for (var _i = 0, fetches_1 = fetches; _i < fetches_1.length; _i++) {
            var fetch_1 = fetches_1[_i];
            var _a = getTopologicalSortAndRecipientCountsForOneFetch(fetch_1, feedDict), sorted = _a.sorted, recipientMap = _a.recipientMap;
            // Merge sorted SymbolicTensor Arrays.
            for (var _b = 0, sorted_1 = sorted; _b < sorted_1.length; _b++) {
                var symbolicTensor = sorted_1[_b];
                if (!visited.has(symbolicTensor.name)) {
                    finalSorted.push(symbolicTensor);
                    visited.add(symbolicTensor.name);
                }
            }
            var _loop_1 = function (name_1) {
                if (finalRecipientMap[name_1] == null) {
                    finalRecipientMap[name_1] = new Set();
                }
                recipientMap[name_1].forEach(function (recipient) { return finalRecipientMap[name_1].add(recipient); });
            };
            // Merge recipient maps.
            for (var name_1 in recipientMap) {
                _loop_1(name_1);
            }
        }
    }
    return {
        sorted: finalSorted,
        recipientCounts: recipientMap2Counts(finalRecipientMap)
    };
}
function recipientMap2Counts(recipientMap) {
    var recipientCounts = {};
    for (var name_2 in recipientMap) {
        recipientCounts[name_2] = recipientMap[name_2].size;
    }
    return recipientCounts;
}
/**
 * Sort the `SymbolicTensor`s topologically, for a single fetch.
 *
 * This helper function processes the upstream SymbolicTensors of a single
 * fetch.
 *
 * @param fetch The single fetch requested.
 * @param feedDict The dictionary of fed values.
 * @returns sorted: Topologically-sorted array of SymbolicTensors.
 *   recipientMap: Recipient names for all SymbolicTensors in `sorted`.
 */
function getTopologicalSortAndRecipientCountsForOneFetch(fetch, feedDict) {
    var visited = new Set();
    var sorted = [];
    var recipientMap = {};
    // Put keys of the feedDict into visited first, so they don't have to be
    // walked. This is needed in case where there are feeds for intermediate
    // SymbolicTensors of the graph.
    for (var _i = 0, _a = feedDict.names(); _i < _a.length; _i++) {
        var key = _a[_i];
        visited.add(key);
    }
    var stack = [];
    var marks = [];
    // Initial population of stack and marks.
    stack.push(fetch);
    while (stack.length > 0) {
        var top_1 = stack[stack.length - 1];
        if (visited.has(top_1.name)) {
            stack.pop();
            continue;
        }
        var topIsMarked = marks[marks.length - 1] === stack.length - 1;
        if (top_1.inputs.length === 0 || topIsMarked) {
            // Input SymbolicTensor or all children have been visited.
            stack.pop();
            sorted.push(top_1);
            visited.add(top_1.name);
            if (topIsMarked) {
                marks.pop();
            }
        }
        else {
            // A non-input SymbolicTensor whose upstream SymbolicTensors haven't
            // been visited yet. Push them onto the stack.
            marks.push(stack.length - 1);
            for (var _b = 0, _c = top_1.inputs; _b < _c.length; _b++) {
                var input = _c[_b];
                // Increment the recipient count. Note that this needs to happen
                // regardless of whether the SymbolicTensor has been visited before.
                if (recipientMap[input.name] == null) {
                    recipientMap[input.name] = new Set();
                }
                recipientMap[input.name].add(top_1.name);
                if (visited.has(input.name)) {
                    continue; // Avoid repeated visits to the same SymbolicTensor.
                }
                stack.push(input);
            }
        }
    }
    return { sorted: sorted, recipientMap: recipientMap };
}
exports.getTopologicalSortAndRecipientCountsForOneFetch = getTopologicalSortAndRecipientCountsForOneFetch;
/**
 * Get the symbolic output tensors of the node to which a given fetch belongs.
 * @param fetch The fetched symbolic tensor.
 * @returns The Array of symbolic tensors output by the node to which `fetch`
 *   belongs.
 */
function getNodeOutputs(fetch) {
    var layerOutputs;
    if (fetch.sourceLayer.inboundNodes.length === 1) {
        layerOutputs = fetch.sourceLayer.output;
    }
    else {
        var nodeIndex = null;
        for (var i = 0; i < fetch.sourceLayer.inboundNodes.length; ++i) {
            for (var _i = 0, _a = fetch.sourceLayer.inboundNodes[i]
                .outputTensors; _i < _a.length; _i++) {
                var outputTensor = _a[_i];
                if (outputTensor.id === fetch.id) {
                    nodeIndex = i;
                    break;
                }
            }
        }
        layerOutputs = fetch.sourceLayer.getOutputAt(nodeIndex);
    }
    return layerOutputs;
}
//# sourceMappingURL=executor.js.map
}, function(modId) { var map = {"../errors":1553229508428,"../utils/generic_utils":1553229508427,"./input_layer":1553229508437,"./topology":1553229508438}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508455, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interfaces and methods for training models using TensorFlow.js datasets.
 */
var tfc = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var base_callbacks_1 = require("../base_callbacks");
var errors_1 = require("../errors");
var logs_1 = require("../logs");
var generic_utils_1 = require("../utils/generic_utils");
// Default batch size used during tensor-based validation.
var DEFAULT_VALIDATION_BATCH_SIZE = 32;
/**
 * Standardize the output of a dataset iterator for use by
 * LayersModel.fitDataset().
 *
 * @param model: A `tf.LayersModel` object.
 * @param iteratorOut The output of a dataset iterator. It is required to be
 *   an object of the form `{xs: TensorOrArrayOrMap, ys: TensorOrArrayOrMap}`,
 *   where `TensorOrArrayOrMap` is a single `tf.Tensor`, a `tf.Tensor[]`, or a
 *   flat map from string names to `tf.Tensor`s.
 * @returns A flat array of `tf.Tensor` objects: the input `tf.Tensor`s followed
 *   by the target `tf.Tensor`s.  When `tf.Tensor`s are provided as a map, the
 *   order in the resulting array is taken from the `inputNames` and
 *   `outputNames` of the model.
 */
function standardizeDataIteratorOutput(
// Type `model` as `any` here to avoid circular dependency w/ training.ts.
// tslint:disable-next-line:no-any
model, iteratorOut) {
    var xs;
    var ys;
    var iteratorOutObj = iteratorOut;
    xs = iteratorOutObj['xs'];
    ys = iteratorOutObj['ys'];
    tfc.util.assert(xs != null && ys != null, function () { return 'A Dataset iterator for fitDataset() is expected to generate ' +
        'objects of the form `{xs: xVal, ys: yVal}`, where the two ' +
        'values may be `tf.Tensor`, an array of Tensors, or a map of ' +
        'string to Tensor.  The provided Dataset instead generates ' +
        iteratorOut; });
    var flattenedXs = flattenTensorOrArrayOrMap('input', model.inputNames, xs);
    var flattenedYs = flattenTensorOrArrayOrMap('output', model.outputNames, ys);
    var batchSize = flattenedXs[0].shape[0];
    tfc.util.assert(flattenedXs.length === model.inputs.length, function () { return "LayersModel has " + model.inputs.length + " inputs, but the dataset " +
        ("provides " + flattenedXs.length + " inputs.  (Expected input keys: ") +
        (JSON.stringify(model.inputNames) + ")"); });
    tfc.util.assert(flattenedYs.length === model.outputs.length, function () {
        return "LayersModel has " + model.outputs.length + " outputs, but the dataset " +
            ("provides " + flattenedYs.length + " outputs.  (Expected output keys: ") +
            (JSON.stringify(model.outputNames) + ")");
    });
    var _loop_1 = function (xIndex) {
        tfc.util.assert(flattenedXs[xIndex].shape[0] === batchSize, function () { return "Batch size mismatch: input " +
            (model.inputNames[xIndex] + " has " + flattenedXs[xIndex].shape[0] + "; ") +
            ("expected  " + batchSize + " based on input " + model.inputNames[0] + "."); });
    };
    for (var xIndex in flattenedXs) {
        _loop_1(xIndex);
    }
    var _loop_2 = function (yIndex) {
        tfc.util.assert(flattenedYs[yIndex].shape[0] === batchSize, function () { return "Batch size mismatch: output " +
            (model.outputNames[yIndex] + " has " + flattenedYs[yIndex].shape[0] + "; ") +
            ("expected  " + batchSize + " based on input " + model.inputNames[0] + "."); });
    };
    for (var yIndex in flattenedYs) {
        _loop_2(yIndex);
    }
    return flattenedXs.concat(flattenedYs);
}
function flattenTensorOrArrayOrMap(inputOrOutput, names, values) {
    if (values instanceof tfc.Tensor) {
        return [values];
    }
    else if (Array.isArray(values)) {
        tfc.util.assert(values.length === names.length, function () { return "Received an array of " + values.length + " Tensors, but expected " + names.length + " to match the " + inputOrOutput + " keys " + names + "."; });
        return values;
    }
    else {
        var result = [];
        // Check that all the required keys are available.
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var name_1 = names_1[_i];
            if (values[name_1] == null) {
                throw new errors_1.ValueError("The feature data generated by the dataset lacks the required " +
                    (inputOrOutput + " key '" + name_1 + "'."));
            }
            result.push(values[name_1]);
        }
        return result;
    }
}
function standardizeTensorValidationData(data) {
    if (data.length === 3) {
        throw new errors_1.NotImplementedError('Validation with sample weights is not implemented yet.');
    }
    return { xs: data[0], ys: data[1] };
}
function fitDataset(
// Type `model` as `any` here to avoid circular dependency w/ training.ts.
// tslint:disable-next-line:no-any
model, dataset, args) {
    return __awaiter(this, void 0, void 0, function () {
        var hasBatchesPerEpoch, doValidation, valXs, valYs, validationData, trainFunction, outLabels, callbackMetrics, callbacks, verbose, _a, callbackList, history_1, epoch, dataIterator, epochLogs, stepsDone, batchIndex, iteratorOut, xsAndYs, batchLogs, outs, i, label, out, valOuts, _b, i;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    hasBatchesPerEpoch = args.batchesPerEpoch != null;
                    tfc.util.assert(model.optimizer != null, function () { return 'You must compile a model before training/testing. Use ' +
                        'LayersModel.compile(modelCompileConfig).'; });
                    tfc.util.assert(args != null, function () { return "For fitDataset(), the 2nd argument (config) is required, " +
                        "but it is not provided in this call."; });
                    tfc.util.assert(args.epochs != null && args.epochs > 0 && Number.isInteger(args.epochs), function () { return "For fitDataset(), config.epochs is expected to be a positive " +
                        ("integer, but got " + args.epochs); });
                    tfc.util.assert(!hasBatchesPerEpoch ||
                        (args.batchesPerEpoch > 0 && Number.isInteger(args.batchesPerEpoch)), function () { return "For fitDataset(), config.batchesPerEpoch is expected to be a " +
                        ("positive integer if specified, but got " + args.batchesPerEpoch); });
                    tfc.util.assert(
                    // tslint:disable-next-line:no-any
                    args['validationSplit'] == null, function () { return '`validationSplit` is not supported by `fitDataset()`. ' +
                        'Use validationData instead.'; });
                    if (model.isTraining) {
                        throw new Error('Cannot start training because another fit() call is ongoing.');
                    }
                    model.isTraining = true;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 22, 23]);
                    doValidation = args.validationData != null;
                    valXs = void 0;
                    valYs = void 0;
                    if (doValidation) {
                        if (isDatasetObject(args.validationData)) {
                            tfc.util.assert(args.validationBatches == null ||
                                (args.validationBatches > 0 &&
                                    Number.isInteger(args.validationBatches)), function () { return "For fitDataset() with dataset-based validation, " +
                                "config.validationBatches is expected not to be provided, " +
                                "or to be a positive integer, " +
                                ("but got " + args.validationBatches); });
                        }
                        else {
                            validationData = standardizeTensorValidationData(args.validationData);
                            valXs = validationData.xs;
                            valYs = validationData.ys;
                        }
                    }
                    trainFunction = model.makeTrainFunction();
                    outLabels = model.getDedupedMetricsNames();
                    callbackMetrics = void 0;
                    if (doValidation) {
                        callbackMetrics =
                            outLabels.slice().concat(outLabels.map(function (n) { return 'val_' + n; }));
                    }
                    else {
                        callbackMetrics = outLabels.slice();
                    }
                    callbacks = base_callbacks_1.standardizeCallbacks(args.callbacks);
                    verbose = args.verbose == null ? 1 : args.verbose;
                    _a = base_callbacks_1.configureCallbacks(callbacks, args.yieldEvery, verbose, args.epochs, null, null, getStepsPerEpoch(dataset, args), null, // Batch size determined by the dataset itself.
                    doValidation, callbackMetrics), callbackList = _a.callbackList, history_1 = _a.history;
                    callbackList.setModel(model);
                    model.history = history_1;
                    return [4 /*yield*/, callbackList.onTrainBegin()];
                case 2:
                    _c.sent();
                    model.stopTraining_ = false;
                    epoch = args.initialEpoch == null ? 0 : args.initialEpoch;
                    return [4 /*yield*/, dataset.iterator()];
                case 3:
                    dataIterator = _c.sent();
                    _c.label = 4;
                case 4:
                    if (!(epoch < args.epochs)) return [3 /*break*/, 19];
                    epochLogs = {};
                    return [4 /*yield*/, callbackList.onEpochBegin(epoch)];
                case 5:
                    _c.sent();
                    stepsDone = 0;
                    batchIndex = 0;
                    if (!!hasBatchesPerEpoch) return [3 /*break*/, 7];
                    return [4 /*yield*/, dataset.iterator()];
                case 6:
                    dataIterator = _c.sent();
                    _c.label = 7;
                case 7:
                    if (!(hasBatchesPerEpoch ? stepsDone < args.batchesPerEpoch : true)) return [3 /*break*/, 17];
                    return [4 /*yield*/, dataIterator.next()];
                case 8:
                    iteratorOut = _c.sent();
                    // If `batchesPerEpoch` is specified, the dataset should not be
                    // exhausted until all epoches are done.
                    if (hasBatchesPerEpoch && iteratorOut.done) {
                        console.warn('You provided `batchesPerEpoch` as ' +
                            (args.batchesPerEpoch + ", ") +
                            'but your dataset iterator ran out of data after ' +
                            (stepsDone + " batches; ") +
                            'interrupting training. Make sure that your ' +
                            'dataset can generate at least `batchesPerEpoch * epochs` ' +
                            'batches (in this case, ' +
                            (args.batchesPerEpoch * args.epochs + " batches). ") +
                            'You may need to use the repeat() function when building ' +
                            'your dataset.');
                        return [3 /*break*/, 17];
                    }
                    if (!(iteratorOut.value != null)) return [3 /*break*/, 11];
                    xsAndYs = standardizeDataIteratorOutput(model, iteratorOut.value);
                    batchLogs = {};
                    batchLogs['batch'] = batchIndex;
                    batchLogs['size'] = xsAndYs[0].shape[0];
                    return [4 /*yield*/, callbackList.onBatchBegin(batchIndex, batchLogs)];
                case 9:
                    _c.sent();
                    outs = trainFunction(xsAndYs);
                    tfc.dispose(xsAndYs);
                    for (i = 0; i < outLabels.length; ++i) {
                        label = outLabels[i];
                        out = outs[i];
                        batchLogs[label] = out;
                        tfc.keep(out);
                    }
                    return [4 /*yield*/, callbackList.onBatchEnd(batchIndex, batchLogs)];
                case 10:
                    _c.sent();
                    logs_1.disposeTensorsInLogs(batchLogs);
                    batchIndex++;
                    stepsDone++;
                    _c.label = 11;
                case 11:
                    if (!(hasBatchesPerEpoch ? stepsDone >= args.batchesPerEpoch :
                        iteratorOut.done)) return [3 /*break*/, 16];
                    if (!doValidation) return [3 /*break*/, 15];
                    valOuts = void 0;
                    if (!isDatasetObject(args.validationData)) return [3 /*break*/, 13];
                    _b = generic_utils_1.toList;
                    return [4 /*yield*/, model.evaluateDataset(args.validationData, { batches: args.validationBatches })];
                case 12:
                    valOuts = _b.apply(void 0, [_c.sent()]);
                    return [3 /*break*/, 14];
                case 13:
                    valOuts = generic_utils_1.toList(model.evaluate(valXs, valYs, {
                        batchSize: args.validationBatchSize == null ?
                            DEFAULT_VALIDATION_BATCH_SIZE :
                            args.validationBatchSize,
                        verbose: 0
                    }));
                    _c.label = 14;
                case 14:
                    for (i = 0; i < model.metricsNames.length; ++i) {
                        epochLogs["val_" + model.metricsNames[i]] = valOuts[i];
                    }
                    _c.label = 15;
                case 15: 
                // Call `break` to exit one epoch lopp after validation is done. If
                // config.batchesPerEpoch is specified, an epoch while loop will stop
                // when `stepsDone >= config.batchesPerEpoch`. When
                // config.batchesPerEpoch is not provided, the following `break` is
                // required to exit the while lopp after dataset is exhausted.
                return [3 /*break*/, 17];
                case 16:
                    if (model.stopTraining_) {
                        return [3 /*break*/, 17];
                    }
                    return [3 /*break*/, 7];
                case 17: return [4 /*yield*/, callbackList.onEpochEnd(epoch, epochLogs)];
                case 18:
                    _c.sent();
                    epoch++;
                    if (model.stopTraining_) {
                        return [3 /*break*/, 19];
                    }
                    return [3 /*break*/, 4];
                case 19: return [4 /*yield*/, callbackList.onTrainEnd()];
                case 20:
                    _c.sent();
                    return [4 /*yield*/, model.history.syncData()];
                case 21:
                    _c.sent();
                    return [2 /*return*/, model.history];
                case 22:
                    model.isTraining = false;
                    return [7 /*endfinally*/];
                case 23: return [2 /*return*/];
            }
        });
    });
}
exports.fitDataset = fitDataset;
/** Helper function that determines number of steps (batches) per epoch. */
function getStepsPerEpoch(dataset, args) {
    // Attempt to determine # of batches in an epoch.
    var stepsPerEpoch = null;
    if (args.batchesPerEpoch != null) {
        stepsPerEpoch = args.batchesPerEpoch;
    }
    else if (Number.isFinite(dataset.size)) {
        stepsPerEpoch = dataset.size;
    }
    return stepsPerEpoch;
}
// Check if provided object is a Dataset object by checking it's .iterator
// element.
function isDatasetObject(dataset) {
    return (typeof dataset.iterator === 'function');
}
// Check if provided object is a LazyIterator object by checking it's .next
// element.
function isLazyIteratorObject(iterator) {
    return (typeof iterator.next === 'function');
}
function evaluateDataset(
// Type `model` as `any` here to avoid circular dependency w/ training.ts.
// tslint:disable-next-line:no-any
model, dataset, args) {
    return __awaiter(this, void 0, void 0, function () {
        var hasBatches, f, outs, dataIterator, _a, numExamples, batch, _loop_3, state_2, _loop_4, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    args = args || {};
                    hasBatches = args.batches != null;
                    f = model.testFunction;
                    outs = [];
                    if (args.verbose > 0) {
                        throw new errors_1.NotImplementedError('Verbose mode is not implemented yet.');
                    }
                    tfc.util.assert(!hasBatches || (args.batches > 0 && Number.isInteger(args.batches)), function () { return 'Test loop expects `batches` to be a positive integer, but ' +
                        ("received " + JSON.stringify(args.batches)); });
                    if (!isLazyIteratorObject(dataset)) return [3 /*break*/, 1];
                    _a = dataset;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, dataset.iterator()];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    dataIterator = _a;
                    numExamples = 0;
                    batch = 0;
                    _loop_3 = function () {
                        var iteratorOut, xsAndYs_1, batchOuts, i, batchSize_1, _loop_5, i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, dataIterator.next()];
                                case 1:
                                    iteratorOut = _a.sent();
                                    if (iteratorOut.value) {
                                        xsAndYs_1 = standardizeDataIteratorOutput(model, iteratorOut.value);
                                        batchOuts = tfc.tidy(function () { return f(xsAndYs_1); });
                                        tfc.dispose(xsAndYs_1);
                                        if (batch === 0) {
                                            for (i = 0; i < batchOuts.length; ++i) {
                                                outs.push(state_1.getScalar(0));
                                            }
                                        }
                                        batchSize_1 = xsAndYs_1[0].shape[0];
                                        _loop_5 = function (i) {
                                            var batchOut = batchOuts[i];
                                            var oldScalar = outs[i];
                                            outs[i] = tfc.tidy(function () { return tfc.add(outs[i], tfc.mul(state_1.getScalar(batchSize_1), batchOut)); });
                                            if (batch > 0) {
                                                tfc.dispose(oldScalar);
                                            }
                                        };
                                        for (i = 0; i < batchOuts.length; ++i) {
                                            _loop_5(i);
                                        }
                                        tfc.dispose(batchOuts);
                                        numExamples += batchSize_1;
                                        ++batch;
                                    }
                                    if (iteratorOut.done) {
                                        if (hasBatches) {
                                            console.warn('Your dataset iterator ran out of data during evaluateDataset(). ' +
                                                'Interrupting evalution. Make sure that your ' +
                                                'dataset can generate at least `batches` ' +
                                                ("batches (in this case, " + args.batches + " batches). ") +
                                                'You may need to use the repeat() function when building ' +
                                                'your dataset.');
                                        }
                                        return [2 /*return*/, "break"];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _b.label = 4;
                case 4:
                    if (!(hasBatches ? batch < args.batches : true)) return [3 /*break*/, 6];
                    return [5 /*yield**/, _loop_3()];
                case 5:
                    state_2 = _b.sent();
                    if (state_2 === "break")
                        return [3 /*break*/, 6];
                    return [3 /*break*/, 4];
                case 6:
                    _loop_4 = function (i) {
                        var oldScalar = outs[i];
                        outs[i] =
                            tfc.tidy(function () { return tfc.div(outs[i], state_1.getScalar(numExamples)); });
                        tfc.dispose(oldScalar);
                    };
                    for (i = 0; i < outs.length; ++i) {
                        _loop_4(i);
                    }
                    return [2 /*return*/, generic_utils_1.singletonOrArray(outs)];
            }
        });
    });
}
exports.evaluateDataset = evaluateDataset;
//# sourceMappingURL=training_dataset.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../base_callbacks":1553229508443,"../errors":1553229508428,"../logs":1553229508444,"../utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508456, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interfaces and methods for training models using tf.Tensor objects.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var tfjs_backend_1 = require("../backend/tfjs_backend");
var base_callbacks_1 = require("../base_callbacks");
var errors_1 = require("../errors");
var logs_1 = require("../logs");
var math_utils_1 = require("../utils/math_utils");
function checkBatchSize(batchSize) {
    tfc.util.assert(batchSize > 0 && Number.isInteger(batchSize), function () { return "batchSize is required to be a positive integer, but got " + batchSize; });
}
exports.checkBatchSize = checkBatchSize;
/**
 * Slice an Tensor or an Array of Tensors, by start and stop indices.
 *
 * Porting Note: The `_slice_arrays` function in PyKeras is covered by this
 *   function and `sliceArraysByIndices()` together.
 *
 * @param arrays: the input.
 * @param start: the starting index (inclusive).
 * @param stop: the stopping index (exclusive).
 * @returns The result of the slicing. If `arrays` is an `Array` of
 *   `tf.Tensor`s, the slicing will be applied to all elements of the `Array`
 *   in the same way.
 */
function sliceArrays(arrays, start, stop) {
    if (arrays == null) {
        return [null];
    }
    else if (Array.isArray(arrays)) {
        return arrays.map(function (array) { return tfjs_backend_1.sliceAlongFirstAxis(array, start, stop - start); });
    }
    else { // Tensor.
        return tfjs_backend_1.sliceAlongFirstAxis(arrays, start, stop - start);
    }
}
exports.sliceArrays = sliceArrays;
/**
 * Slice an Tensor or an Array of Tensors, by random-order indices.
 *
 * Porting Note: The `_slice_arrays` function in PyKeras is covered by this
 *   function and `sliceArrays()` together.
 *
 * @param arrays The input `tf.Tensor` or `Array` of `tf.Tensor`s to slice.
 *   If an `Array` of `tf.Tensor`s, all `tf.Tensor`s will be sliced in the
 *   same fashion.
 * @param indices The indices to use for slicing along the first (batch)
 *   dimension.
 * @returns Result(s) of the slicing.
 */
function sliceArraysByIndices(arrays, indices) {
    return tfc.tidy(function () {
        if (arrays == null) {
            return null;
        }
        else if (Array.isArray(arrays)) {
            return arrays.map(function (array) { return sliceArraysByIndices(array, indices); });
        }
        else {
            // TODO(cais): indices should be a pre-constructed Tensor1D to avoid
            //   tensor1d() calls.
            return tfjs_backend_1.gather(arrays, indices.dtype === 'int32' ? indices : indices.toInt());
        }
    });
}
exports.sliceArraysByIndices = sliceArraysByIndices;
/**
 * Returns a list of batch indices (tuples of indices).
 * @param size: Integer, total size of the data to slice into batches.
 * @param batchSize: Integer, batch size.
 * @returns An Array of [batchStart, batchEnd] tuples. batchStart is
 *   inclusive; batchEnd is exclusive. I.e., each batch consists of indices x
 *   that satisfy batchStart <= x < batchEnd.
 */
function makeBatches(size, batchSize) {
    var output = [];
    var batchStart = 0;
    var batchEnd = null;
    while (batchStart < size) {
        batchEnd = batchStart + batchSize;
        if (batchEnd >= size) {
            batchEnd = size;
        }
        output.push([batchStart, batchEnd]);
        batchStart = batchEnd;
    }
    return output;
}
exports.makeBatches = makeBatches;
/**
 * Abstract fit function for `f(ins)`.
 * @param f A Function returning a list of tensors. For training, this
 *   function is expected to perform the updates to the variables.
 * @param ins List of tensors to be fed to `f`.
 * @param outLabels List of strings, display names of the outputs of `f`.
 * @param batchSize Integer batch size or `== null` if unknown.
 * @param epochs Number of times to iterate over the data.
 * @param verbose Verbosity mode: 0, 1, or 2. Default: 1.
 * @param callbacks List of callbacks to be called during training.
 * @param valF Function to call for validation.
 * @param valIns List of tensors to be fed to `valF`.
 * @param shuffle Whether to shuffle the data at the beginning of every
 * epoch.
 * @param callbackMetrics List of strings, the display names of the metrics
 *   passed to the callbacks. They should be the concatenation of the
 *   display names of the outputs of `f` and the list of display names
 *   of the outputs of `valF`.
 * @param initialEpoch Epoch at which to start training (useful for
 *   resuming a previous training run).
 * @param stepsPerEpoch Total number of steps (batches on samples) before
 *   declaring one epoch finished and starting the next epoch. Ignored with
 *   the default value of `undefined` or `null`.
 * @param validationSteps Number of steps to run validation for (only if
 *   doing validation from data tensors). Not applicable for tfjs-layers.
 * @returns A `History` object.
 */
function fitLoop(
// Type `model` as `any` here to avoid circular dependency w/ training.ts.
// tslint:disable-next-line:no-any
model, f, ins, outLabels, batchSize, epochs, verbose, callbacks, valF, valIns, shuffle, callbackMetrics, initialEpoch, stepsPerEpoch, validationSteps, yieldEvery) {
    return __awaiter(this, void 0, void 0, function () {
        var doValidation, numTrainSamples, indexArray, _a, callbackList, history, _loop_1, epoch, state_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (batchSize == null) {
                        batchSize = 32;
                    }
                    if (epochs == null) {
                        epochs = 1;
                    }
                    if (shuffle == null) {
                        shuffle = true;
                    }
                    if (initialEpoch == null) {
                        initialEpoch = 0;
                    }
                    doValidation = false;
                    if (valF != null && valIns != null) {
                        doValidation = true;
                        // TODO(cais): verbose message.
                    }
                    if (validationSteps != null) {
                        doValidation = true;
                        if (stepsPerEpoch == null) {
                            throw new errors_1.ValueError('Can only use `validationSteps` when doing step-wise training, ' +
                                'i.e., `stepsPerEpoch` must be set.');
                        }
                    }
                    numTrainSamples = model.checkNumSamples(ins, batchSize, stepsPerEpoch, 'steps_per_epoch');
                    if (numTrainSamples != null) {
                        indexArray = math_utils_1.range(0, numTrainSamples);
                    }
                    if (verbose == null) {
                        verbose = 1;
                    }
                    _a = base_callbacks_1.configureCallbacks(callbacks, yieldEvery, verbose, epochs, initialEpoch, numTrainSamples, stepsPerEpoch, batchSize, doValidation, callbackMetrics), callbackList = _a.callbackList, history = _a.history;
                    callbackList.setModel(model);
                    model.history = history;
                    return [4 /*yield*/, callbackList.onTrainBegin()];
                case 1:
                    _b.sent();
                    model.stopTraining_ = false;
                    _loop_1 = function (epoch) {
                        var epochLogs, epochIndexArray1D_1, batches_1, _loop_2, batchIndex, state_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, callbackList.onEpochBegin(epoch)];
                                case 1:
                                    _a.sent();
                                    epochLogs = {};
                                    if (!(stepsPerEpoch != null)) return [3 /*break*/, 2];
                                    throw new errors_1.NotImplementedError('stepsPerEpoch mode is not implemented yet.');
                                case 2:
                                    if (shuffle === 'batch') {
                                        throw new errors_1.NotImplementedError('batch shuffling is not implemneted yet');
                                    }
                                    else if (shuffle) {
                                        tfjs_core_1.util.shuffle(indexArray);
                                    }
                                    epochIndexArray1D_1 = tfjs_core_1.tensor1d(indexArray);
                                    batches_1 = makeBatches(numTrainSamples, batchSize);
                                    _loop_2 = function (batchIndex) {
                                        var batchLogs;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    batchLogs = {};
                                                    return [4 /*yield*/, callbackList.onBatchBegin(batchIndex, batchLogs)];
                                                case 1:
                                                    _a.sent();
                                                    tfc.tidy(function () {
                                                        var batchStart = batches_1[batchIndex][0];
                                                        var batchEnd = batches_1[batchIndex][1];
                                                        var batchIds = tfjs_backend_1.sliceAlongFirstAxis(epochIndexArray1D_1, batchStart, batchEnd - batchStart);
                                                        batchLogs['batch'] = batchIndex;
                                                        batchLogs['size'] = batchEnd - batchStart;
                                                        // TODO(cais): In ins, train flag can be a number, instead of an
                                                        //   Tensor? Do we need to handle this in tfjs-layers?
                                                        var insBatch = sliceArraysByIndices(ins, batchIds);
                                                        var outs = f(insBatch);
                                                        for (var i = 0; i < outLabels.length; ++i) {
                                                            var label = outLabels[i];
                                                            var out = outs[i];
                                                            batchLogs[label] = out;
                                                            tfc.keep(out);
                                                            // TODO(cais): Use scope() to avoid ownership.
                                                        }
                                                        if (batchIndex === batches_1.length - 1) { // Last batch.
                                                            if (doValidation) {
                                                                var valOuts = model.testLoop(valF, valIns, batchSize);
                                                                // Porting Notes: In tfjs-layers, valOuts is always an Array.
                                                                for (var i = 0; i < outLabels.length; ++i) {
                                                                    var label = outLabels[i];
                                                                    var out = valOuts[i];
                                                                    tfc.keep(out);
                                                                    // TODO(cais): Use scope() to avoid ownership.
                                                                    epochLogs['val_' + label] = out;
                                                                }
                                                            }
                                                        }
                                                    });
                                                    return [4 /*yield*/, callbackList.onBatchEnd(batchIndex, batchLogs)];
                                                case 2:
                                                    _a.sent();
                                                    logs_1.disposeTensorsInLogs(batchLogs);
                                                    if (model.stopTraining_) {
                                                        return [2 /*return*/, "break"];
                                                    }
                                                    return [2 /*return*/];
                                            }
                                        });
                                    };
                                    batchIndex = 0;
                                    _a.label = 3;
                                case 3:
                                    if (!(batchIndex < batches_1.length)) return [3 /*break*/, 6];
                                    return [5 /*yield**/, _loop_2(batchIndex)];
                                case 4:
                                    state_2 = _a.sent();
                                    if (state_2 === "break")
                                        return [3 /*break*/, 6];
                                    _a.label = 5;
                                case 5:
                                    ++batchIndex;
                                    return [3 /*break*/, 3];
                                case 6:
                                    epochIndexArray1D_1.dispose();
                                    _a.label = 7;
                                case 7: 
                                // TODO(cais): Run validation at the end of the epoch.
                                return [4 /*yield*/, callbackList.onEpochEnd(epoch, epochLogs)];
                                case 8:
                                    // TODO(cais): Run validation at the end of the epoch.
                                    _a.sent();
                                    if (model.stopTraining_) {
                                        return [2 /*return*/, "break"];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    epoch = initialEpoch;
                    _b.label = 2;
                case 2:
                    if (!(epoch < epochs)) return [3 /*break*/, 5];
                    return [5 /*yield**/, _loop_1(epoch)];
                case 3:
                    state_1 = _b.sent();
                    if (state_1 === "break")
                        return [3 /*break*/, 5];
                    _b.label = 4;
                case 4:
                    ++epoch;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, callbackList.onTrainEnd()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, model.history.syncData()];
                case 7:
                    _b.sent();
                    return [2 /*return*/, model.history];
            }
        });
    });
}
function fitTensors(
// Type `model` as `any` here to avoid circular dependency w/ training.ts.
// tslint:disable-next-line:no-any
model, x, y, args) {
    if (args === void 0) { args = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var inputs, targets, inputValX, inputValY, valX, valY, batchSize, standardizedOuts, doValidation, valIns, valStandardized, splitAt, originalBatchSize, ins, trainFunction, outLabels, valFunction, callbackMetrics, callbacks, out;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (model.isTraining) {
                        throw new Error('Cannot start training because another fit() call is ongoing.');
                    }
                    model.isTraining = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    batchSize = args.batchSize == null ? 32 : args.batchSize;
                    checkBatchSize(batchSize);
                    standardizedOuts = model.standardizeUserData(x, y, false, batchSize);
                    inputs = standardizedOuts[0];
                    targets = standardizedOuts[1];
                    doValidation = false;
                    valIns = void 0;
                    if (args.validationData != null && args.validationData.length > 0) {
                        doValidation = true;
                        if (args.validationData.length === 2) {
                            // config.validationData consists of valX and valY.
                            inputValX = args.validationData[0];
                            inputValY = args.validationData[1];
                        }
                        else if (args.validationData.length === 3) {
                            throw new errors_1.NotImplementedError('validationData including sample weights is not supported yet.');
                        }
                        else {
                            throw new errors_1.ValueError("When passing validation data, it must contain 2 (valX, valY) " +
                                "or 3 (valX, valY, valSampleWeight) items; " +
                                (args.validationData + " is invalid."));
                        }
                        valStandardized = model.standardizeUserData(inputValX, inputValY, true, batchSize);
                        valX = valStandardized[0];
                        valY = valStandardized[1];
                        // TODO(cais): Use validation sample weights in valStandardized[2]
                        // once
                        //   it becomes available.
                        valIns = valX.concat(valY);
                        // TODO(cais): Add useLearningPhase data properly.
                    }
                    else if (args.validationSplit != null && args.validationSplit > 0 &&
                        args.validationSplit < 1) {
                        doValidation = true;
                        splitAt = Math.floor(inputs[0].shape[0] * (1 - args.validationSplit));
                        originalBatchSize = inputs[0].shape[0];
                        valX = sliceArrays(inputs, splitAt, originalBatchSize);
                        inputs = sliceArrays(inputs, 0, splitAt);
                        valY = sliceArrays(targets, splitAt, originalBatchSize);
                        targets = sliceArrays(targets, 0, splitAt);
                        // TODO(cais): Once sampleWeights becomes available, slice it to get
                        //   valSampleWeights.
                        valIns = valX.concat(valY);
                        // TODO(cais): Add useLearningPhase data properly.
                    }
                    else if (args.validationSteps != null) {
                        doValidation = true;
                        // TODO(cais): Add useLearningPhase.
                    }
                    ins = inputs.concat(targets);
                    model.checkTrainableWeightsConsistency();
                    trainFunction = model.makeTrainFunction();
                    outLabels = model.getDedupedMetricsNames();
                    valFunction = void 0;
                    callbackMetrics = void 0;
                    if (doValidation) {
                        model.makeTestFunction();
                        valFunction = model.testFunction;
                        callbackMetrics =
                            outLabels.slice().concat(outLabels.map(function (n) { return 'val_' + n; }));
                    }
                    else {
                        valFunction = null;
                        valIns = [];
                        callbackMetrics = outLabels.slice();
                    }
                    callbacks = base_callbacks_1.standardizeCallbacks(args.callbacks);
                    return [4 /*yield*/, fitLoop(model, trainFunction, ins, outLabels, batchSize, args.epochs, args.verbose, callbacks, valFunction, valIns, args.shuffle, callbackMetrics, args.initialEpoch, null, null, args.yieldEvery)];
                case 2:
                    out = _a.sent();
                    return [2 /*return*/, out];
                case 3:
                    model.isTraining = false;
                    // Memory clean up.
                    disposeNewTensors(inputs, x);
                    disposeNewTensors(targets, y);
                    disposeNewTensors(valX, inputValX);
                    disposeNewTensors(valY, inputValY);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.fitTensors = fitTensors;
/**
 * Ensure tensors all have a rank of at least 2.
 *
 * If a tensor has a rank of 1, it is dimension-expanded to rank 2.
 * If any tensor has a rank of 0 (i.e., is a scalar), an error will be thrown.
 */
function ensureTensorsRank2OrHigher(tensors) {
    var outs = [];
    if (tensors instanceof tfjs_core_1.Tensor) {
        tensors = [tensors];
    }
    // Make Tensors at least 2D.
    for (var i = 0; i < tensors.length; ++i) {
        var tensor = tensors[i];
        if (tensor.rank === 1) {
            outs.push(tfjs_backend_1.expandDims(tensor, 1));
        }
        else if (tensor.rank === 0) {
            throw new Error('Expected tensor to be at least 1D, but received a 0D tensor ' +
                '(scalar).');
        }
        else {
            outs.push(tensor);
        }
    }
    return outs;
}
exports.ensureTensorsRank2OrHigher = ensureTensorsRank2OrHigher;
/**
 * Compare a set of tensors with a reference (old) set, discard the ones
 * in the new set that are not present in the reference set.
 *
 * This method is used for memory clenaup during calls such as
 * LayersModel.fit().
 *
 * @param tensors New set which may contain Tensors not present in
 *   `refTensors`.
 * @param refTensors Reference Tensor set.
 */
// TODO(cais, kangyizhang): Deduplicate with tfjs-data.
function disposeNewTensors(tensors, refTensors) {
    if (tensors == null) {
        return;
    }
    var oldTensorIds = [];
    if (refTensors instanceof tfjs_core_1.Tensor) {
        oldTensorIds.push(refTensors.id);
    }
    else if (Array.isArray(refTensors)) {
        refTensors.forEach(function (t) { return oldTensorIds.push(t.id); });
    }
    else if (refTensors != null) {
        // `oldTensors` is a map from string name to Tensor.
        for (var name_1 in refTensors) {
            var oldTensor = refTensors[name_1];
            oldTensorIds.push(oldTensor.id);
        }
    }
    var tensorsToDispose = [];
    if (tensors instanceof tfjs_core_1.Tensor) {
        if (oldTensorIds.indexOf(tensors.id) === -1) {
            tensorsToDispose.push(tensors);
        }
    }
    else if (Array.isArray(tensors)) {
        tensors.forEach(function (t) {
            if (oldTensorIds.indexOf(t.id) === -1) {
                tensorsToDispose.push(t);
            }
        });
    }
    else if (tensors != null) {
        // `oldTensors` is a map from string name to Tensor.
        for (var name_2 in tensors) {
            var tensor = tensors[name_2];
            if (oldTensorIds.indexOf(tensor.id) === -1) {
                tensorsToDispose.push(tensor);
            }
        }
    }
    tensorsToDispose.forEach(function (t) {
        if (!t.isDisposed) {
            t.dispose();
        }
    });
}
exports.disposeNewTensors = disposeNewTensors;
//# sourceMappingURL=training_tensors.js.map
}, function(modId) { var map = {"../backend/tfjs_backend":1553229508431,"../base_callbacks":1553229508443,"../errors":1553229508428,"../logs":1553229508444,"../utils/math_utils":1553229508434}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508457, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Original source keras/models.py */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("./backend/state");
var input_layer_1 = require("./engine/input_layer");
var topology_1 = require("./engine/topology");
var training_1 = require("./engine/training");
var errors_1 = require("./errors");
var serialization_1 = require("./layers/serialization");
var generic_utils = require("./utils/generic_utils");
var serialization_utils_1 = require("./utils/serialization_utils");
var types_utils_1 = require("./utils/types_utils");
/**
 * Parses a JSON model configuration file and returns a model instance.
 *
 * ```js
 * // This example shows how to serialize a model using `toJSON()` and
 * // deserialize it as another model using `tf.models.modelFromJSON()`.
 * // Note: this example serializes and deserializes only the topology
 * // of the model; the weights of the loaded model will be different
 * // from those of the the original model, due to random weight
 * // initialization.
 * // To load the topology and weights of a model, use `tf.loadLayersModel()`.
 * const model1 = tf.sequential();
 * model1.add(tf.layers.repeatVector({inputShape: [2], n: 4}));
 * // Serialize `model1` as a JSON object.
 * const model1JSON = model1.toJSON(null, false);
 * model1.summary();
 *
 * const model2 = await tf.models.modelFromJSON(model1JSON);
 * model2.summary();
 * ```
 *
 *  @param modelAndWeightsConfig JSON object or string encoding a model and
 *       weights configuration. It can also be only the topology JSON of the
 *       model, in which case the weights will not be loaded.
 *  @param custom_objects Optional dictionary mapping names
 *       (strings) to custom classes or functions to be
 *       considered during deserialization.
 * @returns A TensorFlow.js Layers `tf.LayersModel` instance (uncompiled).
 */
function modelFromJSON(modelAndWeightsConfig, customObjects) {
    return __awaiter(this, void 0, void 0, function () {
        var modelTopology, tsConfig, model, weightValues, uniqueWeightValues, _i, _a, weight;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!('modelTopology' in modelAndWeightsConfig)) {
                        modelAndWeightsConfig = {
                            modelTopology: modelAndWeightsConfig
                        };
                    }
                    modelAndWeightsConfig = modelAndWeightsConfig;
                    modelTopology = modelAndWeightsConfig.modelTopology;
                    if (modelTopology['model_config'] != null) {
                        // If the model-topology JSON contains a 'model_config' field, then it is
                        // a full model JSON (e.g., from `keras.Model.save()`), which contains
                        // not only the model's architecture in its 'model_config' field, but
                        // additional information such as the model's optimizer. We use only the
                        // 'model_config' field currently.
                        modelTopology = modelTopology['model_config'];
                    }
                    tsConfig = serialization_utils_1.convertPythonicToTs(modelTopology);
                    model = serialization_1.deserialize(tsConfig, customObjects);
                    if (!(modelAndWeightsConfig.weightsManifest != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, tfjs_core_1.io.loadWeights(modelAndWeightsConfig.weightsManifest, modelAndWeightsConfig.pathPrefix, model.weights.map(function (weight) { return weight.originalName; }))];
                case 1:
                    weightValues = _b.sent();
                    uniqueWeightValues = {};
                    for (_i = 0, _a = model.weights; _i < _a.length; _i++) {
                        weight = _a[_i];
                        uniqueWeightValues[weight.originalName] =
                            weightValues[weight.originalName];
                    }
                    model.loadWeights(uniqueWeightValues);
                    // Dispose temporary weight values.
                    tfjs_core_1.dispose(weightValues);
                    _b.label = 2;
                case 2: return [2 /*return*/, model];
            }
        });
    });
}
exports.modelFromJSON = modelFromJSON;
/**
 * Load a model, including its topology and optionally weights.  See the
 * Tutorial named "How to import a Keras Model" for usage examples.
 *
 * Example 1: Save `model`'s topology and weights to browser [local
 * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
 * then load it back.
 *
 * ```js
 * const model = tf.sequential(
 *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
 * console.log('Prediction from original model:');
 * model.predict(tf.ones([1, 3])).print();
 *
 * const saveResults = await model.save('localstorage://my-model-1');
 *
 * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
 * console.log('Prediction from loaded model:');
 * loadedModel.predict(tf.ones([1, 3])).print();
 * ```
 *
 * Example 2. Saving `model`'s topology and weights to browser
 * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
 * then load it back.
 *
 * ```js
 * const model = tf.sequential(
 *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
 * console.log('Prediction from original model:');
 * model.predict(tf.ones([1, 3])).print();
 *
 * const saveResults = await model.save('indexeddb://my-model-1');
 *
 * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
 * console.log('Prediction from loaded model:');
 * loadedModel.predict(tf.ones([1, 3])).print();
 * ```
 *
 * Example 3. Load a model from user-selected files from HTML
 * [file input
 * elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
 *
 * ```js
 * // Note: this code snippet will not work without the HTML elements in the
 * //   page
 * const jsonUpload = document.getElementById('json-upload');
 * const weightsUpload = document.getElementById('weights-upload');
 *
 * const model = await tf.loadLayersModel(
 *     tf.io.browserFiles([jsonUpload.files[0], weightsUpload.files[0]]));
 * ```
 *
 * Example 4. Load a model from an HTTP server.
 *
 * ```js
 * const model = await
 *     tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
 * model.summary();
 * ```
 *
 * @param pathOrIOHandler Can be either of the two formats
 *   1. A string path to the `ModelAndWeightsConfig` JSON describing
 *      the model in the canonical TensorFlow.js format. This path will be
 *      interpreted as a relative HTTP path, to which `fetch` will be used to
 *      request the model topology and weight manifest JSON.
 *      The content of the JSON file is assumed to be a JSON object with the
 *      following fields and values:
 *      - 'modelTopology': A JSON object that can be either of:
 *        1. a model architecture JSON consistent with the format of the return
 *            value of `keras.Model.to_json()`
 *        2. a full model JSON in the format of `keras.models.save_model()`.
 *      - 'weightsManifest': A TensorFlow.js weights manifest.
 *      See the Python converter function `save_model()` for more details.
 *      It is also assumed that model weights can be accessed from relative
 *      paths described by the `paths` fields in weights manifest.
 *   2. An `tf.io.IOHandler` object that loads model artifacts with its `load`
 *      method.
 * @param options Optional configuration arguments for the model loading,
 *   including:
 *   - `strict`: Require that the provided weights exactly match those required
 *     by the layers.  Default true.  Passing false means that both extra
 *     weights and missing weights will be silently ignored.
 *   - `onProgress`: A progress callback of the form:
 *     `(fraction: number) => void`. This callback can be used to monitor the
 *     model-loading process.
 * @returns A `Promise` of `tf.LayersModel`, with the topology and weights
 *     loaded.
 */
function loadLayersModelInternal(pathOrIOHandler, options) {
    return __awaiter(this, void 0, void 0, function () {
        var handlers;
        return __generator(this, function (_a) {
            if (options == null) {
                options = {};
            }
            if (typeof pathOrIOHandler === 'string') {
                handlers = tfjs_core_1.io.getLoadHandlers(pathOrIOHandler);
                if (handlers.length === 0) {
                    // For backward compatibility: if no load handler can be found,
                    // assume it is a relative http path.
                    // TODO(cais): Reformat the args into a single `LoadOptions` once the core
                    // is refactored.
                    handlers.push(tfjs_core_1.io.browserHTTPRequest(pathOrIOHandler, options));
                }
                else if (handlers.length > 1) {
                    throw new errors_1.ValueError("Found more than one (" + handlers.length + ") load handlers for " +
                        ("URL '" + pathOrIOHandler + "'"));
                }
                pathOrIOHandler = handlers[0];
            }
            return [2 /*return*/, loadLayersModelFromIOHandler(pathOrIOHandler, undefined, options)];
        });
    });
}
exports.loadLayersModelInternal = loadLayersModelInternal;
/**
 * Load a model and optionally its weights, using an IOHandler object.
 *
 * @param handler The instance of `IOHandler` to be used during the model
 *   loading.
 * @param customObjects Any optional custom objects to be used during model
 *   loading.
 * @param strict Whether the weight loading will be done in strict mode.
 *   Default: `true`.
 */
function loadLayersModelFromIOHandler(handler, customObjects, options) {
    return __awaiter(this, void 0, void 0, function () {
        var artifacts, modelTopology, strict, fastWeightInit, model, weights;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (options == null) {
                        options = {};
                    }
                    if (handler.load == null) {
                        throw new errors_1.ValueError('Cannot proceed with model loading because the IOHandler provided ' +
                            'does not have the `load` method implemented.');
                    }
                    return [4 /*yield*/, handler.load()];
                case 1:
                    artifacts = _a.sent();
                    modelTopology = artifacts.modelTopology;
                    if (modelTopology['model_config'] != null) {
                        modelTopology = modelTopology['model_config'];
                    }
                    strict = options.strict == null ? true : options.strict;
                    fastWeightInit = artifacts.weightData != null && artifacts.weightSpecs != null && strict;
                    model = serialization_1.deserialize(serialization_utils_1.convertPythonicToTs(modelTopology), customObjects, fastWeightInit);
                    // If weightData is present, load the weights into the model.
                    if (artifacts.weightData != null) {
                        // Loading weights requires weightSpecs.
                        if (artifacts.weightSpecs == null) {
                            throw new errors_1.ValueError('LayersModel artifacts contains weight data, but not weight specs. ' +
                                'Therefore loading of weights cannot proceed.');
                        }
                        weights = tfjs_core_1.io.decodeWeights(artifacts.weightData, artifacts.weightSpecs);
                        model.loadWeights(weights, strict);
                        // Dispose temporary weight values.
                        tfjs_core_1.dispose(weights);
                    }
                    return [2 /*return*/, model];
            }
        });
    });
}
exports.loadLayersModelFromIOHandler = loadLayersModelFromIOHandler;
/**
 * A model with a stack of layers, feeding linearly from one to the next.
 *
 * `tf.sequential` is a factory function that creates an instance of
 * `tf.Sequential`.
 *
 * ```js
 *  // Define a model for linear regression.
 *  const model = tf.sequential();
 *  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
 *
 *  // Prepare the model for training: Specify the loss and the optimizer.
 *  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
 *
 *  // Generate some synthetic data for training.
 *  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
 *  const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
 *
 *  // Train the model using the data then do inference on a data point the
 *  // model hasn't seen:
 *  await model.fit(xs, ys);
 *  model.predict(tf.tensor2d([5], [1, 1])).print();
 * ```
 */
/** @doc {heading: 'Models', subheading: 'Classes'} */
var Sequential = /** @class */ (function (_super) {
    __extends(Sequential, _super);
    function Sequential(args) {
        var _this = _super.call(this, { inputs: [], outputs: [] }) || this;
        args = args || {};
        _this.trainable = true;
        _this._updatable = true;
        _this.built = false;
        // Set model name.
        _this.name = (args.name != null) ? args.name : state_1.getUid('sequential_');
        // Add to the model any layers passed to the constructor.
        if (args.layers != null) {
            for (var _i = 0, _a = args.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                _this.add(layer);
            }
        }
        return _this;
    }
    // Helper function to Sequential.add  Throws if the new output shape will be
    // invalid.
    Sequential.prototype.checkShape = function (layer) {
        var shape = layer.inboundNodes[0].outputTensors[0].shape;
        if (shape.some(function (x) { return x < 0; })) {
            throw new errors_1.ValueError('Negative dimension size caused by adding layer ' +
                (layer.name + " with input shape [") +
                (layer.inboundNodes[0].inputTensors[0].shape + "]"));
        }
    };
    /**
     * Adds a layer instance on top of the layer stack.
     *
     * ```js
     *  const model = tf.sequential();
     *  model.add(tf.layers.dense({units: 8, inputShape: [1]}));
     *  model.add(tf.layers.dense({units: 4, activation: 'relu6'}));
     *  model.add(tf.layers.dense({units: 1, activation: 'relu6'}));
     *  // Note that the untrained model is random at this point.
     *  model.predict(tf.randomNormal([10, 1])).print();
     * ```
     * @param layer Layer instance.
     *
     * @exception ValueError In case the `layer` argument does not know its
     * input shape.
     * @exception ValueError In case the `layer` argument has multiple output
     *   tensors, or is already connected somewhere else (forbidden in
     *   `Sequential` models).
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    Sequential.prototype.add = function (layer) {
        var isLayerModelInstance = layer instanceof Sequential || layer instanceof training_1.LayersModel;
        var modelLayer;
        if (isLayerModelInstance) {
            modelLayer = layer;
            if (modelLayer.outputs.length !== 1) {
                throw new errors_1.ValueError('All layers in a Sequential model ' +
                    'should have a single output tensor. ' +
                    'For multi-output layers, ' +
                    'use the functional API.');
            }
            if (modelLayer.inputs.length !== 1) {
                throw new errors_1.ValueError('All layers in a Sequential model ' +
                    'should have a single input tensor. ' +
                    'For multi-input layers, ' +
                    'use the functional API.');
            }
        }
        if (this.outputs.length === 0) {
            // first layer in model: check that it is an input layer
            if (layer.inboundNodes.length === 0) {
                // create an input layer
                if (layer.batchInputShape == null) {
                    throw new errors_1.ValueError('The first layer in a Sequential model must ' +
                        'get an `inputShape` or `batchInputShape` argument.');
                }
                // Instantiate the input layer.
                var x = input_layer_1.Input({
                    batchShape: layer.batchInputShape,
                    dtype: layer.dtype,
                    name: layer.name + '_input'
                });
                // This will build the current layer and create the node connecting
                // the current layer to the input layer we just created.
                layer.apply(x);
            }
            if (isLayerModelInstance) {
                this.outputs = modelLayer.outputs;
                this.inputs = modelLayer.inputs;
            }
            else {
                if (layer.inboundNodes.length !== 1) {
                    throw new errors_1.ValueError('A layer added to a Sequential model must not already be ' +
                        ("connected somewhere else. LayersModel received layer " + layer.name + " ") +
                        ("which has " + layer.inboundNodes.length + " pre-existing inbound ") +
                        'connections.');
                }
                if (layer.inboundNodes[0].outputTensors.length !== 1) {
                    throw new errors_1.ValueError('All layers in a Sequential model ' +
                        'should have a single output tensor. ' +
                        'For multi-output layers, ' +
                        'use the functional API.');
                }
                this.checkShape(layer);
                this.outputs = [layer.inboundNodes[0].outputTensors[0]];
                this.inputs = topology_1.getSourceInputs(this.outputs[0]);
            }
            this.inboundNodes = [];
            // We create an input node, which we will keep updated
            // as we add more layers.
            // (This call has side effects.)
            // tslint:disable-next-line:no-unused-expression
            new topology_1.Node({
                outboundLayer: this,
                inboundLayers: [],
                nodeIndices: [],
                tensorIndices: [],
                inputTensors: this.inputs,
                outputTensors: this.outputs,
                // no model-level masking for now
                inputMasks: generic_utils.pyListRepeat(null, this.inputs.length),
                outputMasks: [null],
                inputShapes: this.inputs.map(function (x) { return x.shape; }),
                outputShapes: this.outputs[0].shape
            });
        }
        else {
            var outputTensor = layer.apply(this.outputs[0]);
            if (Array.isArray(outputTensor)) {
                throw new TypeError('All layers in a Sequential model ' +
                    'should have a single output tensor. ' +
                    'For multi-output layers, ' +
                    'use the functional API.');
            }
            this.checkShape(layer);
            this.outputs = [outputTensor];
            // update self.inbound_nodes
            this.inboundNodes[0].outputTensors = this.outputs;
            this.inboundNodes[0].outputShapes = [this.outputs[0].shape];
        }
        this.layers.push(layer);
        this.built = false;
    };
    /**
     * Removes the last layer in the model.
     *
     * @exception TypeError if there are no layers in the model.
     */
    Sequential.prototype.pop = function () {
        if (this.layers.length === 0) {
            throw new TypeError('There are no layers in the model.');
        }
        this.layers.pop();
        if (this.layers.length === 0) {
            this.outputs = [];
            this.inboundNodes = [];
            this.outboundNodes = [];
        }
        else {
            var lastLayerIndex = this.layers.length - 1;
            this.layers[lastLayerIndex].outboundNodes = [];
            this.outputs = [this.layers[lastLayerIndex].output];
            // update self.inbound_nodes
            this.inboundNodes[0].outputTensors = this.outputs;
            this.inboundNodes[0].outputShapes = [this.outputs[0].shape];
        }
    };
    Sequential.prototype.call = function (inputs, kwargs) {
        if (this.model == null) {
            this.build();
        }
        return this.model.call(inputs, kwargs);
    };
    Sequential.prototype.build = function (inputShape) {
        // Call `getExactlyOneShape` without using its return value,
        // to verify that exactly one input shape is provided.
        types_utils_1.getExactlyOneShape(inputShape);
        if (this.inputs.length === 0 || this.outputs.length === 0) {
            throw new TypeError('Sequential model cannot be built: model is empty.' +
                ' Add some layers first.');
        }
        // actually create the model
        this.model = new training_1.LayersModel({
            inputs: this.inputs,
            outputs: this.outputs[0],
            name: this.name + '_model'
        });
        this.model.trainable = this.trainable;
        this.model.updatable = this.updatable;
        // mirror model attributes
        this.supportsMasking = this.model.supportsMasking;
        // TODO(michaelterry): Add caches
        this.inputLayers = this.model.inputLayers;
        this.inputLayersNodeIndices = this.model.inputLayersNodeIndices;
        this.inputLayersTensorIndices = this.model.inputLayersTensorIndices;
        this.outputLayers = this.model.outputLayers;
        this.outputLayersNodeIndices = this.model.outputLayersNodeIndices;
        this.outputLayersTensorIndices = this.model.outputLayersTensorIndices;
        this.nodesByDepth = this.model.nodesByDepth;
        this.containerNodes = this.model.containerNodes;
        this.outputNames = this.model.outputNames;
        this.inputNames = this.model.inputNames;
        // TODO(michaelterry): Add feedInputNames, feedInputs, if needed.
        // TODO(michaelterry): Add callbackModel if needed.
        this.built = true;
    };
    Sequential.prototype.countParams = function () {
        if (!this.built) {
            this.build();
        }
        return _super.prototype.countParams.call(this);
    };
    /**
     * Print a text summary of the Sequential model's layers.
     *
     * The summary includes
     * - Name and type of all layers that comprise the model.
     * - Output shape(s) of the layers
     * - Number of weight parameters of each layer
     * - The total number of trainable and non-trainable parameters of the
     * model.
     *
     * ```js
     * const model = tf.sequential();
     * model.add(
     *     tf.layers.dense({units: 100, inputShape: [10], activation: 'relu'}));
     * model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
     *
     * model.summary();
     * ```
     *
     * @param lineLength Custom line length, in number of characters.
     * @param positions Custom widths of each of the columns, as either
     *   fractions of `lineLength` (e.g., `[0.5, 0.75, 1]`) or absolute number
     *   of characters (e.g., `[30, 50, 65]`). Each number corresponds to
     *   right-most (i.e., ending) position of a column.
     * @param printFn Custom print function. Can be used to replace the default
     *   `console.log`. For example, you can use `x => {}` to mute the printed
     *   messages in the console.
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    Sequential.prototype.summary = function (lineLength, positions, printFn) {
        if (printFn === void 0) { printFn = console.log; }
        if (!this.built) {
            this.build();
        }
        _super.prototype.summary.call(this, lineLength, positions, printFn);
    };
    /**
     * Sets the weights of the model.
     *
     * @param weights Should be a list of Tensors with shapes and types matching
     *   the output of `model.getWeights()`.
     */
    Sequential.prototype.setWeights = function (weights) {
        if (this.model == null) {
            this.build();
        }
        this.model.setWeights(weights);
    };
    Object.defineProperty(Sequential.prototype, "updatable", {
        get: function () {
            return this._updatable;
        },
        set: function (value) {
            if (this.built) {
                this.model.updatable = value;
            }
            this._updatable = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the loss value & metrics values for the model in test mode.
     *
     * Loss and metrics are specified during `compile()`, which needs to happen
     * before calls to `evaluate()`.
     *
     * Computation is done in batches.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const result = model.evaluate(tf.ones([8, 10]), tf.ones([8, 1]), {
     *   batchSize: 4,
     * });
     * result.print();
     * ```
     *
     * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
     * model has multiple inputs.
     * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
     * model has multiple outputs.
     * @param args A `ModelEvaluateConfig`, containing optional fields.
     *
     * @return `Scalar` test loss (if the model has a single output and no
     *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
     *   and/or metrics). The attribute `model.metricsNames`
     *   will give you the display labels for the scalar outputs.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    Sequential.prototype.evaluate = function (x, y, args) {
        if (args === void 0) { args = {}; }
        if (!this.built) {
            throw new errors_1.RuntimeError('The model needs to be compiled before being used.');
        }
        return this.model.evaluate(x, y, args);
    };
    // TODO(cais): Add code snippet below once real dataset objects are
    //   available.
    /**
     * Evaluate model using a dataset object.
     *
     * Note: Unlike `evaluate()`, this method is asynchronous (`async`);
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for evaluation. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g..
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs. Of the two items in the array, the
     *   first is the input feature(s) and the second is the output target(s).
     * @param args A configuration object for the dataset-based evaluation.
     * @returns Loss and metric values as an Array of `Scalar` objects.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    Sequential.prototype.evaluateDataset = function (dataset, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.built) {
                    throw new errors_1.RuntimeError('The model needs to be compiled before being used.');
                }
                return [2 /*return*/, this.model.evaluateDataset(dataset, args)];
            });
        });
    };
    /**
     * Generates output predictions for the input samples.
     *
     * Computation is done in batches.
     *
     * Note: the "step" mode of predict() is currently not supported.
     *   This is because the TensorFow.js core backend is imperative only.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predict(tf.ones([2, 10])).print();
     * ```
     *
     * @param x The input data, as an Tensor, or an `Array` of `tf.Tensor`s if
     *   the model has multiple inputs.
     * @param conifg A `ModelPredictConfig` object containing optional fields.
     *
     * @return `tf.Tensor`(s) of predictions.
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and the model's expectations, or in case a stateful model receives a
     *   number of samples that is not a multiple of the batch size.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    Sequential.prototype.predict = function (x, args) {
        if (args === void 0) { args = {}; }
        if (this.model == null) {
            this.build();
        }
        return this.model.predict(x, args);
    };
    /**
     * Returns predictions for a single batch of samples.
     *
     * @param x: Input samples, as an Tensor, or list of Tensors (if the model
     *   has multiple inputs).
     * @return Tensor(s) of predictions
     */
    Sequential.prototype.predictOnBatch = function (x) {
        if (this.model == null) {
            this.build();
        }
        return this.model.predictOnBatch(x);
    };
    /**
     * See `LayersModel.compile`.
     *
     * @param args
     */
    Sequential.prototype.compile = function (args) {
        this.build();
        this.model.compile(args);
        this.optimizer_ = this.model.optimizer;
        // tslint:disable-next-line:no-any
        this.isOptimizerOwned = this.model.isOptimizerOwned;
        this.loss = this.model.loss;
        this.metrics = this.model.metrics;
        // TODO(cais): Add this.lossWeights, this.sampleWeightMode,
        //   this.weightedMetrics, this.targets.
        this.metricsTensors = this.model.metricsTensors;
        this.metricsNames = this.model.metricsNames;
        // TODO(cais): Add sampleWeights.
    };
    Object.defineProperty(Sequential.prototype, "optimizer", {
        get: function () {
            return this.model.optimizer;
        },
        set: function (optimizer) {
            this.model.optimizer = optimizer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Trains the model for a fixed number of epochs (iterations on a dataset).
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const history = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
     *   batchSize: 4,
     *   epochs: 3
     * });
     * console.log(history.history.loss[0]);
     * ```
     *
     * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
     * model has multiple inputs. If all inputs in the model are named, you can
     * also pass a dictionary mapping input names to `tf.Tensor`s.
     * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
     * the model has multiple outputs. If all outputs in the model are named, you
     *  can also pass a dictionary mapping output names to `tf.Tensor`s.
     * @param args  A `ModelFitConfig`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and what the model expects.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    Sequential.prototype.fit = function (x, y, args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.built) {
                    throw new errors_1.RuntimeError('The model needs to be compiled before ' +
                        'being used.');
                }
                return [2 /*return*/, this.model.fit(x, y, args)];
            });
        });
    };
    /**
     * Trains the model using a dataset object.
     *
     * ```js
     * const xArray = [
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     * ];
     * const yArray = [1, 1, 1, 1];
     * // Create a dataset from the JavaScript array.
     * const xDataset = tf.data.array(xArray);
     * const yDataset = tf.data.array(yArray);
     * // Zip combines the `x` and `y` Datasets into a single Dataset, the
     * // iterator of which will return an object containing of two tensors,
     * // corresponding to `x` and `y`.  The call to `batch(4)` will bundle
     * // four such samples into a single object, with the same keys now pointing
     * // to tensors that hold 4 examples, organized along the batch dimension.
     * // The call to `shuffle(4)` causes each iteration through the dataset to
     * // happen in a different order.  The size of the shuffle window is 4.
     * const xyDataset = tf.data.zip({xs: xDataset, ys: yDataset})
     *     .batch(4)
     *     .shuffle(4);
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [9]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const history = await model.fitDataset(xyDataset, {
     *   epochs: 4,
     *   callbacks: {onEpochEnd: (epoch, logs) => console.log(logs.loss)}
     * });
     * ```
     *
     * @param dataset A dataset object. Its `iterator()` method is expected to
     *   generate a dataset iterator object, the `next()` method of which is
     *   expected to produce data batches for evaluation. The return value of the
     *   `next()` call ought to contain a boolean `done` field and a `value`
     *   field. The `value` field is expected to be an array of two `tf.Tensor`s
     *   or an array of two nested `tf.Tensor` structures. The former case is for
     *   models with exactly one input and one output (e.g.. a sequential model).
     *   The latter case is for models with multiple inputs and/or multiple
     *   outputs. Of the two items in the array, the first is the input feature(s)
     *   and the second is the output target(s).
     * @param args A `ModelFitDatasetArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    Sequential.prototype.fitDataset = function (dataset, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.built) {
                    throw new errors_1.RuntimeError('The model needs to be compiled before ' +
                        'being used.');
                }
                return [2 /*return*/, this.model.fitDataset(dataset, args)];
            });
        });
    };
    /**
     * Runs a single gradient update on a single batch of data.
     *
     * This method differs from `fit()` and `fitDataset()` in the following
     * regards:
     *   - It operates on exactly one batch of data.
     *   - It returns only the loss and matric values, instead of
     *     returning the batch-by-batch loss and metric values.
     *   - It doesn't support fine-grained options such as verbosity and
     *     callbacks.
     *
     * @param x Input data. It could be one of the following:
     *   - A `tf.Tensor`, or an Array of `tf.Tensor`s (in case the model has
     *     multiple inputs).
     *   - An Object mapping input names to corresponding `tf.Tensor` (if the
     *     model has named inputs).
     * @param y Target darta. It could be either a `tf.Tensor` a multiple
     *   `tf.Tensor`s. It should be consistent with `x`.
     * @returns Training loss or losses (in case the model has
     *   multiple outputs), along with metrics (if any), as numbers.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    Sequential.prototype.trainOnBatch = function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.model.trainOnBatch(x, y)];
            });
        });
    };
    /* See parent class for JsDoc */
    /** @nocollapse */
    Sequential.fromConfig = function (cls, config, customObjects, fastWeightInit) {
        if (customObjects === void 0) { customObjects = {}; }
        if (fastWeightInit === void 0) { fastWeightInit = false; }
        var configArray;
        var extraModelConfig = {};
        if (config instanceof Array) {
            if (!(config[0].className != null) ||
                config[0]['className'] === 'Merge') {
                throw new errors_1.ValueError('Legacy serialization format not supported yet.');
            }
            configArray = config;
        }
        else {
            tfjs_core_1.util.assert(config['layers'] != null, function () {
                return "When the config data for a Sequential model is not an Array, " +
                    "it must be an Object that contains the 'layers' field.";
            });
            configArray = config['layers'];
            delete config['layers'];
            extraModelConfig = config;
        }
        var model = new cls(extraModelConfig);
        if (!(model instanceof Sequential)) {
            throw new errors_1.NotImplementedError("Sequential.fromConfig called on non-Sequential input: " + model);
        }
        for (var _i = 0, configArray_1 = configArray; _i < configArray_1.length; _i++) {
            var conf = configArray_1[_i];
            var customObjects_1 = undefined;
            var layer = serialization_1.deserialize(conf, customObjects_1, fastWeightInit);
            if (fastWeightInit) {
                layer.setFastWeightInitDuringBuild(true);
            }
            model.add(layer);
        }
        return model;
    };
    Object.defineProperty(Sequential.prototype, "stopTraining", {
        /**
         * Setter used for force stopping of LayersModel.fit() (i.e., training).
         *
         * Example:
         *
         * ```js
         * const model = tf.sequential();
         * model.add(tf.layers.dense({units: 1, inputShape: [10]}));
         * model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
         * const xs = tf.ones([8, 10]);
         * const ys = tf.zeros([8, 1]);
         *
         * const history = await model.fit(xs, ys, {
         *   epochs: 10,
         *   callbacks: {
         *     onEpochEnd: async (epoch, logs) => {
         *       if (epoch === 2) {
         *         model.stopTraining = true;
         *       }
         *     }
         *   }
         * });
         *
         * // There should be only 3 values in the loss array, instead of 10 values,
         * // due to the stopping after 3 epochs.
         * console.log(history.history.loss);
         * ```
         */
        set: function (stop) {
            // TODO(cais): When refactoring to remove the composition pattern happens,
            // remove this method overriding.
            this.model.stopTraining = stop;
        },
        enumerable: true,
        configurable: true
    });
    // TODO(cais): Override get trainableWeights() here
    // tslint:disable-next-line:no-any
    Sequential.prototype.getConfig = function () {
        // NOTE(cais): We override the return type of getConfig() to `any` here,
        //   because the `Sequential` class is a special case among `Container`
        //   subtypes in that its getConfig() method returns an Array (not a
        //   dict).
        var config = [];
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            var dict = {};
            dict.className = layer.getClassName();
            dict.config = layer.getConfig();
            config.push(dict);
        }
        return config;
    };
    /** @nocollapse */
    Sequential.className = 'Sequential';
    return Sequential;
}(training_1.LayersModel));
exports.Sequential = Sequential;
tfjs_core_1.serialization.registerClass(Sequential);
//# sourceMappingURL=models.js.map
}, function(modId) { var map = {"./backend/state":1553229508426,"./engine/input_layer":1553229508437,"./engine/topology":1553229508438,"./engine/training":1553229508445,"./errors":1553229508428,"./layers/serialization":1553229508452,"./utils/generic_utils":1553229508427,"./utils/serialization_utils":1553229508453,"./utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508458, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Advanced activation layers.
 */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var activations_1 = require("../activations");
var state_1 = require("../backend/state");
var tfjs_backend_1 = require("../backend/tfjs_backend");
var constraints_1 = require("../constraints");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var regularizers_1 = require("../regularizers");
var types_utils_1 = require("../utils/types_utils");
/**
 * Rectified Linear Unit activation function.
 *
 * Input shape:
 *   Arbitrary. Use the config field `inputShape` (Array of integers, does
 *   not include the sample axis) when using this layer as the first layer
 *   in a model.
 *
 * Output shape:
 *   Same shape as the input.
 */
var ReLU = /** @class */ (function (_super) {
    __extends(ReLU, _super);
    function ReLU(args) {
        var _this = _super.call(this, args == null ? {} : args) || this;
        _this.supportsMasking = true;
        if (args != null) {
            _this.maxValue = args.maxValue;
        }
        return _this;
    }
    ReLU.prototype.call = function (inputs, kwargs) {
        inputs = types_utils_1.getExactlyOneTensor(inputs);
        var output = tfjs_core_1.relu(inputs);
        if (this.maxValue != null) {
            output = tfjs_core_1.clipByValue(output, 0, this.maxValue);
        }
        return output;
    };
    ReLU.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    ReLU.prototype.getConfig = function () {
        var config = { maxValue: this.maxValue };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    ReLU.className = 'ReLU';
    return ReLU;
}(topology_1.Layer));
exports.ReLU = ReLU;
tfjs_core_1.serialization.registerClass(ReLU);
/**
 * Leaky version of a rectified linear unit.
 *
 * It allows a small gradient when the unit is not active:
 * `f(x) = alpha * x for x < 0.`
 * `f(x) = x for x >= 0.`
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 */
var LeakyReLU = /** @class */ (function (_super) {
    __extends(LeakyReLU, _super);
    function LeakyReLU(args) {
        var _this = _super.call(this, args == null ? {} : args) || this;
        _this.DEFAULT_ALPHA = 0.3;
        if (args == null) {
            args = {};
        }
        _this.alpha = args.alpha == null ? _this.DEFAULT_ALPHA : args.alpha;
        return _this;
    }
    LeakyReLU.prototype.call = function (inputs, kwargs) {
        var x = types_utils_1.getExactlyOneTensor(inputs);
        return tfjs_core_1.leakyRelu(x, this.alpha);
    };
    LeakyReLU.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    LeakyReLU.prototype.getConfig = function () {
        var config = { alpha: this.alpha };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    LeakyReLU.className = 'LeakyReLU';
    return LeakyReLU;
}(topology_1.Layer));
exports.LeakyReLU = LeakyReLU;
tfjs_core_1.serialization.registerClass(LeakyReLU);
/**
 * Parameterized version of a leaky rectified linear unit.
 *
 * It follows
 * `f(x) = alpha * x for x < 0.`
 * `f(x) = x for x >= 0.`
 * wherein `alpha` is a trainable weight.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 */
var PReLU = /** @class */ (function (_super) {
    __extends(PReLU, _super);
    function PReLU(args) {
        var _this = _super.call(this, args == null ? {} : args) || this;
        _this.DEFAULT_ALPHA_INITIALIZER = 'zeros';
        if (args == null) {
            args = {};
        }
        _this.supportsMasking = true;
        _this.alphaInitializer =
            initializers_1.getInitializer(args.alphaInitializer || _this.DEFAULT_ALPHA_INITIALIZER);
        _this.alphaRegularizer = regularizers_1.getRegularizer(args.alphaRegularizer);
        _this.alphaConstraint = constraints_1.getConstraint(args.alphaConstraint);
        if (args.sharedAxes == null) {
            _this.sharedAxes = null;
        }
        else if (Array.isArray(args.sharedAxes)) {
            _this.sharedAxes = args.sharedAxes;
        }
        else if (typeof args.sharedAxes === 'number') {
            _this.sharedAxes = [args.sharedAxes];
        }
        else {
            throw new errors_1.ValueError("Expected sharedAxes to be a number or an array of numbers, " +
                ("but got " + args.sharedAxes));
        }
        return _this;
    }
    PReLU.prototype.build = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var paramShape = inputShape.slice(1);
        if (this.sharedAxes != null) {
            for (var _i = 0, _a = this.sharedAxes; _i < _a.length; _i++) {
                var i = _a[_i];
                paramShape[i - 1] = 1;
            }
        }
        this.alpha = this.addWeight('alpha', paramShape, 'float32', this.alphaInitializer, this.alphaRegularizer, true, this.alphaConstraint);
        // Set input spec.
        var axes = {};
        if (this.sharedAxes != null) {
            for (var i = 1; i < inputShape.length; ++i) {
                axes[i] = inputShape[i];
            }
        }
        this.inputSpec = [new topology_1.InputSpec({
                ndim: inputShape.length,
                axes: axes,
            })];
        this.built = true;
    };
    PReLU.prototype.call = function (inputs, kwargs) {
        inputs = types_utils_1.getExactlyOneTensor(inputs);
        return tfjs_core_1.prelu(inputs, this.alpha.read());
    };
    PReLU.prototype.getConfig = function () {
        var config = {
            alphaInitializer: initializers_1.serializeInitializer(this.alphaInitializer),
            alphaRegularizer: regularizers_1.serializeRegularizer(this.alphaRegularizer),
            alphaConstraint: constraints_1.serializeConstraint(this.alphaConstraint),
            sharedAxes: this.sharedAxes
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    PReLU.className = 'PReLU';
    return PReLU;
}(topology_1.Layer));
exports.PReLU = PReLU;
tfjs_core_1.serialization.registerClass(PReLU);
/**
 * Exponetial Linear Unit (ELU).
 *
 * It follows:
 * `f(x) =  alpha * (exp(x) - 1.) for x < 0`,
 * `f(x) = x for x >= 0`.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * References:
 *   - [Fast and Accurate Deep Network Learning by Exponential Linear Units
 * (ELUs)](https://arxiv.org/abs/1511.07289v1)
 */
var ELU = /** @class */ (function (_super) {
    __extends(ELU, _super);
    function ELU(args) {
        var _this = _super.call(this, args == null ? {} : args) || this;
        _this.DEFAULT_ALPHA = 1.0;
        if (args == null) {
            args = {};
        }
        if (args.alpha != null && args.alpha !== _this.DEFAULT_ALPHA) {
            throw new errors_1.NotImplementedError("Non-default alpha value (" + args.alpha + ") is not supported by the " +
                "ELU layer yet.");
        }
        _this.alpha = args.alpha == null ? _this.DEFAULT_ALPHA : args.alpha;
        return _this;
    }
    ELU.prototype.call = function (inputs, kwargs) {
        var x = types_utils_1.getExactlyOneTensor(inputs);
        return tfjs_core_1.elu(x);
    };
    ELU.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    ELU.prototype.getConfig = function () {
        var config = { alpha: this.alpha };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    ELU.className = 'ELU';
    return ELU;
}(topology_1.Layer));
exports.ELU = ELU;
tfjs_core_1.serialization.registerClass(ELU);
/**
 * Thresholded Rectified Linear Unit.
 *
 * It follows:
 * `f(x) = x for x > theta`,
 * `f(x) = 0 otherwise`.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * References:
 *   - [Zero-Bias Autoencoders and the Benefits of Co-Adapting
 * Features](http://arxiv.org/abs/1402.3337)
 */
var ThresholdedReLU = /** @class */ (function (_super) {
    __extends(ThresholdedReLU, _super);
    function ThresholdedReLU(args) {
        var _this = _super.call(this, args == null ? {} : args) || this;
        _this.DEFAULT_THETA = 1.0;
        if (args == null) {
            args = {};
        }
        _this.theta = args.theta == null ? _this.DEFAULT_THETA : args.theta;
        _this.thetaTensor = state_1.getScalar(_this.theta);
        return _this;
    }
    ThresholdedReLU.prototype.call = function (inputs, kwargs) {
        var x = types_utils_1.getExactlyOneTensor(inputs);
        return x.mul(tfjs_backend_1.cast(x.greater(this.thetaTensor), 'float32'));
    };
    ThresholdedReLU.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    ThresholdedReLU.prototype.getConfig = function () {
        var config = { theta: this.theta };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    ThresholdedReLU.className = 'ThresholdedReLU';
    return ThresholdedReLU;
}(topology_1.Layer));
exports.ThresholdedReLU = ThresholdedReLU;
tfjs_core_1.serialization.registerClass(ThresholdedReLU);
/**
 * Softmax activation layer.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 */
var Softmax = /** @class */ (function (_super) {
    __extends(Softmax, _super);
    function Softmax(args) {
        var _this = _super.call(this, args == null ? {} : args) || this;
        _this.DEFAULT_AXIS = 1.0;
        if (args == null) {
            args = {};
        }
        _this.softmax = new activations_1.Softmax().apply;
        _this.axis = args.axis == null ? _this.DEFAULT_AXIS : args.axis;
        return _this;
    }
    Softmax.prototype.call = function (inputs, kwargs) {
        var x = types_utils_1.getExactlyOneTensor(inputs);
        return this.softmax(x, this.axis);
    };
    Softmax.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    Softmax.prototype.getConfig = function () {
        var config = { axis: this.axis };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Softmax.className = 'Softmax';
    return Softmax;
}(topology_1.Layer));
exports.Softmax = Softmax;
tfjs_core_1.serialization.registerClass(Softmax);
//# sourceMappingURL=advanced_activations.js.map
}, function(modId) { var map = {"../activations":1553229508459,"../backend/state":1553229508426,"../backend/tfjs_backend":1553229508431,"../constraints":1553229508424,"../engine/topology":1553229508438,"../errors":1553229508428,"../initializers":1553229508430,"../regularizers":1553229508460,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508459, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Layer activation functions
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("./backend/state");
var K = require("./backend/tfjs_backend");
var generic_utils_1 = require("./utils/generic_utils");
/**
 * Base class for Activations.
 *
 * Special note: due to cross-language compatibility reasons, the
 * static readonly className field in this family of classes must be set to
 * the initialLowerCamelCase name of the activation.
 */
var Activation = /** @class */ (function (_super) {
    __extends(Activation, _super);
    function Activation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activation.prototype.getConfig = function () {
        return {};
    };
    return Activation;
}(tfjs_core_1.serialization.Serializable));
exports.Activation = Activation;
/**
 * Exponential linear unit (ELU).
 * Reference: https://arxiv.org/abs/1511.07289
 */
var Elu = /** @class */ (function (_super) {
    __extends(Elu, _super);
    function Elu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Calculate the activation function.
     *
     * @param x: Input.
     * @param alpha: Scaling factor the negative section.
     * @return Output of the ELU activation.
     */
    Elu.prototype.apply = function (x, alpha) {
        if (alpha === void 0) { alpha = 1; }
        return K.elu(x, alpha);
    };
    /** @nocollapse */
    Elu.className = 'elu';
    return Elu;
}(Activation));
exports.Elu = Elu;
tfjs_core_1.serialization.registerClass(Elu);
/**
 * Scaled Exponential Linear Unit. (Klambauer et al., 2017).
 * Reference: Self-Normalizing Neural Networks, https://arxiv.org/abs/1706.02515
 * Notes:
 *   - To be used together with the initialization "lecunNormal".
 *   - To be used together with the dropout variant "AlphaDropout".
 */
var Selu = /** @class */ (function (_super) {
    __extends(Selu, _super);
    function Selu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Selu.prototype.apply = function (x) {
        return tfc.selu(x);
    };
    /** @nocollapse */
    Selu.className = 'selu';
    return Selu;
}(Activation));
exports.Selu = Selu;
tfjs_core_1.serialization.registerClass(Selu);
/**
 *  Rectified linear unit
 */
var Relu = /** @class */ (function (_super) {
    __extends(Relu, _super);
    function Relu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Relu.prototype.apply = function (x) {
        return tfc.relu(x);
    };
    /** @nocollapse */
    Relu.className = 'relu';
    return Relu;
}(Activation));
exports.Relu = Relu;
tfjs_core_1.serialization.registerClass(Relu);
/**
 * Rectified linear unit activation maxing out at 6.0.
 */
var Relu6 = /** @class */ (function (_super) {
    __extends(Relu6, _super);
    function Relu6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Relu6.prototype.apply = function (x) {
        return tfjs_core_1.tidy(function () { return tfc.minimum(state_1.getScalar(6.0), tfc.relu(x)); });
    };
    /** @nocollapse */
    Relu6.className = 'relu6';
    return Relu6;
}(Activation));
exports.Relu6 = Relu6;
tfjs_core_1.serialization.registerClass(Relu6);
//* Linear activation (no-op) */
var Linear = /** @class */ (function (_super) {
    __extends(Linear, _super);
    function Linear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Linear.prototype.apply = function (x) {
        return x;
    };
    /** @nocollapse */
    Linear.className = 'linear';
    return Linear;
}(Activation));
exports.Linear = Linear;
tfjs_core_1.serialization.registerClass(Linear);
/**
 * Sigmoid activation function.
 */
var Sigmoid = /** @class */ (function (_super) {
    __extends(Sigmoid, _super);
    function Sigmoid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sigmoid.prototype.apply = function (x) {
        return tfc.sigmoid(x);
    };
    /** @nocollapse */
    Sigmoid.className = 'sigmoid';
    return Sigmoid;
}(Activation));
exports.Sigmoid = Sigmoid;
tfjs_core_1.serialization.registerClass(Sigmoid);
/**
 * Segment-wise linear approximation of sigmoid.
 */
var HardSigmoid = /** @class */ (function (_super) {
    __extends(HardSigmoid, _super);
    function HardSigmoid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardSigmoid.prototype.apply = function (x) {
        return K.hardSigmoid(x);
    };
    /** @nocollapse */
    HardSigmoid.className = 'hardSigmoid';
    return HardSigmoid;
}(Activation));
exports.HardSigmoid = HardSigmoid;
tfjs_core_1.serialization.registerClass(HardSigmoid);
/**
 * Softplus activation function.
 */
var Softplus = /** @class */ (function (_super) {
    __extends(Softplus, _super);
    function Softplus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Softplus.prototype.apply = function (x) {
        return tfc.softplus(x);
    };
    /** @nocollapse */
    Softplus.className = 'softplus';
    return Softplus;
}(Activation));
exports.Softplus = Softplus;
tfjs_core_1.serialization.registerClass(Softplus);
/**
 * Softsign activation function.
 */
var Softsign = /** @class */ (function (_super) {
    __extends(Softsign, _super);
    function Softsign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Softsign.prototype.apply = function (x) {
        return K.softsign(x);
    };
    /** @nocollapse */
    Softsign.className = 'softsign';
    return Softsign;
}(Activation));
exports.Softsign = Softsign;
tfjs_core_1.serialization.registerClass(Softsign);
/**
 * Hyperbolic tangent function.
 */
var Tanh = /** @class */ (function (_super) {
    __extends(Tanh, _super);
    function Tanh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tanh.prototype.apply = function (x) {
        return tfc.tanh(x);
    };
    /** @nocollapse */
    Tanh.className = 'tanh';
    return Tanh;
}(Activation));
exports.Tanh = Tanh;
tfjs_core_1.serialization.registerClass(Tanh);
/**
 * Softmax activation function
 */
var Softmax = /** @class */ (function (_super) {
    __extends(Softmax, _super);
    function Softmax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Calculate the activation function.
     *
     * @param x Tensor.
     * @param axis Integer, axis along which the softmax normalization is applied.
     * Invalid if < 2, as softmax across 1 (the batch dimension) is assumed to be
     * an error.
     *
     * @returns a Tensor of the same shape as x
     *
     * @throws ValueError: In case `dim(x) < 2`.
     */
    Softmax.prototype.apply = function (x, axis) {
        if (axis === void 0) { axis = (-1); }
        return tfc.softmax(x, axis);
    };
    /** @nocollapse */
    Softmax.className = 'softmax';
    return Softmax;
}(Activation));
exports.Softmax = Softmax;
tfjs_core_1.serialization.registerClass(Softmax);
function serializeActivation(activation) {
    return activation.getClassName();
}
exports.serializeActivation = serializeActivation;
function deserializeActivation(config, customObjects) {
    if (customObjects === void 0) { customObjects = {}; }
    return generic_utils_1.deserializeKerasObject(config, tfjs_core_1.serialization.SerializationMap.getMap().classNameMap, customObjects, 'activation');
}
exports.deserializeActivation = deserializeActivation;
function getActivation(identifier) {
    if (identifier == null) {
        var config = {};
        config.className = 'linear';
        config.config = {};
        return deserializeActivation(config);
    }
    if (typeof identifier === 'string') {
        var config = {};
        config.className = identifier;
        config.config = {};
        return deserializeActivation(config);
    }
    else if (identifier instanceof Activation) {
        return identifier;
    }
    else {
        return deserializeActivation(identifier);
    }
}
exports.getActivation = getActivation;
//# sourceMappingURL=activations.js.map
}, function(modId) { var map = {"./backend/state":1553229508426,"./backend/tfjs_backend":1553229508431,"./utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508460, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* original source: keras/regularizers.py */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("./backend/state");
var K = require("./backend/tfjs_backend");
var generic_utils_1 = require("./utils/generic_utils");
/**
 * Regularizer base class.
 */
var Regularizer = /** @class */ (function (_super) {
    __extends(Regularizer, _super);
    function Regularizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Regularizer;
}(tfjs_core_1.serialization.Serializable));
exports.Regularizer = Regularizer;
/**
 * Regularizer for L1 and L2 regularization.
 *
 * Adds a term to the loss to penalize large weights:
 * loss += sum(l1 * abs(x)) + sum(l2 * x^2)
 */
/** @doc {heading: 'Regularizers', namespace: 'regularizers'} */
var L1L2 = /** @class */ (function (_super) {
    __extends(L1L2, _super);
    function L1L2(args) {
        var _this = _super.call(this) || this;
        var l1 = args == null || args.l1 == null ? 0.01 : args.l1;
        var l2 = args == null || args.l2 == null ? 0.01 : args.l2;
        _this.hasL1 = l1 !== 0;
        _this.hasL2 = l2 !== 0;
        _this.l1 = state_1.getScalar(l1);
        _this.l2 = state_1.getScalar(l2);
        return _this;
    }
    /**
     * Porting note: Renamed from __call__.
     * @param x Variable of which to calculate the regularization score.
     */
    L1L2.prototype.apply = function (x) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            var regularization = tfjs_core_1.zeros([1]);
            if (_this.hasL1) {
                regularization = tfjs_core_1.add(regularization, tfjs_core_1.sum(tfc.mul(_this.l1, tfjs_core_1.abs(x))));
            }
            if (_this.hasL2) {
                regularization =
                    tfjs_core_1.add(regularization, tfjs_core_1.sum(tfc.mul(_this.l2, K.square(x))));
            }
            return regularization.asScalar();
        });
    };
    L1L2.prototype.getConfig = function () {
        return { 'l1': this.l1.dataSync()[0], 'l2': this.l2.dataSync()[0] };
    };
    /** @nocollapse */
    L1L2.fromConfig = function (cls, config) {
        return new cls({ l1: config.l1, l2: config.l2 });
    };
    /** @nocollapse */
    L1L2.className = 'L1L2';
    return L1L2;
}(Regularizer));
exports.L1L2 = L1L2;
tfjs_core_1.serialization.registerClass(L1L2);
/**
 * Regularizer for L1 regularization.
 *
 * Adds a term to the loss to penalize large weights:
 * loss += sum(l1 * abs(x))
 * @param args l1 config.
 */
function l1(args) {
    return new L1L2({ l1: args != null ? args.l1 : null, l2: 0 });
}
exports.l1 = l1;
/**
 * Regularizer for L2 regularization.
 *
 * Adds a term to the loss to penalize large weights:
 * loss += sum(l2 * x^2)
 * @param args l2 config.
 */
function l2(args) {
    return new L1L2({ l2: args != null ? args.l2 : null, l1: 0 });
}
exports.l2 = l2;
// Maps the JavaScript-like identifier keys to the corresponding keras symbols.
exports.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    'l1l2': 'L1L2'
};
function serializeRegularizer(constraint) {
    return generic_utils_1.serializeKerasObject(constraint);
}
exports.serializeRegularizer = serializeRegularizer;
function deserializeRegularizer(config, customObjects) {
    if (customObjects === void 0) { customObjects = {}; }
    return generic_utils_1.deserializeKerasObject(config, tfjs_core_1.serialization.SerializationMap.getMap().classNameMap, customObjects, 'regularizer');
}
exports.deserializeRegularizer = deserializeRegularizer;
function getRegularizer(identifier) {
    if (identifier == null) {
        return null;
    }
    if (typeof identifier === 'string') {
        var className = identifier in exports.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ?
            exports.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] :
            identifier;
        var config = { className: className, config: {} };
        return deserializeRegularizer(config);
    }
    else if (identifier instanceof Regularizer) {
        return identifier;
    }
    else {
        return deserializeRegularizer(identifier);
    }
}
exports.getRegularizer = getRegularizer;
//# sourceMappingURL=regularizers.js.map
}, function(modId) { var map = {"./backend/state":1553229508426,"./backend/tfjs_backend":1553229508431,"./utils/generic_utils":1553229508427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508461, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Convolutional Layers
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var activations_1 = require("../activations");
var common_1 = require("../backend/common");
var K = require("../backend/tfjs_backend");
var common_2 = require("../common");
var constraints_1 = require("../constraints");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var regularizers_1 = require("../regularizers");
var conv_utils_1 = require("../utils/conv_utils");
var generic_utils = require("../utils/generic_utils");
var types_utils_1 = require("../utils/types_utils");
/**
 * Transpose and cast the input before the conv2d.
 * @param x Input image tensor.
 * @param dataFormat
 */
function preprocessConv2DInput(x, dataFormat) {
    // TODO(cais): Cast type to float32 if not.
    return tfjs_core_1.tidy(function () {
        common_2.checkDataFormat(dataFormat);
        if (dataFormat === 'channelsFirst') {
            return tfc.transpose(x, [0, 2, 3, 1]); // NCHW -> NHWC.
        }
        else {
            return x;
        }
    });
}
exports.preprocessConv2DInput = preprocessConv2DInput;
/**
 * Transpose and cast the input before the conv3d.
 * @param x Input image tensor.
 * @param dataFormat
 */
function preprocessConv3DInput(x, dataFormat) {
    return tfjs_core_1.tidy(function () {
        common_2.checkDataFormat(dataFormat);
        if (dataFormat === 'channelsFirst') {
            return tfc.transpose(x, [0, 2, 3, 4, 1]); // NCDHW -> NDHWC.
        }
        else {
            return x;
        }
    });
}
exports.preprocessConv3DInput = preprocessConv3DInput;
/**
 * 1D-convolution with bias added.
 *
 * Porting Note: This function does not exist in the Python Keras backend.
 *   It is exactly the same as `conv2d`, except the added `bias`.
 *
 * @param x Input tensor, rank-3, of shape `[batchSize, width, inChannels]`.
 * @param kernel Kernel, rank-3, of shape `[filterWidth, inDepth, outDepth]`.
 * @param bias Bias, rank-3, of shape `[outDepth]`.
 * @param strides
 * @param padding Padding mode.
 * @param dataFormat Data format.
 * @param dilationRate
 * @returns The result of the 1D convolution.
 * @throws ValueError, if `x`, `kernel` or `bias` is not of the correct rank.
 */
function conv1dWithBias(x, kernel, bias, strides, padding, dataFormat, dilationRate) {
    if (strides === void 0) { strides = 1; }
    if (padding === void 0) { padding = 'valid'; }
    if (dilationRate === void 0) { dilationRate = 1; }
    return tfjs_core_1.tidy(function () {
        if (dataFormat == null) {
            dataFormat = common_1.imageDataFormat();
        }
        common_2.checkDataFormat(dataFormat);
        // Check the ranks of x, kernel and bias.
        if (x.shape.length !== 3) {
            throw new errors_1.ValueError("The input of a conv1dWithBias operation should be 3, but is " +
                (x.shape.length + " instead."));
        }
        if (kernel.shape.length !== 3) {
            throw new errors_1.ValueError("The kernel for a conv1dWithBias operation should be 3, but is " +
                (kernel.shape.length + " instead"));
        }
        if (bias != null && bias.shape.length !== 1) {
            throw new errors_1.ValueError("The bias for a conv1dWithBias operation should be 1, but is " +
                (kernel.shape.length + " instead"));
        }
        // TODO(cais): Support CAUSAL padding mode.
        if (dataFormat === 'channelsFirst') {
            x = tfc.transpose(x, [0, 2, 1]); // NCW -> NWC.
        }
        if (padding === 'causal') {
            throw new errors_1.NotImplementedError('The support for CAUSAL padding mode in conv1dWithBias is not ' +
                'implemented yet.');
        }
        var y = tfc.conv1d(x, kernel, strides, padding === 'same' ? 'same' : 'valid', 'NWC', dilationRate);
        if (bias != null) {
            y = K.biasAdd(y, bias);
        }
        return y;
    });
}
exports.conv1dWithBias = conv1dWithBias;
/**
 * 1D-convolution.
 *
 * @param x Input tensor, rank-3, of shape `[batchSize, width, inChannels]`.
 * @param kernel Kernel, rank-3, of shape `[filterWidth, inDepth, outDepth]`.s
 * @param strides
 * @param padding Padding mode.
 * @param dataFormat Data format.
 * @param dilationRate
 * @returns The result of the 1D convolution.
 * @throws ValueError, if `x`, `kernel` or `bias` is not of the correct rank.
 */
function conv1d(x, kernel, strides, padding, dataFormat, dilationRate) {
    if (strides === void 0) { strides = 1; }
    if (padding === void 0) { padding = 'valid'; }
    if (dilationRate === void 0) { dilationRate = 1; }
    return tfjs_core_1.tidy(function () {
        common_2.checkDataFormat(dataFormat);
        return conv1dWithBias(x, kernel, null, strides, padding, dataFormat, dilationRate);
    });
}
exports.conv1d = conv1d;
/**
 * 2D Convolution
 * @param x
 * @param kernel kernel of the convolution.
 * @param strides strides array.
 * @param padding padding mode. Default to 'valid'.
 * @param dataFormat data format. Defaults to 'channelsLast'.
 * @param dilationRate dilation rate array.
 * @returns Result of the 2D pooling.
 */
function conv2d(x, kernel, strides, padding, dataFormat, dilationRate) {
    if (strides === void 0) { strides = [1, 1]; }
    if (padding === void 0) { padding = 'valid'; }
    return tfjs_core_1.tidy(function () {
        common_2.checkDataFormat(dataFormat);
        return conv2dWithBias(x, kernel, null, strides, padding, dataFormat, dilationRate);
    });
}
exports.conv2d = conv2d;
/**
 * 2D Convolution with an added bias.
 * Note: This function does not exist in the Python Keras Backend. This function
 * is exactly the same as `conv2d`, except the added `bias`.
 */
function conv2dWithBias(x, kernel, bias, strides, padding, dataFormat, dilationRate) {
    if (strides === void 0) { strides = [1, 1]; }
    if (padding === void 0) { padding = 'valid'; }
    return tfjs_core_1.tidy(function () {
        if (dataFormat == null) {
            dataFormat = common_1.imageDataFormat();
        }
        common_2.checkDataFormat(dataFormat);
        if (x.rank !== 3 && x.rank !== 4) {
            throw new errors_1.ValueError("conv2dWithBias expects input to be of rank 3 or 4, but received " +
                (x.rank + "."));
        }
        if (kernel.rank !== 3 && kernel.rank !== 4) {
            throw new errors_1.ValueError("conv2dWithBias expects kernel to be of rank 3 or 4, but received " +
                (x.rank + "."));
        }
        var y = preprocessConv2DInput(x, dataFormat);
        if (padding === 'causal') {
            throw new errors_1.NotImplementedError('The support for CAUSAL padding mode in conv1dWithBias is not ' +
                'implemented yet.');
        }
        y = tfc.conv2d(y, kernel, strides, padding === 'same' ? 'same' : 'valid', 'NHWC', dilationRate);
        if (bias != null) {
            y = K.biasAdd(y, bias);
        }
        if (dataFormat === 'channelsFirst') {
            y = tfc.transpose(y, [0, 3, 1, 2]);
        }
        return y;
    });
}
exports.conv2dWithBias = conv2dWithBias;
/**
 * 3D Convolution.
 * @param x
 * @param kernel kernel of the convolution.
 * @param strides strides array.
 * @param padding padding mode. Default to 'valid'.
 * @param dataFormat data format. Defaults to 'channelsLast'.
 * @param dilationRate dilation rate array.
 * @returns Result of the 3D convolution.
 */
function conv3d(x, kernel, strides, padding, dataFormat, dilationRate) {
    if (strides === void 0) { strides = [1, 1, 1]; }
    if (padding === void 0) { padding = 'valid'; }
    return tfjs_core_1.tidy(function () {
        common_2.checkDataFormat(dataFormat);
        return conv3dWithBias(x, kernel, null, strides, padding, dataFormat, dilationRate);
    });
}
exports.conv3d = conv3d;
/**
 * 3D Convolution with an added bias.
 * Note: This function does not exist in the Python Keras Backend. This function
 * is exactly the same as `conv3d`, except the added `bias`.
 */
function conv3dWithBias(x, kernel, bias, strides, padding, dataFormat, dilationRate) {
    if (strides === void 0) { strides = [1, 1, 1]; }
    if (padding === void 0) { padding = 'valid'; }
    return tfjs_core_1.tidy(function () {
        if (dataFormat == null) {
            dataFormat = common_1.imageDataFormat();
        }
        common_2.checkDataFormat(dataFormat);
        if (x.rank !== 4 && x.rank !== 5) {
            throw new errors_1.ValueError("conv3dWithBias expects input to be of rank 4 or 5, but received " +
                (x.rank + "."));
        }
        if (kernel.rank !== 4 && kernel.rank !== 5) {
            throw new errors_1.ValueError("conv3dWithBias expects kernel to be of rank 4 or 5, but received " +
                (x.rank + "."));
        }
        var y = preprocessConv3DInput(x, dataFormat);
        if (padding === 'causal') {
            throw new errors_1.NotImplementedError('The support for CAUSAL padding mode in conv3dWithBias is not ' +
                'implemented yet.');
        }
        y = tfc.conv3d(y, kernel, strides, padding === 'same' ? 'same' : 'valid', 'NHWC', dilationRate);
        if (bias != null) {
            y = K.biasAdd(y, bias);
        }
        if (dataFormat === 'channelsFirst') {
            y = tfc.transpose(y, [0, 4, 1, 2, 3]);
        }
        return y;
    });
}
exports.conv3dWithBias = conv3dWithBias;
/**
 * Abstract convolution layer.
 */
var BaseConv = /** @class */ (function (_super) {
    __extends(BaseConv, _super);
    function BaseConv(rank, args) {
        var _this = _super.call(this, args) || this;
        _this.bias = null;
        _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
        _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
        BaseConv.verifyArgs(args);
        _this.rank = rank;
        generic_utils.assertPositiveInteger(_this.rank, 'rank');
        if (_this.rank !== 1 && _this.rank !== 2 && _this.rank !== 3) {
            throw new errors_1.NotImplementedError("Convolution layer for rank other than 1, 2, or 3 (" + _this.rank + ") is " +
                "not implemented yet.");
        }
        _this.kernelSize = conv_utils_1.normalizeArray(args.kernelSize, rank, 'kernelSize');
        _this.strides = conv_utils_1.normalizeArray(args.strides == null ? 1 : args.strides, rank, 'strides');
        _this.padding = args.padding == null ? 'valid' : args.padding;
        common_2.checkPaddingMode(_this.padding);
        _this.dataFormat =
            args.dataFormat == null ? 'channelsLast' : args.dataFormat;
        common_2.checkDataFormat(_this.dataFormat);
        _this.activation = activations_1.getActivation(args.activation);
        _this.useBias = args.useBias == null ? true : args.useBias;
        _this.biasInitializer =
            initializers_1.getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
        _this.biasConstraint = constraints_1.getConstraint(args.biasConstraint);
        _this.biasRegularizer = regularizers_1.getRegularizer(args.biasRegularizer);
        _this.activityRegularizer = regularizers_1.getRegularizer(args.activityRegularizer);
        _this.dilationRate = conv_utils_1.normalizeArray(args.dilationRate == null ? 1 : args.dilationRate, rank, 'dilationRate');
        if (_this.rank === 1 &&
            (Array.isArray(_this.dilationRate) &&
                _this.dilationRate.length !== 1)) {
            throw new errors_1.ValueError("dilationRate must be a number or an array of a single number " +
                "for 1D convolution, but received " +
                ("" + JSON.stringify(_this.dilationRate)));
        }
        else if (_this.rank === 2) {
            if (typeof _this.dilationRate === 'number') {
                _this.dilationRate = [_this.dilationRate, _this.dilationRate];
            }
            else if (_this.dilationRate.length !== 2) {
                throw new errors_1.ValueError("dilationRate must be a number or array of two numbers for 2D " +
                    ("convolution, but received " + JSON.stringify(_this.dilationRate)));
            }
        }
        else if (_this.rank === 3) {
            if (typeof _this.dilationRate === 'number') {
                _this.dilationRate =
                    [_this.dilationRate, _this.dilationRate, _this.dilationRate];
            }
            else if (_this.dilationRate.length !== 3) {
                throw new errors_1.ValueError("dilationRate must be a number or array of three numbers for 3D " +
                    ("convolution, but received " + JSON.stringify(_this.dilationRate)));
            }
        }
        return _this;
    }
    BaseConv.verifyArgs = function (args) {
        // Check config.kernelSize type and shape.
        generic_utils.assert('kernelSize' in args, "required key 'kernelSize' not in config");
        if (typeof args.kernelSize !== 'number' &&
            !generic_utils.checkArrayTypeAndLength(args.kernelSize, 'number', 1, 3))
            throw new errors_1.ValueError("BaseConv expects config.kernelSize to be number or number[] with " +
                ("length 1, 2, or 3, but received " + JSON.stringify(args.kernelSize) + "."));
    };
    BaseConv.prototype.getConfig = function () {
        var config = {
            kernelSize: this.kernelSize,
            strides: this.strides,
            padding: this.padding,
            dataFormat: this.dataFormat,
            dilationRate: this.dilationRate,
            activation: activations_1.serializeActivation(this.activation),
            useBias: this.useBias,
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint)
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    return BaseConv;
}(topology_1.Layer));
exports.BaseConv = BaseConv;
/**
 * Abstract nD convolution layer.  Ancestor of convolution layers which reduce
 * across channels, i.e., Conv1D and Conv2D, but not DepthwiseConv2D.
 */
var Conv = /** @class */ (function (_super) {
    __extends(Conv, _super);
    function Conv(rank, args) {
        var _this = _super.call(this, rank, args) || this;
        _this.kernel = null;
        Conv.verifyArgs(args);
        _this.filters = args.filters;
        generic_utils.assertPositiveInteger(_this.filters, 'filters');
        _this.kernelInitializer = initializers_1.getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
        _this.kernelConstraint = constraints_1.getConstraint(args.kernelConstraint);
        _this.kernelRegularizer = regularizers_1.getRegularizer(args.kernelRegularizer);
        return _this;
    }
    Conv.prototype.build = function (inputShape) {
        var _a;
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : inputShape.length - 1;
        if (inputShape[channelAxis] == null) {
            throw new errors_1.ValueError("The channel dimension of the input should be defined. " +
                ("Found " + inputShape[channelAxis]));
        }
        var inputDim = inputShape[channelAxis];
        var kernelShape = this.kernelSize.concat([inputDim, this.filters]);
        this.kernel = this.addWeight('kernel', kernelShape, null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
        if (this.useBias) {
            this.bias = this.addWeight('bias', [this.filters], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        }
        this.inputSpec = [{ ndim: this.rank + 2, axes: (_a = {}, _a[channelAxis] = inputDim, _a) }];
        this.built = true;
    };
    Conv.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = types_utils_1.getExactlyOneTensor(inputs);
            var outputs;
            var biasValue = _this.bias == null ? null : _this.bias.read();
            if (_this.rank === 1) {
                outputs = conv1dWithBias(inputs, _this.kernel.read(), biasValue, _this.strides[0], _this.padding, _this.dataFormat, _this.dilationRate[0]);
            }
            else if (_this.rank === 2) {
                // TODO(cais): Move up to constructor.
                outputs = conv2dWithBias(inputs, _this.kernel.read(), biasValue, _this.strides, _this.padding, _this.dataFormat, _this.dilationRate);
            }
            else if (_this.rank === 3) {
                outputs = conv3dWithBias(inputs, _this.kernel.read(), biasValue, _this.strides, _this.padding, _this.dataFormat, _this.dilationRate);
            }
            else {
                throw new errors_1.NotImplementedError('convolutions greater than 3D are not implemented yet.');
            }
            if (_this.activation != null) {
                outputs = _this.activation.apply(outputs);
            }
            return outputs;
        });
    };
    Conv.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var newSpace = [];
        var space = (this.dataFormat === 'channelsLast') ?
            inputShape.slice(1, inputShape.length - 1) :
            inputShape.slice(2);
        for (var i = 0; i < space.length; ++i) {
            var newDim = conv_utils_1.convOutputLength(space[i], this.kernelSize[i], this.padding, this.strides[i], typeof this.dilationRate === 'number' ? this.dilationRate :
                this.dilationRate[i]);
            newSpace.push(newDim);
        }
        var outputShape = [inputShape[0]];
        if (this.dataFormat === 'channelsLast') {
            outputShape = outputShape.concat(newSpace);
            outputShape.push(this.filters);
        }
        else {
            outputShape.push(this.filters);
            outputShape = outputShape.concat(newSpace);
        }
        return outputShape;
    };
    Conv.prototype.getConfig = function () {
        var config = {
            filters: this.filters,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint)
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    Conv.verifyArgs = function (args) {
        // Check config.filters type, shape, and value.
        if (!('filters' in args) || typeof args.filters !== 'number' ||
            args.filters < 1) {
            throw new errors_1.ValueError("Convolution layer expected config.filters to be a 'number' > 0 " +
                ("but got " + JSON.stringify(args.filters)));
        }
    };
    return Conv;
}(BaseConv));
exports.Conv = Conv;
/**
 * 2D convolution layer (e.g. spatial convolution over images).
 *
 * This layer creates a convolution kernel that is convolved
 * with the layer input to produce a tensor of outputs.
 *
 * If `useBias` is True, a bias vector is created and added to the outputs.
 *
 * If `activation` is not `null`, it is applied to the outputs as well.
 *
 * When using this layer as the first layer in a model,
 * provide the keyword argument `inputShape`
 * (Array of integers, does not include the sample axis),
 * e.g. `inputShape=[128, 128, 3]` for 128x128 RGB pictures
 * in `dataFormat='channelsLast'`.
 */
var Conv2D = /** @class */ (function (_super) {
    __extends(Conv2D, _super);
    function Conv2D(args) {
        var _this = _super.call(this, 2, args) || this;
        Conv2D.verifyArgs(args);
        return _this;
    }
    Conv2D.prototype.getConfig = function () {
        var config = _super.prototype.getConfig.call(this);
        delete config['rank'];
        return config;
    };
    Conv2D.verifyArgs = function (args) {
        // config.kernelSize must be a number or array of numbers.
        if ((typeof args.kernelSize !== 'number') &&
            !generic_utils.checkArrayTypeAndLength(args.kernelSize, 'number', 1, 2))
            throw new errors_1.ValueError("Conv2D expects config.kernelSize to be number or number[] with " +
                ("length 1 or 2, but received " + JSON.stringify(args.kernelSize) + "."));
    };
    /** @nocollapse */
    Conv2D.className = 'Conv2D';
    return Conv2D;
}(Conv));
exports.Conv2D = Conv2D;
tfjs_core_1.serialization.registerClass(Conv2D);
/**
 * 3D convolution layer (e.g. spatial convolution over volumes).
 *
 * This layer creates a convolution kernel that is convolved
 * with the layer input to produce a tensor of outputs.
 *
 * If `useBias` is True, a bias vector is created and added to the outputs.
 *
 * If `activation` is not `null`, it is applied to the outputs as well.
 *
 * When using this layer as the first layer in a model,
 * provide the keyword argument `inputShape`
 * (Array of integers, does not include the sample axis),
 * e.g. `inputShape=[128, 128, 128, 1]` for 128x128x128 grayscale volumes
 * in `dataFormat='channelsLast'`.
 */
var Conv3D = /** @class */ (function (_super) {
    __extends(Conv3D, _super);
    function Conv3D(args) {
        var _this = _super.call(this, 3, args) || this;
        Conv3D.verifyArgs(args);
        return _this;
    }
    Conv3D.prototype.getConfig = function () {
        var config = _super.prototype.getConfig.call(this);
        delete config['rank'];
        return config;
    };
    Conv3D.verifyArgs = function (args) {
        // config.kernelSize must be a number or array of numbers.
        if (typeof args.kernelSize !== 'number') {
            if (!(Array.isArray(args.kernelSize) &&
                (args.kernelSize.length === 1 || args.kernelSize.length === 3)))
                throw new errors_1.ValueError("Conv3D expects config.kernelSize to be number or" +
                    (" [number, number, number], but received " + JSON.stringify(args.kernelSize) + "."));
        }
    };
    /** @nocollapse */
    Conv3D.className = 'Conv3D';
    return Conv3D;
}(Conv));
exports.Conv3D = Conv3D;
tfjs_core_1.serialization.registerClass(Conv3D);
/**
 * Transposed convolutional layer (sometimes called Deconvolution).
 *
 * The need for transposed convolutions generally arises
 * from the desire to use a transformation going in the opposite direction of
 * a normal convolution, i.e., from something that has the shape of the output
 * of some convolution to something that has the shape of its input while
 * maintaining a connectivity pattern that is compatible with said
 * convolution.
 *
 * When using this layer as the first layer in a model, provide the
 * configuration `inputShape` (`Array` of integers, does not include the
 * sample axis), e.g., `inputShape: [128, 128, 3]` for 128x128 RGB pictures in
 * `dataFormat: 'channelsLast'`.
 *
 * Input shape:
 *   4D tensor with shape:
 *   `[batch, channels, rows, cols]` if `dataFormat` is `'channelsFirst'`.
 *   or 4D tensor with shape
 *   `[batch, rows, cols, channels]` if `dataFormat` is `'channelsLast`.
 *
 * Output shape:
 *   4D tensor with shape:
 *   `[batch, filters, newRows, newCols]` if `dataFormat` is
 * `'channelsFirst'`. or 4D tensor with shape:
 *   `[batch, newRows, newCols, filters]` if `dataFormat` is `'channelsLast'`.
 *
 * References:
 *   - [A guide to convolution arithmetic for deep
 * learning](https://arxiv.org/abs/1603.07285v1)
 *   - [Deconvolutional
 * Networks](http://www.matthewzeiler.com/pubs/cvpr2010/cvpr2010.pdf)
 */
var Conv2DTranspose = /** @class */ (function (_super) {
    __extends(Conv2DTranspose, _super);
    function Conv2DTranspose(args) {
        var _this = _super.call(this, args) || this;
        _this.inputSpec = [new topology_1.InputSpec({ ndim: 4 })];
        if (_this.padding !== 'same' && _this.padding !== 'valid') {
            throw new errors_1.ValueError("Conv2DTranspose currently supports only padding modes 'same' " +
                ("and 'valid', but received padding mode " + _this.padding));
        }
        return _this;
    }
    Conv2DTranspose.prototype.build = function (inputShape) {
        var _a;
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        if (inputShape.length !== 4) {
            throw new errors_1.ValueError('Input should have rank 4; Received input shape: ' +
                JSON.stringify(inputShape));
        }
        var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : inputShape.length - 1;
        if (inputShape[channelAxis] == null) {
            throw new errors_1.ValueError('The channel dimension of the inputs should be defined. ' +
                'Found `None`.');
        }
        var inputDim = inputShape[channelAxis];
        var kernelShape = this.kernelSize.concat([this.filters, inputDim]);
        this.kernel = this.addWeight('kernel', kernelShape, 'float32', this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
        if (this.useBias) {
            this.bias = this.addWeight('bias', [this.filters], 'float32', this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        }
        // Set input spec.
        this.inputSpec =
            [new topology_1.InputSpec({ ndim: 4, axes: (_a = {}, _a[channelAxis] = inputDim, _a) })];
        this.built = true;
    };
    Conv2DTranspose.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfc.tidy(function () {
            var input = types_utils_1.getExactlyOneTensor(inputs);
            if (input.shape.length !== 4) {
                throw new errors_1.ValueError("Conv2DTranspose.call() expects input tensor to be rank-4, but " +
                    ("received a tensor of rank-" + input.shape.length));
            }
            var inputShape = input.shape;
            var batchSize = inputShape[0];
            var hAxis;
            var wAxis;
            if (_this.dataFormat === 'channelsFirst') {
                hAxis = 2;
                wAxis = 3;
            }
            else {
                hAxis = 1;
                wAxis = 2;
            }
            var height = inputShape[hAxis];
            var width = inputShape[wAxis];
            var kernelH = _this.kernelSize[0];
            var kernelW = _this.kernelSize[1];
            var strideH = _this.strides[0];
            var strideW = _this.strides[1];
            // Infer the dynamic output shape.
            var outHeight = conv_utils_1.deconvLength(height, strideH, kernelH, _this.padding);
            var outWidth = conv_utils_1.deconvLength(width, strideW, kernelW, _this.padding);
            // Porting Note: We don't branch based on `this.dataFormat` here,
            // because
            //   the tjfs-core function `conv2dTranspose` called below always
            //   assumes channelsLast.
            var outputShape = [batchSize, outHeight, outWidth, _this.filters];
            if (_this.dataFormat !== 'channelsLast') {
                input = tfc.transpose(input, [0, 2, 3, 1]);
            }
            var outputs = tfc.conv2dTranspose(input, _this.kernel.read(), outputShape, _this.strides, _this.padding);
            if (_this.dataFormat !== 'channelsLast') {
                outputs = tfc.transpose(outputs, [0, 3, 1, 2]);
            }
            if (_this.bias != null) {
                outputs =
                    K.biasAdd(outputs, _this.bias.read(), _this.dataFormat);
            }
            if (_this.activation != null) {
                outputs = _this.activation.apply(outputs);
            }
            return outputs;
        });
    };
    Conv2DTranspose.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var outputShape = inputShape.slice();
        var channelAxis;
        var heightAxis;
        var widthAxis;
        if (this.dataFormat === 'channelsFirst') {
            channelAxis = 1;
            heightAxis = 2;
            widthAxis = 3;
        }
        else {
            channelAxis = 3;
            heightAxis = 1;
            widthAxis = 2;
        }
        var kernelH = this.kernelSize[0];
        var kernelW = this.kernelSize[1];
        var strideH = this.strides[0];
        var strideW = this.strides[1];
        outputShape[channelAxis] = this.filters;
        outputShape[heightAxis] =
            conv_utils_1.deconvLength(outputShape[heightAxis], strideH, kernelH, this.padding);
        outputShape[widthAxis] =
            conv_utils_1.deconvLength(outputShape[widthAxis], strideW, kernelW, this.padding);
        return outputShape;
    };
    Conv2DTranspose.prototype.getConfig = function () {
        var config = _super.prototype.getConfig.call(this);
        delete config['dilationRate'];
        return config;
    };
    /** @nocollapse */
    Conv2DTranspose.className = 'Conv2DTranspose';
    return Conv2DTranspose;
}(Conv2D));
exports.Conv2DTranspose = Conv2DTranspose;
tfjs_core_1.serialization.registerClass(Conv2DTranspose);
var SeparableConv = /** @class */ (function (_super) {
    __extends(SeparableConv, _super);
    function SeparableConv(rank, config) {
        var _this = _super.call(this, rank, config) || this;
        _this.DEFAULT_DEPTHWISE_INITIALIZER = 'glorotUniform';
        _this.DEFAULT_POINTWISE_INITIALIZER = 'glorotUniform';
        _this.depthwiseKernel = null;
        _this.pointwiseKernel = null;
        if (config.filters == null) {
            throw new errors_1.ValueError('The `filters` configuration field is required by SeparableConv, ' +
                'but is unspecified.');
        }
        if (config.kernelInitializer != null || config.kernelRegularizer != null ||
            config.kernelConstraint != null) {
            throw new errors_1.ValueError('Fields kernelInitializer, kernelRegularizer and kernelConstraint ' +
                'are invalid for SeparableConv2D. Use depthwiseInitializer, ' +
                'depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, ' +
                'pointwiseRegularizer and pointwiseConstraint instead.');
        }
        if (config.padding != null && config.padding !== 'same' &&
            config.padding !== 'valid') {
            throw new errors_1.ValueError("SeparableConv" + _this.rank + "D supports only padding modes: " +
                ("'same' and 'valid', but received " + JSON.stringify(config.padding)));
        }
        _this.depthMultiplier =
            config.depthMultiplier == null ? 1 : config.depthMultiplier;
        _this.depthwiseInitializer = initializers_1.getInitializer(config.depthwiseInitializer || _this.DEFAULT_DEPTHWISE_INITIALIZER);
        _this.depthwiseRegularizer = regularizers_1.getRegularizer(config.depthwiseRegularizer);
        _this.depthwiseConstraint = constraints_1.getConstraint(config.depthwiseConstraint);
        _this.pointwiseInitializer = initializers_1.getInitializer(config.depthwiseInitializer || _this.DEFAULT_POINTWISE_INITIALIZER);
        _this.pointwiseRegularizer = regularizers_1.getRegularizer(config.pointwiseRegularizer);
        _this.pointwiseConstraint = constraints_1.getConstraint(config.pointwiseConstraint);
        return _this;
    }
    SeparableConv.prototype.build = function (inputShape) {
        var _a;
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        if (inputShape.length < this.rank + 2) {
            throw new errors_1.ValueError("Inputs to SeparableConv" + this.rank + "D should have rank " +
                (this.rank + 2 + ", but received input shape: ") +
                ("" + JSON.stringify(inputShape)));
        }
        var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : inputShape.length - 1;
        if (inputShape[channelAxis] == null || inputShape[channelAxis] < 0) {
            throw new errors_1.ValueError("The channel dimension of the inputs should be defined, " +
                ("but found " + JSON.stringify(inputShape[channelAxis])));
        }
        var inputDim = inputShape[channelAxis];
        var depthwiseKernelShape = this.kernelSize.concat([inputDim, this.depthMultiplier]);
        var pointwiseKernelShape = [];
        for (var i = 0; i < this.rank; ++i) {
            pointwiseKernelShape.push(1);
        }
        pointwiseKernelShape.push(inputDim * this.depthMultiplier, this.filters);
        var trainable = true;
        this.depthwiseKernel = this.addWeight('depthwise_kernel', depthwiseKernelShape, 'float32', this.depthwiseInitializer, this.depthwiseRegularizer, trainable, this.depthwiseConstraint);
        this.pointwiseKernel = this.addWeight('pointwise_kernel', pointwiseKernelShape, 'float32', this.pointwiseInitializer, this.pointwiseRegularizer, trainable, this.pointwiseConstraint);
        if (this.useBias) {
            this.bias = this.addWeight('bias', [this.filters], 'float32', this.biasInitializer, this.biasRegularizer, trainable, this.biasConstraint);
        }
        else {
            this.bias = null;
        }
        this.inputSpec =
            [new topology_1.InputSpec({ ndim: this.rank + 2, axes: (_a = {}, _a[channelAxis] = inputDim, _a) })];
        this.built = true;
    };
    SeparableConv.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = types_utils_1.getExactlyOneTensor(inputs);
            var output;
            if (_this.rank === 1) {
                throw new errors_1.NotImplementedError('1D separable convolution is not implemented yet.');
            }
            else if (_this.rank === 2) {
                if (_this.dataFormat === 'channelsFirst') {
                    inputs = tfc.transpose(inputs, [0, 2, 3, 1]); // NCHW -> NHWC.
                }
                output = tfc.separableConv2d(inputs, _this.depthwiseKernel.read(), _this.pointwiseKernel.read(), _this.strides, _this.padding, _this.dilationRate, 'NHWC');
            }
            if (_this.useBias) {
                output = K.biasAdd(output, _this.bias.read(), _this.dataFormat);
            }
            if (_this.activation != null) {
                output = _this.activation.apply(output);
            }
            if (_this.dataFormat === 'channelsFirst') {
                output = tfc.transpose(output, [0, 3, 1, 2]); // NHWC -> NCHW.
            }
            return output;
        });
    };
    SeparableConv.prototype.getConfig = function () {
        var config = _super.prototype.getConfig.call(this);
        delete config['rank'];
        delete config['kernelInitializer'];
        delete config['kernelRegularizer'];
        delete config['kernelConstraint'];
        config['depthwiseInitializer'] =
            initializers_1.serializeInitializer(this.depthwiseInitializer);
        config['pointwiseInitializer'] =
            initializers_1.serializeInitializer(this.pointwiseInitializer);
        config['depthwiseRegularizer'] =
            regularizers_1.serializeRegularizer(this.depthwiseRegularizer);
        config['pointwiseRegularizer'] =
            regularizers_1.serializeRegularizer(this.pointwiseRegularizer);
        config['depthwiseConstraint'] =
            constraints_1.serializeConstraint(this.depthwiseConstraint);
        config['pointwiseConstraint'] =
            constraints_1.serializeConstraint(this.pointwiseConstraint);
        return config;
    };
    /** @nocollapse */
    SeparableConv.className = 'SeparableConv';
    return SeparableConv;
}(Conv));
exports.SeparableConv = SeparableConv;
/**
 * Depthwise separable 2D convolution.
 *
 * Separable convolution consists of first performing
 * a depthwise spatial convolution
 * (which acts on each input channel separately)
 * followed by a pointwise convolution which mixes together the resulting
 * output channels. The `depthMultiplier` argument controls how many
 * output channels are generated per input channel in the depthwise step.
 *
 * Intuitively, separable convolutions can be understood as
 * a way to factorize a convolution kernel into two smaller kernels,
 * or as an extreme version of an Inception block.
 *
 * Input shape:
 *   4D tensor with shape:
 *     `[batch, channels, rows, cols]` if data_format='channelsFirst'
 *   or 4D tensor with shape:
 *     `[batch, rows, cols, channels]` if data_format='channelsLast'.
 *
 * Output shape:
 *   4D tensor with shape:
 *     `[batch, filters, newRows, newCols]` if data_format='channelsFirst'
 *   or 4D tensor with shape:
 *     `[batch, newRows, newCols, filters]` if data_format='channelsLast'.
 *     `rows` and `cols` values might have changed due to padding.
 */
var SeparableConv2D = /** @class */ (function (_super) {
    __extends(SeparableConv2D, _super);
    function SeparableConv2D(args) {
        return _super.call(this, 2, args) || this;
    }
    /** @nocollapse */
    SeparableConv2D.className = 'SeparableConv2D';
    return SeparableConv2D;
}(SeparableConv));
exports.SeparableConv2D = SeparableConv2D;
tfjs_core_1.serialization.registerClass(SeparableConv2D);
/**
 * 1D convolution layer (e.g., temporal convolution).
 *
 * This layer creates a convolution kernel that is convolved
 * with the layer input over a single spatial (or temporal) dimension
 * to produce a tensor of outputs.
 *
 * If `use_bias` is True, a bias vector is created and added to the outputs.
 *
 * If `activation` is not `null`, it is applied to the outputs as well.
 *
 * When using this layer as the first layer in a model, provide an
 * `inputShape` argument `Array` or `null`.
 *
 * For example, `inputShape` would be:
 * - `[10, 128]` for sequences of 10 vectors of 128-dimensional vectors
 * - `[null, 128]` for variable-length sequences of 128-dimensional vectors.
 */
var Conv1D = /** @class */ (function (_super) {
    __extends(Conv1D, _super);
    function Conv1D(args) {
        var _this = _super.call(this, 1, args) || this;
        Conv1D.verifyArgs(args);
        _this.inputSpec = [{ ndim: 3 }];
        return _this;
    }
    Conv1D.prototype.getConfig = function () {
        var config = _super.prototype.getConfig.call(this);
        delete config['rank'];
        delete config['dataFormat'];
        return config;
    };
    Conv1D.verifyArgs = function (args) {
        // config.kernelSize must be a number or array of numbers.
        if (typeof args.kernelSize !== 'number' &&
            !generic_utils.checkArrayTypeAndLength(args.kernelSize, 'number', 1, 1))
            throw new errors_1.ValueError("Conv1D expects config.kernelSize to be number or number[] with " +
                ("length 1, but received " + JSON.stringify(args.kernelSize) + "."));
    };
    /** @nocollapse */
    Conv1D.className = 'Conv1D';
    return Conv1D;
}(Conv));
exports.Conv1D = Conv1D;
tfjs_core_1.serialization.registerClass(Conv1D);
/**
 * Cropping layer for 2D input (e.g., image).
 *
 * This layer can crop an input
 * at the top, bottom, left and right side of an image tensor.
 *
 * Input shape:
 *   4D tensor with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, rows, cols, channels]`
 *   - If `data_format` is `"channels_first"`:
 *     `[batch, channels, rows, cols]`.
 *
 * Output shape:
 *   4D with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, croppedRows, croppedCols, channels]`
 *    - If `dataFormat` is `"channelsFirst"`:
 *     `[batch, channels, croppedRows, croppedCols]`.
 *
 * Examples
 * ```js
 *
 * const model = tf.sequential();
 * model.add(tf.layers.cropping2D({cropping:[[2, 2], [2, 2]],
 *                                inputShape: [128, 128, 3]}));
 * //now output shape is [batch, 124, 124, 3]
 * ```
 */
var Cropping2D = /** @class */ (function (_super) {
    __extends(Cropping2D, _super);
    function Cropping2D(args) {
        var _this = _super.call(this, args) || this;
        if (typeof args.cropping === 'number')
            _this.cropping =
                [[args.cropping, args.cropping], [args.cropping, args.cropping]];
        else if (typeof args.cropping[0] === 'number')
            _this.cropping = [
                [args.cropping[0], args.cropping[0]],
                [args.cropping[1], args.cropping[1]]
            ];
        else
            _this.cropping = args.cropping;
        _this.dataFormat =
            args.dataFormat === undefined ? 'channelsLast' : args.dataFormat;
        _this.inputSpec = [{ ndim: 4 }];
        return _this;
    }
    Cropping2D.prototype.computeOutputShape = function (inputShape) {
        if (this.dataFormat === 'channelsFirst')
            return [
                inputShape[0], inputShape[1],
                inputShape[2] - this.cropping[0][0] - this.cropping[0][1],
                inputShape[3] - this.cropping[1][0] - this.cropping[1][1]
            ];
        else
            return [
                inputShape[0],
                inputShape[1] - this.cropping[0][0] - this.cropping[0][1],
                inputShape[2] - this.cropping[1][0] - this.cropping[1][1], inputShape[3]
            ];
    };
    Cropping2D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = types_utils_1.getExactlyOneTensor(inputs);
            if (_this.dataFormat === 'channelsLast') {
                var hSliced = K.sliceAlongAxis(inputs, _this.cropping[0][0], inputs.shape[1] - _this.cropping[0][0] - _this.cropping[0][1], 2);
                return K.sliceAlongAxis(hSliced, _this.cropping[1][0], inputs.shape[2] - _this.cropping[1][1] - _this.cropping[1][0], 3);
            }
            else {
                var hSliced = K.sliceAlongAxis(inputs, _this.cropping[0][0], inputs.shape[2] - _this.cropping[0][0] - _this.cropping[0][1], 3);
                return K.sliceAlongAxis(hSliced, _this.cropping[1][0], inputs.shape[3] - _this.cropping[1][1] - _this.cropping[1][0], 4);
            }
        });
    };
    Cropping2D.prototype.getConfig = function () {
        var config = { cropping: this.cropping, dataFormat: this.dataFormat };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Cropping2D.className = 'Cropping2D';
    return Cropping2D;
}(topology_1.Layer));
exports.Cropping2D = Cropping2D;
tfjs_core_1.serialization.registerClass(Cropping2D);
/**
 * Upsampling layer for 2D inputs.
 *
 * Repeats the rows and columns of the data
 * by size[0] and size[1] respectively.
 *
 *
 * Input shape:
 *    4D tensor with shape:
 *     - If `dataFormat` is `"channelsLast"`:
 *         `[batch, rows, cols, channels]`
 *     - If `dataFormat` is `"channelsFirst"`:
 *        `[batch, channels, rows, cols]`
 *
 * Output shape:
 *     4D tensor with shape:
 *     - If `dataFormat` is `"channelsLast"`:
 *        `[batch, upsampledRows, upsampledCols, channels]`
 *     - If `dataFormat` is `"channelsFirst"`:
 *         `[batch, channels, upsampledRows, upsampledCols]`
 *
 */
var UpSampling2D = /** @class */ (function (_super) {
    __extends(UpSampling2D, _super);
    function UpSampling2D(args) {
        var _this = _super.call(this, args) || this;
        _this.DEFAULT_SIZE = [2, 2];
        _this.inputSpec = [{ ndim: 4 }];
        _this.size = args.size == null ? _this.DEFAULT_SIZE : args.size;
        _this.dataFormat =
            args.dataFormat == null ? 'channelsLast' : args.dataFormat;
        return _this;
    }
    UpSampling2D.prototype.computeOutputShape = function (inputShape) {
        if (this.dataFormat === 'channelsFirst') {
            var height = inputShape[2] == null ? null : this.size[0] * inputShape[2];
            var width = inputShape[3] == null ? null : this.size[1] * inputShape[3];
            return [inputShape[0], inputShape[1], height, width];
        }
        else {
            var height = inputShape[1] == null ? null : this.size[0] * inputShape[1];
            var width = inputShape[2] == null ? null : this.size[1] * inputShape[2];
            return [inputShape[0], height, width, inputShape[3]];
        }
    };
    UpSampling2D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfc.tidy(function () {
            var input = types_utils_1.getExactlyOneTensor(inputs);
            var inputShape = input.shape;
            if (_this.dataFormat === 'channelsFirst') {
                input = tfc.transpose(input, [0, 2, 3, 1]);
                var height = _this.size[0] * inputShape[2];
                var width = _this.size[1] * inputShape[3];
                var resized = input.resizeNearestNeighbor([height, width]);
                return tfc.transpose(resized, [0, 3, 1, 2]);
            }
            else {
                var height = _this.size[0] * inputShape[1];
                var width = _this.size[1] * inputShape[2];
                return input.resizeNearestNeighbor([height, width]);
            }
        });
    };
    UpSampling2D.prototype.getConfig = function () {
        var config = { size: this.size, dataFormat: this.dataFormat };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    UpSampling2D.className = 'UpSampling2D';
    return UpSampling2D;
}(topology_1.Layer));
exports.UpSampling2D = UpSampling2D;
tfjs_core_1.serialization.registerClass(UpSampling2D);
//# sourceMappingURL=convolutional.js.map
}, function(modId) { var map = {"../activations":1553229508459,"../backend/common":1553229508425,"../backend/tfjs_backend":1553229508431,"../common":1553229508432,"../constraints":1553229508424,"../engine/topology":1553229508438,"../errors":1553229508428,"../initializers":1553229508430,"../regularizers":1553229508460,"../utils/conv_utils":1553229508462,"../utils/generic_utils":1553229508427,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508462, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../errors");
var generic_utils_1 = require("./generic_utils");
var math_utils_1 = require("./math_utils");
/**
 * Transforms a single number of array of numbers into an array of numbers.
 * @param value
 * @param n: The size of the tuple to be returned.
 * @param name: Name of the parameter, used for generating error messages.
 * @returns An array of numbers.
 */
function normalizeArray(value, n, name) {
    if (typeof value === 'number') {
        return generic_utils_1.pyListRepeat(value, n);
    }
    else {
        if (value.length !== n) {
            throw new errors_1.ValueError("The " + name + " argument must be an integer or tuple of " + n + " integers." +
                (" Received: " + value.length + " elements."));
        }
        for (var i = 0; i < n; ++i) {
            var singleValue = value[i];
            if (!math_utils_1.isInteger(singleValue)) {
                throw new errors_1.ValueError("The " + name + " argument must be an integer or tuple of " + n +
                    (" integers. Received: " + JSON.stringify(value) + " including a") +
                    (" non-integer number " + singleValue));
            }
        }
        return value;
    }
}
exports.normalizeArray = normalizeArray;
/**
 * Determines output length of a convolution given input length.
 * @param inputLength
 * @param filterSize
 * @param padding
 * @param stride
 * @param dilation: dilation rate.
 */
function convOutputLength(inputLength, filterSize, padding, stride, dilation) {
    if (dilation === void 0) { dilation = 1; }
    if (inputLength == null) {
        return inputLength;
    }
    var dilatedFilterSize = filterSize + (filterSize - 1) * (dilation - 1);
    var outputLength;
    if (padding === 'same') {
        outputLength = inputLength;
    }
    else { // VALID
        outputLength = inputLength - dilatedFilterSize + 1;
    }
    return Math.floor((outputLength + stride - 1) / stride);
}
exports.convOutputLength = convOutputLength;
function deconvLength(dimSize, strideSize, kernelSize, padding) {
    if (dimSize == null) {
        return null;
    }
    if (padding === 'valid') {
        dimSize = dimSize * strideSize + math_utils_1.max([kernelSize - strideSize, 0]);
    }
    else if (padding === 'same') {
        dimSize = dimSize * strideSize;
    }
    else {
        throw new errors_1.ValueError("Unsupport padding mode: " + padding + ".");
    }
    return dimSize;
}
exports.deconvLength = deconvLength;
//# sourceMappingURL=conv_utils.js.map
}, function(modId) { var map = {"../errors":1553229508428,"./generic_utils":1553229508427,"./math_utils":1553229508434}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508463, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Depthwise Convolutional Layers
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var common_1 = require("../backend/common");
var K = require("../backend/tfjs_backend");
var common_2 = require("../common");
var constraints_1 = require("../constraints");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var regularizers_1 = require("../regularizers");
var conv_utils_1 = require("../utils/conv_utils");
var types_utils_1 = require("../utils/types_utils");
var convolutional_1 = require("./convolutional");
/**
 * 2D convolution with separable filters.
 * @param x Input tensor.
 * @param depthwiseKernel Convolution kernel for depthwise convolution.
 * @param strides Strides (Array of two integers).
 * @param padding Padding model.
 * @param dataFormat Data format.
 * @param dilationRate Array of two integers, dilation rates for the separable
 *   convolution.
 * @returns Output tensor.
 * @throws ValueError If depthwiseKernel is not a 4D array.
 */
function depthwiseConv2d(x, depthwiseKernel, strides, padding, dataFormat, dilationRate) {
    if (strides === void 0) { strides = [1, 1]; }
    if (padding === void 0) { padding = 'valid'; }
    return tfjs_core_1.tidy(function () {
        if (dataFormat == null) {
            dataFormat = common_1.imageDataFormat();
        }
        common_2.checkDataFormat(dataFormat);
        var y = convolutional_1.preprocessConv2DInput(x, dataFormat);
        if (x.rank !== 4) {
            throw new errors_1.ValueError("Input for depthwiseConv2d is required to be 4-D, but is instead " +
                (x.rank + "-D"));
        }
        if (depthwiseKernel.rank !== 4) {
            throw new errors_1.ValueError("depthwiseKernel is required to be 4-D, but is instead " +
                (depthwiseKernel.rank + "-D"));
        }
        y = tfc.depthwiseConv2d(y, depthwiseKernel, strides, padding === 'same' ? 'same' : 'valid', 'NHWC', dilationRate);
        if (dataFormat === 'channelsFirst') {
            y = tfc.transpose(y, [0, 3, 1, 2]);
        }
        return y;
    });
}
exports.depthwiseConv2d = depthwiseConv2d;
/**
 * Depthwise separable 2D convolution.
 *
 * Depthwise Separable convolutions consists in performing just the first step
 * in a depthwise spatial convolution (which acts on each input channel
 * separately). The `depthMultplier` argument controls how many output channels
 * are generated per input channel in the depthwise step.
 */
var DepthwiseConv2D = /** @class */ (function (_super) {
    __extends(DepthwiseConv2D, _super);
    function DepthwiseConv2D(args) {
        var _this = _super.call(this, 2, args) || this;
        _this.depthwiseKernel = null;
        _this.depthMultiplier =
            args.depthMultiplier == null ? 1 : args.depthMultiplier;
        _this.depthwiseInitializer = initializers_1.getInitializer(args.depthwiseInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
        _this.depthwiseConstraint = constraints_1.getConstraint(args.depthwiseConstraint);
        _this.depthwiseRegularizer = regularizers_1.getRegularizer(args.depthwiseRegularizer);
        return _this;
    }
    DepthwiseConv2D.prototype.build = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        if (inputShape.length < 4) {
            throw new errors_1.ValueError("Inputs to DepthwiseConv2D should have rank 4. " +
                ("Received input shape: " + JSON.stringify(inputShape) + "."));
        }
        var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : 3;
        if (inputShape[channelAxis] == null || inputShape[channelAxis] < 0) {
            throw new errors_1.ValueError('The channel dimension of the inputs to DepthwiseConv2D should ' +
                ("be defined, but is not (" + inputShape[channelAxis] + ")."));
        }
        var inputDim = inputShape[channelAxis];
        var depthwiseKernelShape = [
            this.kernelSize[0], this.kernelSize[1], inputDim, this.depthMultiplier
        ];
        this.depthwiseKernel = this.addWeight('depthwise_kernel', depthwiseKernelShape, null, this.depthwiseInitializer, this.depthwiseRegularizer, true, this.depthwiseConstraint);
        if (this.useBias) {
            this.bias = this.addWeight('bias', [inputDim * this.depthMultiplier], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        }
        else {
            this.bias = null;
        }
        this.built = true;
    };
    DepthwiseConv2D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = types_utils_1.getExactlyOneTensor(inputs);
            var outputs = depthwiseConv2d(inputs, _this.depthwiseKernel.read(), _this.strides, _this.padding, _this.dataFormat, null);
            // TODO(cais): Add support for dilation.
            if (_this.useBias) {
                outputs = K.biasAdd(outputs, _this.bias.read(), _this.dataFormat);
            }
            if (_this.activation != null) {
                outputs = _this.activation.apply(outputs);
            }
            return outputs;
        });
    };
    DepthwiseConv2D.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var rows = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
        var cols = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
        var outFilters = this.dataFormat === 'channelsFirst' ?
            inputShape[1] * this.depthMultiplier :
            inputShape[3] * this.depthMultiplier;
        var outRows = conv_utils_1.convOutputLength(rows, this.kernelSize[0], this.padding, this.strides[0]);
        var outCols = conv_utils_1.convOutputLength(cols, this.kernelSize[1], this.padding, this.strides[1]);
        if (this.dataFormat === 'channelsFirst') {
            return [inputShape[0], outFilters, outRows, outCols];
        }
        else {
            // In this case, assume 'channelsLast'.
            return [inputShape[0], outRows, outCols, outFilters];
        }
    };
    DepthwiseConv2D.prototype.getConfig = function () {
        var config = _super.prototype.getConfig.call(this);
        config['depthMultiplier'] = this.depthMultiplier;
        config['depthwiseInitializer'] =
            initializers_1.serializeInitializer(this.depthwiseInitializer);
        config['depthwiseRegularizer'] =
            regularizers_1.serializeRegularizer(this.depthwiseRegularizer);
        config['depthwiseConstraint'] =
            constraints_1.serializeConstraint(this.depthwiseRegularizer);
        return config;
    };
    /** @nocollapse */
    DepthwiseConv2D.className = 'DepthwiseConv2D';
    return DepthwiseConv2D;
}(convolutional_1.BaseConv));
exports.DepthwiseConv2D = DepthwiseConv2D;
tfjs_core_1.serialization.registerClass(DepthwiseConv2D);
//# sourceMappingURL=convolutional_depthwise.js.map
}, function(modId) { var map = {"../backend/common":1553229508425,"../backend/tfjs_backend":1553229508431,"../common":1553229508432,"../constraints":1553229508424,"../errors":1553229508428,"../initializers":1553229508430,"../regularizers":1553229508460,"../utils/conv_utils":1553229508462,"../utils/types_utils":1553229508439,"./convolutional":1553229508461}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508464, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Basic Layers.
 */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var activations_1 = require("../activations");
var state_1 = require("../backend/state");
var K = require("../backend/tfjs_backend");
var constraints_1 = require("../constraints");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var regularizers_1 = require("../regularizers");
var generic_utils_1 = require("../utils/generic_utils");
var math_utils_1 = require("../utils/math_utils");
var types_utils_1 = require("../utils/types_utils");
function mapActivationToFusedKernel(className) {
    if (className === 'relu') {
        return 'relu';
    }
    else if (className === 'linear') {
        return 'linear';
    }
    return null;
}
/**
 * Applies
 * [dropout](http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf) to
 * the input.
 *
 * Dropout consists in randomly setting a fraction `rate` of input units to 0 at
 * each update during training time, which helps prevent overfitting.
 */
var Dropout = /** @class */ (function (_super) {
    __extends(Dropout, _super);
    function Dropout(args) {
        var _this = _super.call(this, args) || this;
        _this.rate = Math.max(Math.min(args.rate, 1), 0);
        _this.rateScalar = state_1.getScalar(_this.rate);
        // So that the scalar doesn't get tidied up between executions.
        _this.noiseShape = args.noiseShape;
        _this.seed = args.seed;
        if (_this.seed != null) {
            throw new errors_1.NotImplementedError('Non-default seed is not implemented in Dropout layer yet: ' +
                _this.seed);
        }
        _this.supportsMasking = true;
        return _this;
    }
    Dropout.prototype.getNoiseShape = function (input) {
        if (this.noiseShape == null) {
            return this.noiseShape;
        }
        var inputShape = input.shape;
        var noiseShape = [];
        for (var i = 0; i < this.noiseShape.length; ++i) {
            noiseShape.push(this.noiseShape[i] == null ? inputShape[i] : this.noiseShape[i]);
        }
        return noiseShape;
    };
    Dropout.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            var input = types_utils_1.getExactlyOneTensor(inputs);
            if (_this.noiseShape != null &&
                !tfjs_core_1.util.arraysEqual(input.shape, _this.noiseShape)) {
                throw new errors_1.NotImplementedError('Non-default noise shape is not implemented in Dropout ' +
                    'layer yet: ' + JSON.stringify(_this.noiseShape));
            }
            if (0 < _this.rate && _this.rate < 1) {
                var training = kwargs['training'] == null ? false : kwargs['training'];
                var noiseShape_1 = _this.getNoiseShape(input);
                var output = K.inTrainPhase(function () { return K.dropout(input, _this.rateScalar, noiseShape_1, _this.seed); }, function () { return input; }, training);
                return output;
            }
            return inputs;
        });
    };
    Dropout.prototype.getConfig = function () {
        var config = {
            rate: this.rate,
            noiseShape: this.noiseShape,
            seed: this.seed,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    Dropout.prototype.dispose = function () {
        var result = _super.prototype.dispose.call(this);
        if (!this.rateScalar.isDisposed) {
            this.rateScalar.dispose();
            result.numDisposedVariables++;
        }
        return result;
    };
    /** @nocollapse */
    Dropout.className = 'Dropout';
    return Dropout;
}(topology_1.Layer));
exports.Dropout = Dropout;
tfjs_core_1.serialization.registerClass(Dropout);
/**
 * Creates a dense (fully connected) layer.
 *
 * This layer implements the operation:
 *   `output = activation(dot(input, kernel) + bias)`
 *
 * `activation` is the element-wise activation function
 *   passed as the `activation` argument.
 *
 * `kernel` is a weights matrix created by the layer.
 *
 * `bias` is a bias vector created by the layer (only applicable if `useBias`
 * is `true`).
 *
 * **Input shape:**
 *
 *   nD `tf.Tensor` with shape: `(batchSize, ..., inputDim)`.
 *
 *   The most common situation would be
 *   a 2D input with shape `(batchSize, inputDim)`.
 *
 * **Output shape:**
 *
 *   nD tensor with shape: `(batchSize, ..., units)`.
 *
 *   For instance, for a 2D input with shape `(batchSize, inputDim)`,
 *   the output would have shape `(batchSize, units)`.
 *
 * Note: if the input to the layer has a rank greater than 2, then it is
 * flattened prior to the initial dot product with the kernel.
 */
var Dense = /** @class */ (function (_super) {
    __extends(Dense, _super);
    function Dense(args) {
        var _this = _super.call(this, args) || this;
        // Default activation: Linear (none).
        _this.activation = null;
        _this.useBias = true;
        _this.kernel = null;
        _this.bias = null;
        _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
        _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
        if (args.batchInputShape == null && args.inputShape == null &&
            args.inputDim != null) {
            // This logic is copied from Layer's constructor, since we can't
            // do exactly what the Python constructor does for Dense().
            var batchSize = null;
            if (args.batchSize != null) {
                batchSize = args.batchSize;
            }
            _this.batchInputShape = [batchSize, args.inputDim];
        }
        _this.units = args.units;
        generic_utils_1.assertPositiveInteger(_this.units, 'units');
        _this.activation = activations_1.getActivation(args.activation);
        if (args.useBias != null) {
            _this.useBias = args.useBias;
        }
        _this.kernelInitializer = initializers_1.getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
        _this.biasInitializer =
            initializers_1.getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
        _this.kernelConstraint = constraints_1.getConstraint(args.kernelConstraint);
        _this.biasConstraint = constraints_1.getConstraint(args.biasConstraint);
        _this.kernelRegularizer = regularizers_1.getRegularizer(args.kernelRegularizer);
        _this.biasRegularizer = regularizers_1.getRegularizer(args.biasRegularizer);
        _this.activityRegularizer = regularizers_1.getRegularizer(args.activityRegularizer);
        _this.supportsMasking = true;
        _this.inputSpec = [{ minNDim: 2 }];
        return _this;
    }
    Dense.prototype.build = function (inputShape) {
        var _a;
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var inputLastDim = inputShape[inputShape.length - 1];
        if (this.kernel == null) {
            this.kernel = this.addWeight('kernel', [inputLastDim, this.units], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [this.units], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
        }
        this.inputSpec = [{ minNDim: 2, axes: (_a = {}, _a[-1] = inputLastDim, _a) }];
        this.built = true;
    };
    Dense.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var outputShape = inputShape.slice();
        outputShape[outputShape.length - 1] = this.units;
        return outputShape;
    };
    Dense.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            // Dense layer accepts only a single input.
            var input = types_utils_1.getExactlyOneTensor(inputs);
            var fusedActivationName = mapActivationToFusedKernel(_this.activation.getClassName());
            var output;
            if (fusedActivationName != null) {
                output = K.dot(input, _this.kernel.read(), fusedActivationName, _this.bias ? _this.bias.read() : null);
            }
            else {
                output = K.dot(input, _this.kernel.read());
                if (_this.bias != null) {
                    output = K.biasAdd(output, _this.bias.read());
                }
                if (_this.activation != null) {
                    output = _this.activation.apply(output);
                }
            }
            return output;
        });
    };
    Dense.prototype.getConfig = function () {
        var config = {
            units: this.units,
            activation: activations_1.serializeActivation(this.activation),
            useBias: this.useBias,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint)
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Dense.className = 'Dense';
    return Dense;
}(topology_1.Layer));
exports.Dense = Dense;
tfjs_core_1.serialization.registerClass(Dense);
/**
 * Flattens the input. Does not affect the batch size.
 *
 * A `Flatten` layer flattens each batch in its inputs to 1D (making the output
 * 2D).
 *
 * For example:
 *
 * ```js
 * const input = tf.input({shape: [4, 3]});
 * const flattenLayer = tf.layers.flatten();
 * // Inspect the inferred output shape of the flatten layer, which
 * // equals `[null, 12]`. The 2nd dimension is 4 * 3, i.e., the result of the
 * // flattening. (The 1st dimension is the undermined batch size.)
 * console.log(JSON.stringify(flattenLayer.apply(input).shape));
 * ```
 */
var Flatten = /** @class */ (function (_super) {
    __extends(Flatten, _super);
    function Flatten(args) {
        var _this = _super.call(this, args || {}) || this;
        _this.inputSpec = [{ minNDim: 3 }];
        return _this;
    }
    Flatten.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        for (var _i = 0, _a = inputShape.slice(1); _i < _a.length; _i++) {
            var dim = _a[_i];
            if (dim == null) {
                throw new errors_1.ValueError("The shape of the input to \"Flatten\" is not fully defined " +
                    ("(got " + inputShape.slice(1) + "). Make sure to pass a complete ") +
                    "\"input_shape\" or \"batch_input_shape\" argument to the first " +
                    "layer in your model.");
            }
        }
        return [inputShape[0], math_utils_1.arrayProd(inputShape, 1)];
    };
    Flatten.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            return K.batchFlatten(types_utils_1.getExactlyOneTensor(inputs));
        });
    };
    /** @nocollapse */
    Flatten.className = 'Flatten';
    return Flatten;
}(topology_1.Layer));
exports.Flatten = Flatten;
tfjs_core_1.serialization.registerClass(Flatten);
/**
 * Applies an activation function to an output.
 *
 * This layer applies element-wise activation function.  Other layers, notably
 * `dense` can also apply activation functions.  Use this isolated activation
 * function to extract the values before and after the
 * activation. For instance:
 *
 * ```js
 * const input = tf.input({shape: [5]});
 * const denseLayer = tf.layers.dense({units: 1});
 * const activationLayer = tf.layers.activation({activation: 'relu6'});
 *
 * // Obtain the output symbolic tensors by applying the layers in order.
 * const denseOutput = denseLayer.apply(input);
 * const activationOutput = activationLayer.apply(denseOutput);
 *
 * // Create the model based on the inputs.
 * const model = tf.LayersModel({
 *     inputs: input,
 *     outputs: [denseOutput, activationOutput]
 * });
 *
 * // Collect both outputs and print separately.
 * const [denseOut, activationOut] = model.predict(tf.randomNormal([6, 5]));
 * denseOut.print();
 * activationOut.print();
 * ```
 *
 */
var Activation = /** @class */ (function (_super) {
    __extends(Activation, _super);
    function Activation(args) {
        var _this = _super.call(this, args) || this;
        _this.supportsMasking = true;
        _this.activation = activations_1.getActivation(args.activation);
        return _this;
    }
    Activation.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            var input = types_utils_1.getExactlyOneTensor(inputs);
            return _this.activation.apply(input);
        });
    };
    Activation.prototype.getConfig = function () {
        var config = { activation: activations_1.serializeActivation(this.activation) };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Activation.className = 'Activation';
    return Activation;
}(topology_1.Layer));
exports.Activation = Activation;
tfjs_core_1.serialization.registerClass(Activation);
/**
 * Repeats the input n times in a new dimension.
 *
 * ```js
 *  const model = tf.sequential();
 *  model.add(tf.layers.repeatVector({n: 4, inputShape: [2]}));
 *  const x = tf.tensor2d([[10, 20]]);
 *  // Use the model to do inference on a data point the model hasn't see
 *  model.predict(x).print();
 *  // output shape is now [batch, 2, 4]
 * ```
 */
var RepeatVector = /** @class */ (function (_super) {
    __extends(RepeatVector, _super);
    function RepeatVector(args) {
        var _this = _super.call(this, args) || this;
        _this.n = args.n;
        _this.inputSpec = [{ ndim: 2 }];
        return _this;
    }
    RepeatVector.prototype.computeOutputShape = function (inputShape) {
        return [inputShape[0], this.n, inputShape[1]];
    };
    RepeatVector.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = types_utils_1.getExactlyOneTensor(inputs);
            return K.repeat(inputs, _this.n);
        });
    };
    RepeatVector.prototype.getConfig = function () {
        var config = {
            n: this.n,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    RepeatVector.className = 'RepeatVector';
    return RepeatVector;
}(topology_1.Layer));
exports.RepeatVector = RepeatVector;
tfjs_core_1.serialization.registerClass(RepeatVector);
/**
 * Reshapes an input to a certain shape.
 *
 * ```js
 * const input = tf.input({shape: [4, 3]});
 * const reshapeLayer = tf.layers.reshape({targetShape: [2, 6]});
 * // Inspect the inferred output shape of the Reshape layer, which
 * // equals `[null, 2, 6]`. (The 1st dimension is the undermined batch size.)
 * console.log(JSON.stringify(reshapeLayer.apply(input).shape));
 * ```
 *
 * Input shape:
 *   Arbitrary: although all dimensions in the input shape must be fixed.
 *     Use the ReshapeLayerConfig field `input_shape` when using this layer
 *     as the first layer in a model.
 *
 * Output shape:
 *   [batchSize, targetShape[0], targetShape[1], ...,
 *    targetShape[targetShape.length - 1]].
 */
var Reshape = /** @class */ (function (_super) {
    __extends(Reshape, _super);
    function Reshape(args) {
        var _this = _super.call(this, args) || this;
        _this.targetShape = args.targetShape;
        // Make sure that all unknown dimensions are represented as `null`.
        for (var i = 0; i < _this.targetShape.length; ++i) {
            if (_this.isUnknown(_this.targetShape[i])) {
                _this.targetShape[i] = null;
            }
        }
        return _this;
    }
    Reshape.prototype.isUnknown = function (dim) {
        return dim < 0 || dim == null;
    };
    /**
     * Finds and replaces a missing dimension in output shape.
     *
     * This is a near direct port of the internal Numpy function
     * `_fix_unknown_dimension` in `numpy/core/src/multiarray/shape.c`.
     *
     * @param inputShape: Original shape of array begin reshape.
     * @param outputShape: Target shape of the array, with at most a single
     * `null` or negative number, which indicates an underdetermined dimension
     * that should be derived from `inputShape` and the known dimensions of
     *   `outputShape`.
     * @returns: The output shape with `null` replaced with its computed value.
     * @throws: ValueError: If `inputShape` and `outputShape` do not match.
     */
    Reshape.prototype.fixUnknownDimension = function (inputShape, outputShape) {
        var errorMsg = 'Total size of new array must be unchanged.';
        var finalShape = outputShape.slice();
        var known = 1;
        var unknown = null;
        for (var i = 0; i < finalShape.length; ++i) {
            var dim = finalShape[i];
            if (this.isUnknown(dim)) {
                if (unknown === null) {
                    unknown = i;
                }
                else {
                    throw new errors_1.ValueError('Can only specifiy one unknown dimension.');
                }
            }
            else {
                known *= dim;
            }
        }
        var originalSize = math_utils_1.arrayProd(inputShape);
        if (unknown !== null) {
            if (known === 0 || originalSize % known !== 0) {
                throw new errors_1.ValueError(errorMsg);
            }
            finalShape[unknown] = originalSize / known;
        }
        else if (originalSize !== known) {
            throw new errors_1.ValueError(errorMsg);
        }
        return finalShape;
    };
    Reshape.prototype.computeOutputShape = function (inputShape) {
        var anyUnknownDims = false;
        for (var i = 0; i < inputShape.length; ++i) {
            if (this.isUnknown(inputShape[i])) {
                anyUnknownDims = true;
                break;
            }
        }
        if (anyUnknownDims) {
            return inputShape.slice(0, 1).concat(this.targetShape);
        }
        else {
            return inputShape.slice(0, 1).concat(this.fixUnknownDimension(inputShape.slice(1), this.targetShape));
        }
    };
    Reshape.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            var input = types_utils_1.getExactlyOneTensor(inputs);
            var inputShape = input.shape;
            var outputShape = inputShape.slice(0, 1).concat(_this.fixUnknownDimension(inputShape.slice(1), _this.targetShape));
            return input.reshape(outputShape);
        });
    };
    Reshape.prototype.getConfig = function () {
        var config = {
            targetShape: this.targetShape,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Reshape.className = 'Reshape';
    return Reshape;
}(topology_1.Layer));
exports.Reshape = Reshape;
tfjs_core_1.serialization.registerClass(Reshape);
/**
 * Permutes the dimensions of the input according to a given pattern.
 *
 * Useful for, e.g., connecting RNNs and convnets together.
 *
 * Example:
 *
 * ```js
 * const model = tf.Sequential();
 * model.add(tf.layers.permute({
 *   dims: [2, 1],
 *   inputShape: [10, 64]
 * }));
 * console.log(model.outputShape);
 * // Now model's output shape is [null, 64, 10], where null is the
 * // unpermuted sample (batch) dimension.
 * ```
 *
 * Input shape:
 *   Arbitrary. Use the configuration field `inputShape` when using this
 *   layer as othe first layer in a model.
 *
 * Output shape:
 *   Same rank as the input shape, but with the dimensions re-ordered (i.e.,
 *   permuted) according to the `dims` configuration of this layer.
 */
var Permute = /** @class */ (function (_super) {
    __extends(Permute, _super);
    function Permute(args) {
        var _this = _super.call(this, args) || this;
        if (args.dims == null) {
            throw new Error('Required configuration field `dims` is missing during Permute ' +
                'constructor call.');
        }
        if (!Array.isArray(args.dims)) {
            throw new Error('Permute constructor requires `dims` to be an Array, but received ' +
                (args.dims + " instead."));
        }
        // Check the validity of the permutation indices.
        var expectedSortedIndices = math_utils_1.range(1, args.dims.length + 1);
        if (!tfjs_core_1.util.arraysEqual(args.dims.slice().sort(), expectedSortedIndices)) {
            throw new Error('Invalid permutation `dims`: ' + JSON.stringify(args.dims) +
                ' `dims` must contain consecutive integers starting from 1.');
        }
        _this.dims = args.dims;
        _this.dimsIncludingBatch = [0].concat(_this.dims);
        _this.inputSpec = [new topology_1.InputSpec({ ndim: _this.dims.length + 1 })];
        return _this;
    }
    Permute.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var outputShape = inputShape.slice();
        this.dims.forEach(function (dim, i) {
            outputShape[i + 1] = inputShape[dim];
        });
        return outputShape;
    };
    Permute.prototype.call = function (inputs, kwargs) {
        return tfjs_core_1.transpose(types_utils_1.getExactlyOneTensor(inputs), this.dimsIncludingBatch);
    };
    Permute.prototype.getConfig = function () {
        var config = {
            dims: this.dims,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Permute.className = 'Permute';
    return Permute;
}(topology_1.Layer));
exports.Permute = Permute;
tfjs_core_1.serialization.registerClass(Permute);
//# sourceMappingURL=core.js.map
}, function(modId) { var map = {"../activations":1553229508459,"../backend/state":1553229508426,"../backend/tfjs_backend":1553229508431,"../constraints":1553229508424,"../engine/topology":1553229508438,"../errors":1553229508428,"../initializers":1553229508430,"../regularizers":1553229508460,"../utils/generic_utils":1553229508427,"../utils/math_utils":1553229508434,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508465, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Embedding Layer.
 *
 * Original source: keras/constraints.py
 */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var K = require("../backend/tfjs_backend");
var constraints_1 = require("../constraints");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var regularizers_1 = require("../regularizers");
var generic_utils = require("../utils/generic_utils");
var types_utils_1 = require("../utils/types_utils");
/**
 * Maps positive integers (indices) into dense vectors of fixed size.
 * eg. [[4], [20]] -> [[0.25, 0.1], [0.6, -0.2]]
 *
 * **Input shape:** 2D tensor with shape: `[batchSize, sequenceLength]`.
 *
 * **Output shape:** 3D tensor with shape: `[batchSize, sequenceLength,
 * outputDim]`.
 */
var Embedding = /** @class */ (function (_super) {
    __extends(Embedding, _super);
    function Embedding(args) {
        var _this = _super.call(this, args) || this;
        _this.embeddings = null;
        _this.DEFAULT_EMBEDDINGS_INITIALIZER = 'randomUniform';
        if (args.batchInputShape == null && args.inputShape == null) {
            // Porting Note: This logic is copied from Layer's constructor, since we
            // can't do exactly what the Python constructor does for Embedding().
            // Specifically, the super constructor can not be called after the
            // mutation of the `config` argument.
            var batchSize = null;
            if (args.batchSize != null) {
                batchSize = args.batchSize;
            }
            if (args.inputLength == null) {
                // Fix super-constructor to what it would have done if
                // 'config.inputShape' were (None, )
                _this.batchInputShape = [batchSize, null];
            }
            else {
                // Fix super-constructor to what it would have done if
                // 'config.inputShape' were (config.inputLength, )
                _this.batchInputShape =
                    [batchSize].concat(generic_utils.toList(args.inputLength));
            }
        }
        _this.inputDim = args.inputDim;
        generic_utils.assertPositiveInteger(_this.inputDim, 'inputDim');
        _this.outputDim = args.outputDim;
        generic_utils.assertPositiveInteger(_this.outputDim, 'outputDim');
        _this.embeddingsInitializer = initializers_1.getInitializer(args.embeddingsInitializer || _this.DEFAULT_EMBEDDINGS_INITIALIZER);
        _this.embeddingsRegularizer = regularizers_1.getRegularizer(args.embeddingsRegularizer);
        _this.activityRegularizer = regularizers_1.getRegularizer(args.activityRegularizer);
        _this.embeddingsConstraint = constraints_1.getConstraint(args.embeddingsConstraint);
        _this.maskZero = args.maskZero;
        _this.supportsMasking = args.maskZero;
        _this.inputLength = args.inputLength;
        return _this;
    }
    Embedding.prototype.build = function (inputShape) {
        this.embeddings = this.addWeight('embeddings', [this.inputDim, this.outputDim], this.dtype, this.embeddingsInitializer, this.embeddingsRegularizer, true, this.embeddingsConstraint);
        this.built = true;
    };
    // Override warnOnIncompatibleInputShape because an embedding layer allows
    // the input to have varying ranks.
    Embedding.prototype.warnOnIncompatibleInputShape = function (inputShape) { };
    Embedding.prototype.computeMask = function (inputs, mask) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (!_this.maskZero) {
                return null;
            }
            else {
                inputs = types_utils_1.getExactlyOneTensor(inputs);
                return tfjs_core_1.notEqual(inputs, tfjs_core_1.zerosLike(inputs));
            }
        });
    };
    Embedding.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        if (this.inputLength == null) {
            return inputShape.concat([this.outputDim]);
        }
        // inputLength can be an array if input is 3D or higher.
        var inLens = generic_utils.toList(this.inputLength);
        if (inLens.length !== inputShape.length - 1) {
            throw new errors_1.ValueError("\"inputLength\" is " + this.inputLength + ", but received " +
                ("input shape has shape " + inputShape));
        }
        else {
            var i = 0;
            for (var k = 0; k < inLens.length; ++k) {
                var s1 = inLens[k];
                var s2 = inputShape[k + 1];
                if ((s1 != null) && (s2 != null) && (s1 !== s2)) {
                    throw new errors_1.ValueError("\"inputLength\" is " + this.inputLength + ", but received " +
                        ("input shape has shape " + inputShape));
                }
                else if (s1 == null) {
                    inLens[i] = s2;
                }
                i++;
            }
        }
        return [inputShape[0]].concat(inLens, [this.outputDim]);
    };
    Embedding.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            // Embedding layer accepts only a single input.
            var input = types_utils_1.getExactlyOneTensor(inputs);
            if (input.dtype !== 'int32') {
                input = K.cast(input, 'int32');
            }
            var output = K.gather(_this.embeddings.read(), input.as1D());
            return output.reshape(types_utils_1.getExactlyOneShape(_this.computeOutputShape(input.shape)));
        });
    };
    Embedding.prototype.getConfig = function () {
        var config = {
            inputDim: this.inputDim,
            outputDim: this.outputDim,
            embeddingsInitializer: initializers_1.serializeInitializer(this.embeddingsInitializer),
            embeddingsRegularizer: regularizers_1.serializeRegularizer(this.embeddingsRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            embeddingsConstraint: constraints_1.serializeConstraint(this.embeddingsConstraint),
            maskZero: this.maskZero,
            inputLength: this.inputLength
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Embedding.className = 'Embedding';
    return Embedding;
}(topology_1.Layer));
exports.Embedding = Embedding;
tfjs_core_1.serialization.registerClass(Embedding);
//# sourceMappingURL=embeddings.js.map
}, function(modId) { var map = {"../backend/tfjs_backend":1553229508431,"../constraints":1553229508424,"../engine/topology":1553229508438,"../errors":1553229508428,"../initializers":1553229508430,"../regularizers":1553229508460,"../utils/generic_utils":1553229508427,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508466, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Merge Layers.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var K = require("../backend/tfjs_backend");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var losses_1 = require("../losses");
var generic_utils = require("../utils/generic_utils");
var mathUtils = require("../utils/math_utils");
var types_utils_1 = require("../utils/types_utils");
/**
 * Generic Merge layer for element-wise merge functions.
 *
 * Used to implement `Sum`, `Average`, `Concatenate`, etc.
 */
var Merge = /** @class */ (function (_super) {
    __extends(Merge, _super);
    function Merge(args) {
        var _this = _super.call(this, args || {}) || this;
        _this.supportsMasking = true;
        return _this;
    }
    /**
     * Logic for merging multiple tensors, to be overridden by subclasses.
     * @param inputs
     */
    Merge.prototype.mergeFunction = function (inputs) {
        throw new errors_1.NotImplementedError();
    };
    /**
     * Computes the shape of the result of an elementwise operation.
     *
     * @param shape1: Shape of the first tensor.
     * @param shape2: Shape of the second tensor.
     * @returns Expected output shape when an elementwise operation is carried
     *   out on 2 tensors with shapes `shape1` and `shape2`.
     * @throws ValueError: If `shape1` and `shape2` are not compatible for
     *   element-wise operations.
     */
    Merge.prototype.computeElementwiseOpOutputShape = function (shape1, shape2) {
        if (shape1 == null || shape2 == null) {
            return null;
        }
        else if (shape1.length < shape2.length) {
            return this.computeElementwiseOpOutputShape(shape2, shape1);
        }
        else if (shape2.length === 0) {
            return shape1;
        }
        var outputShape = shape1.slice(0, shape1.length - shape2.length);
        for (var k = 0; k < shape2.length; ++k) {
            var i = shape1[shape1.length - shape2.length + k];
            var j = shape2[k];
            if (i == null || j == null || i < 0 || j < 0) {
                outputShape.push(null);
            }
            else if (i === 1) {
                outputShape.push(j);
            }
            else if (j === 1) {
                outputShape.push(i);
            }
            else {
                if (i !== j) {
                    throw new errors_1.ValueError('Operands could not be broadcast together with shapes ' +
                        JSON.stringify(shape1) + ' ' + JSON.stringify(shape2));
                }
                outputShape.push(i);
            }
        }
        return outputShape;
    };
    Merge.prototype.build = function (inputShape) {
        // Used purely for shape validation.
        if (Array.isArray(inputShape) && !Array.isArray(inputShape[0])) {
            // Make sure that inputShape is an Array of shape.
            inputShape = [types_utils_1.getExactlyOneShape(inputShape)];
        }
        inputShape = inputShape;
        if (inputShape.length < 2) {
            throw new errors_1.ValueError('A merge layer should be called on an Array of at least 2 inputs.' +
                (" Got " + inputShape.length + " input(s)."));
        }
        // Make sure that there is at most one unique batch size among the input
        // shapes.
        var batchSizes = [];
        for (var _i = 0, inputShape_1 = inputShape; _i < inputShape_1.length; _i++) {
            var shape = inputShape_1[_i];
            if (shape != null && shape[0] !== null) {
                batchSizes.push(shape[0]);
            }
        }
        batchSizes = generic_utils.unique(batchSizes);
        if (batchSizes.length > 1) {
            throw new errors_1.ValueError("Can not merge tensors with different batch sizes. " +
                ("Got tensors with shapes: " + JSON.stringify(inputShape) + "."));
        }
        var outputShape = inputShape[0] == null ? null : inputShape[0].slice(1);
        for (var i = 1; i < inputShape.length; ++i) {
            var shape = inputShape[i] == null ? null : inputShape[i].slice(1);
            outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
        }
        // If the inputs have different ranks, we have to reshape them to make them
        // broadcastable.
        var allRanks = inputShape.map(function (shape) { return shape.length; });
        if (inputShape.indexOf(null) === -1 &&
            generic_utils.unique(allRanks).length === 1) {
            this.reshapeRequired = false;
        }
        else {
            this.reshapeRequired = true;
        }
    };
    Merge.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = inputs;
            if (_this.reshapeRequired) {
                var reshapedInputs = [];
                var inputDims = inputs.map(function (input) { return input.rank; });
                if (inputDims.indexOf(null) === -1) {
                    // If ranks of all inputs are available, we simply expand each of them
                    // at axis=1 until all of them have the same rank.
                    var maxNDim = mathUtils.max(inputDims);
                    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
                        var x = inputs_1[_i];
                        var xNDim = x.rank;
                        for (var k = 0; k < maxNDim - xNDim; ++k) {
                            x = K.expandDims(x, 1);
                        }
                        reshapedInputs.push(x);
                    }
                    return _this.mergeFunction(reshapedInputs);
                }
                else {
                    // Transpose all inputs so that batch size is the last dimension.
                    // [batchSize, dim1, dim2, ...] -> [dim1, dim2, ..., batchSize]
                    var transposed = false;
                    for (var _a = 0, inputs_2 = inputs; _a < inputs_2.length; _a++) {
                        var x = inputs_2[_a];
                        var xNDim = x.rank;
                        if (xNDim == null) {
                            var xShape = x.shape;
                            var batchSize = xShape[0];
                            var newShape = xShape.slice(1).concat([batchSize]);
                            var xTransposed = x.reshape([batchSize].concat(mathUtils.arrayProd(xShape.slice(1))));
                            xTransposed = tfc.transpose(xTransposed, [1, 0]);
                            xTransposed = xTransposed.reshape(newShape);
                            reshapedInputs.push(xTransposed);
                            transposed = true;
                        }
                        else if (xNDim > 1) {
                            var dims = mathUtils.range(1, xNDim).concat([0]);
                            reshapedInputs.push(tfc.transpose(x, dims));
                            transposed = true;
                        }
                        else {
                            // We don't transpose inputs if they are 1D vectors or scalars.
                            reshapedInputs.push(x);
                        }
                    }
                    var y = _this.mergeFunction(reshapedInputs);
                    var yNDim = y.rank;
                    if (transposed) {
                        // If inputs have been transposed, we have to transpose the output
                        // too.
                        if (yNDim == null) {
                            var yShape = y.shape;
                            var yNDim_1 = yShape.length;
                            var batchSize = yShape[yNDim_1 - 1];
                            var newShape = [batchSize].concat(yShape.slice(0, yShape.length - 1));
                            y = tfc.transpose(y.reshape([-1, batchSize]), [1, 0])
                                .reshape(newShape);
                        }
                        else if (yNDim > 1) {
                            var dims = [yNDim - 1].concat(mathUtils.range(0, yNDim - 1));
                            y = tfc.transpose(y, dims);
                        }
                    }
                    return y;
                }
            }
            else {
                return _this.mergeFunction(inputs);
            }
        });
    };
    Merge.prototype.computeOutputShape = function (inputShape) {
        inputShape = inputShape;
        var outputShape;
        if (inputShape[0] == null) {
            outputShape = null;
        }
        else {
            outputShape = inputShape[0].slice(1);
        }
        for (var i = 1; i < inputShape.length; ++i) {
            var shape = inputShape[i] == null ? null : inputShape[i].slice(1);
            outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
        }
        var batchSizes = [];
        for (var _i = 0, inputShape_2 = inputShape; _i < inputShape_2.length; _i++) {
            var shape = inputShape_2[_i];
            if (shape != null && shape[0] !== null) {
                batchSizes.push(shape[0]);
            }
        }
        batchSizes = generic_utils.unique(batchSizes);
        if (batchSizes.length === 1) {
            outputShape = batchSizes.concat(outputShape);
        }
        else {
            outputShape = [null].concat(outputShape);
        }
        return outputShape;
    };
    Merge.prototype.computeMask = function (inputs, mask) {
        return tfc.tidy(function () {
            if (mask == null) {
                return null;
            }
            if (!Array.isArray(mask)) {
                throw new errors_1.ValueError('`mask` should be an Array');
            }
            if (!Array.isArray(inputs)) {
                throw new errors_1.ValueError('`inputs` should be an Array');
            }
            if (mask.length !== inputs.length) {
                throw new errors_1.ValueError("The Array 'inputs' and 'mask' are expected to have the same " +
                    "length, but have different lengths " +
                    ("(" + inputs.length + " vs " + mask.length + ")"));
            }
            if (mask.every(function (m) { return m == null; })) {
                return null;
            }
            mask = mask.map(function (m) { return m == null ? m : tfc.expandDims(m, 0); });
            var output = mask[0];
            for (var i = 1; i < mask.length - 1; ++i) {
                output = tfc.logicalAnd(output, mask[i]);
            }
            return output;
        });
    };
    return Merge;
}(topology_1.Layer));
exports.Merge = Merge;
/**
 * Layer that performs element-wise addition on an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape, and returns a
 * single tensor (also of the same shape). The inputs are specified as an
 * `Array` when the `apply` method of the `Add` layer instance is called. For
 * example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const addLayer = tf.layers.add();
 * const sum = addLayer.apply([input1, input2]);
 * console.log(JSON.stringify(sum.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 */
var Add = /** @class */ (function (_super) {
    __extends(Add, _super);
    function Add(args) {
        return _super.call(this, args) || this;
    }
    Add.prototype.mergeFunction = function (inputs) {
        return tfjs_core_1.tidy(function () {
            var output = inputs[0].clone();
            for (var i = 1; i < inputs.length; ++i) {
                output = tfc.add(output, inputs[i]);
            }
            return output;
        });
    };
    /** @nocollapse */
    Add.className = 'Add';
    return Add;
}(Merge));
exports.Add = Add;
tfjs_core_1.serialization.registerClass(Add);
/**
 * Calculate the element-wise sum of inputs, which all have the same shape.
 *
 * This function can be invoked in three ways.
 *
 * 1. Construct an instance of `Add` layer, by using no input argument
 *    or a single configuration argument. The resultant `Add` layer can then
 *    be used on `tf.SymbolicTensor`s or `tf.Tensor`s. For example:
 *
 * ```js
 * const addLayer = tf.layers.add();
 *
 * // The layer can be applied to inputs.
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = addLayer.apply([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 2. Invoke directly on an `Array` of `tf.SymbolicTensor`s. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.SymbolicTensor`. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = tf.layers.add([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 3. Invoke directly on `tf.Tensor`s, i.e., concrete values. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.Tensor` as the result of the computation. For
 * example:
 *
 * ```js
 * const input1 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const input2 = tf.tensor2d([10, 20, 30, 40], [2, 2]);
 * tf.layers.add([input1, input2]).print();
 * // Gives [[11, 22], [33, 44]].
 *
 */
function add(config) {
    if (Array.isArray(config)) {
        var layer = new Add({});
        return layer.apply(config);
    }
    else {
        return new Add(config);
    }
}
exports.add = add;
/**
 * Layer that multiplies (element-wise) an `Array` of inputs.
 *
 * It takes as input an Array of tensors, all of the same
 * shape, and returns a single tensor (also of the same shape).
 * For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const input3 = tf.input({shape: [2, 2]});
 * const multiplyLayer = tf.layers.multiply();
 * const product = multiplyLayer.apply([input1, input2, input3]);
 * console.log(product.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 */
var Multiply = /** @class */ (function (_super) {
    __extends(Multiply, _super);
    function Multiply(args) {
        return _super.call(this, args) || this;
    }
    Multiply.prototype.mergeFunction = function (inputs) {
        return tfjs_core_1.tidy(function () {
            var output = inputs[0].clone();
            for (var i = 1; i < inputs.length; ++i) {
                output = tfc.mul(output, inputs[i]);
            }
            return output;
        });
    };
    /** @nocollapse */
    Multiply.className = 'Multiply';
    return Multiply;
}(Merge));
exports.Multiply = Multiply;
tfjs_core_1.serialization.registerClass(Multiply);
/**
 * Calculate the element-wise product of inputs, which all have the same shape.
 *
 * This function can be invoked in three ways.
 *
 * 1. Construct an instance of `Multiply` layer, by using no input argument
 *    or a single configuration argument. The resultant `Multiply` layer can
 *    then be used on `tf.SymbolicTensor`s or `tf.Tensor`s. For example:
 *
 * ```js
 * const multiplyLayer = tf.layers.multiply();
 *
 * // The layer can be applied to inputs.
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = multiplyLayer.apply([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 2. Invoke directly on an `Array` of `tf.SymbolicTensor`s. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.SymbolicTensor`. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = tf.layers.multiply([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 3. Invoke directly on `tf.Tensor`s, i.e., concrete values. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.Tensor` as the result of the computation. For
 * example:
 *
 * ```js
 * const input1 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const input2 = tf.tensor2d([10, 20, 30, 40], [2, 2]);
 * tf.layers.multiply([input1, input2]).print();
 * // Gives [[10, 40], [90, 160]].
 *
 */
function multiply(config) {
    if (Array.isArray(config)) {
        var layer = new Multiply({});
        return layer.apply(config);
    }
    else {
        return new Multiply(config);
    }
}
exports.multiply = multiply;
/**
 * Layer that performs element-wise averaging on an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape, and returns a
 * single tensor (also of the same shape). For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const averageLayer = tf.layers.average();
 * const average = averageLayer.apply([input1, input2]);
 * console.log(JSON.stringify(average.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 */
var Average = /** @class */ (function (_super) {
    __extends(Average, _super);
    function Average(args) {
        return _super.call(this, args) || this;
    }
    Average.prototype.mergeFunction = function (inputs) {
        return tfjs_core_1.tidy(function () {
            var output = inputs[0].clone();
            for (var i = 1; i < inputs.length; ++i) {
                output = tfc.add(output, inputs[i]);
            }
            return tfc.mul(state_1.getScalar(1 / inputs.length), output);
        });
    };
    /** @nocollapse */
    Average.className = 'Average';
    return Average;
}(Merge));
exports.Average = Average;
tfjs_core_1.serialization.registerClass(Average);
/**
 * Calculate the element-wise arithmetic mean of inputs, which all have the same
 * shape.
 *
 * This function can be invoked in three ways.
 *
 * 1. Construct an instance of `Average` layer, by using no input argument
 *    or a single configuration argument. The resultant `Average` layer can then
 *    be used on `tf.SymbolicTensor`s or `tf.Tensor`s. For example:
 *
 * ```js
 * const averageLayer = tf.layers.average();
 *
 * // The layer can be applied to inputs.
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = averageLayer.apply([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 2. Invoke directly on an `Array` of `tf.SymbolicTensor`s. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.SymbolicTensor`. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = tf.layers.average([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 3. Invoke directly on `tf.Tensor`s, i.e., concrete values. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.Tensor` as the result of the computation. For
 * example:
 *
 * ```js
 * const input1 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const input2 = tf.tensor2d([10, 20, 30, 40], [2, 2]);
 * tf.layers.average([input1, input2]).print();
 * // Gives [[5.5, 11], [16.5, 22]].
 *
 */
function average(config) {
    if (Array.isArray(config)) {
        var layer = new Average({});
        return layer.apply(config);
    }
    else {
        return new Average(config);
    }
}
exports.average = average;
/**
 * Layer that computes the element-wise maximum an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape and returns a
 * single tensor (also of the same shape). For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const maxLayer = tf.layers.maximum();
 * const max = maxLayer.apply([input1, input2]);
 * console.log(JSON.stringify(max.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 */
var Maximum = /** @class */ (function (_super) {
    __extends(Maximum, _super);
    function Maximum(args) {
        return _super.call(this, args) || this;
    }
    Maximum.prototype.mergeFunction = function (inputs) {
        return tfjs_core_1.tidy(function () {
            var output = inputs[0];
            for (var i = 1; i < inputs.length; ++i) {
                output = tfc.maximum(output, inputs[i]);
            }
            return output;
        });
    };
    /** @nocollapse */
    Maximum.className = 'Maximum';
    return Maximum;
}(Merge));
exports.Maximum = Maximum;
tfjs_core_1.serialization.registerClass(Maximum);
/**
 * Calculate the element-wise maximum of inputs, which all have the same shape.
 *
 * This function can be invoked in three ways.
 *
 * 1. Construct an instance of `Maximum` layer, by using no input argument
 *    or a single configuration argument. The resultant `Maximum` layer can then
 *    be used on `tf.SymbolicTensor`s or `tf.Tensor`s. For example:
 *
 * ```js
 * const maximumLayer = tf.layers.maximum();
 *
 * // The layer can be applied to inputs.
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = maximumLayer.apply([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 2. Invoke directly on an `Array` of `tf.SymbolicTensor`s. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.SymbolicTensor`. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = tf.layers.maximum([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 3. Invoke directly on `tf.Tensor`s, i.e., concrete values. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.Tensor` as the result of the computation. For
 * example:
 *
 * ```js
 * const input1 = tf.tensor2d([1, 20, 3, 40], [2, 2]);
 * const input2 = tf.tensor2d([10, 2, 30, 4], [2, 2]);
 * tf.layers.maximum([input1, input2]).print();
 * // Gives [[10, 20], [30, 40]].
 *
 */
function maximum(config) {
    if (Array.isArray(config)) {
        var layer = new Maximum({});
        return layer.apply(config);
    }
    else {
        return new Maximum(config);
    }
}
exports.maximum = maximum;
/**
 * Layer that computes the element-wise minimum of an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape and returns a
 * single tensor (also of the same shape). For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const minLayer = tf.layers.minimum();
 * const min = minLayer.apply([input1, input2]);
 * console.log(JSON.stringify(min.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 */
var Minimum = /** @class */ (function (_super) {
    __extends(Minimum, _super);
    function Minimum(args) {
        return _super.call(this, args) || this;
    }
    Minimum.prototype.mergeFunction = function (inputs) {
        return tfjs_core_1.tidy(function () {
            var output = inputs[0];
            for (var i = 1; i < inputs.length; ++i) {
                output = tfc.minimum(output, inputs[i]);
            }
            return output;
        });
    };
    /** @nocollapse */
    Minimum.className = 'Minimum';
    return Minimum;
}(Merge));
exports.Minimum = Minimum;
tfjs_core_1.serialization.registerClass(Minimum);
/**
 * Calculate the element-wise minimum of inputs, which all have the same shape.
 *
 * This function can be invoked in three ways.
 *
 * 1. Construct an instance of `Minimum` layer, by using no input argument
 *    or a single configuration argument. The resultant `Minimum` layer can then
 *    be used on `tf.SymbolicTensor`s or `tf.Tensor`s. For example:
 *
 * ```js
 * const minimumLayer = tf.layers.minimum();
 *
 * // The layer can be applied to inputs.
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = minimumLayer.apply([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 2. Invoke directly on an `Array` of `tf.SymbolicTensor`s. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.SymbolicTensor`. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const output = tf.layers.minimum([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * 3. Invoke directly on `tf.Tensor`s, i.e., concrete values. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.Tensor` as the result of the computation. For
 * example:
 *
 * ```js
 * const input1 = tf.tensor2d([1, 20, 3, 40], [2, 2]);
 * const input2 = tf.tensor2d([10, 2, 30, 4], [2, 2]);
 * tf.layers.minimum([input1, input2]).print();
 * // Gives [[1, 2], [3, 4]].
 *
 */
function minimum(config) {
    if (Array.isArray(config)) {
        var layer = new Minimum({});
        return layer.apply(config);
    }
    else {
        return new Minimum(config);
    }
}
exports.minimum = minimum;
/**
 * Layer that concatenates an `Array` of inputs.
 *
 * It takes a list of tensors, all of the same shape except for the
 * concatenation axis, and returns a single tensor, the concatenation
 * of all inputs. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 3]});
 * const concatLayer = tf.layers.concatenate();
 * const output = concatLayer.apply([input1, input2]);
 * console.log(JSON.stringify(output.shape));
 * // You get [null, 2, 5], with the first dimension as the undetermined batch
 * // dimension. The last dimension (5) is the result of concatenating the
 * // last dimensions of the inputs (2 and 3).
 * ```
 */
var Concatenate = /** @class */ (function (_super) {
    __extends(Concatenate, _super);
    function Concatenate(args) {
        var _this = _super.call(this, args) || this;
        _this.DEFAULT_AXIS = -1;
        if (args == null) {
            args = {};
        }
        _this.axis = args.axis == null ? _this.DEFAULT_AXIS : args.axis;
        _this.supportsMasking = true;
        _this.reshapeRequired = false;
        return _this;
    }
    Concatenate.prototype.build = function (inputShape) {
        // Used purely for shape validation.]
        if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0])) ||
            inputShape.length === 1) {
            throw new errors_1.ValueError('A `Concatenate` layer should be called on a list of at least 2 ' +
                'inputs');
        }
        inputShape = inputShape;
        var allNoneShape = true;
        for (var _i = 0, inputShape_3 = inputShape; _i < inputShape_3.length; _i++) {
            var shape = inputShape_3[_i];
            if (shape != null) {
                allNoneShape = false;
                break;
            }
        }
        if (allNoneShape) {
            return;
        }
        var shapeSet = [];
        for (var i = 0; i < inputShape.length; ++i) {
            var shapeWithoutConcatAxis = inputShape[i].slice();
            shapeWithoutConcatAxis.splice(this.axis, 1);
            var exists = false;
            for (var _a = 0, shapeSet_1 = shapeSet; _a < shapeSet_1.length; _a++) {
                var shape = shapeSet_1[_a];
                if (tfjs_core_1.util.arraysEqual(shape, shapeWithoutConcatAxis)) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                shapeSet.push(shapeWithoutConcatAxis);
            }
        }
        if (shapeSet.length > 1) {
            throw new errors_1.ValueError('A `Concatenate` layer requires inputs with matching shapes ' +
                'except for the concat axis. Got input shapes: ' +
                JSON.stringify(inputShape));
        }
    };
    Concatenate.prototype.mergeFunction = function (inputs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            return K.concatenate(inputs, _this.axis);
        });
    };
    Concatenate.prototype.computeOutputShape = function (inputShape) {
        if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0]))) {
            throw new errors_1.ValueError('A `Concatenate` layer should be called on a list of inputs.');
        }
        var inputShapes = inputShape;
        var outputShape = inputShapes[0].slice();
        var axis = this.axis < 0 ? outputShape.length + this.axis : this.axis;
        // Porting Note: the line above is because TypeScript doesn't support
        //   negative indices.
        for (var _i = 0, _a = inputShapes.slice(1); _i < _a.length; _i++) {
            var shape = _a[_i];
            if (outputShape[axis] == null || shape[axis] == null) {
                outputShape[axis] = null;
                break;
            }
            outputShape[axis] += shape[axis];
        }
        return outputShape;
    };
    Concatenate.prototype.computeMask = function (inputs, mask) {
        var _this = this;
        if (mask == null) {
            return null;
        }
        if (!Array.isArray(mask)) {
            throw new errors_1.ValueError('`mask` should be an array for Concatenate');
        }
        if (!Array.isArray(inputs)) {
            throw new errors_1.ValueError('`inputs` should be an array for Concatenate');
        }
        if (mask.length !== inputs.length) {
            throw new errors_1.ValueError("Mismatch in the length of mask (" + mask.length + ") " +
                ("and the legnth of inputs (" + inputs.length + ")"));
        }
        return tfc.tidy(function () {
            var allNullMasks = true;
            mask.forEach(function (m) {
                if (m != null) {
                    allNullMasks = false;
                    return;
                }
            });
            if (allNullMasks) {
                return null;
            }
            var outputMasks = [];
            for (var i = 0; i < inputs.length; ++i) {
                if (mask[i] == null) {
                    // Input is unmasked. Append all 1's to masks.
                    outputMasks.push(tfc.onesLike(inputs[i]).asType('bool'));
                }
                else if (mask[i].rank < inputs[i].rank) {
                    // Mask is smaller than the input, expand it.
                    outputMasks.push(tfc.expandDims(mask[i], -1));
                }
                else {
                    outputMasks.push(mask[i]);
                }
            }
            var concatenatedMasks = tfc.concat(outputMasks, _this.axis);
            return tfc.all(concatenatedMasks, -1, false);
        });
    };
    Concatenate.prototype.getConfig = function () {
        var config = {
            'axis': this.axis,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Concatenate.className = 'Concatenate';
    return Concatenate;
}(Merge));
exports.Concatenate = Concatenate;
tfjs_core_1.serialization.registerClass(Concatenate);
/**
 * Concatenate an `Array` of inputs.
 *
 * This function can be invoked in three ways.
 *
 * 1. Construct an instance of `Concatenate` layer, by using no input argument
 *    or a single configuration argument. The resultant `Concatenate` layer can
 *    then be used on `tf.SymbolicTensor`s or `tf.Tensor`s. For example:
 *
 * ```js
 * const concatLayer = tf.layers.concatenate();
 *
 * // The layer can be applied to inputs.
 * const input1 = tf.input({shape: [2, 3]});
 * const input2 = tf.input({shape: [2, 4]});
 * const output = concatLayer.apply([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 7], with the first dimension as the undetermined batch
 * // dimension and the last dimension as the result of concatenating the
 * // last dimensions of the two inputs.
 * ```
 *
 * 2. Invoke directly on an `Array` of `tf.SymbolicTensor`s. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.SymbolicTensor`. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 3]});
 * const input2 = tf.input({shape: [2, 4]});
 * const output = tf.layers.concatenate([input1, input2]);
 * console.log(output.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension and the last dimension as the result of concatenating the
 * // last dimensions of the two inputs.
 * ```
 *
 * 3. Invoke directly on `tf.Tensor`s, i.e., concrete values. This constructs
 *    an `Layer` object internally and calls its `apply` method on the inputs,
 *    generating a new `tf.Tensor` as the result of the computation. For
 * example:
 *
 * ```js
 * const input1 = tf.tensor2d([[1, 2], [3, 4]], [2, 2]);
 * const input2 = tf.tensor2d([[10, 20], [30, 40]], [2, 2]);
 * tf.layers.concatenate([input1, input2]).print();
 * // Gives [[1, 2, 10, 20], [3, 4, 30, 40]].
 *
 */
function concatenate(config) {
    if (Array.isArray(config)) {
        var layer = new Concatenate({});
        return layer.apply(config);
    }
    else {
        return new Concatenate(config);
    }
}
exports.concatenate = concatenate;
/**
 * Interpretable potentially negative axis index.
 *
 * For example, given axis = -1, and dim = 3, this function will return 2.
 *
 * @param axis The axis index, may be a positive, zero or negative integer.
 * @param dim Total number of dimensions, a positive integer.
 * @returns A non-negative axis index equivalent to the input `axis`.
 */
function interpretAxis(axis, dim) {
    while (axis < 0) {
        axis += dim;
    }
    return axis;
}
function batchDot(x, y, axes) {
    if (x.shape.length > 3 || y.shape.length > 3) {
        throw new errors_1.NotImplementedError('batchDot is not implemented for tensors of 4D or higher rank yet');
    }
    tfc.util.assert(x.shape.length >= 2, function () { return "batchDot requires the rank of x to be >= 2, " +
        ("but got " + x.shape.length); });
    tfc.util.assert(x.shape.length >= 2, function () { return "batchDot requires the rank of y to be >= 2, " +
        ("but got " + y.shape.length); });
    if (typeof axes === 'number') {
        axes = [axes, axes];
    }
    if (x.dtype === 'complex64' || y.dtype === 'complex64') {
        throw new errors_1.NotImplementedError('batchDot is not implemented for complex64-type Tensors yet.');
    }
    var xNDim = x.shape.length;
    var yNDim = y.shape.length;
    if (axes == null) {
        // Behave like batchMatmul by default.
        axes = [xNDim - 1, yNDim - 2];
    }
    var axesArray = axes;
    return tfc.tidy(function () {
        var diff;
        if (xNDim > yNDim) {
            diff = xNDim - yNDim;
            var diffShape = [];
            for (var i = 0; i < diff; ++i) {
                diffShape.push(1);
            }
            y = y.reshape(y.shape.concat(diffShape));
        }
        else if (yNDim > xNDim) {
            diff = yNDim - xNDim;
            var diffShape = [];
            for (var i = 0; i < diff; ++i) {
                diffShape.push(1);
            }
            x = x.reshape(x.shape.concat(diffShape));
        }
        else {
            diff = 0;
        }
        var out;
        if (x.shape.length === 2 && y.shape.length === 2) {
            if (axesArray[0] === axesArray[1]) {
                out = x.mulStrict(y).sum(axesArray[0]);
            }
            else {
                out = x.transpose([1, 0]).mulStrict(y).sum(axesArray[1]);
            }
        }
        else {
            var adjX = axesArray[0] !== x.shape.length - 1;
            var adjY = axesArray[1] === y.shape.length - 1;
            out = x.matMul(y, adjX, adjY);
        }
        if (diff > 0) {
            var idx = void 0;
            if (xNDim > yNDim) {
                idx = xNDim + yNDim - 3;
            }
            else {
                idx = xNDim - 1;
            }
            var squeezeAxes = [];
            for (var i = idx; i < idx + diff; ++i) {
                squeezeAxes.push(i);
            }
            out = out.squeeze(squeezeAxes);
        }
        if (out.shape.length === 1) {
            out = out.expandDims(1);
        }
        return out;
    });
}
/**
 * Layer that computes a dot product between samples in two tensors.
 *
 * E.g., if applied to a list of two tensors `a` and `b` both of shape
 * `[batchSize, n]`, the output will be a tensor of shape `[batchSize, 1]`,
 * where each entry at index `[i, 0]` will be the dot product between
 * `a[i, :]` and `b[i, :]`.
 *
 * Example:
 *
 * ```js
 * const dotLayer = tf.layers.dot({axes: -1});
 * const x1 = tf.tensor2d([[10, 20], [30, 40]]);
 * const x2 = tf.tensor2d([[-1, -2], [-3, -4]]);
 *
 * // Invoke the layer's apply() method in eager (imperative) mode.
 * const y = dotLayer.apply([x1, x2]);
 * y.print();
 * ```
 */
var Dot = /** @class */ (function (_super) {
    __extends(Dot, _super);
    function Dot(args) {
        var _this = _super.call(this, args) || this;
        _this.axes = args.axes;
        _this.normalize = args.normalize == null ? false : args.normalize;
        _this.supportsMasking = true;
        _this.reshapeRequired = false;
        return _this;
    }
    Dot.prototype.build = function (inputShape) {
        tfc.util.assert(Array.isArray(inputShape) && inputShape.length === 2 &&
            Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]), function () { return 'A `Dot` layer should be called on a list of exactly 2 inputs.'; });
        var shape1 = inputShape[0];
        var shape2 = inputShape[1];
        if (shape1.length > 3 || shape2.length > 3) {
            throw new errors_1.NotImplementedError('Dot layer does not support tensors of 4D or higher rank yet.');
        }
        var axes = this.interpretAxes(shape1, shape2);
        if (shape1[axes[0]] !== shape2[axes[1]]) {
            throw new errors_1.ValueError("Dimension incompatibility: " +
                (shape1[axes[0]] + " !== " + shape2[axes[1]]));
        }
    };
    Dot.prototype.mergeFunction = function (inputs) {
        if (inputs.length !== 2) {
            throw new errors_1.ValueError('A `Dot` layer must be called on exactly 2 inputs, ' +
                ("but received " + inputs.length + " input(s)."));
        }
        var x1 = inputs[0];
        var x2 = inputs[1];
        var axes;
        if (!Array.isArray(this.axes)) {
            axes = [
                interpretAxis(this.axes, x1.shape.length),
                interpretAxis(this.axes, x2.shape.length)
            ];
        }
        else {
            axes = this.axes.map(function (axis, i) { return interpretAxis(axis, inputs[i].shape.length); });
        }
        if (this.normalize) {
            x1 = losses_1.l2Normalize(x1, axes[0]);
            x2 = losses_1.l2Normalize(x2, axes[1]);
        }
        return batchDot(x1, x2, axes);
    };
    Dot.prototype.interpretAxes = function (shape1, shape2) {
        var axes;
        if (!Array.isArray(this.axes)) {
            // `this.axes` is a single integer.
            axes = [
                interpretAxis(this.axes, shape1.length),
                interpretAxis(this.axes, shape2.length)
            ];
        }
        else {
            // `this.axes` is an Array of integers.
            axes = this.axes;
        }
        return axes;
    };
    Dot.prototype.computeOutputShape = function (inputShape) {
        tfc.util.assert(Array.isArray(inputShape) && inputShape.length === 2 &&
            Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]), function () { return 'A `Dot` layer should be called on a list of exactly 2 inputs.'; });
        var shape1 = inputShape[0].slice();
        var shape2 = inputShape[1].slice();
        if (shape1.length > 3 || shape2.length > 3) {
            throw new errors_1.NotImplementedError('Dot layer does not support tensors of 4D or higher rank yet.');
        }
        var axes = this.interpretAxes(shape1, shape2);
        shape1.splice(axes[0], 1);
        shape2.splice(axes[1], 1);
        shape2.splice(0, 1);
        var outputShape = shape1.concat(shape2);
        if (outputShape.length === 1) {
            outputShape.push(1);
        }
        return outputShape;
    };
    Dot.prototype.computeMask = function (inputs, mask) {
        return null;
    };
    Dot.prototype.getConfig = function () {
        var config = {
            'axes': this.axes,
            'normalize': this.normalize
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Dot.className = 'Dot';
    return Dot;
}(Merge));
exports.Dot = Dot;
tfjs_core_1.serialization.registerClass(Dot);
// TODO(cais): Add functional interfaces for the merge layers.
//# sourceMappingURL=merge.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../backend/tfjs_backend":1553229508431,"../engine/topology":1553229508438,"../errors":1553229508428,"../losses":1553229508446,"../utils/generic_utils":1553229508427,"../utils/math_utils":1553229508434,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508467, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Normalization layers.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var constraints_1 = require("../constraints");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var regularizers_1 = require("../regularizers");
var generic_utils = require("../utils/generic_utils");
var math_utils = require("../utils/math_utils");
var types_utils_1 = require("../utils/types_utils");
/**
 * Applies batch normalization on x given mean, var, beta and gamma.
 *
 * I.e. returns:
 *   `output = (x - mean) / (sqrt(var) + epsilon) * gamma + beta`
 *
 * @param x Input tensor.
 * @param mean Mean of batch.
 * @param variance Variance of batch.
 * @param beta Tensor with which to center the input.
 * @param gamma Tensor by which to scale the input.
 * @param epsilon Fuzz factor.
 * @returns The result of the batch normalization.
 */
function batchNormalization(x, mean, variance, beta, gamma, epsilon) {
    if (epsilon === void 0) { epsilon = 1e-3; }
    var out;
    if (x.rank === 2) {
        out = tfc.batchNorm2d(x, mean, variance, beta, gamma, epsilon);
    }
    else if (x.rank === 3) {
        // TODO(cais): Check rank; give proper error message.
        out = tfc.batchNorm3d(x, mean, variance, beta, gamma, epsilon);
    }
    else if (x.rank === 4) {
        out = tfc.batchNorm4d(x, mean, variance, beta, gamma, epsilon);
    }
    else {
        throw new errors_1.NotImplementedError("batchNormalization is not implemented for array of rank " + x.rank + " " +
            "yet");
    }
    return out;
}
exports.batchNormalization = batchNormalization;
/**
 * Non-broadcasting batch normalization for use in training (not inference).
 *
 * The input is normalized to zero mean and unit variance along the
 * `reductionAxes`, followed by scaling with `gamma` and shifted by `beta`.
 * The result of that is returned as the first element
 * of the returned `Array`. The other two elements are the mean and variance,
 * respectively.
 *
 * @param x Input tensor to be normalized.
 * @param gamma Tensor by which to scale the input.
 * @param beta Tensor by which to center the input.
 * @param reductionAxes Axes over which to normalize.
 * @param epsilon Fuzz factor.
 * @returns An `Array` of three `Tensors`:
 *   [normalized tensor, mean of input, variance of input].
 */
function regularNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon) {
    if (epsilon === void 0) { epsilon = 1e-3; }
    return tfjs_core_1.tidy(function () {
        var meanAndVariance = tfc.moments(x, reductionAxes);
        var mean = meanAndVariance.mean;
        var variance = meanAndVariance.variance;
        var normed = batchNormalization(x, mean, variance, beta, gamma, epsilon);
        return [normed, mean, variance];
    });
}
/**
 * Broadcasting batch normalization for use in training (not inference).
 *
 * The input is normalized to zero mean and unit variance along the
 * `reductionAxes`, followed by scaling with `gamma` and shifted by `beta`.
 * The result of that is returned as the first element
 * of the returned `Array`. The other two elements are the mean and variance,
 * respectively.
 *
 * @param x Input tensor to be normalized.
 * @param gamma Tensor by which to scale the input.
 * @param beta Tensor by which to center the input.
 * @param reductionAxes Axes over which to normalize.
 * @param epsilon Fuzz factor.
 * @returns An `Array` of three `Tensors`:
 *   [normalized tensor, mean of input, variance of input].
 */
function broadcastNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon) {
    if (epsilon === void 0) { epsilon = 1e-3; }
    return tfjs_core_1.tidy(function () {
        var meanAndVariance = tfc.moments(x, reductionAxes);
        var mean = meanAndVariance.mean;
        var variance = meanAndVariance.variance;
        var targetShape = [];
        for (var _i = 0, _a = math_utils.range(0, x.rank); _i < _a.length; _i++) {
            var axis = _a[_i];
            if (reductionAxes.indexOf(axis) !== -1) {
                targetShape.push(1);
            }
            else {
                targetShape.push(x.shape[axis]);
            }
        }
        var broadcastMean = mean.reshape(targetShape);
        var broadcastVariance = variance.reshape(targetShape);
        var broadcastGamma = gamma == null ? null : gamma.reshape(targetShape);
        var broadcastBeta = beta == null ? null : beta.reshape(targetShape);
        var normed = batchNormalization(x, broadcastMean, broadcastVariance, broadcastBeta, broadcastGamma, epsilon);
        return [normed, mean, variance];
    });
}
/**
 * Batch normalization for use in training (not inference).
 *
 * @param x Input tensor to be normalized.
 * @param gamma Tensor by which to scale the input.
 * @param beta Tensor by which to center the input.
 * @param reductionAxes Axes over which to normalize.
 * @param epsilon Fuzz factor.
 * @returns An `Array` of three `Tensors`:
 *   [normalized tensor, mean of input, variance of input].
 */
function normalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon) {
    if (epsilon === void 0) { epsilon = 1e-3; }
    if (tfjs_core_1.util.arraysEqual(reductionAxes.slice().sort(), math_utils.range(0, x.rank - 1))) {
        return regularNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon);
    }
    else {
        return broadcastNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon);
    }
}
exports.normalizeBatchInTraining = normalizeBatchInTraining;
/**
 * Batch normalization layer (Ioffe and Szegedy, 2014).
 *
 * Normalize the activations of the previous layer at each batch,
 * i.e. applies a transformation that maintains the mean activation
 * close to 0 and the activation standard deviation close to 1.
 *
 * Input shape:
 *   Arbitrary. Use the keyword argument `inputShape` (Array of integers, does
 *   not include the sample axis) when calling the constructor of this class,
 *   if this layer is used as a first layer in a model.
 *
 * Output shape:
 *   Same shape as input.
 *
 * References:
 *   - [Batch Normalization: Accelerating Deep Network Training by Reducing
 * Internal Covariate Shift](https://arxiv.org/abs/1502.03167)
 */
var BatchNormalization = /** @class */ (function (_super) {
    __extends(BatchNormalization, _super);
    function BatchNormalization(args) {
        var _this = this;
        if (args == null) {
            args = {};
        }
        _this = _super.call(this, args) || this;
        _this.supportsMasking = true;
        _this.axis = args.axis == null ? -1 : args.axis;
        _this.momentum = args.momentum == null ? 0.99 : args.momentum;
        _this.epsilon = args.epsilon == null ? 1e-3 : args.epsilon;
        _this.center = args.center == null ? true : args.center;
        _this.scale = args.scale == null ? true : args.scale;
        _this.betaInitializer = initializers_1.getInitializer(args.betaInitializer || 'zeros');
        _this.gammaInitializer = initializers_1.getInitializer(args.gammaInitializer || 'ones');
        _this.movingMeanInitializer =
            initializers_1.getInitializer(args.movingMeanInitializer || 'zeros');
        _this.movingVarianceInitializer =
            initializers_1.getInitializer(args.movingVarianceInitializer || 'ones');
        _this.betaConstraint = constraints_1.getConstraint(args.betaConstraint);
        _this.gammaConstraint = constraints_1.getConstraint(args.gammaConstraint);
        _this.betaRegularizer = regularizers_1.getRegularizer(args.betaRegularizer);
        _this.gammaRegularizer = regularizers_1.getRegularizer(args.gammaRegularizer);
        return _this;
    }
    BatchNormalization.prototype.build = function (inputShape) {
        var _a;
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var axis = this.axis >= 0 ? this.axis : (this.axis + inputShape.length);
        var dim = inputShape[axis];
        if (dim == null) {
            throw new errors_1.ValueError("Axis " + axis + " of input tensor should have a defined dimension but " +
                "the layer received an input with shape " +
                (JSON.stringify(inputShape) + "."));
        }
        this.inputSpec =
            [new topology_1.InputSpec({ ndim: inputShape.length, axes: (_a = {}, _a[axis] = dim, _a) })];
        var shape = [dim];
        if (this.scale) {
            this.gamma = this.addWeight('gamma', shape, null, this.gammaInitializer, this.gammaRegularizer, true, this.gammaConstraint);
        }
        if (this.center) {
            this.beta = this.addWeight('beta', shape, null, this.betaInitializer, this.betaRegularizer, true, this.betaConstraint);
        }
        this.movingMean = this.addWeight('moving_mean', shape, null, this.movingMeanInitializer, null, false);
        this.movingVariance = this.addWeight('moving_variance', shape, null, this.movingVarianceInitializer, null, false);
        this.built = true;
    };
    BatchNormalization.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            var training = kwargs['training'] == null ? false : kwargs['training'];
            var input = types_utils_1.getExactlyOneTensor(inputs);
            var inputShape = input.shape;
            var ndim = inputShape.length;
            var reductionAxes = math_utils.range(0, ndim);
            var axis = _this.axis >= 0 ? _this.axis : (_this.axis + ndim);
            reductionAxes.splice(axis, 1);
            var broadcastShape = generic_utils.pyListRepeat(1, ndim);
            broadcastShape[axis] = inputShape[axis];
            var sortedReductionAxes = reductionAxes.slice();
            sortedReductionAxes.sort();
            var needsBroadcasting = !tfjs_core_1.util.arraysEqual(sortedReductionAxes, math_utils.range(0, ndim).slice(0, ndim - 1));
            var normalizeInference = function () {
                if (needsBroadcasting) {
                    var broadcastMovingMean = _this.movingMean.read().reshape(broadcastShape);
                    var broadcastMovingVariance = _this.movingVariance.read().reshape(broadcastShape);
                    var broadcastBeta = _this.center ? _this.beta.read().reshape(broadcastShape) : null;
                    var broadcastGamma = _this.scale ? _this.gamma.read().reshape(broadcastShape) : null;
                    return batchNormalization(input, broadcastMovingMean, broadcastMovingVariance, broadcastBeta, broadcastGamma, _this.epsilon);
                }
                else {
                    return batchNormalization(input, _this.movingMean.read(), _this.movingVariance.read(), _this.beta == null ? null : _this.beta.read(), _this.gamma == null ? null : _this.gamma.read(), _this.epsilon);
                }
            };
            if (!training) {
                return normalizeInference();
            }
            var _a = normalizeBatchInTraining(input, _this.gamma.read(), _this.beta.read(), reductionAxes, _this.epsilon), normedTraining = _a[0], mean = _a[1], variance = _a[2];
            var doMovingAverage = function (variable, value, momentum) {
                tfc.tidy(function () {
                    var decay = state_1.getScalar(1.0).sub(state_1.getScalar(momentum));
                    var origValue = variable.read();
                    var updateDelta = origValue.sub(value).mul(decay);
                    variable.write(origValue.sub(updateDelta));
                });
            };
            // Perform updates to moving mean and moving variance for training.
            // Porting Note: In PyKeras, these updates to `movingMean` and
            //   `movingAverage` are done as a deferred Graph, added to the `Layer`'s
            //   `update`s using the `add_update()` method. Here we do it imperatively
            //   and encapsulate the updates in a function that is invoked
            //   immediately.
            var updateMovingMeanAndVariance = function () {
                doMovingAverage(_this.movingMean, mean, _this.momentum);
                doMovingAverage(_this.movingVariance, variance, _this.momentum);
            };
            updateMovingMeanAndVariance();
            return normedTraining;
        });
    };
    BatchNormalization.prototype.getConfig = function () {
        var config = {
            axis: this.axis,
            momentum: this.momentum,
            epsilon: this.epsilon,
            center: this.center,
            scale: this.scale,
            betaInitializer: initializers_1.serializeInitializer(this.betaInitializer),
            gammaInitializer: initializers_1.serializeInitializer(this.gammaInitializer),
            movingMeanInitializer: initializers_1.serializeInitializer(this.movingMeanInitializer),
            movingVarianceInitializer: initializers_1.serializeInitializer(this.movingVarianceInitializer),
            betaRegularizer: regularizers_1.serializeRegularizer(this.betaRegularizer),
            gammaRegularizer: regularizers_1.serializeRegularizer(this.gammaRegularizer),
            betaConstraint: constraints_1.serializeConstraint(this.betaConstraint),
            gammaConstraint: constraints_1.serializeConstraint(this.gammaConstraint)
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    BatchNormalization.className = 'BatchNormalization';
    return BatchNormalization;
}(topology_1.Layer));
exports.BatchNormalization = BatchNormalization;
tfjs_core_1.serialization.registerClass(BatchNormalization);
//# sourceMappingURL=normalization.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../constraints":1553229508424,"../engine/topology":1553229508438,"../errors":1553229508428,"../initializers":1553229508430,"../regularizers":1553229508460,"../utils/generic_utils":1553229508427,"../utils/math_utils":1553229508434,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508468, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Padding Layers.
 */
// Porting Note: In Python Keras, the padding layers are in convolutional.py,
//   but we decided to put them in a separate file (padding.ts) for clarity.
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var common_1 = require("../backend/common");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var types_utils_1 = require("../utils/types_utils");
/**
 * Pads the middle dimension of a 3D tensor.
 *
 * @param x Input `tf.Tensor` to be padded.
 * @param padding `Array` of 2 integers, how many zeros to add at the start and
 *   end of the middle dimension (i.e., dimension 1).
 * @return A padded 3D `tf.Tensor`.
 */
function temporalPadding(x, padding) {
    return tfjs_core_1.tidy(function () {
        if (x.rank !== 3) {
            throw new errors_1.ValueError("temporalPadding expects input tensor to be 3-D, but received a " +
                (x.rank + "-D tensor."));
        }
        if (padding == null) {
            padding = [1, 1];
        }
        if (padding.length !== 2) {
            throw new errors_1.ValueError("temporalPadding expects input padding pattern to be a length-2 " +
                ("array, but received a length-" + padding.length + " array."));
        }
        var pattern = [[0, 0], padding, [0, 0]];
        return tfc.pad(x, pattern);
    });
}
exports.temporalPadding = temporalPadding;
/**
 * Pads the 2nd and 3rd dimensions of a 4D tensor.
 *
 * @param x Input `tf.Tensor` to be padded.
 * @param padding `Array` of two `Array`s, each of which is an `Array` of two
 *   integers. The amount of padding at the beginning and end of the 2nd and 3rd
 *   dimensions, respectively.
 * @param dataFormat 'channelsLast' (default) or 'channelsFirst'.
 * @return Padded 4D `tf.Tensor`.
 */
function spatial2dPadding(x, padding, dataFormat) {
    return tfjs_core_1.tidy(function () {
        if (x.rank !== 4) {
            throw new errors_1.ValueError("temporalPadding expects input tensor to be 4-D, but received a " +
                (x.rank + "-D tensor."));
        }
        if (padding == null) {
            padding = [[1, 1], [1, 1]];
        }
        if (padding.length !== 2 || padding[0].length !== 2 ||
            padding[1].length !== 2) {
            throw new errors_1.ValueError('spatial2dPadding expects `padding` to be an Array of two Arrays, ' +
                'each of which is an Array of two integers.');
        }
        if (dataFormat == null) {
            dataFormat = common_1.imageDataFormat();
        }
        if (dataFormat !== 'channelsLast' && dataFormat !== 'channelsFirst') {
            throw new errors_1.ValueError("Unknown data format: " + dataFormat + ". " +
                "Supported data formats are 'channelsLast' and 'channelsFirst.");
        }
        var pattern;
        if (dataFormat === 'channelsFirst') {
            pattern = [[0, 0], [0, 0], padding[0], padding[1]];
        }
        else {
            pattern = [[0, 0], padding[0], padding[1], [0, 0]];
        }
        return tfc.pad(x, pattern);
    });
}
exports.spatial2dPadding = spatial2dPadding;
/**
 * Zero-padding layer for 2D input (e.g., image).
 *
 * This layer can add rows and columns of zeros
 * at the top, bottom, left and right side of an image tensor.
 *
 * Input shape:
 *   4D tensor with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, rows, cols, channels]`
 *   - If `data_format` is `"channels_first"`:
 *     `[batch, channels, rows, cols]`.
 *
 * Output shape:
 *   4D with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, paddedRows, paddedCols, channels]`
 *    - If `dataFormat` is `"channelsFirst"`:
 *     `[batch, channels, paddedRows, paddedCols]`.
 */
var ZeroPadding2D = /** @class */ (function (_super) {
    __extends(ZeroPadding2D, _super);
    function ZeroPadding2D(args) {
        var _this = this;
        if (args == null) {
            args = {};
        }
        _this = _super.call(this, args) || this;
        _this.dataFormat =
            args.dataFormat == null ? common_1.imageDataFormat() : args.dataFormat;
        // TODO(cais): Maybe refactor the following logic surrounding `padding`
        //   into a helper method.
        if (args.padding == null) {
            _this.padding = [[1, 1], [1, 1]];
        }
        else if (typeof args.padding === 'number') {
            _this.padding =
                [[args.padding, args.padding], [args.padding, args.padding]];
        }
        else {
            args.padding = args.padding;
            if (args.padding.length !== 2) {
                throw new errors_1.ValueError("ZeroPadding2D expects padding to be a length-2 array, but " +
                    ("received a length-" + args.padding.length + " array."));
            }
            var heightPadding = void 0;
            var widthPadding = void 0;
            if (typeof args.padding[0] === 'number') {
                heightPadding = [args.padding[0], args.padding[0]];
                widthPadding = [args.padding[1], args.padding[1]];
            }
            else {
                args.padding = args.padding;
                if (args.padding[0].length !== 2) {
                    throw new errors_1.ValueError("ZeroPadding2D expects height padding to be a length-2 array, " +
                        ("but received a length-" + args.padding[0].length + " array."));
                }
                heightPadding = args.padding[0];
                if (args.padding[1].length !== 2) {
                    throw new errors_1.ValueError("ZeroPadding2D expects width padding to be a length-2 array, " +
                        ("but received a length-" + args.padding[1].length + " array."));
                }
                widthPadding = args.padding[1];
            }
            _this.padding = [heightPadding, widthPadding];
        }
        _this.inputSpec = [new topology_1.InputSpec({ ndim: 4 })];
        return _this;
    }
    ZeroPadding2D.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var rows;
        var cols;
        if (this.dataFormat === 'channelsFirst') {
            if (inputShape[2] != null && inputShape[2] >= 0) {
                rows = inputShape[2] + this.padding[0][0] + this.padding[0][1];
            }
            else {
                rows = null;
            }
            if (inputShape[3] != null && inputShape[3] >= 0) {
                cols = inputShape[3] + this.padding[1][0] + this.padding[1][1];
            }
            else {
                cols = null;
            }
            return [inputShape[0], inputShape[1], rows, cols];
        }
        else {
            if (inputShape[1] != null && inputShape[1] >= 0) {
                rows = inputShape[1] + this.padding[0][0] + this.padding[0][1];
            }
            else {
                rows = null;
            }
            if (inputShape[2] != null && inputShape[2] >= 0) {
                cols = inputShape[2] + this.padding[1][0] + this.padding[1][1];
            }
            else {
                cols = null;
            }
            return [inputShape[0], rows, cols, inputShape[3]];
        }
    };
    ZeroPadding2D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () { return spatial2dPadding(types_utils_1.getExactlyOneTensor(inputs), _this.padding, _this.dataFormat); });
    };
    ZeroPadding2D.prototype.getConfig = function () {
        var config = {
            padding: this.padding,
            dataFormat: this.dataFormat,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    ZeroPadding2D.className = 'ZeroPadding2D';
    return ZeroPadding2D;
}(topology_1.Layer));
exports.ZeroPadding2D = ZeroPadding2D;
tfjs_core_1.serialization.registerClass(ZeroPadding2D);
//# sourceMappingURL=padding.js.map
}, function(modId) { var map = {"../backend/common":1553229508425,"../engine/topology":1553229508438,"../errors":1553229508428,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508469, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Pooling Layers.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var common_1 = require("../backend/common");
var K = require("../backend/tfjs_backend");
var common_2 = require("../common");
var topology_1 = require("../engine/topology");
var topology_2 = require("../engine/topology");
var errors_1 = require("../errors");
var conv_utils_1 = require("../utils/conv_utils");
var generic_utils_1 = require("../utils/generic_utils");
var types_utils_1 = require("../utils/types_utils");
var convolutional_1 = require("./convolutional");
/**
 * 2D pooling.
 * @param x
 * @param poolSize
 * @param stridesdes strides. Defaults to [1, 1].
 * @param padding padding. Defaults to 'valid'.
 * @param dataFormat data format. Defaults to 'channelsLast'.
 * @param poolMode Mode of pooling. Defaults to 'max'.
 * @returns Result of the 2D pooling.
 */
function pool2d(x, poolSize, strides, padding, dataFormat, poolMode) {
    return tfjs_core_1.tidy(function () {
        common_2.checkDataFormat(dataFormat);
        common_2.checkPoolMode(poolMode);
        common_2.checkPaddingMode(padding);
        if (strides == null) {
            strides = [1, 1];
        }
        if (padding == null) {
            padding = 'valid';
        }
        if (dataFormat == null) {
            dataFormat = common_1.imageDataFormat();
        }
        if (poolMode == null) {
            poolMode = 'max';
        }
        // TODO(cais): Remove the preprocessing step once deeplearn.js supports
        // dataFormat as an input argument.
        x = convolutional_1.preprocessConv2DInput(x, dataFormat); // x is NHWC after preprocessing.
        var y;
        var paddingString = (padding === 'same') ? 'same' : 'valid';
        if (poolMode === 'max') {
            // TODO(cais): Rank check?
            y = tfc.maxPool(x, poolSize, strides, paddingString);
        }
        else { // 'avg'
            // TODO(cais): Check the dtype and rank of x and give clear error message
            //   if those are incorrect.
            y = tfc.avgPool(
            // TODO(cais): Rank check?
            x, poolSize, strides, paddingString);
        }
        if (dataFormat === 'channelsFirst') {
            y = tfc.transpose(y, [0, 3, 1, 2]); // NHWC -> NCHW.
        }
        return y;
    });
}
exports.pool2d = pool2d;
/**
 * Abstract class for different pooling 1D layers.
 */
var Pooling1D = /** @class */ (function (_super) {
    __extends(Pooling1D, _super);
    /**
     *
     * @param args Parameters for the Pooling layer.
     *
     * config.poolSize defaults to 2.
     */
    function Pooling1D(args) {
        var _this = this;
        if (args.poolSize == null) {
            args.poolSize = 2;
        }
        _this = _super.call(this, args) || this;
        if (typeof args.poolSize === 'number') {
            _this.poolSize = [args.poolSize];
        }
        else if (Array.isArray(args.poolSize) &&
            args.poolSize.length === 1 &&
            typeof args.poolSize[0] === 'number') {
            _this.poolSize = args.poolSize;
        }
        else {
            throw new errors_1.ValueError("poolSize for 1D convolutional layer must be a number or an " +
                "Array of a single number, but received " +
                ("" + JSON.stringify(args.poolSize)));
        }
        generic_utils_1.assertPositiveInteger(_this.poolSize, 'poolSize');
        if (args.strides == null) {
            _this.strides = _this.poolSize;
        }
        else {
            if (typeof args.strides === 'number') {
                _this.strides = [args.strides];
            }
            else if (Array.isArray(args.strides) &&
                args.strides.length === 1 &&
                typeof args.strides[0] === 'number') {
                _this.strides = args.strides;
            }
            else {
                throw new errors_1.ValueError("strides for 1D convolutional layer must be a number or an " +
                    "Array of a single number, but received " +
                    ("" + JSON.stringify(args.strides)));
            }
        }
        generic_utils_1.assertPositiveInteger(_this.strides, 'strides');
        _this.padding = args.padding == null ? 'valid' : args.padding;
        common_2.checkPaddingMode(_this.padding);
        _this.inputSpec = [new topology_1.InputSpec({ ndim: 3 })];
        return _this;
    }
    Pooling1D.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var length = conv_utils_1.convOutputLength(inputShape[1], this.poolSize[0], this.padding, this.strides[0]);
        return [inputShape[0], length, inputShape[2]];
    };
    Pooling1D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            // Add dummy last dimension.
            inputs = K.expandDims(types_utils_1.getExactlyOneTensor(inputs), 2);
            var output = _this.poolingFunction(types_utils_1.getExactlyOneTensor(inputs), [_this.poolSize[0], 1], [_this.strides[0], 1], _this.padding, 'channelsLast');
            // Remove dummy last dimension.
            return tfc.squeeze(output, [2]);
        });
    };
    Pooling1D.prototype.getConfig = function () {
        var config = {
            poolSize: this.poolSize,
            padding: this.padding,
            strides: this.strides,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    return Pooling1D;
}(topology_2.Layer));
exports.Pooling1D = Pooling1D;
/**
 * Max pooling operation for temporal data.
 *
 * Input shape:  `[batchSize, inLength, channels]`
 *
 * Output shape: `[batchSize, pooledLength, channels]`
 */
var MaxPooling1D = /** @class */ (function (_super) {
    __extends(MaxPooling1D, _super);
    function MaxPooling1D(args) {
        return _super.call(this, args) || this;
    }
    MaxPooling1D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
        common_2.checkDataFormat(dataFormat);
        common_2.checkPaddingMode(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'max');
    };
    /** @nocollapse */
    MaxPooling1D.className = 'MaxPooling1D';
    return MaxPooling1D;
}(Pooling1D));
exports.MaxPooling1D = MaxPooling1D;
tfjs_core_1.serialization.registerClass(MaxPooling1D);
/**
 * Average pooling operation for spatial data.
 *
 * Input shape: `[batchSize, inLength, channels]`
 *
 * Output shape: `[batchSize, pooledLength, channels]`
 *
 * `tf.avgPool1d` is an alias.
 */
var AveragePooling1D = /** @class */ (function (_super) {
    __extends(AveragePooling1D, _super);
    function AveragePooling1D(args) {
        return _super.call(this, args) || this;
    }
    AveragePooling1D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
        common_2.checkDataFormat(dataFormat);
        common_2.checkPaddingMode(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'avg');
    };
    /** @nocollapse */
    AveragePooling1D.className = 'AveragePooling1D';
    return AveragePooling1D;
}(Pooling1D));
exports.AveragePooling1D = AveragePooling1D;
tfjs_core_1.serialization.registerClass(AveragePooling1D);
/**
 * Abstract class for different pooling 2D layers.
 */
var Pooling2D = /** @class */ (function (_super) {
    __extends(Pooling2D, _super);
    function Pooling2D(args) {
        var _this = this;
        if (args.poolSize == null) {
            args.poolSize = [2, 2];
        }
        _this = _super.call(this, args) || this;
        _this.poolSize = Array.isArray(args.poolSize) ?
            args.poolSize :
            [args.poolSize, args.poolSize];
        if (args.strides == null) {
            _this.strides = _this.poolSize;
        }
        else if (Array.isArray(args.strides)) {
            if (args.strides.length !== 2) {
                throw new errors_1.ValueError("If the strides property of a 2D pooling layer is an Array, " +
                    "it is expected to have a length of 2, but received length " +
                    (args.strides.length + "."));
            }
            _this.strides = args.strides;
        }
        else {
            // `config.strides` is a number.
            _this.strides = [args.strides, args.strides];
        }
        generic_utils_1.assertPositiveInteger(_this.poolSize, 'poolSize');
        generic_utils_1.assertPositiveInteger(_this.strides, 'strides');
        _this.padding = args.padding == null ? 'valid' : args.padding;
        _this.dataFormat =
            args.dataFormat == null ? 'channelsLast' : args.dataFormat;
        common_2.checkDataFormat(_this.dataFormat);
        common_2.checkPaddingMode(_this.padding);
        _this.inputSpec = [new topology_1.InputSpec({ ndim: 4 })];
        return _this;
    }
    Pooling2D.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var rows = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
        var cols = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
        rows =
            conv_utils_1.convOutputLength(rows, this.poolSize[0], this.padding, this.strides[0]);
        cols =
            conv_utils_1.convOutputLength(cols, this.poolSize[1], this.padding, this.strides[1]);
        if (this.dataFormat === 'channelsFirst') {
            return [inputShape[0], inputShape[1], rows, cols];
        }
        else {
            return [inputShape[0], rows, cols, inputShape[3]];
        }
    };
    Pooling2D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            return _this.poolingFunction(types_utils_1.getExactlyOneTensor(inputs), _this.poolSize, _this.strides, _this.padding, _this.dataFormat);
        });
    };
    Pooling2D.prototype.getConfig = function () {
        var config = {
            poolSize: this.poolSize,
            padding: this.padding,
            strides: this.strides,
            dataFormat: this.dataFormat
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    return Pooling2D;
}(topology_2.Layer));
exports.Pooling2D = Pooling2D;
/**
 * Max pooling operation for spatial data.
 *
 * Input shape
 *   - If `dataFormat === CHANNEL_LAST`:
 *       4D tensor with shape:
 *       `[batchSize, rows, cols, channels]`
 *   - If `dataFormat === CHANNEL_FIRST`:
 *      4D tensor with shape:
 *       `[batchSize, channels, rows, cols]`
 *
 * Output shape
 *   - If `dataFormat=CHANNEL_LAST`:
 *       4D tensor with shape:
 *       `[batchSize, pooleRows, pooledCols, channels]`
 *   - If `dataFormat=CHANNEL_FIRST`:
 *       4D tensor with shape:
 *       `[batchSize, channels, pooleRows, pooledCols]`
 */
var MaxPooling2D = /** @class */ (function (_super) {
    __extends(MaxPooling2D, _super);
    function MaxPooling2D(args) {
        return _super.call(this, args) || this;
    }
    MaxPooling2D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
        common_2.checkDataFormat(dataFormat);
        common_2.checkPaddingMode(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'max');
    };
    /** @nocollapse */
    MaxPooling2D.className = 'MaxPooling2D';
    return MaxPooling2D;
}(Pooling2D));
exports.MaxPooling2D = MaxPooling2D;
tfjs_core_1.serialization.registerClass(MaxPooling2D);
/**
 * Average pooling operation for spatial data.
 *
 * Input shape:
 *  - If `dataFormat === CHANNEL_LAST`:
 *      4D tensor with shape:
 *      `[batchSize, rows, cols, channels]`
 *  - If `dataFormat === CHANNEL_FIRST`:
 *      4D tensor with shape:
 *      `[batchSize, channels, rows, cols]`
 *
 * Output shape
 *  - If `dataFormat === CHANNEL_LAST`:
 *      4D tensor with shape:
 *      `[batchSize, pooleRows, pooledCols, channels]`
 *  - If `dataFormat === CHANNEL_FIRST`:
 *      4D tensor with shape:
 *      `[batchSize, channels, pooleRows, pooledCols]`
 *
 * `tf.avgPool2d` is an alias.
 */
var AveragePooling2D = /** @class */ (function (_super) {
    __extends(AveragePooling2D, _super);
    function AveragePooling2D(args) {
        return _super.call(this, args) || this;
    }
    AveragePooling2D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
        common_2.checkDataFormat(dataFormat);
        common_2.checkPaddingMode(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'avg');
    };
    /** @nocollapse */
    AveragePooling2D.className = 'AveragePooling2D';
    return AveragePooling2D;
}(Pooling2D));
exports.AveragePooling2D = AveragePooling2D;
tfjs_core_1.serialization.registerClass(AveragePooling2D);
/**
 * Abstract class for different global pooling 1D layers.
 */
var GlobalPooling1D = /** @class */ (function (_super) {
    __extends(GlobalPooling1D, _super);
    function GlobalPooling1D(args) {
        var _this = _super.call(this, args) || this;
        _this.inputSpec = [new topology_1.InputSpec({ ndim: 3 })];
        return _this;
    }
    GlobalPooling1D.prototype.computeOutputShape = function (inputShape) {
        return [inputShape[0], inputShape[2]];
    };
    GlobalPooling1D.prototype.call = function (inputs, kwargs) {
        throw new errors_1.NotImplementedError();
    };
    return GlobalPooling1D;
}(topology_2.Layer));
exports.GlobalPooling1D = GlobalPooling1D;
/**
 * Global average pooling operation for temporal data.
 *
 * Input Shape: 3D tensor with shape: `[batchSize, steps, features]`.
 *
 * Output Shape:2D tensor with shape: `[batchSize, features]`.
 */
var GlobalAveragePooling1D = /** @class */ (function (_super) {
    __extends(GlobalAveragePooling1D, _super);
    function GlobalAveragePooling1D(args) {
        return _super.call(this, args || {}) || this;
    }
    GlobalAveragePooling1D.prototype.call = function (inputs, kwargs) {
        return tfjs_core_1.tidy(function () {
            var input = types_utils_1.getExactlyOneTensor(inputs);
            return tfc.mean(input, 1);
        });
    };
    /** @nocollapse */
    GlobalAveragePooling1D.className = 'GlobalAveragePooling1D';
    return GlobalAveragePooling1D;
}(GlobalPooling1D));
exports.GlobalAveragePooling1D = GlobalAveragePooling1D;
tfjs_core_1.serialization.registerClass(GlobalAveragePooling1D);
/**
 * Global max pooling operation for temporal data.
 *
 * Input Shape: 3D tensor with shape: `[batchSize, steps, features]`.
 *
 * Output Shape:2D tensor with shape: `[batchSize, features]`.
 */
var GlobalMaxPooling1D = /** @class */ (function (_super) {
    __extends(GlobalMaxPooling1D, _super);
    function GlobalMaxPooling1D(args) {
        return _super.call(this, args || {}) || this;
    }
    GlobalMaxPooling1D.prototype.call = function (inputs, kwargs) {
        return tfjs_core_1.tidy(function () {
            var input = types_utils_1.getExactlyOneTensor(inputs);
            return tfc.max(input, 1);
        });
    };
    /** @nocollapse */
    GlobalMaxPooling1D.className = 'GlobalMaxPooling1D';
    return GlobalMaxPooling1D;
}(GlobalPooling1D));
exports.GlobalMaxPooling1D = GlobalMaxPooling1D;
tfjs_core_1.serialization.registerClass(GlobalMaxPooling1D);
/**
 * Abstract class for different global pooling 2D layers.
 */
var GlobalPooling2D = /** @class */ (function (_super) {
    __extends(GlobalPooling2D, _super);
    function GlobalPooling2D(args) {
        var _this = _super.call(this, args) || this;
        _this.dataFormat =
            args.dataFormat == null ? 'channelsLast' : args.dataFormat;
        common_2.checkDataFormat(_this.dataFormat);
        _this.inputSpec = [new topology_1.InputSpec({ ndim: 4 })];
        return _this;
    }
    GlobalPooling2D.prototype.computeOutputShape = function (inputShape) {
        inputShape = inputShape;
        if (this.dataFormat === 'channelsLast') {
            return [inputShape[0], inputShape[3]];
        }
        else {
            return [inputShape[0], inputShape[1]];
        }
    };
    GlobalPooling2D.prototype.call = function (inputs, kwargs) {
        throw new errors_1.NotImplementedError();
    };
    GlobalPooling2D.prototype.getConfig = function () {
        var config = { dataFormat: this.dataFormat };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    return GlobalPooling2D;
}(topology_2.Layer));
exports.GlobalPooling2D = GlobalPooling2D;
/**
 * Global average pooling operation for spatial data.
 *
 * Input shape:
 *   - If `dataFormat` is `CHANNEL_LAST`:
 *       4D tensor with shape: `[batchSize, rows, cols, channels]`.
 *   - If `dataFormat` is `CHANNEL_FIRST`:
 *       4D tensor with shape: `[batchSize, channels, rows, cols]`.
 *
 * Output shape:
 *   2D tensor with shape: `[batchSize, channels]`.
 */
var GlobalAveragePooling2D = /** @class */ (function (_super) {
    __extends(GlobalAveragePooling2D, _super);
    function GlobalAveragePooling2D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalAveragePooling2D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            var input = types_utils_1.getExactlyOneTensor(inputs);
            if (_this.dataFormat === 'channelsLast') {
                return tfc.mean(input, [1, 2]);
            }
            else {
                return tfc.mean(input, [2, 3]);
            }
        });
    };
    /** @nocollapse */
    GlobalAveragePooling2D.className = 'GlobalAveragePooling2D';
    return GlobalAveragePooling2D;
}(GlobalPooling2D));
exports.GlobalAveragePooling2D = GlobalAveragePooling2D;
tfjs_core_1.serialization.registerClass(GlobalAveragePooling2D);
/**
 * Global max pooling operation for spatial data.
 *
 * Input shape:
 *   - If `dataFormat` is `CHANNEL_LAST`:
 *       4D tensor with shape: `[batchSize, rows, cols, channels]`.
 *   - If `dataFormat` is `CHANNEL_FIRST`:
 *       4D tensor with shape: `[batchSize, channels, rows, cols]`.
 *
 * Output shape:
 *   2D tensor with shape: `[batchSize, channels]`.
 */
var GlobalMaxPooling2D = /** @class */ (function (_super) {
    __extends(GlobalMaxPooling2D, _super);
    function GlobalMaxPooling2D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalMaxPooling2D.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            var input = types_utils_1.getExactlyOneTensor(inputs);
            if (_this.dataFormat === 'channelsLast') {
                return tfc.max(input, [1, 2]);
            }
            else {
                return tfc.max(input, [2, 3]);
            }
        });
    };
    /** @nocollapse */
    GlobalMaxPooling2D.className = 'GlobalMaxPooling2D';
    return GlobalMaxPooling2D;
}(GlobalPooling2D));
exports.GlobalMaxPooling2D = GlobalMaxPooling2D;
tfjs_core_1.serialization.registerClass(GlobalMaxPooling2D);
//# sourceMappingURL=pooling.js.map
}, function(modId) { var map = {"../backend/common":1553229508425,"../backend/tfjs_backend":1553229508431,"../common":1553229508432,"../engine/topology":1553229508438,"../errors":1553229508428,"../utils/conv_utils":1553229508462,"../utils/generic_utils":1553229508427,"../utils/types_utils":1553229508439,"./convolutional":1553229508461}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508470, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Recurrent Neural Network Layers.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var activations_1 = require("../activations");
var state_1 = require("../backend/state");
var K = require("../backend/tfjs_backend");
var constraints_1 = require("../constraints");
var topology_1 = require("../engine/topology");
var topology_2 = require("../engine/topology");
var errors_1 = require("../errors");
var initializers_1 = require("../initializers");
var regularizers_1 = require("../regularizers");
var generic_utils_1 = require("../utils/generic_utils");
var math_utils = require("../utils/math_utils");
var types_utils_1 = require("../utils/types_utils");
var variables_1 = require("../variables");
var serialization_1 = require("./serialization");
/**
 * Standardize `apply()` args to a single list of tensor inputs.
 *
 * When running a model loaded from file, the input tensors `initialState` and
 * `constants` are passed to `RNN.apply()` as part of `inputs` instead of the
 * dedicated kwargs fields. `inputs` consists of
 * `[inputs, initialState0, initialState1, ..., constant0, constant1]` in this
 * case.
 * This method makes sure that arguments are
 * separated and that `initialState` and `constants` are `Array`s of tensors
 * (or None).
 *
 * @param inputs Tensor or `Array` of  tensors.
 * @param initialState Tensor or `Array` of tensors or `null`/`undefined`.
 * @param constants Tensor or `Array` of tensors or `null`/`undefined`.
 * @returns An object consisting of
 *   inputs: A tensor.
 *   initialState: `Array` of tensors or `null`.
 *   constants: `Array` of tensors or `null`.
 * @throws ValueError, if `inputs` is an `Array` but either `initialState` or
 *   `constants` is provided.
 */
function standardizeArgs(inputs, initialState, constants, numConstants) {
    if (Array.isArray(inputs)) {
        if (initialState != null || constants != null) {
            throw new errors_1.ValueError('When inputs is an array, neither initialState or constants ' +
                'should be provided');
        }
        if (numConstants != null) {
            constants = inputs.slice(inputs.length - numConstants, inputs.length);
            inputs = inputs.slice(0, inputs.length - numConstants);
        }
        if (inputs.length > 1) {
            initialState = inputs.slice(1, inputs.length);
        }
        inputs = inputs[0];
    }
    function toListOrNull(x) {
        if (x == null || Array.isArray(x)) {
            return x;
        }
        else {
            return [x];
        }
    }
    initialState = toListOrNull(initialState);
    constants = toListOrNull(constants);
    return { inputs: inputs, initialState: initialState, constants: constants };
}
exports.standardizeArgs = standardizeArgs;
/**
 * Iterates over the time dimension of a tensor.
 *
 * @param stepFunction RNN step function.
 *   Parameters:
 *     inputs: tensor with shape `[samples, ...]` (no time dimension),
 *       representing input for the batch of samples at a certain time step.
 *     states: an Array of tensors.
 *   Returns:
 *     outputs: tensor with shape `[samples, outputDim]` (no time dimension).
 *     newStates: list of tensors, same length and shapes as `states`. The first
 *       state in the list must be the output tensor at the previous timestep.
 * @param inputs Tensor of temporal data of shape `[samples, time, ...]` (at
 *   least 3D).
 * @param initialStates Tensor with shape `[samples, outputDim]` (no time
 *   dimension), containing the initial values of the states used in the step
 *   function.
 * @param goBackwards If `true`, do the iteration over the time dimension in
 *   reverse order and return the reversed sequence.
 * @param mask Binary tensor with shape `[sample, time, 1]`, with a zero for
 *   every element that is masked.
 * @param constants An Array of constant values passed at each step.
 * @param unroll Whether to unroll the RNN or to use a symbolic loop. *Not*
 *   applicable to this imperative deeplearn.js backend. Its value is ignored.
 * @param needPerStepOutputs Whether the per-step outputs are to be
 *   concatenated into a single tensor and returned (as the second return
 *   value). Default: `false`. This arg is included so that the relatively
 *   expensive concatenation of the stepwise outputs can be omitted unless
 *   the stepwise outputs need to be kept (e.g., for an LSTM layer of which
 *   `returnSequence` is `true`.)
 * @returns An Array: `[lastOutput, outputs, newStates]`.
 *   lastOutput: the lastest output of the RNN, of shape `[samples, ...]`.
 *   outputs: tensor with shape `[samples, time, ...]` where each entry
 *     `output[s, t]` is the output of the step function at time `t` for sample
 *     `s`. This return value is provided if and only if the
 *     `needPerStepOutputs` is set as `true`. If it is set as `false`, this
 *     return value will be `undefined`.
 *   newStates: Array of tensors, latest states returned by the step function,
 *      of shape `(samples, ...)`.
 * @throws ValueError If input dimension is less than 3.
 *
 * TODO(nielsene): This needs to be tidy-ed.
 */
function rnn(stepFunction, inputs, initialStates, goBackwards, mask, constants, unroll, needPerStepOutputs) {
    if (goBackwards === void 0) { goBackwards = false; }
    if (unroll === void 0) { unroll = false; }
    if (needPerStepOutputs === void 0) { needPerStepOutputs = false; }
    return tfc.tidy(function () {
        var ndim = inputs.shape.length;
        if (ndim < 3) {
            throw new errors_1.ValueError("Input should be at least 3D, but is " + ndim + "D.");
        }
        // Transpose to time-major, i.e., from [batch, time, ...] to [time, batch,
        // ...].
        var axes = [1, 0].concat(math_utils.range(2, ndim));
        inputs = tfc.transpose(inputs, axes);
        if (constants != null) {
            throw new errors_1.NotImplementedError('The rnn() functoin of the deeplearn.js backend does not support ' +
                'constants yet.');
        }
        // Porting Note: the unroll option is ignored by the imperative backend.
        if (unroll) {
            console.warn('Backend rnn(): the unroll = true option is not applicable to the ' +
                'imperative deeplearn.js backend.');
        }
        if (mask != null) {
            mask = mask.asType('bool').asType('float32');
            if (mask.rank === ndim - 1) {
                mask = tfc.expandDims(mask, -1);
            }
            mask = tfc.transpose(mask, axes);
        }
        if (goBackwards) {
            inputs = tfc.reverse(inputs, 0);
            if (mask != null) {
                mask = tfc.reverse(mask, 0);
            }
        }
        // Porting Note: PyKeras with TensorFlow backend uses a symbolic loop
        //   (tf.while_loop). But for the imperative deeplearn.js backend, we just
        //   use the usual TypeScript control flow to iterate over the time steps in
        //   the inputs.
        // Porting Note: PyKeras patches a "_use_learning_phase" attribute to
        // outputs.
        //   This is not idiomatic in TypeScript. The info regarding whether we are
        //   in a learning (i.e., training) phase for RNN is passed in a different
        //   way.
        var perStepOutputs = [];
        var lastOutput;
        var states = initialStates;
        var timeSteps = inputs.shape[0];
        var perStepInputs = tfc.unstack(inputs);
        var perStepMasks;
        if (mask != null) {
            perStepMasks = tfc.unstack(mask);
        }
        var _loop_1 = function (t) {
            var currentInput = perStepInputs[t];
            var stepOutputs = tfc.tidy(function () { return stepFunction(currentInput, states); });
            if (mask == null) {
                lastOutput = stepOutputs[0];
                states = stepOutputs[1];
            }
            else {
                var maskedOutputs = tfc.tidy(function () {
                    var stepMask = perStepMasks[t];
                    var negStepMask = tfc.onesLike(stepMask).sub(stepMask);
                    // TODO(cais): Would tfc.where() be better for performance?
                    var output = stepOutputs[0].mul(stepMask).addStrict(states[0].mul(negStepMask));
                    var newStates = states.map(function (state, i) {
                        return stepOutputs[1][i].mul(stepMask).addStrict(state.mul(negStepMask));
                    });
                    return { output: output, newStates: newStates };
                });
                lastOutput = maskedOutputs.output;
                states = maskedOutputs.newStates;
            }
            if (needPerStepOutputs) {
                perStepOutputs.push(lastOutput);
            }
        };
        for (var t = 0; t < timeSteps; ++t) {
            _loop_1(t);
        }
        var outputs;
        if (needPerStepOutputs) {
            var axis = 1;
            outputs = tfc.stack(perStepOutputs, axis);
        }
        return [lastOutput, outputs, states];
    });
}
exports.rnn = rnn;
/**
 * Base class for recurrent layers.
 *
 * Input shape:
 *   3D tensor with shape `[batchSize, timeSteps, inputDim]`.
 *
 * Output shape:
 *   - if `returnState`, an Array of tensors (i.e., `tf.Tensor`s). The first
 *     tensor is the output. The remaining tensors are the states at the
 *     last time step, each with shape `[batchSize, units]`.
 *   - if `returnSequences`, the output will have shape
 *     `[batchSize, timeSteps, units]`.
 *   - else, the output will have shape `[batchSize, units]`.
 *
 * Masking:
 *   This layer supports masking for input data with a variable number
 *   of timesteps. To introduce masks to your data,
 *   use an embedding layer with the `mask_zero` parameter
 *   set to `True`.
 *
 * Notes on using statefulness in RNNs:
 *   You can set RNN layers to be 'stateful', which means that the states
 *   computed for the samples in one batch will be reused as initial states
 *   for the samples in the next batch. This assumes a one-to-one mapping
 *   between samples in different successive batches.
 *
 *   To enable statefulness:
 *     - specify `stateful: true` in the layer constructor.
 *     - specify a fixed batch size for your model, by passing
 *       if sequential model:
 *         `batchInputShape=[...]` to the first layer in your model.
 *       else for functional model with 1 or more Input layers:
 *         `batchShape=[...]` to all the first layers in your model.
 *       This is the expected shape of your inputs *including the batch size*.
 *       It should be a tuple of integers, e.g. `(32, 10, 100)`.
 *     - specify `shuffle=False` when calling fit().
 *
 *   To reset the states of your model, call `.resetStates()` on either
 *   a specific layer, or on your entire model.
 *
 * Note on specifying the initial state of RNNs
 *   You can specify the initial state of RNN layers symbolically by
 *   calling them with the option `initialState`. The value of
 *   `initialState` should be a tensor or list of tensors representing
 *   the initial state of the RNN layer.
 *
 *   You can specify the initial state of RNN layers numerically by
 *   calling `resetStates` with the keyword argument `states`. The value of
 *   `states` should be a numpy array or list of numpy arrays representing
 *   the initial state of the RNN layer.
 *
 * Note on passing external constants to RNNs
 *   You can pass "external" constants to the cell using the `constants`
 *   keyword argument of `RNN.call` method. This requires that the `cell.call`
 *   method accepts the same keyword argument `constants`. Such constants
 *   can be used to conditon the cell transformation on additional static inputs
 *   (not changing over time), a.k.a an attention mechanism.
 */
var RNN = /** @class */ (function (_super) {
    __extends(RNN, _super);
    function RNN(args) {
        var _this = _super.call(this, args) || this;
        var cell;
        if (args.cell == null) {
            throw new errors_1.ValueError('cell property is missing for the constructor of RNN.');
        }
        else if (Array.isArray(args.cell)) {
            cell = new StackedRNNCells({ cells: args.cell });
        }
        else {
            cell = args.cell;
        }
        if (cell.stateSize == null) {
            throw new errors_1.ValueError('The RNN cell should have an attribute `stateSize` (tuple of ' +
                'integers, one integer per RNN state).');
        }
        _this.cell = cell;
        _this.returnSequences =
            args.returnSequences == null ? false : args.returnSequences;
        _this.returnState = args.returnState == null ? false : args.returnState;
        _this.goBackwards = args.goBackwards == null ? false : args.goBackwards;
        _this._stateful = args.stateful == null ? false : args.stateful;
        _this.unroll = args.unroll == null ? false : args.unroll;
        _this.supportsMasking = true;
        _this.inputSpec = [new topology_1.InputSpec({ ndim: 3 })];
        _this.stateSpec = null;
        _this.states_ = null;
        // TODO(cais): Add constantsSpec and numConstants.
        _this.numConstants = null;
        // TODO(cais): Look into the use of initial_state in the kwargs of the
        //   constructor.
        _this.keptStates = [];
        return _this;
    }
    // Porting Note: This is the equivalent of `RNN.states` property getter in
    //   PyKeras.
    RNN.prototype.getStates = function () {
        if (this.states_ == null) {
            var numStates = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
            return math_utils.range(0, numStates).map(function (x) { return null; });
        }
        else {
            return this.states_;
        }
    };
    // Porting Note: This is the equivalent of the `RNN.states` property setter in
    //   PyKeras.
    RNN.prototype.setStates = function (states) {
        this.states_ = states;
    };
    RNN.prototype.computeOutputShape = function (inputShape) {
        if (types_utils_1.isArrayOfShapes(inputShape)) {
            inputShape = inputShape[0];
        }
        inputShape = inputShape;
        // TODO(cais): Remove the casting once stacked RNN cells become supported.
        var stateSize = this.cell.stateSize;
        if (!Array.isArray(stateSize)) {
            stateSize = [stateSize];
        }
        var outputDim = stateSize[0];
        var outputShape;
        if (this.returnSequences) {
            outputShape = [inputShape[0], inputShape[1], outputDim];
        }
        else {
            outputShape = [inputShape[0], outputDim];
        }
        if (this.returnState) {
            var stateShape = [];
            for (var _i = 0, stateSize_1 = stateSize; _i < stateSize_1.length; _i++) {
                var dim = stateSize_1[_i];
                stateShape.push([inputShape[0], dim]);
            }
            return [outputShape].concat(stateShape);
        }
        else {
            return outputShape;
        }
    };
    RNN.prototype.computeMask = function (inputs, mask) {
        var _this = this;
        return tfc.tidy(function () {
            if (Array.isArray(mask)) {
                mask = mask[0];
            }
            var outputMask = _this.returnSequences ? mask : null;
            if (_this.returnState) {
                var stateMask = _this.states.map(function (s) { return null; });
                return [outputMask].concat(stateMask);
            }
            else {
                return outputMask;
            }
        });
    };
    Object.defineProperty(RNN.prototype, "states", {
        /**
         * Get the current state tensors of the RNN.
         *
         * If the state hasn't been set, return an array of `null`s of the correct
         * length.
         */
        get: function () {
            if (this.states_ == null) {
                var numStates = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
                var output = [];
                for (var i = 0; i < numStates; ++i) {
                    output.push(null);
                }
                return output;
            }
            else {
                return this.states_;
            }
        },
        set: function (s) {
            this.states_ = s;
        },
        enumerable: true,
        configurable: true
    });
    RNN.prototype.build = function (inputShape) {
        // Note inputShape will be an Array of Shapes of initial states and
        // constants if these are passed in apply().
        var constantShape = null;
        if (this.numConstants != null) {
            throw new errors_1.NotImplementedError('Constants support is not implemented in RNN yet.');
        }
        if (types_utils_1.isArrayOfShapes(inputShape)) {
            inputShape = inputShape[0];
        }
        inputShape = inputShape;
        var batchSize = this.stateful ? inputShape[0] : null;
        var inputDim = inputShape[inputShape.length - 1];
        this.inputSpec[0] = new topology_1.InputSpec({ shape: [batchSize, null, inputDim] });
        // Allow cell (if RNNCell Layer) to build before we set or validate
        // stateSpec.
        var stepInputShape = [inputShape[0]].concat(inputShape.slice(2));
        if (constantShape != null) {
            throw new errors_1.NotImplementedError('Constants support is not implemented in RNN yet.');
        }
        else {
            this.cell.build(stepInputShape);
        }
        // Set or validate stateSpec.
        var stateSize;
        if (Array.isArray(this.cell.stateSize)) {
            stateSize = this.cell.stateSize;
        }
        else {
            stateSize = [this.cell.stateSize];
        }
        if (this.stateSpec != null) {
            if (!tfjs_core_1.util.arraysEqual(this.stateSpec.map(function (spec) { return spec.shape[spec.shape.length - 1]; }), stateSize)) {
                throw new errors_1.ValueError("An initialState was passed that is not compatible with " +
                    ("cell.stateSize. Received stateSpec=" + this.stateSpec + "; ") +
                    ("However cell.stateSize is " + this.cell.stateSize));
            }
        }
        else {
            this.stateSpec =
                stateSize.map(function (dim) { return new topology_1.InputSpec({ shape: [null, dim] }); });
        }
        if (this.stateful) {
            this.resetStates();
        }
    };
    /**
     * Reset the state tensors of the RNN.
     *
     * If the `states` argument is `undefined` or `null`, will set the
     * state tensor(s) of the RNN to all-zero tensors of the appropriate
     * shape(s).
     *
     * If `states` is provided, will set the state tensors of the RNN to its
     * value.
     *
     * @param states Optional externally-provided initial states.
     * @param training Whether this call is done during training. For stateful
     *   RNNs, this affects whether the old states are kept or discarded. In
     *   particular, if `training` is `true`, the old states will be kept so
     *   that subsequent backpropgataion through time (BPTT) may work properly.
     *   Else, the old states will be discarded.
     */
    RNN.prototype.resetStates = function (states, training) {
        var _this = this;
        if (training === void 0) { training = false; }
        tfjs_core_1.tidy(function () {
            if (!_this.stateful) {
                throw new errors_1.AttributeError('Cannot call resetStates() on an RNN Layer that is not stateful.');
            }
            var batchSize = _this.inputSpec[0].shape[0];
            if (batchSize == null) {
                throw new errors_1.ValueError('If an RNN is stateful, it needs to know its batch size. Specify ' +
                    'the batch size of your input tensors: \n' +
                    '- If using a Sequential model, specify the batch size by ' +
                    'passing a `batchInputShape` option to your first layer.\n' +
                    '- If using the functional API, specify the batch size by ' +
                    'passing a `batchShape` option to your Input layer.');
            }
            // Initialize state if null.
            if (_this.states_ == null) {
                if (Array.isArray(_this.cell.stateSize)) {
                    _this.states_ =
                        _this.cell.stateSize.map(function (dim) { return tfc.zeros([batchSize, dim]); });
                }
                else {
                    _this.states_ = [tfc.zeros([batchSize, _this.cell.stateSize])];
                }
            }
            else if (states == null) {
                // Dispose old state tensors.
                tfc.dispose(_this.states_);
                // For stateful RNNs, fully dispose kept old states.
                if (_this.keptStates != null) {
                    tfc.dispose(_this.keptStates);
                    _this.keptStates = [];
                }
                if (Array.isArray(_this.cell.stateSize)) {
                    _this.states_ =
                        _this.cell.stateSize.map(function (dim) { return tfc.zeros([batchSize, dim]); });
                }
                else {
                    _this.states_[0] = tfc.zeros([batchSize, _this.cell.stateSize]);
                }
            }
            else {
                if (!Array.isArray(states)) {
                    states = [states];
                }
                if (states.length !== _this.states_.length) {
                    throw new errors_1.ValueError("Layer " + _this.name + " expects " + _this.states_.length + " state(s), " +
                        ("but it received " + states.length + " state value(s). Input ") +
                        ("received: " + states));
                }
                if (training === true) {
                    // Store old state tensors for complete disposal later, i.e., during
                    // the next no-arg call to this method. We do not dispose the old
                    // states immediately because that BPTT (among other things) require
                    // them.
                    _this.keptStates.push(_this.states_.slice());
                }
                else {
                    tfc.dispose(_this.states_);
                }
                for (var index = 0; index < _this.states_.length; ++index) {
                    var value = states[index];
                    var dim = Array.isArray(_this.cell.stateSize) ?
                        _this.cell.stateSize[index] :
                        _this.cell.stateSize;
                    var expectedShape = [batchSize, dim];
                    if (!tfjs_core_1.util.arraysEqual(value.shape, expectedShape)) {
                        throw new errors_1.ValueError("State " + index + " is incompatible with layer " + _this.name + ": " +
                            ("expected shape=" + expectedShape + ", received shape=" + value.shape));
                    }
                    _this.states_[index] = value;
                }
            }
            _this.states_.forEach(function (state) { return tfc.keep(state); });
        });
    };
    RNN.prototype.apply = function (inputs, kwargs) {
        // TODO(cais): Figure out whether initialState is in kwargs or inputs.
        var initialState = kwargs == null ? null : kwargs['initialState'];
        var constants = kwargs == null ? null : kwargs['constants'];
        if (kwargs == null) {
            kwargs = {};
        }
        var standardized = standardizeArgs(inputs, initialState, constants, this.numConstants);
        inputs = standardized.inputs;
        initialState = standardized.initialState;
        constants = standardized.constants;
        // If any of `initial_state` or `constants` are specified and are
        // `tf.SymbolicTensor`s, then add them to the inputs and temporarily modify
        // the input_spec to include them.
        var additionalInputs = [];
        var additionalSpecs = [];
        if (initialState != null) {
            kwargs['initialState'] = initialState;
            additionalInputs = additionalInputs.concat(initialState);
            this.stateSpec = [];
            for (var _i = 0, initialState_1 = initialState; _i < initialState_1.length; _i++) {
                var state = initialState_1[_i];
                this.stateSpec.push(new topology_1.InputSpec({ shape: state.shape }));
            }
            // TODO(cais): Use the following instead.
            // this.stateSpec = initialState.map(state => new InputSpec({shape:
            // state.shape}));
            additionalSpecs = additionalSpecs.concat(this.stateSpec);
        }
        if (constants != null) {
            kwargs['constants'] = constants;
            additionalInputs = additionalInputs.concat(constants);
            // TODO(cais): Add this.constantsSpec.
            this.numConstants = constants.length;
        }
        var isTensor = additionalInputs[0] instanceof topology_1.SymbolicTensor;
        if (isTensor) {
            // Compute full input spec, including state and constants.
            var fullInput = [inputs].concat(additionalInputs);
            var fullInputSpec = this.inputSpec.concat(additionalSpecs);
            // Perform the call with temporarily replaced inputSpec.
            var originalInputSpec = this.inputSpec;
            this.inputSpec = fullInputSpec;
            var output = _super.prototype.apply.call(this, fullInput, kwargs);
            this.inputSpec = originalInputSpec;
            return output;
        }
        else {
            return _super.prototype.apply.call(this, inputs, kwargs);
        }
    };
    // tslint:disable-next-line:no-any
    RNN.prototype.call = function (inputs, kwargs) {
        var _this = this;
        // Input shape: `[samples, time (padded with zeros), input_dim]`.
        // Note that the .build() method of subclasses **must** define
        // this.inputSpec and this.stateSpec owith complete input shapes.
        return tfjs_core_1.tidy(function () {
            var mask = kwargs == null ? null : kwargs['mask'];
            var training = kwargs == null ? null : kwargs['training'];
            var initialState = kwargs == null ? null : kwargs['initialState'];
            inputs = types_utils_1.getExactlyOneTensor(inputs);
            if (initialState == null) {
                if (_this.stateful) {
                    initialState = _this.states_;
                }
                else {
                    initialState = _this.getInitialState(inputs);
                }
            }
            var numStates = Array.isArray(_this.cell.stateSize) ? _this.cell.stateSize.length : 1;
            if (initialState.length !== numStates) {
                throw new errors_1.ValueError("RNN Layer has " + numStates + " state(s) but was passed " +
                    (initialState.length + " initial state(s)."));
            }
            if (_this.unroll) {
                console.warn('Ignoring unroll = true for RNN layer, due to imperative backend.');
            }
            var cellCallKwargs = { training: training };
            // TODO(cais): Add support for constants.
            var step = function (inputs, states) {
                // `inputs` and `states` are concatenated to form a single `Array` of
                // `tf.Tensor`s as the input to `cell.call()`.
                var outputs = _this.cell.call([inputs].concat(states), cellCallKwargs);
                // Marshall the return value into output and new states.
                return [outputs[0], outputs.slice(1)];
            };
            // TODO(cais): Add support for constants.
            var rnnOutputs = rnn(step, inputs, initialState, _this.goBackwards, mask, null, _this.unroll, _this.returnSequences);
            var lastOutput = rnnOutputs[0];
            var outputs = rnnOutputs[1];
            var states = rnnOutputs[2];
            if (_this.stateful) {
                _this.resetStates(states, training);
            }
            var output = _this.returnSequences ? outputs : lastOutput;
            // TODO(cais): Porperty set learning phase flag.
            if (_this.returnState) {
                return [output].concat(states);
            }
            else {
                return output;
            }
        });
    };
    RNN.prototype.getInitialState = function (inputs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            // Build an all-zero tensor of shape [samples, outputDim].
            // [Samples, timeSteps, inputDim].
            var initialState = tfc.zeros(inputs.shape);
            // [Samples].
            initialState = tfc.sum(initialState, [1, 2]);
            initialState = K.expandDims(initialState); // [Samples, 1].
            if (Array.isArray(_this.cell.stateSize)) {
                return _this.cell.stateSize.map(function (dim) { return dim > 1 ? K.tile(initialState, [1, dim]) : initialState; });
            }
            else {
                return _this.cell.stateSize > 1 ?
                    [K.tile(initialState, [1, _this.cell.stateSize])] :
                    [initialState];
            }
        });
    };
    Object.defineProperty(RNN.prototype, "trainableWeights", {
        get: function () {
            if (!this.trainable) {
                return [];
            }
            // Porting Note: In TypeScript, `this` is always an instance of `Layer`.
            return this.cell.trainableWeights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RNN.prototype, "nonTrainableWeights", {
        get: function () {
            // Porting Note: In TypeScript, `this` is always an instance of `Layer`.
            if (!this.trainable) {
                return this.cell.weights;
            }
            return this.cell.nonTrainableWeights;
        },
        enumerable: true,
        configurable: true
    });
    RNN.prototype.setFastWeightInitDuringBuild = function (value) {
        _super.prototype.setFastWeightInitDuringBuild.call(this, value);
        if (this.cell != null) {
            this.cell.setFastWeightInitDuringBuild(value);
        }
    };
    RNN.prototype.getConfig = function () {
        var config = {
            returnSequences: this.returnSequences,
            returnState: this.returnState,
            goBackwards: this.goBackwards,
            stateful: this.stateful,
            unroll: this.unroll,
        };
        if (this.numConstants != null) {
            config.numConstants = this.numConstants;
        }
        var cellConfig = this.cell.getConfig();
        config.cell = {
            className: this.cell.getClassName(),
            config: cellConfig,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    RNN.className = 'RNN';
    return RNN;
}(topology_2.Layer));
exports.RNN = RNN;
tfjs_core_1.serialization.registerClass(RNN);
/**
 * An RNNCell layer.
 */
// Porting Note: This is a common parent class for RNN cells. There is no
// equivalent of this in PyKeras. Having a common parent class forgoes the
//  need for `has_attr(cell, ...)` checks or its TypeScript equivalent.
/** @doc {heading: 'Layers', subheading: 'Classes'} */
var RNNCell = /** @class */ (function (_super) {
    __extends(RNNCell, _super);
    function RNNCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RNNCell;
}(topology_2.Layer));
exports.RNNCell = RNNCell;
/**
 * Cell class for `SimpleRNN`.
 *
 * `SimpleRNNCell` is distinct from the `RNN` subclass `SimpleRNN` in that its
 * `apply` method takes the input data of only a single time step and returns
 * the cell's output at the time step, while `SimpleRNN` takes the input data
 * over a number of time steps. For example:
 *
 * ```js
 * const cell = tf.layers.simpleRNNCell({units: 2});
 * const input = tf.input({shape: [10]});
 * const output = cell.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10]: This is the cell's output at a single time step. The 1st
 * // dimension is the unknown batch size.
 * ```
 *
 * Instance(s) of `SimpleRNNCell` can be used to construct `RNN` layers. The
 * most typical use of this workflow is to combine a number of cells into a
 * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
 * RNN. For example:
 *
 * ```js
 * const cells = [
 *   tf.layers.simpleRNNCell({units: 4}),
 *   tf.layers.simpleRNNCell({units: 8}),
 * ];
 * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
 *
 * // Create an input with 10 time steps and a length-20 vector at each step.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the last `SimpleRNNCell`'s number of units.
 * ```
 *
 * To create an `RNN` consisting of only *one* `SimpleRNNCell`, use the
 * `tf.layers.simpleRNN`.
 */
var SimpleRNNCell = /** @class */ (function (_super) {
    __extends(SimpleRNNCell, _super);
    function SimpleRNNCell(args) {
        var _this = _super.call(this, args) || this;
        _this.DEFAULT_ACTIVATION = 'tanh';
        _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
        _this.DEFAULT_RECURRENT_INITIALIZER = 'orthogonal';
        _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
        _this.units = args.units;
        generic_utils_1.assertPositiveInteger(_this.units, "units");
        _this.activation = activations_1.getActivation(args.activation == null ? _this.DEFAULT_ACTIVATION : args.activation);
        _this.useBias = args.useBias == null ? true : args.useBias;
        _this.kernelInitializer = initializers_1.getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
        _this.recurrentInitializer = initializers_1.getInitializer(args.recurrentInitializer || _this.DEFAULT_RECURRENT_INITIALIZER);
        _this.biasInitializer =
            initializers_1.getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
        _this.kernelRegularizer = regularizers_1.getRegularizer(args.kernelRegularizer);
        _this.recurrentRegularizer = regularizers_1.getRegularizer(args.recurrentRegularizer);
        _this.biasRegularizer = regularizers_1.getRegularizer(args.biasRegularizer);
        _this.kernelConstraint = constraints_1.getConstraint(args.kernelConstraint);
        _this.recurrentConstraint = constraints_1.getConstraint(args.recurrentConstraint);
        _this.biasConstraint = constraints_1.getConstraint(args.biasConstraint);
        _this.dropout = math_utils.min([1, math_utils.max([0, args.dropout == null ? 0 : args.dropout])]);
        _this.recurrentDropout = math_utils.min([
            1,
            math_utils.max([0, args.recurrentDropout == null ? 0 : args.recurrentDropout])
        ]);
        _this.stateSize = _this.units;
        _this.dropoutMask = null;
        _this.recurrentDropoutMask = null;
        return _this;
    }
    SimpleRNNCell.prototype.build = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        // TODO(cais): Use regularizer.
        this.kernel = this.addWeight('kernel', [inputShape[inputShape.length - 1], this.units], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
        this.recurrentKernel = this.addWeight('recurrent_kernel', [this.units, this.units], null, this.recurrentInitializer, this.recurrentRegularizer, true, this.recurrentConstraint);
        if (this.useBias) {
            this.bias = this.addWeight('bias', [this.units], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        }
        else {
            this.bias = null;
        }
        this.built = true;
    };
    // Porting Note: PyKeras' equivalent of this method takes two tensor inputs:
    //   `inputs` and `states`. Here, the two tensors are combined into an
    //   `Tensor[]` Array as the first input argument.
    //   Similarly, PyKeras' equivalent of this method returns two values:
    //    `output` and `[output]`. Here the two are combined into one length-2
    //    `Tensor[]`, consisting of `output` repeated.
    SimpleRNNCell.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = inputs;
            if (inputs.length !== 2) {
                throw new errors_1.ValueError("SimpleRNNCell expects 2 input Tensors, got " + inputs.length + ".");
            }
            var prevOutput = inputs[1];
            inputs = inputs[0];
            var training = kwargs['training'] == null ? false : kwargs['training'];
            if (0 < _this.dropout && _this.dropout < 1 && _this.dropoutMask == null) {
                _this.dropoutMask = generateDropoutMask(function () { return tfc.onesLike(inputs); }, _this.dropout, training);
            }
            if (0 < _this.recurrentDropout && _this.recurrentDropout < 1 &&
                _this.recurrentDropoutMask == null) {
                _this.recurrentDropoutMask =
                    generateDropoutMask(function () { return tfc.onesLike(prevOutput); }, _this.recurrentDropout, training);
            }
            var h;
            var dpMask = _this.dropoutMask;
            var recDpMask = _this.recurrentDropoutMask;
            if (dpMask != null) {
                h = K.dot(tfc.mul(inputs, dpMask), _this.kernel.read());
            }
            else {
                h = K.dot(inputs, _this.kernel.read());
            }
            if (_this.bias != null) {
                h = K.biasAdd(h, _this.bias.read());
            }
            if (recDpMask != null) {
                prevOutput = tfc.mul(prevOutput, recDpMask);
            }
            var output = tfc.add(h, K.dot(prevOutput, _this.recurrentKernel.read()));
            if (_this.activation != null) {
                output = _this.activation.apply(output);
            }
            // TODO(cais): Properly set learning phase on output tensor?
            return [output, output];
        });
    };
    SimpleRNNCell.prototype.getConfig = function () {
        var config = {
            units: this.units,
            activation: activations_1.serializeActivation(this.activation),
            useBias: this.useBias,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            recurrentInitializer: initializers_1.serializeInitializer(this.recurrentInitializer),
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: regularizers_1.serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint),
            recurrentConstraint: constraints_1.serializeConstraint(this.recurrentConstraint),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    SimpleRNNCell.className = 'SimpleRNNCell';
    return SimpleRNNCell;
}(RNNCell));
exports.SimpleRNNCell = SimpleRNNCell;
tfjs_core_1.serialization.registerClass(SimpleRNNCell);
/**
 * Fully-connected RNN where the output is to be fed back to input.
 *
 * This is an `RNN` layer consisting of one `SimpleRNNCell`. However, unlike
 * the underlying `SimpleRNNCell`, the `apply` method of `SimpleRNN` operates
 * on a sequence of inputs. The shape of the input (not including the first,
 * batch dimension) needs to be at least 2-D, with the first dimension being
 * time steps. For example:
 *
 * ```js
 * const rnn = tf.layers.simpleRNN({units: 8, returnSequences: true});
 *
 * // Create an input with 10 time steps.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the `SimpleRNNCell`'s number of units.
 * ```
 */
var SimpleRNN = /** @class */ (function (_super) {
    __extends(SimpleRNN, _super);
    function SimpleRNN(args) {
        var _this = this;
        args.cell = new SimpleRNNCell(args);
        _this = _super.call(this, args) || this;
        return _this;
        // TODO(cais): Add activityRegularizer.
    }
    SimpleRNN.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (_this.cell.dropoutMask != null) {
                tfc.dispose(_this.cell.dropoutMask);
                _this.cell.dropoutMask = null;
            }
            if (_this.cell.recurrentDropoutMask != null) {
                tfc.dispose(_this.cell.recurrentDropoutMask);
                _this.cell.recurrentDropoutMask = null;
            }
            var mask = kwargs == null ? null : kwargs['mask'];
            var training = kwargs == null ? null : kwargs['training'];
            var initialState = kwargs == null ? null : kwargs['initialState'];
            return _super.prototype.call.call(_this, inputs, { mask: mask, training: training, initialState: initialState });
        });
    };
    Object.defineProperty(SimpleRNN.prototype, "units", {
        // TODO(cais): Research possibility of refactoring out the tedious all
        //   the getters that delegate to `this.cell` below.
        get: function () {
            return this.cell.units;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "activation", {
        get: function () {
            return this.cell.activation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "useBias", {
        get: function () {
            return this.cell.useBias;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "kernelInitializer", {
        get: function () {
            return this.cell.kernelInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "recurrentInitializer", {
        get: function () {
            return this.cell.recurrentInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "biasInitializer", {
        get: function () {
            return this.cell.biasInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "kernelRegularizer", {
        get: function () {
            return this.cell.kernelRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "recurrentRegularizer", {
        get: function () {
            return this.cell.recurrentRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "biasRegularizer", {
        get: function () {
            return this.cell.biasRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "kernelConstraint", {
        get: function () {
            return this.cell.kernelConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "recurrentConstraint", {
        get: function () {
            return this.cell.recurrentConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "biasConstraint", {
        get: function () {
            return this.cell.biasConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "dropout", {
        get: function () {
            return this.cell.dropout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleRNN.prototype, "recurrentDropout", {
        get: function () {
            return this.cell.recurrentDropout;
        },
        enumerable: true,
        configurable: true
    });
    SimpleRNN.prototype.getConfig = function () {
        var config = {
            units: this.units,
            activation: activations_1.serializeActivation(this.activation),
            useBias: this.useBias,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            recurrentInitializer: initializers_1.serializeInitializer(this.recurrentInitializer),
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: regularizers_1.serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint),
            recurrentConstraint: constraints_1.serializeConstraint(this.recurrentConstraint),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        delete baseConfig['cell'];
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    SimpleRNN.className = 'SimpleRNN';
    return SimpleRNN;
}(RNN));
exports.SimpleRNN = SimpleRNN;
tfjs_core_1.serialization.registerClass(SimpleRNN);
/**
 * Cell class for `GRU`.
 *
 * `GRUCell` is distinct from the `RNN` subclass `GRU` in that its
 * `apply` method takes the input data of only a single time step and returns
 * the cell's output at the time step, while `GRU` takes the input data
 * over a number of time steps. For example:
 *
 * ```js
 * const cell = tf.layers.gruCell({units: 2});
 * const input = tf.input({shape: [10]});
 * const output = cell.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10]: This is the cell's output at a single time step. The 1st
 * // dimension is the unknown batch size.
 * ```
 *
 * Instance(s) of `GRUCell` can be used to construct `RNN` layers. The
 * most typical use of this workflow is to combine a number of cells into a
 * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
 * RNN. For example:
 *
 * ```js
 * const cells = [
 *   tf.layers.gruCell({units: 4}),
 *   tf.layers.gruCell({units: 8}),
 * ];
 * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
 *
 * // Create an input with 10 time steps and a length-20 vector at each step.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the last `gruCell`'s number of units.
 * ```
 *
 * To create an `RNN` consisting of only *one* `GRUCell`, use the
 * `tf.layers.gru`.
 */
var GRUCell = /** @class */ (function (_super) {
    __extends(GRUCell, _super);
    function GRUCell(args) {
        var _this = _super.call(this, args) || this;
        _this.DEFAULT_ACTIVATION = 'tanh';
        _this.DEFAULT_RECURRENT_ACTIVATION = 'hardSigmoid';
        _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
        _this.DEFAULT_RECURRENT_INITIALIZER = 'orthogonal';
        _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
        _this.units = args.units;
        generic_utils_1.assertPositiveInteger(_this.units, 'units');
        _this.activation = activations_1.getActivation(args.activation === undefined ? _this.DEFAULT_ACTIVATION :
            args.activation);
        _this.recurrentActivation = activations_1.getActivation(args.recurrentActivation === undefined ?
            _this.DEFAULT_RECURRENT_ACTIVATION :
            args.recurrentActivation);
        _this.useBias = args.useBias == null ? true : args.useBias;
        _this.kernelInitializer = initializers_1.getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
        _this.recurrentInitializer = initializers_1.getInitializer(args.recurrentInitializer || _this.DEFAULT_RECURRENT_INITIALIZER);
        _this.biasInitializer =
            initializers_1.getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
        _this.kernelRegularizer = regularizers_1.getRegularizer(args.kernelRegularizer);
        _this.recurrentRegularizer = regularizers_1.getRegularizer(args.recurrentRegularizer);
        _this.biasRegularizer = regularizers_1.getRegularizer(args.biasRegularizer);
        _this.kernelConstraint = constraints_1.getConstraint(args.kernelConstraint);
        _this.recurrentConstraint = constraints_1.getConstraint(args.recurrentConstraint);
        _this.biasConstraint = constraints_1.getConstraint(args.biasConstraint);
        _this.dropout = math_utils.min([1, math_utils.max([0, args.dropout == null ? 0 : args.dropout])]);
        _this.recurrentDropout = math_utils.min([
            1,
            math_utils.max([0, args.recurrentDropout == null ? 0 : args.recurrentDropout])
        ]);
        _this.implementation = args.implementation;
        _this.stateSize = _this.units;
        _this.dropoutMask = null;
        _this.recurrentDropoutMask = null;
        return _this;
    }
    GRUCell.prototype.build = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var inputDim = inputShape[inputShape.length - 1];
        this.kernel = this.addWeight('kernel', [inputDim, this.units * 3], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
        this.recurrentKernel = this.addWeight('recurrent_kernel', [this.units, this.units * 3], null, this.recurrentInitializer, this.recurrentRegularizer, true, this.recurrentConstraint);
        if (this.useBias) {
            this.bias = this.addWeight('bias', [this.units * 3], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        }
        else {
            this.bias = null;
        }
        // Porting Notes: Unlike the PyKeras implementation, we perform slicing
        //   of the weights and bias in the call() method, at execution time.
        this.built = true;
    };
    GRUCell.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = inputs;
            if (inputs.length !== 2) {
                throw new errors_1.ValueError("GRUCell expects 2 input Tensors (inputs, h, c), got " +
                    (inputs.length + "."));
            }
            var training = kwargs['training'] == null ? false : kwargs['training'];
            var hTMinus1 = inputs[1]; // Previous memory state.
            inputs = inputs[0];
            // Note: For superior performance, TensorFlow.js always uses
            // implementation 2, regardless of the actual value of
            // config.implementation.
            if (0 < _this.dropout && _this.dropout < 1 && _this.dropoutMask == null) {
                _this.dropoutMask = generateDropoutMask(function () { return tfc.onesLike(inputs); }, _this.dropout, training, 3);
            }
            if (0 < _this.recurrentDropout && _this.recurrentDropout < 1 &&
                _this.recurrentDropoutMask == null) {
                _this.recurrentDropoutMask =
                    generateDropoutMask(function () { return tfc.onesLike(hTMinus1); }, _this.recurrentDropout, training, 3);
            }
            var dpMask = _this.dropoutMask;
            var recDpMask = _this.recurrentDropoutMask;
            var z;
            var r;
            var hh;
            if (0 < _this.dropout && _this.dropout < 1) {
                inputs = tfc.mul(inputs, dpMask[0]);
            }
            var matrixX = K.dot(inputs, _this.kernel.read());
            if (_this.useBias) {
                matrixX = K.biasAdd(matrixX, _this.bias.read());
            }
            if (0 < _this.recurrentDropout && _this.recurrentDropout < 1) {
                hTMinus1 = tfc.mul(hTMinus1, recDpMask[0]);
            }
            var recurrentKernelValue = _this.recurrentKernel.read();
            var _a = tfc.split(recurrentKernelValue, [2 * _this.units, _this.units], recurrentKernelValue.rank - 1), rk1 = _a[0], rk2 = _a[1];
            var matrixInner = K.dot(hTMinus1, rk1);
            var _b = tfc.split(matrixX, 3, matrixX.rank - 1), xZ = _b[0], xR = _b[1], xH = _b[2];
            var _c = tfc.split(matrixInner, 2, matrixInner.rank - 1), recurrentZ = _c[0], recurrentR = _c[1];
            z = _this.recurrentActivation.apply(tfc.add(xZ, recurrentZ));
            r = _this.recurrentActivation.apply(tfc.add(xR, recurrentR));
            var recurrentH = K.dot(tfc.mul(r, hTMinus1), rk2);
            hh = _this.activation.apply(tfc.add(xH, recurrentH));
            var h = tfc.add(tfc.mul(z, hTMinus1), tfc.mul(tfc.add(state_1.getScalar(1), tfc.neg(z)), hh));
            // TODO(cais): Add use_learning_phase flag properly.
            return [h, h];
        });
    };
    GRUCell.prototype.getConfig = function () {
        var config = {
            units: this.units,
            activation: activations_1.serializeActivation(this.activation),
            recurrentActivation: activations_1.serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            recurrentInitializer: initializers_1.serializeInitializer(this.recurrentInitializer),
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: regularizers_1.serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint),
            recurrentConstraint: constraints_1.serializeConstraint(this.recurrentConstraint),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    GRUCell.className = 'GRUCell';
    return GRUCell;
}(RNNCell));
exports.GRUCell = GRUCell;
tfjs_core_1.serialization.registerClass(GRUCell);
/**
 * Gated Recurrent Unit - Cho et al. 2014.
 *
 * This is an `RNN` layer consisting of one `GRUCell`. However, unlike
 * the underlying `GRUCell`, the `apply` method of `SimpleRNN` operates
 * on a sequence of inputs. The shape of the input (not including the first,
 * batch dimension) needs to be at least 2-D, with the first dimension being
 * time steps. For example:
 *
 * ```js
 * const rnn = tf.layers.gru({units: 8, returnSequences: true});
 *
 * // Create an input with 10 time steps.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the `GRUCell`'s number of units.
 */
var GRU = /** @class */ (function (_super) {
    __extends(GRU, _super);
    function GRU(args) {
        var _this = this;
        if (args.implementation === 0) {
            console.warn('`implementation=0` has been deprecated, and now defaults to ' +
                '`implementation=1`. Please update your layer call.');
        }
        args.cell = new GRUCell(args);
        _this = _super.call(this, args) || this;
        return _this;
        // TODO(cais): Add activityRegularizer.
    }
    GRU.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (_this.cell.dropoutMask != null) {
                tfc.dispose(_this.cell.dropoutMask);
                _this.cell.dropoutMask = null;
            }
            if (_this.cell.recurrentDropoutMask != null) {
                tfc.dispose(_this.cell.recurrentDropoutMask);
                _this.cell.recurrentDropoutMask = null;
            }
            var mask = kwargs == null ? null : kwargs['mask'];
            var training = kwargs == null ? null : kwargs['training'];
            var initialState = kwargs == null ? null : kwargs['initialState'];
            return _super.prototype.call.call(_this, inputs, { mask: mask, training: training, initialState: initialState });
        });
    };
    Object.defineProperty(GRU.prototype, "units", {
        get: function () {
            return this.cell.units;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "activation", {
        get: function () {
            return this.cell.activation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "recurrentActivation", {
        get: function () {
            return this.cell.recurrentActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "useBias", {
        get: function () {
            return this.cell.useBias;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "kernelInitializer", {
        get: function () {
            return this.cell.kernelInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "recurrentInitializer", {
        get: function () {
            return this.cell.recurrentInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "biasInitializer", {
        get: function () {
            return this.cell.biasInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "kernelRegularizer", {
        get: function () {
            return this.cell.kernelRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "recurrentRegularizer", {
        get: function () {
            return this.cell.recurrentRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "biasRegularizer", {
        get: function () {
            return this.cell.biasRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "kernelConstraint", {
        get: function () {
            return this.cell.kernelConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "recurrentConstraint", {
        get: function () {
            return this.cell.recurrentConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "biasConstraint", {
        get: function () {
            return this.cell.biasConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "dropout", {
        get: function () {
            return this.cell.dropout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "recurrentDropout", {
        get: function () {
            return this.cell.recurrentDropout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GRU.prototype, "implementation", {
        get: function () {
            return this.cell.implementation;
        },
        enumerable: true,
        configurable: true
    });
    GRU.prototype.getConfig = function () {
        var config = {
            units: this.units,
            activation: activations_1.serializeActivation(this.activation),
            recurrentActivation: activations_1.serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            recurrentInitializer: initializers_1.serializeInitializer(this.recurrentInitializer),
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: regularizers_1.serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint),
            recurrentConstraint: constraints_1.serializeConstraint(this.recurrentConstraint),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        delete baseConfig['cell'];
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    GRU.fromConfig = function (cls, config) {
        if (config['implmentation'] === 0) {
            config['implementation'] = 1;
        }
        return new cls(config);
    };
    /** @nocollapse */
    GRU.className = 'GRU';
    return GRU;
}(RNN));
exports.GRU = GRU;
tfjs_core_1.serialization.registerClass(GRU);
/**
 * Cell class for `LSTM`.
 *
 * `LSTMCell` is distinct from the `RNN` subclass `LSTM` in that its
 * `apply` method takes the input data of only a single time step and returns
 * the cell's output at the time step, while `LSTM` takes the input data
 * over a number of time steps. For example:
 *
 * ```js
 * const cell = tf.layers.lstmCell({units: 2});
 * const input = tf.input({shape: [10]});
 * const output = cell.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10]: This is the cell's output at a single time step. The 1st
 * // dimension is the unknown batch size.
 * ```
 *
 * Instance(s) of `LSTMCell` can be used to construct `RNN` layers. The
 * most typical use of this workflow is to combine a number of cells into a
 * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
 * RNN. For example:
 *
 * ```js
 * const cells = [
 *   tf.layers.lstmCell({units: 4}),
 *   tf.layers.lstmCell({units: 8}),
 * ];
 * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
 *
 * // Create an input with 10 time steps and a length-20 vector at each step.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the last `lstmCell`'s number of units.
 * ```
 *
 * To create an `RNN` consisting of only *one* `LSTMCell`, use the
 * `tf.layers.lstm`.
 */
var LSTMCell = /** @class */ (function (_super) {
    __extends(LSTMCell, _super);
    function LSTMCell(args) {
        var _this = _super.call(this, args) || this;
        _this.DEFAULT_ACTIVATION = 'tanh';
        _this.DEFAULT_RECURRENT_ACTIVATION = 'hardSigmoid';
        _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
        _this.DEFAULT_RECURRENT_INITIALIZER = 'orthogonal';
        _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
        _this.units = args.units;
        generic_utils_1.assertPositiveInteger(_this.units, 'units');
        _this.activation = activations_1.getActivation(args.activation === undefined ? _this.DEFAULT_ACTIVATION :
            args.activation);
        _this.recurrentActivation = activations_1.getActivation(args.recurrentActivation === undefined ?
            _this.DEFAULT_RECURRENT_ACTIVATION :
            args.recurrentActivation);
        _this.useBias = args.useBias == null ? true : args.useBias;
        _this.kernelInitializer = initializers_1.getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
        _this.recurrentInitializer = initializers_1.getInitializer(args.recurrentInitializer || _this.DEFAULT_RECURRENT_INITIALIZER);
        _this.biasInitializer =
            initializers_1.getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
        _this.unitForgetBias = args.unitForgetBias;
        _this.kernelRegularizer = regularizers_1.getRegularizer(args.kernelRegularizer);
        _this.recurrentRegularizer = regularizers_1.getRegularizer(args.recurrentRegularizer);
        _this.biasRegularizer = regularizers_1.getRegularizer(args.biasRegularizer);
        _this.kernelConstraint = constraints_1.getConstraint(args.kernelConstraint);
        _this.recurrentConstraint = constraints_1.getConstraint(args.recurrentConstraint);
        _this.biasConstraint = constraints_1.getConstraint(args.biasConstraint);
        _this.dropout = math_utils.min([1, math_utils.max([0, args.dropout == null ? 0 : args.dropout])]);
        _this.recurrentDropout = math_utils.min([
            1,
            math_utils.max([0, args.recurrentDropout == null ? 0 : args.recurrentDropout])
        ]);
        _this.implementation = args.implementation;
        _this.stateSize = [_this.units, _this.units];
        _this.dropoutMask = null;
        _this.recurrentDropoutMask = null;
        return _this;
    }
    LSTMCell.prototype.build = function (inputShape) {
        var _a;
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var inputDim = inputShape[inputShape.length - 1];
        this.kernel = this.addWeight('kernel', [inputDim, this.units * 4], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
        this.recurrentKernel = this.addWeight('recurrent_kernel', [this.units, this.units * 4], null, this.recurrentInitializer, this.recurrentRegularizer, true, this.recurrentConstraint);
        var biasInitializer;
        if (this.useBias) {
            if (this.unitForgetBias) {
                var capturedBiasInit_1 = this.biasInitializer;
                var capturedUnits_1 = this.units;
                biasInitializer = new (_a = /** @class */ (function (_super) {
                        __extends(CustomInit, _super);
                        function CustomInit() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        CustomInit.prototype.apply = function (shape, dtype) {
                            // TODO(cais): More informative variable names?
                            var bI = capturedBiasInit_1.apply([capturedUnits_1]);
                            var bF = (new initializers_1.Ones()).apply([capturedUnits_1]);
                            var bCAndH = capturedBiasInit_1.apply([capturedUnits_1 * 2]);
                            return K.concatAlongFirstAxis(K.concatAlongFirstAxis(bI, bF), bCAndH);
                        };
                        return CustomInit;
                    }(initializers_1.Initializer)),
                    /** @nocollapse */
                    _a.className = 'CustomInit',
                    _a)();
            }
            else {
                biasInitializer = this.biasInitializer;
            }
            this.bias = this.addWeight('bias', [this.units * 4], null, biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        }
        else {
            this.bias = null;
        }
        // Porting Notes: Unlike the PyKeras implementation, we perform slicing
        //   of the weights and bias in the call() method, at execution time.
        this.built = true;
    };
    LSTMCell.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            var training = kwargs['training'] == null ? false : kwargs['training'];
            inputs = inputs;
            if (inputs.length !== 3) {
                throw new errors_1.ValueError("LSTMCell expects 3 input Tensors (inputs, h, c), got " +
                    (inputs.length + "."));
            }
            var hTMinus1 = inputs[1]; // Previous memory state.
            var cTMinus1 = inputs[2]; // Previous carry state.
            inputs = inputs[0];
            if (0 < _this.dropout && _this.dropout < 1 && _this.dropoutMask == null) {
                _this.dropoutMask = generateDropoutMask(function () { return tfc.onesLike(inputs); }, _this.dropout, training, 4);
            }
            if (0 < _this.recurrentDropout && _this.recurrentDropout < 1 &&
                _this.recurrentDropoutMask == null) {
                _this.recurrentDropoutMask =
                    generateDropoutMask(function () { return tfc.onesLike(hTMinus1); }, _this.recurrentDropout, training, 4);
            }
            var dpMask = _this.dropoutMask;
            var recDpMask = _this.recurrentDropoutMask;
            // Note: For superior performance, TensorFlow.js always uses
            // implementation 2 regardless of the actual value of
            // config.implementation.
            var i;
            var f;
            var c;
            var o;
            if (0 < _this.dropout && _this.dropout < 1) {
                inputs = tfc.mul(inputs, dpMask[0]);
            }
            var z = K.dot(inputs, _this.kernel.read());
            if (0 < _this.recurrentDropout && _this.recurrentDropout < 1) {
                hTMinus1 = tfc.mul(hTMinus1, recDpMask[0]);
            }
            z = tfc.add(z, K.dot(hTMinus1, _this.recurrentKernel.read()));
            if (_this.useBias) {
                z = K.biasAdd(z, _this.bias.read());
            }
            var _a = tfc.split(z, 4, z.rank - 1), z0 = _a[0], z1 = _a[1], z2 = _a[2], z3 = _a[3];
            i = _this.recurrentActivation.apply(z0);
            f = _this.recurrentActivation.apply(z1);
            c = tfc.add(tfc.mul(f, cTMinus1), tfc.mul(i, _this.activation.apply(z2)));
            o = _this.recurrentActivation.apply(z3);
            var h = tfc.mul(o, _this.activation.apply(c));
            // TODO(cais): Add use_learning_phase flag properly.
            return [h, h, c];
        });
    };
    LSTMCell.prototype.getConfig = function () {
        var config = {
            units: this.units,
            activation: activations_1.serializeActivation(this.activation),
            recurrentActivation: activations_1.serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            recurrentInitializer: initializers_1.serializeInitializer(this.recurrentInitializer),
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            unitForgetBias: this.unitForgetBias,
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: regularizers_1.serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint),
            recurrentConstraint: constraints_1.serializeConstraint(this.recurrentConstraint),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    LSTMCell.className = 'LSTMCell';
    return LSTMCell;
}(RNNCell));
exports.LSTMCell = LSTMCell;
tfjs_core_1.serialization.registerClass(LSTMCell);
/**
 * Long-Short Term Memory layer - Hochreiter 1997.
 *
 * This is an `RNN` layer consisting of one `LSTMCell`. However, unlike
 * the underlying `LSTMCell`, the `apply` method of `LSTM` operates
 * on a sequence of inputs. The shape of the input (not including the first,
 * batch dimension) needs to be at least 2-D, with the first dimension being
 * time steps. For example:
 *
 * ```js
 * const lstm = tf.layers.lstm({units: 8, returnSequences: true});
 *
 * // Create an input with 10 time steps.
 * const input = tf.input({shape: [10, 20]});
 * const output = lstm.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the `LSTMCell`'s number of units.
 */
var LSTM = /** @class */ (function (_super) {
    __extends(LSTM, _super);
    function LSTM(args) {
        var _this = this;
        if (args.implementation === 0) {
            console.warn('`implementation=0` has been deprecated, and now defaults to ' +
                '`implementation=1`. Please update your layer call.');
        }
        args.cell = new LSTMCell(args);
        _this = _super.call(this, args) || this;
        return _this;
        // TODO(cais): Add activityRegularizer.
    }
    LSTM.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (_this.cell.dropoutMask != null) {
                tfc.dispose(_this.cell.dropoutMask);
                _this.cell.dropoutMask = null;
            }
            if (_this.cell.recurrentDropoutMask != null) {
                tfc.dispose(_this.cell.recurrentDropoutMask);
                _this.cell.recurrentDropoutMask = null;
            }
            var mask = kwargs == null ? null : kwargs['mask'];
            var training = kwargs == null ? null : kwargs['training'];
            var initialState = kwargs == null ? null : kwargs['initialState'];
            return _super.prototype.call.call(_this, inputs, { mask: mask, training: training, initialState: initialState });
        });
    };
    Object.defineProperty(LSTM.prototype, "units", {
        get: function () {
            return this.cell.units;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "activation", {
        get: function () {
            return this.cell.activation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "recurrentActivation", {
        get: function () {
            return this.cell.recurrentActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "useBias", {
        get: function () {
            return this.cell.useBias;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "kernelInitializer", {
        get: function () {
            return this.cell.kernelInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "recurrentInitializer", {
        get: function () {
            return this.cell.recurrentInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "biasInitializer", {
        get: function () {
            return this.cell.biasInitializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "unitForgetBias", {
        get: function () {
            return this.cell.unitForgetBias;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "kernelRegularizer", {
        get: function () {
            return this.cell.kernelRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "recurrentRegularizer", {
        get: function () {
            return this.cell.recurrentRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "biasRegularizer", {
        get: function () {
            return this.cell.biasRegularizer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "kernelConstraint", {
        get: function () {
            return this.cell.kernelConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "recurrentConstraint", {
        get: function () {
            return this.cell.recurrentConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "biasConstraint", {
        get: function () {
            return this.cell.biasConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "dropout", {
        get: function () {
            return this.cell.dropout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "recurrentDropout", {
        get: function () {
            return this.cell.recurrentDropout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTM.prototype, "implementation", {
        get: function () {
            return this.cell.implementation;
        },
        enumerable: true,
        configurable: true
    });
    LSTM.prototype.getConfig = function () {
        var config = {
            units: this.units,
            activation: activations_1.serializeActivation(this.activation),
            recurrentActivation: activations_1.serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: initializers_1.serializeInitializer(this.kernelInitializer),
            recurrentInitializer: initializers_1.serializeInitializer(this.recurrentInitializer),
            biasInitializer: initializers_1.serializeInitializer(this.biasInitializer),
            unitForgetBias: this.unitForgetBias,
            kernelRegularizer: regularizers_1.serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: regularizers_1.serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: regularizers_1.serializeRegularizer(this.biasRegularizer),
            activityRegularizer: regularizers_1.serializeRegularizer(this.activityRegularizer),
            kernelConstraint: constraints_1.serializeConstraint(this.kernelConstraint),
            recurrentConstraint: constraints_1.serializeConstraint(this.recurrentConstraint),
            biasConstraint: constraints_1.serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation,
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        delete baseConfig['cell'];
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    LSTM.fromConfig = function (cls, config) {
        if (config['implmentation'] === 0) {
            config['implementation'] = 1;
        }
        return new cls(config);
    };
    /** @nocollapse */
    LSTM.className = 'LSTM';
    return LSTM;
}(RNN));
exports.LSTM = LSTM;
tfjs_core_1.serialization.registerClass(LSTM);
/**
 * Wrapper allowing a stack of RNN cells to behave as a single cell.
 *
 * Used to implement efficient stacked RNNs.
 */
var StackedRNNCells = /** @class */ (function (_super) {
    __extends(StackedRNNCells, _super);
    function StackedRNNCells(args) {
        var _this = _super.call(this, args) || this;
        _this.cells = args.cells;
        return _this;
    }
    Object.defineProperty(StackedRNNCells.prototype, "stateSize", {
        get: function () {
            // States are a flat list in reverse order of the cell stack.
            // This allows perserving the requirement `stack.statesize[0] ===
            // outputDim`. E.g., states of a 2-layer LSTM would be `[h2, c2, h1, c1]`,
            // assuming one LSTM has states `[h, c]`.
            var stateSize = [];
            for (var _i = 0, _a = this.cells.slice().reverse(); _i < _a.length; _i++) {
                var cell = _a[_i];
                if (Array.isArray(cell.stateSize)) {
                    stateSize.push.apply(stateSize, cell.stateSize);
                }
                else {
                    stateSize.push(cell.stateSize);
                }
            }
            return stateSize;
        },
        enumerable: true,
        configurable: true
    });
    StackedRNNCells.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            inputs = inputs;
            var states = inputs.slice(1);
            // Recover per-cell states.
            var nestedStates = [];
            for (var _i = 0, _a = _this.cells.slice().reverse(); _i < _a.length; _i++) {
                var cell = _a[_i];
                if (Array.isArray(cell.stateSize)) {
                    nestedStates.push(states.splice(0, cell.stateSize.length));
                }
                else {
                    nestedStates.push(states.splice(0, 1));
                }
            }
            nestedStates.reverse();
            // Call the cells in order and store the returned states.
            var newNestedStates = [];
            var callInputs;
            for (var i = 0; i < _this.cells.length; ++i) {
                var cell = _this.cells[i];
                states = nestedStates[i];
                // TODO(cais): Take care of constants.
                if (i === 0) {
                    callInputs = [inputs[0]].concat(states);
                }
                else {
                    callInputs = [callInputs[0]].concat(states);
                }
                callInputs = cell.call(callInputs, kwargs);
                newNestedStates.push(callInputs.slice(1));
            }
            // Format the new states as a flat list in reverse cell order.
            states = [];
            for (var _b = 0, _c = newNestedStates.slice().reverse(); _b < _c.length; _b++) {
                var cellStates = _c[_b];
                states.push.apply(states, cellStates);
            }
            return [callInputs[0]].concat(states);
        });
    };
    StackedRNNCells.prototype.build = function (inputShape) {
        if (types_utils_1.isArrayOfShapes(inputShape)) {
            // TODO(cais): Take care of input constants.
            // const constantShape = inputShape.slice(1);
            inputShape = inputShape[0];
        }
        inputShape = inputShape;
        var outputDim;
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            // TODO(cais): Take care of input constants.
            cell.build(inputShape);
            if (Array.isArray(cell.stateSize)) {
                outputDim = cell.stateSize[0];
            }
            else {
                outputDim = cell.stateSize;
            }
            inputShape = [inputShape[0], outputDim];
        }
        this.built = true;
    };
    StackedRNNCells.prototype.getConfig = function () {
        var cellConfigs = [];
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            cellConfigs.push({
                'className': this.getClassName(),
                'config': cell.getConfig(),
            });
        }
        var config = { 'cells': cellConfigs };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    StackedRNNCells.fromConfig = function (cls, config, customObjects) {
        if (customObjects === void 0) { customObjects = {}; }
        var cells = [];
        for (var _i = 0, _a = config['cells']; _i < _a.length; _i++) {
            var cellConfig = _a[_i];
            cells.push(serialization_1.deserialize(cellConfig, customObjects));
        }
        return new cls({ cells: cells });
    };
    Object.defineProperty(StackedRNNCells.prototype, "trainableWeights", {
        get: function () {
            if (!this.trainable) {
                return [];
            }
            var weights = [];
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                weights.push.apply(weights, cell.trainableWeights);
            }
            return weights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedRNNCells.prototype, "nonTrainableWeights", {
        get: function () {
            var weights = [];
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                weights.push.apply(weights, cell.nonTrainableWeights);
            }
            if (!this.trainable) {
                var trainableWeights = [];
                for (var _b = 0, _c = this.cells; _b < _c.length; _b++) {
                    var cell = _c[_b];
                    trainableWeights.push.apply(trainableWeights, cell.trainableWeights);
                }
                return trainableWeights.concat(weights);
            }
            return weights;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieve the weights of a the model.
     *
     * @returns A flat `Array` of `tf.Tensor`s.
     */
    StackedRNNCells.prototype.getWeights = function () {
        var weights = [];
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            weights.push.apply(weights, cell.weights);
        }
        return variables_1.batchGetValue(weights);
    };
    /**
     * Set the weights of the model.
     *
     * @param weights An `Array` of `tf.Tensor`s with shapes and types matching
     *     the output of `getWeights()`.
     */
    StackedRNNCells.prototype.setWeights = function (weights) {
        var tuples = [];
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            var numParams = cell.weights.length;
            var inputWeights = weights.splice(numParams);
            for (var i = 0; i < cell.weights.length; ++i) {
                tuples.push([cell.weights[i], inputWeights[i]]);
            }
        }
        variables_1.batchSetValue(tuples);
    };
    /** @nocollapse */
    StackedRNNCells.className = 'StackedRNNCells';
    return StackedRNNCells;
}(RNNCell));
exports.StackedRNNCells = StackedRNNCells;
tfjs_core_1.serialization.registerClass(StackedRNNCells);
function generateDropoutMask(ones, rate, training, count) {
    if (training === void 0) { training = null; }
    if (count === void 0) { count = 1; }
    function droppedInputs() {
        return K.dropout(ones(), state_1.getScalar(rate));
    }
    if (count > 1) {
        var mask = [];
        for (var i = 0; i < count; i++) {
            mask.push(K.inTrainPhase(droppedInputs, ones, training));
        }
        mask.forEach(function (m) { return tfc.keep(m); });
        return mask;
    }
    else {
        return tfc.keep(K.inTrainPhase(droppedInputs, ones, training));
    }
}
//# sourceMappingURL=recurrent.js.map
}, function(modId) { var map = {"../activations":1553229508459,"../backend/state":1553229508426,"../backend/tfjs_backend":1553229508431,"../constraints":1553229508424,"../engine/topology":1553229508438,"../errors":1553229508428,"../initializers":1553229508430,"../regularizers":1553229508460,"../utils/generic_utils":1553229508427,"../utils/math_utils":1553229508434,"../utils/types_utils":1553229508439,"../variables":1553229508441,"./serialization":1553229508452}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508471, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Layers that augment the functionality of a base layer.
 */
var tfc = require("@tensorflow/tfjs-core");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var state_1 = require("../backend/state");
var K = require("../backend/tfjs_backend");
var common_1 = require("../common");
var topology_1 = require("../engine/topology");
var errors_1 = require("../errors");
var common_2 = require("../keras_format/common");
var generic_utils = require("../utils/generic_utils");
var types_utils_1 = require("../utils/types_utils");
var recurrent_1 = require("./recurrent");
var serialization_1 = require("./serialization");
/**
 * Abstract wrapper base class.
 *
 * Wrappers take another layer and augment it in various ways.
 * Do not use this class as a layer, it is only an abstract base class.
 * Two usable wrappers are the `TimeDistributed` and `Bidirectional` wrappers.
 */
var Wrapper = /** @class */ (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper(args) {
        var _this = 
        // Porting Note: In PyKeras, `self.layer` is set prior to the calling
        //   `super()`. But we can't do that here due to TypeScript's restriction.
        //   See: https://github.com/Microsoft/TypeScript/issues/8277
        //   As a result, we have to add checks in `get trainable()` and
        //   `set trainable()` below in order to prevent using `this.layer` when
        //   its value is `undefined`. The super constructor does use the getter
        //   and the setter of `this.layer`.
        _super.call(this, args) || this;
        _this.layer = args.layer;
        return _this;
    }
    Wrapper.prototype.build = function (inputShape) {
        this.built = true;
    };
    Object.defineProperty(Wrapper.prototype, "trainable", {
        // TODO(cais): Implement activityRegularizer getter.
        get: function () {
            // Porting Note: the check of `this.layer` here is necessary due to the
            //   way the `constructor` of this class is written (see Porting Note
            //   above).
            if (this.layer != null) {
                return this.layer.trainable;
            }
            else {
                return false;
            }
        },
        set: function (value) {
            // Porting Note: the check of `this.layer` here is necessary due to the
            //   way the `constructor` of this class is written (see Porting Note
            //   above).
            if (this.layer != null) {
                this.layer.trainable = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wrapper.prototype, "trainableWeights", {
        get: function () {
            return this.layer.trainableWeights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wrapper.prototype, "nonTrainableWeights", {
        // TODO(cais): Implement setter for trainableWeights.
        get: function () {
            return this.layer.nonTrainableWeights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wrapper.prototype, "updates", {
        // TODO(cais): Implement setter for nonTrainableWeights.
        get: function () {
            // tslint:disable-next-line:no-any
            return this.layer._updates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wrapper.prototype, "losses", {
        // TODO(cais): Implement getUpdatesFor().
        get: function () {
            return this.layer.losses;
        },
        enumerable: true,
        configurable: true
    });
    // TODO(cais): Implement getLossesFor().
    Wrapper.prototype.getWeights = function () {
        return this.layer.getWeights();
    };
    Wrapper.prototype.setWeights = function (weights) {
        this.layer.setWeights(weights);
    };
    Wrapper.prototype.getConfig = function () {
        var config = {
            'layer': {
                'className': this.layer.getClassName(),
                'config': this.layer.getConfig(),
            }
        };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    Wrapper.prototype.setFastWeightInitDuringBuild = function (value) {
        _super.prototype.setFastWeightInitDuringBuild.call(this, value);
        if (this.layer != null) {
            this.layer.setFastWeightInitDuringBuild(value);
        }
    };
    /** @nocollapse */
    Wrapper.fromConfig = function (cls, config, customObjects) {
        if (customObjects === void 0) { customObjects = {}; }
        var layerConfig = config['layer'];
        var layer = serialization_1.deserialize(layerConfig, customObjects);
        delete config['layer'];
        var newConfig = { layer: layer };
        Object.assign(newConfig, config);
        return new cls(newConfig);
    };
    return Wrapper;
}(topology_1.Layer));
exports.Wrapper = Wrapper;
/**
 * This wrapper applies a layer to every temporal slice of an input.
 *
 * The input should be at least 3D,  and the dimension of the index `1` will be
 * considered to be the temporal dimension.
 *
 * Consider a batch of 32 samples, where each sample is a sequence of 10 vectors
 * of 16 dimensions. The batch input shape of the layer is then `[32,  10,
 * 16]`, and the `inputShape`, not including the sample dimension, is
 * `[10, 16]`.
 *
 * You can then use `TimeDistributed` to apply a `Dense` layer to each of the 10
 * timesteps, independently:
 *
 * ```js
 * const model = tf.sequential();
 * model.add(tf.layers.timeDistributed({
 *   layer: tf.layers.dense({units: 8}),
 *   inputShape: [10, 16],
 * }));
 *
 * // Now model.outputShape = [null, 10, 8].
 * // The output will then have shape `[32, 10, 8]`.
 *
 * // In subsequent layers, there is no need for `inputShape`:
 * model.add(tf.layers.timeDistributed({layer: tf.layers.dense({units: 32})}));
 * console.log(JSON.stringify(model.outputs[0].shape));
 * // Now model.outputShape = [null, 10, 32].
 * ```
 *
 * The output will then have shape `[32, 10, 32]`.
 *
 * `TimeDistributed` can be used with arbitrary layers, not just `Dense`, for
 * instance a `Conv2D` layer.
 *
 * ```js
 * const model = tf.sequential();
 * model.add(tf.layers.timeDistributed({
 *   layer: tf.layers.conv2d({filters: 64, kernelSize: [3, 3]}),
 *   inputShape: [10, 299, 299, 3],
 * }));
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 */
var TimeDistributed = /** @class */ (function (_super) {
    __extends(TimeDistributed, _super);
    function TimeDistributed(args) {
        var _this = _super.call(this, args) || this;
        _this.supportsMasking = true;
        return _this;
    }
    TimeDistributed.prototype.build = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        if (inputShape.length < 3) {
            throw new errors_1.ValueError("TimeDistributed layer expects an input shape >= 3D, but received " +
                ("input shape " + JSON.stringify(inputShape)));
        }
        this.inputSpec = [{ shape: inputShape }];
        var childInputShape = [inputShape[0]].concat(inputShape.slice(2));
        if (!this.layer.built) {
            this.layer.build(childInputShape);
            this.layer.built = true;
        }
        _super.prototype.build.call(this, inputShape);
    };
    TimeDistributed.prototype.computeOutputShape = function (inputShape) {
        inputShape = types_utils_1.getExactlyOneShape(inputShape);
        var childInputShape = [inputShape[0]].concat(inputShape.slice(2));
        var childOutputShape = this.layer.computeOutputShape(childInputShape);
        var timesteps = inputShape[1];
        return [childOutputShape[0], timesteps].concat(childOutputShape.slice(1));
    };
    TimeDistributed.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            // TODO(cais): Add 'training' and 'useLearningPhase' to kwargs.
            inputs = types_utils_1.getExactlyOneTensor(inputs);
            // Porting Note: In tfjs-layers, `inputs` are always concrete tensor
            // values. Hence the inputs can't have an undetermined first (batch)
            // dimension, which is why we always use the K.rnn approach here.
            var step = function (inputs, states) {
                // TODO(cais): Add useLearningPhase.
                // NOTE(cais): `layer.call` may return a length-1 array of Tensor in
                //   some cases (e.g., `layer` is a `Sequential` instance), which is
                //   why `getExactlyOneTensor` is used below.
                var output = types_utils_1.getExactlyOneTensor(_this.layer.call(inputs, kwargs));
                return [output, []];
            };
            var rnnOutputs = recurrent_1.rnn(step, inputs, [], false /* goBackwards */, null /* mask */, null /* constants */, false /* unroll */, true /* needPerStepOutputs */);
            var y = rnnOutputs[1];
            // TODO(cais): Add activity regularization.
            // TODO(cais): Add useLearningPhase.
            return y;
        });
    };
    /** @nocollapse */
    TimeDistributed.className = 'TimeDistributed';
    return TimeDistributed;
}(Wrapper));
exports.TimeDistributed = TimeDistributed;
tfjs_core_1.serialization.registerClass(TimeDistributed);
function checkBidirectionalMergeMode(value) {
    generic_utils.checkStringTypeUnionValue(common_2.VALID_BIDIRECTIONAL_MERGE_MODES, 'BidirectionalMergeMode', value);
}
exports.checkBidirectionalMergeMode = checkBidirectionalMergeMode;
var DEFAULT_BIDIRECTIONAL_MERGE_MODE = 'concat';
var Bidirectional = /** @class */ (function (_super) {
    __extends(Bidirectional, _super);
    function Bidirectional(args) {
        var _this = _super.call(this, args) || this;
        // Note: When creating `this.forwardLayer`, the original Layer object
        //   (`config.layer`) ought to be cloned. This is why we call
        //   `getConfig()` followed by `deserialize()`. Without this cloning,
        //   the layer names saved during serialization will incorrectly contain
        //   the 'forward_' prefix. In Python Keras, this is done using
        //   `copy.copy` (shallow copy), which does not have a simple equivalent
        //   in JavaScript. JavaScript's `Object.assign()` does not copy
        //   methods.
        var layerConfig = args.layer.getConfig();
        var forwDict = {};
        forwDict.className = args.layer.getClassName();
        forwDict.config = layerConfig;
        _this.forwardLayer = serialization_1.deserialize(forwDict);
        layerConfig['goBackwards'] =
            layerConfig['goBackwards'] === true ? false : true;
        var backDict = {};
        backDict.className = args.layer.getClassName();
        backDict.config = layerConfig;
        _this.backwardLayer = serialization_1.deserialize(backDict);
        _this.forwardLayer.name = 'forward_' + _this.forwardLayer.name;
        _this.backwardLayer.name = 'backward_' + _this.backwardLayer.name;
        _this.mergeMode = args.mergeMode === undefined ?
            DEFAULT_BIDIRECTIONAL_MERGE_MODE :
            args.mergeMode;
        checkBidirectionalMergeMode(_this.mergeMode);
        if (args.weights) {
            throw new errors_1.NotImplementedError('weights support is not implemented for Bidirectional layer yet.');
        }
        _this._stateful = args.layer.stateful;
        _this.returnSequences = args.layer.returnSequences;
        _this.returnState = args.layer.returnState;
        _this.supportsMasking = true;
        _this._trainable = true;
        _this.inputSpec = args.layer.inputSpec;
        _this.numConstants = null;
        return _this;
    }
    Object.defineProperty(Bidirectional.prototype, "trainable", {
        get: function () {
            return this._trainable;
        },
        set: function (value) {
            // Porting Note: the check of `this.layer` here is necessary due to the
            //   way the `constructor` of this class is written (see Porting Note
            //   above).
            this._trainable = value;
            if (this.forwardLayer != null) {
                this.forwardLayer.trainable = value;
            }
            if (this.backwardLayer != null) {
                this.backwardLayer.trainable = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Bidirectional.prototype.getWeights = function () {
        return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights());
    };
    Bidirectional.prototype.setWeights = function (weights) {
        var numWeights = weights.length;
        var numeightsOver2 = Math.floor(numWeights / 2);
        this.forwardLayer.setWeights(weights.slice(0, numeightsOver2));
        this.backwardLayer.setWeights(weights.slice(numeightsOver2));
    };
    Bidirectional.prototype.computeOutputShape = function (inputShape) {
        var layerShapes = this.forwardLayer.computeOutputShape(inputShape);
        if (!(Array.isArray(layerShapes) && Array.isArray(layerShapes[0]))) {
            layerShapes = [layerShapes];
        }
        layerShapes = layerShapes;
        var outputShape;
        var outputShapes;
        var stateShape;
        if (this.returnState) {
            stateShape = layerShapes.slice(1);
            outputShape = layerShapes[0];
        }
        else {
            outputShape = layerShapes[0];
        }
        outputShape = outputShape;
        if (this.mergeMode === 'concat') {
            outputShape[outputShape.length - 1] *= 2;
            outputShapes = [outputShape];
        }
        else if (this.mergeMode == null) {
            outputShapes = [outputShape, outputShape.slice()];
        }
        else {
            outputShapes = [outputShape];
        }
        if (this.returnState) {
            if (this.mergeMode == null) {
                return outputShapes.concat(stateShape).concat(stateShape.slice());
            }
            return [outputShape].concat(stateShape).concat(stateShape.slice());
        }
        return generic_utils.singletonOrArray(outputShapes);
    };
    Bidirectional.prototype.apply = function (inputs, kwargs) {
        var initialState = kwargs == null ? null : kwargs['initialState'];
        var constants = kwargs == null ? null : kwargs['constants'];
        if (kwargs == null) {
            kwargs = {};
        }
        var standardized = recurrent_1.standardizeArgs(inputs, initialState, constants, this.numConstants);
        inputs = standardized.inputs;
        initialState = standardized.initialState;
        constants = standardized.constants;
        if (Array.isArray(inputs)) {
            initialState = inputs.slice(1);
            inputs = inputs[0];
        }
        if ((initialState == null || initialState.length === 0) &&
            constants == null) {
            return _super.prototype.apply.call(this, inputs, kwargs);
        }
        var additionalInputs = [];
        var additionalSpecs = [];
        if (initialState != null) {
            var numStates = initialState.length;
            if (numStates % 2 > 0) {
                throw new errors_1.ValueError('When passing `initialState` to a Bidrectional RNN, ' +
                    'the state should be an Array containing the states of ' +
                    'the underlying RNNs.');
            }
            kwargs['initialState'] = initialState;
            additionalInputs.push.apply(additionalInputs, initialState);
            var stateSpecs = initialState
                .map(function (state) { return new topology_1.InputSpec({ shape: state.shape }); });
            this.forwardLayer.stateSpec = stateSpecs.slice(0, numStates / 2);
            this.backwardLayer.stateSpec = stateSpecs.slice(numStates / 2);
            additionalSpecs.push.apply(additionalSpecs, stateSpecs);
        }
        if (constants != null) {
            throw new errors_1.NotImplementedError('Support for constants in Bidirectional layers is not ' +
                'implemented yet.');
        }
        var isSymbolicTensor = additionalInputs[0] instanceof topology_1.SymbolicTensor;
        for (var _i = 0, additionalInputs_1 = additionalInputs; _i < additionalInputs_1.length; _i++) {
            var tensor = additionalInputs_1[_i];
            if (tensor instanceof topology_1.SymbolicTensor !== isSymbolicTensor) {
                throw new errors_1.ValueError('The initial state of a Bidirectional layer cannot be ' +
                    'specified as a mix of symbolic and non-symbolic tensors');
            }
        }
        if (isSymbolicTensor) {
            // Compute the full input and specs, including the states.
            var fullInput = [inputs].concat(additionalInputs);
            var fullInputSpec = this.inputSpec.concat(additionalSpecs);
            // Perform the call temporarily and replace inputSpec.
            // Note: with initial states symbolic calls and non-symbolic calls to
            // this method differ in how the initial states are passed. For
            // symbolic calls, the initial states are passed in the first arg, as
            // an Array of SymbolicTensors; for non-symbolic calls, they are
            // passed in the second arg as a part of the kwargs. Hence the need to
            // temporarily modify inputSpec here.
            // TODO(cais): Make refactoring so that this hacky code below is no
            // longer needed.
            var originalInputSpec = this.inputSpec;
            this.inputSpec = fullInputSpec;
            var output = _super.prototype.apply.call(this, fullInput, kwargs);
            this.inputSpec = originalInputSpec;
            return output;
        }
        else {
            return _super.prototype.apply.call(this, inputs, kwargs);
        }
    };
    Bidirectional.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (kwargs['mask'] != null) {
                throw new errors_1.NotImplementedError('The support for masking is not implemented for ' +
                    'Bidirectional layers yet.');
            }
            var initialState = kwargs['initialState'];
            var y;
            var yRev;
            if (initialState == null) {
                y = _this.forwardLayer.call(inputs, kwargs);
                yRev = _this.backwardLayer.call(inputs, kwargs);
            }
            else {
                var forwardState = initialState.slice(0, initialState.length / 2);
                var backwardState = initialState.slice(initialState.length / 2);
                y = _this.forwardLayer.call(inputs, Object.assign(kwargs, { initialState: forwardState }));
                yRev = _this.backwardLayer.call(inputs, Object.assign(kwargs, { initialState: backwardState }));
            }
            var states;
            if (_this.returnState) {
                if (Array.isArray(y)) {
                    states = y.slice(1).concat(yRev.slice(1));
                }
                else {
                }
                y = y[0];
                yRev = yRev[0];
            }
            if (_this.returnSequences) {
                yRev = tfc.reverse(yRev, 1);
            }
            var output;
            if (_this.mergeMode === 'concat') {
                output = K.concatenate([y, yRev]);
            }
            else if (_this.mergeMode === 'sum') {
                output = tfc.add(y, yRev);
            }
            else if (_this.mergeMode === 'ave') {
                output = tfc.mul(state_1.getScalar(0.5), tfc.add(y, yRev));
            }
            else if (_this.mergeMode === 'mul') {
                output = tfc.mul(y, yRev);
            }
            else if (_this.mergeMode == null) {
                output = [y, yRev];
            }
            // TODO(cais): Properly set learning phase.
            if (_this.returnState) {
                if (_this.mergeMode == null) {
                    return output.concat(states);
                }
                return [output].concat(states);
            }
            return output;
        });
    };
    Bidirectional.prototype.resetStates = function (states) {
        this.forwardLayer.resetStates();
        this.backwardLayer.resetStates();
    };
    Bidirectional.prototype.build = function (inputShape) {
        var _this = this;
        common_1.nameScope(this.forwardLayer.name, function () {
            _this.forwardLayer.build(inputShape);
        });
        common_1.nameScope(this.backwardLayer.name, function () {
            _this.backwardLayer.build(inputShape);
        });
        this.built = true;
    };
    Object.defineProperty(Bidirectional.prototype, "trainableWeights", {
        // TODO(cais): Implement computeMask().
        get: function () {
            return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bidirectional.prototype, "nonTrainableWeights", {
        get: function () {
            return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights);
        },
        enumerable: true,
        configurable: true
    });
    // TODO(cais): Implement constraints().
    Bidirectional.prototype.setFastWeightInitDuringBuild = function (value) {
        _super.prototype.setFastWeightInitDuringBuild.call(this, value);
        if (this.forwardLayer != null) {
            this.forwardLayer.setFastWeightInitDuringBuild(value);
        }
        if (this.backwardLayer != null) {
            this.backwardLayer.setFastWeightInitDuringBuild(value);
        }
    };
    Bidirectional.prototype.getConfig = function () {
        var config = {
            'mergeMode': this.mergeMode,
        };
        // TODO(cais): Add logic for `numConstants` once the property is added.
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    /** @nocollapse */
    Bidirectional.fromConfig = function (cls, config) {
        var rnnLayer = serialization_1.deserialize(config['layer']);
        delete config['layer'];
        // TODO(cais): Add logic for `numConstants` once the property is added.
        if (config['numConstants'] != null) {
            throw new errors_1.NotImplementedError("Deserialization of a Bidirectional layer with numConstants " +
                "present is not supported yet.");
        }
        // tslint:disable-next-line:no-any
        var newConfig = config;
        newConfig['layer'] = rnnLayer;
        return new cls(newConfig);
    };
    /** @nocollapse */
    Bidirectional.className = 'Bidirectional';
    return Bidirectional;
}(Wrapper));
exports.Bidirectional = Bidirectional;
tfjs_core_1.serialization.registerClass(Bidirectional);
//# sourceMappingURL=wrappers.js.map
}, function(modId) { var map = {"../backend/state":1553229508426,"../backend/tfjs_backend":1553229508431,"../common":1553229508432,"../engine/topology":1553229508438,"../errors":1553229508428,"../keras_format/common":1553229508433,"../utils/generic_utils":1553229508427,"../utils/types_utils":1553229508439,"./recurrent":1553229508470,"./serialization":1553229508452}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508472, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TensorFlow.js Layers: Noise Layers.
 */
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var K = require("../backend/tfjs_backend");
var topology_1 = require("../engine/topology");
var types_utils_1 = require("../utils/types_utils");
/**
 * Apply additive zero-centered Gaussian noise.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * This is useful to mitigate overfitting
 * (you could see it as a form of random data augmentation).
 * Gaussian Noise (GS) is a natural choice as corruption process
 * for real valued inputs.
 *
 * # Arguments
 *     stddev: float, standard deviation of the noise distribution.
 *
 * # Input shape
 *         Arbitrary. Use the keyword argument `input_shape`
 *         (tuple of integers, does not include the samples axis)
 *         when using this layer as the first layer in a model.
 *
 * # Output shape
 *         Same shape as input.
 */
var GaussianNoise = /** @class */ (function (_super) {
    __extends(GaussianNoise, _super);
    function GaussianNoise(args) {
        var _this = _super.call(this, args) || this;
        _this.supportsMasking = true;
        _this.stddev = args.stddev;
        return _this;
    }
    GaussianNoise.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    GaussianNoise.prototype.getConfig = function () {
        var baseConfig = _super.prototype.getConfig.call(this);
        var config = { stddev: this.stddev };
        Object.assign(config, baseConfig);
        return config;
    };
    GaussianNoise.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            var input = types_utils_1.getExactlyOneTensor(inputs);
            var noised = function () {
                return K.randomNormal(input.shape, 0, _this.stddev).add(input);
            };
            var output = K.inTrainPhase(noised, function () { return input; }, kwargs.training || false);
            return output;
        });
    };
    GaussianNoise.className = 'GaussianNoise';
    return GaussianNoise;
}(topology_1.Layer));
exports.GaussianNoise = GaussianNoise;
tfjs_core_1.serialization.registerClass(GaussianNoise);
/**
 * Apply multiplicative 1-centered Gaussian noise.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * # Arguments
 *     rate: float, drop probability (as with `Dropout`).
 *        The multiplicative noise will have
 *        standard deviation `sqrt(rate / (1 - rate))`.
 *
 * # Input shape
 *     Arbitrary. Use the keyword argument `input_shape`
 *     (tuple of integers, does not include the samples axis)
 *     when using this layer as the first layer in a model.
 *
 * # Output shape
 *     Same shape as input.
 *
 * # References
 *     - [Dropout: A Simple Way to Prevent Neural Networks from Overfitting](
 *        http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
 *
 */
var GaussianDropout = /** @class */ (function (_super) {
    __extends(GaussianDropout, _super);
    function GaussianDropout(args) {
        var _this = _super.call(this, args) || this;
        _this.supportsMasking = true;
        _this.rate = args.rate;
        return _this;
    }
    GaussianDropout.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    GaussianDropout.prototype.getConfig = function () {
        var baseConfig = _super.prototype.getConfig.call(this);
        var config = { rate: this.rate };
        Object.assign(config, baseConfig);
        return config;
    };
    GaussianDropout.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            _this.invokeCallHook(inputs, kwargs);
            var input = types_utils_1.getExactlyOneTensor(inputs);
            if (_this.rate > 0 && _this.rate < 1) {
                var noised = function () {
                    var stddev = Math.sqrt(_this.rate / (1 - _this.rate));
                    return K.dot(input, K.randomNormal(input.shape, 1, stddev));
                };
                return K.inTrainPhase(noised, function () { return input; }, kwargs.training || false);
            }
            return input;
        });
    };
    GaussianDropout.className = 'GaussianDropout';
    return GaussianDropout;
}(topology_1.Layer));
exports.GaussianDropout = GaussianDropout;
tfjs_core_1.serialization.registerClass(GaussianDropout);
/**
 * Applies Alpha Dropout to the input.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * Alpha Dropout is a `Dropout` that keeps mean and variance of inputs
 * to their original values, in order to ensure the self-normalizing property
 * even after this dropout.
 * Alpha Dropout fits well to Scaled Exponential Linear Units
 * by randomly setting activations to the negative saturation value.
 *
 * # Arguments
 *    rate: float, drop probability (as with `Dropout`).
 *        The multiplicative noise will have
 *        standard deviation `sqrt(rate / (1 - rate))`.
 *    noise_shape: A 1-D `Tensor` of type `int32`, representing the
 *         shape for randomly generated keep/drop flags.
 *
 *
 * # Input shape
 *         Arbitrary. Use the keyword argument `input_shape`
 *         (tuple of integers, does not include the samples axis)
 *         when using this layer as the first layer in a model.
 *
 * # Output shape
 *         Same shape as input.
 *
 * # References
 *     - [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
 */
var AlphaDropout = /** @class */ (function (_super) {
    __extends(AlphaDropout, _super);
    function AlphaDropout(args) {
        var _this = _super.call(this, args) || this;
        _this.supportsMasking = true;
        _this.rate = args.rate;
        _this.noiseShape = args.noiseShape;
        return _this;
    }
    AlphaDropout.prototype._getNoiseShape = function (inputs) {
        return this.noiseShape || types_utils_1.getExactlyOneTensor(inputs).shape;
    };
    AlphaDropout.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    AlphaDropout.prototype.getConfig = function () {
        var baseConfig = _super.prototype.getConfig.call(this);
        var config = { rate: this.rate };
        Object.assign(config, baseConfig);
        return config;
    };
    AlphaDropout.prototype.call = function (inputs, kwargs) {
        var _this = this;
        return tfjs_core_1.tidy(function () {
            if (_this.rate < 1 && _this.rate > 0) {
                var noiseShape_1 = _this._getNoiseShape(inputs);
                var droppedInputs = function () {
                    var input = types_utils_1.getExactlyOneTensor(inputs);
                    var alpha = 1.6732632423543772848170429916717;
                    var scale = 1.0507009873554804934193349852946;
                    var alphaP = -alpha * scale;
                    var keptIdx = tfjs_core_1.greaterEqual(tfjs_core_1.randomUniform(noiseShape_1), _this.rate);
                    keptIdx = K.cast(keptIdx, 'float32'); // get default dtype.
                    // Get affine transformation params.
                    var a = Math.pow(((1 - _this.rate) * (1 + _this.rate * Math.pow(alphaP, 2))), -0.5);
                    var b = -a * alphaP * _this.rate;
                    // Apply mask.
                    var x = K.dot(input, keptIdx).add(keptIdx.add(-1).mul(alphaP));
                    return x.mul(a).add(b);
                };
                return K.inTrainPhase(droppedInputs, function () { return types_utils_1.getExactlyOneTensor(inputs); }, kwargs.training || false);
            }
            return inputs;
        });
    };
    AlphaDropout.className = 'AlphaDropout';
    return AlphaDropout;
}(topology_1.Layer));
exports.AlphaDropout = AlphaDropout;
tfjs_core_1.serialization.registerClass(AlphaDropout);
//# sourceMappingURL=noise.js.map
}, function(modId) { var map = {"../backend/tfjs_backend":1553229508431,"../engine/topology":1553229508438,"../utils/types_utils":1553229508439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508473, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var losses = require("./losses");
var metrics = require("./metrics");
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'binaryAccuracy'
 * }
 */
function binaryAccuracy(yTrue, yPred) {
    return metrics.binaryAccuracy(yTrue, yPred);
}
exports.binaryAccuracy = binaryAccuracy;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'binaryCrossentropy'
 * }
 */
function binaryCrossentropy(yTrue, yPred) {
    return metrics.binaryCrossentropy(yTrue, yPred);
}
exports.binaryCrossentropy = binaryCrossentropy;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'sparseCategoricalAccuracy'
 * }
 */
function sparseCategoricalAccuracy(yTrue, yPred) {
    return metrics.sparseCategoricalAccuracy(yTrue, yPred);
}
exports.sparseCategoricalAccuracy = sparseCategoricalAccuracy;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'categoricalAccuracy'
 * }
 */
function categoricalAccuracy(yTrue, yPred) {
    return metrics.categoricalAccuracy(yTrue, yPred);
}
exports.categoricalAccuracy = categoricalAccuracy;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'categoricalCrossentropy'
 * }
 */
function categoricalCrossentropy(yTrue, yPred) {
    return metrics.categoricalCrossentropy(yTrue, yPred);
}
exports.categoricalCrossentropy = categoricalCrossentropy;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'precision'
 * }
 */
function precision(yTrue, yPred) {
    return metrics.precision(yTrue, yPred);
}
exports.precision = precision;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'recall'
 * }
 */
function recall(yTrue, yPred) {
    return metrics.recall(yTrue, yPred);
}
exports.recall = recall;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'cosineProximity'
 * }
 */
function cosineProximity(yTrue, yPred) {
    return losses.cosineProximity(yTrue, yPred);
}
exports.cosineProximity = cosineProximity;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'meanAbsoluteError'
 * }
 */
function meanAbsoluteError(yTrue, yPred) {
    return losses.meanAbsoluteError(yTrue, yPred);
}
exports.meanAbsoluteError = meanAbsoluteError;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'meanAbsolutePercentageError'
 * }
 */
function meanAbsolutePercentageError(yTrue, yPred) {
    return losses.meanAbsolutePercentageError(yTrue, yPred);
}
exports.meanAbsolutePercentageError = meanAbsolutePercentageError;
function MAPE(yTrue, yPred) {
    return losses.meanAbsolutePercentageError(yTrue, yPred);
}
exports.MAPE = MAPE;
function mape(yTrue, yPred) {
    return losses.meanAbsolutePercentageError(yTrue, yPred);
}
exports.mape = mape;
/**
 * @doc {
 *   heading: 'Metrics',
 *   namespace: 'metrics',
 *   useDocsFrom: 'meanSquaredError'
 * }
 */
function meanSquaredError(yTrue, yPred) {
    return losses.meanSquaredError(yTrue, yPred);
}
exports.meanSquaredError = meanSquaredError;
function MSE(yTrue, yPred) {
    return losses.meanSquaredError(yTrue, yPred);
}
exports.MSE = MSE;
function mse(yTrue, yPred) {
    return losses.meanSquaredError(yTrue, yPred);
}
exports.mse = mse;
//# sourceMappingURL=exports_metrics.js.map
}, function(modId) { var map = {"./losses":1553229508446,"./metrics":1553229508447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508474, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
exports.modelFromJSON = models_1.modelFromJSON;
//# sourceMappingURL=exports_models.js.map
}, function(modId) { var map = {"./models":1553229508457}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508475, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var regularizers = require("./regularizers");
// tslint:disable-next-line:max-line-length
var regularizers_1 = require("./regularizers");
/**
 * @doc {
 *   heading: 'Regularizers',
 *   namespace: 'regularizers',
 *   useDocsFrom: 'L1L2'
 * }
 */
function l1l2(config) {
    return new regularizers_1.L1L2(config);
}
exports.l1l2 = l1l2;
/**
 * @doc {
 *   heading: 'Regularizers',
 *   namespace: 'regularizers',
 *   useDocsFrom: 'L1L2'
 * }
 */
function l1(config) {
    return regularizers.l1(config);
}
exports.l1 = l1;
/**
 * @doc {
 *   heading: 'Regularizers',
 *   namespace: 'regularizers',
 *   useDocsFrom: 'L1L2'
 * }
 */
function l2(config) {
    return regularizers.l2(config);
}
exports.l2 = l2;
//# sourceMappingURL=exports_regularizers.js.map
}, function(modId) { var map = {"./regularizers":1553229508460}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553229508476, function(require, module, exports) {
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* Original source: keras/callbacks.py */
var base_callbacks_1 = require("./base_callbacks");
var training_1 = require("./engine/training");
var Callback = /** @class */ (function (_super) {
    __extends(Callback, _super);
    function Callback() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Instance of `keras.models.Model`. Reference of the model being trained. */
        _this.model = null;
        return _this;
    }
    Callback.prototype.setModel = function (model) {
        if (!(model instanceof training_1.LayersModel)) {
            throw new Error('model must be a LayersModel, not some other Container');
        }
        this.model = model;
    };
    return Callback;
}(base_callbacks_1.BaseCallback));
exports.Callback = Callback;
//# sourceMappingURL=callbacks.js.map
}, function(modId) { var map = {"./base_callbacks":1553229508443,"./engine/training":1553229508445}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1553229508422);
})()
//# sourceMappingURL=index.js.map