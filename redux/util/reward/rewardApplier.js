import { createShip } from './functions/createShip';
import { REWARD_TYPES } from './rewardType';

export const rewardApplier = (reward, gameState) => {
    switch(reward.type){
        case REWARD_TYPES.CREATE_SHIP:
            createShip(gameState, reward.params);
    }
}