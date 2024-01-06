import { updateNodeState } from '../../util/node/standardNode';

// Disconnected as will be managed on an event basis
export const nodeStatusUpdater = (gameState) => {
    const { nodes } = gameState;

    const relevantNodes = nodes.filter(n => n.type !== 'resourceNode')
        .filter(n => n.nodeState === 'valid' || n.nodeState === 'invalid');

    relevantNodes.forEach(n => {
        updateNodeState(gameState, n);
    })   
}