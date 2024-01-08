import { computeBlockNodeConfiguration } from './helper/blockedNode';
import { isNodeValid } from './helper/isNodeValid';
import { clearNodeInputs } from './helper/clearNodeInputs';

const computeDownstreamNodes = (gameState, node) => {
    const { edges, nodes } = gameState;

    const downstreamNodeIds = edges.filter(e => e.source === node.id)
        .map(e => nodes.find(n => n.id === e.target));

    downstreamNodeIds.forEach(n => {
        computeNodeChange(gameState, n);
    })
}

const computeBlockedNodes = (gameState) => {
    const { nodes } = gameState;

    const blockedNodes = nodes.filter(n => n.nodeState === "blocked");

    blockedNodes.forEach(n => {
        computeBlockNodeConfiguration(gameState, n);
    });
};

const getNextNodeState = (gameState, node) => {
    const isValid = isNodeValid(gameState, node);

    if (node.nodeState === 'blocked') return 'blocked';

    if (node.nodeState === 'active' && isValid) return 'active';

    return isValid ? "valid" : "invalid";
}

export const computeNodeChange = (gameState, node) => {
    node.nodeState = getNextNodeState(gameState, node);

    if (node.nodeState === "active") {
        computeDownstreamNodes(gameState, node);
        computeBlockedNodes(gameState, node);
    }
    else if (node.nodeState === "valid") {
        clearNodeInputs(gameState, node);
        computeDownstreamNodes(gameState, node);
        computeBlockedNodes(gameState, node);
    }
    else if (node.nodeState === "invalid") {
        clearNodeInputs(gameState, node);
        computeDownstreamNodes(gameState, node);
        computeBlockedNodes(gameState, node);
    }
    else if (node.nodeState === "blocked") {
        computeBlockNodeConfiguration(gameState, node);
    }
}