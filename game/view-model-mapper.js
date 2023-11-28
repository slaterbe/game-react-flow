import { MarkerType } from "@reactflow/core";

export const viewModelMapper = ({ nodes, edges, factories }) => {
    const vmResourceNodes = nodes
        .filter(n => n.type === "resourceNode")
        .map((node, index) => ({
            ...node,
            data: {
                name: node.resourceType
            }
        }));

    const vmFactoryNodes = nodes
        .filter(n => n.type === "factoryNode")
        .map((node, index) => ({
            ...node,
            data: factories[node.factoryType]
        }));

    const vmShipyardNodes = nodes
        .filter(n => n.type === "shipyardNode")
        .map((node, index) => ({
            ...node,
            data: {
                name: "Shipyard",
                input: {
                    corvetteHull: 1
                },
                output: {
                    corvette: 1
                }
            }
        }));

    const vmEdges = edges.map(e => ({
        ...e,
        id: `e${e.source}-${e.target}`,
        animated: true,
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