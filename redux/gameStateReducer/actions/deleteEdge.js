export const deleteEdge = (gameState, payload) => {
    const { edges } = gameState;

    gameState.edges = edges
        .filter(e => !(e.source === payload.payload.source && e.target === payload.payload.target));
}