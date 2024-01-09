import { REWARD_TYPES } from "./rewardType"

export const unlockNextNode = () => ({ type: REWARD_TYPES.UNLOCK_NEXT_NODE })

export const unlockFactory = (factoryType) => ({
    type: REWARD_TYPES.NEW_FACTORY_TYPE,
    params: factoryType
})