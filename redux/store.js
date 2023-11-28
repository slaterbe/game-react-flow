import { configureStore } from '@reduxjs/toolkit'
import gameStateReducer from './gameStateReducer/gameStateReducer'

export const store = configureStore({
  reducer: {
      gameState: gameStateReducer
  },
})