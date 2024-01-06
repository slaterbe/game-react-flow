// Disconnected as will be managed on an event basis
export const edgeActiveProcessor = (gameState) => {
    const { nodes } = gameState;

    gameState.edges.forEach(edge => {
        const sourceNode = nodes.find(n => n.id === edge.source);

        edge.isActive = sourceNode.nodeState === "active";
    });
}