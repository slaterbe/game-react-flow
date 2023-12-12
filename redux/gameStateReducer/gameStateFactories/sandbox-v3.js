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
      commonOre: 5,
    }),
    output: buildResourceObject({
      commonOre: 5
    })
  },
  rareOreTransport: {
    name: "Rare Ore Transport",
    input: buildResourceObject({
      rareOre: 5,
    }),
    output: buildResourceObject({
      rareOre: 5
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
      commonOre: 15
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

const nodes = [
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
    type: 'factoryNode',
    position: { x: 1, y: 4 },
    factoryType: 'empty',
    nodeState: 'invalid'
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

const edges = [
  { source: "1", target: "2", sourceHandle: "sr", targetHandle: "tl", isActive: false, input: buildResourceObject() },  
  { source: "1", target: "5", sourceHandle: "sb", targetHandle: "tl", isActive: false, input: buildResourceObject() }, 
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
  },
  shipyardSelector: {
    isOpen: false,
    nodeId: "3"
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