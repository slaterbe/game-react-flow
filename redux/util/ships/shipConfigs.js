const shipBuilder = (name, healthTotal, damage, isPlayer) => ({
    name,
    healthTotal,
    damage,
    isPlayer
})

export const shipConfigs = {
    startingAsteroid: shipBuilder("Asteroid", 200, 0, false),
    corvette: shipBuilder("Standard Corvette", 100, 5, true),
    laserCorvette: shipBuilder("Laser Corvette", 100, 30, true),
    frigate: shipBuilder("Standard Frigate", 300, 15, true),
    laserFrigate: shipBuilder("Laser Frigate", 300, 45, true)
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