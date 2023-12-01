const factories = {
  smelter: {
    name: "Smelter",
    input: {
      commonOre: 2
    },
    output: {
      corvetteHull: 1
    }
  },
  empty: {
    name: "",
    input: {},
    output: {}
  }
}

const shipyards = {
  corvetteShipyard: {
    name: "Corvette Shipyard",
    input: {
      corvetteHull: 1
    },
    output: {
      corvette: 1
    },
    usage: {}
  }
}

const resourceNodes = {
  commonOre: {
    name: "Common Ore",
    output: {
      commonOre: 5
    }
  },
  rareOre: {
    name: "Rare Ore",
    output: {
      rareOre: 5
    }
  }
}

const spacing = 350;

const nodes = [
  {
    id: "1",
    type: "factoryNode",
    position: { x: 1 * spacing, y: 0 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "2",
    type: 'factoryNode',
    position: { x: 3 * spacing, y: 0 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "3",
    type: 'factoryNode',
    position: { x: 0 * spacing, y: 1 * spacing },
    factoryType: 'smelter',
    nodeState: 'valid'
  },
  {
    id: "4",
    type: 'resourceNode',
    position: { x: 1 * spacing, y: 1 * spacing },
    resourceType: "commonOre",
    nodeState: 'active'
  },
  {
    id: "5",
    type: 'factoryNode',
    position: { x: 2 * spacing, y: 1 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "6",
    type: 'factoryNode',
    position: { x: 3 * spacing, y: 1 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "7",
    type: 'shipyardNode',
    position: { x: 4 * spacing, y: 1 * spacing },
    shipyardType: "corvetteShipyard",
    nodeState: 'invalid'
  },
  {
    id: "8",
    type: 'shipyardNode',
    position: { x: 0 * spacing, y: 2 * spacing },
    shipyardType: "corvetteShipyard",
    nodeState: 'active'
  },
  {
    id: "9",
    type: 'factoryNode',
    position: { x: 2 * spacing, y: 2 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "10",
    type: 'resourceNode',
    position: { x: 3 * spacing, y: 2 * spacing },
    resourceType: "rareOre",
    nodeState: 'active'
  },
  {
    id: "11",
    type: 'factoryNode',
    position: { x: 4 * spacing, y: 2 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "12",
    type: 'shipyardNode',
    position: { x: 3 * spacing, y: 3 * spacing },
    shipyardType: "corvetteShipyard",
    nodeState: 'invalid'
  }
];

const edges = [
  { source: "1", target: "2", sourceHandle: "sr", targetHandle: "tl", isActive: false, input: {} },
  { source: "1", target: "5", sourceHandle: "sr", targetHandle: "tt", isActive: false, input: {} },
  { source: "1", target: "3", sourceHandle: "sl", targetHandle: "tt", isActive: false, input: {} },
  { source: "2", target: "7", sourceHandle: "sr", targetHandle: "tl", isActive: true, input: {} },
  { source: "3", target: "8", sourceHandle: "sb", targetHandle: "tt", isActive: true, input: {} },
  { source: "4", target: "1", sourceHandle: "st", targetHandle: "tb", isActive: true, input: {} },
  { source: "4", target: "3", sourceHandle: "sl", targetHandle: "tr", isActive: true, input: {} },
  { source: "4", target: "5", sourceHandle: "sr", targetHandle: "tl", isActive: true, input: {} },
  { source: "4", target: "9", sourceHandle: "sb", targetHandle: "tt", isActive: true, input: {} },
  { source: "5", target: "2", sourceHandle: "sr", targetHandle: "tb", isActive: true, input: {} },
  { source: "5", target: "6", sourceHandle: "sr", targetHandle: "tl", isActive: true, input: {} },
  { source: "6", target: "7", sourceHandle: "sr", targetHandle: "tl", isActive: true, input: {} },
  { source: "9", target: "8", sourceHandle: "sl", targetHandle: "tr", isActive: true, input: {} },
  { source: "9", target: "12", sourceHandle: "sb", targetHandle: "tl", isActive: true, input: {} },
  { source: "10", target: "6", sourceHandle: "st", targetHandle: "tb", isActive: true, input: {} },
  { source: "10", target: "9", sourceHandle: "sl", targetHandle: "tr", isActive: true, input: {} },
  { source: "10", target: "11", sourceHandle: "sr", targetHandle: "tl", isActive: true, input: {} },
  { source: "11", target: "7", sourceHandle: "st", targetHandle: "tb", isActive: true, input: {} },
  { source: "11", target: "12", sourceHandle: "sb", targetHandle: "tr", isActive: true, input: {} },
];

const globalResources = {
  corvette: 3,
  frigate: 0,
  destroyer: 1,
  cruiser: 2
};

const tickCounter = 0;

export const gameState = {
  factories,
  shipyards,
  resourceNodes,
  nodes,
  edges,
  tickCounter,
  globalResources
}