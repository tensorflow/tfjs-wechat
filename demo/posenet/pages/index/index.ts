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

import * as posenet from '@tensorflow-models/posenet';
import {detectPoseInRealTime, drawPoses} from '../../posenet/posenet';
const CANVAS_ID = 'image';
const POSENET_URL =
    'https://www.gstaticcnapps.cn/tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json';
Page({
  data: {result: ''},
  posenetModel: undefined,
  canvas: undefined,
  poses: undefined,
  ctx: undefined,
  posenet() {
    if (this.posenetModel == null) {
      this.setData({result: 'loading posenet model...'});
      posenet
          .load({
            architecture: 'MobileNetV1',
            outputStride: 16,
            inputResolution: 193,
            multiplier: 0.5,
            modelUrl: POSENET_URL
          })
          .then((model) => {
            this.posenetModel = model;
            this.setData({result: 'model loaded.'});
          });
    }
  },
  executePosenet(frame) {
    if (this.posenetModel) {
      const start = Date.now();
      detectPoseInRealTime(frame, this.posenetModel, false)
          .then((poses) => {
            this.poses = poses;
            drawPoses(this);
            const result = `${Date.now() - start}ms`;
            this.setData({result});
          })
          .catch((err) => {
            console.log(err, err.stack);
          });
    }
  },
  async onReady() {
    console.log('create canvas context for #image...');
    setTimeout(() => {
      this.ctx = wx.createCanvasContext(CANVAS_ID);
      console.log('ctx', this.ctx);
    }, 500);

    this.posenet();

    // Start the camera API to feed the captured images to the models.
    // @ts-ignore the ts definition for this method is worng.
    const context = wx.createCameraContext(this);
    let count = 0;
    const listener = (context as any).onCameraFrame((frame) => {
      count++;
      if (count === 3) {
        this.executePosenet(frame);
        count = 0;
      }
    });
    listener.start();
  },
  onUnload() {
    if (this.posenetModel) {
      this.posenetModel.dispose();
    }
  }
});
