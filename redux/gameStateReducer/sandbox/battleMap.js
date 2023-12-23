import { emptyShipConfigs } from '../../util/ships/shipConfigs';

const reserveFriendlyShips = {
  ...emptyShipConfigs,
  corvette: 2
};

const reserveEnemyShips = {
  ...emptyShipConfigs,
  startingAsteroid: 2
}

export const battleMap = {
  friendlyShips: [],
  enemyShips: [],
  reserveFriendlyShips,
  reserveEnemyShips,
  currentWave: null,
  enemyWaves: [
    {
      name: "Asteroid",
      ships: { ...emptyShipConfigs, startingAsteroid: 2 },
      reward: { type: "more-common-ore", params: {} },
      battleWidth: 1
    },
    {
      name: "Enemy Wave 1",
      ships: { ...emptyShipConfigs, corvette: 6 },
      reward: { type: "increase-battle-width", params: {} },
      battleWidth: 2
    },
    {
      name: "Asteroid",
      ships: { ...emptyShipConfigs, startingAsteroid: 2 },
      reward: { type: "more-common-ore", params: {} },
      battleWidth: 1
    },
    {
      name: "Enemy Wave 3",
      ships: { ...emptyShipConfigs, corvette: 6 },
      reward: { type: "increase-battle-width", params: {} },
      battleWidth: 3
    }
  ],
  config: {
    battleWidth: 3
  }
}