import { activateNode, handleDeactivatingNode } from '../../util/node';

import { edgeActiveProcessor } from '../nodeProcessor/edgeActive';
import { nodeStatusUpdater } from '../nodeProcessor/nodeStatusUpdater';

const handleActivatingNode = (state, node) => {
    const { nodes, edges } = state;
    node.nodeState = 'active';

    activateNode(node, nodes, edges);
}

export const toggleShipyard = (gameState, item) => {
    const { nodes } = gameState;
    const nodeId = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.nodeState === 'active')
        handleDeactivatingNode(gameState, node);
    else
        handleActivatingNode(gameState, node);

    edgeActiveProcessor(gameState);
    nodeStatusUpdater(gameState);
}