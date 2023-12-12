import { handleDeactivatingNode } from '../../util/node';

export const changeShipyard = (gameState, item) => {
    const { nodes } = gameState;
    const { shipyardSelector } = gameState.ui;
    const { nodeId, newShipyardType } = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.nodeState === 'active'){
        node.shipyardType = newShipyardType;
        handleDeactivatingNode(gameState, node);
    }
    else{
        node.shipyardType = newShipyardType;
    }

    shipyardSelector.isOpen = false;
    shipyardSelector.nodeId = null;
}