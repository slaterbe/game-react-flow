export const shipConfigs = {
    startingAsteroid: { name: "Asteroid", healthTotal: 200, damage: 0, isPlayer: false },
    corvette: { name: "Standard Corvette", healthTotal: 100, damage: 5, isPlayer: true },
    laserCorvette: { name: "Laser Corvette", healthTotal: 100, damage: 30, isPlayer: true },
    frigate: { name: "Standard Frigate", healthTotal: 300, damage: 15, isPlayer: true },
    laserFrigate: { name: "Laser Frigate", healthTotal: 300, damage: 45, isPlayer: true }
};

export const emptyShipConfigs = Object.keys(shipConfigs)
    .reduce((accum, current) => {
        accum[current] = 0
        return accum;
    }, {})

export const addShips = (ships1, ships2) => Object.keys(shipConfigs)
    .reduce((accum, current) => {
        accum[current] = (ships1[current] ?? 0) + (ships2[current] ?? 0)
        return accum;
    }, {})