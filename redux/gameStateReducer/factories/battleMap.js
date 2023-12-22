export const battleMap = {
    friendlyShips: [
      {
        name: "Corvette",
        healthTotal: 100,
        healthCurrent: 70,
        damage: 5,
        isFriendly: true
      },
      {
        name: "Corvette",
        healthTotal: 100,
        healthCurrent: 60,
        damage: 5,
        isFriendly: true
      }
    ],
    enemyShips: [],
    enemyWaves: [
      {
        name: "Asteroid",
        ships: { startingAsteroid: 2 },
        reward: { type: "more-common-ore", params: {} }
      },
      {
        name: "Enemy Wave 1",
        ships: { corvette: 6 },
        reward: { type: "increase-battle-width", params: {} }
      },
      {
        name: "Asteroid",
        ships: { startingAsteroid: 2 },
        reward: { type: "more-common-ore", params: {} }
      },
      {
        name: "Enemy Wave 3",
        ships: { corvette: 6 },
        reward: { type: "increase-battle-width", params: {} }
      }
    ],
    config: {
      battleWidth: 3
    }
  }