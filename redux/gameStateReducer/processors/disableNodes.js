export const disableNodesProcessor = (gameState) => {
    //Disable all empty nodes
    gameState.nodes
        .filter(n => n.type === "factoryNode" && n.isActive && n.factoryType === "empty")
        .forEach(node => {
            node.isActive = false;
        });
}