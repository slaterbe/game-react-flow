const baseValue = {
    corvette: 0,
    frigate: 0,
    destroyer: 0,
    cruiser: 0
}

export const addShipProcessor = (gameState) => {
    const { shipyards } = gameState;

    const newShips = gameState.nodes
        .filter(n => n.type === "shipyardNode" && n.nodeState === 'active')
        .reduce((previous, currentValue) => ({
            corvette: (previous.corvette ?? 0) + (shipyards[currentValue.shipyardType].output.corvette ?? 0),
            frigate: (previous.frigate ?? 0) + (shipyards[currentValue.shipyardType].output.frigate ?? 0),
            destroyer: (previous.destroyer ?? 0) + (shipyards[currentValue.shipyardType].output.destroyer ?? 0),
            cruiser: (previous.cruiser ?? 0) + (shipyards[currentValue.shipyardType].output.cruiser ?? 0)
        }), baseValue);

    gameState.globalResources.corvette += newShips.corvette;
    gameState.globalResources.frigate += newShips.frigate;
    gameState.globalResources.destroyer += newShips.destroyer;
    gameState.globalResources.cruiser += newShips.cruiser;
}