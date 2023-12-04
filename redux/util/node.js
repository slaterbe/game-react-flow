import { factories, resourceNodes, shipyards } from '../gameStateReducer/gameStateFactories/sandbox';
import { 
    buildResourceObject, 
    calculateDelta, 
    subtractResources, 
    addResources, 
    isResourcesGreater  
} from './resource';

export const getRequiredInput = (node) => {
    if (node.factoryType)
        return { ...factories[node.factoryType].input };
    else if (node.shipyardType)
        return { ...shipyards[node.shipyardType].input };

    return null;
}

export const getRequiredOutput = (node) => {
    if (node.factoryType)
        return { ...factories[node.factoryType].output };
    else if (node.resourceType)
        return { ...resourceNodes[node.resourceType].output };

    return null;
}

export const calculateAdjustedOutput = (rawOutput, nodeId, edges) => {
    return edges.filter(e => e.sourceId == nodeId)
        .reduce((accum, currentValue) => subtractResources(accum, currentValue), rawOutput);
}

const updateEdge = (requiredInput, edge, adjustedOutput) => {
    const newEdgeInput = calculateDelta(adjustedOutput, requiredInput);
    edge.input = newEdgeInput;

    return subtractResources(requiredInput, newEdgeInput);
}

export const activateNode = (node, nodes, edges) => {
    const requiredInput = getRequiredInput(node);

    const downstreamNodes = edges
        .filter(e => e.target === node.id)
        .filter(e => e.isActive)
        .map(e => ({
            edge: e,
            node: nodes.find(n => n.id === e.source),
            rawOutput: getRequiredOutput(nodes.find(n => n.id === e.source))
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

export const canActivateNode = (node, nodes, edges) => {
    const requiredInput = getRequiredInput(node);

    const downstreamNodes = edges
        .filter(e => e.target === node.id)
        .filter(e => e.isActive)
        .map(e => ({
            edge: e,
            node: nodes.find(n => n.id === e.source),
            rawOutput: getRequiredOutput(nodes.find(n => n.id === e.source))
        }))
        .map(n => ({
            ...n,
            adjustedOutput: calculateAdjustedOutput(n.rawOutput, n.node.id, edges)
        }));

    const summedResources = downstreamNodes.reduce((accum, current) =>
        addResources(accum, current.adjustedOutput),
        buildResourceObject());

    const isGreater = isResourcesGreater(summedResources, requiredInput);

    return isGreater;
}