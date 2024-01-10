import { hasResource } from "@/redux/util/resource";
import { MarkerType } from "@reactflow/core";

export const edgeMapper = (gameState, edge) => {
    const isActive = hasResource(edge.input);

    return ({
        ...edge,
        id: `e${edge.source}-${edge.target}`,
        animated: isActive,
        markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20 },
        type: 'edgeLabel',
        style: {
            strokeWidth: 3
        },
        data: {
            input: edge.input
        }
    })
}