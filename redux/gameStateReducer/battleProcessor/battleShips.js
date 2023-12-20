export const battleShips = (gameState) => {
    const { friendlyShips, enemyShips } = gameState.battleMap;
    const lastFriendlyShip = friendlyShips[friendlyShips.length - 1];
    const lastEnemyShip = enemyShips[enemyShips.length - 1];

    friendlyShips.forEach((ship, index) => {
        const enemyShip = enemyShips[index] ?? lastEnemyShip;
        if(!enemyShip) return;

        enemyShip.healthCurrent = enemyShip.healthCurrent - ship.damage;
    })

    enemyShips.forEach((ship, index) => {
        const friendlyShip = friendlyShips[index] ?? lastFriendlyShip;
        if(!friendlyShip) return;

        friendlyShip.healthCurrent = friendlyShip.healthCurrent - ship.damage;
    })

    gameState.battleMap.friendlyShips = friendlyShips.filter(ship => ship.healthCurrent > 0);
    gameState.battleMap.enemyShips = enemyShips.filter(ship => ship.healthCurrent > 0);
}