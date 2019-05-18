module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1557782889612, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
var graph_model_1 = require("./executor/graph_model");
exports.GraphModel = graph_model_1.GraphModel;
exports.loadGraphModel = graph_model_1.loadGraphModel;
var version_1 = require("./version");
exports.version_converter = version_1.version;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./executor/graph_model":1557782889613,"./version":1557782889653}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889613, function(require, module, exports) {

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
var operation_mapper_1 = require("../operations/operation_mapper");
var graph_executor_1 = require("./graph_executor");
exports.TFHUB_SEARCH_PARAM = '?tfjs-format=file';
exports.DEFAULT_MODEL_NAME = 'model.json';
/**
 * A `tf.GraphModel` is a directed, acyclic graph of built from
 * SavedModel GraphDef and allows inference exeuction.
 *
 * A `tf.GraphModel` can only be created by loading from a model converted from
 * a [TensorFlow SavedModel](https://www.tensorflow.org/guide/saved_model) using
 * the command line converter tool and loaded via `tf.loadGraphModel`.
 */
/** @doc {heading: 'Models', subheading: 'Classes'} */
var GraphModel = /** @class */ (function () {
    /**
     * @param modelUrl url for the model, or an `io.IOHandler`.
     * @param weightManifestUrl url for the weight file generated by
     * scripts/convert.py script.
     * @param requestOption options for Request, which allows to send credentials
     * and custom headers.
     * @param onProgress Optional, progress callback function, fired periodically
     * before the load is completed.
     */
    function GraphModel(modelUrl, loadOptions) {
        if (loadOptions === void 0) { loadOptions = {}; }
        this.modelUrl = modelUrl;
        this.loadOptions = loadOptions;
        this.version = 'n/a';
        if (loadOptions == null) {
            this.loadOptions = {};
        }
    }
    Object.defineProperty(GraphModel.prototype, "modelVersion", {
        // Returns the version information for the tensorflow model GraphDef.
        get: function () {
            return this.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "inputNodes", {
        get: function () {
            return this.executor.inputNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "outputNodes", {
        get: function () {
            return this.executor.outputNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "inputs", {
        get: function () {
            return this.executor.inputs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "outputs", {
        get: function () {
            return this.executor.outputs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "weights", {
        get: function () {
            return this.executor.weightMap;
        },
        enumerable: true,
        configurable: true
    });
    GraphModel.prototype.findIOHandler = function () {
        var path = this.modelUrl;
        if (path.load != null) {
            // Path is an IO Handler.
            this.handler = path;
        }
        else if (this.loadOptions.requestInit != null) {
            this.handler = tfjs_core_1.io.browserHTTPRequest(path, this.loadOptions);
        }
        else {
            var handlers = tfjs_core_1.io.getLoadHandlers(path, this.loadOptions.onProgress);
            if (handlers.length === 0) {
                // For backward compatibility: if no load handler can be found,
                // assume it is a relative http path.
                handlers.push(tfjs_core_1.io.browserHTTPRequest(path, this.loadOptions));
            }
            else if (handlers.length > 1) {
                throw new Error("Found more than one (" + handlers.length + ") load handlers for " +
                    ("URL '" + [path] + "'"));
            }
            this.handler = handlers[0];
        }
    };
    /**
     * Loads the model and weight files, construct the in memory weight map and
     * compile the inference graph.
     */
    GraphModel.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var artifacts, graph, weightMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.findIOHandler();
                        if (this.handler.load == null) {
                            throw new Error('Cannot proceed with model loading because the IOHandler provided ' +
                                'does not have the `load` method implemented.');
                        }
                        return [4 /*yield*/, this.handler.load()];
                    case 1:
                        artifacts = _a.sent();
                        graph = artifacts.modelTopology;
                        this.version = graph.versions.producer + "." + graph.versions.minConsumer;
                        weightMap = tfjs_core_1.io.decodeWeights(artifacts.weightData, artifacts.weightSpecs);
                        this.executor =
                            new graph_executor_1.GraphExecutor(operation_mapper_1.OperationMapper.Instance.transformGraph(graph));
                        this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Execute the inference for the input tensors.
     *
     * @param input The input tensors, when there is single input for the model,
     * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
     * inputs params should be in either `tf.Tensor`[] if the input order is
     * fixed, or otherwise NamedTensorMap format.
     *
     * For model with multiple inputs, we recommend you use NamedTensorMap as the
     * input type, if you use `tf.Tensor`[], the order of the array needs to
     * follow the
     * order of inputNodes array. @see {@link GraphModel.inputNodes}
     *
     * You can also feed any intermediate nodes using the NamedTensorMap as the
     * input type. For example, given the graph
     *    InputNode => Intermediate => OutputNode,
     * you can execute the subgraph Intermediate => OutputNode by calling
     *    model.execute('IntermediateNode' : tf.tensor(...));
     *
     * This is useful for models that uses tf.dynamic_rnn, where the intermediate
     * state needs to be fed manually.
     *
     * For batch inference execution, the tensors for each input need to be
     * concatenated together. For example with mobilenet, the required input shape
     * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
     * If we are provide a batched data of 100 images, the input tensor should be
     * in the shape of [100, 244, 244, 3].
     *
     * @param config Prediction configuration for specifying the batch size and
     * output node names. Currently the batch size option is ignored for graph
     * model.
     *
     * @returns Inference result tensors. The output would be single `tf.Tensor`
     * if model has single output node, otherwise Tensor[] or NamedTensorMap[]
     * will be returned for model with multiple outputs.
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    GraphModel.prototype.predict = function (inputs, config) {
        return this.execute_(inputs, true, this.outputNodes);
    };
    GraphModel.prototype.constructTensorMap = function (inputs) {
        var inputArray = inputs instanceof tfjs_core_1.Tensor ? [inputs] : inputs;
        if (inputArray.length !== this.inputNodes.length) {
            throw new Error('Input tensor count mismatch,' +
                ("the graph model has " + this.inputNodes.length + " placeholders, ") +
                ("while there are " + inputArray.length + " input tensors."));
        }
        return this.inputNodes.reduce(function (map, inputName, i) {
            map[inputName] = inputArray[i];
            return map;
        }, {});
    };
    /**
     * Executes inference for the model for given input tensors.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the Tensorflow model, if no
     * outputs are specified, the default outputs of the model would be used.
     * You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     *
     * @returns A single tensor if provided with a single output or no outputs
     * are provided and there is only one default output, otherwise return a
     * tensor array. The order of the tensor array is the same as the outputs
     * if provided, otherwise the order of outputNodes attribute of the model.
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    GraphModel.prototype.execute = function (inputs, outputs) {
        return this.execute_(inputs, false, outputs);
    };
    GraphModel.prototype.execute_ = function (inputs, strictInputCheck, outputs) {
        if (strictInputCheck === void 0) { strictInputCheck = true; }
        outputs = outputs || this.outputNodes;
        if (inputs instanceof tfjs_core_1.Tensor || Array.isArray(inputs)) {
            inputs = this.constructTensorMap(inputs);
        }
        if (this.executor.isControlFlowModel || this.executor.isDynamicShapeModel) {
            throw new Error('The model contains control flow or dynamic shape ops, ' +
                'please use executeAsync method');
        }
        var result = this.executor.execute(this.convertTensorMapToTensorsMap(inputs), strictInputCheck, outputs);
        var keys = Object.keys(result);
        return (Array.isArray(outputs) && outputs.length > 1) ?
            outputs.map(function (node) { return result[node]; }) :
            result[keys[0]];
    };
    /**
     * Executes inference for the model for given input tensors in async
     * fashion, use this method when your model contains control flow ops.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the Tensorflow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     *
     * @returns A Promise of single tensor if provided with a single output or
     * no outputs are provided and there is only one default output, otherwise
     * return a tensor map.
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    GraphModel.prototype.executeAsync = function (inputs, outputs) {
        return __awaiter(this, void 0, void 0, function () {
            var result, keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.executor.isControlFlowModel ||
                            this.executor.isDynamicShapeModel)) {
                            throw new Error('The model does not contain control flow or dynamic shape ops, ' +
                                'please use execute method for better performance.');
                        }
                        outputs = outputs || this.outputNodes;
                        if (inputs instanceof tfjs_core_1.Tensor || Array.isArray(inputs)) {
                            inputs = this.constructTensorMap(inputs);
                        }
                        return [4 /*yield*/, this.executor.executeAsync(this.convertTensorMapToTensorsMap(inputs), outputs)];
                    case 1:
                        result = _a.sent();
                        keys = Object.keys(result);
                        return [2 /*return*/, Array.isArray(outputs) && outputs.length > 1 ?
                                outputs.map(function (node) { return result[node]; }) :
                                result[keys[0]]];
                }
            });
        });
    };
    GraphModel.prototype.convertTensorMapToTensorsMap = function (map) {
        return Object.keys(map).reduce(function (newMap, key) {
            newMap[key] = [map[key]];
            return newMap;
        }, {});
    };
    /**
     * Releases the memory used by the weight tensors.
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    GraphModel.prototype.dispose = function () {
        this.executor.dispose();
    };
    return GraphModel;
}());
exports.GraphModel = GraphModel;
/**
 * Load a graph model given a URL to the model definition.
 *
 * Example of loading MobileNetV2 from a URL and making a prediction with a
 * zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
 * const model = await tf.loadGraphModel(modelUrl);
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 *
 * Example of loading MobileNetV2 from a TF Hub URL and making a prediction with
 * a zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2';
 * const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 * @param modelUrl The url or an `io.IOHandler` that loads the model.
 * @param options Options for the HTTP request, which allows to send credentials
 *    and custom headers.
 */
/** @doc {heading: 'Models', subheading: 'Loading'} */
function loadGraphModel(modelUrl, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var model;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (modelUrl == null) {
                        throw new Error('modelUrl in loadGraphModel() cannot be null. Please provide a url ' +
                            'or an IOHandler that loads the model');
                    }
                    if (options == null) {
                        options = {};
                    }
                    if (options.fromTFHub) {
                        if (modelUrl.load == null) {
                            if (!modelUrl.endsWith('/')) {
                                modelUrl = modelUrl + '/';
                            }
                            modelUrl = "" + modelUrl + exports.DEFAULT_MODEL_NAME + exports.TFHUB_SEARCH_PARAM;
                        }
                    }
                    model = new GraphModel(modelUrl, options);
                    return [4 /*yield*/, model.load()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, model];
            }
        });
    });
}
exports.loadGraphModel = loadGraphModel;
//# sourceMappingURL=graph_model.js.map
}, function(modId) { var map = {"../operations/operation_mapper":1557782889614,"./graph_executor":1557782889633}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889614, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var tensorflow = require("../data/compiled_api");
var utils_1 = require("./executors/utils");
var arithmetic = require("./op_list/arithmetic");
var basicMath = require("./op_list/basic_math");
var control = require("./op_list/control");
var convolution = require("./op_list/convolution");
var creation = require("./op_list/creation");
var dynamic = require("./op_list/dynamic");
var evaluation = require("./op_list/evaluation");
var graph = require("./op_list/graph");
var image = require("./op_list/image");
var logical = require("./op_list/logical");
var matrices = require("./op_list/matrices");
var normalization = require("./op_list/normalization");
var reduction = require("./op_list/reduction");
var sliceJoin = require("./op_list/slice_join");
var spectral = require("./op_list/spectral");
var transformation = require("./op_list/transformation");
var CONTROL_FLOW_OPS = ['Switch', 'Merge', 'Enter', 'Exit', 'NextIteration'];
var DYNAMIC_SHAPE_OPS = ['NonMaxSuppressionV2', 'NonMaxSuppressionV3', 'Where'];
var OperationMapper = /** @class */ (function () {
    // Loads the op mapping from the JSON file.
    function OperationMapper() {
        var ops = [
            arithmetic, basicMath, control, convolution, creation, dynamic,
            evaluation, logical, image, graph, matrices, normalization, reduction,
            sliceJoin, spectral, transformation
        ];
        var mappersJson = [].concat.apply([], ops.map(function (op) { return op.json; }));
        this.opMappers = mappersJson.reduce(function (map, mapper) {
            map[mapper.tfOpName] = mapper;
            return map;
        }, {});
    }
    Object.defineProperty(OperationMapper, "Instance", {
        // Singleton instance for the mapper
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    OperationMapper.prototype.isControlFlow = function (node) {
        return CONTROL_FLOW_OPS.some(function (op) { return op === node.op; });
    };
    OperationMapper.prototype.isDynamicShape = function (node) {
        return DYNAMIC_SHAPE_OPS.some(function (op) { return op === node.op; });
    };
    // Converts the model from Tensorflow GraphDef to local representation for
    // TensorFlow.js API
    OperationMapper.prototype.transformGraph = function (graph) {
        var _this = this;
        var tfNodes = graph.node;
        var withControlFlow = false;
        var withDynamicShape = false;
        var placeholders = [];
        var weights = [];
        var nodes = tfNodes.reduce(function (map, node) {
            map[node.name] = _this.mapNode(node);
            if (_this.isControlFlow(node))
                withControlFlow = true;
            if (_this.isDynamicShape(node))
                withDynamicShape = true;
            if (node.op === 'Placeholder')
                placeholders.push(map[node.name]);
            if (node.op === 'Const')
                weights.push(map[node.name]);
            return map;
        }, {});
        var inputs = [];
        var outputs = [];
        Object.keys(nodes).forEach(function (key) {
            var node = nodes[key];
            node.inputNames.forEach(function (name) {
                var nodeName = utils_1.getNodeNameAndIndex(name)[0];
                node.inputs.push(nodes[nodeName]);
                nodes[nodeName].children.push(node);
            });
            if (node.inputs.length === 0)
                inputs.push(node);
        });
        Object.keys(nodes).forEach(function (key) {
            var node = nodes[key];
            if (node.children.length === 0)
                outputs.push(node);
        });
        return {
            nodes: nodes,
            inputs: inputs,
            outputs: outputs,
            weights: weights,
            placeholders: placeholders,
            withControlFlow: withControlFlow,
            withDynamicShape: withDynamicShape
        };
    };
    OperationMapper.prototype.mapNode = function (node) {
        var _this = this;
        var mapper = this.opMappers[node.op];
        if (mapper === undefined) {
            throw new Error('Tensorflow Op is not supported: ' + node.op);
        }
        var newNode = {
            name: node.name,
            op: node.op,
            category: mapper.category,
            inputNames: (node.input ||
                []).map(function (input) { return input.startsWith('^') ? input.substr(1) : input; }),
            inputs: [],
            children: [],
            inputParams: {},
            attrParams: {}
        };
        if (node.attr == null) {
            node.attr = {};
        }
        if (mapper.inputs != null) {
            newNode.inputParams =
                mapper.inputs.reduce(function (map, param) {
                    map[param.name] = {
                        type: param.type,
                        inputIndexStart: param.start,
                        inputIndexEnd: param.end
                    };
                    return map;
                }, {});
        }
        if (mapper.attrs != null) {
            newNode.attrParams =
                mapper.attrs.reduce(function (map, param) {
                    var type = param.type;
                    var value = undefined;
                    switch (param.type) {
                        case 'string':
                            value = _this.getStringParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = _this.getStringParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'number':
                            value = _this.getNumberParam(node.attr, param.tfName, (param.defaultValue || 0));
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = _this.getNumberParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'number[]':
                            value = _this.getNumericArrayParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = _this.getNumericArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'bool':
                            value = _this.getBoolParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = _this.getBoolParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'shape':
                            value = _this.getTensorShapeParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = _this.getTensorShapeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'dtype':
                            value = _this.getDtypeParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = _this.getDtypeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'tensor':
                        case 'tensors':
                            break;
                        default:
                            throw new Error("Unsupported param type: " + param.type + " for op: " + node.op);
                    }
                    map[param.name] = { value: value, type: type };
                    return map;
                }, {});
        }
        return newNode;
    };
    OperationMapper.prototype.decodeBase64 = function (text) {
        // tslint:disable-next-line:no-any
        var global = tfjs_core_1.ENV.global;
        if (typeof global.atob !== 'undefined') {
            return global.atob(text);
        }
        else if (typeof Buffer !== 'undefined') {
            return new Buffer(text, 'base64').toString();
        }
        else {
            throw new Error('Unable to decode base64 in this environment. ' +
                'Missing built-in atob() or Buffer()');
        }
    };
    OperationMapper.prototype.getStringParam = function (attrs, name, def, keepCase) {
        if (keepCase === void 0) { keepCase = false; }
        var param = attrs[name];
        if (param !== undefined) {
            var value = Array.isArray(param.s) ?
                String.fromCharCode.apply(null, param.s) :
                this.decodeBase64(param.s);
            return keepCase ? value : value.toLowerCase();
        }
        return def;
    };
    OperationMapper.prototype.getBoolParam = function (attrs, name, def) {
        var param = attrs[name];
        return param ? param.b : def;
    };
    OperationMapper.prototype.getNumberParam = function (attrs, name, def) {
        var param = attrs[name] || {};
        var value = param['i'] ? param['i'] : (param['f'] ? param['f'] : def);
        return (typeof value === 'number') ?
            value :
            parseInt(value, 10);
    };
    OperationMapper.prototype.getDtypeParam = function (attrs, name, def) {
        var param = attrs[name];
        if (param && param.type) {
            // tslint:disable-next-line:no-any
            var type = param.type;
            if (typeof (param.type) === 'string') {
                type = tensorflow.DataType[param.type];
            }
            switch (type) {
                case tensorflow.DataType.DT_FLOAT:
                    return 'float32';
                case tensorflow.DataType.DT_INT32:
                    return 'int32';
                case tensorflow.DataType.DT_BOOL:
                    return 'bool';
                default:
                    return def;
            }
        }
        return def;
    };
    OperationMapper.prototype.getTensorShapeParam = function (attrs, name, def) {
        var param = attrs[name];
        if (param && param.shape) {
            if (param.shape.unknownRank) {
                return undefined;
            }
            if (param.shape.dim != null) {
                return param.shape.dim.map(function (dim) { return (typeof dim.size === 'number') ?
                    dim.size :
                    parseInt(dim.size, 10); });
            }
        }
        return def;
    };
    OperationMapper.prototype.getNumericArrayParam = function (attrs, name, def) {
        var param = attrs[name];
        if (param) {
            return ((param.list.f && param.list.f.length ? param.list.f :
                param.list.i))
                .map(function (v) { return (typeof v === 'number') ?
                v :
                parseInt(v, 10); });
        }
        return def;
    };
    return OperationMapper;
}());
exports.OperationMapper = OperationMapper;
//# sourceMappingURL=operation_mapper.js.map
}, function(modId) { var map = {"../data/compiled_api":1557782889615,"./executors/utils":1557782889616,"./op_list/arithmetic":1557782889617,"./op_list/basic_math":1557782889618,"./op_list/control":1557782889619,"./op_list/convolution":1557782889620,"./op_list/creation":1557782889621,"./op_list/dynamic":1557782889622,"./op_list/evaluation":1557782889623,"./op_list/graph":1557782889624,"./op_list/image":1557782889625,"./op_list/logical":1557782889626,"./op_list/matrices":1557782889627,"./op_list/normalization":1557782889628,"./op_list/reduction":1557782889629,"./op_list/slice_join":1557782889630,"./op_list/spectral":1557782889631,"./op_list/transformation":1557782889632}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889615, function(require, module, exports) {

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
 *
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** DataType enum. */
var DataType;
(function (DataType) {
    DataType[DataType["DT_INVALID"] = 0] = "DT_INVALID";
    DataType[DataType["DT_FLOAT"] = 1] = "DT_FLOAT";
    DataType[DataType["DT_DOUBLE"] = 2] = "DT_DOUBLE";
    DataType[DataType["DT_INT32"] = 3] = "DT_INT32";
    DataType[DataType["DT_UINT8"] = 4] = "DT_UINT8";
    DataType[DataType["DT_INT16"] = 5] = "DT_INT16";
    DataType[DataType["DT_INT8"] = 6] = "DT_INT8";
    DataType[DataType["DT_STRING"] = 7] = "DT_STRING";
    DataType[DataType["DT_COMPLEX64"] = 8] = "DT_COMPLEX64";
    DataType[DataType["DT_INT64"] = 9] = "DT_INT64";
    DataType[DataType["DT_BOOL"] = 10] = "DT_BOOL";
    DataType[DataType["DT_QINT8"] = 11] = "DT_QINT8";
    DataType[DataType["DT_QUINT8"] = 12] = "DT_QUINT8";
    DataType[DataType["DT_QINT32"] = 13] = "DT_QINT32";
    DataType[DataType["DT_BFLOAT16"] = 14] = "DT_BFLOAT16";
    DataType[DataType["DT_FLOAT_REF"] = 101] = "DT_FLOAT_REF";
    DataType[DataType["DT_DOUBLE_REF"] = 102] = "DT_DOUBLE_REF";
    DataType[DataType["DT_INT32_REF"] = 103] = "DT_INT32_REF";
    DataType[DataType["DT_UINT8_REF"] = 104] = "DT_UINT8_REF";
    DataType[DataType["DT_INT16_REF"] = 105] = "DT_INT16_REF";
    DataType[DataType["DT_INT8_REF"] = 106] = "DT_INT8_REF";
    DataType[DataType["DT_STRING_REF"] = 107] = "DT_STRING_REF";
    DataType[DataType["DT_COMPLEX64_REF"] = 108] = "DT_COMPLEX64_REF";
    DataType[DataType["DT_INT64_REF"] = 109] = "DT_INT64_REF";
    DataType[DataType["DT_BOOL_REF"] = 110] = "DT_BOOL_REF";
    DataType[DataType["DT_QINT8_REF"] = 111] = "DT_QINT8_REF";
    DataType[DataType["DT_QUINT8_REF"] = 112] = "DT_QUINT8_REF";
    DataType[DataType["DT_QINT32_REF"] = 113] = "DT_QINT32_REF";
    DataType[DataType["DT_BFLOAT16_REF"] = 114] = "DT_BFLOAT16_REF";
})(DataType = exports.DataType || (exports.DataType = {}));
var SaverDef;
(function (SaverDef) {
    /** CheckpointFormatVersion enum. */
    var CheckpointFormatVersion;
    (function (CheckpointFormatVersion) {
        CheckpointFormatVersion[CheckpointFormatVersion["LEGACY"] = 0] = "LEGACY";
        CheckpointFormatVersion[CheckpointFormatVersion["V1"] = 1] = "V1";
        CheckpointFormatVersion[CheckpointFormatVersion["V2"] = 2] = "V2";
    })(CheckpointFormatVersion = SaverDef.CheckpointFormatVersion || (SaverDef.CheckpointFormatVersion = {}));
})(SaverDef = exports.SaverDef || (exports.SaverDef = {}));
//# sourceMappingURL=compiled_api.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889616, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
function getParamValue(paramName, node, tensorMap, context) {
    var inputParam = node.inputParams[paramName];
    if (inputParam && inputParam.inputIndexStart !== undefined) {
        var start = inputParam.inputIndexStart;
        var end = inputParam.inputIndexEnd === 0 ?
            undefined :
            (inputParam.inputIndexEnd === undefined ? start + 1 :
                inputParam.inputIndexEnd);
        if (inputParam.type === 'tensor') {
            return getTensor(node.inputNames[inputParam.inputIndexStart], tensorMap, context);
        }
        if (inputParam.type === 'tensors') {
            var inputs = node.inputNames.slice(start, end);
            return inputs.map(function (name) { return getTensor(name, tensorMap, context); });
        }
        var data = Array.prototype.slice.call(getTensor(node.inputNames.slice(start)[0], tensorMap, context)
            .dataSync());
        return inputParam.type === 'number' ? data[0] : data;
    }
    var attrParam = node.attrParams[paramName];
    return attrParam && attrParam.value;
}
exports.getParamValue = getParamValue;
/**
 * Retrieve the tensor based on input name by extracting the node name and
 * output index information.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 */
function getTensor(name, tensorsMap, context) {
    var _a = parseNodeName(name), nodeName = _a[0], index = _a[1];
    var contextId = context.currentContextIds.find(function (contextId) {
        return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId)];
    });
    return contextId !== undefined ?
        tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] :
        undefined;
}
exports.getTensor = getTensor;
/**
 * Retrieve the tensors based on input name for current context.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 */
function getTensorsForCurrentContenxt(name, tensorsMap, context) {
    return tensorsMap[getNodeNameWithContextId(name, context.currentContextId)];
}
exports.getTensorsForCurrentContenxt = getTensorsForCurrentContenxt;
/**
 * Returns the node name and index from the Node input name.
 * @param inputName The input name of the node, in format of
 * node_name:output_index, i.e. MatMul:0, if the output_index is not set, it is
 * default to 0.
 */
function getNodeNameAndIndex(inputName, context) {
    var _a = parseNodeName(inputName), nodeName = _a[0], index = _a[1];
    return [
        getNodeNameWithContextId(nodeName, context && context.currentContextId),
        index
    ];
}
exports.getNodeNameAndIndex = getNodeNameAndIndex;
function getNodeNameWithContextId(name, contextId) {
    return !!contextId ? name + "-" + contextId : name;
}
function parseNodeName(name) {
    var index = name.lastIndexOf(':');
    if (index === -1)
        return [name, 0];
    var nodeName = name.substring(0, index);
    return [nodeName, Number(name.substring(index + 1))];
}
exports.parseNodeName = parseNodeName;
function split(arr, size) {
    var res = [];
    for (var i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
exports.split = split;
//# sourceMappingURL=utils.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889617, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'Add',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'AddN',
        'category': 'arithmetic',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'BiasAdd',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sub',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'RealDiv',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Div',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'FloorDiv',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Mul',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Maximum',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' }
        ]
    },
    {
        'tfOpName': 'Minimum',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' }
        ]
    },
    {
        'tfOpName': 'Pow',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'SquaredDifference',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Mod',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'FloorMod',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];
//# sourceMappingURL=arithmetic.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889618, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'Abs',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Acos',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Asin',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Atan',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Atan2',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'y', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Ceil',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ClipByValue',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'clip_value_min', 'name': 'clipValueMin', 'type': 'number' },
            { 'tfName': 'clip_value_max', 'name': 'clipValueMax', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Cos',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Cosh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Elu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Exp',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Floor',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Log',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Neg',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Relu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Relu6',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'clipValueMin',
                'name': 'clipValueMin',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'clipValueMax',
                'name': 'clipValueMax',
                'type': 'number',
                'defaultValue': 6
            }
        ]
    },
    {
        'tfOpName': 'Selu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sigmoid',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sin',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sinh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sqrt',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Rsqrt',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Square',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Tan',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Tanh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sign',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Round',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Expm1',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Log1p',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Reciprocal',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Softplus',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Asinh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Acosh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Atanh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Erf',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Prod',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axes', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'keep_dims',
                'name': 'keepDims',
                'type': 'bool',
                'notSupported': true
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LeakyRelu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'alpha',
                'name': 'alpha',
                'type': 'number',
                'defaultValue': 0.2
            },
            {
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    }
];
//# sourceMappingURL=basic_math.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889619, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'LoopCond',
        'category': 'control',
        'inputs': [{ 'start': 0, 'name': 'pred', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Switch',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'data', 'type': 'tensor' },
            { 'start': 1, 'name': 'pred', 'type': 'tensor' }
        ]
    },
    {
        'tfOpName': 'Merge',
        'category': 'control',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'Enter',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
            { 'tfName': 'frame_name', 'name': 'frameName', 'type': 'string' },
            { 'tfName': 'is_constant', 'name': 'isConstant', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'Exit',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'NextIteration',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'TensorArrayV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'size', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' },
            { 'tfName': 'dynamic_size', 'name': 'dynamicSize', 'type': 'bool' },
            { 'tfName': 'clear_after_read', 'name': 'clearAfterRead', 'type': 'bool' },
            {
                'tfName': 'identical_element_shapes',
                'name': 'identicalElementShapes',
                'type': 'bool'
            },
            { 'tfName': 'tensor_array_name', 'name': 'name', 'type': 'string' }
        ]
    },
    {
        'tfOpName': 'TensorArrayWriteV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'number' },
            { 'start': 1, 'name': 'index', 'type': 'number' },
            { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 3, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'TensorArrayReadV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'number' },
            { 'start': 1, 'name': 'index', 'type': 'number' },
            { 'start': 2, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [{
                'tfName': 'dtype',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    },
    {
        'tfOpName': 'TensorArrayGatherV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'number' },
            { 'start': 1, 'name': 'indices', 'type': 'number[]' },
            { 'start': 2, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' }
        ]
    },
    {
        'tfOpName': 'TensorArrayScatterV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'number' },
            { 'start': 1, 'name': 'indices', 'type': 'number[]' },
            { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 3, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorArrayConcatV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'number' },
            { 'start': 1, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }, {
                'tfName': 'element_shape_except0',
                'name': 'elementShapeExcept0',
                'type': 'shape',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'TensorArraySplitV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'number' },
            { 'start': 1, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 2, 'name': 'lengths', 'type': 'number[]' },
            { 'start': 3, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorArraySizeV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'number' },
            { 'start': 1, 'name': 'flowIn', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'TensorArrayCloseV3',
        'category': 'control',
        'inputs': [{ 'start': 0, 'name': 'tensorArrayId', 'type': 'number' }]
    }
];
//# sourceMappingURL=control.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889620, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'AvgPool',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            },
            { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'MaxPool',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            },
            { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Conv1D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'stride', 'name': 'stride', 'type': 'number' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NWC'
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'dilation',
                'name': 'dilation',
                'type': 'number',
                'defaultValue': 1
            }
        ]
    },
    {
        'tfOpName': 'Conv2D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' },
            { 'tfName': 'useCudnnOnGpu', 'name': 'useCudnnOnGpu', 'type': 'bool' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'Conv2DBackpropInput',
        'category': 'convolution',
        'inputs': [
            { 'start': 2, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            { 'start': 0, 'name': 'outputShape', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'DepthwiseConv2d',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'input', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'DepthwiseConv2dNative',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'input', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
        ]
    }
];
//# sourceMappingURL=convolution.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889621, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'Fill',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
            { 'start': 1, 'name': 'value', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'LinSpace',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'start', 'type': 'number' },
            { 'start': 1, 'name': 'stop', 'type': 'number' },
            { 'start': 2, 'name': 'num', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'OneHot',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'indices', 'type': 'tensor' },
            { 'start': 1, 'name': 'depth', 'type': 'number' },
            { 'start': 2, 'name': 'onValue', 'type': 'number', 'defaultValue': 1 },
            { 'start': 3, 'name': 'offValue', 'type': 'number', 'defaultValue': 0 },
        ],
        'attrs': [
            {
                'tfName': 'axis',
                'name': 'axis',
                'type': 'number',
                'notSupported': true
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Ones',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'OnesLike',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{ 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'RandomUniform',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'minval',
                'name': 'minval',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'maxval',
                'name': 'maxval',
                'type': 'number',
                'defaultValue': 1
            },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'seed', 'name': 'seed', 'type': 'number', 'defaultValue': 0 }, {
                'tfName': 'seed2',
                'name': 'seed2',
                'type': 'number',
                'defaultValue': 0,
                'notSupported': true
            },
            { 'tfName': 'T', 'name': 'T', 'type': 'number', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Range',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'start', 'type': 'number' },
            { 'start': 1, 'name': 'stop', 'type': 'number' },
            { 'start': 2, 'name': 'step', 'type': 'number', 'defaultValue': 0 },
        ],
        'attrs': [{ 'tfName': 'Tidx', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TruncatedNormal',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'means',
                'name': 'mean',
                'type': 'number',
                'defaultValue': 0.0
            },
            {
                'tfName': 'stddev',
                'name': 'stdDev',
                'type': 'number',
                'defaultValue': 1.0
            },
            { 'tfName': 'seed', 'name': 'seed', 'type': 'number' }, {
                'tfName': 'seed2',
                'name': 'seed2',
                'type': 'number',
                'defaultValue': 0,
                'notSupported': true
            },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'T', 'name': 'T', 'type': 'number', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Zeros',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'ZerosLike',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    }
];
//# sourceMappingURL=creation.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889622, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'NonMaxSuppressionV2',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 1, 'name': 'scores', 'type': 'tensor' },
            { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
            { 'start': 3, 'name': 'iouThreshold', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'NonMaxSuppressionV3',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 1, 'name': 'scores', 'type': 'tensor' },
            { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
            { 'start': 3, 'name': 'iouThreshold', 'type': 'number' },
            { 'start': 4, 'name': 'scoreThreshold', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Where',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'condition', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ListDiff',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'y', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];
//# sourceMappingURL=dynamic.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889623, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [{
        'tfOpName': 'TopKV2',
        'category': 'evaluation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'k', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'sorted', 'name': 'sorted', 'type': 'bool' }]
    }];
//# sourceMappingURL=evaluation.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889624, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'PlaceholderWithDefault',
        'category': 'graph',
        'inputs': [
            { 'start': 0, 'name': 'default', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'shape', 'name': 'shape', 'type': 'shape' },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }
        ]
    },
    {
        'tfOpName': 'Placeholder',
        'category': 'graph',
        'attrs': [
            { 'tfName': 'shape', 'name': 'shape', 'type': 'shape' },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }
        ]
    },
    { 'tfOpName': 'Const', 'category': 'graph' }, {
        'tfOpName': 'Identity',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'IdentityN',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'x', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'Snapshot',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Rank',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Size',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Shape',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'ShapeN',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'x', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'Print',
        'category': 'graph',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'data', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'message', 'name': 'message', 'type': 'string' }, {
                'tfName': 'first_n',
                'name': 'firstN',
                'type': 'number',
                'notSupported': true
            },
            {
                'tfName': 'summarize',
                'name': 'summarize',
                'type': 'number',
                'defaultValue': 3
            }
        ]
    },
    { 'tfOpName': 'NoOp', 'category': 'graph', 'inputs': [] }, {
        'tfOpName': 'StopGradient',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'FakeQuantWithMinMaxVars',
        'category': 'graph',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'min', 'name': 'min', 'type': 'number' },
            { 'tfName': 'max', 'name': 'max', 'type': 'number' }
        ]
    }
];
//# sourceMappingURL=graph.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889625, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'ResizeBilinear',
        'category': 'image',
        'inputs': [
            { 'start': 0, 'name': 'images', 'type': 'tensor' },
            { 'start': 1, 'name': 'size', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'align_corners', 'name': 'alignCorners', 'type': 'bool' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ResizeNearestNeighbor',
        'category': 'image',
        'inputs': [
            { 'start': 0, 'name': 'images', 'type': 'tensor' },
            { 'start': 1, 'name': 'size', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'align_corners', 'name': 'alignCorners', 'type': 'bool' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'CropAndResize',
        'category': 'image',
        'inputs': [
            { 'start': 0, 'name': 'image', 'type': 'tensor' },
            { 'start': 1, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 2, 'name': 'boxInd', 'type': 'tensor' },
            { 'start': 3, 'name': 'cropSize', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'method', 'name': 'method', 'type': 'string' }, {
                'tfName': 'extrapolation_value',
                'name': 'extrapolationValue',
                'type': 'number'
            }
        ]
    }
];
//# sourceMappingURL=image.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889626, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'Equal',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'NotEqual',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Greater',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'GreaterEqual',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Less',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LessEqual',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LogicalAnd',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LogicalNot',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LogicalOr',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Select',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'condition', 'type': 'tensor' },
            { 'start': 1, 'name': 'a', 'type': 'tensor' },
            { 'start': 2, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];
//# sourceMappingURL=logical.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889627, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'MatMul',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'transpose_a',
                'name': 'transposeA',
                'type': 'bool',
                'defaultValue': false
            },
            {
                'tfName': 'transpose_b',
                'name': 'transposeB',
                'type': 'bool',
                'defaultValue': false
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'BatchMatMul',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'adj_x',
                'name': 'transposeA',
                'type': 'bool',
                'defaultValue': false
            },
            {
                'tfName': 'adj_y',
                'name': 'transposeB',
                'type': 'bool',
                'defaultValue': false
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Transpose',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'perm', 'type': 'number[]' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];
//# sourceMappingURL=matrices.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889628, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'FusedBatchNorm',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'scale', 'type': 'tensor' },
            { 'start': 2, 'name': 'offset', 'type': 'tensor' },
            { 'start': 3, 'name': 'mean', 'type': 'tensor' },
            { 'start': 4, 'name': 'variance', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'epsilon',
                'name': 'epsilon',
                'type': 'number',
                'defaultValue': 0.001
            },
            {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'FusedBatchNormV2',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'scale', 'type': 'tensor' },
            { 'start': 2, 'name': 'offset', 'type': 'tensor' },
            { 'start': 3, 'name': 'mean', 'type': 'tensor' },
            { 'start': 4, 'name': 'variance', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'epsilon',
                'name': 'epsilon',
                'type': 'number',
                'defaultValue': 0.001
            },
            {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'LRN',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'depth_radius',
                'name': 'radius',
                'type': 'number',
                'defaultValue': 5
            },
            { 'tfName': 'bias', 'name': 'bias', 'type': 'number', 'defaultValue': 1.0 },
            {
                'tfName': 'alpha',
                'name': 'alpha',
                'type': 'number',
                'defaultValue': 1.0
            },
            {
                'tfName': 'beta',
                'name': 'beta',
                'type': 'number',
                'defaultValue': 0.5
            }
        ]
    },
    {
        'tfOpName': 'Softmax',
        'category': 'normalization',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'LogSoftmax',
        'category': 'normalization',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'SparseToDense',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'sparseIndices', 'type': 'tensor' },
            { 'start': 1, 'name': 'outputShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'sparseValues', 'type': 'tensor' },
            { 'start': 3, 'name': 'defaultValue', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'validate_indices',
                'name': 'validateIndices',
                'type': 'bool',
                'defaultValue': true,
                'notSupported': true
            }]
    }
];
//# sourceMappingURL=normalization.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889629, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'Max',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Mean',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Min',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Sum',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'All',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Any',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'ArgMax',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'ArgMin',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Prod',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    }
];
//# sourceMappingURL=reduction.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889630, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'ConcatV2',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'end': -1, 'name': 'tensors', 'type': 'tensors' },
            { 'start': -1, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Concat',
        'category': 'slice_join',
        'inputs': [
            { 'start': 1, 'end': 0, 'name': 'tensors', 'type': 'tensors' },
            { 'start': 0, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'GatherV2',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'tensor' },
            { 'start': 2, 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
        ]
    },
    {
        'tfOpName': 'Gather',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'axis', 'name': 'axis', 'type': 'number', 'defaultValue': 0 }, {
                'tfName': 'validate_indices',
                'name': 'validateIndices',
                'type': 'bool',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Reverse',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'dims', 'type': 'bool', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ReverseV2',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'Slice',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'begin', 'type': 'number[]' },
            { 'start': 2, 'name': 'size', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'StridedSlice',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'begin', 'type': 'number[]' },
            { 'start': 2, 'name': 'end', 'type': 'number[]' },
            { 'start': 3, 'name': 'strides', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'begin_mask',
                'name': 'beginMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'end_mask',
                'name': 'endMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'new_axis_mask',
                'name': 'newAxisMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'ellipsis_mask',
                'name': 'ellipsisMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'shrink_axis_mask',
                'name': 'shrinkAxisMask',
                'type': 'number',
                'defaultValue': 0
            }
        ]
    },
    {
        'tfOpName': 'Pack',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'axis', 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
        ]
    },
    {
        'tfOpName': 'Unpack',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'axis', 'name': 'axis', 'type': 'number', 'defaultValue': 0 }, {
                'tfName': 'num',
                'name': 'num',
                'type': 'number',
                'defaultValue': 0,
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Tile',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'reps', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'Split',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'axis', 'type': 'number', 'defaultValue': 0 },
            { 'start': 1, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'num_split',
                'name': 'numOrSizeSplits',
                'type': 'number',
                'defaultValue': 1
            }]
    },
    {
        'tfOpName': 'SplitV',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'numOrSizeSplits', 'type': 'number[]' },
            { 'start': 2, 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
        ]
    },
    {
        'tfOpName': 'ScatterNd',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'indices', 'type': 'tensor' },
            { 'start': 1, 'name': 'values', 'type': 'tensor' },
            { 'start': 2, 'name': 'shape', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'GatherNd',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'tensor' }
        ]
    },
    {
        'tfOpName': 'SparseToDense',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'sparseIndices', 'type': 'tensor' },
            { 'start': 1, 'name': 'outputShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'sparseValues', 'type': 'tensor' },
            { 'start': 3, 'name': 'defaultValue', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'validate_indices',
                'name': 'validateIndices',
                'type': 'bool',
                'defaultValue': false,
                'notSupported': true
            }]
    }
];
//# sourceMappingURL=slice_join.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889631, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'FFT',
        'category': 'spectral',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'IFFT',
        'category': 'spectral',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'RFFT',
        'category': 'spectral',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' }, {
                'start': 1,
                'name': 'fft_length',
                'type': 'number',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'IRFFT',
        'category': 'spectral',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' }, {
                'start': 1,
                'name': 'fft_length',
                'type': 'number',
                'notSupported': true
            }
        ]
    }
];
//# sourceMappingURL=spectral.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889632, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.json = [
    {
        'tfOpName': 'Cast',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'SrcT',
                'name': 'sdtype',
                'type': 'dtype',
                'notSupported': true
            },
            { 'tfName': 'DstT', 'name': 'dtype', 'type': 'dtype' }
        ]
    },
    {
        'tfOpName': 'ExpandDims',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Pad',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'padding', 'type': 'number[]' },
        ],
        'attrs': [{
                'tfName': 'constant_value',
                'name': 'constantValue',
                'type': 'number',
                'defaultValue': 0
            }]
    },
    {
        'tfOpName': 'PadV2',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'padding', 'type': 'number[]' }, {
                'start': 2,
                'name': 'constantValue',
                'type': 'number',
                'defaultValue': 0
            }
        ]
    },
    {
        'tfOpName': 'Reshape',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'shape', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'Squeeze',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'axis',
                'tfDeprecatedName': 'squeeze_dims',
                'name': 'axis',
                'type': 'number[]'
            }]
    },
    {
        'tfOpName': 'SpaceToBatchND',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'blockShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'paddings', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'BatchToSpaceND',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'blockShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'crops', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'DepthToSpace',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'block_size', 'name': 'blockSize', 'type': 'number' },
            { 'tfName': 'data_format', 'name': 'dataFormat', 'type': 'string' }
        ]
    }
];
//# sourceMappingURL=transformation.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889633, function(require, module, exports) {

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
// tslint:disable-next-line:max-line-length
var utils_1 = require("../operations/executors/utils");
var operation_executor_1 = require("../operations/operation_executor");
var execution_context_1 = require("./execution_context");
var GraphExecutor = /** @class */ (function () {
    function GraphExecutor(graph) {
        this.graph = graph;
        this.compiledMap = new Map();
        this._weightMap = {};
        this.SEPERATOR = ',';
        this.placeholders = graph.placeholders;
        this._outputs = graph.outputs;
        this.compile();
    }
    Object.defineProperty(GraphExecutor.prototype, "weightMap", {
        get: function () {
            return this._weightMap;
        },
        set: function (weightMap) {
            var weightIds = Object.keys(weightMap).map(function (key) { return weightMap[key].map(function (tensor) { return tensor.id; }); });
            this.weightIds = [].concat.apply([], weightIds);
            this._weightMap = weightMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "inputs", {
        get: function () {
            return this.placeholders.map(function (node) {
                return {
                    name: node.name,
                    shape: node.attrParams['shape'] ?
                        node.attrParams['shape'].value :
                        undefined,
                    dtype: node.attrParams['dtype'] ?
                        node.attrParams['dtype'].value :
                        undefined
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "outputs", {
        get: function () {
            return this._outputs.map(function (node) {
                return {
                    name: node.name,
                    shape: node.attrParams['shape'] ?
                        node.attrParams['shape'].value :
                        undefined,
                    dtype: node.attrParams['dtype'] ?
                        node.attrParams['dtype'].value :
                        undefined
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "inputNodes", {
        get: function () {
            return this.placeholders.map(function (node) { return node.name; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "outputNodes", {
        get: function () {
            return this.outputs.map(function (node) { return node.name; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "isControlFlowModel", {
        get: function () {
            return this.graph.withControlFlow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "isDynamicShapeModel", {
        get: function () {
            return this.graph.withDynamicShape;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Compiles the inference graph to generate the topology order of op nodes,
     * cache the result for inference execution.
     */
    GraphExecutor.prototype.compile = function (startNodes) {
        // Do not compile for graph with control flow, since the execution order
        // requires runtime evaluation of the output tensors.
        if (this.graph.withControlFlow || this.graph.withDynamicShape) {
            return;
        }
        var compiledOrder = [];
        var inputs = startNodes || this.graph.placeholders;
        var sortedNodeNames = inputs.map(function (node) { return node.name; }).sort();
        var nameKey = sortedNodeNames.join(this.SEPERATOR);
        // do nothing is the compiled graph cache contains the input.
        if (this.compiledMap.get(nameKey)) {
            return;
        }
        var stack = inputs.concat(this.graph.weights);
        var visited = {};
        while (stack.length > 0) {
            var node = stack.pop();
            visited[node.name] = true;
            compiledOrder.push(node);
            node.children.forEach(function (childNode) {
                if (!visited[childNode.name] && childNode.inputNames.every(function (name) {
                    var nodeName = utils_1.getNodeNameAndIndex(name)[0];
                    return visited[nodeName];
                })) {
                    stack.push(childNode);
                }
            });
        }
        this.compiledMap.set(nameKey, compiledOrder);
    };
    /**
     * Executes the inference for given input tensors.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs output node name from the Tensorflow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     */
    GraphExecutor.prototype.execute = function (inputs, strictInputCheck, outputs) {
        var _this = this;
        if (strictInputCheck === void 0) { strictInputCheck = true; }
        var names = Object.keys(inputs).sort();
        this.checkInput(inputs, strictInputCheck);
        this.checkInputShapeAndType(inputs, strictInputCheck);
        this.compile(names.map(function (name) { return _this.graph.nodes[name]; }));
        var outputNames = this.calculateOutputs(outputs);
        this.checkOutput(this.compiledMap.get(names.join(this.SEPERATOR)), outputNames);
        var tensorArrayMap = {};
        var result = tfjs_core_1.tidy(function () {
            var context = new execution_context_1.ExecutionContext(_this._weightMap, tensorArrayMap);
            var tensorMap = __assign({}, _this.weightMap, inputs);
            var tensorsToKeep = _this.getFrozenTensorIds(tensorMap);
            var intermediateTensorConsumerCount = {};
            var compiledNodes = _this.compiledMap.get(names.join(_this.SEPERATOR));
            for (var i = 0; i < compiledNodes.length; i++) {
                var node = compiledNodes[i];
                if (!tensorMap[node.name]) {
                    tensorMap[node.name] =
                        operation_executor_1.executeOp(node, tensorMap, context);
                    _this.checkTensorForDisposal(node.name, node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                }
                // stop the execution if all outputs are found.
                if (outputNames.every(function (name) { return !!tensorMap[name]; })) {
                    break;
                }
            }
            return _this.findOutputs(tensorMap, context, outputNames);
        });
        return result;
    };
    GraphExecutor.prototype.getFrozenTensorIds = function (tensorMap) {
        var ids = [].concat.apply([], Object.keys(tensorMap)
            .map(function (key) { return tensorMap[key]; })
            .map(function (tensors) { return tensors.map(function (tensor) { return tensor.id; }); }));
        return new Set(ids);
    };
    GraphExecutor.prototype.checkTensorForDisposal = function (nodeName, node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount) {
        // Skip output nodes and any control flow nodes, since its dependency is
        // tricky to track correctly.
        if (node.category === 'control' || outputNames.indexOf(nodeName) !== -1) {
            return;
        }
        tensorMap[nodeName].forEach(function (tensor) {
            if (tensor != null) {
                intermediateTensorConsumerCount[tensor.id] =
                    (intermediateTensorConsumerCount[tensor.id] || 0) +
                        node.children.length;
            }
        });
        node.inputs.forEach(function (input) {
            // Skip any control flow nodes, since its dependency is tricky to track
            // correctly.
            if (input.category !== 'control') {
                var tensors = utils_1.getTensorsForCurrentContenxt(input.name, tensorMap, context);
                if (tensors != null) {
                    tensors.forEach(function (tensor) {
                        if (tensor && !tensorsToKeep.has(tensor.id)) {
                            var count = intermediateTensorConsumerCount[tensor.id];
                            if (count === 1) {
                                tensor.dispose();
                                delete intermediateTensorConsumerCount[tensor.id];
                            }
                            else if (count != null) {
                                // only intermediate nodes has count set, inputs and weights are
                                // not.
                                intermediateTensorConsumerCount[tensor.id]--;
                            }
                        }
                    });
                }
            }
        });
    };
    /**
     * Executes the inference for given input tensors in Async fashion.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs output node name from the Tensorflow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     */
    GraphExecutor.prototype.executeAsync = function (inputs, outputs) {
        return __awaiter(this, void 0, void 0, function () {
            var tensorArrayMap, context, outputNames, tensors, results, outputIds, inputIdArray, inputIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkInput(inputs, false);
                        this.checkInputShapeAndType(inputs, false);
                        tensorArrayMap = {};
                        context = new execution_context_1.ExecutionContext(this._weightMap, tensorArrayMap);
                        outputNames = this.calculateOutputs(outputs);
                        return [4 /*yield*/, this.executeWithControlFlow(inputs, context, outputNames)];
                    case 1:
                        tensors = _a.sent();
                        results = this.findOutputs(tensors, context, outputs);
                        outputIds = Object.keys(results).map(function (key) { return results[key].id; });
                        inputIdArray = Object.keys(inputs).map(function (key) { return inputs[key].map(function (input) { return input.id; }); });
                        inputIds = [].concat.apply([], inputIdArray);
                        Object.keys(tensors).forEach(function (key) {
                            var tensorArray = tensors[key];
                            tensorArray.forEach(function (tensor) {
                                if (tensor && !tensor.isDisposed &&
                                    outputIds.indexOf(tensor.id) === -1 &&
                                    inputIds.indexOf(tensor.id) === -1 &&
                                    _this.weightIds.indexOf(tensor.id) === -1) {
                                    tensor.dispose();
                                }
                            });
                        });
                        return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     * When there are control flow nodes in the graph, the graph execution use
     * ExecutionContext to keep track of the frames and loop iterators.
     * @param inputs placeholder tensors for the graph.
     * @param context the execution context object for current execution.
     */
    GraphExecutor.prototype.executeWithControlFlow = function (inputs, context, outputNames) {
        return __awaiter(this, void 0, void 0, function () {
            var names, inputNodes, stack, tensorMap, intermediateTensorConsumerCount, tensorsToKeep, added, promises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        names = Object.keys(inputs);
                        inputNodes = names.map(function (name) { return _this.graph.nodes[name]; });
                        stack = inputNodes.concat(this.graph.weights).map(function (node) {
                            return { node: node, contexts: context.currentContext };
                        });
                        tensorMap = __assign({}, this.weightMap, inputs);
                        intermediateTensorConsumerCount = {};
                        tensorsToKeep = this.getFrozenTensorIds(tensorMap);
                        added = {};
                        _a.label = 1;
                    case 1:
                        if (!(stack.length > 0)) return [3 /*break*/, 3];
                        promises = this.processStack(inputNodes, stack, context, tensorMap, added, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, tensorMap];
                }
            });
        });
    };
    GraphExecutor.prototype.processStack = function (inputNodes, stack, context, tensorMap, added, tensorsToKeep, outputNames, intermediateTensorConsumerCount) {
        var _this = this;
        var promises = [];
        var _loop_1 = function () {
            var item = stack.pop();
            context.currentContext = item.contexts;
            var nodeName = '';
            // The tensor of the Enter op with isConstant set should be set
            // in the parent scope, so it will be available as constant for the
            // whole loop.
            if (item.node.op === 'Enter' &&
                utils_1.getParamValue('isConstant', item.node, tensorMap, context)) {
                nodeName = utils_1.getNodeNameAndIndex(item.node.name, context)[0];
            }
            // only process nodes that are not provided as input nodes.
            if (inputNodes.indexOf(item.node) === -1) {
                var tensors = operation_executor_1.executeOp(item.node, tensorMap, context);
                if (!nodeName) {
                    nodeName = utils_1.getNodeNameAndIndex(item.node.name, context)[0];
                }
                var currentContext_1 = context.currentContext;
                if (tensors instanceof Promise) {
                    promises.push(tensors.then(function (t) {
                        tensorMap[nodeName] = t;
                        context.currentContext = currentContext_1;
                        _this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                        _this.processChildNodes(item.node, stack, context, tensorMap, added);
                        return t;
                    }));
                }
                else {
                    tensorMap[nodeName] = tensors;
                    this_1.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                    this_1.processChildNodes(item.node, stack, context, tensorMap, added);
                }
            }
            else {
                this_1.processChildNodes(item.node, stack, context, tensorMap, added);
            }
        };
        var this_1 = this;
        while (stack.length > 0) {
            _loop_1();
        }
        return promises;
    };
    GraphExecutor.prototype.processChildNodes = function (node, stack, context, tensorMap, added) {
        node.children.forEach(function (childNode) {
            var nodeName = utils_1.getNodeNameAndIndex(childNode.name, context)[0];
            if (!added[nodeName]) {
                // Merge op can be pushed if any of its inputs has value.
                if (childNode.op === 'Merge') {
                    if (childNode.inputNames.some(function (name) {
                        return !!utils_1.getTensor(name, tensorMap, context);
                    })) {
                        added[nodeName] = true;
                        stack.push({ contexts: context.currentContext, node: childNode });
                    }
                }
                else // Otherwise all inputs must to have value.
                 if (childNode.inputNames.every(function (name) {
                    return !!utils_1.getTensor(name, tensorMap, context);
                })) {
                    added[nodeName] = true;
                    stack.push({ contexts: context.currentContext, node: childNode });
                }
            }
        });
    };
    GraphExecutor.prototype.calculateOutputs = function (outputs) {
        if (outputs && !(outputs instanceof Array)) {
            outputs = [outputs];
        }
        return (outputs || this.graph.outputs.map(function (node) { return node.name; }));
    };
    GraphExecutor.prototype.findOutputs = function (tensorMap, context, outputs) {
        var requestedOutputs = this.calculateOutputs(outputs);
        return requestedOutputs.reduce(function (map, name) {
            map[name] = utils_1.getTensor(name, tensorMap, context);
            return map;
        }, {});
    };
    /**
     * Releases the memory used by the weight tensors.
     */
    GraphExecutor.prototype.dispose = function () {
        var _this = this;
        Object.keys(this.weightMap)
            .forEach(function (key) { return _this.weightMap[key].forEach(function (tensor) { return tensor.dispose(); }); });
    };
    GraphExecutor.prototype.checkInputShapeAndType = function (inputs, strictInputCheck) {
        if (strictInputCheck === void 0) { strictInputCheck = true; }
        this.placeholders.forEach(function (node) {
            var inputTensors = inputs[node.name];
            // do nothing if not strict input check and input tensors is not for
            // the placeholders.
            if (!strictInputCheck && !inputTensors) {
                return;
            }
            var input = inputTensors[0];
            if (node.attrParams['shape'] && node.attrParams['shape'].value) {
                var shape_1 = node.attrParams['shape'].value;
                var match = shape_1.length === input.shape.length &&
                    input.shape.every(function (dim, index) { return shape_1[index] === -1 || shape_1[index] === dim; });
                tfjs_core_1.util.assert(match, function () { return "The shape of dict['" + node.name + "'] provided in " +
                    ("model.execute(dict) must be [" + shape_1 + "], but was ") +
                    ("[" + input.shape + "]"); });
            }
            if (node.attrParams['dtype'] && node.attrParams['dtype'].value) {
                tfjs_core_1.util.assert(input.dtype === node.attrParams['dtype'].value, function () { return "The dtype of dict['" + node.name + "'] provided in " +
                    "model.execute(dict) must be " +
                    (node.attrParams['dtype'].value + ", but was " + input.dtype); });
            }
        });
    };
    GraphExecutor.prototype.checkInput = function (inputs, strictInputCheck) {
        var _this = this;
        if (strictInputCheck === void 0) { strictInputCheck = true; }
        var inputKeys = Object.keys(inputs);
        var missing = [];
        var extra = [];
        this.inputNodes.forEach(function (name) {
            if (inputKeys.indexOf(name) === -1)
                missing.push(name);
        });
        inputKeys.forEach(function (name) {
            if (_this.inputNodes.indexOf(name) === -1)
                extra.push(name);
        });
        var notInGraph = extra.filter(function (name) { return !_this.graph.nodes[name]; });
        if (missing.length > 0 && strictInputCheck) {
            throw new Error("The dict provided in model.execute(dict) has the keys " +
                ("[" + inputKeys + "], but is missing the required keys: [" + missing + "]."));
        }
        if (extra.length > 0 && strictInputCheck) {
            throw new Error("The dict provided in model.execute(dict) has " +
                ("unused keys: [" + extra + "]. Please provide only the following keys: ") +
                ("[" + this.inputNodes + "]."));
        }
        if (notInGraph.length > 0) {
            throw new Error("The dict provided in model.execute(dict) has " +
                ("keys: [" + notInGraph + "] not part of model graph."));
        }
    };
    GraphExecutor.prototype.checkOutput = function (compiledNodes, outputs) {
        var compiledNodeNames = compiledNodes.map(function (node) { return node.name; });
        var extra = [];
        outputs.forEach(function (name) {
            var nodeName = utils_1.parseNodeName(name)[0];
            if (compiledNodeNames.indexOf(nodeName) === -1)
                extra.push(nodeName);
        });
        if (extra.length > 0) {
            throw new Error("The following outputs are not generated by the execution: " +
                ("[" + extra + "]."));
        }
    };
    return GraphExecutor;
}());
exports.GraphExecutor = GraphExecutor;
//# sourceMappingURL=graph_executor.js.map
}, function(modId) { var map = {"../operations/executors/utils":1557782889616,"../operations/operation_executor":1557782889634,"./execution_context":1557782889652}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889634, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetic = require("./executors/arithmetic_executor");
var basicMath = require("./executors/basic_math_executor");
var control = require("./executors/control_executor");
var convolution = require("./executors/convolution_executor");
var creation = require("./executors/creation_executor");
var dynamic = require("./executors/dynamic_executor");
var evaluation = require("./executors/evaluation_executor");
var graph = require("./executors/graph_executor");
var image = require("./executors/image_executor");
var logical = require("./executors/logical_executor");
var matrices = require("./executors/matrices_executor");
var normalization = require("./executors/normalization_executor");
var reduction = require("./executors/reduction_executor");
var sliceJoin = require("./executors/slice_join_executor");
var spectral = require("./executors/spectral_executor");
var transformation = require("./executors/transformation_executor");
/**
 * Executes the op defined by the node object.
 * @param node
 * @param tensorMap contains tensors for executed nodes and weights
 */
function executeOp(node, tensorMap, context) {
    var value = (function (node, tensorMap, context) {
        switch (node.category) {
            case 'arithmetic':
                return arithmetic.executeOp(node, tensorMap, context);
            case 'basic_math':
                return basicMath.executeOp(node, tensorMap, context);
            case 'control':
                return control.executeOp(node, tensorMap, context);
            case 'convolution':
                return convolution.executeOp(node, tensorMap, context);
            case 'creation':
                return creation.executeOp(node, tensorMap, context);
            case 'dynamic':
                return dynamic.executeOp(node, tensorMap, context);
            case 'evaluation':
                return evaluation.executeOp(node, tensorMap, context);
            case 'image':
                return image.executeOp(node, tensorMap, context);
            case 'graph':
                return graph.executeOp(node, tensorMap, context);
            case 'logical':
                return logical.executeOp(node, tensorMap, context);
            case 'matrices':
                return matrices.executeOp(node, tensorMap, context);
            case 'normalization':
                return normalization.executeOp(node, tensorMap, context);
            case 'reduction':
                return reduction.executeOp(node, tensorMap, context);
            case 'slice_join':
                return sliceJoin.executeOp(node, tensorMap, context);
            case 'spectral':
                return spectral.executeOp(node, tensorMap, context);
            case 'transformation':
                return transformation.executeOp(node, tensorMap, context);
            default:
                throw TypeError("Node type " + node.op + " is not implemented");
        }
    })(node, tensorMap, context);
    if (value instanceof Promise) {
        return value.then(function (data) { return [].concat(data); });
    }
    return [].concat(value);
}
exports.executeOp = executeOp;
//# sourceMappingURL=operation_executor.js.map
}, function(modId) { var map = {"./executors/arithmetic_executor":1557782889635,"./executors/basic_math_executor":1557782889636,"./executors/control_executor":1557782889637,"./executors/convolution_executor":1557782889639,"./executors/creation_executor":1557782889640,"./executors/dynamic_executor":1557782889641,"./executors/evaluation_executor":1557782889642,"./executors/graph_executor":1557782889643,"./executors/image_executor":1557782889644,"./executors/logical_executor":1557782889645,"./executors/matrices_executor":1557782889646,"./executors/normalization_executor":1557782889647,"./executors/reduction_executor":1557782889648,"./executors/slice_join_executor":1557782889649,"./executors/spectral_executor":1557782889650,"./executors/transformation_executor":1557782889651}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889635, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'BiasAdd':
        case 'Add': {
            return [tfc.add(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'AddN': {
            return [tfc.addN(utils_1.getParamValue('tensors', node, tensorMap, context))];
        }
        case 'FloorMod':
        case 'Mod':
            return [tfc.mod(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        case 'Mul':
            return [tfc.mul(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        case 'RealDiv':
        case 'Div': {
            return [tfc.div(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'FloorDiv': {
            return [tfc.floorDiv(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'Sub': {
            return [tfc.sub(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'Minimum': {
            return [tfc.minimum(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'Maximum': {
            return [tfc.maximum(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'Pow': {
            return [tfc.pow(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'SquaredDifference': {
            return [tfc.squaredDifference(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'arithmetic';
//# sourceMappingURL=arithmetic_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889636, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'Abs':
            return [tfc.abs(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Acos':
            return [tfc.acos(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Acosh':
            return [tfc.acosh(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Asin':
            return [tfc.asin(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Asinh':
            return [tfc.asinh(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Atan':
            return [tfc.atan(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Atan2':
            return [tfc.atan2(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('y', node, tensorMap, context))];
        case 'Atanh':
            return [tfc.atanh(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Ceil':
            return [tfc.ceil(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Cos':
            return [tfc.cos(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Cosh':
            return [tfc.cosh(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Elu':
            return [tfc.elu(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Erf':
            return [tfc.erf(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Exp':
            return [tfc.exp(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Expm1': {
            return [tfc.expm1(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Floor':
            return [tfc.floor(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Log':
            return [tfc.log(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Log1p': {
            return [tfc.log1p(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Neg':
            return [tfc.neg(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Reciprocal': {
            return [tfc.reciprocal(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Relu':
            return [tfc.relu(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Round': {
            return [tfc.round(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Selu':
            return [tfc.selu(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Sigmoid':
            return [tfc.sigmoid(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Sin':
            return [tfc.sin(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Sign': {
            return [tfc.sign(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Sinh': {
            return [tfc.sinh(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Softplus': {
            return [tfc.softplus(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Sqrt': {
            return [tfc.sqrt(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Square': {
            return [tfc.square(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Tanh': {
            return [tfc.tanh(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'Tan':
            return [tfc.tan(utils_1.getParamValue('x', node, tensorMap, context))];
        case 'Relu6':
        case 'ClipByValue':
            return [tfc.clipByValue(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('clipValueMin', node, tensorMap, context), utils_1.getParamValue('clipValueMax', node, tensorMap, context))];
        case 'Rsqrt':
            return [tfc.rsqrt(utils_1.getTensor(node.inputNames[0], tensorMap, context))];
        case 'Prod':
            return [tfc.prod(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('axes', node, tensorMap, context))];
        case 'LeakyRelu':
            return [tfc.leakyRelu(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('alpha', node, tensorMap, context))];
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'basic_math';
//# sourceMappingURL=basic_math_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889637, function(require, module, exports) {

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
var tensor_array_1 = require("../../executor/tensor_array");
var utils_1 = require("./utils");
function executeOp(node, tensorMap, context) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, pred, data_1, inputName, frameId, data, tensor, input, size, dtype, elementShape, dynamicSize, clearAfterRead, identicalElementShapes, name_1, tensorArray, id, index, writeTensor, writeTensorArray, readId, readIndex, readTensorArray, gatherId, gatherIndices, gatherDtype, gatherTensorArray, scatterId, scatterIndices, scatterTensor, scatterTensorArray, concatId, concatTensorArray, concatDtype, splitId, splitTensor, lengths, splitTensorArray, sizeId, sizeTensorArray, closeId, closeTensorArray;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = node.op;
                    switch (_a) {
                        case 'LoopCond': return [3 /*break*/, 1];
                        case 'Switch': return [3 /*break*/, 2];
                        case 'Merge': return [3 /*break*/, 4];
                        case 'Enter': return [3 /*break*/, 5];
                        case 'Exit': return [3 /*break*/, 6];
                        case 'NextIteration': return [3 /*break*/, 7];
                        case 'TensorArrayV3': return [3 /*break*/, 8];
                        case 'TensorArrayWriteV3': return [3 /*break*/, 9];
                        case 'TensorArrayReadV3': return [3 /*break*/, 10];
                        case 'TensorArrayGatherV3': return [3 /*break*/, 11];
                        case 'TensorArrayScatterV3': return [3 /*break*/, 12];
                        case 'TensorArrayConcatV3': return [3 /*break*/, 13];
                        case 'TensorArraySplitV3': return [3 /*break*/, 14];
                        case 'TensorArraySizeV3': return [3 /*break*/, 15];
                        case 'TensorArrayCloseV3': return [3 /*break*/, 16];
                    }
                    return [3 /*break*/, 17];
                case 1: return [2 /*return*/, [
                        utils_1.getParamValue('pred', node, tensorMap, context).clone()
                    ]];
                case 2:
                    pred = utils_1.getParamValue('pred', node, tensorMap, context);
                    data_1 = utils_1.getParamValue('data', node, tensorMap, context);
                    return [4 /*yield*/, pred.data()];
                case 3: 
                // Outputs nodes :0 => false, :1 => true
                return [2 /*return*/, (_b.sent())[0] ? [undefined, data_1.clone()] :
                        [data_1.clone(), undefined]];
                case 4:
                    inputName = node.inputNames.find(function (name) { return utils_1.getTensor(name, tensorMap, context) !== undefined; });
                    return [2 /*return*/, inputName ? [utils_1.getTensor(inputName, tensorMap, context).clone()] :
                            undefined];
                case 5:
                    frameId = utils_1.getParamValue('frameName', node, tensorMap, context);
                    data = utils_1.getParamValue('tensor', node, tensorMap, context);
                    context.enterFrame(frameId);
                    return [2 /*return*/, [data.clone()]];
                case 6:
                    tensor = utils_1.getParamValue('tensor', node, tensorMap, context);
                    context.exitFrame();
                    return [2 /*return*/, [tensor.clone()]];
                case 7:
                    input = utils_1.getParamValue('tensor', node, tensorMap, context);
                    context.nextIteration();
                    return [2 /*return*/, [input.clone()]];
                case 8:
                    size = utils_1.getParamValue('size', node, tensorMap, context);
                    dtype = utils_1.getParamValue('dtype', node, tensorMap, context);
                    elementShape = utils_1.getParamValue('elementShape', node, tensorMap, context);
                    dynamicSize = utils_1.getParamValue('dynamicSize', node, tensorMap, context);
                    clearAfterRead = utils_1.getParamValue('clearAfterRead', node, tensorMap, context);
                    identicalElementShapes = utils_1.getParamValue('identicalElementShapes', node, tensorMap, context);
                    name_1 = utils_1.getParamValue('name', node, tensorMap, context);
                    tensorArray = new tensor_array_1.TensorArray(name_1, dtype, size, elementShape, identicalElementShapes, dynamicSize, clearAfterRead);
                    context.addTensorArray(tensorArray);
                    return [2 /*return*/, [tfjs_core_1.scalar(tensorArray.id), tfjs_core_1.scalar(1.0)]];
                case 9:
                    id = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    index = utils_1.getParamValue('index', node, tensorMap, context);
                    writeTensor = utils_1.getParamValue('tensor', node, tensorMap, context);
                    writeTensorArray = context.getTensorArray(id);
                    writeTensorArray.write(index, writeTensor);
                    return [2 /*return*/, [tfjs_core_1.scalar(1.0)]];
                case 10:
                    readId = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    readIndex = utils_1.getParamValue('index', node, tensorMap, context);
                    readTensorArray = context.getTensorArray(readId);
                    return [2 /*return*/, [readTensorArray.read(readIndex)]];
                case 11:
                    gatherId = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    gatherIndices = utils_1.getParamValue('indices', node, tensorMap, context);
                    gatherDtype = utils_1.getParamValue('dtype', node, tensorMap, context);
                    gatherTensorArray = context.getTensorArray(gatherId);
                    return [2 /*return*/, [gatherTensorArray.gather(gatherIndices, gatherDtype)]];
                case 12:
                    scatterId = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    scatterIndices = utils_1.getParamValue('indices', node, tensorMap, context);
                    scatterTensor = utils_1.getParamValue('tensor', node, tensorMap, context);
                    scatterTensorArray = context.getTensorArray(scatterId);
                    scatterTensorArray.scatter(scatterIndices, scatterTensor);
                    return [2 /*return*/, [tfjs_core_1.scalar(1.0)]];
                case 13:
                    concatId = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    concatTensorArray = context.getTensorArray(concatId);
                    concatDtype = utils_1.getParamValue('dtype', node, tensorMap, context);
                    return [2 /*return*/, [concatTensorArray.concat(concatDtype)]];
                case 14:
                    splitId = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    splitTensor = utils_1.getParamValue('tensor', node, tensorMap, context);
                    lengths = utils_1.getParamValue('lengths', node, tensorMap, context);
                    splitTensorArray = context.getTensorArray(splitId);
                    splitTensorArray.split(lengths, splitTensor);
                    return [2 /*return*/, [tfjs_core_1.scalar(1.0)]];
                case 15:
                    sizeId = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    sizeTensorArray = context.getTensorArray(sizeId);
                    return [2 /*return*/, [tfjs_core_1.scalar(sizeTensorArray.size(), 'int32')]];
                case 16:
                    closeId = utils_1.getParamValue('tensorArrayId', node, tensorMap, context);
                    closeTensorArray = context.getTensorArray(closeId);
                    closeTensorArray.clearAndClose();
                    return [2 /*return*/, []];
                case 17: throw TypeError("Node type " + node.op + " is not implemented");
            }
        });
    });
}
exports.executeOp = executeOp;
exports.CATEGORY = 'control';
//# sourceMappingURL=control_executor.js.map
}, function(modId) { var map = {"../../executor/tensor_array":1557782889638,"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889638, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
// tslint:disable-next-line:max-line-length
var tfjs_core_1 = require("@tensorflow/tfjs-core");
/**
 * The TensorArray object keeps an array of Tensors.  It
 * allows reading from the array and writing to the array.
 */
var TensorArray = /** @class */ (function () {
    function TensorArray(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead) {
        this.name = name;
        this.dtype = dtype;
        this.maxSize = maxSize;
        this.elementShape = elementShape;
        this.identicalElementShapes = identicalElementShapes;
        this.dynamicSize = dynamicSize;
        this.clearAfterRead = clearAfterRead;
        this.tensors = [];
        this.closed_ = false;
        this.id = TensorArray.nextId++;
    }
    Object.defineProperty(TensorArray.prototype, "closed", {
        get: function () {
            return this.closed_;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Close the current TensorArray.
     */
    TensorArray.prototype.clearAndClose = function () {
        this.tensors.forEach(function (tensor) { return tensor.tensor.dispose(); });
        this.tensors = [];
        this.closed_ = true;
    };
    TensorArray.prototype.size = function () {
        return this.tensors.length;
    };
    /**
     * Read the value at location index in the TensorArray.
     * @param index Number the index to read from.
     */
    TensorArray.prototype.read = function (index) {
        if (this.closed_) {
            throw new Error("TensorArray " + this.name + " has already been closed.");
        }
        if (index < 0 || index >= this.tensors.length) {
            throw new Error("Tried to read from index " + index + ", but array size is: " + this.tensors.length);
        }
        var tensorWithState = this.tensors[index];
        if (tensorWithState.cleared) {
            throw new Error("TensorArray " + this.name + ": Could not read index " + index + " twice because it was cleared after a previous read " +
                "(perhaps try setting clear_after_read = false?).");
        }
        if (this.clearAfterRead) {
            tensorWithState.cleared = true;
        }
        tensorWithState.read = true;
        return tensorWithState.tensor;
    };
    /**
     * Helper method to read multiple tensors from the specified indices.
     */
    TensorArray.prototype.readMany = function (indices) {
        var _this = this;
        return indices.map(function (index) { return _this.read(index); });
    };
    /**
     * Write value into the index of the TensorArray.
     * @param index number the index to write to.
     * @param tensor
     */
    TensorArray.prototype.write = function (index, tensor) {
        if (this.closed_) {
            throw new Error("TensorArray " + this.name + " has already been closed.");
        }
        if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
            throw new Error("Tried to write to index " + index + ", but array is not resizeable and size is: " + this.maxSize);
        }
        var t = this.tensors[index] || {};
        if (tensor.dtype !== this.dtype) {
            throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + index + ",\n          because the value dtype is " + tensor.dtype + ", but TensorArray dtype is " + this.dtype + ".");
        }
        // Set the shape for the first time write to unknow shape tensor array
        if (this.size() === 0 &&
            (this.elementShape == null || this.elementShape.length === 0)) {
            this.elementShape = tensor.shape;
        }
        this.assertShapesMatchAllowUndefinedSize(this.elementShape, tensor.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + index + ".");
        if (t && t.read) {
            throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + index + ", because it has already been read.");
        }
        if (t && t.written) {
            throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + index + ", because it has already been written.");
        }
        t.tensor = tensor;
        t.written = true;
        this.tensors[index] = t;
    };
    /**
     * Helper method to write multiple tensors to the specified indices.
     */
    TensorArray.prototype.writeMany = function (indices, tensors) {
        var _this = this;
        if (indices.length !== tensors.length) {
            throw new Error("TensorArray " + this.name + ": could not write multiple tensors," +
                ("because the index size: " + indices.length + " is not the same as tensors size: " + tensors.length + "."));
        }
        indices.forEach(function (i, index) { return _this.write(i, tensors[index]); });
    };
    /**
     * Return selected values in the TensorArray as a packed Tensor. All of
     * selected values must have been written and their shapes must all match.
     * @param [indices] number[] Optional. Taking values in [0, max_value). If the
     *    TensorArray is not dynamic, max_value=size(). If not specified returns
     *    all tensors in the original order.
     * @param [dtype]
     */
    TensorArray.prototype.gather = function (indices, dtype) {
        if (!!dtype && dtype !== this.dtype) {
            throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + dtype);
        }
        if (!indices) {
            indices = [];
            for (var i = 0; i < this.size(); i++) {
                indices.push(i);
            }
        }
        if (indices.length === 0) {
            return tfjs_core_1.tensor([], [0].concat(this.elementShape));
        }
        // Read all the PersistentTensors into a vector to keep track of
        // their memory.
        var tensors = this.readMany(indices);
        this.assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, 'TensorArray shape mismatch: ');
        return tfjs_core_1.stack(tensors, 0);
    };
    /**
     * Return the values in the TensorArray as a concatenated Tensor.
     */
    TensorArray.prototype.concat = function (dtype) {
        if (!!dtype && dtype !== this.dtype) {
            throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + dtype);
        }
        if (this.size() === 0) {
            return tfjs_core_1.tensor([], [0].concat(this.elementShape));
        }
        var indices = [];
        for (var i = 0; i < this.size(); i++) {
            indices.push(i);
        }
        // Collect all the tensors from the tensors array.
        var tensors = this.readMany(indices);
        this.assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + tensors[0].shape + ")");
        return tfjs_core_1.concat(tensors, 0);
    };
    /**
     * Scatter the values of a Tensor in specific indices of a TensorArray.
     * @param indices nummber[] values in [0, max_value). If the
     *    TensorArray is not dynamic, max_value=size().
     * @param tensor Tensor input tensor.
     */
    TensorArray.prototype.scatter = function (indices, tensor) {
        if (tensor.dtype !== this.dtype) {
            throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + tensor.dtype);
        }
        if (indices.length !== tensor.shape[0]) {
            throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + indices.length + " vs. " + tensor.shape[0]);
        }
        var maxIndex = Math.max.apply(Math, indices);
        if (!this.dynamicSize && maxIndex >= this.maxSize) {
            throw new Error("Max index must be < array size (" + maxIndex + "  vs. " + this.maxSize + ")");
        }
        this.writeMany(indices, tfjs_core_1.unstack(tensor, 0));
    };
    /**
     * Split the values of a Tensor into the TensorArray.
     * @param length number[] with the lengths to use when splitting value along
     *    its first dimension.
     * @param tensor Tensor, the tensor to split.
     */
    TensorArray.prototype.split = function (length, tensor) {
        var _this = this;
        if (tensor.dtype !== this.dtype) {
            throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + tensor.dtype);
        }
        var totalLength = 0;
        var cumulativeLengths = length.map(function (len) {
            totalLength += len;
            return totalLength;
        });
        if (totalLength !== tensor.shape[0]) {
            throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + totalLength + ", and tensor's shape is: " + tensor.shape);
        }
        if (!this.dynamicSize && length.length !== this.maxSize) {
            throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + length.length + "), " +
                'and the TensorArray is not marked as dynamically resizeable');
        }
        var elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
        var tensors = [];
        tfjs_core_1.tidy(function () {
            tensor = tensor.reshape([1, totalLength, elementPerRow]);
            for (var i = 0; i < length.length; ++i) {
                var previousLength = (i === 0) ? 0 : cumulativeLengths[i - 1];
                var indices_1 = [0, previousLength, 0];
                var sizes = [1, length[i], elementPerRow];
                tensors[i] = tfjs_core_1.slice(tensor, indices_1, sizes).reshape(_this.elementShape);
            }
            return tensors;
        });
        var indices = [];
        for (var i = 0; i < length.length; i++) {
            indices[i] = i;
        }
        this.writeMany(indices, tensors);
    };
    /**
     * This differs from util.assertShapesMatch in that it allows values of
     * negative one, an undefined size of a dimensinon, in a shape to match
     * anything.
     */
    TensorArray.prototype.assertShapesMatchAllowUndefinedSize = function (shapeA, shapeB, errorMessagePrefix) {
        if (errorMessagePrefix === void 0) { errorMessagePrefix = ''; }
        tfjs_core_1.util.assert(this.shapesEqualAllowUndefinedSize(shapeA, shapeB), function () {
            return errorMessagePrefix + (" Shapes " + shapeA + " and " + shapeB + " must match");
        });
    };
    TensorArray.prototype.shapesEqualAllowUndefinedSize = function (n1, n2) {
        if (n1.length !== n2.length) {
            return false;
        }
        for (var i = 0; i < n1.length; i++) {
            if (n1[i] !== -1 && n2[i] !== -1 && n1[i] !== n2[i]) {
                return false;
            }
        }
        return true;
    };
    TensorArray.nextId = 0;
    return TensorArray;
}());
exports.TensorArray = TensorArray;
//# sourceMappingURL=tensor_array.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889639, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'Conv1D': {
            var stride = utils_1.getParamValue('stride', node, tensorMap, context);
            var pad = utils_1.getParamValue('pad', node, tensorMap, context);
            var dataFormat = utils_1.getParamValue('dataFormat', node, tensorMap, context)
                .toUpperCase();
            var dilation = utils_1.getParamValue('dilation', node, tensorMap, context);
            return [tfc.conv1d(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('filter', node, tensorMap, context), stride, pad, dataFormat, dilation)];
        }
        case 'Conv2D': {
            var stride = utils_1.getParamValue('strides', node, tensorMap, context);
            var pad = utils_1.getParamValue('pad', node, tensorMap, context);
            var dataFormat = utils_1.getParamValue('dataFormat', node, tensorMap, context)
                .toUpperCase();
            var dilations = utils_1.getParamValue('dilations', node, tensorMap, context);
            return [tfc.conv2d(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[0], dilations[1]])];
        }
        case 'Conv2DBackpropInput':
        case 'Conv2dTranspose': {
            var shape = utils_1.getParamValue('outputShape', node, tensorMap, context);
            var stride = utils_1.getParamValue('strides', node, tensorMap, context);
            var pad = utils_1.getParamValue('pad', node, tensorMap, context);
            return [tfc.conv2dTranspose(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('filter', node, tensorMap, context), shape, [stride[1], stride[2]], pad)];
        }
        case 'DepthwiseConv2dNative':
        case 'DepthwiseConv2d': {
            var stride = utils_1.getParamValue('strides', node, tensorMap, context);
            var pad = utils_1.getParamValue('pad', node, tensorMap, context);
            var dilations = utils_1.getParamValue('dilations', node, tensorMap, context);
            var dataFormat = utils_1.getParamValue('dataFormat', node, tensorMap, context)
                .toUpperCase();
            return [tfc.depthwiseConv2d(utils_1.getParamValue('input', node, tensorMap, context), utils_1.getParamValue('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[0], dilations[1]])];
        }
        case 'AvgPool': {
            var stride = utils_1.getParamValue('strides', node, tensorMap, context);
            var pad = utils_1.getParamValue('pad', node, tensorMap, context);
            var kernelSize = utils_1.getParamValue('kernelSize', node, tensorMap, context);
            return [tfc.avgPool(utils_1.getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
        }
        case 'MaxPool': {
            var stride = utils_1.getParamValue('strides', node, tensorMap, context);
            var pad = utils_1.getParamValue('pad', node, tensorMap, context);
            var kernelSize = utils_1.getParamValue('kernelSize', node, tensorMap, context);
            return [tfc.maxPool(utils_1.getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'convolution';
//# sourceMappingURL=convolution_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889640, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'Fill': {
            var shape = utils_1.getParamValue('shape', node, tensorMap, context);
            var dtype = utils_1.getParamValue('dtype', node, tensorMap, context);
            var value = utils_1.getParamValue('value', node, tensorMap, context);
            return [tfc.fill(shape, value, dtype)];
        }
        case 'LinSpace': {
            var start = utils_1.getParamValue('start', node, tensorMap, context);
            var stop_1 = utils_1.getParamValue('stop', node, tensorMap, context);
            var num = utils_1.getParamValue('num', node, tensorMap, context);
            return [tfc.linspace(start, stop_1, num)];
        }
        case 'OneHot': {
            var indices = utils_1.getParamValue('indices', node, tensorMap, context);
            var depth = utils_1.getParamValue('depth', node, tensorMap, context);
            var onValue = utils_1.getParamValue('onValue', node, tensorMap, context);
            var offValue = utils_1.getParamValue('offValue', node, tensorMap, context);
            return [tfc.oneHot(indices, depth, onValue, offValue)];
        }
        case 'Ones': {
            return [tfc.ones(utils_1.getParamValue('shape', node, tensorMap, context), utils_1.getParamValue('dtype', node, tensorMap, context))];
        }
        case 'OnesLike': {
            return [tfc.onesLike(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'RandomUniform': {
            return [tfc.randomUniform(
                // tslint:disable-next-line:no-any
                utils_1.getParamValue('shape', node, tensorMap, context), utils_1.getParamValue('minval', node, tensorMap, context), utils_1.getParamValue('maxval', node, tensorMap, context), utils_1.getParamValue('dtype', node, tensorMap, context))];
        }
        case 'Range': {
            var start = utils_1.getParamValue('start', node, tensorMap, context);
            var stop_2 = utils_1.getParamValue('stop', node, tensorMap, context);
            var step = utils_1.getParamValue('step', node, tensorMap, context);
            return [tfc.range(start, stop_2, step, utils_1.getParamValue('dtype', node, tensorMap, context))];
        }
        case 'TruncatedNormal': {
            var shape = utils_1.getParamValue('shape', node, tensorMap, context);
            var mean = utils_1.getParamValue('mean', node, tensorMap, context);
            var stdDev = utils_1.getParamValue('stdDev', node, tensorMap, context);
            var seed = utils_1.getParamValue('seed', node, tensorMap, context);
            return [tfc.truncatedNormal(shape, mean, stdDev, utils_1.getParamValue('dtype', node, tensorMap, context), seed)];
        }
        case 'Zeros': {
            return [tfc.zeros(utils_1.getParamValue('shape', node, tensorMap, context), utils_1.getParamValue('dtype', node, tensorMap, context))];
        }
        case 'ZerosLike': {
            return [tfc.zerosLike(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'creation';
//# sourceMappingURL=creation_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889641, function(require, module, exports) {

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
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
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
function executeOp(node, tensorMap, context) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, boxes, scores, maxOutputSize, iouThreshold, scoreThreshold;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = node.op;
                    switch (_a) {
                        case 'NonMaxSuppressionV3': return [3 /*break*/, 1];
                        case 'NonMaxSuppressionV2': return [3 /*break*/, 1];
                        case 'Where': return [3 /*break*/, 3];
                        case 'ListDiff': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1:
                    boxes = utils_1.getParamValue('boxes', node, tensorMap, context);
                    scores = utils_1.getParamValue('scores', node, tensorMap, context);
                    maxOutputSize = utils_1.getParamValue('maxOutputSize', node, tensorMap, context);
                    iouThreshold = utils_1.getParamValue('iouThreshold', node, tensorMap, context);
                    scoreThreshold = utils_1.getParamValue('scoreThreshold', node, tensorMap, context);
                    return [4 /*yield*/, tfc.image.nonMaxSuppressionAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold)];
                case 2: return [2 /*return*/, [_b.sent()]];
                case 3: return [4 /*yield*/, tfc.whereAsync(utils_1.getParamValue('condition', node, tensorMap, context))];
                case 4: return [2 /*return*/, [_b.sent()]];
                case 5: return [4 /*yield*/, tfc.setdiff1dAsync(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('y', node, tensorMap, context))];
                case 6: return [2 /*return*/, _b.sent()];
                case 7: throw TypeError("Node type " + node.op + " is not implemented");
            }
        });
    });
}
exports.executeOp = executeOp;
exports.CATEGORY = 'dynamic';
//# sourceMappingURL=dynamic_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889642, function(require, module, exports) {

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
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
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'TopKV2': {
            var x = utils_1.getParamValue('x', node, tensorMap, context);
            var k = utils_1.getParamValue('k', node, tensorMap, context);
            var sorted = utils_1.getParamValue('sorted', node, tensorMap, context);
            var result = tfc.topk(x, k, sorted);
            return [result.values, result.indices];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'evaluation';
//# sourceMappingURL=evaluation_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889643, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'Const': {
            return tensorMap[node.name];
        }
        case 'PlaceholderWithDefault':
            var def = utils_1.getParamValue('default', node, tensorMap, context);
            return [utils_1.getTensor(node.name, tensorMap, context) || def];
        case 'Placeholder':
            return [utils_1.getTensor(node.name, tensorMap, context)];
        case 'Identity':
        case 'StopGradient':
        case 'FakeQuantWithMinMaxVars': // This op is currently ignored.
            return [
                utils_1.getParamValue('x', node, tensorMap, context).clone()
            ];
        case 'IdentityN':
            return utils_1.getParamValue('x', node, tensorMap, context)
                .map(function (t) { return t.clone(); });
        case 'Snapshot':
            var snapshot = utils_1.getParamValue('x', node, tensorMap, context);
            return [snapshot.clone()];
        case 'Shape':
            return [tfc.tensor1d(utils_1.getParamValue('x', node, tensorMap, context).shape, 'int32')];
        case 'ShapeN':
            return utils_1.getParamValue('x', node, tensorMap, context)
                .map(function (t) { return tfc.tensor1d(t.shape); });
        case 'Size':
            return [tfc.scalar(utils_1.getParamValue('x', node, tensorMap, context).size, 'int32')];
        case 'Rank':
            return [tfc.scalar(utils_1.getParamValue('x', node, tensorMap, context).rank, 'int32')];
        case 'NoOp':
            return [];
        case 'Print':
            var input = utils_1.getParamValue('x', node, tensorMap, context);
            var data = utils_1.getParamValue('data', node, tensorMap, context);
            var message = utils_1.getParamValue('message', node, tensorMap, context);
            var summarize = utils_1.getParamValue('summarize', node, tensorMap, context);
            console.warn('The graph has a tf.print() operation,' +
                'usually used for debugging, which slows down performance.');
            console.log(message);
            for (var i = 0; i < data.length; i++) {
                console.log(Array.prototype.slice.call(data[i].dataSync()).slice(0, summarize));
            }
            return [input];
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'graph';
//# sourceMappingURL=graph_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889644, function(require, module, exports) {

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
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
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'ResizeBilinear': {
            var images = utils_1.getParamValue('images', node, tensorMap, context);
            var size = utils_1.getParamValue('size', node, tensorMap, context);
            var alignCorners = utils_1.getParamValue('alignCorners', node, tensorMap, context);
            return [tfc.image.resizeBilinear(images, [size[0], size[1]], alignCorners)];
        }
        case 'ResizeNearestNeighbor': {
            var images = utils_1.getParamValue('images', node, tensorMap, context);
            var size = utils_1.getParamValue('size', node, tensorMap, context);
            var alignCorners = utils_1.getParamValue('alignCorners', node, tensorMap, context);
            return [tfc.image.resizeNearestNeighbor(images, [size[0], size[1]], alignCorners)];
        }
        case 'CropAndResize': {
            var image = utils_1.getParamValue('image', node, tensorMap, context);
            var boxes = utils_1.getParamValue('boxes', node, tensorMap, context);
            var boxInd = utils_1.getParamValue('boxInd', node, tensorMap, context);
            var cropSize = utils_1.getParamValue('cropSize', node, tensorMap, context);
            var method = utils_1.getParamValue('method', node, tensorMap, context);
            var extrapolationValue = utils_1.getParamValue('extrapolationValue', node, tensorMap, context);
            return [tfc.image.cropAndResize(image, boxes, boxInd, cropSize, method, extrapolationValue)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'image';
//# sourceMappingURL=image_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889645, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'Equal': {
            return [tfc.equal(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'NotEqual': {
            return [tfc.notEqual(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'Greater': {
            return [tfc.greater(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'GreaterEqual': {
            return [tfc.greaterEqual(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'Less': {
            return [tfc.less(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'LessEqual': {
            return [tfc.lessEqual(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'LogicalAnd': {
            return [tfc.logicalAnd(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'LogicalNot': {
            return [tfc.logicalNot(utils_1.getParamValue('a', node, tensorMap, context))];
        }
        case 'LogicalOr': {
            return [tfc.logicalOr(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        case 'Select': {
            return [tfc.where(utils_1.getParamValue('condition', node, tensorMap, context), utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'logical';
//# sourceMappingURL=logical_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889646, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'BatchMatMul':
        case 'MatMul':
            return [tfc.matMul(utils_1.getParamValue('a', node, tensorMap, context), utils_1.getParamValue('b', node, tensorMap, context), utils_1.getParamValue('transposeA', node, tensorMap, context), utils_1.getParamValue('transposeB', node, tensorMap, context))];
        case 'Transpose':
            return [tfc.transpose(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('perm', node, tensorMap, context))];
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'matrices';
//# sourceMappingURL=matrices_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889647, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'FusedBatchNorm':
        case 'FusedBatchNormV2': {
            return [tfc.batchNorm(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('mean', node, tensorMap, context), utils_1.getParamValue('variance', node, tensorMap, context), utils_1.getParamValue('offset', node, tensorMap, context), utils_1.getParamValue('scale', node, tensorMap, context), utils_1.getParamValue('epsilon', node, tensorMap, context))];
        }
        case 'LRN': {
            return [tfc.localResponseNormalization(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('radius', node, tensorMap, context), utils_1.getParamValue('bias', node, tensorMap, context), utils_1.getParamValue('alpha', node, tensorMap, context), utils_1.getParamValue('beta', node, tensorMap, context))];
        }
        case 'Softmax': {
            return [tfc.softmax(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'LogSoftmax': {
            return [tfc.logSoftmax(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'SparseToDense': {
            return [tfc.sparseToDense(utils_1.getParamValue('sparseIndices', node, tensorMap, context), utils_1.getParamValue('outputShape', node, tensorMap, context), utils_1.getParamValue('sparseValues', node, tensorMap, context), utils_1.getParamValue('defaultValue', node, tensorMap, context))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'normalization';
//# sourceMappingURL=normalization_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889648, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'Max': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var keepDims = utils_1.getParamValue('keepDims', node, tensorMap, context);
            return [tfc.max(utils_1.getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Mean': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var keepDims = utils_1.getParamValue('keepDims', node, tensorMap, context);
            return [tfc.mean(utils_1.getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Min': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var keepDims = utils_1.getParamValue('keepDims', node, tensorMap, context);
            return [tfc.min(utils_1.getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Sum': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var keepDims = utils_1.getParamValue('keepDims', node, tensorMap, context);
            return [tfc.sum(utils_1.getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'All': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var keepDims = utils_1.getParamValue('keepDims', node, tensorMap, context);
            return [tfc.all(utils_1.getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Any': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var keepDims = utils_1.getParamValue('keepDims', node, tensorMap, context);
            return [tfc.any(utils_1.getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'ArgMax': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            return [tfc.argMax(utils_1.getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'ArgMin': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            return [tfc.argMin(utils_1.getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'Prod': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var keepDims = utils_1.getParamValue('keepDims', node, tensorMap, context);
            return [tfc.prod(utils_1.getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'reduction';
//# sourceMappingURL=reduction_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889649, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'ConcatV2':
        case 'Concat': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var inputs = utils_1.getParamValue('tensors', node, tensorMap, context);
            return [tfc.concat(inputs, axis)];
        }
        case 'GatherV2':
        case 'Gather': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var input = utils_1.getParamValue('x', node, tensorMap, context);
            var indices = utils_1.getParamValue('indices', node, tensorMap, context);
            return [tfc.gather(input, indices.asType('int32'), axis)];
        }
        case 'ReverseV2':
        case 'Reverse': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var input = utils_1.getParamValue('x', node, tensorMap, context);
            return [tfc.reverse(input, axis)];
        }
        case 'Slice': {
            // tslint:disable-next-line:no-any
            var begin = utils_1.getParamValue('begin', node, tensorMap, context);
            // tslint:disable-next-line:no-any
            var size = utils_1.getParamValue('size', node, tensorMap, context);
            return [tfc.slice(utils_1.getParamValue('x', node, tensorMap, context), begin, size)];
        }
        case 'StridedSlice': {
            var begin = utils_1.getParamValue('begin', node, tensorMap, context);
            var end = utils_1.getParamValue('end', node, tensorMap, context);
            var strides = utils_1.getParamValue('strides', node, tensorMap, context);
            var beginMask = utils_1.getParamValue('beginMask', node, tensorMap, context);
            var endMask = utils_1.getParamValue('endMask', node, tensorMap, context);
            var ellipsisMask = utils_1.getParamValue('ellipsisMask', node, tensorMap, context);
            var newAxisMask = utils_1.getParamValue('newAxisMask', node, tensorMap, context);
            var shrinkAxisMask = utils_1.getParamValue('shrinkAxisMask', node, tensorMap, context);
            var tensor = utils_1.getParamValue('x', node, tensorMap, context);
            if (begin.length === 1 && tensor.shape.length > 1) {
                for (var i = 1; i < tensor.shape.length; i++) {
                    begin.push(0);
                    end.push(tensor.shape[i]);
                    strides.push(strides[0]);
                }
            }
            return [tfc.stridedSlice(tensor, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask)];
        }
        case 'Pack': {
            return tfc.tidy(function () {
                var axis = utils_1.getParamValue('axis', node, tensorMap, context);
                var tensors = utils_1.getParamValue('tensors', node, tensorMap, context);
                // Reshape the tensors to the first tensor's shape if they don't match.
                var shape = tensors[0].shape;
                var squeezedShape = tensors[0].squeeze().shape;
                var mapped = tensors.map(function (tensor) {
                    var sameShape = tfc.util.arraysEqual(tensor.shape, shape);
                    if (!sameShape &&
                        !tfc.util.arraysEqual(tensor.squeeze().shape, squeezedShape)) {
                        throw new Error('the input tensors shape does not match');
                    }
                    return sameShape ? tensor : tensor.reshape(shape);
                });
                return [tfc.stack(mapped, axis)];
            });
        }
        case 'Unpack': {
            return tfc.tidy(function () {
                var axis = utils_1.getParamValue('axis', node, tensorMap, context);
                var tensor = utils_1.getParamValue('tensor', node, tensorMap, context);
                return tfc.unstack(tensor, axis);
            });
        }
        case 'Tile': {
            var reps = utils_1.getParamValue('reps', node, tensorMap, context);
            return [tfc.tile(utils_1.getParamValue('x', node, tensorMap, context), reps)];
        }
        case 'Split':
        case 'SplitV': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var numOrSizeSplits = utils_1.getParamValue('numOrSizeSplits', node, tensorMap, context);
            return tfc.split(utils_1.getParamValue('x', node, tensorMap, context), numOrSizeSplits, axis);
        }
        case 'ScatterNd': {
            var indices = utils_1.getParamValue('indices', node, tensorMap, context);
            var values = utils_1.getParamValue('values', node, tensorMap, context);
            var shape = utils_1.getParamValue('shape', node, tensorMap, context);
            return [tfc.scatterND(indices, values, shape)];
        }
        case 'GatherNd': {
            var x = utils_1.getParamValue('x', node, tensorMap, context);
            var indices = utils_1.getParamValue('indices', node, tensorMap, context);
            return [tfc.gatherND(x, indices)];
        }
        case 'SparseToDense': {
            var indices = utils_1.getParamValue('sparseIndices', node, tensorMap, context);
            var shape = utils_1.getParamValue('outputShape', node, tensorMap, context);
            var sparseValues = utils_1.getParamValue('sparseValues', node, tensorMap, context);
            var defaultValue = utils_1.getParamValue('defaultValue', node, tensorMap, context);
            return [tfc.sparseToDense(indices, sparseValues, shape, sparseValues.dtype === defaultValue.dtype ?
                    defaultValue :
                    defaultValue.asType(sparseValues.dtype))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'slice_join';
//# sourceMappingURL=slice_join_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889650, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'FFT': {
            return [tfc.fft(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'IFFT': {
            return [tfc.ifft(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'RFFT': {
            return [tfc.rfft(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        case 'IRFFT': {
            return [tfc.irfft(utils_1.getParamValue('x', node, tensorMap, context))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'spectral';
//# sourceMappingURL=spectral_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889651, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'Cast': {
            return [tfc.cast(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('dtype', node, tensorMap, context))];
        }
        case 'ExpandDims': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            return [tfc.expandDims(utils_1.getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'Squeeze': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            return [tfc.squeeze(utils_1.getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'Reshape': {
            return [tfc.reshape(utils_1.getParamValue('x', node, tensorMap, context), utils_1.getParamValue('shape', node, tensorMap, context))];
        }
        case 'PadV2':
        case 'Pad': {
            return [tfc.pad(utils_1.getParamValue('x', node, tensorMap, context), utils_1.split(utils_1.getParamValue('padding', node, tensorMap, context), 2), utils_1.getParamValue('constantValue', node, tensorMap, context))];
        }
        case 'SpaceToBatchND': {
            var blockShape = utils_1.getParamValue('blockShape', node, tensorMap, context);
            var paddings = utils_1.split(utils_1.getParamValue('paddings', node, tensorMap, context), 2);
            return [tfc.spaceToBatchND(utils_1.getParamValue('x', node, tensorMap, context), blockShape, paddings)];
        }
        case 'BatchToSpaceND': {
            var blockShape = utils_1.getParamValue('blockShape', node, tensorMap, context);
            var crops = utils_1.split(utils_1.getParamValue('crops', node, tensorMap, context), 2);
            return [tfc.batchToSpaceND(utils_1.getParamValue('x', node, tensorMap, context), blockShape, crops)];
        }
        case 'DepthToSpace': {
            var blockSize = utils_1.getParamValue('blockSize', node, tensorMap, context);
            var dataFormat = utils_1.getParamValue('dataFormat', node, tensorMap, context).toUpperCase();
            return [tfc.depthToSpace(utils_1.getParamValue('x', node, tensorMap, context), blockSize, dataFormat)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'transformation';
//# sourceMappingURL=transformation_executor.js.map
}, function(modId) { var map = {"./utils":1557782889616}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889652, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ExecutionContext captures the runtime environment of the node. It keeps
 * track of the current frame and iteration for the control flow ops.
 *
 * For example, typical Dynamic RNN model may contain loops, for which
 * TensorFlow will generate graphs with Enter/Exit nodes to control the
 * current execution frame, and NextIteration Nodes for iteration id increment.
 * For model with branch logic, TensorFLow will generate Switch/Merge ops.
 */
var ExecutionContext = /** @class */ (function () {
    function ExecutionContext(weightMap, tensorArrayMap) {
        this.weightMap = weightMap;
        this.tensorArrayMap = tensorArrayMap;
        this.rootContext = { id: 0, frameName: '', iterationId: 0 };
        this.contexts = [this.rootContext];
        this.lastId = 0;
        this.generateCurrentContextIds();
    }
    ExecutionContext.prototype.newFrame = function (id, frameName) {
        return { id: id, frameName: frameName, iterationId: 0 };
    };
    Object.defineProperty(ExecutionContext.prototype, "currentContext", {
        get: function () {
            return this.contexts;
        },
        /**
         * Set the current context
         * @param contexts: ExecutionContextInfo[] the current path of execution
         * frames
         */
        set: function (contexts) {
            if (this.contexts !== contexts) {
                this.contexts = contexts;
                this.generateCurrentContextIds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionContext.prototype, "currentContextId", {
        /**
         * Returns the current context in string format.
         */
        get: function () {
            return this._currentContextIds[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionContext.prototype, "currentContextIds", {
        /**
         * Returns the current context and all parent contexts in string format.
         * This allow access to the nodes in the current and parent frames.
         */
        get: function () {
            return this._currentContextIds;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionContext.prototype.generateCurrentContextIds = function () {
        var names = [];
        for (var i = 0; i < this.contexts.length - 1; i++) {
            var contexts = this.contexts.slice(0, this.contexts.length - i);
            names.push(this.contextIdforContexts(contexts));
        }
        names.push('');
        this._currentContextIds = names;
    };
    ExecutionContext.prototype.contextIdforContexts = function (contexts) {
        return contexts ?
            contexts
                .map(function (context) { return (context.id === 0 && context.iterationId === 0) ?
                '' :
                context.frameName + "-" + context.iterationId; })
                .join('/') :
            '';
    };
    /**
     * Enter a new frame, a new context is pushed on the current context list.
     * @param frameId new frame id
     */
    ExecutionContext.prototype.enterFrame = function (frameId) {
        if (this.contexts) {
            this.lastId++;
            this.contexts = this.contexts.slice();
            this.contexts.push(this.newFrame(this.lastId, frameId));
            this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
        }
    };
    /**
     * Exit the current frame, the last context is removed from the current
     * context list.
     */
    ExecutionContext.prototype.exitFrame = function () {
        if (this.contexts && this.contexts.length > 1) {
            this.contexts = this.contexts.slice();
            this.contexts.splice(-1);
            this.currentContextIds.shift();
        }
        else {
            throw new Error('Cannot exit frame, the context is empty');
        }
    };
    /**
     * Enter the next iteration of a loop, the iteration id of last context is
     * increased.
     */
    ExecutionContext.prototype.nextIteration = function () {
        if (this.contexts && this.contexts.length > 0) {
            this.contexts = this.contexts.slice();
            this.lastId++;
            var context = Object.assign({}, this.contexts[this.contexts.length - 1]);
            context.iterationId += 1;
            context.id = this.lastId;
            this.contexts.splice(-1, 1, context);
            this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
        }
        else {
            throw new Error('Cannot increase frame iteration, the context is empty');
        }
    };
    ExecutionContext.prototype.getWeight = function (name) {
        return this.weightMap[name];
    };
    ExecutionContext.prototype.addTensorArray = function (tensorArray) {
        this.tensorArrayMap[tensorArray.id] = tensorArray;
    };
    ExecutionContext.prototype.getTensorArray = function (id) {
        return this.tensorArrayMap[id];
    };
    return ExecutionContext;
}());
exports.ExecutionContext = ExecutionContext;
//# sourceMappingURL=execution_context.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1557782889653, function(require, module, exports) {

/** @license See the LICENSE file. */
Object.defineProperty(exports, "__esModule", { value: true });
// This code is auto-generated, do not modify this file!
var version = '1.1.2';
exports.version = version;
//# sourceMappingURL=version.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1557782889612);
})()
//# sourceMappingURL=index.js.map