import { activateNode, buildResourceObject } from '../../util';

const handleDeactivatingNode = (state, node) => {
    const { nodes, edges } = state;

    const downstreamEdges = edges.filter(e => e.target === node.id && e.isActive);

    const upstreamEdges = edges.filter(e => e.source === node.id && e.isActive);
    const upstreamNodes = upstreamEdges
        .map(e => nodes.find(n => n.id === e.target))
        .filter(n => n.nodeState === "active");

    downstreamEdges.forEach(e => {
        e.input = buildResourceObject(),
        e.isActive = false;
    });

    upstreamEdges.forEach(e => {
        e.input = buildResourceObject();
        e.isActive = false;
    });

    upstreamNodes.forEach(n => {
        n.nodeState = 'invalid';
        handleDeactivatingNode(state, n);
    });

    node.nodeState = "valid";
}

const handleActivatingNode = (state, node) => {
    const { nodes, edges } = state;
    node.nodeState = 'active';

    activateNode(node, nodes, edges);
}

export const toggleFactory = (gameState, item) => {
    const { nodes } = gameState;
    const nodeId = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    if(node.nodeState === 'active')
        handleDeactivatingNode(gameState, node);
    else
        handleActivatingNode(gameState, node);
}