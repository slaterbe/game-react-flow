import { activateBlockedNode, deactivateBlockedNode } from '../../util/node/blockedNode';

export const toggleBlocked = (gameState, item) => {
    const { nodes } = gameState;
    const nodeId = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.nodeState === "blocked")
        activateBlockedNode(gameState, node);
    else
        deactivateBlockedNode(gameState, node);
}