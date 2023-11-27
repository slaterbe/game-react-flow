import React from "react";
import { MarkerType } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "resourceNode",
    data: {
      label: (
        <>
          Welcome to <strong>React Flow!</strong>
        </>
      )
    },
    position: { x: 0, y: 100 }
  },
  {
    id: "2",
    type: 'factoryNode',
    position: { x: 250, y: 100 }
  },
  {
    id: "3",
    type: 'shipyardNode',
    position: { x: 500, y: 100 },
  }
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
  { id: "e2-3", source: "2", target: "3" },
];
