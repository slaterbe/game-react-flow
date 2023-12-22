import { buildResourceObject } from '../../util/resource';

export const nodes = [
    {
        id: "1",
        type: 'resourceNode',
        position: { x: 1, y: 0 },
        resourceType: 'commonOre',
        nodeState: 'active'
    },
    {
        id: "2",
        type: 'factoryNode',
        position: { x: 2, y: 0 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "3",
        type: 'factoryNode',
        position: { x: 3, y: 0 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "4",
        type: 'factoryNode',
        position: { x: 6, y: 0 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "5",
        type: 'factoryNode',
        position: { x: 2, y: 1 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "6",
        type: 'factoryNode',
        position: { x: 3, y: 1 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "7",
        type: 'factoryNode',
        position: { x: 5, y: 1 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "8",
        type: 'factoryNode',
        position: { x: 0, y: 2 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "9",
        type: "shipyardNode",
        position: { x: 3, y: 2 },
        shipyardType: 'corvetteShipyard',
        nodeState: 'invalid'
    },
    {
        id: "10",
        type: 'factoryNode',
        position: { x: 4, y: 2 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "11",
        type: 'factoryNode',
        position: { x: 2, y: 3 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "12",
        type: 'factoryNode',
        position: { x: 6, y: 3 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "13",
        type: 'resourceNode',
        position: { x: 1, y: 4 },
        resourceType: 'silicon',
        nodeState: 'active'
    },
    {
        id: "14",
        type: 'factoryNode',
        position: { x: 3, y: 4 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "15",
        type: 'factoryNode',
        position: { x: 3, y: 4 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "16",
        type: 'resourceNode',
        position: { x: 5, y: 4 },
        resourceType: 'rareOre',
        nodeState: 'active'
    },
    {
        id: "17",
        type: 'factoryNode',
        position: { x: 2, y: 5 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "18",
        type: 'factoryNode',
        position: { x: 3, y: 5 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
    {
        id: "19",
        type: 'factoryNode',
        position: { x: 3, y: 6 },
        factoryType: 'empty',
        nodeState: 'invalid'
    },
];

export const edges = [
    { source: "1", target: "2", sourceHandle: "sr", targetHandle: "tl", isActive: false, input: buildResourceObject() },
    { source: "1", target: "5", sourceHandle: "sb", targetHandle: "tl", isActive: false, input: buildResourceObject() },
];