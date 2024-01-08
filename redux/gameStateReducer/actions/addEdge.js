import { toast } from "react-toastify";
import { edgeIntersection } from '../../util/edge/edgeIntersection';
import { buildResourceObject } from '../../util/resource';
import { computeNodeChange } from '../../util/nodeV2/computeNodeChange';
import { getEdgeValidErrorMessage } from '../../util/edge/getEdgeValidErrorMessage';

export const addEdge = (gameState, payload) => {
    const { nodes, edges } = gameState;
    const sourceNode = nodes.find(n => n.id === payload.payload.source);
    const targetNode = nodes.find(n => n.id === payload.payload.target);

    const newEdge = { 
        source: payload.payload.source, 
        sourceHandle: payload.payload.sourceHandle,
        target: payload.payload.target,
        targetHandle: payload.payload.targetHandle
    };

    // 1. Edge valid message
    const errorMessage = getEdgeValidErrorMessage(newEdge, edges, nodes);

    if (errorMessage) {
        toast.error(errorMessage, { position: toast.POSITION.TOP_RIGHT });
        return;
    }

    // 2. Edge intersection
    const intersection = edgeIntersection(newEdge, edges, nodes);
    if(intersection){
        toast.error('Lines cannot intersect', { position: toast.POSITION.TOP_RIGHT });
        return;
    }

    gameState.edges.push({
        ...payload.payload,
        isActive: sourceNode.nodeState === 'active',
        input: buildResourceObject()
    });

    computeNodeChange(gameState, targetNode);
}