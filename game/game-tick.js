import { edgeActiveProcessor } from './processors/edge-active';

export const gameTick = (gameState) => {
    edgeActiveProcessor(gameState);
}