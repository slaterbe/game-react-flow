"use client"

import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";

import { nodeTypes } from '../nodes/NodeTypes';

import { gameState as gameStateRaw } from "../../game/initial-state";
import { viewModelMapper } from "../../game/view-model-mapper";
import { gameTick } from "../../game/game-tick";

gameTick(gameStateRaw);

const {
  nodes: initialNodes,
  edges: initialEdges
} = viewModelMapper(gameStateRaw);

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

export const Map = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [gameState, setGameState] = useState(gameStateRaw);

  const { globalResources } = gameState;

  useEffect(() => {
    const interval = setInterval(() => {
      gameTick(gameState);
      setGameState(gameState);

      const { nodes, edges } = viewModelMapper(gameState);
      setNodes(nodes);
      setEdges(edges);

    }, 1000);


    return () => {
      clearInterval(interval);
    };
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full">
      <div className="w-full h-16 absolute bg-blue-400 z-10">
        <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
          {globalResources.corvette} Corvette
        </div>
        <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
          {globalResources.destroyer} Destroyer
        </div>
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