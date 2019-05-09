module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1549500331250, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkpoint_loader_1 = require("./checkpoint_loader");
exports.CheckpointLoader = checkpoint_loader_1.CheckpointLoader;
var mobilenet_1 = require("./mobilenet");
exports.MobileNet = mobilenet_1.MobileNet;
exports.mobileNetArchitectures = mobilenet_1.mobileNetArchitectures;
var decodeMultiplePoses_1 = require("./multiPose/decodeMultiplePoses");
exports.decodeMultiplePoses = decodeMultiplePoses_1.decodeMultiplePoses;
var posenet_model_1 = require("./posenet_model");
exports.load = posenet_model_1.load;
exports.PoseNet = posenet_model_1.PoseNet;
var decodeSinglePose_1 = require("./singlePose/decodeSinglePose");
exports.decodeSinglePose = decodeSinglePose_1.decodeSinglePose;
var keypoints_1 = require("./keypoints");
exports.partIds = keypoints_1.partIds;
exports.partNames = keypoints_1.partNames;
exports.poseChain = keypoints_1.poseChain;
var util_1 = require("./util");
exports.getAdjacentKeyPoints = util_1.getAdjacentKeyPoints;
exports.getBoundingBox = util_1.getBoundingBox;
exports.getBoundingBoxPoints = util_1.getBoundingBoxPoints;
}, function(modId) {var map = {"./checkpoint_loader":1549500331251,"./mobilenet":1549500331252,"./multiPose/decodeMultiplePoses":1549500331253,"./posenet_model":1549500331260,"./singlePose/decodeSinglePose":1549500331262,"./keypoints":1549500331255,"./util":1549500331254}; return __REQUIRE__(map[modId], modId); })
//# sourceMappingURL=index.js.map
__DEFINE__(1549500331251, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_1 = require("@tensorflow/tfjs-core");
var MANIFEST_FILE = 'manifest.json';
var CheckpointLoader = (function () {
    function CheckpointLoader(urlPath) {
        this.urlPath = urlPath;
        if (this.urlPath.charAt(this.urlPath.length - 1) !== '/') {
            this.urlPath += '/';
        }
    }
    CheckpointLoader.prototype.loadManifest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            wx.request({url: _this.urlPath + MANIFEST_FILE, dataType: 'json', success: function (res) {
                _this.checkpointManifest = res.data;
                resolve();
            },
            fail: function (error) {
                throw new Error(MANIFEST_FILE + " not found at " + _this.urlPath + ". " + error);
            }});
        });
    };
    CheckpointLoader.prototype.getCheckpointManifest = function () {
        var _this = this;
        if (this.checkpointManifest == null) {
            return new Promise(function (resolve, reject) {
                _this.loadManifest().then(function () {
                    resolve(_this.checkpointManifest);
                });
            });
        }
        return new Promise(function (resolve, reject) {
            resolve(_this.checkpointManifest);
        });
    };
    CheckpointLoader.prototype.getAllVariables = function () {
        var _this = this;
        if (this.variables != null) {
            return new Promise(function (resolve, reject) {
                resolve(_this.variables);
            });
        }
        return new Promise(function (resolve, reject) {
            _this.getCheckpointManifest().then(function (checkpointDefinition) {
                var variableNames = Object.keys(_this.checkpointManifest);
                var variablePromises = [];
                for (var i = 0; i < variableNames.length; i++) {
                    variablePromises.push(_this.getVariable(variableNames[i]));
                }
                Promise.all(variablePromises).then(function (variables) {
                    _this.variables = {};
                    for (var i = 0; i < variables.length; i++) {
                        _this.variables[variableNames[i]] = variables[i];
                    }
                    resolve(_this.variables);
                });
            });
        });
    };
    CheckpointLoader.prototype.getVariable = function (varName) {
        var _this = this;
        if (!(varName in this.checkpointManifest)) {
            throw new Error('Cannot load non-existant variable ' + varName);
        }
        var variableRequestPromiseMethod = function (resolve, reject) {
            var fname = _this.checkpointManifest[varName].filename;
            wx.request({url: _this.urlPath + fname, dataType: 'arraybuffer', responseType: 'arraybuffer',
             success: function (res) {
                if (res.status === 404) {
                    throw new Error("Not found variable " + varName);
                }
                var values = new Float32Array(res.data);
                var tensor = tfjs_1.Tensor.make(_this.checkpointManifest[varName].shape, { values: values });
                resolve(tensor);
            },
            fail: function (error) {
                throw new Error("Could not fetch variable " + varName + ": " + error);
            }});
        };
        if (this.checkpointManifest == null) {
            return new Promise(function (resolve, reject) {
                _this.loadManifest().then(function () {
                    new Promise(variableRequestPromiseMethod).then(resolve);
                });
            });
        }
        return new Promise(variableRequestPromiseMethod);
    };
    return CheckpointLoader;
}());
exports.CheckpointLoader = CheckpointLoader;
//# sourceMappingURL=checkpoint_loader.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331252, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var mobileNet100Architecture = [
    ['conv2d', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1]
];
var mobileNet75Architecture = [
    ['conv2d', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1]
];
var mobileNet50Architecture = [
    ['conv2d', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 2],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1],
    ['separableConv', 1]
];
var VALID_OUTPUT_STRIDES = [8, 16, 32];
function assertValidOutputStride(outputStride) {
    tf.util.assert(typeof outputStride === 'number', 'outputStride is not a number');
    tf.util.assert(VALID_OUTPUT_STRIDES.indexOf(outputStride) >= 0, "outputStride of " + outputStride + " is invalid. " +
        "It must be either 8, 16, or 32");
}
exports.assertValidOutputStride = assertValidOutputStride;
function assertValidResolution(resolution, outputStride) {
    tf.util.assert(typeof resolution === 'number', 'resolution is not a number');
    tf.util.assert((resolution - 1) % outputStride === 0, "resolution of " + resolution + " is invalid for output stride " +
        (outputStride + "."));
}
exports.assertValidResolution = assertValidResolution;
function assertValidScaleFactor(imageScaleFactor) {
    tf.util.assert(typeof imageScaleFactor === 'number', 'imageScaleFactor is not a number');
    tf.util.assert(imageScaleFactor >= 0.2 && imageScaleFactor <= 1.0, 'imageScaleFactor must be between 0.2 and 1.0');
}
exports.assertValidScaleFactor = assertValidScaleFactor;
exports.mobileNetArchitectures = {
    100: mobileNet100Architecture,
    75: mobileNet75Architecture,
    50: mobileNet50Architecture
};
function toOutputStridedLayers(convolutionDefinition, outputStride) {
    var currentStride = 1;
    var rate = 1;
    return convolutionDefinition.map(function (_a, blockId) {
        var convType = _a[0], stride = _a[1];
        var layerStride, layerRate;
        if (currentStride === outputStride) {
            layerStride = 1;
            layerRate = rate;
            rate *= stride;
        }
        else {
            layerStride = stride;
            layerRate = 1;
            currentStride *= stride;
        }
        return {
            blockId: blockId,
            convType: convType,
            stride: layerStride,
            rate: layerRate,
            outputStride: currentStride
        };
    });
}
var MobileNet = (function () {
    function MobileNet(variables, convolutionDefinitions) {
        this.PREPROCESS_DIVISOR = tf.scalar(255.0 / 2);
        this.ONE = tf.scalar(1);
        this.variables = variables;
        this.convolutionDefinitions = convolutionDefinitions;
    }
    MobileNet.prototype.predict = function (input, outputStride) {
        var _this = this;
        var preprocessedInput = tf.cast(input, 'float32').div(this.PREPROCESS_DIVISOR).sub(this.ONE);
        var layers = toOutputStridedLayers(this.convolutionDefinitions, outputStride);
        return layers.reduce(function (previousLayer, _a) {
            var blockId = _a.blockId, stride = _a.stride, convType = _a.convType, rate = _a.rate;
            if (convType === 'conv2d') {
                return _this.conv(previousLayer, stride, blockId);
            }
            else if (convType === 'separableConv') {
                return _this.separableConv(previousLayer, stride, blockId, rate);
            }
            else {
                throw Error("Unknown conv type of " + convType);
            }
        }, preprocessedInput);
    };
    MobileNet.prototype.convToOutput = function (mobileNetOutput, outputLayerName) {
        return mobileNetOutput.conv2d(this.weights(outputLayerName), 1, 'same')
            .add(this.biases(outputLayerName));
    };
    MobileNet.prototype.conv = function (inputs, stride, blockId) {
        return inputs
            .conv2d(this.weights("Conv2d_" + String(blockId)), stride, 'same')
            .add(this.biases("Conv2d_" + String(blockId)))
            .clipByValue(0, 6);
    };
    MobileNet.prototype.separableConv = function (inputs, stride, blockID, dilations) {
        if (dilations === void 0) { dilations = 1; }
        var dwLayer = "Conv2d_" + String(blockID) + "_depthwise";
        var pwLayer = "Conv2d_" + String(blockID) + "_pointwise";
        var x1 = inputs
            .depthwiseConv2D(this.depthwiseWeights(dwLayer), stride, 'same', 'NHWC', dilations)
            .add(this.biases(dwLayer))
            .clipByValue(0, 6);
        var x2 = x1.conv2d(this.weights(pwLayer), [1, 1], 'same')
            .add(this.biases(pwLayer))
            .clipByValue(0, 6);
        return x2;
    };
    MobileNet.prototype.weights = function (layerName) {
        return this.variables["MobilenetV1/" + layerName + "/weights"];
    };
    MobileNet.prototype.biases = function (layerName) {
        return this.variables["MobilenetV1/" + layerName + "/biases"];
    };
    MobileNet.prototype.depthwiseWeights = function (layerName) {
        return this.variables["MobilenetV1/" + layerName + "/depthwise_weights"];
    };
    MobileNet.prototype.dispose = function () {
        for (var varName in this.variables) {
            this.variables[varName].dispose();
        }
    };
    return MobileNet;
}());
exports.MobileNet = MobileNet;
//# sourceMappingURL=mobilenet.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331253, function(require, module, exports) {
"use strict";
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
var util_1 = require("../util");
var buildPartWithScoreQueue_1 = require("./buildPartWithScoreQueue");
var decodePose_1 = require("./decodePose");
var util_2 = require("./util");
function withinNmsRadiusOfCorrespondingPoint(poses, squaredNmsRadius, _a, keypointId) {
    var x = _a.x, y = _a.y;
    return poses.some(function (_a) {
        var keypoints = _a.keypoints;
        var correspondingKeypoint = keypoints[keypointId].position;
        return util_2.squaredDistance(y, x, correspondingKeypoint.y, correspondingKeypoint.x) <=
            squaredNmsRadius;
    });
}
function getInstanceScore(existingPoses, squaredNmsRadius, instanceKeypoints) {
    var notOverlappedKeypointScores = instanceKeypoints.reduce(function (result, _a, keypointId) {
        var position = _a.position, score = _a.score;
        if (!withinNmsRadiusOfCorrespondingPoint(existingPoses, squaredNmsRadius, position, keypointId)) {
            result += score;
        }
        return result;
    }, 0.0);
    return notOverlappedKeypointScores /= instanceKeypoints.length;
}
var kLocalMaximumRadius = 1;
function decodeMultiplePoses(heatmapScores, offsets, displacementsFwd, displacementsBwd, outputStride, maxPoseDetections, scoreThreshold, nmsRadius) {
    if (scoreThreshold === void 0) { scoreThreshold = 0.5; }
    if (nmsRadius === void 0) { nmsRadius = 20; }
    return __awaiter(this, void 0, void 0, function () {
        var poses, _a, scoresBuffer, offsetsBuffer, displacementsFwdBuffer, displacementsBwdBuffer, queue, squaredNmsRadius, root, rootImageCoords, keypoints, score;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    poses = [];
                    return [4, util_1.toTensorBuffers3D([heatmapScores, offsets, displacementsFwd, displacementsBwd])];
                case 1:
                    _a = _b.sent(), scoresBuffer = _a[0], offsetsBuffer = _a[1], displacementsFwdBuffer = _a[2], displacementsBwdBuffer = _a[3];
                    queue = buildPartWithScoreQueue_1.buildPartWithScoreQueue(scoreThreshold, kLocalMaximumRadius, scoresBuffer);
                    squaredNmsRadius = nmsRadius * nmsRadius;
                    while (poses.length < maxPoseDetections && !queue.empty()) {
                        root = queue.dequeue();
                        rootImageCoords = util_2.getImageCoords(root.part, outputStride, offsetsBuffer);
                        if (withinNmsRadiusOfCorrespondingPoint(poses, squaredNmsRadius, rootImageCoords, root.part.id)) {
                            continue;
                        }
                        keypoints = decodePose_1.decodePose(root, scoresBuffer, offsetsBuffer, outputStride, displacementsFwdBuffer, displacementsBwdBuffer);
                        score = getInstanceScore(poses, squaredNmsRadius, keypoints);
                        poses.push({ keypoints: keypoints, score: score });
                    }
                    return [2, poses];
            }
        });
    });
}
exports.decodeMultiplePoses = decodeMultiplePoses;
//# sourceMappingURL=decodeMultiplePoses.js.map
}, function(modId) { var map = {"../util":1549500331254,"./buildPartWithScoreQueue":1549500331256,"./decodePose":1549500331258,"./util":1549500331259}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331254, function(require, module, exports) {
"use strict";
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
var tf = require("@tensorflow/tfjs-core");
var keypoints_1 = require("./keypoints");
function eitherPointDoesntMeetConfidence(a, b, minConfidence) {
    return (a < minConfidence || b < minConfidence);
}
function getAdjacentKeyPoints(keypoints, minConfidence) {
    return keypoints_1.connectedPartIndices.reduce(function (result, _a) {
        var leftJoint = _a[0], rightJoint = _a[1];
        if (eitherPointDoesntMeetConfidence(keypoints[leftJoint].score, keypoints[rightJoint].score, minConfidence)) {
            return result;
        }
        result.push([keypoints[leftJoint], keypoints[rightJoint]]);
        return result;
    }, []);
}
exports.getAdjacentKeyPoints = getAdjacentKeyPoints;
var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
function getBoundingBox(keypoints) {
    return keypoints.reduce(function (_a, _b) {
        var maxX = _a.maxX, maxY = _a.maxY, minX = _a.minX, minY = _a.minY;
        var _c = _b.position, x = _c.x, y = _c.y;
        return {
            maxX: Math.max(maxX, x),
            maxY: Math.max(maxY, y),
            minX: Math.min(minX, x),
            minY: Math.min(minY, y)
        };
    }, {
        maxX: NEGATIVE_INFINITY,
        maxY: NEGATIVE_INFINITY,
        minX: POSITIVE_INFINITY,
        minY: POSITIVE_INFINITY
    });
}
exports.getBoundingBox = getBoundingBox;
function getBoundingBoxPoints(keypoints) {
    var _a = getBoundingBox(keypoints), minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
    return [
        { x: minX, y: minY }, { x: maxX, y: minY }, { x: maxX, y: maxY },
        { x: minX, y: maxY }
    ];
}
exports.getBoundingBoxPoints = getBoundingBoxPoints;
function toTensorBuffer(tensor, type) {
    if (type === void 0) { type = 'float32'; }
    return __awaiter(this, void 0, void 0, function () {
        var tensorData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, tensor.data()];
                case 1:
                    tensorData = _a.sent();
                    return [2, new tf.TensorBuffer(tensor.shape, type, tensorData)];
            }
        });
    });
}
exports.toTensorBuffer = toTensorBuffer;
function toTensorBuffers3D(tensors) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, Promise.all(tensors.map(function (tensor) { return toTensorBuffer(tensor, 'float32'); }))];
        });
    });
}
exports.toTensorBuffers3D = toTensorBuffers3D;
function scalePose(pose, scaleX, scaleY) {
    return {
        score: pose.score,
        keypoints: pose.keypoints.map(function (_a) {
            var score = _a.score, part = _a.part, position = _a.position;
            return ({
                score: score,
                part: part,
                position: { x: position.x * scaleX, y: position.y * scaleY }
            });
        })
    };
}
exports.scalePose = scalePose;
function scalePoses(poses, scaleY, scaleX) {
    if (scaleX === 1 && scaleY === 1) {
        return poses;
    }
    return poses.map(function (pose) { return scalePose(pose, scaleX, scaleY); });
}
exports.scalePoses = scalePoses;
function getValidResolution(imageScaleFactor, inputDimension, outputStride) {
    var evenResolution = inputDimension * imageScaleFactor - 1;
    return evenResolution - (evenResolution % outputStride) + 1;
}
exports.getValidResolution = getValidResolution;
//# sourceMappingURL=util.js.map
}, function(modId) { var map = {"./keypoints":1549500331255}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331255, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partNames = [
    'nose', 'leftEye', 'rightEye', 'leftEar', 'rightEar', 'leftShoulder',
    'rightShoulder', 'leftElbow', 'rightElbow', 'leftWrist', 'rightWrist',
    'leftHip', 'rightHip', 'leftKnee', 'rightKnee', 'leftAnkle', 'rightAnkle'
];
exports.NUM_KEYPOINTS = exports.partNames.length;
exports.partIds = exports.partNames.reduce(function (result, jointName, i) {
    result[jointName] = i;
    return result;
}, {});
var connectedPartNames = [
    ['leftHip', 'leftShoulder'], ['leftElbow', 'leftShoulder'],
    ['leftElbow', 'leftWrist'], ['leftHip', 'leftKnee'],
    ['leftKnee', 'leftAnkle'], ['rightHip', 'rightShoulder'],
    ['rightElbow', 'rightShoulder'], ['rightElbow', 'rightWrist'],
    ['rightHip', 'rightKnee'], ['rightKnee', 'rightAnkle'],
    ['leftShoulder', 'rightShoulder'], ['leftHip', 'rightHip']
];
exports.poseChain = [
    ['nose', 'leftEye'], ['leftEye', 'leftEar'], ['nose', 'rightEye'],
    ['rightEye', 'rightEar'], ['nose', 'leftShoulder'],
    ['leftShoulder', 'leftElbow'], ['leftElbow', 'leftWrist'],
    ['leftShoulder', 'leftHip'], ['leftHip', 'leftKnee'],
    ['leftKnee', 'leftAnkle'], ['nose', 'rightShoulder'],
    ['rightShoulder', 'rightElbow'], ['rightElbow', 'rightWrist'],
    ['rightShoulder', 'rightHip'], ['rightHip', 'rightKnee'],
    ['rightKnee', 'rightAnkle']
];
exports.connectedPartIndices = connectedPartNames.map(function (_a) {
    var jointNameA = _a[0], jointNameB = _a[1];
    return ([exports.partIds[jointNameA], exports.partIds[jointNameB]]);
});
//# sourceMappingURL=keypoints.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331256, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxHeap_1 = require("./maxHeap");
function scoreIsMaximumInLocalWindow(keypointId, score, heatmapY, heatmapX, localMaximumRadius, scores) {
    var _a = scores.shape, height = _a[0], width = _a[1];
    var localMaximum = true;
    var yStart = Math.max(heatmapY - localMaximumRadius, 0);
    var yEnd = Math.min(heatmapY + localMaximumRadius + 1, height);
    for (var yCurrent = yStart; yCurrent < yEnd; ++yCurrent) {
        var xStart = Math.max(heatmapX - localMaximumRadius, 0);
        var xEnd = Math.min(heatmapX + localMaximumRadius + 1, width);
        for (var xCurrent = xStart; xCurrent < xEnd; ++xCurrent) {
            if (scores.get(yCurrent, xCurrent, keypointId) > score) {
                localMaximum = false;
                break;
            }
        }
        if (!localMaximum) {
            break;
        }
    }
    return localMaximum;
}
function buildPartWithScoreQueue(scoreThreshold, localMaximumRadius, scores) {
    var _a = scores.shape, height = _a[0], width = _a[1], numKeypoints = _a[2];
    var queue = new maxHeap_1.MaxHeap(height * width * numKeypoints, function (_a) {
        var score = _a.score;
        return score;
    });
    for (var heatmapY = 0; heatmapY < height; ++heatmapY) {
        for (var heatmapX = 0; heatmapX < width; ++heatmapX) {
            for (var keypointId = 0; keypointId < numKeypoints; ++keypointId) {
                var score = scores.get(heatmapY, heatmapX, keypointId);
                if (score < scoreThreshold) {
                    continue;
                }
                if (scoreIsMaximumInLocalWindow(keypointId, score, heatmapY, heatmapX, localMaximumRadius, scores)) {
                    queue.enqueue({ score: score, part: { heatmapY: heatmapY, heatmapX: heatmapX, id: keypointId } });
                }
            }
        }
    }
    return queue;
}
exports.buildPartWithScoreQueue = buildPartWithScoreQueue;
//# sourceMappingURL=buildPartWithScoreQueue.js.map
}, function(modId) { var map = {"./maxHeap":1549500331257}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331257, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function half(k) {
    return Math.floor(k / 2);
}
var MaxHeap = (function () {
    function MaxHeap(maxSize, getElementValue) {
        this.priorityQueue = new Array(maxSize);
        this.numberOfElements = -1;
        this.getElementValue = getElementValue;
    }
    MaxHeap.prototype.enqueue = function (x) {
        this.priorityQueue[++this.numberOfElements] = x;
        this.swim(this.numberOfElements);
    };
    MaxHeap.prototype.dequeue = function () {
        var max = this.priorityQueue[0];
        this.exchange(0, this.numberOfElements--);
        this.sink(0);
        this.priorityQueue[this.numberOfElements + 1] = null;
        return max;
    };
    MaxHeap.prototype.empty = function () {
        return this.numberOfElements === -1;
    };
    MaxHeap.prototype.size = function () {
        return this.numberOfElements + 1;
    };
    MaxHeap.prototype.all = function () {
        return this.priorityQueue.slice(0, this.numberOfElements + 1);
    };
    MaxHeap.prototype.max = function () {
        return this.priorityQueue[0];
    };
    MaxHeap.prototype.swim = function (k) {
        while (k > 0 && this.less(half(k), k)) {
            this.exchange(k, half(k));
            k = half(k);
        }
    };
    MaxHeap.prototype.sink = function (k) {
        while (2 * k <= this.numberOfElements) {
            var j = 2 * k;
            if (j < this.numberOfElements && this.less(j, j + 1)) {
                j++;
            }
            if (!this.less(k, j)) {
                break;
            }
            this.exchange(k, j);
            k = j;
        }
    };
    MaxHeap.prototype.getValueAt = function (i) {
        return this.getElementValue(this.priorityQueue[i]);
    };
    MaxHeap.prototype.less = function (i, j) {
        return this.getValueAt(i) < this.getValueAt(j);
    };
    MaxHeap.prototype.exchange = function (i, j) {
        var t = this.priorityQueue[i];
        this.priorityQueue[i] = this.priorityQueue[j];
        this.priorityQueue[j] = t;
    };
    return MaxHeap;
}());
exports.MaxHeap = MaxHeap;
//# sourceMappingURL=maxHeap.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331258, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keypoints_1 = require("../keypoints");
var util_1 = require("./util");
var util_2 = require("./util");
var parentChildrenTuples = keypoints_1.poseChain.map(function (_a) {
    var parentJoinName = _a[0], childJoinName = _a[1];
    return ([keypoints_1.partIds[parentJoinName], keypoints_1.partIds[childJoinName]]);
});
var parentToChildEdges = parentChildrenTuples.map(function (_a) {
    var childJointId = _a[1];
    return childJointId;
});
var childToParentEdges = parentChildrenTuples.map(function (_a) {
    var parentJointId = _a[0];
    return parentJointId;
});
function getDisplacement(edgeId, point, displacements) {
    var numEdges = displacements.shape[2] / 2;
    return {
        y: displacements.get(point.y, point.x, edgeId),
        x: displacements.get(point.y, point.x, numEdges + edgeId)
    };
}
function getStridedIndexNearPoint(point, outputStride, height, width) {
    return {
        y: util_1.clamp(Math.round(point.y / outputStride), 0, height - 1),
        x: util_1.clamp(Math.round(point.x / outputStride), 0, width - 1)
    };
}
function traverseToTargetKeypoint(edgeId, sourceKeypoint, targetKeypointId, scoresBuffer, offsets, outputStride, displacements) {
    var _a = scoresBuffer.shape, height = _a[0], width = _a[1];
    var sourceKeypointIndices = getStridedIndexNearPoint(sourceKeypoint.position, outputStride, height, width);
    var displacement = getDisplacement(edgeId, sourceKeypointIndices, displacements);
    var displacedPoint = util_2.addVectors(sourceKeypoint.position, displacement);
    var displacedPointIndices = getStridedIndexNearPoint(displacedPoint, outputStride, height, width);
    var offsetPoint = util_1.getOffsetPoint(displacedPointIndices.y, displacedPointIndices.x, targetKeypointId, offsets);
    var score = scoresBuffer.get(displacedPointIndices.y, displacedPointIndices.x, targetKeypointId);
    var targetKeypoint = util_2.addVectors({
        x: displacedPointIndices.x * outputStride,
        y: displacedPointIndices.y * outputStride
    }, { x: offsetPoint.x, y: offsetPoint.y });
    return { position: targetKeypoint, part: keypoints_1.partNames[targetKeypointId], score: score };
}
function decodePose(root, scores, offsets, outputStride, displacementsFwd, displacementsBwd) {
    var numParts = scores.shape[2];
    var numEdges = parentToChildEdges.length;
    var instanceKeypoints = new Array(numParts);
    var rootPart = root.part, rootScore = root.score;
    var rootPoint = util_2.getImageCoords(rootPart, outputStride, offsets);
    instanceKeypoints[rootPart.id] = {
        score: rootScore,
        part: keypoints_1.partNames[rootPart.id],
        position: rootPoint
    };
    for (var edge = numEdges - 1; edge >= 0; --edge) {
        var sourceKeypointId = parentToChildEdges[edge];
        var targetKeypointId = childToParentEdges[edge];
        if (instanceKeypoints[sourceKeypointId] &&
            !instanceKeypoints[targetKeypointId]) {
            instanceKeypoints[targetKeypointId] = traverseToTargetKeypoint(edge, instanceKeypoints[sourceKeypointId], targetKeypointId, scores, offsets, outputStride, displacementsBwd);
        }
    }
    for (var edge = 0; edge < numEdges; ++edge) {
        var sourceKeypointId = childToParentEdges[edge];
        var targetKeypointId = parentToChildEdges[edge];
        if (instanceKeypoints[sourceKeypointId] &&
            !instanceKeypoints[targetKeypointId]) {
            instanceKeypoints[targetKeypointId] = traverseToTargetKeypoint(edge, instanceKeypoints[sourceKeypointId], targetKeypointId, scores, offsets, outputStride, displacementsFwd);
        }
    }
    return instanceKeypoints;
}
exports.decodePose = decodePose;
//# sourceMappingURL=decodePose.js.map
}, function(modId) { var map = {"../keypoints":1549500331255,"./util":1549500331259}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331259, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keypoints_1 = require("../keypoints");
function getOffsetPoint(y, x, keypoint, offsets) {
    return {
        y: offsets.get(y, x, keypoint),
        x: offsets.get(y, x, keypoint + keypoints_1.NUM_KEYPOINTS)
    };
}
exports.getOffsetPoint = getOffsetPoint;
function getImageCoords(part, outputStride, offsets) {
    var heatmapY = part.heatmapY, heatmapX = part.heatmapX, keypoint = part.id;
    var _a = getOffsetPoint(heatmapY, heatmapX, keypoint, offsets), y = _a.y, x = _a.x;
    return {
        x: part.heatmapX * outputStride + x,
        y: part.heatmapY * outputStride + y
    };
}
exports.getImageCoords = getImageCoords;
function fillArray(element, size) {
    var result = new Array(size);
    for (var i = 0; i < size; i++) {
        result[i] = element;
    }
    return result;
}
exports.fillArray = fillArray;
function clamp(a, min, max) {
    if (a < min) {
        return min;
    }
    if (a > max) {
        return max;
    }
    return a;
}
exports.clamp = clamp;
function squaredDistance(y1, x1, y2, x2) {
    var dy = y2 - y1;
    var dx = x2 - x1;
    return dy * dy + dx * dx;
}
exports.squaredDistance = squaredDistance;
function addVectors(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
}
exports.addVectors = addVectors;
function clampVector(a, min, max) {
    return { y: clamp(a.y, min, max), x: clamp(a.x, min, max) };
}
exports.clampVector = clampVector;
//# sourceMappingURL=util.js.map
}, function(modId) { var map = {"../keypoints":1549500331255}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331260, function(require, module, exports) {
"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var checkpoint_loader_1 = require("./checkpoint_loader");
var checkpoints_1 = require("./checkpoints");
var mobilenet_1 = require("./mobilenet");
var decodeMultiplePoses_1 = require("./multiPose/decodeMultiplePoses");
var decodeSinglePose_1 = require("./singlePose/decodeSinglePose");
var util_1 = require("./util");
function toInputTensor(input, resizeHeight, resizeWidth, flipHorizontal) {
    var imageTensor = input instanceof tf.Tensor ? input : tf.fromPixels(input);
    if (flipHorizontal) {
        return imageTensor.reverse(1).resizeBilinear([resizeHeight, resizeWidth]);
    }
    else {
        return imageTensor.resizeBilinear([resizeHeight, resizeWidth]);
    }
}
var PoseNet = (function () {
    function PoseNet(mobileNet) {
        this.mobileNet = mobileNet;
    }
    PoseNet.prototype.predictForSinglePose = function (input, outputStride) {
        var _this = this;
        if (outputStride === void 0) { outputStride = 16; }
        mobilenet_1.assertValidOutputStride(outputStride);
        return tf.tidy(function () {
            var mobileNetOutput = _this.mobileNet.predict(input, outputStride);
            var heatmaps = _this.mobileNet.convToOutput(mobileNetOutput, 'heatmap_2');
            var offsets = _this.mobileNet.convToOutput(mobileNetOutput, 'offset_2');
            return { heatmapScores: heatmaps.sigmoid(), offsets: offsets };
        });
    };
    PoseNet.prototype.predictForMultiPose = function (input, outputStride) {
        var _this = this;
        if (outputStride === void 0) { outputStride = 16; }
        return tf.tidy(function () {
            var mobileNetOutput = _this.mobileNet.predict(input, outputStride);
            var heatmaps = _this.mobileNet.convToOutput(mobileNetOutput, 'heatmap_2');
            var offsets = _this.mobileNet.convToOutput(mobileNetOutput, 'offset_2');
            var displacementFwd = _this.mobileNet.convToOutput(mobileNetOutput, 'displacement_fwd_2');
            var displacementBwd = _this.mobileNet.convToOutput(mobileNetOutput, 'displacement_bwd_2');
            return {
                heatmapScores: heatmaps.sigmoid(),
                offsets: offsets,
                displacementFwd: displacementFwd,
                displacementBwd: displacementBwd
            };
        });
    };
    PoseNet.prototype.estimateSinglePose = function (input, imageScaleFactor, flipHorizontal, outputStride) {
        if (imageScaleFactor === void 0) { imageScaleFactor = 0.5; }
        if (flipHorizontal === void 0) { flipHorizontal = false; }
        if (outputStride === void 0) { outputStride = 16; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, height, width, resizedHeight, resizedWidth, _b, heatmapScores, offsets, pose, scaleY, scaleX;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        mobilenet_1.assertValidOutputStride(outputStride);
                        mobilenet_1.assertValidScaleFactor(imageScaleFactor);
                        _a = input instanceof tf.Tensor ?
                            [input.shape[0], input.shape[1]] :
                            [input.height, input.width], height = _a[0], width = _a[1];
                        resizedHeight = util_1.getValidResolution(imageScaleFactor, height, outputStride);
                        resizedWidth = util_1.getValidResolution(imageScaleFactor, width, outputStride);
                        _b = tf.tidy(function () {
                            var inputTensor = toInputTensor(input, resizedHeight, resizedWidth, flipHorizontal);
                            return _this.predictForSinglePose(inputTensor, outputStride);
                        }), heatmapScores = _b.heatmapScores, offsets = _b.offsets;
                        return [4, decodeSinglePose_1.decodeSinglePose(heatmapScores, offsets, outputStride)];
                    case 1:
                        pose = _c.sent();
                        heatmapScores.dispose();
                        offsets.dispose();
                        scaleY = height / resizedHeight;
                        scaleX = width / resizedWidth;
                        return [2, util_1.scalePose(pose, scaleY, scaleX)];
                }
            });
        });
    };
    PoseNet.prototype.estimateMultiplePoses = function (input, imageScaleFactor, flipHorizontal, outputStride, maxDetections, scoreThreshold, nmsRadius) {
        if (imageScaleFactor === void 0) { imageScaleFactor = 0.5; }
        if (flipHorizontal === void 0) { flipHorizontal = false; }
        if (outputStride === void 0) { outputStride = 16; }
        if (maxDetections === void 0) { maxDetections = 5; }
        if (scoreThreshold === void 0) { scoreThreshold = .5; }
        if (nmsRadius === void 0) { nmsRadius = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, height, width, resizedHeight, resizedWidth, _b, heatmapScores, offsets, displacementFwd, displacementBwd, poses, scaleY, scaleX;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        mobilenet_1.assertValidOutputStride(outputStride);
                        mobilenet_1.assertValidScaleFactor(imageScaleFactor);
                        _a = input instanceof tf.Tensor ?
                            [input.shape[0], input.shape[1]] :
                            [input.height, input.width], height = _a[0], width = _a[1];
                        resizedHeight = util_1.getValidResolution(imageScaleFactor, height, outputStride);
                        resizedWidth = util_1.getValidResolution(imageScaleFactor, width, outputStride);
                        _b = tf.tidy(function () {
                            var inputTensor = toInputTensor(input, resizedHeight, resizedWidth, flipHorizontal);
                            return _this.predictForMultiPose(inputTensor, outputStride);
                        }), heatmapScores = _b.heatmapScores, offsets = _b.offsets, displacementFwd = _b.displacementFwd, displacementBwd = _b.displacementBwd;
                        return [4, decodeMultiplePoses_1.decodeMultiplePoses(heatmapScores, offsets, displacementFwd, displacementBwd, outputStride, maxDetections, scoreThreshold, nmsRadius)];
                    case 1:
                        poses = _c.sent();
                        heatmapScores.dispose();
                        offsets.dispose();
                        displacementFwd.dispose();
                        displacementBwd.dispose();
                        scaleY = height / resizedHeight;
                        scaleX = width / resizedWidth;
                        return [2, util_1.scalePoses(poses, scaleY, scaleX)];
                }
            });
        });
    };
    PoseNet.prototype.dispose = function () {
        this.mobileNet.dispose();
    };
    return PoseNet;
}());
exports.PoseNet = PoseNet;
function load(multiplier) {
    if (multiplier === void 0) { multiplier = 1.01; }
    return __awaiter(this, void 0, void 0, function () {
        var possibleMultipliers, mobileNet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (tf == null) {
                        throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please " +
                            "also include @tensorflow/tfjs on the page before using this model.");
                    }
                    possibleMultipliers = Object.keys(checkpoints_1.checkpoints);
                    tf.util.assert(typeof multiplier === 'number', "got multiplier type of " + typeof multiplier + " when it should be a " +
                        "number.");
                    tf.util.assert(possibleMultipliers.indexOf(multiplier.toString()) >= 0, "invalid multiplier value of " + multiplier + ".  No checkpoint exists for that " +
                        ("multiplier. Must be one of " + possibleMultipliers.join(',') + "."));
                    return [4, exports.mobilenetLoader.load(multiplier)];
                case 1:
                    mobileNet = _a.sent();
                    return [2, new PoseNet(mobileNet)];
            }
        });
    });
}
exports.load = load;
exports.mobilenetLoader = {
    load: function (multiplier) { return __awaiter(_this, void 0, void 0, function () {
        var checkpoint, checkpointLoader, variables;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkpoint = checkpoints_1.checkpoints[multiplier];
                    checkpointLoader = new checkpoint_loader_1.CheckpointLoader(checkpoint.url);
                    return [4, checkpointLoader.getAllVariables()];
                case 1:
                    variables = _a.sent();
                    return [2, new mobilenet_1.MobileNet(variables, checkpoint.architecture)];
            }
        });
    }); }
};
//# sourceMappingURL=posenet_model.js.map
}, function(modId) { var map = {"./checkpoint_loader":1549500331251,"./checkpoints":1549500331261,"./mobilenet":1549500331252,"./multiPose/decodeMultiplePoses":1549500331253,"./singlePose/decodeSinglePose":1549500331262,"./util":1549500331254}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331261, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobilenet_1 = require("./mobilenet");
var GOOGLE_CLOUD_STORAGE_DIR = 'https://storage.googleapis.com/tfjs-models/weights/posenet/';
exports.checkpoints = {
    1.01: {
        url: GOOGLE_CLOUD_STORAGE_DIR + 'mobilenet_v1_101/',
        architecture: mobilenet_1.mobileNetArchitectures[100]
    },
    1.0: {
        url: GOOGLE_CLOUD_STORAGE_DIR + 'mobilenet_v1_100/',
        architecture: mobilenet_1.mobileNetArchitectures[100]
    },
    0.75: {
        url: GOOGLE_CLOUD_STORAGE_DIR + 'mobilenet_v1_075/',
        architecture: mobilenet_1.mobileNetArchitectures[75]
    },
    0.5: {
        url: GOOGLE_CLOUD_STORAGE_DIR + 'mobilenet_v1_050/',
        architecture: mobilenet_1.mobileNetArchitectures[50]
    }
};
//# sourceMappingURL=checkpoints.js.map
}, function(modId) { var map = {"./mobilenet":1549500331252}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331262, function(require, module, exports) {
"use strict";
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
var keypoints_1 = require("../keypoints");
var util_1 = require("../util");
var argmax2d_1 = require("./argmax2d");
var util_2 = require("./util");
function decodeSinglePose(heatmapScores, offsets, outputStride) {
    return __awaiter(this, void 0, void 0, function () {
        var totalScore, heatmapValues, _a, scoresBuffer, offsetsBuffer, heatmapValuesBuffer, offsetPoints, offsetPointsBuffer, keypointConfidence, keypoints;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    totalScore = 0.0;
                    heatmapValues = argmax2d_1.argmax2d(heatmapScores);
                    heatmapValues.dataSync();
                    return [4, Promise.all([
                            util_1.toTensorBuffer(heatmapScores), util_1.toTensorBuffer(offsets),
                            util_1.toTensorBuffer(heatmapValues, 'int32')
                        ])];
                case 1:
                    _a = _b.sent(), scoresBuffer = _a[0], offsetsBuffer = _a[1], heatmapValuesBuffer = _a[2];
                    offsetPoints = util_2.getOffsetPoints(heatmapValuesBuffer, outputStride, offsetsBuffer);
                    return [4, util_1.toTensorBuffer(offsetPoints)];
                case 2:
                    offsetPointsBuffer = _b.sent();                    
                    keypointConfidence = Array.from(util_2.getPointsConfidence(scoresBuffer, heatmapValuesBuffer));
                    keypoints = keypointConfidence.map(function (score, keypointId) {
                        totalScore += score;
                        return {
                            position: {
                                y: offsetPointsBuffer.get(keypointId, 0),
                                x: offsetPointsBuffer.get(keypointId, 1)
                            },
                            part: keypoints_1.partNames[keypointId],
                            score: score
                        };
                    });
                    heatmapValues.dispose();
                    offsetPoints.dispose();
                    return [2, { keypoints: keypoints, score: totalScore / keypoints.length }];
            }
        });
    });
}
exports.decodeSinglePose = decodeSinglePose;
//# sourceMappingURL=decodeSinglePose.js.map
}, function(modId) { var map = {"../keypoints":1549500331255,"../util":1549500331254,"./argmax2d":1549500331263,"./util":1549500331264}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331263, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function mod(a, b) {
    return tf.tidy(function () {
        var floored = a.div(tf.scalar(b, 'int32'));
        return a.sub(floored.mul(tf.scalar(b, 'int32')));
    });
}
function argmax2d(inputs) {
    var _a = inputs.shape, height = _a[0], width = _a[1], depth = _a[2];
    return tf.tidy(function () {
        var reshaped = inputs.reshape([height * width, depth]);
        var coords = reshaped.argMax(0);
        var yCoords = coords.div(tf.scalar(width, 'int32')).expandDims(1);
        var xCoords = mod(coords, width).expandDims(1);
        return tf.concat([yCoords, xCoords], 1);
    });
}
exports.argmax2d = argmax2d;
//# sourceMappingURL=argmax2d.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1549500331264, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var keypoints_1 = require("../keypoints");
function getPointsConfidence(heatmapScores, heatMapCoords) {
    var numKeypoints = heatMapCoords.shape[0];
    var result = new Float32Array(numKeypoints);
    for (var keypoint = 0; keypoint < numKeypoints; keypoint++) {
        var y = heatMapCoords.get(keypoint, 0);
        var x = heatMapCoords.get(keypoint, 1);
        result[keypoint] = heatmapScores.get(y, x, keypoint);
    }
    return result;
}
exports.getPointsConfidence = getPointsConfidence;
function getOffsetPoint(y, x, keypoint, offsetsBuffer) {
    return {
        y: offsetsBuffer.get(y, x, keypoint),
        x: offsetsBuffer.get(y, x, keypoint + keypoints_1.NUM_KEYPOINTS)
    };
}
function getOffsetVectors(heatMapCoordsBuffer, offsetsBuffer) {
    var result = [];
    for (var keypoint = 0; keypoint < keypoints_1.NUM_KEYPOINTS; keypoint++) {
        var heatmapY = heatMapCoordsBuffer.get(keypoint, 0).valueOf();
        var heatmapX = heatMapCoordsBuffer.get(keypoint, 1).valueOf();
        var _a = getOffsetPoint(heatmapY, heatmapX, keypoint, offsetsBuffer), x = _a.x, y = _a.y;
        result.push(y);
        result.push(x);
    }
    return tf.tensor2d(result, [keypoints_1.NUM_KEYPOINTS, 2]);
}
exports.getOffsetVectors = getOffsetVectors;
function getOffsetPoints(heatMapCoordsBuffer, outputStride, offsetsBuffer) {
    return tf.tidy(function () {
        var offsetVectors = getOffsetVectors(heatMapCoordsBuffer, offsetsBuffer);
        return heatMapCoordsBuffer.toTensor()
            .mul(tf.scalar(outputStride, 'int32'))
            .toFloat()
            .add(offsetVectors);
    });
}
exports.getOffsetPoints = getOffsetPoints;
//# sourceMappingURL=util.js.map
}, function(modId) { var map = {"../keypoints":1549500331255}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1549500331250);
})()
//# sourceMappingURL=index.js.map