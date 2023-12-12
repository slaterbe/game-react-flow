export const toggleShipyard = (gameState, item) => {
    const { nodes } = gameState;
    const nodeId = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.nodeState === 'active')
        node.nodeState = 'valid';
    else
        node.nodeState = 'active';
}