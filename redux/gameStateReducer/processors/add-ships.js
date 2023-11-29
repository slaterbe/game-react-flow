export const addShipProcessor = (gameState) => {
    const { shipyards } = gameState;

    const newShips = gameState.nodes
        .filter(n => n.type === "shipyardNode" && n.isActive)
        .reduce((previous, currentValue) => ({
            corvette: (previous.corvette ?? 0) + (shipyards[currentValue.shipyardType].output.corvette ?? 0),
            frigate: (previous.frigate ?? 0) + (shipyards[currentValue.shipyardType].output.frigate ?? 0),
            destroyer: (previous.destroyer ?? 0) + (shipyards[currentValue.shipyardType].output.destroyer ?? 0),
            cruiser: (previous.cruiser ?? 0) + (shipyards[currentValue.shipyardType].output.cruiser ?? 0)
        }), {});

    gameState.globalResources.corvette += newShips.corvette;
    gameState.globalResources.frigate += newShips.frigate;
    gameState.globalResources.destroyer += newShips.destroyer;
    gameState.globalResources.cruiser += newShips.cruiser;
}