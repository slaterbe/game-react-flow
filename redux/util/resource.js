export const resourceNames = [
    { id: "commonOre", name: "Common Ore"},
    { id: "rareOre", name: "Rare Ore"},
    // { id: "commonPlate", name: "Common Plate"},
    { id: "corvetteHull", name: "Corvette Hull"},
    { id: "corvette", name: "Corvette"}
]

export const buildResourceObject = (input = {}) => ({
    commonOre: 0,
    rareOre: 0,
    commonPlate: 0,
    corvetteHull: 0,
    corvette: 0,
    ...input
})

export const hasResource = (resources) => {
    return !!resources.commonOre
        || !!resources.rareOre
        || !!resources.corvetteHull;
}

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

export const subtractResources = (resource1, resource2) => ({
    commonOre: resource1.commonOre - resource2.commonOre,
    rareOre: resource1.rareOre - resource2.rareOre,
    corvetteHull: resource1.corvetteHull - resource2.corvetteHull,
})

export const addResources = (resource1, resource2) => ({
    commonOre: resource1.commonOre + resource2.commonOre,
    rareOre: resource1.rareOre + resource2.rareOre,
    corvetteHull: resource1.corvetteHull + resource2.corvetteHull,
})

export const isResourcesGreater = (resource1, resource2) => {
    return resource1.commonOre >= resource2.commonOre
        && resource1.rareOre >= resource2.rareOre
        && resource1.corvetteHull >= resource2.corvetteHull    
}
