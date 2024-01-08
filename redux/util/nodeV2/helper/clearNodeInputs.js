import { buildResourceObject } from "../../resource";

export const clearNodeInputs = (gameState, node) => {
    const { edges } = gameState;

    edges.filter(e => e.target === node.id || e.source === node.id)
        .forEach(e => {
            e.input = buildResourceObject()
        });
}