import { createSlice } from '@reduxjs/toolkit'
import { gameState } from './gameStateFactories/sandbox';

import { edgeActiveProcessor } from './processors/edgeActive';
import { addShipProcessor } from './processors/addShips';
import { nodeStatusUpdater } from './processors/nodeStatusUpdater'
import { taskProcessor } from './processors/taskProcessor';

import { toggleFactory as toggleFactoryAction } from './actions/toggleFactory';

const initialState = gameState;

export const gameStateReducer = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    tick: (state) => {
      edgeActiveProcessor(state);
      addShipProcessor(state);
      nodeStatusUpdater(state);
      taskProcessor(state);

      state.tickCounter = state.tickCounter + 1;
    },
    toggleFactory: toggleFactoryAction
  },
})

// Action creators are generated for each case reducer function
export const { tick, toggleFactory } = gameStateReducer.actions

export default gameStateReducer.reducer