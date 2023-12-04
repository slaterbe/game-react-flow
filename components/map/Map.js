"use client"

import React, { useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import { useSelector, useDispatch } from 'react-redux'
import { tick } from '../../redux/gameStateReducer/gameStateReducer';

import { nodeTypes } from '../nodes/NodeTypes';
import { edgeTypes } from '../edges/EdgeTypes';

import { viewModelMapper } from "./view-model-mapper";

import { Overlay } from '../Overlay';

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

export const Map = () => {
  const gameState = useSelector((state) => state.gameState)
  const dispatch = useDispatch()

  const { nodes, edges } = viewModelMapper(gameState);

  const { globalResources, tickCounter } = gameState;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick())
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <Overlay globalResources={globalResources} tickCounter={tickCounter} />
      <div className="w-full h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
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