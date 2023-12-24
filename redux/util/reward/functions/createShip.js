import { addShips } from "../../ships/shipConfigs";

export const createShip = (gameState, rewardParams) => {
    const reserve = gameState.battleMap.reservePlayerShips;
    const totalShips = addShips(reserve, rewardParams.ships);
    gameState.battleMap.reservePlayerShips = totalShips;
}