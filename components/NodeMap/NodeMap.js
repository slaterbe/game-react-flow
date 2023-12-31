"use client"

import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import { useSelector, useDispatch } from 'react-redux';
import { tick, addEdge } from '../../redux/gameStateReducer/gameStateReducer';

import { nodeTypes } from './nodes/NodeTypes';
import { edgeTypes } from './edges/EdgeTypes';

import { viewModelMapper } from "./viewModelMapper";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

export const NodeMap = () => {
  const gameState = useSelector((state) => state.gameState)
  const dispatch = useDispatch()

  const { nodes, edges } = viewModelMapper(gameState);

  const onConnect = useCallback((params) => dispatch(addEdge(params)), [])

  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          connectionLineType="straight"
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          connectionMode="loose"
          onInit={onInit}
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