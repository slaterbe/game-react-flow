import { buildPosition } from "./buildPosition";
import { resourceNodeMapper } from './resourceNodeMapper';
import { factoryNodeMapper } from './factoryNodeMapper';
import { edgeMapper } from "./edgeMapper";

export const viewModelMapper = (gameState) => {
    const { nodes, edges, shipyards } = gameState;
    const vmResourceNodes = nodes
        .filter(n => n.type === "resourceNode" && n.nodeState !== "hidden")
        .map((node) => resourceNodeMapper(gameState, node));

    const vmFactoryNodes = nodes
        .filter(n => n.type === "factoryNode" && n.nodeState !== "hidden")
        .map((node) => factoryNodeMapper(gameState, node));

    const vmShipyardNodes = nodes
        .filter(n => n.type === "shipyardNode" && n.nodeState !== "hidden")
        .map((node) => ({
            ...node,
            position: buildPosition(node),
            data: {
                ...shipyards[node.shipyardType],
                nodeState: node.nodeState,
                completePercentage: Math.floor((node.counterTick ?? 0) * 100 / shipyards[node.shipyardType].requiredTicks),
                blockedResource: node.blockedResource
            }
        }));

    const vmEdges = edges.map(e => edgeMapper(gameState, e));

    return {
        nodes: [
            ...vmResourceNodes,
            ...vmFactoryNodes,
            ...vmShipyardNodes
        ],
        edges: vmEdges
    }
}