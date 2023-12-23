export const shipConfigs = {
    startingAsteroid: { name: "Asteroid", healthTotal: 200, damage: 0 },
    corvette: { name: "Standard Corvette", healthTotal: 100, damage: 5 },
    laserCorvette: { name: "Laser Corvette", healthTotal: 100, damage: 30 },
    frigate: { name: "Standard Frigate", healthTotal: 300, damage: 15 },
    laserFrigate: { name: "Laser Frigate", healthTotal: 300, damage: 45 }
};

export const emptyShipConfigs = Object.keys(shipConfigs)
    .reduce((accum, current) => {
        accum[current] = 0
        return accum;
    }, {})

export const addShips = (ships1, ships2) => Object.keys(shipConfigs)
    .reduce((accum, current) => {
        accum[current] = ships1[current] + ships2[current]
        return accum;
    }, {})