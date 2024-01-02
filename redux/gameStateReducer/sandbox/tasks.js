import {
    unlockNextNode,
    unlockFactory
} from '../../util/reward/rewardFactory';

import { TASK_TYPE } from '../../util/task/task';

export const tasks = [
    {
        title: 'Build 1 Corvettes',
        type: TASK_TYPE.SHIP_CREATED,
        params: { corvette: 1 },
        claimed: false,
        rewards: [unlockNextNode()]
    },
    {
        title: 'Connect Node 2 and 3',
        type: TASK_TYPE.CREATE_EDGE,
        params: { source: "1", target: "2" },
        claimed: false,
        rewards: [unlockNextNode()]
    }, {
        title: 'Build 5 Corvettes',
        params: { corvette: 5 },
        claimed: false,
        rewards: [unlockFactory("commonForge")]
    }, {
        title: 'Build 10 Corvettes',
        params: { corvette: 10 },
        claimed: false,
        rewards: [unlockNextNode()]
    },
    {
        title: 'Build 20 Corvettes',
        params: { corvette: 20 },
        claimed: false,
        rewards: [unlockNextNode()]
    },
    {
        title: 'Build 100 Corvettes',
        params: { corvette: 100 },
        claimed: false,
        rewards: [unlockNextNode()]
    },
    {
        title: 'Build 20 Frigates',
        params: { frigate: 20 },
        claimed: false,
        rewards: [unlockNextNode()]
    },
]
