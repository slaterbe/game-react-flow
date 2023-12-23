import { shipConfigs } from '../../util/ships/shipConfigs';

const fillLineWithShipType = (gameState, shipType) => {
    const { battleMap } = gameState;
    const { friendlyShips, reserveFriendlyShips, config } = battleMap;

    const shipTypeModel = shipConfigs[shipType];

    const missingWidth = config.battleWidth - friendlyShips.length;

    if(missingWidth === 0)
        return;

    const remainingShips = reserveFriendlyShips[shipType];

    if(remainingShips <= 0)
        return;

    const chosenWidth = Math.min(missingWidth, remainingShips);

    const newShips = [...Array(chosenWidth).keys()].map(ship => ({
        ...shipTypeModel,
        healthCurrent: shipTypeModel.healthTotal,
        isFriendly: true
    }));

    reserveFriendlyShips[shipType] = reserveFriendlyShips[shipType] - chosenWidth;

    friendlyShips.push(...newShips);   
}

export const assignShips = (gameState) => {
    const shipTypes = Object.keys(shipConfigs);

    shipTypes.forEach(shipType => fillLineWithShipType(gameState, shipType))
}