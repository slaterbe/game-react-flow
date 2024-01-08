import { computeBlockNodeConfiguration } from './helper/blockedNode';
import { isNodeValid } from './helper/isNodeValid';
import { setInvalidNode } from './helper/setInvalidNode';

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

export const computeNodeChange = (gameState, node) => {
    const isValid = isNodeValid(gameState, node)

    if(!isValid) setInvalidNode(gameState, node);

    if (node.nodeState === "active") {
        node.nodeState = isValid ? "active" : "invalid";
        computeDownstreamNodes(gameState, node);
        computeBlockedNodes(gameState, node);
    }
    else if (node.nodeState === "valid") {
        node.nodeState = isValid ? "valid" : "invalid";
        computeDownstreamNodes(gameState, node);
        computeBlockedNodes(gameState, node);
    }
    else if (node.nodeState === "invalid") {
        node.nodeState = isValid ? "valid" : "invalid";
        computeDownstreamNodes(gameState, node);
        computeBlockedNodes(gameState, node);
    }
    else if (node.nodeState === "blocked") {
        computeBlockNodeConfiguration(gameState, node);
    }
}