import { buildPosition } from "./buildPosition";
import { hasResource } from "@/redux/util/resource";

export const shipyardNodeMapper = (gameState, node) => {
    const { edges, shipyards } = gameState;

    const isActiveBlocked = node.nodeState === 'blocked'
        && edges.filter(e => e.target === node.id).some(e => hasResource(e.input))

    const isActive = node.nodeState === 'active'
        || isActiveBlocked;

    return {
        ...node,
        position: buildPosition(node),
        data: {
            ...shipyards[node.shipyardType],
            isActive,
            nodeState: node.nodeState,
            completePercentage: Math.floor((node.counterTick ?? 0) * 100 / shipyards[node.shipyardType].requiredTicks),
            blockedResource: node.blockedResource
        }
    }
}