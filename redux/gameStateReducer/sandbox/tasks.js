import {
    unlockNextNode,
    unlockFactory
} from '../../util/reward/rewardFactory';

import { TASK_TYPE } from '../../util/task/task';

export const tasks = [
    {
        title: 'Assign Common Forge to Node 2',
        completeMessage: 'Unlocked new node',
        type: TASK_TYPE.ASSIGN_FACTORY_NODE,
        params: { id: "2", factoryType: "commonForge" },
        claimed: false,
        rewards: [unlockNextNode()]
    },
    {
        title: 'Connect Node 2 and 3',
        type: TASK_TYPE.CREATE_EDGE,
        params: { source: "2", target: "3" },
        claimed: false,
        rewards: []
    },
    {
        title: 'Unblock Node 3',
        completeMessage: 'Unlocked new node.  A new factory has been added to your library',
        type: TASK_TYPE.UNBLOCK_NODE,
        params: { id: "3" },
        claimed: false,
        rewards: [unlockFactory("commonForgeV2"), unlockNextNode()]
    },
    {
        title: 'Unblock Node 4',
        completeMessage: 'Unlocked new node',
        type: TASK_TYPE.UNBLOCK_NODE,
        params: { id: "4" },
        claimed: false,
        rewards: [unlockNextNode()]
    },
    {
        title: 'Unblock Node 5',
        completeMessage: 'A new factory has been added to your library',
        type: TASK_TYPE.UNBLOCK_NODE,
        params: { id: "5" },
        claimed: false,
        rewards: [unlockFactory("startingCorvetteFactory")]
    },
    {
        title: 'Unblock Node 6',
        completeMessage: 'Unlocked new node',
        type: TASK_TYPE.UNBLOCK_NODE,
        params: { id: "6" },
        claimed: false,
        rewards: [unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode(), unlockNextNode()]
    },
]
