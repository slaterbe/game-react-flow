import { rewardsApplier } from "../../reward/rewardApplier";

export const activeNode = (gameState, task) => {
    const { nodes } = gameState;
    const { id } = task.params;

    const match = nodes.find(n => n.id === id)

    if(!match) return;

    if(match.nodeState !== "active")
        return;

    task.claimed = true;
    rewardsApplier(task.reward, gameState);
}