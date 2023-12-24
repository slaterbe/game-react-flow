import { buildResourceObject } from '../../util/resource';

export const shipyards = {
    corvetteShipyard: {
        name: "Standard Corvette",
        input: buildResourceObject({
            corvetteHull: 1
        }),
        output: buildResourceObject({
            corvette: 1
        }),
        requiredTicks: 3
    },
    laserCorvetteShipyard: {
        name: "Laser Corvette",
        input: buildResourceObject({
            corvetteHull: 1,
            laserModule: 1,
        }),
        output: buildResourceObject({
            laserCorvette: 1
        }),
        requiredTicks: 3
    },
    frigateShipyard: {
        name: "Standard Frigate",
        input: buildResourceObject({
            frigateHull: 1
        }),
        output: buildResourceObject({
            frigate: 1
        }),
        requiredTicks: 8
    },
    laserFrigateShipyard: {
        name: "Laser Frigate",
        input: buildResourceObject({
            frigateHull: 1,
            laserModule: 3,
        }),
        output: buildResourceObject({
            laserFrigate: 1
        }),
        requiredTicks: 8
    }
}