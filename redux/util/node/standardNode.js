import { buildResourceObject, hasResource, addResources, isResourcesGreater } from '../resource';
import { getRequiredInput, getRequiredOutput, calculateAdjustedOutput, updateEdge } from './index';

export const activateNode = (node, gameState) => {
    const { nodes, edges, factories, shipyards, resourceNodes } = gameState;
    const requiredInput = getRequiredInput(node, factories, shipyards);

    const getRequiredOutputFunc = getRequiredOutput(factories, resourceNodes);

    const downstreamNodes = edges
        .filter(e => e.target === node.id)
        .filter(e => e.isActive)
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

export const handleDeactivatingNode = (state, node) => {
    const { nodes, edges } = state;

    //Abort if Node has blocked resources on it
    if(hasResource(node.blockedResource)){
        node.nodeState = "blocked";
        return;
    }

    const downstreamEdges = edges.filter(e => e.target === node.id && e.isActive);

    const upstreamEdges = edges.filter(e => e.source === node.id && e.isActive);
    const upstreamNodes = upstreamEdges
        .map(e => nodes.find(n => n.id === e.target))
        .filter(n => n.nodeState === "active");

    downstreamEdges.forEach(e => {
        e.input = buildResourceObject(),
        e.isActive = false;
    });

    upstreamEdges.forEach(e => {
        e.input = buildResourceObject();
        e.isActive = false;
    });

    upstreamNodes.forEach(n => {
        n.nodeState = 'invalid';
        handleDeactivatingNode(state, n);
    });

    node.nodeState = "valid";
}

export const updateNodeState = (node, gameState) => {
    const { nodes, edges, factories, shipyards, resourceNodes } = gameState;
    const requiredInput = getRequiredInput(node, factories, shipyards);
    const getRequiredOutputFunc = getRequiredOutput(factories, resourceNodes);

    //Abort if Node has blocked resources on it
    if(hasResource(node.blockedResource)){
        node.nodeState = "blocked";
        return;
    }

    const downstreamNodes = edges
        .filter(e => e.target === node.id)
        .filter(e => e.isActive)
        .map(e => ({
            edge: e,
            node: nodes.find(n => n.id === e.source),
            rawOutput: getRequiredOutputFunc(nodes.find(n => n.id === e.source))
        }))
        .map(n => ({
            ...n,
            adjustedOutput: calculateAdjustedOutput(n.rawOutput, n.node.id, edges)
        }));

    const summedResources = downstreamNodes.reduce((accum, current) =>
        addResources(accum, current.adjustedOutput),
        buildResourceObject());

    const isGreater = isResourcesGreater(summedResources, requiredInput);

    const newState = isGreater ? 'valid' : 'invalid';
    node.nodeState = newState;
}