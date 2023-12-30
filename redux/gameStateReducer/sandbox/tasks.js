import { 
    unlockNextNode,
    unlockFactory
} from '../../util/reward/rewardFactory';

export const tasks = [
    { 
        title: 'Build 1 Corvettes', 
        requirement: { corvette: 1 }, 
        claimed: false,
        rewards: [unlockNextNode()]
    },{ 
        title: 'Build 5 Corvettes', 
        requirement: { corvette: 5 }, 
        claimed: false,
        rewards: [unlockFactory("commonForge")]
    },{ 
        title: 'Build 10 Corvettes', 
        requirement: { corvette: 10 }, 
        claimed: false,
        rewards: [unlockNextNode()]
    },
    {
        title: 'Build 20 Corvettes',
        requirement: { corvette: 20 },
        claimed: false,
        rewards: [unlockNextNode()]
    },
    { 
        title: 'Build 100 Corvettes', 
        requirement: { corvette: 100 }, 
        claimed: false, 
        rewards: [unlockNextNode()] 
    },
    { 
        title: 'Build 20 Frigates', 
        requirement: { frigate: 20 }, 
        claimed: false, 
        rewards: [unlockNextNode()] 
    },
]
