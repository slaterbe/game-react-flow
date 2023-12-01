import { factories, resourceNodes, shipyards } from './gameStateReducer/initial-state';

export const hasResource = (resources) => {
    return !!resources.commonOre
        || !!resources.rareOre
        || !!resources.corvetteHull;
}

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

export const buildResourceObject = (input = {}) => ({
    commonOre: 0,
    rareOre: 0,
    corvetteHull: 0,
    corvette: 0,
    ...input
})

const calculatePropertyDelta = (required, input) => {
    if (required >= input) return input;

    if (input < required) return input - required;

    return 0;
}

export const calculateDelta = (input, required) => {
    const delta = {
        commonOre: calculatePropertyDelta(required.commonOre, input.commonOre),
        rareOre: calculatePropertyDelta(required.rareOre, input.rareOre),
        corvetteHull: calculatePropertyDelta(required.corvetteHull, input.corvetteHull),
        corvette: calculatePropertyDelta(required.corvette, input.corvette),
    }

    return delta;
}

export const calculateAdjustedOutput = (rawOutput, nodeId, edges) => {
    return edges.filter(e => e.sourceId == nodeId)
        .reduce((accum, currentValue) => ({
            commonOre: accum.commonOre - currentValue.commonOre,
            rareOre: accum.rareOre - currentValue.rareOre,
            corvetteHull: accum.corvetteHull - currentValue.corvetteHull,
        }), rawOutput)
}

const subtractResources = (resource1, resource2) => ({
    commonOre: resource1.commonOre - resource2.commonOre,
    rareOre: resource1.rareOre - resource2.rareOre,
    corvetteHull: resource1.corvetteHull - resource2.corvetteHull,
})

const updateEdge = (requiredInput, edge, adjustedOutput) => {
    const newEdgeInput = calculateDelta(requiredInput, adjustedOutput);
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
        requiredInput)
}
