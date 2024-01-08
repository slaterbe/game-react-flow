import { uniq, intersection } from "lodash";

const getAllUpStreamNodesRecursive = (originId, edges) => getAllUpStreamNodes(originId, edges);

const getAllUpStreamNodes = (originId, edges) => {
    const upstreamNodes = edges.filter(e => e.source === originId)
        .map(e => e.target);

    const childUpstreamNodes = upstreamNodes
        .flatMap(n => getAllUpStreamNodesRecursive(n, edges));

    const uniqueNodes = uniq([...upstreamNodes, ...childUpstreamNodes]);

    return uniqueNodes;
}

const getAllDownStreamNodesRecursive = (originId, edges) => getAllDownStreamNodes(originId, edges);

const getAllDownStreamNodes = (originId, edges) => {
    const downstreamNodes = edges.filter(e => e.target === originId)
        .map(e => e.source);

    const childDownstreamNodes = downstreamNodes
        .flatMap(n => getAllDownStreamNodesRecursive(n, edges));

    const uniqueNodes = uniq([...downstreamNodes, ...childDownstreamNodes]);

    return uniqueNodes;
}

export const getEdgeValidErrorMessage = (newEdge, edges, nodes) => {
    //1. Just going back on an existing edge
    const conflictingEdge = edges.find(e => e.source === newEdge.target && e.target === newEdge.source);

    if(conflictingEdge) return 'Circular reference with nodes';

    //2. Detect and prevent duplicate edges
    const duplicateEdge = edges.find(e => e.source === newEdge.source && e.target === newEdge.target);

    if(duplicateEdge) return 'An edge between these 2 nodes already exist';

    //3. Target is a resource node
    const targetNode = nodes.find(n => n.id === newEdge.target);
    if(targetNode.type === "resourceNode") return 'Can not connect TO resource node';

    //4. Some overlap in node tree graph
    const upstreamNodes = getAllUpStreamNodes(newEdge.target, edges);
    const downstreamNodes = getAllDownStreamNodes(newEdge.source, edges);

    const intersectedNodes = intersection(upstreamNodes, downstreamNodes);

    if(intersectedNodes.length !== 0) return 'Circular reference with nodes';

    return null;
}