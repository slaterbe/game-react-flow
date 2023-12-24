import { MarkerType } from "@reactflow/core";

const SPACING = 350;

const buildPosition = (node) => ({ 
    x: node.position.x * SPACING, 
    y: node.position.y * SPACING 
})

export const viewModelMapper = ({ nodes, edges, factories, shipyards, resourceNodes }) => {
    const vmResourceNodes = nodes
        .filter(n => n.type === "resourceNode")
        .map((node) => ({
            ...node,
            position: buildPosition(node),
            data: {
                ...resourceNodes[node.resourceType],
                nodeState: node.nodeState
            }
        }));

    const vmFactoryNodes = nodes
        .filter(n => n.type === "factoryNode")
        .map((node) => ({
            ...node,
            position: buildPosition(node),
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
            position: buildPosition(node),
            data: {
                ...shipyards[node.shipyardType],
                nodeState: node.nodeState,
                completePercentage: Math.floor((node.counterTick ?? 0) * 100 / shipyards[node.shipyardType].requiredTicks)
            }
        }));

    const vmEdges = edges.map(e => ({
        ...e,
        id: `e${e.source}-${e.target}`,
        animated: e.isActive,
        markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20 },
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