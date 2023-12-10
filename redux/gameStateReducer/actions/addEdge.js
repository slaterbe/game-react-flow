import { buildResourceObject } from '../../util/resource';
import { updateNodeState } from '../../util/node';

export const addEdge = (gameState, payload) => {
    gameState.edges.push({ 
        ...payload.payload,
        isActive: false, 
        input: buildResourceObject() 
    })

    const { nodes, edges } = gameState;
    const targetNode = nodes.find(n => n.id === payload.payload.target)

    updateNodeState(targetNode, nodes, edges);
}