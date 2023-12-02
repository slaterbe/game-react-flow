import { createSlice } from '@reduxjs/toolkit'
import { gameState } from './initial-state';

import { disableNodesProcessor } from './processors/disableNodes';
import { edgeActiveProcessor } from './processors/edgeActive';
import { addShipProcessor } from './processors/addShips';
import { nodeStatusUpdater } from './processors/nodeStatusUpdater'

import { toggleFactory as toggleFactoryAction } from './actions/toggleFactory';

const initialState = gameState;

export const gameStateReducer = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    tick: (state) => {
      disableNodesProcessor(state);
      edgeActiveProcessor(state);
      addShipProcessor(state);
      nodeStatusUpdater(state);

      state.tickCounter = state.tickCounter + 1;
    },
    toggleFactory: toggleFactoryAction
  },
})

// Action creators are generated for each case reducer function
export const { tick, toggleFactory } = gameStateReducer.actions

export default gameStateReducer.reducer