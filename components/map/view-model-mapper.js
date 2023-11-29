import { MarkerType } from "@reactflow/core";

export const viewModelMapper = ({ nodes, edges, factories, shipyards, resourceNodes }) => {
    const vmResourceNodes = nodes
        .filter(n => n.type === "resourceNode")
        .map((node) => ({
            ...node,
            data: {
                name: node.resourceType,
                isActive: node.isActive,
                ...resourceNodes[node.resourceType]
            }
        }));

    const vmFactoryNodes = nodes
        .filter(n => n.type === "factoryNode")
        .map((node) => ({
            ...node,
            data: {
                ...factories[node.factoryType],
                isActive: node.isActive
            }
        }));

    const vmShipyardNodes = nodes
        .filter(n => n.type === "shipyardNode")
        .map((node) => ({
            ...node,
            data: {
                name: "Shipyard",
                isActive: node.isActive,
                ...shipyards[node.shipyardType]
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