import { resourceConfigs } from './resourceConfigs';

const defaultEmptyObject = resourceConfigs
    .reduce((accum, current) => {
        accum[current.id] = 0
        return accum;
    }, {})

export const buildResourceObject = (input = {}) => ({
    ...defaultEmptyObject,
    ...input
})

export const hasResource = (resources) => resourceConfigs
    .reduce((accum, current) => accum || !!resources[current.id], false)

const calculatePropertyDelta = (required, input) => {
    if (required >= input) return input;

    if (input < required) return input - required;

    return 0;
}

export const calculateDelta = (resource1, resource2) => resourceConfigs
    .reduce((accum, current) => {
        accum[current.id] = calculatePropertyDelta(resource1[current.id], resource2[current.id])
        return accum;
    }, {})

export const subtractResources = (resource1, resource2) => resourceConfigs
    .reduce((accum, current) => {
        accum[current.id] = resource1[current.id] - resource2[current.id]
        return accum;
    }, {})

export const subtractResourcesToZero = (resource1, resource2) => resourceConfigs
    .reduce((accum, current) => {
        accum[current.id] = Math.max(resource1[current.id] - resource2[current.id], 0)
        return accum;
    }, {})

export const addResources = (resource1, resource2) => resourceConfigs
    .reduce((accum, current) => {
        accum[current.id] = resource1[current.id] + resource2[current.id]
        return accum;
    }, {})

export const isResourcesGreater = (resource1, resource2) => resourceConfigs
    .reduce((accum, current) => accum && (resource1[current.id] >= resource2[current.id])
        , true)