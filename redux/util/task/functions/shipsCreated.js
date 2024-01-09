import { toast } from "react-toastify";
import { rewardsApplier } from "../../reward/rewardApplier";

export const shipsCreated = (gameState, task) => {
    const ships = gameState.battleMap.reservePlayerShips;
    const {
        corvette,
        frigate,
        destroyer,
        cruiser
    } = task.params;

    if (corvette && ships.corvette >= corvette) {
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;

        if (task.completeMessage)
            toast.success(task.completeMessage, { position: toast.POSITION.TOP_RIGHT });
    }

    if (frigate && ships.frigate >= frigate) {
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;

        if (task.completeMessage)
            toast.success(task.completeMessage, { position: toast.POSITION.TOP_RIGHT });
    }

    if (destroyer && ships.destroyer >= destroyer) {
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;

        if (task.completeMessage)
            toast.success(task.completeMessage, { position: toast.POSITION.TOP_RIGHT });
    }

    if (cruiser && ships.cruiser >= cruiser) {
        rewardsApplier(task.rewards, gameState);
        task.claimed = true;

        if (task.completeMessage)
            toast.success(task.completeMessage, { position: toast.POSITION.TOP_RIGHT });
    }
}