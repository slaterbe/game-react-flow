import { toast } from "react-toastify";
import { edgeIntersection } from '../../util/node/edgeIntersection';
import { buildResourceObject } from '../../util/resource';
import { updateNodeState } from '../../util/node/standardNode';
import { getEdgeValidErrorMessage } from '../../util/node/getEdgeValidErrorMessage';

export const addEdge = (gameState, payload) => {
    const { nodes, edges } = gameState;
    const targetNode = nodes.find(n => n.id === payload.payload.target);

    const newEdge = { 
        source: payload.payload.source, 
        sourceHandle: payload.payload.sourceHandle,
        target: payload.payload.target,
        targetHandle: payload.payload.targetHandle
    };

    const errorMessage = getEdgeValidErrorMessage(newEdge, edges, nodes);

    if (errorMessage) {
        toast.error(errorMessage, { position: toast.POSITION.TOP_RIGHT });
        return;
    }

    const intersection = edgeIntersection(newEdge, edges, nodes);
    if(intersection){
        toast.error('Lines cannot intersect', { position: toast.POSITION.TOP_RIGHT });
        return;
    }

    gameState.edges.push({
        ...payload.payload,
        isActive: false,
        input: buildResourceObject()
    });

    updateNodeState(targetNode, gameState);
}