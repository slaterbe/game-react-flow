import { handleDeactivatingNode } from '../../util/node/standardNode';

export const deleteEdge = (gameState, payload) => {
    const { edges, nodes } = gameState;
    const target = payload.payload.target;

    gameState.edges = edges
        .filter(e => !(e.source === payload.payload.source && e.target === target));

    const node = nodes.find(n => n.id === target);

    handleDeactivatingNode(gameState, node);
}