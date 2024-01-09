import { 
    buildResourceObject,
    calculateDelta,
    subtractResources
} from '../../resource';

export const getRequiredInput = (node, factories, shipyards) => {
    if (node.factoryType)
        return { ...factories[node.factoryType].input };
    else if (node.shipyardType)
        return { ...shipyards[node.shipyardType].input };

    return buildResourceObject();
}

export const getRequiredOutput = (factories, resourceNodes) => (node) => {
    if (node.factoryType)
        return { ...factories[node.factoryType].output };
    else if (node.resourceType)
        return { ...resourceNodes[node.resourceType].output };

    return buildResourceObject();
}

export const calculateAdjustedOutput = (rawOutput, nodeId, edges) => {
    return edges.filter(e => e.source == nodeId)
        .map(e => e.input)
        .reduce((accum, currentValue) => subtractResources(accum, currentValue), rawOutput);
}

export const calculateAdjustedInput = (rawInput, nodeId, edges) => {
    return edges.filter(e => e.target == nodeId)
        .map(e => e.input)
        .reduce((accum, currentValue) => subtractResources(accum, currentValue), rawInput);
}

export const updateEdge = (requiredInput, edge, adjustedOutput) => {
    const newEdgeInput = calculateDelta(adjustedOutput, requiredInput);
    edge.input = newEdgeInput;

    return subtractResources(requiredInput, newEdgeInput);
}