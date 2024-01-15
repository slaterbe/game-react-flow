import { buildResourceObject } from '../../util/resource';

export const nodes = [
    {
        id: "1",
        type: 'resourceNode',
        position: { x: 0, y: 0 },
        resourceType: 'commonOre',
        nodeState: 'active',
        blockedResource: buildResourceObject()
    },
    {
        id: "2",
        type: 'factoryNode',
        position: { x: 2, y: 0 },
        factoryType: null,
        nodeState: 'invalid',
        blockedResource: buildResourceObject()
    },
    {
        id: "3",
        type: 'factoryNode',
        position: { x: 1, y: 1 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "4",
        type: 'factoryNode',
        position: { x: 0, y: 2 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "5",
        type: "shipyardNode",
        position: { x: 2, y: 2 },
        shipyardType: 'corvetteShipyard',
        nodeState: 'hidden',
        counterTick: 0,
        blockedResource: buildResourceObject({ commonPlate: 200 })
    },
    {
        id: "6",
        type: 'resourceNode',
        position: { x: 0, y: 4 },
        resourceType: 'rareOre',
        nodeState: 'hidden',
        blockedResource: buildResourceObject()
    },
    {
        id: "7",
        type: 'factoryNode',
        position: { x: 1, y: 4 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "8",
        type: 'factoryNode',
        position: { x: 3, y: 5 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "9",
        type: 'factoryNode',
        position: { x: 0, y: 7 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "10",
        type: 'factoryNode',
        position: { x: 5, y: 6 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "11",
        type: 'factoryNode',
        position: { x: 2, y: 7 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "12",
        type: 'factoryNode',
        position: { x: 4, y: 2 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "13",
        type: 'factoryNode',
        position: { x: 5, y: 2 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    },
    {
        id: "14",
        type: 'factoryNode',
        position: { x: 6, y: 3 },
        factoryType: null,
        nodeState: 'hidden',
        blockedResource: buildResourceObject({ commonPlate: 30 })
    }
];

export const edges = [
    { source: "1", target: "2", sourceHandle: "sr", targetHandle: "tl", isActive: false, input: buildResourceObject() }
];