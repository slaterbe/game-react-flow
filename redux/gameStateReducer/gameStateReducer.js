import { createSlice } from '@reduxjs/toolkit'
import { gameState } from './initial-state';

import { disableNodesProcessor } from './processors/disable-nodes';
import { edgeActiveProcessor } from './processors/edge-active';
import { addShipProcessor } from './processors/add-ships';

const initialState = gameState;

export const gameStateReducer = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    tick: (state) => {
      disableNodesProcessor(state);
      edgeActiveProcessor(state);
      addShipProcessor(state);

      state.tickCounter = state.tickCounter + 1;
    },
    toggleFactoryIsActive: state => {
      console.log('test');
    }
  },
})

// Action creators are generated for each case reducer function
export const { tick, toggleFactoryIsActive } = gameStateReducer.actions

export default gameStateReducer.reducer