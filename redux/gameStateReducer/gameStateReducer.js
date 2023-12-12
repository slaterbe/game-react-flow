import { createSlice } from '@reduxjs/toolkit'
import { gameState } from './gameStateFactories/sandbox-v3';

import { edgeActiveProcessor } from './processors/edgeActive';
import { addShipProcessor } from './processors/addShips';
import { nodeStatusUpdater } from './processors/nodeStatusUpdater'
import { taskProcessor } from './processors/taskProcessor';

import { toggleFactory as toggleFactoryAction } from './actions/toggleFactory';
import { changeFactory as changeFactoryAction } from './actions/changeFactory';

import { toggleShipyard as toggleShipyardAction } from './actions/toggleShipyard';
import { changeShipyard as changeShipyardAction } from './actions/changeShipyard';

import { addEdge as addEdgeAction } from'./actions/addEdge';
import { deleteEdge as deleteEdgeAction } from'./actions/deleteEdge';

const initialState = gameState;

export const gameStateReducer = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    tick: (state) => {
      addShipProcessor(state);
      edgeActiveProcessor(state);
      nodeStatusUpdater(state);
      taskProcessor(state);

      state.tickCounter = state.tickCounter + 1;
    },
    openFactoryDialog: (state, item) => {
      state.ui.factorySelector.isOpen = true;
      state.ui.factorySelector.nodeId = item.payload;
    },
    closeFactoryDialog: (state) => {
      state.ui.factorySelector.isOpen = false;
    },
    openShipyardDialog: (state, item) => {
      state.ui.shipyardSelector.isOpen = true;
      state.ui.shipyardSelector.nodeId = item.payload;
    },
    closeShipyardDialog: (state) => {
      state.ui.shipyardSelector.isOpen = false;
    },
    toggleFactory: toggleFactoryAction,
    changeFactory: changeFactoryAction,
    toggleShipyard: toggleShipyardAction,
    changeShipyard: changeShipyardAction,
    addEdge: addEdgeAction,
    deleteEdge: deleteEdgeAction
  },
})

// Action creators are generated for each case reducer function
export const { 
  tick, 
  changeFactory, 
  toggleFactory, 
  changeShipyard, 
  toggleShipyard, 
  addEdge,
  deleteEdge,
  openFactoryDialog, 
  closeFactoryDialog,
  openShipyardDialog, 
  closeShipyardDialog 
} = gameStateReducer.actions

export default gameStateReducer.reducer