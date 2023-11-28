import { MarkerType } from "@reactflow/core";

export const viewModelMapper = ({ nodes, edges, factories }) => {
    const vmResourceNodes = nodes
        .filter(n => n.type === "resourceNode")
        .map((node, index) => ({
            ...node,
            data: {
                name: node.resourceType,
                isActive: node.isActive
            }
        }));

    const vmFactoryNodes = nodes
        .filter(n => n.type === "factoryNode")
        .map((node, index) => ({
            ...node,
            data: {
                ...factories[node.factoryType],
                isActive: node.isActive
            }
        }));

    const vmShipyardNodes = nodes
        .filter(n => n.type === "shipyardNode")
        .map((node, index) => ({
            ...node,
            data: {
                name: "Shipyard",
                isActive: node.isActive,
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
        animated: e.isActive,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: {
            strokeWidth: 3
        }
    }));

    console.log(vmEdges);

    return {
        nodes: [
            ...vmResourceNodes,
            ...vmFactoryNodes,
            ...vmShipyardNodes
        ],
        edges: vmEdges
    }
}