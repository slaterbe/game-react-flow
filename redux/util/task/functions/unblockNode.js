import { toast } from "react-toastify";
import { rewardsApplier } from "../../reward/rewardApplier";

export const unblockNode = (gameState, task) => {
    const { nodes } = gameState;
    const { id } = task.params;

    const match = nodes.find(n => n.id === id)

    if (!match) return;

    if (match.nodeState === "blocked" || match.nodeState === "hidden")
        return;

    task.claimed = true;

    rewardsApplier(task.rewards, gameState);

    if (task.completeMessage)
        toast.success(task.completeMessage, { position: toast.POSITION.TOP_RIGHT });
}