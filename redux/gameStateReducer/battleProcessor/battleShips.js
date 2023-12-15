export const battleShips = (gameState) => {
    const { friendlyShips, enemyShips } = gameState.battleMap;

    friendlyShips.forEach((ship, index) => {
        const enemyShip = enemyShips[index]
        if(!enemyShip) return;

        enemyShip.healthCurrent = enemyShip.healthCurrent - ship.damage;
    })

    enemyShips.forEach((ship, index) => {
        const friendlyShip = friendlyShips[index]
        if(!friendlyShip) return;

        friendlyShip.healthCurrent = friendlyShip.healthCurrent - ship.damage;
    })

    gameState.battleMap.friendlyShips = friendlyShips.filter(ship => ship.healthCurrent > 0);
    gameState.battleMap.enemyShips = enemyShips.filter(ship => ship.healthCurrent > 0);
}