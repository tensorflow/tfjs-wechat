import * as tf from '@tensorflow/tfjs-core';
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
    predict(input: tf.Tensor): tf.Tensor<tf.Rank> | tf.Tensor<tf.Rank>[] | tf.NamedTensorMap;
}
