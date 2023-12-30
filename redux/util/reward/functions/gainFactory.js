import { baseFactories } from '../../factories/factories';

export const gainFactory = (gameState, params) => {
    const factoryType = params;

    gameState.factories[factoryType] = baseFactories[factoryType];
}