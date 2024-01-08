import { buildResourceObject, addResources, isResourcesGreater } from '../../resource';
import { getRequiredInput, getRequiredOutput, calculateAdjustedOutput } from './helper';

export const isNodeValid = (gameState, node) => {
    const { nodes, edges, factories, shipyards, resourceNodes } = gameState;
    const requiredInput = getRequiredInput(node, factories, shipyards);
    const getRequiredOutputFunc = getRequiredOutput(factories, resourceNodes);

    const downstreamNodes = edges
        .filter(e => e.target === node.id)
        .map(e => ({
            edge: e,
            sourceNode: nodes.find(n => n.id === e.source),
            rawOutput: getRequiredOutputFunc(nodes.find(n => n.id === e.source)),
            relevantEdges: edges.filter(currentEdge => currentEdge !== e)
        }))
        .filter(e => e.sourceNode.nodeState === "active")
        .map(n => ({
            ...n,
            adjustedOutput: calculateAdjustedOutput(n.rawOutput, n.sourceNode.id, n.relevantEdges)
        }));

    const summedResources = downstreamNodes.reduce((accum, current) =>
        addResources(accum, current.adjustedOutput),
        buildResourceObject());

    const isGreater = isResourcesGreater(summedResources, requiredInput);

    return isGreater;
}