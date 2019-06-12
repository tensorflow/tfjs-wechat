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
import * as tf from '@tensorflow/tfjs-core';
import * as tfc from '@tensorflow/tfjs-converter';

const GOOGLE_CLOUD_STORAGE_DIR =
    'https://7465-tensorflowjs-e2061d-1259050850.tcb.qcloud.la/';
// const GOOGLE_CLOUD_STORAGE_DIR =
//   'https://storage.googleapis.com/tfjs-models/savedmodel/';
const MODEL_FILE_URL = 'mobilenet_v2_1.0_224/model.json';
const PREPROCESS_DIVISOR = tf.scalar(255 / 2);

export interface TopKValue {
  label: string;
  value: number;
}
export class MobileNet {
  private model: tfc.GraphModel;
  constructor() {}

  async load() {
    this.model =
        await tfc.loadGraphModel(GOOGLE_CLOUD_STORAGE_DIR + MODEL_FILE_URL);
  }

  dispose() {
    if (this.model) {
      this.model.dispose();
    }
  }
  /**
   * Infer through MobileNet. This does standard ImageNet pre-processing before
   * inferring through the model. This method returns named activations as well
   * as softmax logits.
   *
   * @param input un-preprocessed input Array.
   * @return The softmax logits.
   */
  predict(input: tf.Tensor) {
    const preprocessedInput = tf.div(
        tf.sub(input.asType('float32'), PREPROCESS_DIVISOR),
        PREPROCESS_DIVISOR);
    const reshapedInput =
        preprocessedInput.reshape([1, ...preprocessedInput.shape]);
    return this.model.predict(reshapedInput);
  }

  getTopKClasses(logits: tf.Tensor, topK: number): TopKValue[] {
    return tf.tidy(() => {
      const predictions = logits;
      const values = predictions.dataSync();
      let predictionList = [];
      for (let i = 0; i < values.length; i++) {
        predictionList.push({value: values[i], index: i});
      }
      predictionList = predictionList
                           .sort((a, b) => {
                             return b.value - a.value;
                           })
                           .slice(0, topK);

      return predictionList.map(x => {
        return {label: x.index, value: x.value};
      });
    });
  }
}
