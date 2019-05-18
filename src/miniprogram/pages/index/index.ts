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
import {Classifier} from '../../model/classifier';
import { detectPoseInRealTime, drawPoses } from '../../posenet/posenet';
const CANVAS_ID = 'image';
const POSENET_URL = "https://7465-tensorflowjs-e2061d-1259050850.tcb.qcloud.la/posenet/";
Page({
  data: { insertCamera: false, insert: false, result: '', selectedBtn: 'mobilenet'},
  mobilenetModel: undefined,
  posenetModel: undefined,
  selectedModel: undefined,  
  canvas: undefined,
  poses: undefined,
  ctx: undefined,
  mobilenet() {
    this.setData!({ selectedBtn: 'mobilenet' });
    this.selectedModel = this.mobilenetModel;
    if (this.mobilenetModel == null) {
      const model = new Classifier(this);
      model.load().then(() => {
        this.setData!({ result: 'loading mobilenet model...' });
        this.mobilenetModel = model;
        this.selectedModel = this.mobilenetModel;
        this.setData!({ result: 'model loaded.' });
      });
    }
  },
  posenet() {
    this.setData!({ selectedBtn: 'posenet' });
    this.selectedModel = this.posenetModel;
    if (this.posenetModel == null) {
      this.setData!({ result: 'loading posenet model...' });
      posenet.load(0.5, POSENET_URL).then((model) => {
        this.posenetModel = model;
        this.selectedModel = this.posenetModel;
        this.setData!({ result: 'model loaded.' });
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
          const result =
            `${Date.now() - start}ms`;
          this.setData!({ result });
        })
        .catch((err) => {
          console.log(err, err.stack);
        });
    }
  },  
  executeMobilenet(frame) {
    if (this.mobilenetModel) {
      this.mobilenetModel.classify(frame.data, {width: frame.width, height: frame.height});
    }
  },  
  async onReady() {
    console.log('create canvas context for #image...');
    setTimeout(() => {
      this.ctx = wx.createCanvasContext(CANVAS_ID);
      console.log('ctx', this.ctx);
    }, 500);  

    this.mobilenet();
    const context = wx.createCameraContext(this);
    let count = 0;
    const listener =
      (context as any)
        .onCameraFrame((frame) => {
          count++;
          if (count === 2) {
            if (this.data.selectedBtn === 'posenet') {
              this.executePosenet(frame);
            } else {
              this.executeMobilenet(frame);
            }
            count = 0;
          }
        });
    listener.start();
  },
  onUnload() {
    if (this.mobilenetModel) {
      this.mobilenetModel.dispose();
    }
    if (this.posenetModel) {
      this.posenetModel.dispose();
    }
  }
});
