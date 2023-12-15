import { handleDeactivatingNode } from '../../util/node';

import { edgeActiveProcessor } from '../nodeProcessor/edgeActive';
import { nodeStatusUpdater } from '../nodeProcessor/nodeStatusUpdater';

export const changeFactory = (gameState, item) => {
    const { nodes } = gameState;
    const { factorySelector } = gameState.ui;
    const { nodeId, newFactoryType } = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.nodeState === 'active'){
        node.factoryType = newFactoryType;
        handleDeactivatingNode(gameState, node);
    }
    else{
        node.factoryType = newFactoryType;
    }

    factorySelector.isOpen = false;
    factorySelector.nodeId = null;

    edgeActiveProcessor(gameState);
    nodeStatusUpdater(gameState);
}