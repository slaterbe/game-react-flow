const reserveFriendlyShips = {
  startingAsteroid: 2,
  corvette: 0,
  laserCorvette: 0,
  frigate: 0,
  laserFrigate: 0
};

const reserveEnemyShips = {
  startingAsteroid: 2,
  corvette: 0,
  laserCorvette: 0,
  frigate: 0,
  laserFrigate: 0
}

export const battleMap = {
  friendlyShips: [],
  enemyShips: [],
  reserveFriendlyShips,
  reserveEnemyShips,
  enemyWaves: [
    {
      name: "Asteroid",
      ships: { startingAsteroid: 2 },
      reward: { type: "more-common-ore", params: {} },
      params: { combatWidth: 1 }
    },
    {
      name: "Enemy Wave 1",
      ships: { corvette: 6 },
      reward: { type: "increase-battle-width", params: {} },
      params: { combatWidth: 2 }
    },
    {
      name: "Asteroid",
      ships: { startingAsteroid: 2 },
      reward: { type: "more-common-ore", params: {} },
      params: { combatWidth: 1 }
    },
    {
      name: "Enemy Wave 3",
      ships: { corvette: 6 },
      reward: { type: "increase-battle-width", params: {} },
      params: { combatWidth: 3 }
    }
  ],
  config: {
    battleWidth: 3
  }
}