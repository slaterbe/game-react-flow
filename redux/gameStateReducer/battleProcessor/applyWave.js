const fillLineWithShipType = (gameState, shipType) => {
    const { battleMap, reserveEnemyShips, shipTypes } = gameState;
    const { enemyShips, config } = battleMap;

    // if(enemyShips.length === 0){
        
    // }

    const shipTypeModel = shipTypes[shipType];

    const missingWidth = config.battleWidth - enemyShips.length;

    if(missingWidth === 0)
        return;

    const remainingShips = reserveEnemyShips[shipType];

    if(remainingShips <= 0)
        return;

    const chosenWidth = Math.min(missingWidth, remainingShips);

    console.log(missingWidth);
    console.log(remainingShips);
    console.log(chosenWidth);
    const newShips = [...Array(chosenWidth).keys()].map(ship => ({
        ...shipTypeModel,
        healthCurrent: shipTypeModel.healthTotal,
        isFriendly: false
    }));

    reserveEnemyShips[shipType] = reserveEnemyShips[shipType] - chosenWidth;

    enemyShips.push(...newShips);   
}

export const applyWave = (gameState) => {
    const { shipTypes } = gameState;
    const shipTypeKeys = Object.keys(shipTypes);

    shipTypeKeys.forEach(shipType => fillLineWithShipType(gameState, shipType))
}