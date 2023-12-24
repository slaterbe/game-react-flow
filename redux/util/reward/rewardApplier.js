import { createShip } from './functions/createShip';
import { unlockNode } from './functions/unlockNode';
import { REWARD_TYPES } from './rewardType';

export const rewardApplier = (reward, gameState) => {
    if(!reward) return null;

    switch(reward.type){
        case REWARD_TYPES.CREATE_SHIP:
            createShip(gameState, reward.params);
        case REWARD_TYPES.UNLOCK_NEXT_NODE:
            unlockNode(gameState);
    }
}