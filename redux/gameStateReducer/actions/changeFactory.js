import { computeNodeChange } from '../../util/nodeV2/computeNodeChange';

export const changeFactory = (gameState, item) => {
    const { nodes } = gameState;
    const { factorySelector } = gameState.ui;
    const { nodeId, newFactoryType } = item.payload;
    const node = nodes.find(n => n.id === nodeId);

    node.factoryType = newFactoryType;
    computeNodeChange(gameState, node);

    // Updating UI State
    factorySelector.isOpen = false;
    factorySelector.nodeId = null;
}