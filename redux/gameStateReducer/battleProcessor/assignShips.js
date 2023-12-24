import { shipConfigs } from '../../util/ships/shipConfigs';

const fillLineWithShipType = (gameState, shipType) => {
    const { battleMap } = gameState;
    const { playerShips, reservePlayerShips, config } = battleMap;

    const shipTypeModel = shipConfigs[shipType];

    const missingWidth = config.battleWidth - playerShips.length;

    if(missingWidth === 0)
        return;

    const remainingShips = reservePlayerShips[shipType];

    if(remainingShips <= 0)
        return;

    const chosenWidth = Math.min(missingWidth, remainingShips);

    const newShips = [...Array(chosenWidth).keys()].map(ship => ({
        ...shipTypeModel,
        healthCurrent: shipTypeModel.healthTotal,
        isPlayer: true
    }));

    reservePlayerShips[shipType] = reservePlayerShips[shipType] - chosenWidth;

    playerShips.push(...newShips);   
}

export const assignShips = (gameState) => {
    const shipTypes = Object.keys(shipConfigs);

    shipTypes.forEach(shipType => fillLineWithShipType(gameState, shipType))
}