import { buildResourceObject } from '../../util/resource';

export const resourceNodes = {
    commonOre: {
      name: "Common Ore",
      output: buildResourceObject({
        commonOre: 15
      })
    },
    rareOre: {
      name: "Rare Ore",
      output: buildResourceObject({
        rareOre: 20
      })
    },
    silicon: {
      name: "Silicon Deposit",
      output: buildResourceObject({
        silicon: 5
      })
    }
  }