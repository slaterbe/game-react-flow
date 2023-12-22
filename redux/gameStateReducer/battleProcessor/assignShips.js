const fillLineWithShipType = (gameState, shipType) => {
    const { battleMap, ships, shipTypes } = gameState;
    const { friendlyShips, config } = battleMap;

    const shipTypeModel = shipTypes[shipType];

    const missingWidth = config.battleWidth - friendlyShips.length;

    if(missingWidth === 0)
        return;

    const remainingShips = ships[shipType];

    if(remainingShips <= 0)
        return;

    const chosenWidth = Math.min(missingWidth, remainingShips);

    const newShips = [...Array(chosenWidth).keys()].map(ship => ({
        ...shipTypeModel,
        healthCurrent: shipTypeModel.healthTotal,
        isFriendly: true
    }));

    ships[shipType] = ships[shipType] - chosenWidth;

    friendlyShips.push(...newShips);   
}

export const assignShips = (gameState) => {
    const shipTypes = ['corvette'];

    shipTypes.forEach(shipType => fillLineWithShipType(gameState, shipType))
}