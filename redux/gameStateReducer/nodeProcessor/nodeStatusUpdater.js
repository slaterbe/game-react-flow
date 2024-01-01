import { updateNodeState } from '../../util/node/standardNode';

export const nodeStatusUpdater = (gameState) => {
    const { nodes } = gameState;

    const relevantNodes = nodes.filter(n => n.type !== 'resourceNode')
        .filter(n => n.nodeState === 'valid' || n.nodeState === 'invalid');

    relevantNodes.forEach(n => {
        updateNodeState(n, gameState);
    })   
}