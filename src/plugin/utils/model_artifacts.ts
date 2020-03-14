import { io } from '@tensorflow/tfjs-core';

/**
 * Populate ModelArtifactsInfo fields for a model with JSON topology.
 * @param modelArtifacts
 * @returns A ModelArtifactsInfo object.
 */
export function getModelArtifactsInfoForJSON(modelArtifacts: io.ModelArtifacts):
  io.ModelArtifactsInfo {
  if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
    throw new Error('Expected JSON model topology, received ArrayBuffer.');
  }

  return {
    dateSaved: new Date(),
    // TODO followup on removing this from the the interface
    modelTopologyType: 'JSON',
    weightDataBytes: modelArtifacts.weightData == null ?
      0 :
      modelArtifacts.weightData.byteLength,
  };
}
