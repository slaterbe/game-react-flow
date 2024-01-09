import { buildPosition } from "./buildPosition";
import { calculateAdjustedOutput } from '../../../redux/util/node/helper/helper'

export const resourceNodeMapper = (gameState, node) => {
    const { edges, resourceNodes } = gameState;
    const resourceNode = resourceNodes[node.resourceType];

    const adjustedOutput = calculateAdjustedOutput(resourceNode.output, node.id, edges);

    return {
        ...node,
        position: buildPosition(node),
        data: {
            ...resourceNode,
            adjustedOutput,
            nodeState: node.nodeState,
            blockedResource: node.blockedResource
        }
    }
}