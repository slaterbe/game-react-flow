import { getRequiredInput, getRequiredOutput, calculateAdjustedOutput, updateEdge } from './helper/helper';

export const activateNode = (gameState, node) => {
    const { nodes, edges, factories, shipyards, resourceNodes } = gameState;
    const requiredInput = getRequiredInput(node, factories, shipyards);

    const getRequiredOutputFunc = getRequiredOutput(factories, resourceNodes);

    const downstreamNodes = edges
        .filter(e => e.target === node.id)
        .map(e => ({
            edge: e,
            node: nodes.find(n => n.id === e.source),
            rawOutput: getRequiredOutputFunc(nodes.find(n => n.id === e.source))
        }))
        .map(n => ({
            ...n,
            adjustedOutput: calculateAdjustedOutput(n.rawOutput, n.node.id, edges)
        }));

    downstreamNodes.reduce((accum, current) =>
        updateEdge(accum, current.edge, current.adjustedOutput),
        requiredInput);
}