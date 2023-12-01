import { activateNode } from '../../util';

const handleDeactivatingNode = (state, node) => {
    const { nodes, edges } = state;

    const relevantNodes = edges.filter(e => e.sourceId === node.id && e.isActive)
        .map(e => nodes.find(n => n.id === e.target))

    relevantNodes.foreach(n => {
        n.nodeState = 'invalid';
        handleDeactivatingNode(state, node);
    });
}

const handleActivatingNode = (state, node) => {
    const { nodes, edges } = state;
    node.nodeState = 'active';

    activateNode(node, nodes, edges);
}

export const toggleFactory = (gameState, item) => {
    const { nodes } = gameState;
    const nodeId = item.payload;
    const node = nodes.filter(n => n.id === nodeId)[0];

    if(node.nodeState === 'active')
        handleDeactivatingNode(gameState, node);
    else
        handleActivatingNode(gameState, node);
}