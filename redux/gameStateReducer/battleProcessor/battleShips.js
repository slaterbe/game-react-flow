export const battleShips = (gameState) => {
    const { playerShips, enemyShips } = gameState.battleMap;
    const lastPlayerShip = playerShips[playerShips.length - 1];
    const lastEnemyShip = enemyShips[enemyShips.length - 1];

    playerShips.forEach((ship, index) => {
        const enemyShip = enemyShips[index] ?? lastEnemyShip;
        if(!enemyShip) return;

        enemyShip.healthCurrent = enemyShip.healthCurrent - ship.damage;
    })

    enemyShips.forEach((ship, index) => {
        const playerShip = playerShips[index] ?? lastPlayerShip;
        if(!playerShip) return;

        playerShip.healthCurrent = playerShip.healthCurrent - ship.damage;
    })

    gameState.battleMap.playerShips = playerShips.filter(ship => ship.healthCurrent > 0);
    gameState.battleMap.enemyShips = enemyShips.filter(ship => ship.healthCurrent > 0);
}