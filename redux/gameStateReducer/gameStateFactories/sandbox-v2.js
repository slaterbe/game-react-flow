import { buildResourceObject } from '../../util/resource';

export const factories = {
  smelter: {
    name: "Smelter",
    input: buildResourceObject({
      commonOre: 10
    }),
    output: buildResourceObject({
      corvetteHull: 1
    })
  },
  commonForge: {
    name: "Common Forge",
    input: buildResourceObject({
      commonOre: 4
    }),
    output: buildResourceObject({
      commonPlate: 3
    })
  },
  commonForgev2: {
    name: "Common Forge v2",
    input: buildResourceObject({
      commonOre: 2,
      commonPlate: 3
    }),
    output: buildResourceObject({
      commonPlate: 6
    })
  },
  refinery: {
    name: "Refinery",
    input: buildResourceObject({
      commonOre: 4
    }),
    output: buildResourceObject({
      rareOre: 2
    })
  },
  basicHullv1: {
    name: "Basic Hull v1",
    input: buildResourceObject({
      commonOre: 4,
      commonShipPart: 2
    }),
    output: buildResourceObject({
      corvetteHull: 2
    })
  },
  basicHullv2: {
    name: "Basic Hull v2",
    input: buildResourceObject({
      commonPlate: 5
    }),
    output: buildResourceObject({
      corvetteHull: 1
    })
  },
  shipPartFactory: {
    name: "Ship Part Factory",
    input: buildResourceObject({
      commonPlate: 2
    }),
    output: buildResourceObject({
      commonShipPart: 3
    })
  },
  frigateHull: {
    name: "Frigate Hull Factory",
    input: buildResourceObject({
      corvetteHull: 1,
      enhancedPlate: 3
    }),
    output: buildResourceObject({
      frigateHull: 1
    })
  },
  enhancedPlateAlloyer: {
    name: "Enhanced Plate Alloyer",
    input: buildResourceObject({
      commonPlate: 3,
      rareOre: 3
    }),
    output: buildResourceObject({
      enhancedPlate: 3
    })
  },
  commonOreTransport: {
    name: "Common Ore Transport",
    input: buildResourceObject({
      commonOre: 10,
    }),
    output: buildResourceObject({
      commonOre: 10
    })
  },
  rareOreTransport: {
    name: "Rare Ore Transport",
    input: buildResourceObject({
      rareOre: 10,
    }),
    output: buildResourceObject({
      rareOre: 10
    })
  },
  empty: {
    name: "",
    input: buildResourceObject(),
    output: buildResourceObject()
  }
}

export const shipyards = {
  corvetteShipyard: {
    name: "Corvette Shipyard",
    input: buildResourceObject({
      corvetteHull: 1
    }),
    output: buildResourceObject({
      corvette: 1
    })
  },
  frigateShipyard: {
    name: "Frigate Shipyard",
    input: buildResourceObject({
      frigateHull: 1
    }),
    output: buildResourceObject({
      frigate: 1
    }),
  },
  destroyerShipyard: {
    name: "Destroyer Shipyard",
    input: buildResourceObject({
      destroyerHull: 1
    }),
    output: buildResourceObject({
      destroyer: 1
    }),
  },
  cruiserShipyard: {
    name: "Cruiser Shipyard",
    input: buildResourceObject({
      cruiserHull: 1
    }),
    output: buildResourceObject({
      cruiser: 1
    }),
  },
}

export const resourceNodes = {
  commonOre: {
    name: "commonOre",
    output: buildResourceObject({
      commonOre: 50
    })
  },
  rareOre: {
    name: "Rare Ore",
    output: buildResourceObject({
      rareOre: 20
    })
  },
  silicon: {
    name: "Silicon Deposit",
    output: buildResourceObject({
      silicon: 5
    })
  }
}

const spacing = 350;

const nodes = [
  {
    id: "1",
    type: "shipyardNode",
    position: { x: 0 * spacing, y: 0 * spacing },
    shipyardType: 'corvetteShipyard',
    nodeState: 'invalid'
  },
  {
    id: "2",
    type: 'factoryNode',
    position: { x: 1 * spacing, y: 0 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "3",
    type: 'factoryNode',
    position: { x: 3 * spacing, y: 0 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "4",
    type: 'factoryNode',
    position: { x: 1 * spacing, y: 1 * spacing },
    factoryType: "empty",
    nodeState: 'invalid'
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
    type: 'resourceNode',
    position: { x: 3 * spacing, y: 1 * spacing },
    resourceType: 'commonOre',
    nodeState: 'active'
  },
  {
    id: "7",
    type: 'factoryNode',
    position: { x: 4 * spacing, y: 1 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "8",
    type: 'factoryNode',
    position: { x: 5 * spacing, y: 1 * spacing },
    factoryType: 'empty',
    nodeState: 'valid'
  },
  {
    id: "9",
    type: 'factoryNode',
    position: { x: 1 * spacing, y: 2 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "10",
    type: 'factoryNode',
    position: { x: 2 * spacing, y: 2 * spacing },
    factoryType: "empty",
    nodeState: 'invalid'
  },
  {
    id: "11",
    type: 'factoryNode',
    position: { x: 3 * spacing, y: 2 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "12",
    type: 'factoryNode',
    position: { x: 4 * spacing, y: 2 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "13",
    type: 'resourceNode',
    position: { x: 5 * spacing, y: 2 * spacing },
    resourceType: 'rareOre',
    nodeState: 'active'
  },
  {
    id: "14",
    type: 'shipyardNode',
    position: { x: 0 * spacing, y: 3 * spacing },
    shipyardType: "corvetteShipyard",
    nodeState: 'invalid'
  },
  {
    id: "15",
    type: 'factoryNode',
    position: { x: 2 * spacing, y: 3 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "16",
    type: 'factoryNode',
    position: { x: 4 * spacing, y: 3 * spacing },
    factoryType: 'empty',
    nodeState: 'invalid'
  },
  {
    id: "17",
    type: 'shipyardNode',
    position: { x: 1 * spacing, y: 4 * spacing },
    shipyardType: "frigateShipyard",
    nodeState: 'invalid'
  }
];

const edges = [
  { source: "2", target: "4", sourceHandle: "sb", targetHandle: "tt", isActive: false, input: buildResourceObject() },
  { source: "3", target: "2", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },
  { source: "3", target: "5", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },
  { source: "4", target: "1", sourceHandle: "sl", targetHandle: "tb", isActive: false, input: buildResourceObject() },
  { source: "4", target: "9", sourceHandle: "sb", targetHandle: "tt", isActive: false, input: buildResourceObject() },
  { source: "5", target: "4", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },
  { source: "5", target: "10", sourceHandle: "sb", targetHandle: "tt", isActive: false, input: buildResourceObject() },
  { source: "6", target: "3", sourceHandle: "st", targetHandle: "tb", isActive: false, input: buildResourceObject() },  
  { source: "6", target: "5", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "6", target: "7", sourceHandle: "sr", targetHandle: "tl", isActive: false, input: buildResourceObject() },  
  { source: "6", target: "11", sourceHandle: "sb", targetHandle: "tt", isActive: false, input: buildResourceObject() },  
  { source: "7", target: "12", sourceHandle: "sb", targetHandle: "tt", isActive: false, input: buildResourceObject() },  
  { source: "7", target: "8", sourceHandle: "sr", targetHandle: "tl", isActive: false, input: buildResourceObject() },  
  { source: "9", target: "14", sourceHandle: "sl", targetHandle: "tt", isActive: false, input: buildResourceObject() },  
  { source: "10", target: "9", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "10", target: "15", sourceHandle: "sb", targetHandle: "tt", isActive: false, input: buildResourceObject() },  
  { source: "11", target: "10", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "11", target: "15", sourceHandle: "sb", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "12", target: "11", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "13", target: "8", sourceHandle: "st", targetHandle: "tb", isActive: false, input: buildResourceObject() },  
  { source: "13", target: "12", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "13", target: "16", sourceHandle: "sb", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "15", target: "14", sourceHandle: "sl", targetHandle: "tr", isActive: false, input: buildResourceObject() },  
  { source: "15", target: "17", sourceHandle: "sl", targetHandle: "tt", isActive: false, input: buildResourceObject() },  
  { source: "16", target: "11", sourceHandle: "sl", targetHandle: "tb", isActive: false, input: buildResourceObject() },  
];

const globalResources = {
  corvette: 3,
  frigate: 0,
  destroyer: 1,
  cruiser: 2
};

const tickCounter = 0;

const tasks = [
  { title: 'Complete 1 Corvettes', requirement: { corvette: 1 }, claimed: true },
  { title: 'Complete 20 Corvettes', requirement: { corvette: 20 }, claimed: false },
  { title: 'Complete 100 Corvettes', requirement: { corvette: 100 }, claimed: false },
  { title: 'Complete 20 Frigates', requirement: { frigate: 20 }, claimed: false },
]

const ui = {
  factorySelector: {
    isOpen: false,
    nodeId: 1
  }
}

export const gameState = {
  factories,
  shipyards,
  resourceNodes,
  nodes,
  edges,
  tickCounter,
  tasks,
  globalResources,
  ui
}