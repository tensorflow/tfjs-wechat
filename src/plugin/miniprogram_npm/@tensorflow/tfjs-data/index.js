module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1553811080208, function(require, module, exports) {
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
Object.defineProperty(exports, "__esModule", { value: true });
var dataset_1 = require("./dataset");
exports.array = dataset_1.array;
exports.Dataset = dataset_1.Dataset;
exports.zip = dataset_1.zip;
var csv_dataset_1 = require("./datasets/csv_dataset");
exports.CSVDataset = csv_dataset_1.CSVDataset;
var text_line_dataset_1 = require("./datasets/text_line_dataset");
exports.TextLineDataset = text_line_dataset_1.TextLineDataset;
var readers_1 = require("./readers");
exports.csv = readers_1.csv;
exports.func = readers_1.func;
exports.generator = readers_1.generator;
var file_data_source_1 = require("./sources/file_data_source");
exports.FileDataSource = file_data_source_1.FileDataSource;
var url_data_source_1 = require("./sources/url_data_source");
exports.URLDataSource = url_data_source_1.URLDataSource;
var version_1 = require("./version");
exports.version_data = version_1.version;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./dataset":1553811080209,"./datasets/csv_dataset":1553811080214,"./datasets/text_line_dataset":1553811080215,"./readers":1553811080216,"./sources/file_data_source":1553811080224,"./sources/url_data_source":1553811080217,"./version":1553811080225}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080209, function(require, module, exports) {
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
 *
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
var tf = require("@tensorflow/tfjs-core");
var seedrandom = require("seedrandom");
var lazy_iterator_1 = require("./iterators/lazy_iterator");
var deep_map_1 = require("./util/deep_map");
// TODO(soergel): consider vectorized operations within the pipeline.
/**
 * Represents a potentially large list of independent data elements (typically
 * 'samples' or 'examples').
 *
 * A 'data example' may be a primitive, an array, a map from string keys to
 * values, or any nested structure of these.
 *
 * A `Dataset` represents an ordered collection of elements, together with a
 * chain of transformations to be performed on those elements. Each
 * transformation is a method of `Dataset` that returns another `Dataset`, so
 * these may be chained, e.g.
 * `const processedDataset = rawDataset.filter(...).map(...).batch(...)`.
 *
 * Data loading and transformation is done in a lazy, streaming fashion.  The
 * dataset may be iterated over multiple times; each iteration starts the data
 * loading anew and recapitulates the transformations.
 *
 * A `Dataset` is typically processed as a stream of unbatched examples --i.e.,
 * its transformations are applied one example at a time. Batching produces a
 * new `Dataset` where each element is a batch. Batching should usually come
 * last in a pipeline, because data transformations are easier to express on a
 * per-example basis than on a per-batch basis.
 *
 * The following code examples are calling `await dataset.forEachAsync(...)` to
 * iterate once over the entire dataset in order to print out the data.
 */
/** @doc {heading: 'Data', subheading: 'Classes', namespace: 'data'} */
var Dataset = /** @class */ (function () {
    function Dataset() {
        this.size = null;
    }
    // TODO(soergel): Make Datasets report whether repeated iterator() calls
    // produce the same result (e.g., reading from a file) or different results
    // (e.g., from the webcam).  Currently we don't make this distinction but it
    // could be important for the user to know.
    // abstract isDeterministic(): boolean;
    /**
     * Groups elements into batches.
     *
     * It is assumed that each of the incoming dataset elements has the same
     * structure-- i.e. the same set of keys at each location in an object
     * hierarchy.  For each key, the resulting `Dataset` provides a batched
     * element collecting all of the incoming values for that key.
     *
     *  * Incoming primitives are grouped into a 1-D Tensor.
     *  * Incoming Tensors are grouped into a new Tensor where the 0'th axis is
     *    the batch dimension.
     *  * Incoming arrays are converted to Tensor and then batched.
     *  * A nested array is interpreted as an n-D Tensor, so the batched result
     *    has n+1 dimensions.
     *  * An array that cannot be converted to Tensor produces an error.
     *
     * If an array should not be batched as a unit, it should first be converted
     * to an object with integer keys.
     *
     * Here are a few examples:
     *
     * Batch a dataset of numbers:
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8]).batch(4);
     * await a.forEachAsync(e => e.print());
     * ```
     *
     * Batch a dataset of arrays:
     * ```js
     * const b = tf.data.array([[1], [2], [3], [4], [5], [6], [7], [8]]).batch(4);
     * await b.forEachAsync(e => e.print());
     * ```
     *
     * Batch a dataset of objects:
     * ```js
     * const c = tf.data.array([{a: 1, b: 11}, {a: 2, b: 12}, {a: 3, b: 13},
     *   {a: 4, b: 14}, {a: 5, b: 15}, {a: 6, b: 16}, {a: 7, b: 17},
     *   {a: 8, b: 18}]).batch(4);
     * await c.forEachAsync(e => {
     *   console.log('{');
     *   for(var key in e) {
     *     console.log(key+':');
     *     e[key].print();
     *   }
     *   console.log('}');
     * })
     * ```
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @returns A `Dataset`, from which a stream of batches can be obtained.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.batch = function (batchSize, smallLastBatch) {
        var _this = this;
        if (smallLastBatch === void 0) { smallLastBatch = true; }
        var base = this;
        tf.util.assert(batchSize > 0, function () { return "batchSize needs to be positive, but it is\n      " + batchSize; });
        var size;
        if (this.size === Infinity || this.size == null) {
            // If the size of this dataset is infinity or null, the new size keeps the
            // same.
            size = this.size;
        }
        else if (smallLastBatch) {
            // If the size of this dataset is known and include small last batch, the
            // new size is full batch count plus last batch.
            size = Math.ceil(this.size / batchSize);
        }
        else {
            // If the size of this dataset is known and not include small last batch,
            // the new size is full batch count.
            size = Math.floor(this.size / batchSize);
        }
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base.iterator()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .columnMajorBatch(batchSize, smallLastBatch, deepBatchConcat)];
                }
            });
        }); }, size);
    };
    /**
     * Concatenates this `Dataset` with another.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]);
     * const b = tf.data.array([4, 5, 6]);
     * const c = a.concatenate(b);
     * await c.forEachAsync(e => console.log(e));
     * ```
     *
     * @param dataset A `Dataset` to be concatenated onto this one.
     * @returns A `Dataset`.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.concatenate = function (dataset) {
        var _this = this;
        var base = this;
        var size;
        if (this.size === Infinity || dataset.size === Infinity) {
            // If the size of any of these two dataset is infinity, new size is
            // infinity.
            size = Infinity;
        }
        else if (this.size != null && dataset.size != null) {
            // If the size of both datasets are known and not infinity, new size is
            // sum the size of these two datasets.
            size = this.size + dataset.size;
        }
        else {
            // If neither of these two datasets has infinite size and any of these two
            // datasets' size is null, the new size is null.
            size = null;
        }
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, base.iterator()];
                case 1:
                    _b = (_a = (_c.sent())).concatenate;
                    return [4 /*yield*/, dataset.iterator()];
                case 2: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
            }
        }); }); }, size);
    };
    /**
     * Filters this dataset according to `predicate`.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
     *   .filter(x => x%2 === 0);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param predicate A function mapping a dataset element to a boolean or a
     * `Promise` for one.
     *
     * @returns A `Dataset` of elements for which the predicate was true.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.filter = function (predicate) {
        var _this = this;
        var base = this;
        var size;
        if (this.size === Infinity) {
            // If the size of this dataset is infinity, new size is infinity
            size = Infinity;
        }
        else {
            // If this dataset has limited elements, new size is null because it might
            // exhausted randomly.
            size = null;
        }
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base.iterator()];
                    case 1: return [2 /*return*/, (_a.sent()).filter(function (x) { return tf.tidy(function () { return predicate(x); }); })];
                }
            });
        }); }, size);
    };
    /**
     * Apply a function to every element of the dataset.
     *
     * After the function is applied to a dataset element, any Tensors contained
     * within that element are disposed.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param f A function to apply to each dataset element.
     * @returns A `Promise` that resolves after all elements have been processed.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.forEachAsync = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.iterator()];
                    case 1: return [2 /*return*/, (_a.sent()).forEachAsync(f)];
                }
            });
        });
    };
    /** @deprecated Please use `dataset.forEachAsync()` instead. */
    Dataset.prototype.forEach = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                tf.deprecationWarn('dataset.forEach() is deprecated and will be removed. ' +
                    'Please use dataset.forEachAsync() instead');
                return [2 /*return*/, this.forEachAsync(f)];
            });
        });
    };
    /**
     * Maps this dataset through a 1-to-1 transform.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]).map(x => x*x);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param transform A function mapping a dataset element to a transformed
     *   dataset element.
     *
     * @returns A `Dataset` of transformed elements.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.map = function (transform) {
        var _this = this;
        var base = this;
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base.iterator()];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (x) { return tf.tidy(function () { return transform(x); }); })];
                }
            });
        }); }, this.size);
    };
    /**
     * Maps this dataset through an async 1-to-1 transform.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]).map(x => new Promise(function(resolve){
     *  resolve(x*x);
     * }));
     * await a.forEachAsync(e => e.then(function(value){
     *  console.log(value);
     * }));
     * ```
     *
     * @param transform A function mapping a dataset element to a `Promise` for a
     *   transformed dataset element.  This transform is responsible for disposing
     *   any intermediate `Tensor`s, i.e. by wrapping its computation in
     *   `tf.tidy()`; that cannot be automated here (as it is in the synchronous
     *   `map()` case).
     *
     * @returns A `Dataset` of transformed elements.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.mapAsync = function (transform) {
        var _this = this;
        var base = this;
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base.iterator()];
                    case 1: return [2 /*return*/, (_a.sent()).mapAsync(transform)];
                }
            });
        }); }, this.size);
    };
    /**
     *  Creates a `Dataset` that prefetches elements from this dataset.
     *
     * @param bufferSize: An integer specifying the number of elements to be
     *   prefetched.
     * @returns A `Dataset`.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.prefetch = function (bufferSize) {
        var _this = this;
        if (bufferSize == null) {
            throw new RangeError('`Dataset.prefetch()` requires bufferSize to be specified.');
        }
        var base = this;
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, base.iterator()];
                case 1: return [2 /*return*/, (_a.sent()).prefetch(bufferSize)];
            }
        }); }); }, this.size);
    };
    /**
     * Repeats this dataset `count` times.
     *
     * NOTE: If this dataset is a function of global state (e.g. a random number
     * generator), then different repetitions may produce different elements.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]).repeat(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: (Optional) An integer, representing the number of times
     *   the dataset should be repeated. The default behavior (if `count` is
     *   `undefined` or negative) is for the dataset be repeated indefinitely.
     * @returns A `Dataset`.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.repeat = function (count) {
        var _this = this;
        var base = this;
        var size;
        if (this.size != null && count > 0) {
            // If this dataset has size and count is positive, new size is current
            // size multiply count. This also covers the case that current size is
            // infinity.
            size = this.size * count;
        }
        else if (count === 0) {
            // If count is 0, new size is 0.
            size = 0;
        }
        else if (this.size != null && (count === undefined || count < 0)) {
            // If this dataset has size and count is undefined or negative, the
            // dataset will be repeated indefinitely and new size is infinity.
            size = Infinity;
        }
        else {
            // If the size of this dataset is null, the new dataset's size is null.
            size = null;
        }
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
            var iteratorIterator;
            var _this = this;
            return __generator(this, function (_a) {
                iteratorIterator = lazy_iterator_1.iteratorFromFunction(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = {};
                            return [4 /*yield*/, base.iterator()];
                        case 1: return [2 /*return*/, (_a.value = _b.sent(), _a.done = false, _a)];
                    }
                }); }); });
                return [2 /*return*/, lazy_iterator_1.iteratorFromConcatenated(iteratorIterator.take(count))];
            });
        }); }, size);
    };
    /**
     * Creates a `Dataset` that skips `count` initial elements from this dataset.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).skip(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: The number of elements of this dataset that should be skipped
     *   to form the new dataset.  If `count` is greater than the size of this
     *   dataset, the new dataset will contain no elements.  If `count`
     *   is `undefined` or negative, skips the entire dataset.
     *
     * @returns A `Dataset`.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.skip = function (count) {
        var _this = this;
        var base = this;
        var size;
        if (this.size != null && count >= 0 && this.size >= count) {
            // If the size of this dataset is greater than count, the new dataset's
            // size is current size minus skipped size.This also covers the case that
            // current size is infinity.
            size = this.size - count;
        }
        else if (this.size != null &&
            (this.size < count || count === undefined || count < 0)) {
            // If the size of this dataset is smaller than count, or count is
            // undefined or negative, skips the entire dataset and the new size is 0.
            size = 0;
        }
        else {
            // If the size of this dataset is null, the new dataset's size is null.
            size = null;
        }
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, base.iterator()];
                case 1: return [2 /*return*/, (_a.sent()).skip(count)];
            }
        }); }); }, size);
    };
    /**
     * Pseudorandomly shuffles the elements of this dataset. This is done in a
     * streaming manner, by sampling from a given number of prefetched elements.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).shuffle(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param bufferSize: An integer specifying the number of elements from this
     *   dataset from which the new dataset will sample.
     * @param seed: (Optional) An integer specifying the random seed that will
     *   be used to create the distribution.
     * @param reshuffleEachIteration: (Optional) A boolean, which if true
     *   indicates that the dataset should be pseudorandomly reshuffled each time
     *   it is iterated over. If false, elements will be returned in the same
     *   shuffled order on each iteration. (Defaults to `true`.)
     * @returns A `Dataset`.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.shuffle = function (bufferSize, seed, reshuffleEachIteration) {
        var _this = this;
        if (reshuffleEachIteration === void 0) { reshuffleEachIteration = true; }
        if (bufferSize == null || bufferSize < 0) {
            if (this.size == null) {
                throw new RangeError('`Dataset.shuffle()` requires bufferSize to be specified.');
            }
            else {
                throw new RangeError('`Dataset.shuffle()` requires bufferSize to be specified.  ' +
                    'If your data fits in main memory (for regular JS objects), ' +
                    'and/or GPU memory (for `tf.Tensor`s), consider setting ' +
                    ("bufferSize to the dataset size (" + this.size + " elements)"));
            }
        }
        var base = this;
        var random = seedrandom.alea(seed || tf.util.now().toString());
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
            var seed2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seed2 = random.int32();
                        if (reshuffleEachIteration) {
                            seed2 += random.int32();
                        }
                        return [4 /*yield*/, base.iterator()];
                    case 1: return [2 /*return*/, (_a.sent()).shuffle(bufferSize, seed2.toString())];
                }
            });
        }); }, this.size);
    };
    /**
     * Creates a `Dataset` with at most `count` initial elements from this
     * dataset.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).take(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: The number of elements of this dataset that should be taken
     *   to form the new dataset.  If `count` is `undefined` or negative, or if
     *   `count` is greater than the size of this dataset, the new dataset will
     *   contain all elements of this dataset.
     * @returns A `Dataset`.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.take = function (count) {
        var _this = this;
        var base = this;
        var size;
        if (this.size != null && this.size > count) {
            // If the size of this dataset is greater than count, the new dataset's
            // size is count.
            size = count;
        }
        else if (this.size != null && this.size <= count) {
            // If the size of this dataset is equal or smaller than count, the new
            // dataset's size is the size of this dataset.
            size = this.size;
        }
        else {
            // If the size of this dataset is null, the new dataset's size is null.
            size = null;
        }
        return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, base.iterator()];
                case 1: return [2 /*return*/, (_a.sent()).take(count)];
            }
        }); }); }, size);
    };
    /**
     * Collect all elements of this dataset into an array.
     *
     * Obviously this will succeed only for small datasets that fit in memory.
     * Useful for testing and generally should be avoided if possible.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]);
     * console.log(await a.toArray());
     * ```
     *
     * @returns A Promise for an array of elements, which will resolve
     *   when a new stream has been obtained and fully consumed.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    Dataset.prototype.toArray = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.size === Infinity) {
                            throw new Error('Can not convert infinite data stream to array.');
                        }
                        return [4 /*yield*/, this.iterator()];
                    case 1: return [2 /*return*/, (_a.sent()).toArray()];
                }
            });
        });
    };
    /**
     * Collect all elements of this dataset into an array with prefetching 100
     * elements. This is useful for testing, because the prefetch changes the
     * order in which the Promises are resolved along the processing pipeline.
     * This may help expose bugs where results are dependent on the order of
     * Promise resolution rather than on the logical order of the stream (i.e.,
     * due to hidden mutable state).
     *
     * @returns A Promise for an array of elements, which will resolve
     *   when a new stream has been obtained and fully consumed.
     */
    Dataset.prototype.toArrayForTest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.size === Infinity) {
                            throw new Error('Can not convert infinite data stream to array.');
                        }
                        return [4 /*yield*/, this.iterator()];
                    case 1: return [2 /*return*/, (_a.sent()).toArrayForTest()];
                }
            });
        });
    };
    // TODO(soergel): deep sharded shuffle, where supported
    Dataset.MAX_BUFFER_SIZE = 10000;
    return Dataset;
}());
exports.Dataset = Dataset;
/**
 * Create a `Dataset` defined by a provided iterator() function.
 *
 * ```js
 * let i = -1;
 * const func = () =>
 *    ++i < 5 ? {value: i, done: false} : {value: null, done: true};
 * const iter = tf.data.iteratorFromFunction(func);
 * const ds = tf.data.datasetFromIteratorFn(iter);
 * await ds.forEachAsync(e => console.log(e));
 * ```
 */
function datasetFromIteratorFn(iteratorFn, size) {
    if (size === void 0) { size = null; }
    return new /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = size;
            return _this;
        }
        /*
         * Provide a new stream of elements.  Note this will also start new streams
         * from any underlying `Dataset`s.
         */
        class_1.prototype.iterator = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, iteratorFn()];
                });
            });
        };
        return class_1;
    }(Dataset))();
}
exports.datasetFromIteratorFn = datasetFromIteratorFn;
/**
 * Create a `Dataset` from an array of elements.
 *
 * Create a Dataset from an array of objects:
 * ```js
 * const a = tf.data.array([{'item': 1}, {'item': 2}, {'item': 3}]);
 * await a.forEachAsync(e => console.log(e));
 * ```
 *
 * Create a Dataset from an array of numbers:
 * ```js
 * const a = tf.data.array([4, 5, 6]);
 * await a.forEachAsync(e => console.log(e));
 * ```
 * @param items An array of elements that will be parsed as items in a dataset.
 */
/** @doc {heading: 'Data', subheading: 'Creation', namespace: 'data'} */
function array(items) {
    var _this = this;
    return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, lazy_iterator_1.iteratorFromItems(items)];
    }); }); }, items.length);
}
exports.array = array;
/**
 * Create a `Dataset` by zipping together an array, dict, or nested
 * structure of `Dataset`s (and perhaps additional constants).
 * The underlying datasets must provide elements in a consistent order such that
 * they correspond.
 *
 * The number of elements in the resulting dataset is the same as the size of
 * the smallest dataset in datasets.
 *
 * The nested structure of the `datasets` argument determines the
 * structure of elements in the resulting iterator.
 *
 * Note this means that, given an array of two datasets that produce dict
 * elements, the result is a dataset that produces elements that are arrays
 * of two dicts:
 *
 * Zip an array of datasets:
 * ```js
 * console.log('Zip two datasets of objects:');
 * const ds1 = tf.data.array([{a: 1}, {a: 2}, {a: 3}]);
 * const ds2 = tf.data.array([{b: 4}, {b: 5}, {b: 6}]);
 * const ds3 = tf.data.zip([ds1, ds2]);
 * await ds3.forEachAsync(e => console.log(JSON.stringify(e)));
 *
 * // If the goal is to merge the dicts in order to produce elements like
 * // {a: ..., b: ...}, this requires a second step such as:
 * console.log('Merge the objects:');
 * const ds4 = ds3.map(x => {return {a: x[0].a, b: x[1].b}});
 * await ds4.forEachAsync(e => console.log(e));
 * ```
 *
 * Zip a dict of datasets:
 * ```js
 * const a = tf.data.array([{a: 1}, {a: 2}, {a: 3}]);
 * const b = tf.data.array([{b: 4}, {b: 5}, {b: 6}]);
 * const c = tf.data.zip({c: a, d: b});
 * await c.forEachAsync(e => console.log(JSON.stringify(e)));
 * ```
 */
/** @doc {heading: 'Data', subheading: 'Operations', namespace: 'data'} */
function zip(datasets) {
    var _this = this;
    // manually type-check the argument for JS users
    if (!deep_map_1.isIterable(datasets)) {
        throw new Error('The argument to zip() must be an object or array.');
    }
    var size;
    if (Array.isArray(datasets)) {
        for (var i = 0; i < datasets.length; i++) {
            size = size == null ? datasets[i].size :
                Math.min(size, datasets[i].size);
        }
    }
    else if (datasets instanceof Object) {
        for (var ds in datasets) {
            size = size == null ? datasets[ds].size :
                Math.min(size, datasets[ds].size);
        }
    }
    return datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
        var streams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deep_map_1.deepMapAndAwaitAll(datasets, function (d) {
                        if (d instanceof Dataset) {
                            return { value: d.iterator(), recurse: false };
                        }
                        else if (deep_map_1.isIterable(d)) {
                            return { value: null, recurse: true };
                        }
                        else {
                            throw new Error('Leaves of the structure passed to zip() must be Datasets, ' +
                                'not primitives.');
                        }
                    })];
                case 1:
                    streams = _a.sent();
                    return [2 /*return*/, lazy_iterator_1.iteratorFromZipped(streams, lazy_iterator_1.ZipMismatchMode.SHORTEST)];
            }
        });
    }); }, size);
}
exports.zip = zip;
/**
 * A zip function for use with deepZip, passed via the columnMajorBatch call.
 *
 * Accepts an array of identically-structured nested elements and either batches
 * them (if they are primitives, numeric arrays, or Tensors) or requests
 * recursion (if not).
 */
// tslint:disable-next-line:no-any
function deepBatchConcat(rows) {
    if (rows === null) {
        return null;
    }
    // use the first item to decide whether to recurse or batch here.
    var exampleRow = rows[0];
    if (deep_map_1.canTensorify(exampleRow)) {
        // rows is an array of primitives, Tensors, or arrays.  Batch them.
        var value = batchConcat(rows);
        return { value: value, recurse: false };
    }
    // the example row is an object, so recurse into it.
    return { value: null, recurse: true };
}
/**
 * Assembles a list of same-shaped numbers, number arrays, or Tensors
 * into a single new Tensor where axis 0 is the batch dimension.
 */
function batchConcat(arrays) {
    if (arrays.length === 0) {
        // We can't return an empty Tensor because we don't know the element shape.
        throw new Error('Can\'t make a batch of zero elements.');
    }
    if (arrays[0] instanceof tf.Tensor) {
        // Input is an array of Tensors
        return tf.stack(arrays);
    }
    else {
        // Input is a possibly-nested array of numbers.
        return tf.tensor(arrays);
    }
}
//# sourceMappingURL=dataset.js.map
}, function(modId) { var map = {"./iterators/lazy_iterator":1553811080210,"./util/deep_map":1553811080211}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080210, function(require, module, exports) {
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
 *
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
var tf = require("@tensorflow/tfjs-core");
var seedrandom = require("seedrandom");
var deep_map_1 = require("../util/deep_map");
var growing_ring_buffer_1 = require("../util/growing_ring_buffer");
var ring_buffer_1 = require("../util/ring_buffer");
// Here we implement a simple asynchronous iterator.
// This lets us avoid using either third-party stream libraries or
// recent TypeScript language support requiring polyfills.
/**
 * Create a `LazyIterator` from an array of items.
 */
function iteratorFromItems(items) {
    return new ArrayIterator(items);
}
exports.iteratorFromItems = iteratorFromItems;
/**
 * Create a `LazyIterator` of incrementing integers.
 */
function iteratorFromIncrementing(start) {
    var i = start;
    return iteratorFromFunction(function () { return ({ value: i++, done: false }); });
}
exports.iteratorFromIncrementing = iteratorFromIncrementing;
/**
 * Create a `LazyIterator` from a function.
 *
 * ```js
 * let i = -1;
 * const func = () =>
 *    ++i < 5 ? {value: i, done: false} : {value: null, done: true};
 * const iter = tf.data.iteratorFromFunction(func);
 * await iter.forEachAsync(e => console.log(e));
 * ```
 *
 * @param func A function that produces data on each call.
 */
function iteratorFromFunction(func) {
    return new FunctionCallIterator(func);
}
exports.iteratorFromFunction = iteratorFromFunction;
/**
 * Create a `LazyIterator` by concatenating underlying streams, which are
 * themselves provided as a stream.
 *
 * This can also be thought of as a "stream flatten" operation.
 *
 * @param baseIterators A stream of streams to be concatenated.
 * @param baseErrorHandler An optional function that can intercept `Error`s
 *   raised during a `next()` call on the base stream.  This function can decide
 *   whether the error should be propagated, whether the error should be
 *   ignored, or whether the base stream should be terminated.
 */
function iteratorFromConcatenated(baseIterators, baseErrorHandler) {
    return new ChainedIterator(baseIterators, baseErrorHandler);
}
exports.iteratorFromConcatenated = iteratorFromConcatenated;
/**
 * Create a `LazyIterator` by concatenating streams produced by calling a
 * stream-generating function a given number of times.
 *
 * Since a `LazyIterator` is read-once, it cannot be repeated, but this
 * function can be used to achieve a similar effect:
 *
 *   LazyIterator.ofConcatenatedFunction(() => new MyIterator(), 6);
 *
 * @param iteratorFunc: A function that produces a new stream on each call.
 * @param count: The number of times to call the function.
 * @param baseErrorHandler An optional function that can intercept `Error`s
 *   raised during a `next()` call on the base stream.  This function can decide
 *   whether the error should be propagated, whether the error should be
 *   ignored, or whether the base stream should be terminated.
 */
function iteratorFromConcatenatedFunction(iteratorFunc, count, baseErrorHandler) {
    return iteratorFromConcatenated(iteratorFromFunction(iteratorFunc).take(count), baseErrorHandler);
}
exports.iteratorFromConcatenatedFunction = iteratorFromConcatenatedFunction;
/**
 * Create a `LazyIterator` by zipping together an array, dict, or nested
 * structure of `LazyIterator`s (and perhaps additional constants).
 *
 * The underlying streams must provide elements in a consistent order such
 * that they correspond.
 *
 * Typically, the underlying streams should have the same number of
 * elements. If they do not, the behavior is determined by the
 * `mismatchMode` argument.
 *
 * The nested structure of the `iterators` argument determines the
 * structure of elements in the resulting iterator.
 *
 * @param iterators: An array or object containing LazyIterators at the
 * leaves.
 * @param mismatchMode: Determines what to do when one underlying iterator
 * is exhausted before the others.  `ZipMismatchMode.FAIL` (the default)
 * causes an error to be thrown in this case.  `ZipMismatchMode.SHORTEST`
 * causes the zipped iterator to terminate with the furst underlying
 * streams, so elements remaining on the longer streams are ignored.
 * `ZipMismatchMode.LONGEST` causes the zipped stream to continue, filling
 * in nulls for the exhausted streams, until all streams are exhausted.
 */
function iteratorFromZipped(iterators, mismatchMode) {
    if (mismatchMode === void 0) { mismatchMode = ZipMismatchMode.FAIL; }
    return new ZipIterator(iterators, mismatchMode);
}
exports.iteratorFromZipped = iteratorFromZipped;
/**
 * An asynchronous iterator, providing lazy access to a potentially
 * unbounded stream of elements.
 *
 * Iterator can be obtained from a dataset:
 * `const iter = await dataset.iterator();`
 */
var LazyIterator = /** @class */ (function () {
    function LazyIterator() {
    }
    /**
     * Collect all remaining elements of a bounded stream into an array.
     * Obviously this will succeed only for small streams that fit in memory.
     * Useful for testing.
     *
     * @returns A Promise for an array of stream elements, which will resolve
     *   when the stream is exhausted.
     */
    LazyIterator.prototype.toArray = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        return [4 /*yield*/, this.next()];
                    case 1:
                        x = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!!x.done) return [3 /*break*/, 4];
                        result.push(x.value);
                        return [4 /*yield*/, this.next()];
                    case 3:
                        x = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Collect all elements of this dataset into an array with prefetching 100
     * elements. This is useful for testing, because the prefetch changes the
     * order in which the Promises are resolved along the processing pipeline.
     * This may help expose bugs where results are dependent on the order of
     * Promise resolution rather than on the logical order of the stream (i.e.,
     * due to hidden mutable state).
     *
     * @returns A Promise for an array of stream elements, which will resolve
     *   when the stream is exhausted.
     */
    LazyIterator.prototype.toArrayForTest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stream, result, x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stream = this.prefetch(100);
                        result = [];
                        return [4 /*yield*/, stream.next()];
                    case 1:
                        x = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!!x.done) return [3 /*break*/, 4];
                        result.push(x.value);
                        return [4 /*yield*/, stream.next()];
                    case 3:
                        x = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Draw items from the stream until it is exhausted.
     *
     * This can be useful when the stream has side effects but no output.  In
     * that case, calling this function guarantees that the stream will be
     * fully processed.
     */
    LazyIterator.prototype.resolveFully = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.next()];
                    case 1:
                        x = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!!x.done) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.next()];
                    case 3:
                        x = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Draw items from the stream until it is exhausted, or a predicate fails.
     *
     * This can be useful when the stream has side effects but no output.  In
     * that case, calling this function guarantees that the stream will be
     * fully processed.
     */
    LazyIterator.prototype.resolveWhile = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            var x, shouldContinue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.next()];
                    case 1:
                        x = _a.sent();
                        shouldContinue = predicate(x.value);
                        _a.label = 2;
                    case 2:
                        if (!((!x.done) && shouldContinue)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.next()];
                    case 3:
                        x = _a.sent();
                        shouldContinue = predicate(x.value);
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handles errors thrown on this stream using a provided handler function.
     *
     * @param handler A function that handles any `Error` thrown during a `next()`
     *   call and returns true if the stream should continue (dropping the failed
     *   call) or false if the stream should quietly terminate.  If the handler
     *   itself throws (or rethrows) an `Error`, that will be propagated.
     *
     * @returns A `LazyIterator` of elements passed through from upstream,
     *   possibly filtering or terminating on upstream `next()` calls that
     *   throw an `Error`.
     */
    LazyIterator.prototype.handleErrors = function (handler) {
        return new ErrorHandlingLazyIterator(this, handler);
    };
    // TODO(soergel): Implement reduce() etc.
    /**
     * Filters this stream according to `predicate`.
     *
     * @param predicate A function mapping a stream element to a boolean or a
     * `Promise` for one.
     *
     * @returns A `LazyIterator` of elements for which the predicate was true.
     */
    LazyIterator.prototype.filter = function (predicate) {
        return new FilterIterator(this, predicate);
    };
    /**
     * Maps this stream through a 1-to-1 transform.
     *
     * @param transform A function mapping a stream element to a transformed
     *   element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */
    LazyIterator.prototype.map = function (transform) {
        return new MapIterator(this, transform);
    };
    /**
     * Maps this stream through an async 1-to-1 transform.
     *
     * @param transform A function mapping a stream element to a `Promise` for a
     *   transformed stream element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */
    LazyIterator.prototype.mapAsync = function (transform) {
        return new AsyncMapIterator(this, transform);
    };
    /**
     * Maps this stream through a 1-to-1 transform, forcing serial execution.
     *
     * @param transform A function mapping a stream element to a transformed
     *   element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */
    LazyIterator.prototype.serialMapAsync = function (transform) {
        return new AsyncMapIterator(this, transform).serial();
    };
    /**
     * Maps this stream through a 1-to-many transform.
     *
     * @param transform A function mapping a stream element to an array of
     *   transformed elements.
     *
     * @returns A `DataStream` of transformed elements.
     */
    LazyIterator.prototype.flatmap = function (transform) {
        return new FlatmapIterator(this, transform);
    };
    /**
     * Apply a function to every element of the stream.
     *
     * @param f A function to apply to each stream element.
     */
    LazyIterator.prototype.forEachAsync = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.map(f).resolveFully()];
            });
        });
    };
    /**
     * Apply a function to every element of the stream, forcing serial execution.
     *
     * @param f A function to apply to each stream element.  Should return 'true'
     *   to indicate that the stream should continue, or 'false' to cause it to
     *   terminate.
     */
    LazyIterator.prototype.serialForEach = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.serialMapAsync(f).resolveWhile(function (x) { return (x === true); })];
            });
        });
    };
    /**
     * Groups elements into batches, represented as arrays of elements.
     *
     * We can think of the elements of this iterator as 'rows' (even if they are
     * nested structures).  By the same token, consecutive values for a given
     * key within the elements form a 'column'.  This matches the usual sense of
     * 'row' and 'column' when processing tabular data (e.g., parsing a CSV).
     *
     * Thus, "Row-major" means that the resulting batch is simply a collection of
     * rows: `[row1, row2, row3, ...]`.  This is contrast to the column-major
     * form, which is needed for vectorized computation.
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @returns A `LazyIterator` of batches of elements, represented as arrays
     *   of the original element type.
     */
    LazyIterator.prototype.rowMajorBatch = function (batchSize, smallLastBatch) {
        if (smallLastBatch === void 0) { smallLastBatch = true; }
        return new RowMajorBatchIterator(this, batchSize, smallLastBatch);
    };
    /**
     * Groups elements into batches, represented in column-major form.
     *
     * We can think of the elements of this iterator as 'rows' (even if they are
     * nested structures).  By the same token, consecutive values for a given
     * key within the elements form a 'column'.  This matches the usual sense of
     * 'row' and 'column' when processing tabular data (e.g., parsing a CSV).
     *
     * Thus, "column-major" means that the resulting batch is a (potentially
     * nested) structure representing the columns.  Each column entry, then,
     * contains a collection of the values found in that column for a range of
     * input elements.  This representation allows for vectorized computation, in
     * contrast to the row-major form.
     *
     * The inputs should all have the same nested structure (i.e., of arrays and
     * dicts).  The result is a single object with the same nested structure,
     * where the leaves are arrays collecting the values of the inputs at that
     * location (or, optionally, the result of a custom function applied to those
     * arrays).
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @param zipFn: (optional) A function that expects an array of elements at a
     *   single node of the object tree, and returns a `DeepMapResult`.  The
     *   `DeepMapResult` either provides a result value for that node (i.e.,
     *   representing the subtree), or indicates that the node should be processed
     *   recursively.  The default zipFn recurses as far as possible and places
     *   arrays at the leaves.
     * @returns A `LazyIterator` of batches of elements, represented as an object
     *   with collections at the leaves.
     */
    LazyIterator.prototype.columnMajorBatch = function (batchSize, smallLastBatch, 
    // tslint:disable-next-line:no-any
    zipFn) {
        if (smallLastBatch === void 0) { smallLastBatch = true; }
        if (zipFn === void 0) { zipFn = deep_map_1.zipToList; }
        // First collect the desired number of input elements as a row-major batch.
        var rowBatches = this.rowMajorBatch(batchSize, smallLastBatch);
        // Now 'rotate' or 'pivot' the data, collecting all values from each column
        // in the batch (i.e., for each key within the elements) into an array.
        return rowBatches.map(function (x) { return deep_map_1.deepZip(x, zipFn); });
    };
    /**
     * Concatenate this `LazyIterator` with another.
     *
     * @param iterator A `LazyIterator` to be concatenated onto this one.
     * @param baseErrorHandler An optional function that can intercept `Error`s
     *   raised during a `next()` call on the base stream.  This function can
     *   decide whether the error should be propagated, whether the error should
     *   be ignored, or whether the base stream should be terminated.
     * @returns A `LazyIterator`.
     */
    LazyIterator.prototype.concatenate = function (iterator, baseErrorHandler) {
        return new ChainedIterator(iteratorFromItems([this, iterator]), baseErrorHandler);
    };
    /**
     * Limits this stream to return at most `count` items.
     *
     * @param count The maximum number of items to provide from the stream. If
     * a negative or undefined value is given, the entire stream is returned
     *   unaltered.
     */
    LazyIterator.prototype.take = function (count) {
        if (count < 0 || count == null) {
            return this;
        }
        return new TakeIterator(this, count);
    };
    /**
     * Skips the first `count` items in this stream.
     *
     * @param count The number of items to skip.  If a negative or undefined
     * value is given, the entire stream is returned unaltered.
     */
    LazyIterator.prototype.skip = function (count) {
        if (count < 0 || count == null) {
            return this;
        }
        return new SkipIterator(this, count);
    };
    /**
     * Prefetch the first `bufferSize` items in this stream.
     *
     * Note this prefetches Promises, but makes no guarantees about when those
     * Promises resolve.
     *
     * @param bufferSize: An integer specifying the number of elements to be
     *   prefetched.
     */
    LazyIterator.prototype.prefetch = function (bufferSize) {
        return new PrefetchIterator(this, bufferSize);
    };
    // TODO(soergel): deep sharded shuffle, where supported
    /**
     * Randomly shuffles the elements of this stream.
     *
     * @param bufferSize: An integer specifying the number of elements from
     * this stream from which the new stream will sample.
     * @param seed: (Optional.) An integer specifying the random seed that
     * will be used to create the distribution.
     */
    LazyIterator.prototype.shuffle = function (windowSize, seed) {
        return new ShuffleIterator(this, windowSize, seed);
    };
    /**
     * Force an iterator to execute serially: each next() call will await the
     * prior one, so that they cannot execute concurrently.
     */
    LazyIterator.prototype.serial = function () {
        return new SerialIterator(this);
    };
    return LazyIterator;
}());
exports.LazyIterator = LazyIterator;
// ============================================================================
// The following private classes serve to implement the chainable methods
// on LazyIterator.  Unfortunately they can't be placed in separate files,
// due to resulting trouble with circular imports.
// ============================================================================
// Iterators that just extend LazyIterator directly
// ============================================================================
var ArrayIterator = /** @class */ (function (_super) {
    __extends(ArrayIterator, _super);
    function ArrayIterator(items) {
        var _this = _super.call(this) || this;
        _this.items = items;
        _this.trav = 0;
        return _this;
    }
    ArrayIterator.prototype.summary = function () {
        return "Array of " + this.items.length + " items";
    };
    ArrayIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item, result;
            return __generator(this, function (_a) {
                if (this.trav >= this.items.length) {
                    return [2 /*return*/, { value: null, done: true }];
                }
                item = this.items[this.trav];
                if (item instanceof tf.Tensor) {
                    result = tf.clone(item);
                }
                else {
                    result = item;
                }
                this.trav++;
                return [2 /*return*/, { value: result, done: false }];
            });
        });
    };
    return ArrayIterator;
}(LazyIterator));
var FunctionCallIterator = /** @class */ (function (_super) {
    __extends(FunctionCallIterator, _super);
    function FunctionCallIterator(nextFn) {
        var _this = _super.call(this) || this;
        _this.nextFn = nextFn;
        return _this;
    }
    FunctionCallIterator.prototype.summary = function () {
        return "Function call";
    };
    FunctionCallIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.nextFn()];
                }
                catch (e) {
                    // Modify the error message but leave the stack trace intact
                    e.message =
                        "Error thrown while iterating through a dataset: " + e.message;
                    throw e;
                }
                return [2 /*return*/];
            });
        });
    };
    return FunctionCallIterator;
}(LazyIterator));
var SerialIterator = /** @class */ (function (_super) {
    __extends(SerialIterator, _super);
    function SerialIterator(upstream) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.lastRead = Promise.resolve({ value: null, done: false });
        return _this;
    }
    SerialIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> Serial";
    };
    SerialIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // This sets this.lastRead to a new Promise right away, as opposed to
                // saying `await this.lastRead; this.lastRead = this.serialNext();` which
                // would not work because this.nextRead would be updated only after the
                // promise resolves.
                this.lastRead = this.lastRead.then(function () { return _this.serialNext(); });
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    SerialIterator.prototype.serialNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.upstream.next()];
            });
        });
    };
    return SerialIterator;
}(LazyIterator));
var SkipIterator = /** @class */ (function (_super) {
    __extends(SkipIterator, _super);
    function SkipIterator(upstream, maxCount) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.maxCount = maxCount;
        // Local state that should not be clobbered by out-of-order execution.
        _this.count = 0;
        _this.lastRead = Promise.resolve({ value: null, done: false });
        return _this;
    }
    SkipIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> Skip";
    };
    SkipIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // This sets this.lastRead to a new Promise right away, as opposed to
                // saying `await this.lastRead; this.lastRead = this.serialNext();` which
                // would not work because this.nextRead would be updated only after the
                // promise resolves.
                this.lastRead = this.lastRead.then(function () { return _this.serialNext(); });
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    SkipIterator.prototype.serialNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var skipped;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.count++ < this.maxCount)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.upstream.next()];
                    case 1:
                        skipped = _a.sent();
                        // short-circuit if upstream is already empty
                        if (skipped.done) {
                            return [2 /*return*/, skipped];
                        }
                        tf.dispose(skipped.value);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/, this.upstream.next()];
                }
            });
        });
    };
    return SkipIterator;
}(LazyIterator));
var TakeIterator = /** @class */ (function (_super) {
    __extends(TakeIterator, _super);
    function TakeIterator(upstream, maxCount) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.maxCount = maxCount;
        _this.count = 0;
        return _this;
    }
    TakeIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> Take";
    };
    TakeIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.count++ >= this.maxCount) {
                    return [2 /*return*/, { value: null, done: true }];
                }
                return [2 /*return*/, this.upstream.next()];
            });
        });
    };
    return TakeIterator;
}(LazyIterator));
// Note this batch just groups items into row-wise element arrays.
// Rotating these to a column-wise representation happens only at the dataset
// level.
var RowMajorBatchIterator = /** @class */ (function (_super) {
    __extends(RowMajorBatchIterator, _super);
    function RowMajorBatchIterator(upstream, batchSize, enableSmallLastBatch) {
        if (enableSmallLastBatch === void 0) { enableSmallLastBatch = true; }
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.batchSize = batchSize;
        _this.enableSmallLastBatch = enableSmallLastBatch;
        _this.lastRead = Promise.resolve({ value: null, done: false });
        return _this;
    }
    RowMajorBatchIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> RowMajorBatch";
    };
    RowMajorBatchIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // This sets this.lastRead to a new Promise right away, as opposed to
                // saying `await this.lastRead; this.lastRead = this.serialNext();` which
                // would not work because this.nextRead would be updated only after the
                // promise resolves.
                this.lastRead = this.lastRead.then(function () { return _this.serialNext(); });
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    RowMajorBatchIterator.prototype.serialNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var batch, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batch = [];
                        _a.label = 1;
                    case 1:
                        if (!(batch.length < this.batchSize)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.upstream.next()];
                    case 2:
                        item = _a.sent();
                        if (item.done) {
                            if (this.enableSmallLastBatch && batch.length > 0) {
                                return [2 /*return*/, { value: batch, done: false }];
                            }
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        batch.push(item.value);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, { value: batch, done: false }];
                }
            });
        });
    };
    return RowMajorBatchIterator;
}(LazyIterator));
var FilterIterator = /** @class */ (function (_super) {
    __extends(FilterIterator, _super);
    function FilterIterator(upstream, predicate) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.predicate = predicate;
        _this.lastRead = Promise.resolve({ value: null, done: false });
        return _this;
    }
    FilterIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> Filter";
    };
    FilterIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // This sets this.lastRead to a new Promise right away, as opposed to
                // saying `await this.lastRead; this.lastRead = this.serialNext();` which
                // would not work because this.nextRead would be updated only after the
                // promise resolves.
                this.lastRead = this.lastRead.then(function () { return _this.serialNext(); });
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    FilterIterator.prototype.serialNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.upstream.next()];
                    case 1:
                        item = _a.sent();
                        if (item.done || this.predicate(item.value)) {
                            return [2 /*return*/, item];
                        }
                        tf.dispose(item.value);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return FilterIterator;
}(LazyIterator));
var MapIterator = /** @class */ (function (_super) {
    __extends(MapIterator, _super);
    function MapIterator(upstream, transform) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.transform = transform;
        return _this;
    }
    MapIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> Map";
    };
    MapIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item, inputTensors, mapped, outputTensors, _i, inputTensors_1, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.upstream.next()];
                    case 1:
                        item = _a.sent();
                        if (item.done) {
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        inputTensors = tf.tensor_util.getTensorsInContainer(item.value);
                        mapped = this.transform(item.value);
                        outputTensors = tf.tensor_util.getTensorsInContainer(mapped);
                        // TODO(soergel) faster intersection
                        // TODO(soergel) move to tf.disposeExcept(in, out)?
                        for (_i = 0, inputTensors_1 = inputTensors; _i < inputTensors_1.length; _i++) {
                            t = inputTensors_1[_i];
                            if (!tf.tensor_util.isTensorInList(t, outputTensors)) {
                                t.dispose();
                            }
                        }
                        return [2 /*return*/, { value: mapped, done: false }];
                }
            });
        });
    };
    return MapIterator;
}(LazyIterator));
var ErrorHandlingLazyIterator = /** @class */ (function (_super) {
    __extends(ErrorHandlingLazyIterator, _super);
    function ErrorHandlingLazyIterator(upstream, handler) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.handler = handler;
        _this.count = 0;
        _this.lastRead = Promise.resolve({ value: null, done: false });
        return _this;
    }
    ErrorHandlingLazyIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> handleErrors";
    };
    ErrorHandlingLazyIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // This sets this.lastRead to a new Promise right away, as opposed to
                // saying `await this.lastRead; this.lastRead = this.serialNext();` which
                // would not work because this.nextRead would be updated only after the
                // promise resolves.
                this.lastRead = this.lastRead.then(function () { return _this.serialNext(); });
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    ErrorHandlingLazyIterator.prototype.serialNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.upstream.next()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        if (!this.handler(e_1)) {
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 0];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return ErrorHandlingLazyIterator;
}(LazyIterator));
var AsyncMapIterator = /** @class */ (function (_super) {
    __extends(AsyncMapIterator, _super);
    function AsyncMapIterator(upstream, transform) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.transform = transform;
        return _this;
    }
    AsyncMapIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> AsyncMap";
    };
    AsyncMapIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item, inputTensors, mapped, outputTensors, _i, inputTensors_2, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.upstream.next()];
                    case 1:
                        item = _a.sent();
                        if (item.done) {
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        inputTensors = tf.tensor_util.getTensorsInContainer(item.value);
                        return [4 /*yield*/, this.transform(item.value)];
                    case 2:
                        mapped = _a.sent();
                        outputTensors = tf.tensor_util.getTensorsInContainer(mapped);
                        // TODO(soergel) faster intersection
                        // TODO(soergel) move to tf.disposeExcept(in, out)?
                        for (_i = 0, inputTensors_2 = inputTensors; _i < inputTensors_2.length; _i++) {
                            t = inputTensors_2[_i];
                            if (!tf.tensor_util.isTensorInList(t, outputTensors)) {
                                t.dispose();
                            }
                        }
                        return [2 /*return*/, { value: mapped, done: false }];
                }
            });
        });
    };
    return AsyncMapIterator;
}(LazyIterator));
// Iterators that maintain a queue of pending items
// ============================================================================
/**
 * A base class for transforming streams that operate by maintaining an
 * output queue of elements that are ready to return via next().  This is
 * commonly required when the transformation is 1-to-many:  A call to next()
 * may trigger a call to the underlying stream, which will produce many
 * mapped elements of this stream-- of which we need to return only one, so
 * we have to queue the rest.
 */
var OneToManyIterator = /** @class */ (function (_super) {
    __extends(OneToManyIterator, _super);
    function OneToManyIterator() {
        var _this = _super.call(this) || this;
        _this.outputQueue = new growing_ring_buffer_1.GrowingRingBuffer();
        _this.lastRead = Promise.resolve({ value: null, done: false });
        return _this;
    }
    OneToManyIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // This sets this.lastRead to a new Promise right away, as opposed to
                // saying `await this.lastRead; this.lastRead = this.serialNext();` which
                // would not work because this.nextRead would be updated only after the
                // promise resolves.
                this.lastRead = this.lastRead.then(function () { return _this.serialNext(); });
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    OneToManyIterator.prototype.serialNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.outputQueue.length() === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.pump()];
                    case 1:
                        // TODO(soergel): consider parallel reads.
                        if (!(_a.sent())) {
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/, { value: this.outputQueue.shift(), done: false }];
                }
            });
        });
    };
    return OneToManyIterator;
}(LazyIterator));
exports.OneToManyIterator = OneToManyIterator;
var FlatmapIterator = /** @class */ (function (_super) {
    __extends(FlatmapIterator, _super);
    function FlatmapIterator(upstream, transform) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.transform = transform;
        return _this;
    }
    FlatmapIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> Flatmap";
    };
    FlatmapIterator.prototype.pump = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item, inputTensors, mappedArray, outputTensors, _i, inputTensors_3, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.upstream.next()];
                    case 1:
                        item = _a.sent();
                        if (item.done) {
                            return [2 /*return*/, false];
                        }
                        inputTensors = tf.tensor_util.getTensorsInContainer(item.value);
                        mappedArray = this.transform(item.value);
                        outputTensors = tf.tensor_util.getTensorsInContainer(mappedArray);
                        this.outputQueue.pushAll(mappedArray);
                        // TODO(soergel) faster intersection, and deduplicate outputTensors
                        // TODO(soergel) move to tf.disposeExcept(in, out)?
                        for (_i = 0, inputTensors_3 = inputTensors; _i < inputTensors_3.length; _i++) {
                            t = inputTensors_3[_i];
                            if (!tf.tensor_util.isTensorInList(t, outputTensors)) {
                                t.dispose();
                            }
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return FlatmapIterator;
}(OneToManyIterator));
/**
 * Provides a `LazyIterator` that concatenates a stream of underlying
 * streams.
 *
 * Doing this in a concurrency-safe way requires some trickery.  In
 * particular, we want this stream to return the elements from the
 * underlying streams in the correct order according to when next() was
 * called, even if the resulting Promises resolve in a different order.
 */
var ChainedIterator = /** @class */ (function (_super) {
    __extends(ChainedIterator, _super);
    function ChainedIterator(iterators, baseErrorHandler) {
        var _this = _super.call(this) || this;
        _this.baseErrorHandler = baseErrorHandler;
        // Strict Promise execution order:
        // a next() call may not even begin until the previous one completes.
        _this.lastRead = null;
        // Local state that should not be clobbered by out-of-order execution.
        _this.iterator = null;
        _this.moreIterators = iterators;
        return _this;
    }
    ChainedIterator.prototype.summary = function () {
        var upstreamSummaries = 'TODO: fill in upstream of chained summaries';
        return upstreamSummaries + " -> Chained";
    };
    ChainedIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.lastRead = this.readFromChain(this.lastRead);
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    ChainedIterator.prototype.readFromChain = function (lastRead) {
        return __awaiter(this, void 0, void 0, function () {
            var iteratorResult, itemResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Must await on the previous read since the previous read may have advanced
                    // the stream of streams, from which we need to read.
                    // This is unfortunate since we can't parallelize reads. Which means
                    // prefetching of chained streams is a no-op.
                    // One solution is to prefetch immediately upstream of this.
                    return [4 /*yield*/, lastRead];
                    case 1:
                        // Must await on the previous read since the previous read may have advanced
                        // the stream of streams, from which we need to read.
                        // This is unfortunate since we can't parallelize reads. Which means
                        // prefetching of chained streams is a no-op.
                        // One solution is to prefetch immediately upstream of this.
                        _a.sent();
                        if (!(this.iterator == null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.moreIterators.next()];
                    case 2:
                        iteratorResult = _a.sent();
                        if (iteratorResult.done) {
                            // No more streams to stream from.
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        this.iterator = iteratorResult.value;
                        if (this.baseErrorHandler != null) {
                            this.iterator = this.iterator.handleErrors(this.baseErrorHandler);
                        }
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.iterator.next()];
                    case 4:
                        itemResult = _a.sent();
                        if (itemResult.done) {
                            this.iterator = null;
                            return [2 /*return*/, this.readFromChain(lastRead)];
                        }
                        return [2 /*return*/, itemResult];
                }
            });
        });
    };
    return ChainedIterator;
}(LazyIterator));
exports.ChainedIterator = ChainedIterator;
var ZipMismatchMode;
(function (ZipMismatchMode) {
    ZipMismatchMode[ZipMismatchMode["FAIL"] = 0] = "FAIL";
    ZipMismatchMode[ZipMismatchMode["SHORTEST"] = 1] = "SHORTEST";
    ZipMismatchMode[ZipMismatchMode["LONGEST"] = 2] = "LONGEST"; // use nulls for exhausted streams; use up the longest stream.
})(ZipMismatchMode = exports.ZipMismatchMode || (exports.ZipMismatchMode = {}));
/**
 * Provides a `LazyIterator` that zips together an array, dict, or nested
 * structure of `LazyIterator`s (and perhaps additional constants).
 *
 * The underlying streams must provide elements in a consistent order such
 * that they correspond.
 *
 * Typically, the underlying streams should have the same number of
 * elements. If they do not, the behavior is determined by the
 * `mismatchMode` argument.
 *
 * The nested structure of the `iterators` argument determines the
 * structure of elements in the resulting iterator.
 *
 * Doing this in a concurrency-safe way requires some trickery.  In
 * particular, we want this stream to return the elements from the
 * underlying streams in the correct order according to when next() was
 * called, even if the resulting Promises resolve in a different order.
 *
 * @param iterators: An array or object containing LazyIterators at the
 * leaves.
 * @param mismatchMode: Determines what to do when one underlying iterator
 * is exhausted before the others.  `ZipMismatchMode.FAIL` (the default)
 * causes an error to be thrown in this case.  `ZipMismatchMode.SHORTEST`
 * causes the zipped iterator to terminate with the furst underlying
 * streams, so elements remaining on the longer streams are ignored.
 * `ZipMismatchMode.LONGEST` causes the zipped stream to continue, filling
 * in nulls for the exhausted streams, until all streams are exhausted.
 */
var ZipIterator = /** @class */ (function (_super) {
    __extends(ZipIterator, _super);
    function ZipIterator(iterators, mismatchMode) {
        if (mismatchMode === void 0) { mismatchMode = ZipMismatchMode.FAIL; }
        var _this = _super.call(this) || this;
        _this.iterators = iterators;
        _this.mismatchMode = mismatchMode;
        _this.count = 0;
        _this.currentPromise = null;
        return _this;
    }
    ZipIterator.prototype.summary = function () {
        var upstreamSummaries = 'TODO: fill in upstream of zip summaries';
        return "{" + upstreamSummaries + "} -> Zip";
    };
    ZipIterator.prototype.nextState = function (afterState) {
        return __awaiter(this, void 0, void 0, function () {
            function getNext(container) {
                if (container instanceof LazyIterator) {
                    var result = container.next();
                    return {
                        value: result.then(function (x) {
                            numIterators++;
                            if (x.done) {
                                iteratorsDone++;
                            }
                            return x.value;
                        }),
                        recurse: false
                    };
                }
                else {
                    return { value: null, recurse: true };
                }
            }
            var numIterators, iteratorsDone, mapped;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // This chaining ensures that the underlying next() are not even called
                    // before the previous ones have resolved.
                    return [4 /*yield*/, afterState];
                    case 1:
                        // This chaining ensures that the underlying next() are not even called
                        // before the previous ones have resolved.
                        _a.sent();
                        numIterators = 0;
                        iteratorsDone = 0;
                        return [4 /*yield*/, deep_map_1.deepMapAndAwaitAll(this.iterators, getNext)];
                    case 2:
                        mapped = _a.sent();
                        if (numIterators === iteratorsDone) {
                            // The streams have all ended.
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        if (iteratorsDone > 0) {
                            switch (this.mismatchMode) {
                                case ZipMismatchMode.FAIL:
                                    throw new Error('Zipped streams should have the same length. ' +
                                        ("Mismatched at element " + this.count + "."));
                                case ZipMismatchMode.SHORTEST:
                                    return [2 /*return*/, { value: null, done: true }];
                                case ZipMismatchMode.LONGEST:
                                default:
                                // Continue.  The exhausted streams already produced value: null.
                            }
                        }
                        this.count++;
                        return [2 /*return*/, { value: mapped, done: false }];
                }
            });
        });
    };
    ZipIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentPromise = this.nextState(this.currentPromise);
                        return [4 /*yield*/, this.currentPromise];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    return ZipIterator;
}(LazyIterator));
// Iterators that maintain a ring buffer of pending promises
// ============================================================================
/**
 * A stream that prefetches a given number of items from an upstream source,
 * returning them in FIFO order.
 *
 * Note this prefetches Promises, but makes no guarantees about when those
 * Promises resolve.
 */
var PrefetchIterator = /** @class */ (function (_super) {
    __extends(PrefetchIterator, _super);
    function PrefetchIterator(upstream, bufferSize) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.bufferSize = bufferSize;
        _this.buffer = new ring_buffer_1.RingBuffer(bufferSize);
        return _this;
    }
    PrefetchIterator.prototype.summary = function () {
        return this.upstream.summary() + " -> Prefetch";
    };
    /**
     * Refill the prefetch buffer.  Returns only after the buffer is full, or
     * the upstream source is exhausted.
     */
    PrefetchIterator.prototype.refill = function () {
        while (!this.buffer.isFull()) {
            var v = this.upstream.next();
            this.buffer.push(v);
        }
    };
    PrefetchIterator.prototype.next = function () {
        this.refill();
        // This shift will never throw an error because the buffer is always
        // full after a refill. If the stream is exhausted, the buffer will be
        // full of Promises that will resolve to the end-of-stream signal.
        return this.buffer.shift();
    };
    return PrefetchIterator;
}(LazyIterator));
exports.PrefetchIterator = PrefetchIterator;
/**
 * A stream that performs a sliding-window random shuffle on an upstream
 * source. This is like a `PrefetchIterator` except that the items are
 * returned in randomized order.  Mixing naturally improves as the buffer
 * size increases.
 */
var ShuffleIterator = /** @class */ (function (_super) {
    __extends(ShuffleIterator, _super);
    function ShuffleIterator(upstream, windowSize, seed) {
        var _this = _super.call(this, upstream, windowSize) || this;
        _this.upstream = upstream;
        _this.windowSize = windowSize;
        // Local state that should not be clobbered by out-of-order execution.
        _this.upstreamExhausted = false;
        _this.random = seedrandom.alea(seed || tf.util.now().toString());
        _this.lastRead = Promise.resolve({ value: null, done: false });
        return _this;
    }
    ShuffleIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // This sets this.lastRead to a new Promise right away, as opposed to
                // saying `await this.lastRead; this.lastRead = this.serialNext();` which
                // would not work because this.nextRead would be updated only after the
                // promise resolves.
                this.lastRead = this.lastRead.then(function () { return _this.serialNext(); });
                return [2 /*return*/, this.lastRead];
            });
        });
    };
    ShuffleIterator.prototype.randomInt = function (max) {
        return Math.floor(this.random() * max);
    };
    ShuffleIterator.prototype.chooseIndex = function () {
        return this.randomInt(this.buffer.length());
    };
    ShuffleIterator.prototype.serialNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chosenIndex, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // TODO(soergel): consider performance
                        if (!this.upstreamExhausted) {
                            this.refill();
                        }
                        _a.label = 1;
                    case 1:
                        if (!!this.buffer.isEmpty()) return [3 /*break*/, 3];
                        chosenIndex = this.chooseIndex();
                        return [4 /*yield*/, this.buffer.shuffleExcise(chosenIndex)];
                    case 2:
                        result = _a.sent();
                        if (result.done) {
                            this.upstreamExhausted = true;
                        }
                        else {
                            this.refill();
                            return [2 /*return*/, result];
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, { value: null, done: true }];
                }
            });
        });
    };
    return ShuffleIterator;
}(PrefetchIterator));
exports.ShuffleIterator = ShuffleIterator;
//# sourceMappingURL=lazy_iterator.js.map
}, function(modId) { var map = {"../util/deep_map":1553811080211,"../util/growing_ring_buffer":1553811080212,"../util/ring_buffer":1553811080213}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080211, function(require, module, exports) {
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
 *
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
var tf = require("@tensorflow/tfjs-core");
/**
 * Apply a mapping function to a nested structure in a recursive manner.
 *
 * The result of the mapping is an object with the same nested structure (i.e.,
 * of arrays and dicts) as the input, except that some subtrees are replaced,
 * according to the results of the mapping function.
 *
 * Mappings are memoized.  Thus, if the nested structure contains the same
 * object in multiple positions, the output will contain the same mapped object
 * in those positions.  Cycles are not supported, however.
 *
 * @param input: The object to which to apply the mapping function.
 * @param mapFn: A function that expects a single node of the object tree, and
 *   returns a `DeepMapResult`.  The `DeepMapResult` either provides a
 *   replacement value for that node (i.e., replacing the subtree), or indicates
 *   that the node should be processed recursively.
 */
function deepMap(input, mapFn) {
    return deepMapInternal(input, mapFn);
}
exports.deepMap = deepMap;
/**
 * @param seen: A Map of known object mappings (i.e., memoized results of
 *   `mapFn()`)
 * @param containedIn: An set containing objects on the reference path currently
 *   being processed (used to detect cycles).
 */
function deepMapInternal(input, mapFn, seen, containedIn) {
    if (seen === void 0) { seen = new Map(); }
    if (containedIn === void 0) { containedIn = new Set(); }
    if (input == null) {
        return null;
    }
    if (containedIn.has(input)) {
        throw new Error('Circular references are not supported.');
    }
    if (seen.has(input)) {
        return seen.get(input);
    }
    var result = mapFn(input);
    if (result.recurse && result.value !== null) {
        throw new Error('A deep map function may not return both a value and recurse=true.');
    }
    if (!result.recurse) {
        seen.set(input, result.value);
        return result.value;
    }
    else if (isIterable(input)) {
        // tslint:disable-next-line:no-any
        var mappedIterable = Array.isArray(input) ? [] : {};
        containedIn.add(input);
        for (var k in input) {
            var child = input[k];
            var childResult = deepMapInternal(child, mapFn, seen, containedIn);
            mappedIterable[k] = childResult;
        }
        containedIn.delete(input);
        return mappedIterable;
    }
    else {
        throw new Error("Can't recurse into non-iterable type: " + input);
    }
}
// TODO(soergel, kangyizhang) Reconsider naming of deepZip() to avoid confusion
// with zip()
/**
 * Zip nested structures together in a recursive manner.
 *
 * This has the effect of transposing or pivoting data, e.g. converting it from
 * a row-major representation to a column-major representation.
 *
 * For example, `deepZip([{a: 1, b: 2}, {a: 3, b: 4}])` returns
 * `{a: [1, 3], b: [2, 4]}`.
 *
 * The inputs should all have the same nested structure (i.e., of arrays and
 * dicts).  The result is a single object with the same nested structure, where
 * the leaves are arrays collecting the values of the inputs at that location
 * (or, optionally, the result of a custom function applied to those arrays).
 *
 * @param inputs: An array of the objects to zip together.
 * @param zipFn: (optional) A function that expects an array of elements at a
 *   single node of the object tree, and returns a `DeepMapResult`.  The
 *   `DeepMapResult` either provides a result value for that node (i.e.,
 *   representing the subtree), or indicates that the node should be processed
 *   recursively.  The default zipFn recurses as far as possible and places
 *   arrays at the leaves.
 */
function deepZip(inputs, zipFn) {
    if (zipFn === void 0) { zipFn = zipToList; }
    return deepZipInternal(inputs, zipFn);
}
exports.deepZip = deepZip;
/**
 * @param containedIn: An set containing objects on the reference path currently
 *   being processed (used to detect cycles).
 */
function deepZipInternal(inputs, zipFn, containedIn) {
    if (containedIn === void 0) { containedIn = new Set(); }
    // The recursion follows the structure of input 0; it's assumed that all the
    // other inputs have the same structure.
    var input = inputs[0];
    if (containedIn.has(input)) {
        throw new Error('Circular references are not supported.');
    }
    var result = zipFn(inputs);
    if (result.recurse && result.value !== null) {
        throw new Error('A deep zip function may not return both a value and recurse=true.');
    }
    if (!result.recurse) {
        return result.value;
    }
    else if (isIterable(input)) {
        // tslint:disable-next-line:no-any
        var mappedIterable = Array.isArray(input) ? [] : {};
        containedIn.add(input);
        var _loop_1 = function (k) {
            var children = inputs.map(function (x) { return x[k]; });
            var childResult = deepZipInternal(children, zipFn, containedIn);
            mappedIterable[k] = childResult;
        };
        for (var k in input) {
            _loop_1(k);
        }
        containedIn.delete(input);
        return mappedIterable;
    }
    else {
        throw new Error("Can't recurse into non-iterable type: " + input);
    }
}
// tslint:disable-next-line:no-any
function zipToList(x) {
    if (x === null) {
        return null;
    }
    // TODO(soergel): validate array type?
    if (isIterable(x[0])) {
        return { value: null, recurse: true };
    }
    else {
        return { value: x, recurse: false };
    }
}
exports.zipToList = zipToList;
/**
 * Apply an async mapping function to a nested structure in a recursive manner.
 *
 * This first creates a nested structure of Promises, and then awaits all of
 * those, resulting in a single Promise for a resolved nested structure.
 *
 * The result of the mapping is an object with the same nested structure (i.e.,
 * of arrays and dicts) as the input, except that some subtrees are replaced,
 * according to the results of the mapping function.
 *
 * Mappings are memoized.  Thus, if the nested structure contains the same
 * object in multiple positions, the output will contain the same mapped object
 * in those positions.  Cycles are not supported, however.
 *
 * @param input: The object to which to apply the mapping function.
 * @param mapFn: A function that expects a single node of the object tree, and
 *   returns a `DeepMapAsyncResult`.  The `DeepMapAsyncResult` either provides
 *   a `Promise` for a replacement value for that node (i.e., replacing the
 *   subtree), or indicates that the node should be processed recursively.  Note
 *   that the decision whether or not to recurse must be made immediately; only
 *   the mapped value may be promised.
 */
function deepMapAndAwaitAll(input, mapFn) {
    return __awaiter(this, void 0, void 0, function () {
        var seen, _i, _a, key, value, mappedValue, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    seen = new Map();
                    // First do a normal deepMap, collecting Promises in 'seen' as a side effect.
                    deepMapInternal(input, mapFn, seen);
                    _i = 0, _a = Array.from(seen.keys());
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    key = _a[_i];
                    value = seen.get(key);
                    if (!(value instanceof Promise)) return [3 /*break*/, 3];
                    return [4 /*yield*/, value];
                case 2:
                    mappedValue = _b.sent();
                    seen.set(key, mappedValue);
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    result = deepMapInternal(input, mapFn, seen);
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.deepMapAndAwaitAll = deepMapAndAwaitAll;
/**
 * Determine whether the argument is iterable.
 *
 * @returns true if the argument is an array or any non-Tensor object.
 */
// tslint:disable-next-line:no-any
function isIterable(obj) {
    return obj != null &&
        (Array.isArray(obj) ||
            (typeof obj === 'object' && !(obj instanceof tf.Tensor)));
}
exports.isIterable = isIterable;
/**
 * Determine whether the argument can be converted to Tensor.
 *
 * Tensors, primitives, arrays, and TypedArrays all qualify; anything else does
 * not.
 *
 * @returns true if the argument can be converted to Tensor.
 */
// tslint:disable-next-line:no-any
function canTensorify(obj) {
    return obj == null || isPrimitive(obj) || Array.isArray(obj) ||
        (typeof obj === 'object' && (obj instanceof tf.Tensor)) ||
        tf.util.isTypedArray(obj);
}
exports.canTensorify = canTensorify;
/**
 * Returns true if the given `value` is a primitive type. Otherwise returns
 * false. This is equivalant to node util.isPrimitive
 */
function isPrimitive(value) {
    return ((typeof value !== 'object' && typeof value !== 'function') ||
        value === null);
}
//# sourceMappingURL=deep_map.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080212, function(require, module, exports) {
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
 *
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
var ring_buffer_1 = require("./ring_buffer");
var GrowingRingBuffer = /** @class */ (function (_super) {
    __extends(GrowingRingBuffer, _super);
    /**
     * Constructs a `GrowingRingBuffer`.
     */
    function GrowingRingBuffer() {
        return _super.call(this, GrowingRingBuffer.INITIAL_CAPACITY) || this;
    }
    GrowingRingBuffer.prototype.isFull = function () {
        return false;
    };
    GrowingRingBuffer.prototype.push = function (value) {
        if (_super.prototype.isFull.call(this)) {
            this.expand();
        }
        _super.prototype.push.call(this, value);
    };
    GrowingRingBuffer.prototype.unshift = function (value) {
        if (_super.prototype.isFull.call(this)) {
            this.expand();
        }
        _super.prototype.unshift.call(this, value);
    };
    /**
     * Doubles the capacity of the buffer.
     */
    GrowingRingBuffer.prototype.expand = function () {
        var newCapacity = this.capacity * 2;
        var newData = new Array(newCapacity);
        var len = this.length();
        // Rotate the buffer to start at index 0 again, since we can't just
        // allocate more space at the end.
        for (var i = 0; i < len; i++) {
            newData[i] = this.get(this.wrap(this.begin + i));
        }
        this.data = newData;
        this.capacity = newCapacity;
        this.doubledCapacity = 2 * this.capacity;
        this.begin = 0;
        this.end = len;
    };
    GrowingRingBuffer.INITIAL_CAPACITY = 32;
    return GrowingRingBuffer;
}(ring_buffer_1.RingBuffer));
exports.GrowingRingBuffer = GrowingRingBuffer;
//# sourceMappingURL=growing_ring_buffer.js.map
}, function(modId) { var map = {"./ring_buffer":1553811080213}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080213, function(require, module, exports) {
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
 *
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A ring buffer, providing O(1) FIFO, LIFO, and related operations.
 */
var RingBuffer = /** @class */ (function () {
    /**
     * Constructs a `RingBuffer`.
     * @param capacity The number of items that the buffer can accomodate.
     */
    function RingBuffer(capacity) {
        this.capacity = capacity;
        // Note we store the indices in the range 0 <= index < 2*capacity.
        // This allows us to distinguish the full from the empty case.
        // See https://www.snellman.net/blog/archive/2016-12-13-ring-buffers/
        this.begin = 0; // inclusive
        this.end = 0; // exclusive
        if (capacity == null) {
            throw new RangeError('Can\'t create a ring buffer of unknown capacity.');
        }
        if (capacity < 1) {
            throw new RangeError('Can\'t create ring buffer of capacity < 1.');
        }
        this.data = new Array(capacity);
        this.doubledCapacity = 2 * capacity;
    }
    /**
     * Map any index into the range 0 <= index < 2*capacity.
     */
    RingBuffer.prototype.wrap = function (index) {
        // don't trust % on negative numbers
        while (index < 0) {
            index += this.doubledCapacity;
        }
        return index % this.doubledCapacity;
    };
    RingBuffer.prototype.get = function (index) {
        if (index < 0) {
            throw new RangeError('Can\'t get item at a negative index.');
        }
        return this.data[index % this.capacity];
    };
    RingBuffer.prototype.set = function (index, value) {
        if (index < 0) {
            throw new RangeError('Can\'t set item at a negative index.');
        }
        this.data[index % this.capacity] = value;
    };
    /**
     * Returns the current number of items in the buffer.
     */
    RingBuffer.prototype.length = function () {
        var length = this.end - this.begin;
        if (length < 0) {
            length = this.doubledCapacity + length;
        }
        return length;
    };
    /**
     * Reports whether the buffer is full.
     * @returns true if the number of items in the buffer equals its capacity, and
     *   false otherwise.
     */
    RingBuffer.prototype.isFull = function () {
        return this.length() === this.capacity;
    };
    /**
     * Reports whether the buffer is empty.
     * @returns true if the number of items in the buffer equals zero, and
     *   false otherwise.
     */
    RingBuffer.prototype.isEmpty = function () {
        return this.length() === 0;
    };
    /**
     * Adds an item to the end of the buffer.
     */
    RingBuffer.prototype.push = function (value) {
        if (this.isFull()) {
            throw new RangeError('Ring buffer is full.');
        }
        this.set(this.end, value);
        this.end = this.wrap(this.end + 1);
    };
    /**
     * Adds many items to the end of the buffer, in order.
     */
    RingBuffer.prototype.pushAll = function (values) {
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            this.push(value);
        }
    };
    /**
     * Removes and returns the last item in the buffer.
     */
    RingBuffer.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new RangeError('Ring buffer is empty.');
        }
        this.end = this.wrap(this.end - 1);
        var result = this.get(this.end);
        this.set(this.end, undefined);
        return result;
    };
    /**
     * Adds an item to the beginning of the buffer.
     */
    RingBuffer.prototype.unshift = function (value) {
        if (this.isFull()) {
            throw new RangeError('Ring buffer is full.');
        }
        this.begin = this.wrap(this.begin - 1);
        this.set(this.begin, value);
    };
    /**
     * Removes and returns the first item in the buffer.
     */
    RingBuffer.prototype.shift = function () {
        if (this.isEmpty()) {
            throw new RangeError('Ring buffer is empty.');
        }
        var result = this.get(this.begin);
        this.set(this.begin, undefined);
        this.begin = this.wrap(this.begin + 1);
        return result;
    };
    /**
     * Removes and returns a specific item in the buffer, and moves the last item
     * to the vacated slot.  This is useful for implementing a shuffling stream.
     * Note that this operation necessarily scrambles the original order.
     *
     * @param relativeIndex: the index of the item to remove, relative to the
     *   first item in the buffer (e.g., hiding the ring nature of the underlying
     *   storage).
     */
    RingBuffer.prototype.shuffleExcise = function (relativeIndex) {
        if (this.isEmpty()) {
            throw new RangeError('Ring buffer is empty.');
        }
        var index = this.wrap(this.begin + relativeIndex);
        var result = this.get(index);
        this.set(index, this.pop());
        return result;
    };
    return RingBuffer;
}());
exports.RingBuffer = RingBuffer;
//# sourceMappingURL=ring_buffer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080214, function(require, module, exports) {
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
 *
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
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var dataset_1 = require("../dataset");
var text_line_dataset_1 = require("./text_line_dataset");
var CODE_QUOTE = '"';
var STATE_OUT = Symbol('out');
var STATE_FIELD = Symbol('field');
var STATE_QUOTE = Symbol('quote');
var STATE_QUOTE_AFTER_QUOTE = Symbol('quoteafterquote');
var STATE_WITHIN_QUOTE_IN_QUOTE = Symbol('quoteinquote');
/**
 * Represents a potentially large collection of delimited text records.
 *
 * The produced `DataElement`s each contain one key-value pair for
 * every column of the table.  When a field is empty in the incoming data, the
 * resulting value is `undefined`, or throw error if it is required.  Values
 * that can be parsed as numbers are emitted as type `number`, other values
 * are parsed as `string`.
 *
 * The results are not batched.
 */
/** @doc {heading: 'Data', subheading: 'Classes', namespace: 'data'} */
var CSVDataset = /** @class */ (function (_super) {
    __extends(CSVDataset, _super);
    /**
     * Create a `CSVDataset`.
     *
     * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
     * @param csvConfig (Optional) A CSVConfig object that contains configurations
     *     of reading and decoding from CSV file(s).
     *
     *     hasHeader: (Optional) A boolean value that indicates whether the first
     *     row of provided CSV file is a header line with column names, and should
     *     not be included in the data. Defaults to `true`.
     *
     *     columnNames: (Optional) A list of strings that corresponds to
     *     the CSV column names, in order. If provided, it ignores the column
     *     names inferred from the header row. If not provided, infers the column
     *     names from the first row of the records. If hasHeader is false and
     *     columnNames is not provided, this method throws an error.
     *
     *     columnConfigs: (Optional) A dictionary whose key is column names, value
     *     is an object stating if this column is required, column's data type,
     *     default value, and if this column is label. If provided, keys must
     *     correspond to names provided in columnNames or inferred from the file
     *     header lines. If isLabel is true any column, returns an array of two
     *     items: the first item is a dict of features key/value pairs, the second
     *     item is a dict of labels key/value pairs. If no feature is marked as
     *     label, returns a dict of features only.
     *
     *     configuredColumnsOnly (Optional) If true, only columns provided in
     *     columnConfigs will be parsed and provided during iteration.
     *
     *     delimiter (Optional) The string used to parse each line of the input
     *     file. Defaults to `,`.
     */
    function CSVDataset(input, csvConfig) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.hasHeader = true;
        _this.fullColumnNames = null;
        _this.columnNamesValidated = false;
        _this.columnConfigs = null;
        _this.configuredColumnsOnly = false;
        _this.delimiter = ',';
        _this.base = new text_line_dataset_1.TextLineDataset(input);
        if (!csvConfig) {
            csvConfig = {};
        }
        _this.hasHeader = csvConfig.hasHeader === false ? false : true;
        _this.fullColumnNames = csvConfig.columnNames;
        _this.columnConfigs = csvConfig.columnConfigs;
        _this.configuredColumnsOnly = csvConfig.configuredColumnsOnly;
        _this.delimiter = csvConfig.delimiter ? csvConfig.delimiter : ',';
        return _this;
    }
    /**
     * Returns column names of the csv dataset. If `configuredColumnsOnly` is
     * true, return column names in `columnConfigs`. If `configuredColumnsOnly` is
     * false and `columnNames` is provided, `columnNames`. If
     * `configuredColumnsOnly` is false and `columnNames` is not provided, return
     * all column names parsed from the csv file. For example usage please go to
     * `tf.data.csv`.
     */
    /** @doc {heading: 'Data', subheading: 'Classes'} */
    CSVDataset.prototype.columnNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.columnNamesValidated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setColumnNames()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.configuredColumnsOnly ? Object.keys(this.columnConfigs) :
                            this.fullColumnNames];
                }
            });
        });
    };
    /* 1) If `columnNames` is provided as string[], use this string[] as output
     * keys in corresponding order. The length must match the number of inferred
     * columns if `hasHeader` is true .
     * 2) If `columnNames` is not provided, parse header line as `columnNames` if
     * hasHeader is true. If `hasHeader` is false, throw an error.
     * 3) If `columnConfigs` is provided, all the keys in `columnConfigs` must
     * exist in parsed `columnNames`.
     */
    CSVDataset.prototype.setColumnNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var columnNamesFromFile, counts, duplicateNames, _i, _a, key, index;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.maybeReadHeaderLine()];
                    case 1:
                        columnNamesFromFile = _b.sent();
                        if (!this.fullColumnNames && !columnNamesFromFile) {
                            // Throw an error if columnNames is not provided and no header line.
                            throw new Error('Column names must be provided if there is no header line.');
                        }
                        else if (this.fullColumnNames && columnNamesFromFile) {
                            // Check provided columnNames match header line.
                            tfjs_core_1.util.assert(columnNamesFromFile.length === this.fullColumnNames.length, function () { return 'The length of provided columnNames (' +
                                _this.fullColumnNames.length.toString() +
                                ') does not match the length of the header line read from ' +
                                'file (' + columnNamesFromFile.length.toString() + ').'; });
                        }
                        if (!this.fullColumnNames) {
                            this.fullColumnNames = columnNamesFromFile;
                        }
                        counts = this.fullColumnNames.reduce(function (countAcc, name) {
                            countAcc[name] = (countAcc[name] + 1) || 1;
                            return countAcc;
                        }, {});
                        duplicateNames = Object.keys(counts).filter(function (name) { return (counts[name] > 1); });
                        tfjs_core_1.util.assert(duplicateNames.length === 0, function () { return 'Duplicate column names found: ' + duplicateNames.toString(); });
                        // Check if keys in columnConfigs match columnNames.
                        if (this.columnConfigs) {
                            for (_i = 0, _a = Object.keys(this.columnConfigs); _i < _a.length; _i++) {
                                key = _a[_i];
                                index = this.fullColumnNames.indexOf(key);
                                if (index === -1) {
                                    throw new Error('The key "' + key +
                                        '" provided in columnConfigs does not match any of the column ' +
                                        'names (' + this.fullColumnNames.toString() + ').');
                                }
                            }
                        }
                        this.columnNamesValidated = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    CSVDataset.prototype.maybeReadHeaderLine = function () {
        return __awaiter(this, void 0, void 0, function () {
            var iter, firstElement, firstLine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasHeader) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.base.iterator()];
                    case 1:
                        iter = _a.sent();
                        return [4 /*yield*/, iter.next()];
                    case 2:
                        firstElement = _a.sent();
                        if (firstElement.done) {
                            throw new Error('No data was found for CSV parsing.');
                        }
                        firstLine = firstElement.value;
                        return [2 /*return*/, firstLine.split(this.delimiter)];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    CSVDataset.prototype.iterator = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lines;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.columnNamesValidated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setColumnNames()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.base.iterator()];
                    case 3:
                        lines = _a.sent();
                        if (this.hasHeader) {
                            // We previously read the first line to get the columnNames.
                            // Now that we're providing data, skip it.
                            lines = lines.skip(1);
                        }
                        return [2 /*return*/, lines.map(function (x) { return _this.makeDataElement(x); })];
                }
            });
        });
    };
    CSVDataset.prototype.makeDataElement = function (line) {
        var values = this.parseRow(line);
        var features = {};
        var labels = {};
        for (var i = 0; i < this.fullColumnNames.length; i++) {
            var key = this.fullColumnNames[i];
            var config = this.columnConfigs ? this.columnConfigs[key] : null;
            if (this.configuredColumnsOnly && !config) {
                // This column is not selected.
                continue;
            }
            else {
                var value = values[i];
                var parsedValue = null;
                if (value === '') {
                    // If default value is provided, use it. If default value is not
                    // provided, set as undefined.
                    if (config && config.default !== undefined) {
                        parsedValue = config.default;
                    }
                    else if (config && (config.required || config.isLabel)) {
                        throw new Error("Required column " + key + " is empty in this line: " + line);
                    }
                    else {
                        parsedValue = undefined;
                    }
                }
                else {
                    // A value is present, so parse it based on type
                    var valueAsNum = Number(value);
                    if (isNaN(valueAsNum)) {
                        // The value is a string and this column is declared as boolean
                        // in config, parse it as boolean.
                        if (config && config.dtype === 'bool') {
                            parsedValue = this.getBoolean(value);
                        }
                        else {
                            // Set value as string
                            parsedValue = value;
                        }
                    }
                    else if (!config || !config.dtype) {
                        // If this value is a number and no type config is provided, return
                        // it as number.
                        parsedValue = valueAsNum;
                    }
                    else {
                        // If this value is a number and data type is provided, parse it
                        // according to provided data type.
                        switch (config.dtype) {
                            case 'float32':
                                parsedValue = valueAsNum;
                                break;
                            case 'int32':
                                parsedValue = Math.floor(valueAsNum);
                                break;
                            case 'bool':
                                parsedValue = this.getBoolean(value);
                                break;
                            default:
                                parsedValue = valueAsNum;
                        }
                    }
                }
                // Check if this column is label.
                (config && config.isLabel) ? labels[key] = parsedValue :
                    features[key] = parsedValue;
            }
        }
        // If label exists, return an object of features and labels as {xs:features,
        // ys:labels}, otherwise return features only.
        if (Object.keys(labels).length === 0) {
            return features;
        }
        else {
            return { xs: features, ys: labels };
        }
    };
    CSVDataset.prototype.getBoolean = function (value) {
        if (value === '1' || value.toLowerCase() === 'true') {
            return 1;
        }
        else {
            return 0;
        }
    };
    // adapted from https://beta.observablehq.com/@mbostock/streaming-csv
    CSVDataset.prototype.parseRow = function (line) {
        var result = [];
        var readOffset = 0;
        var readLength = line.length;
        var currentState = STATE_FIELD;
        // Goes through the line to parse quote.
        for (var i = 0; i < readLength; i++) {
            switch (currentState) {
                // Before enter a new field
                case STATE_OUT:
                    switch (line.charAt(i)) {
                        // Enter a quoted field
                        case CODE_QUOTE:
                            readOffset = i + 1;
                            currentState = STATE_QUOTE;
                            break;
                        // Read an empty field
                        case this.delimiter:
                            result.push('');
                            currentState = STATE_OUT;
                            readOffset = i + 1;
                            break;
                        // Enter an unquoted field
                        default:
                            currentState = STATE_FIELD;
                            readOffset = i;
                            break;
                    }
                    break;
                // In an unquoted field
                case STATE_FIELD:
                    switch (line.charAt(i)) {
                        // Exit an unquoted field, add it to result
                        case this.delimiter:
                            result.push(line.substring(readOffset, i));
                            currentState = STATE_OUT;
                            readOffset = i + 1;
                            break;
                        default:
                    }
                    break;
                // In a quoted field
                case STATE_QUOTE:
                    switch (line.charAt(i)) {
                        // Read a quote after a quote
                        case CODE_QUOTE:
                            currentState = STATE_QUOTE_AFTER_QUOTE;
                            break;
                        default:
                    }
                    break;
                // This state means it's right after a second quote in a field
                case STATE_QUOTE_AFTER_QUOTE:
                    switch (line.charAt(i)) {
                        // Finished a quoted field
                        case this.delimiter:
                            result.push(line.substring(readOffset, i - 1));
                            currentState = STATE_OUT;
                            readOffset = i + 1;
                            break;
                        // Finished a quoted part in a quoted field
                        case CODE_QUOTE:
                            currentState = STATE_QUOTE;
                            break;
                        // In a quoted part in a quoted field
                        default:
                            currentState = STATE_WITHIN_QUOTE_IN_QUOTE;
                            break;
                    }
                    break;
                case STATE_WITHIN_QUOTE_IN_QUOTE:
                    switch (line.charAt(i)) {
                        // Exit a quoted part in a quoted field
                        case CODE_QUOTE:
                            currentState = STATE_QUOTE;
                            break;
                        default:
                    }
                    break;
                default:
            }
        }
        // Adds last item based on if it is quoted.
        if (currentState === STATE_QUOTE_AFTER_QUOTE) {
            result.push(line.substring(readOffset, readLength - 1));
        }
        else {
            result.push(line.substring(readOffset));
        }
        return result;
    };
    return CSVDataset;
}(dataset_1.Dataset));
exports.CSVDataset = CSVDataset;
// TODO(soergel): add more basic datasets for parity with tf.data
// tf.data.FixedLengthRecordDataset()
// tf.data.TFRecordDataset()
//# sourceMappingURL=csv_dataset.js.map
}, function(modId) { var map = {"../dataset":1553811080209,"./text_line_dataset":1553811080215}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080215, function(require, module, exports) {
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
 *
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
var dataset_1 = require("../dataset");
/**
 * Represents a potentially large collection of text lines.
 *
 * The results are not batched.
 */
var TextLineDataset = /** @class */ (function (_super) {
    __extends(TextLineDataset, _super);
    /**
     * Create a `TextLineDataset`.
     *
     * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
     */
    function TextLineDataset(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    TextLineDataset.prototype.iterator = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inputIterator, utf8Iterator, lineIterator;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.input.iterator()];
                    case 1:
                        inputIterator = _a.sent();
                        utf8Iterator = inputIterator.decodeUTF8();
                        lineIterator = utf8Iterator.split('\n');
                        return [2 /*return*/, lineIterator];
                }
            });
        });
    };
    return TextLineDataset;
}(dataset_1.Dataset));
exports.TextLineDataset = TextLineDataset;
//# sourceMappingURL=text_line_dataset.js.map
}, function(modId) { var map = {"../dataset":1553811080209}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080216, function(require, module, exports) {
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
 *
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
var dataset_1 = require("./dataset");
var csv_dataset_1 = require("./datasets/csv_dataset");
var lazy_iterator_1 = require("./iterators/lazy_iterator");
var url_data_source_1 = require("./sources/url_data_source");
/**
 * Create a `CSVDataset` by reading and decoding CSV file(s) from provided URL
 * or local path if it's in Node environment.
 *
 * Note: If isLabel in columnConfigs is `true` for at least one column, the
 * element in returned `CSVDataset` will be an object of
 * `{xs:features, ys:labels}`: xs is a dict of features key/value pairs, ys
 * is a dict of labels key/value pairs. If no column is marked as label,
 * returns a dict of features only.
 *
 * ```js
 * const csvUrl =
 * 'https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/boston-housing-train.csv';
 *
 * async function run() {
 *   // We want to predict the column "medv", which represents a median value of
 *   // a home (in $1000s), so we mark it as a label.
 *   const csvDataset = tf.data.csv(
 *     csvUrl, {
 *       columnConfigs: {
 *         medv: {
 *           isLabel: true
 *         }
 *       }
 *     });
 *
 *   // Number of features is the number of column names minus one for the label
 *   // column.
 *   const numOfFeatures = (await csvDataset.columnNames()).length - 1;
 *
 *   // Prepare the Dataset for training.
 *   const flattenedDataset =
 *     csvDataset
 *     .map(({xs, ys}) =>
 *       {
 *         // Convert xs(features) and ys(labels) from object form (keyed by
 *         // column name) to array form.
 *         return {xs:Object.values(xs), ys:Object.values(ys)};
 *       })
 *     .batch(10);
 *
 *   // Define the model.
 *   const model = tf.sequential();
 *   model.add(tf.layers.dense({
 *     inputShape: [numOfFeatures],
 *     units: 1
 *   }));
 *   model.compile({
 *     optimizer: tf.train.sgd(0.000001),
 *     loss: 'meanSquaredError'
 *   });
 *
 *   // Fit the model using the prepared Dataset
 *   return model.fitDataset(flattenedDataset, {
 *     epochs: 10,
 *     callbacks: {
 *       onEpochEnd: async (epoch, logs) => {
 *         console.log(epoch + ':' + logs.loss);
 *       }
 *     }
 *   });
 * }
 *
 * await run();
 * ```
 *
 * @param source URL or local path to get CSV file. If it's a local path, it
 * must have prefix `file://` and it only works in node environment.
 * @param csvConfig (Optional) A CSVConfig object that contains configurations
 *     of reading and decoding from CSV file(s).
 */
/**
 * @doc {
 *   heading: 'Data',
 *   subheading: 'Creation',
 *   namespace: 'data',
 *   configParamIndices: [1]
 *  }
 */
function csv(source, csvConfig) {
    if (csvConfig === void 0) { csvConfig = {}; }
    return new csv_dataset_1.CSVDataset(new url_data_source_1.URLDataSource(source), csvConfig);
}
exports.csv = csv;
/**
 * Create a `Dataset` that produces each element by calling a provided function.
 *
 * Note that repeated iterations over this `Dataset` may produce different
 * results, because the function will be called anew for each element of each
 * iteration.
 *
 * Also, beware that the sequence of calls to this function may be out of order
 * in time with respect to the logical order of the Dataset. This is due to the
 * asynchronous lazy nature of stream processing, and depends on downstream
 * transformations (e.g. .shuffle()). If the provided function is pure, this is
 * no problem, but if it is a closure over a mutable state (e.g., a traversal
 * pointer), then the order of the produced elements may be scrambled.
 *
 * ```js
 * let i = -1;
 * const func = () =>
 *    ++i < 5 ? {value: i, done: false} : {value: null, done: true};
 * const ds = tf.data.func(func);
 * await ds.forEachAsync(e => console.log(e));
 * ```
 *
 * @param f A function that produces one data element on each call.
 */
function func(f) {
    var _this = this;
    var iter = lazy_iterator_1.iteratorFromFunction(f);
    return dataset_1.datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, iter];
    }); }); });
}
exports.func = func;
/**
 * Create a `Dataset` that produces each element from provided JavaScript
 * generator, which is a function*
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_functions),
 * or a function that returns an
 * iterator
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_functions).
 *
 * The returned iterator should have `.next()` function that returns element in
 * format of `{value: DataElement, done:boolean}`.
 *
 * Example of creating a dataset from an iterator factory:
 * ```js
 * function makeIterator() {
 *   const numElements = 10;
 *   let index = 0;
 *
 *   const iterator = {
 *     next: () => {
 *       let result;
 *       if (index < numElements) {
 *         result = {value: index, done: false};
 *         index++;
 *         return result;
 *       }
 *       return {value: index, done: true};
 *     }
 *   };
 *   return iterator;
 * }
 * const ds = tf.data.generator(makeIterator);
 * ds.forEachAsync(e => console.log(e));
 * ```
 *
 * Example of creating a dataset from a generator:
 * ```js
 * function* dataGenerator() {
 *   const numElements = 10;
 *   let index = 0;
 *   while (index < numElements) {
 *     const x = index;
 *     index++;
 *     yield x;
 *   }
 * }
 *
 * const ds = tf.data.generator(dataGenerator);
 * ds.forEachAsync(e => console.log(e));
 * ```
 *
 * @param generator A Javascript generator function that returns a JavaScript
 *     iterator.
 */
/**
 * @doc {
 *   heading: 'Data',
 *   subheading: 'Creation',
 *   namespace: 'data',
 *   configParamIndices: [1]
 *  }
 */
function generator(generator) {
    var _this = this;
    return dataset_1.datasetFromIteratorFn(function () { return __awaiter(_this, void 0, void 0, function () {
        var gen;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generator()];
                case 1:
                    gen = _a.sent();
                    return [2 /*return*/, lazy_iterator_1.iteratorFromFunction(function () { return gen.next(); })];
            }
        });
    }); });
}
exports.generator = generator;
//# sourceMappingURL=readers.js.map
}, function(modId) { var map = {"./dataset":1553811080209,"./datasets/csv_dataset":1553811080214,"./iterators/lazy_iterator":1553811080210,"./sources/url_data_source":1553811080217}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080217, function(require, module, exports) {
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
 *
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
var datasource_1 = require("../datasource");
var url_chunk_iterator_1 = require("../iterators/url_chunk_iterator");
var source_util_1 = require("../util/source_util");
var file_data_source_1 = require("./file_data_source");
/*
 * Represents a URL readable as a stream of binary data chunks.
 */
var URLDataSource = /** @class */ (function (_super) {
    __extends(URLDataSource, _super);
    /**
     * Create a `URLDataSource`.
     *
     * @param url A source URL string, or a `Request` object.
     * @param options Options passed to the underlying `FileChunkIterator`s,
     *   such as {chunksize: 1024}.
     */
    function URLDataSource(url, fileOptions) {
        if (fileOptions === void 0) { fileOptions = {}; }
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.fileOptions = fileOptions;
        return _this;
    }
    // TODO(soergel): provide appropriate caching options.  Currently this
    // will download the URL anew for each call to iterator().  Since we have
    // to treat the downloaded file as a blob/buffer anyway, we may as well retain
    // it-- but that raises GC issues.  Also we may want a persistent disk cache.
    URLDataSource.prototype.iterator = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (source_util_1.isLocalPath(this.url)) {
                    return [2 /*return*/, (new file_data_source_1.FileDataSource(this.url, this.fileOptions))
                            .iterator()];
                }
                else {
                    return [2 /*return*/, url_chunk_iterator_1.urlChunkIterator(this.url, this.fileOptions)];
                }
                return [2 /*return*/];
            });
        });
    };
    return URLDataSource;
}(datasource_1.DataSource));
exports.URLDataSource = URLDataSource;
//# sourceMappingURL=url_data_source.js.map
}, function(modId) { var map = {"../datasource":1553811080218,"../iterators/url_chunk_iterator":1553811080219,"../util/source_util":1553811080223,"./file_data_source":1553811080224}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080218, function(require, module, exports) {
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
 *
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a data source readable as a stream of binary data chunks.
 *
 * Because `Dataset`s can be read repeatedly (via `Dataset.iterator()`), this
 * provides a means to repeatedly create streams from the underlying data
 * sources.
 */
var DataSource = /** @class */ (function () {
    function DataSource() {
    }
    return DataSource;
}());
exports.DataSource = DataSource;
// TODO(soergel): consider convenience factory functions here
// in combination with chainable source->dataset above, e.g.:
// tf.data.url(...).asCsvDataset().shuffle().batch()
//# sourceMappingURL=datasource.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080219, function(require, module, exports) {
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
 *
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
var file_chunk_iterator_1 = require("./file_chunk_iterator");
/**
 * Provide a stream of chunks from a URL.
 *
 * Note this class first downloads the entire file into memory before providing
 * the first element from the stream.  This is because the Fetch API does not
 * yet reliably provide a reader stream for the response body.
 */
function urlChunkIterator(url, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response, blob, nodeFetch, unitArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!tfjs_core_1.ENV.get('IS_BROWSER')) return [3 /*break*/, 5];
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, new file_chunk_iterator_1.FileChunkIterator(blob, options)];
                case 3: throw new Error(response.statusText);
                case 4: return [3 /*break*/, 9];
                case 5:
                    nodeFetch = require('node-fetch');
                    if (typeof url !== 'string') {
                        throw new Error('URL must be a string. Request objects are not supported ' +
                            'in the node.js environment yet.');
                    }
                    return [4 /*yield*/, nodeFetch(url)];
                case 6:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 8];
                    return [4 /*yield*/, response.buffer()];
                case 7:
                    unitArray = _a.sent();
                    return [2 /*return*/, new file_chunk_iterator_1.FileChunkIterator(unitArray, options)];
                case 8: throw new Error(response.statusText);
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.urlChunkIterator = urlChunkIterator;
//# sourceMappingURL=url_chunk_iterator.js.map
}, function(modId) { var map = {"./file_chunk_iterator":1553811080220}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080220, function(require, module, exports) {
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
 *
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
// inspired by https://github.com/maxogden/filereader-stream
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var byte_chunk_iterator_1 = require("./byte_chunk_iterator");
/**
 * Provide a stream of chunks from a File, Blob, or Uint8Array.
 * @param file The source File, Blob or Uint8Array.
 * @param options Optional settings controlling file reading.
 * @returns a lazy Iterator of Uint8Arrays containing sequential chunks of the
 *   input File, Blob or Uint8Array.
 */
var FileChunkIterator = /** @class */ (function (_super) {
    __extends(FileChunkIterator, _super);
    function FileChunkIterator(file, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.file = file;
        _this.options = options;
        tfjs_core_1.util.assert((file instanceof Uint8Array) ||
            (tfjs_core_1.ENV.get('IS_BROWSER') ?
                (file instanceof File || file instanceof Blob) :
                false), function () { return 'FileChunkIterator only supports File, Blob and Uint8Array ' +
            'right now.'; });
        _this.offset = options.offset || 0;
        // default 1MB chunk has tolerable perf on large files
        _this.chunkSize = options.chunkSize || 1024 * 1024;
        return _this;
    }
    FileChunkIterator.prototype.summary = function () {
        return "FileChunks " + this.file;
    };
    FileChunkIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chunk, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.offset >= ((this.file instanceof Uint8Array) ?
                            this.file.byteLength :
                            this.file.size)) {
                            return [2 /*return*/, { value: null, done: true }];
                        }
                        chunk = new Promise(function (resolve, reject) {
                            var end = _this.offset + _this.chunkSize;
                            if (_this.file instanceof Uint8Array) {
                                // Note if end > this.uint8Array.byteLength, we just get a small last
                                // chunk.
                                resolve(new Uint8Array(_this.file.slice(_this.offset, end)));
                            }
                            else {
                                // This branch assumes that this.file type is File or Blob, which
                                // means it is in the browser environment.
                                // TODO(soergel): is this a performance issue?
                                var fileReader_1 = new FileReader();
                                fileReader_1.onload = function (event) {
                                    var data = fileReader_1.result;
                                    // Not sure we can trust the return type of
                                    // FileReader.readAsArrayBuffer See e.g.
                                    // https://github.com/node-file-api/FileReader/issues/2
                                    if (data instanceof ArrayBuffer) {
                                        data = new Uint8Array(data);
                                    }
                                    if (!(data instanceof Uint8Array)) {
                                        return reject(new TypeError('FileReader returned unknown type.'));
                                    }
                                    resolve(data);
                                };
                                fileReader_1.onabort = function (event) {
                                    return reject(new Error('Aborted'));
                                };
                                fileReader_1.onerror = function (event) {
                                    return reject(new Error(event.type));
                                };
                                // TODO(soergel): better handle onabort, onerror
                                // Note if end > this.file.size, we just get a small last chunk.
                                var slice = _this.file.slice(_this.offset, end);
                                // We can't use readAsText here (even if we know the file is text)
                                // because the slice boundary may fall within a multi-byte character.
                                fileReader_1.readAsArrayBuffer(slice);
                            }
                            _this.offset = end;
                        });
                        _a = {};
                        return [4 /*yield*/, chunk];
                    case 1: return [2 /*return*/, (_a.value = (_b.sent()), _a.done = false, _a)];
                }
            });
        });
    };
    return FileChunkIterator;
}(byte_chunk_iterator_1.ByteChunkIterator));
exports.FileChunkIterator = FileChunkIterator;
//# sourceMappingURL=file_chunk_iterator.js.map
}, function(modId) { var map = {"./byte_chunk_iterator":1553811080221}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080221, function(require, module, exports) {
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
 *
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
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var lazy_iterator_1 = require("./lazy_iterator");
var string_iterator_1 = require("./string_iterator");
var ByteChunkIterator = /** @class */ (function (_super) {
    __extends(ByteChunkIterator, _super);
    function ByteChunkIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Decode a stream of UTF8-encoded byte arrays to a stream of strings.
     *
     * The byte arrays producetd from the ByteChunkIterator on which this is
     * called will be interpreted as concatenated.  No assumptions are made about
     * the boundaries of the incoming chunks, so a multi-byte UTF8 encoding of a
     * character may span the boundary between chunks.  This naturally happens,
     * for instance, when reading fixed-size byte arrays from a file.
     */
    ByteChunkIterator.prototype.decodeUTF8 = function () {
        return new Utf8Iterator(this);
    };
    return ByteChunkIterator;
}(lazy_iterator_1.LazyIterator));
exports.ByteChunkIterator = ByteChunkIterator;
// ============================================================================
// The following private classes serve to implement the chainable methods
// on ByteChunkIterator.  Unfortunately they can't be placed in separate files,
// due to resulting trouble with circular imports.
// ============================================================================
// We wanted multiple inheritance, e.g.
//   class Utf8Iterator extends QueueIterator<string>, StringIterator
// but the TypeScript mixin approach is a bit hacky, so we take this adapter
// approach instead.
var Utf8Iterator = /** @class */ (function (_super) {
    __extends(Utf8Iterator, _super);
    function Utf8Iterator(upstream) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.impl = new Utf8IteratorImpl(upstream);
        return _this;
    }
    Utf8Iterator.prototype.summary = function () {
        return this.impl.summary();
    };
    Utf8Iterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.impl.next()];
            });
        });
    };
    return Utf8Iterator;
}(string_iterator_1.StringIterator));
/**
 * Decode a stream of UTF8-encoded byte arrays to a stream of strings.
 *
 * This is tricky because the incoming byte array boundaries may disrupt a
 * multi-byte UTF8 character. Thus any incomplete character data at the end of
 * a chunk must be carried over and prepended to the next chunk before
 * decoding. Luckily with native decoder, TextDecoder in browser and
 * string_decoder in node, byte array boundaries are handled automatically.
 *
 * In the context of an input pipeline for machine learning, UTF8 decoding is
 * needed to parse text files containing training examples or prediction
 * requests (e.g., formatted as CSV or JSON). We cannot use the built-in
 * decoding provided by FileReader.readAsText() because here we are in a
 * streaming context, which FileReader does not support.
 *
 * @param upstream A `LazyIterator` of `Uint8Arrays` containing UTF8-encoded
 *   text, which should be interpreted as concatenated.  No assumptions are
 *   made about the boundaries of the incoming chunks, so a multi-byte UTF8
 *   encoding of a character may span the boundary between chunks.  This
 *   naturally happens, for instance, when reading fixed-size byte arrays from a
 *   file.
 */
var Utf8IteratorImpl = /** @class */ (function (_super) {
    __extends(Utf8IteratorImpl, _super);
    function Utf8IteratorImpl(upstream) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        if (tfjs_core_1.ENV.get('IS_BROWSER')) {
            _this.decoder = new TextDecoder('utf-8');
        }
        else {
            // tslint:disable-next-line:no-require-imports
            var StringDecoder = require('string_decoder').StringDecoder;
            _this.decoder = new StringDecoder('utf8');
        }
        return _this;
    }
    Utf8IteratorImpl.prototype.summary = function () {
        return this.upstream.summary() + " -> Utf8";
    };
    Utf8IteratorImpl.prototype.pump = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chunkResult, chunk, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.upstream.next()];
                    case 1:
                        chunkResult = _a.sent();
                        if (chunkResult.done) {
                            return [2 /*return*/, false];
                        }
                        else {
                            chunk = chunkResult.value;
                        }
                        if (tfjs_core_1.ENV.get('IS_BROWSER')) {
                            text = this.decoder.decode(chunk, { stream: true });
                        }
                        else {
                            text = this.decoder.write(Buffer.from(chunk.buffer));
                        }
                        this.outputQueue.push(text);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return Utf8IteratorImpl;
}(lazy_iterator_1.OneToManyIterator));
//# sourceMappingURL=byte_chunk_iterator.js.map
}, function(modId) { var map = {"./lazy_iterator":1553811080210,"./string_iterator":1553811080222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080222, function(require, module, exports) {
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
 *
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
var lazy_iterator_1 = require("./lazy_iterator");
var StringIterator = /** @class */ (function (_super) {
    __extends(StringIterator, _super);
    function StringIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Splits a string stream on a given separator.
     *
     * It is assumed that the incoming chunk boundaries have no semantic meaning,
     * so conceptually the incoming stream is treated simply as the concatenation
     * of its elements.
     *
     * The outgoing stream provides chunks corresponding to the results of the
     * standard string split() operation (even if such a chunk spanned incoming
     * chunks).  The separators are not included.
     *
     * A typical usage is to split a text file (represented as a stream with
     * arbitrary chunk boundaries) into lines.
     *
     * @param upstream A readable stream of strings that can be treated as
     *   concatenated.
     * @param separator A character to split on.
     */
    StringIterator.prototype.split = function (separator) {
        return new SplitIterator(this, separator);
    };
    return StringIterator;
}(lazy_iterator_1.LazyIterator));
exports.StringIterator = StringIterator;
// ============================================================================
// The following private classes serve to implement the chainable methods
// on StringIterator.  Unfortunately they can't be placed in separate files, due
// to resulting trouble with circular imports.
// ============================================================================
// We wanted multiple inheritance, e.g.
//   class SplitIterator extends QueueIterator<string>, StringIterator
// but the TypeScript mixin approach is a bit hacky, so we take this adapter
// approach instead.
var SplitIterator = /** @class */ (function (_super) {
    __extends(SplitIterator, _super);
    function SplitIterator(upstream, separator) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.impl = new SplitIteratorImpl(upstream, separator);
        return _this;
    }
    SplitIterator.prototype.summary = function () {
        return this.impl.summary();
    };
    SplitIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.impl.next()];
            });
        });
    };
    return SplitIterator;
}(StringIterator));
var SplitIteratorImpl = /** @class */ (function (_super) {
    __extends(SplitIteratorImpl, _super);
    function SplitIteratorImpl(upstream, separator) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.separator = separator;
        // A partial string at the end of an upstream chunk
        _this.carryover = '';
        return _this;
    }
    SplitIteratorImpl.prototype.summary = function () {
        return this.upstream.summary() + " -> Split('" + this.separator + "')";
    };
    SplitIteratorImpl.prototype.pump = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chunkResult, lines, _i, _a, line;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.upstream.next()];
                    case 1:
                        chunkResult = _b.sent();
                        if (chunkResult.done) {
                            if (this.carryover === '') {
                                return [2 /*return*/, false];
                            }
                            // Pretend that the pump succeeded in order to emit the small last batch.
                            // The next pump() call will actually fail.
                            this.outputQueue.push(this.carryover);
                            this.carryover = '';
                            return [2 /*return*/, true];
                        }
                        lines = chunkResult.value.split(this.separator);
                        // Note the behavior: " ab ".split(' ') === ['', 'ab', '']
                        // Thus the carryover may be '' if the separator falls on a chunk
                        // boundary; this produces the correct result.
                        lines[0] = this.carryover + lines[0];
                        for (_i = 0, _a = lines.slice(0, -1); _i < _a.length; _i++) {
                            line = _a[_i];
                            this.outputQueue.push(line);
                        }
                        this.carryover = lines[lines.length - 1];
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return SplitIteratorImpl;
}(lazy_iterator_1.OneToManyIterator));
//# sourceMappingURL=string_iterator.js.map
}, function(modId) { var map = {"./lazy_iterator":1553811080210}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080223, function(require, module, exports) {
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
 *
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Skip tslint any type check cause this method is aiming to check type of
// input.
// tslint:disable-next-line:no-any
function isLocalPath(source) {
    return (typeof source === 'string') && source.substr(0, 7) === 'file://';
}
exports.isLocalPath = isLocalPath;
//# sourceMappingURL=source_util.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080224, function(require, module, exports) {
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
 *
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
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var datasource_1 = require("../datasource");
var file_chunk_iterator_1 = require("../iterators/file_chunk_iterator");
var source_util_1 = require("../util/source_util");
/**
 * Represents a file, blob, or Uint8Array readable as a stream of binary data
 * chunks.
 */
var FileDataSource = /** @class */ (function (_super) {
    __extends(FileDataSource, _super);
    /**
     * Create a `FileDataSource`.
     *
     * @param input Local file path, or `File`/`Blob`/`Uint8Array` object to
     *     read. Local file only works in node environment.
     * @param options Options passed to the underlying `FileChunkIterator`s,
     *   such as {chunksize: 1024}.
     */
    function FileDataSource(input, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.options = options;
        return _this;
    }
    FileDataSource.prototype.iterator = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fs;
            return __generator(this, function (_a) {
                if (source_util_1.isLocalPath(this.input) && tfjs_core_1.ENV.get('IS_NODE')) {
                    fs = require('fs');
                    this.input = fs.readFileSync(this.input.substr(7));
                }
                // TODO(kangyizhang): Add LocalFileChunkIterator to split local streaming
                // with file in browser.
                return [2 /*return*/, new file_chunk_iterator_1.FileChunkIterator(this.input, this.options)];
            });
        });
    };
    return FileDataSource;
}(datasource_1.DataSource));
exports.FileDataSource = FileDataSource;
//# sourceMappingURL=file_data_source.js.map
}, function(modId) { var map = {"../datasource":1553811080218,"../iterators/file_chunk_iterator":1553811080220,"../util/source_util":1553811080223}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1553811080225, function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
var version = '1.0.3';
exports.version = version;
//# sourceMappingURL=version.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1553811080208);
})()
//# sourceMappingURL=index.js.map