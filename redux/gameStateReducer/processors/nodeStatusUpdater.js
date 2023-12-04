import { canActivateNode } from '../../util';

export const nodeStatusUpdater = (gameState) => {
    const { nodes, edges } = gameState;

    const relevantNodes = nodes.filter(n => n.type !== 'resourceNode')
        .filter(n => n.nodeState === 'valid' || n.nodeState === 'invalid');

    relevantNodes.forEach(n => {
        const canActivate = canActivateNode(n, nodes, edges);

        const newState = canActivate ? 'valid' : 'invalid';

        n.nodeState = newState;        
    })   
}