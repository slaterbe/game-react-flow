import { gameState } from '@/redux/gameStateReducer/sandbox/sandbox-v3';
import { REWARD_TYPES } from './rewardType';
import { createShip } from './functions/createShip';
import { unlockNode } from './functions/unlockNode';
import { gainFactory } from './functions/gainFactory';

export const rewardApplier = (reward, gameState) => {
    if(!reward) return null;

    switch(reward.type){
        case REWARD_TYPES.CREATE_SHIP:
            createShip(gameState, reward.params);
        case REWARD_TYPES.NEW_FACTORY_TYPE:
            gainFactory(gameState, reward.params);
        case REWARD_TYPES.UNLOCK_NEXT_NODE:
            unlockNode(gameState);
    }
}

export const rewardsApplier = (rewards, gameState) => {  
    (rewards || []).forEach(reward => {
        rewardApplier(reward, gameState);
    });
}