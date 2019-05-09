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

import { drawBoundingBox, drawKeypoints, drawSkeleton } from './util';

export const videoWidth = 288;
export const videoHeight = 352;
export const scaledVideoWidth = 198;
export const scaledVideoHeight = 242;
export interface Point {
  x: number;
  y: number;
}
const guiState = {
  algorithm: 'single-pose',
  input: {
    mobileNetArchitecture: '0.5',
    outputStride: 16,
    imageScaleFactor: 1.0,
  },
  singlePoseDetection: {
    minPoseConfidence: 0.1,
    minPartConfidence: 0.3,
  },
  multiPoseDetection: {
    maxPoseDetections: 5,
    minPoseConfidence: 0.15,
    minPartConfidence: 0.1,
    nmsRadius: 30.0,
  },
  output: {
    showVideo: false,
    showSkeleton: true,
    showPoints: true,
    showBoundingBox: false,
  },
  net: null,
};

/**
 * Feeds an image to posenet to estimate poses - this is where the magic
 * happens. This function loops with a requestAnimationFrame method.
 */
export async function detectPoseInRealTime(image, net, mirror) {
  //const sliceWidth = Math.floor(image.height / (videoHeight / videoWidth));
  const video = tf.tidy(() => {
    return tf.tensor3d(
      new Uint8Array(image.data), [image.height, image.width, 4], 'float32')
      .slice([0, 0, 0], [-1, -1, 3])
      .resizeBilinear([scaledVideoHeight, scaledVideoWidth]);
  });
  //  .transpose([1, 0, 2]).reverse(1).slice([0,0,0], [-1, -1, 3])

  guiState.net = net;
  // since images are being fed from a webcam
  const flipHorizontal = mirror;

  // Scale an image down to a certain factor. Too large of an image will slow
  // down the GPU
  const imageScaleFactor = guiState.input.imageScaleFactor;
  const outputStride = +guiState.input.outputStride;

  let poses = [];
  switch (guiState.algorithm) {
    case 'single-pose':
      const pose = await guiState.net.estimateSinglePose(
        video, imageScaleFactor, flipHorizontal, outputStride);
      poses.push(pose);

      break;
    case 'multi-pose':
      poses = await guiState.net.estimateMultiplePoses(
        video, imageScaleFactor, flipHorizontal, outputStride,
        guiState.multiPoseDetection.maxPoseDetections,
        guiState.multiPoseDetection.minPartConfidence,
        guiState.multiPoseDetection.nmsRadius);

      break;
  }
  video.dispose();
  return scalePoses(poses);
}
export function scalePoses(poses) {
  poses.forEach(pose => {
    pose.keypoints.forEach((keypoint) => {
      keypoint.position.y = keypoint.position.y * videoHeight / scaledVideoHeight;
      keypoint.position.x = keypoint.position.x * videoWidth / scaledVideoWidth;
    })
  });
  return poses;
}

export function drawPoses(page) {
  if (page.poses == null || page.ctx == null) return;
  const ctx = page.ctx;
  const poses = page.poses;
  const minPoseConfidence = +guiState.singlePoseDetection.minPoseConfidence;
  const minPartConfidence = +guiState.singlePoseDetection.minPartConfidence;

  // For each pose (i.e. person) detected in an image, loop through the poses
  // and draw the resulting skeleton and keypoints if over certain confidence
  // scores
  poses.forEach(({ score, keypoints }) => {
    if (score >= minPoseConfidence) {
      if (guiState.output.showPoints) {
        drawKeypoints(keypoints, minPartConfidence, ctx);
      }
      if (guiState.output.showSkeleton) {
        drawSkeleton(keypoints, minPartConfidence, ctx);
      }
      if (guiState.output.showBoundingBox) {
        drawBoundingBox(keypoints, ctx);
      }
    }
  });
  ctx.draw();
  return poses;
}