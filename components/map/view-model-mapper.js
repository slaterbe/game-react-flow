import { MarkerType } from "@reactflow/core";

export const viewModelMapper = ({ nodes, edges, factories, shipyards, resourceNodes }) => {
    const vmResourceNodes = nodes
        .filter(n => n.type === "resourceNode")
        .map((node) => ({
            ...node,
            data: {
                ...resourceNodes[node.resourceType],
                nodeState: node.nodeState
            }
        }));

    const vmFactoryNodes = nodes
        .filter(n => n.type === "factoryNode")
        .map((node) => ({
            ...node,
            data: {
                ...factories[node.factoryType],
                nodeState: node.nodeState,
                factoryType: node.factoryType
            }
        }));

    const vmShipyardNodes = nodes
        .filter(n => n.type === "shipyardNode")
        .map((node) => ({
            ...node,
            data: {
                ...shipyards[node.shipyardType],
                nodeState: node.nodeState
            }
        }));

    const vmEdges = edges.map(e => ({
        ...e,
        id: `e${e.source}-${e.target}`,
        animated: e.isActive,
        markerEnd: { type: MarkerType.ArrowClosed },
        type: 'edgeLabel',
        style: {
            strokeWidth: 3
        },
        data: {
            input: e.input
        }
    }));

    return {
        nodes: [
            ...vmResourceNodes,
            ...vmFactoryNodes,
            ...vmShipyardNodes
        ],
        edges: vmEdges
    }
}