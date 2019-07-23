/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as tf from '@tensorflow/tfjs-core';

import {drawKeypoints, drawSkeleton} from './util';

export const videoWidth = 288;
export const videoHeight = 352;
export interface Point {
  x: number;
  y: number;
}
export interface CanvasNode {
  width: number;
  height: number;
  getContext: Function;
  createImage: Function;
}

/**
 * Feeds an image to posenet to estimate poses - this is where the magic
 * happens. This function loops with a requestAnimationFrame method.
 */
export async function detectPoseInRealTime(image, net, mirror) {
  const video: tf.Tensor = tf.tidy(() => {
    const temp = tf.tensor(new Uint8Array(image.data), [image.height, image.width, 4]);
    return temp.slice([0, 0, 0], [-1, -1, 3]);
  });

  // since images are being fed from a webcam
  const flipHorizontal = mirror;

  const pose = await net.estimateSinglePose(
      video, {flipHorizontal});
  video.dispose();
  return [pose];
}

export function drawPoses(page) {
  if (page.poses == null || page.ctx == null) return;
  const ctx = page.ctx;
  const poses = page.poses;
  const minPoseConfidence = 0.3;
  const minPartConfidence = 0.3;
  // For each pose (i.e. person) detected in an image, loop through the poses
  // and draw the resulting skeleton and keypoints if over certain confidence
  // scores
  poses.forEach(({score, keypoints}) => {
    if (score >= minPoseConfidence) {
      drawKeypoints(keypoints, minPartConfidence, ctx);
      drawSkeleton(keypoints, minPartConfidence, ctx);
    }
  });
  ctx.draw();
  return poses;
}
