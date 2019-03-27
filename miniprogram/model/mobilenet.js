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
var fetch_wechat_1 = require("fetch-wechat");
var tf = requirePlugin('myPlugin');
var imagenet_classes_1 = require("./imagenet_classes");
var GOOGLE_CLOUD_STORAGE_DIR = 'https://storage.googleapis.com/tfjs-models/savedmodel/';
var MODEL_FILE_URL = 'mobilenet_v2_1.0_224/model.json';
var PREPROCESS_DIVISOR = tf.scalar(255 / 2);
var MobileNet = /** @class */ (function () {
    function MobileNet() {
    }
    MobileNet.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, tf.loadGraphModel(GOOGLE_CLOUD_STORAGE_DIR + MODEL_FILE_URL, { fetchFunc: fetch_wechat_1.fetchFunc() })];
                    case 1:
                        _a.model = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MobileNet.prototype.dispose = function () {
        if (this.model) {
            this.model.dispose();
        }
    };
    /**
     * Infer through MobileNet. This does standard ImageNet pre-processing before
     * inferring through the model. This method returns named activations as well
     * as softmax logits.
     *
     * @param input un-preprocessed input Array.
     * @return The softmax logits.
     */
    MobileNet.prototype.predict = function (input) {
        var preprocessedInput = tf.div(tf.sub(input.asType('float32'), PREPROCESS_DIVISOR), PREPROCESS_DIVISOR);
        var reshapedInput = preprocessedInput.reshape([1].concat(preprocessedInput.shape));
        return this.model.predict(reshapedInput);
    };
    MobileNet.prototype.getTopKClasses = function (logits, topK) {
        return tf.tidy(function () {
            var predictions = tf.softmax(logits);
            var values = predictions.dataSync();
            var predictionList = [];
            for (var i = 0; i < values.length; i++) {
                predictionList.push({ value: values[i], index: i });
            }
            predictionList = predictionList
                .sort(function (a, b) {
                return b.value - a.value;
            })
                .slice(0, topK);
            return predictionList.map(function (x) {
                return { label: imagenet_classes_1.IMAGENET_CLASSES[x.index], value: x.value };
            });
        });
    };
    return MobileNet;
}());
exports.MobileNet = MobileNet;
//# sourceMappingURL=mobilenet.js.map