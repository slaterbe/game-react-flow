"use client"

import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges
} from "./initial-elements";

import { ResourceNode } from '../nodes/ResourceNode';
import { FactoryNode } from '../nodes/FactoryNode';
import { ShipyardNode } from '../nodes/ShipyardNode';

const nodeTypes = {
  resourceNode: ResourceNode,
  factoryNode: FactoryNode,
  shipyardNode: ShipyardNode
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

export const Map = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  console.log(edges);

  return (
    <div className="w-full h-full">
      <div className="w-full h-8 absolute bg-blue-400">
        Toolbar
      </div>
      <div className="w-full h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onInit={onInit}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
        >
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};