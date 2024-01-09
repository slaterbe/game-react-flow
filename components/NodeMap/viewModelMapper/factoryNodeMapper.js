import { buildPosition } from "./buildPosition";
import { calculateAdjustedOutput, calculateAdjustedInput } from '../../../redux/util/node/helper/helper'
import { buildResourceObject } from "@/redux/util/resource";

export const factoryNodeMapper = (gameState, node) => {
    const { edges, factories } = gameState;
    const factory = factories[node.factoryType];

    const output = factory?.output ?? buildResourceObject();
    const input = factory?.input ?? buildResourceObject();

    const adjustedOutput = calculateAdjustedOutput(output, node.id, edges);

    return {
        ...node,
        position: buildPosition(node),
        data: {
            ...factories[node.factoryType],
            adjustedOutput,
            nodeState: node.nodeState,
            factoryType: node.factoryType,
            blockedResource: node.blockedResource
        }
    }
}