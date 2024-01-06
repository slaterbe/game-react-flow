import { rewardsApplier } from "../../reward/rewardApplier";

export const shipsCreated = (gameState, task) => {
    const ships = gameState.battleMap.reservePlayerShips;
    const {
        corvette,
        frigate,
        destroyer,
        cruiser
    } = task.params;
    
    if (corvette && ships.corvette >= corvette){
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;
    }
    
    if (frigate && ships.frigate >= frigate){
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;
    }
    
    if (destroyer && ships.destroyer >= destroyer){
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;
    }
    
    if (cruiser && ships.cruiser >= cruiser){
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;
    }
}