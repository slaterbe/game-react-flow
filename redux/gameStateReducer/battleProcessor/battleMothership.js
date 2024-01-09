export const battleMothership = (gameState) => {
    const { battleMap, mothership, ui } = gameState;
    const { playerShips, enemyShips } = battleMap;

    if(playerShips.length !== 0)
        return

    const result = enemyShips.reduce((accum, ship) => accum + ship.damage, 0);
    
    mothership.currentHealth = mothership.currentHealth - result;

    if(mothership.currentHealth <= 0)
        ui.activeTab = "game-over";
}