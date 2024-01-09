import { emptyShipConfigs } from '../../util/ships/shipConfigs';
import { REWARD_TYPES } from '../../util/reward/rewardType';
import { unlockNextNode } from '../../util/reward/rewardFactory';

const reservePlayerShips = {
  ...emptyShipConfigs,
  corvette: 0
};

const reserveEnemyShips = {
  ...emptyShipConfigs,
  startingAsteroid: 2
}

export const battleMap = {
  playerShips: [],
  enemyShips: [],
  reservePlayerShips,
  reserveEnemyShips,
  currentWave: null,
  enemyWaves: [
    // {
    //   name: "Asteroid",
    //   ships: { ...emptyShipConfigs, startingAsteroid: 2 },
    //   rewards: [{
    //     type: REWARD_TYPES.CREATE_SHIP, params: {
    //       ships: { ...emptyShipConfigs, frigate: 3 }
    //     }
    //   }],
    //   battleWidth: 1
    // },
    // {
    //   name: "Enemy Wave 1",
    //   ships: { ...emptyShipConfigs, corvette: 6 },
    //   rewards: [unlockNextNode()],
    //   battleWidth: 2
    // },
    // {
    //   name: "Asteroid",
    //   ships: { ...emptyShipConfigs, startingAsteroid: 2 },
    //   rewards: [unlockNextNode()],
    //   battleWidth: 1
    // },
    // {
    //   name: "Enemy Wave 3",
    //   ships: { ...emptyShipConfigs, corvette: 6 },
    //   rewards: [unlockNextNode()],
    //   battleWidth: 3
    // }
  ],
  config: {
    battleWidth: 0
  }
}