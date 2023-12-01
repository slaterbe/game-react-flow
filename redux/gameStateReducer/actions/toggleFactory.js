const handleDeactivatingNode = (state, node) => {
    const { nodes, edges } = state;

    // 1. Get active edges
    // 2. Deactivate nodes
    // 3. Deactivate edges
    // 4. Use recursive call to keep cancelling nodes
}

export const toggleFactory = (gameState, item) => {
    const { nodes, edges } = gameState;
    const nodeId = item.payload;
    const node = nodes.filter(n => n.id === nodeId)[0];

    if(node.nodeState === 'active')
        node.nodeState = 'valid';
        // handleDeactivatingNode(state, node);
    else
        node.nodeState = 'active';
}