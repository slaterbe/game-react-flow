import { toast } from "react-toastify";
import { rewardsApplier } from "../../reward/rewardApplier";

export const createEdge = (gameState, task) => {
    const { edges } = gameState;
    const { source, target } = task.params;

    const match = edges.some(e => e.target === target && e.source === source);

    if(!match) return;

    task.claimed = true;
    rewardsApplier(task.rewards, gameState);

    if(task.completeMessage)
        toast.success(task.completeMessage, { position: toast.POSITION.TOP_RIGHT });
}