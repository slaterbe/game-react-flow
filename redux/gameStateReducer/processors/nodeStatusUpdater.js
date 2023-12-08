import { updateNodeState  } from '../../util/node';

export const nodeStatusUpdater = (gameState) => {
    const { nodes, edges } = gameState;

    const relevantNodes = nodes.filter(n => n.type !== 'resourceNode')
        .filter(n => n.nodeState === 'valid' || n.nodeState === 'invalid');

    relevantNodes.forEach(n => {
        updateNodeState(n, nodes, edges);
    })   
}