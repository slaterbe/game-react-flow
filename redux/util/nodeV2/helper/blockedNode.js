import { buildResourceObject, calculateDelta } from '../../resource';
import { getRequiredOutput, calculateAdjustedOutput } from './helper';

export const computeBlockNodeConfiguration = (gameState, node) => {
    const { nodes, edges, factories, resourceNodes } = gameState;
    const { blockedResource } = node;

    const getRequiredOutputFunc = getRequiredOutput(factories, resourceNodes);

    //1. Null or edges
    edges.filter(e => e.target === node.id)
        .forEach(e => {
            e.input = buildResourceObject()
        });

    //2. Calculate new block value
    edges
        .filter(e => e.target === node.id)
        .map(e => ({
            edge: e,
            sourceNode: nodes.find(n => n.id === e.source),
            rawOutput: getRequiredOutputFunc(nodes.find(n => n.id === e.source))
        }))
        .filter(e => e.sourceNode.nodeState === 'active')
        .map(e => ({
            ...e,
            adjustedOutput: calculateAdjustedOutput(e.rawOutput, e.sourceNode.id, edges),
        }))
        .map(e => ({
            ...e,
            intersect: calculateDelta(blockedResource, e.adjustedOutput)
        }))
        .forEach(e => {
            e.edge.input = e.intersect
        })
}