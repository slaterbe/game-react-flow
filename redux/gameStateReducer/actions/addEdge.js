import { buildResourceObject } from '../../util/resource';
import { updateNodeState } from '../../util/node';
import { isEdgeValid } from '../../util/node/isEdgeValid';

export const addEdge = (gameState, payload) => {
    const { nodes, edges } = gameState;
    const targetNode = nodes.find(n => n.id === payload.payload.target)

    const newEdge = { source: payload.payload.source, target: payload.payload.target };

    if(!isEdgeValid(newEdge, edges, nodes)){
        return;
    }

    gameState.edges.push({ 
        ...payload.payload,
        isActive: false, 
        input: buildResourceObject() 
    })

    updateNodeState(targetNode, nodes, edges);
}