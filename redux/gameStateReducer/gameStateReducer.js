import { createSlice } from '@reduxjs/toolkit'
import { gameState } from './factories/sandbox-v3';

// Node Processors
import { edgeActiveProcessor } from './nodeProcessor/edgeActive';
import { addShipProcessor } from './nodeProcessor/addShips';
import { nodeStatusUpdater } from './nodeProcessor/nodeStatusUpdater'
import { taskProcessor } from './nodeProcessor/taskProcessor';

// Battle Processors
import { assignShips } from './battleProcessor/assignShips';
import { battleShips } from './battleProcessor/battleShips';

import { toggleFactory as toggleFactoryAction } from './actions/toggleFactory';
import { changeFactory as changeFactoryAction } from './actions/changeFactory';

import { toggleShipyard as toggleShipyardAction } from './actions/toggleShipyard';
import { changeShipyard as changeShipyardAction } from './actions/changeShipyard';

import { addEdge as addEdgeAction } from'./actions/addEdge';
import { deleteEdge as deleteEdgeAction } from'./actions/deleteEdge';
import { applyWave } from './battleProcessor/applyWave';
import { applyRewards } from './battleProcessor/applyRewards';

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
    battleTick: (state) => {
      applyWave(state);
      applyRewards(state);
      assignShips(state);
      battleShips(state);
    },
    openBattleMap: (state) => {
      state.ui.activeTab = "battle-map";
    },
    openNodeMap: (state) => {
      state.ui.activeTab = "node-map";
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
  battleTick,
  changeFactory, 
  toggleFactory, 
  changeShipyard, 
  toggleShipyard, 
  addEdge,
  deleteEdge,
  openFactoryDialog, 
  closeFactoryDialog,
  openShipyardDialog, 
  closeShipyardDialog,
  openBattleMap,
  openNodeMap
} = gameStateReducer.actions

export default gameStateReducer.reducer