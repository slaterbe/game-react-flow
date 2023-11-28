export const disableNodesProcessor = (gameState) => {
    const { shipyards } = gameState;

    //Disable all empty nodes
    gameState.nodes
        .filter(n => n.type === "factoryNode" && n.isActive && n.factoryType === "empty")
        .forEach(node => {
            node.isActive = false;
        });
}