import { addResources, subtractResourcesToZero, buildResourceObject, hasResource } from "../../../redux/util/resource";
import { updateNodeState } from "../../../redux/util/node/standardNode";

const updateBlockedResources = (gameState, node) => {
    const { edges } = gameState;

    const totalInputs = edges
        .filter(e => e.target === node.id)
        .map(e => e.input)
        .reduce(addResources, buildResourceObject())

    const remainingBlocked = subtractResourcesToZero(node.blockedResource, totalInputs);

    node.blockedResource = remainingBlocked;
}

const updateBlockedNodeState = (gameState, node) => {
    const { edges } = gameState;

    edges
        .filter(e => e.target === node.id)
        .forEach(e=> e.input = buildResourceObject());

    node.nodeState = "invalid";
    updateNodeState(gameState, node);
}

export const blockedNodeProcessor = (gameState) => {
    const { nodes } = gameState;

    nodes.filter(n => n.nodeState === "blocked")
        .forEach(node => updateBlockedResources(gameState, node));

    nodes.filter(n => n.nodeState === "blocked")
        .filter(n => !hasResource(n.blockedResource))
        .forEach(node => updateBlockedNodeState(gameState, node));
}