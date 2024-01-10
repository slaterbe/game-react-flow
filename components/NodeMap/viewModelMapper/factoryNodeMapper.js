import { buildPosition } from "./buildPosition";
import { calculateAdjustedOutput, calculateAdjustedInput } from '../../../redux/util/node/helper/helper'
import { buildResourceObject, hasResource } from "@/redux/util/resource";

export const factoryNodeMapper = (gameState, node) => {
    const { edges, factories } = gameState;
    const factory = factories[node.factoryType];

    const output = factory?.output ?? buildResourceObject();
    const input = factory?.input ?? buildResourceObject();

    const adjustedOutput = calculateAdjustedOutput(output, node.id, edges);

    const isActiveBlocked = node.nodeState === 'blocked'
        && edges.filter(e => e.target === node.id).some(e => hasResource(e.input))

    const isActive = node.nodeState === 'active'
        || isActiveBlocked;

    return {
        ...node,
        position: buildPosition(node),
        data: {
            ...factories[node.factoryType],
            adjustedOutput,
            nodeState: node.nodeState,
            isActive,
            factoryType: node.factoryType,
            blockedResource: node.blockedResource
        }
    }
}