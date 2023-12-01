const handleDeactivatingNode = (state, node) => {
    const { nodes, edges } = state;

    // 1. Get active edges
    // 2. Deactivate nodes
    // 3. Deactivate edges
    // 4. Use recursive call to keep cancelling nodes
}

export const toggleFactory = (gameState, payload) => {
    const nodeId = payload.id;
    const node = null;

    if(node.nodeState === 'active')
        handleDeactivatingNode(state, node);
    else
        node.nodeState = 'valid';
}