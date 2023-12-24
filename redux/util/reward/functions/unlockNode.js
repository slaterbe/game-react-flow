export const unlockNode = (gameState) => {
    const node = gameState.nodes.find(n => n.nodeState === "hidden")
    node.nodeState = "invalid";
}