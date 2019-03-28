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

import * as tfjs from '@tensorflow/tfjs';
import {fetchFunc} from 'fetch-wechat';

import {Classifier} from '../../model/classifier';

const tf = requirePlugin('myPlugin') as typeof tfjs;

const CANVAS_ID = 'image-canvas';
Page({
  data: {result: ''},
  model: undefined,
  canvas: undefined,
  takePhoto() {
    if (this.model) {
      const ctx = wx.createCameraContext();
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.canvas.drawImage(res.tempImagePath, 0, 0, 224, 224);
          this.canvas.draw(false, () => {
            wx.canvasGetImageData({
              canvasId: CANVAS_ID,
              x: 0,
              y: 0,
              width: 224,
              height: 224,
              success: (res) => {
                // tslint:disable-next-line:no-any
                const result = (res as any) as ImageData;
                this.model.classify(
                    result.data.buffer,
                    {width: result.width, height: result.height});
              }
            });
          });
        }
      });
    }
  },
  async onReady() {
    // tslint:disable-next-line:no-any
    (tf as any).configPlugin({fetchFunc: fetchFunc()});
    this.canvas = wx.createCanvasContext(CANVAS_ID);
    const model = new Classifier(this);
    await model.load();
    this.model = model;
  },
  onUnload() {
    if (this.model) {
      this.model.dispose();
    }
  }
})
