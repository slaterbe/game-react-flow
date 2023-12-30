import { rewardsApplier } from "@/redux/util/reward/rewardApplier";

const processTask = (task, ships, gameState) => {
    const {
        corvette,
        frigate,
        destroyer,
        cruiser
    } = task.requirement;

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

export const taskProcessor = (gameState) => {
    const { tasks, battleMap } = gameState;
    const { reservePlayerShips } = battleMap;

    tasks
        .filter(t => !t.claimed)
        .forEach(t => processTask(t, reservePlayerShips, gameState));
}