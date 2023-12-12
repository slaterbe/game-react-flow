import { addShips, emptyShipConfigs } from '../../util/ships/shipConfigs';

export const addShipProcessor = (gameState) => {
    const { shipyards } = gameState;

    const newShips = gameState.nodes
        .filter(n => n.type === "shipyardNode" && n.nodeState === 'active')
        .map(node => shipyards[node.shipyardType].output)
        .reduce(addShips, emptyShipConfigs);

    gameState.globalResources = addShips(gameState.globalResources, newShips);
}