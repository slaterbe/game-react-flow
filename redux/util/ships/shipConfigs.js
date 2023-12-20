export const shipConfigs = [
    { id: "corvette", name: "Standard Corvette" },
    { id: "laserCorvette", name: "Laser Corvette" },
    { id: "frigate", name: "Standard Frigate" },
    { id: "laserFrigate", name: "Laser Frigate" },
    // { id: "destroyer", name: "Destroyer" },
    // { id: "cruiser", name: "Cruiser" },
];

export const emptyShipConfigs = shipConfigs
    .reduce((accum, current) => {
        accum[current.id] = 0
        return accum;
    }, {})

export const addShips = (ships1, ships2) => shipConfigs
    .reduce((accum, current) => {
        accum[current.id] = ships1[current.id] + ships2[current.id]
        return accum;
    }, {})