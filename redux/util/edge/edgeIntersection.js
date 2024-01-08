import { checkIntersection } from 'line-intersect';

const getXPosition = (handle, nodeId, nodes) => {
    const x = nodes.find(n => n.id === nodeId).position.x;

    if (handle === "sr" || handle === "tr")
        return x + 0.01;

    if (handle === "sl" || handle === "tl")
        return x - 0.01;

    return x;
}

const getYPosition = (handle, nodeId, nodes) => {
    const y = nodes.find(n => n.id === nodeId).position.y;

    if (handle === "st" || handle === "tt")
        return y + 0.01;

    if (handle === "sb" || handle === "tb")
        return y - 0.01;

    return y;
}

export const edgeIntersection = (newEdge, edges, nodes) => {
    const edgesTranslated = edges
        .filter(e => e.source !== newEdge.source
            && e.target !== newEdge.source
            && e.source !== newEdge.target
            && e.target !== newEdge.target)
        .map(e => ({
            x1: getXPosition(e.sourceHandle, e.source, nodes),
            y1: getYPosition(e.sourceHandle, e.source, nodes),
            x2: getXPosition(e.targetHandle, e.target, nodes),
            y2: getYPosition(e.targetHandle, e.target, nodes),
        }));

    const newEdgeTranslated = {
        x1: getXPosition(newEdge.sourceHandle, newEdge.source, nodes),
        y1: getYPosition(newEdge.sourceHandle, newEdge.source, nodes),
        x2: getXPosition(newEdge.targetHandle, newEdge.target, nodes),
        y2: getYPosition(newEdge.targetHandle, newEdge.target, nodes),
    }

    const result = edgesTranslated.some(e => checkIntersection(
        newEdgeTranslated.x1,
        newEdgeTranslated.y1,
        newEdgeTranslated.x2,
        newEdgeTranslated.y2,
        e.x1,
        e.y1,
        e.x2,
        e.y2,
    ).type === 'intersecting');

    return result;
}