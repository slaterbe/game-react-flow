import { emptyShipConfigs } from '../../util/ships/shipConfigs';
import { REWARD_TYPES } from '../../util/reward/rewardType';

const reservePlayerShips = {
  ...emptyShipConfigs,
  corvette: 2
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
    {
      name: "Asteroid",
      ships: { ...emptyShipConfigs, startingAsteroid: 2 },
      reward: {
        type: REWARD_TYPES.CREATE_SHIP, params: {
          ships: { ...emptyShipConfigs, frigate: 3 }
        }
      },
      battleWidth: 1
    },
    {
      name: "Enemy Wave 1",
      ships: { ...emptyShipConfigs, corvette: 6 },
      reward: null,
      battleWidth: 2
    },
    {
      name: "Asteroid",
      ships: { ...emptyShipConfigs, startingAsteroid: 2 },
      reward: null,
      battleWidth: 1
    },
    {
      name: "Enemy Wave 3",
      ships: { ...emptyShipConfigs, corvette: 6 },
      reward: null,
      battleWidth: 3
    }
  ],
  config: {
    battleWidth: 3
  }
}