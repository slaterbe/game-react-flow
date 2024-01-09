import { activateNode } from '../../util/node/activateNode';
import { computeNodeChange } from '../../util/node/computeNodeChange';

export const toggleShipyard = (gameState, item) => {
    const { nodes } = gameState;
    const nodeId = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.nodeState === 'active')
        node.nodeState = 'valid';
    else
        node.nodeState = 'active';

    activateNode(gameState, node);
    computeNodeChange(gameState, node);
}