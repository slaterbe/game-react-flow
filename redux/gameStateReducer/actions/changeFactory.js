import { handleDeactivatingNode } from '../../util';

export const changeFactory = (gameState, item) => {
    const { nodes } = gameState;
    const { factorySelector } = gameState.ui;
    const { nodeId, newFactoryType } = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.factoryType === 'active'){
        node.factoryType = newFactoryType;
        handleDeactivatingNode(gameState, node);
    }
    else{
        node.factoryType = newFactoryType;
    }

    factorySelector.isOpen = false;
    factorySelector.nodeId = null;
}