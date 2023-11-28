import { disableNodesProcessor } from './processors/disable-nodes';
import { edgeActiveProcessor } from './processors/edge-active';
import { addShipProcessor } from './processors/add-ships';

export const gameTick = (gameState) => {
    disableNodesProcessor(gameState);
    edgeActiveProcessor(gameState);
    addShipProcessor(gameState);
}