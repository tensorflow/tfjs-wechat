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
export interface TopKValue {
    label: string;
    value: number;
}
export declare class MobileNet {
    private model;
    constructor();
    load(): Promise<void>;
    dispose(): void;
    /**
     * Infer through MobileNet. This does standard ImageNet pre-processing before
     * inferring through the model. This method returns named activations as well
     * as softmax logits.
     *
     * @param input un-preprocessed input Array.
     * @return The softmax logits.
     */
    predict(input: tfjs.Tensor): tfjs.Tensor<tfjs.Rank> | tfjs.Tensor<tfjs.Rank>[] | tfjs.NamedTensorMap;
    getTopKClasses(logits: tfjs.Tensor, topK: number): TopKValue[];
}
