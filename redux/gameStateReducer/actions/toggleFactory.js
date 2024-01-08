import { activateNode } from '../../util/nodeV2/activateNode';
import { computeNodeChange } from '../../util/nodeV2/computeNodeChange';

export const toggleFactory = (gameState, item) => {
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