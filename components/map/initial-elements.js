import { MarkerType } from "@reactflow/core";

export const nodes = [
  {
    id: "1",
    type: "resourceNode",
    data: {
      name: "Common Ore"
    },
    position: { x: 0, y: 100 }
  },
  {
    id: "2",
    type: 'factoryNode',
    data: {
      name: "Smelter",
      input: {
        commonOre: 2
      },
      output: {
        corvetteHull: 1
      }
    },
    position: { x: 250, y: 100 }
  },
  {
    id: "3",
    type: 'shipyardNode',
    position: { x: 500, y: 100 },
    data: {
      name: "Shipyard",
      input: {
        corvetteHull: 1
      },
      output: {
        corvette: 1
      }
    }
  }
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true, markerEnd: { type: MarkerType.ArrowClosed }, style: { strokeWidth: 3 } },
  { id: "e2-3", source: "2", target: "3", animated: true, markerEnd: { type: MarkerType.ArrowClosed }, style: { strokeWidth: 3 } },
];
