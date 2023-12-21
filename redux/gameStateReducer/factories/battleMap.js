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
    enemyShips: [
      {
        name: "Corvette",
        healthTotal: 30000,
        healthCurrent: 30000,
        damage: 10,
        isFriendly: false
      }
    ],
    enemyReserve: [],
    config: {
      battleWidth: 3
    }
  }