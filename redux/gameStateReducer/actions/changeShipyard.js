import { computeNodeChange } from '../../util/node/computeNodeChange';

export const changeShipyard = (gameState, item) => {
    const { nodes } = gameState;
    const { shipyardSelector } = gameState.ui;
    const { nodeId, newShipyardType } = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    node.shipyardType = newShipyardType;
    computeNodeChange(gameState, node);

    shipyardSelector.isOpen = false;
    shipyardSelector.nodeId = null;
}