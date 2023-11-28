const factories = {
  smelter: {
    name: "Smelter",
    input: {
      commonOre: 2
    },
    output: {
      corvetteHull: 1
    }
  }
}

const nodes = [
  {
    id: "1",
    type: "resourceNode",
    position: { x: 0, y: 100 },
    resourceType: 'Common Ore'
  },
  {
    id: "2",
    type: 'factoryNode',
    position: { x: 250, y: 100 },
    factoryType: 'smelter',
    active: true
  },
  {
    id: "3",
    type: 'shipyardNode',
    position: { x: 500, y: 100 },
    active: true
  }
];

const edges = [
  { source: "1", target: "2" },
  { source: "2", target: "3" },
];

export const gameState = {
  factories,
  nodes,
  edges
}