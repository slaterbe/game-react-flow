import { rewardsApplier } from "../../reward/rewardApplier";

export const assignFactoryNode = (gameState, task) => {
    const { nodes } = gameState;
    const { id, factoryType } = task.params;

    const match = nodes.find(n => n.id === id)

    if(!match) return;

    if(match.factoryType !== factoryType)
        return;

    task.claimed = true;
    rewardsApplier(task.reward, gameState);
}