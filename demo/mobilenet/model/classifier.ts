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

import {MobileNet} from './mobilenet';

export interface CameraSize {
  width: number;
  height: number;
}

export class Classifier {
  private mobileNet: MobileNet;
  constructor(private page: WechatMiniprogram.Page.Instance<any, any>) {}
  async load() {
    this.mobileNet = new MobileNet();
    this.page.setData({result: 'loading model...'});
    const start = Date.now();
    await this.mobileNet.load();
    const result = `model loaded: ${Date.now() - start}ms\n`;
    this.page.setData({result});
  }

  classify(ab: ArrayBuffer, size: CameraSize) {
    const data = new Uint8Array(ab);
    let result = '';
    const start = Date.now();
    tf.tidy(() => {
      const temp = tf.browser.fromPixels({data, ...size}, 4);
      const pixels =
          temp.slice([0, 0, 0], [-1, -1, 3]).resizeBilinear([224, 224]);
      const tensor = this.mobileNet.predict(pixels) as tf.Tensor;

      const topIndex = tensor.argMax().dataSync()[0];
      result += `prediction: ${Date.now() - start}ms\n`;
      result += `${tensor.dataSync()[topIndex]}`;
      return result;
    });
    this.page.setData({result});
  }
  dispose() {
    this.mobileNet.dispose();
  }
}
