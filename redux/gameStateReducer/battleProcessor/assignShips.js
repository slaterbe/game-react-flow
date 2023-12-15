export const assignShips = (gameState) => {
    const { battleMap, ships } = gameState;
    const { friendlyShips, config } = battleMap;

    const missingWidth = config.battleWidth - friendlyShips.length;

    if(missingWidth === 0)
        return;

    const remainingShips = ships.corvette;

    if(remainingShips <= 0)
        return;

    const chosenWidth = Math.min(missingWidth, remainingShips);

    const newShips = [...Array(chosenWidth).keys()].map(ship => ({
        name: "Corvette",
        healthTotal: 100,
        healthCurrent: 100,
        damage: 5,
        isFriendly: true
    }));

    ships.corvette = ships.corvette - chosenWidth;

    friendlyShips.push(...newShips);    
}