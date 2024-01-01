import { buildResourceObject, calculateDelta } from '../resource';
import { getRequiredOutput } from './index';
import { calculateAdjustedOutput } from './index'

export const activateBlockedNode = (gameState, node) => {
    const { nodes, edges, factories, resourceNodes } = gameState;
    const { blockedResource } = node;

    const getRequiredOutputFunc = getRequiredOutput(factories, resourceNodes);

    edges
        .filter(e => e.target === node.id)
        .filter(e => e.isActive)
        .map(e => ({
            edge: e,
            sourceNode: nodes.find(n => n.id === e.source),
            rawOutput: getRequiredOutputFunc(nodes.find(n => n.id === e.source))
        }))
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

    node.nodeState = 'blocked-active';   
}

export const deactivateBlockedNode = (gameState, node) => {
    const { edges } = gameState;

    edges.filter(e => e.target === node.id)
        .forEach(e => e.input = buildResourceObject())

    node.nodeState = 'blocked';
}