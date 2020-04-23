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

import { Classifier } from '../../model/classifier';
Page({
  data: { result: '' },
  mobilenetModel: undefined,
  mobilenet() {
    if (this.mobilenetModel == null) {
      const model = new Classifier(this);
      model.load().then(() => {
        this.setData({ result: 'loading mobilenet model...' });
        this.mobilenetModel = model;
        this.setData({ result: 'model loaded.' });
      });
    }
  },
  executeMobilenet(frame) {
    if (this.mobilenetModel) {
      this.mobilenetModel.classify(
        frame.data, { width: frame.width, height: frame.height });
    }
  },
  async onReady() {
    this.mobilenet();

    // Start the camera API to feed the captured images to the models.
    // @ts-ignore the ts definition for this method is worng.
    const context = wx.createCameraContext();
    let count = 0;
    const listener = (context as any).onCameraFrame((frame) => {
      count++;
      if (count === 3) {
        this.executeMobilenet(frame);
        count = 0;
      }
    });
    listener.start();
  },
  onUnload() {
    if (this.mobilenetModel) {
      this.mobilenetModel.dispose();
    }
  }
});
