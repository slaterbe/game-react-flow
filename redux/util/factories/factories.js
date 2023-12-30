import { buildResourceObject } from '../resource';

export const baseFactories = {
  smelter: {
    name: "Primative Corvette Manufactuer",
    input: buildResourceObject({
      commonOre: 15
    }),
    output: buildResourceObject({
      corvetteHull: 1
    })
  },
  commonForge: {
    name: "Common Forge",
    input: buildResourceObject({
      commonOre: 4
    }),
    output: buildResourceObject({
      commonPlate: 3
    })
  },
  commonForgev2: {
    name: "Common Forge v2",
    input: buildResourceObject({
      commonOre: 2,
      commonPlate: 3
    }),
    output: buildResourceObject({
      commonPlate: 6
    })
  },
  refinery: {
    name: "Refinery",
    input: buildResourceObject({
      commonOre: 4
    }),
    output: buildResourceObject({
      rareOre: 2
    })
  },
  basicHullv1: {
    name: "Basic Hull v1",
    input: buildResourceObject({
      commonOre: 4,
      commonShipPart: 2
    }),
    output: buildResourceObject({
      corvetteHull: 2
    })
  },
  basicHullv2: {
    name: "Basic Hull v2",
    input: buildResourceObject({
      commonPlate: 5
    }),
    output: buildResourceObject({
      corvetteHull: 1
    })
  },
  shipPartFactory: {
    name: "Ship Part Factory",
    input: buildResourceObject({
      commonPlate: 2
    }),
    output: buildResourceObject({
      commonShipPart: 3
    })
  },
  frigateHull: {
    name: "Frigate Hull Factory",
    input: buildResourceObject({
      corvetteHull: 1,
      enhancedPlate: 3
    }),
    output: buildResourceObject({
      frigateHull: 1
    })
  },
  enhancedPlateAlloyer: {
    name: "Enhanced Plate Alloyer",
    input: buildResourceObject({
      commonPlate: 3,
      rareOre: 3
    }),
    output: buildResourceObject({
      enhancedPlate: 3
    })
  },
  commonOreTransport: {
    name: "Common Ore Transport",
    input: buildResourceObject({
      commonOre: 5,
    }),
    output: buildResourceObject({
      commonOre: 5
    })
  },
  rareOreTransport: {
    name: "Rare Ore Transport",
    input: buildResourceObject({
      rareOre: 5,
    }),
    output: buildResourceObject({
      rareOre: 5
    })
  },
  laserModuleFactory: {
    name: "Laser Module Factory",
    input: buildResourceObject({
      silicon: 3,
      commonPlate: 2
    }),
    output: buildResourceObject({
      laserModule: 1
    })
  },
  laserModuleFactoryv2: {
    name: "Laser Module Factory v2",
    input: buildResourceObject({
      silicon: 3,
      enhancedPlate: 2
    }),
    output: buildResourceObject({
      laserModule: 3
    })
  },
  empty: {
    name: "",
    input: buildResourceObject(),
    output: buildResourceObject()
  }
}