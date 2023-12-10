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

export const isEdgeValid = (newEdge, edges, nodes) => {
    //1. Just going back on an existing edge
    const conflictingEdge = edges.find(e => e.source === newEdge.target && e.target === newEdge.source);

    if(conflictingEdge) return false;

    //2. Target is a resource node
    const targetNode = nodes.find(n => n.id === newEdge.target);
    if(targetNode.type === "resourceNode") return false;

    //3. Some overlap in node tree graph
    const upstreamNodes = getAllUpStreamNodes(newEdge.target, edges);
    const downstreamNodes = getAllDownStreamNodes(newEdge.source, edges);

    const intersectedNodes = intersection(upstreamNodes, downstreamNodes);

    return intersectedNodes.length === 0;
}