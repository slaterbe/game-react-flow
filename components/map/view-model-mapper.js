import { MarkerType } from "@reactflow/core";

export const viewModelMapper = ({ nodes, edges, factories, shipyards, resourceNodes }) => {
    const vmResourceNodes = nodes
        .filter(n => n.type === "resourceNode")
        .map((node) => ({
            ...node,
            data: {
                ...resourceNodes[node.resourceType],
                isActive: node.isActive,
                isVisible: node.isVisible,
            }
        }));

    const vmFactoryNodes = nodes
        .filter(n => n.type === "factoryNode")
        .map((node) => ({
            ...node,
            data: {
                ...factories[node.factoryType],
                isVisible: node.isVisible,
                isActive: node.isActive
            }
        }));

    const vmShipyardNodes = nodes
        .filter(n => n.type === "shipyardNode")
        .map((node) => ({
            ...node,
            data: {
                ...shipyards[node.shipyardType],
                isVisible: node.isVisible,
                isActive: node.isActive
            }
        }));

    const vmEdges = edges.map(e => ({
        ...e,
        id: `e${e.source}-${e.target}`,
        animated: e.isActive,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: {
            strokeWidth: 3
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