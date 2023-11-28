import { edgeActiveProcessor } from './processors/edge-active';
import { addShipProcessor } from './processors/add-ships';

export const gameTick = (gameState) => {
    edgeActiveProcessor(gameState);
    addShipProcessor(gameState);
}