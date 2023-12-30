import { buildResourceObject } from '../../util/resource';
import { baseFactories } from '../../util/factories/factories';

export const factories = {
  smelter: baseFactories.smelter,
  empty: {
    name: "",
    input: buildResourceObject(),
    output: buildResourceObject()
  }
}