import { computeNodeChange } from '../../util/nodeV2/computeNodeChange';

export const deleteEdge = (gameState, payload) => {
    const { edges, nodes } = gameState;
    const target = payload.payload.target;

    gameState.edges = edges
        .filter(e => !(e.source === payload.payload.source && e.target === target));

    const targetNode = nodes.find(n => n.id === target);

    computeNodeChange(gameState, targetNode);
}