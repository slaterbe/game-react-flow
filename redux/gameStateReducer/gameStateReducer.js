import { createSlice } from '@reduxjs/toolkit'
import { gameState } from './gameStateFactories/sandbox-v2';

import { edgeActiveProcessor } from './processors/edgeActive';
import { addShipProcessor } from './processors/addShips';
import { nodeStatusUpdater } from './processors/nodeStatusUpdater'
import { taskProcessor } from './processors/taskProcessor';

import { toggleFactory as toggleFactoryAction } from './actions/toggleFactory';
import { changeFactory as changeFactoryAction } from './actions/changeFactory';

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
    toggleFactory: toggleFactoryAction,
    changeFactory: changeFactoryAction
  },
})

// Action creators are generated for each case reducer function
export const { 
  tick, 
  changeFactory, 
  toggleFactory, 
  openFactoryDialog, 
  closeFactoryDialog 
} = gameStateReducer.actions

export default gameStateReducer.reducer