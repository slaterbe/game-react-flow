import { emptyShipConfigs, shipConfigs } from '../../util/ships/shipConfigs';
import { gameState } from '../sandbox/sandbox-v3';
import { rewardsApplier } from '@/redux/util/reward/rewardApplier';

const fillLineWithShipType = (gameState, shipType) => {
    const { battleMap } = gameState;
    const { enemyShips, enemyWaves, reserveEnemyShips, config, currentWave } = battleMap;

    if(currentWave === null)
        return;
    
    const { battleWidth } = battleMap.currentWave;

    const shipTypeModel = shipConfigs[shipType];

    const missingWidth = battleWidth - enemyShips.length;

    if(missingWidth === 0)
        return;

    const remainingShips = battleMap.reserveEnemyShips[shipType];

    if(remainingShips <= 0)
        return;

    const chosenWidth = Math.min(missingWidth, remainingShips);

    const newShips = [...Array(chosenWidth).keys()].map(ship => ({
        ...shipTypeModel,
        healthCurrent: shipTypeModel.healthTotal,
        isPlayer: false
    }));

    battleMap.reserveEnemyShips[shipType] = battleMap.reserveEnemyShips[shipType] - chosenWidth;

    enemyShips.push(...newShips);   
}

const replaceWaveIfDepleted = (gameState) => {
    const { battleMap } = gameState;

    if(battleMap.enemyShips.length !== 0)
        return;

    rewardsApplier(battleMap?.currentWave?.rewards, gameState);

    if(battleMap.enemyWaves.length === 0){
        battleMap.reserveEnemyShips = emptyShipConfigs;
        battleMap.currentWave = null;    
        battleMap.enemyWaves = [];
        return;
    }

    battleMap.reserveEnemyShips = battleMap.enemyWaves[0]?.ships;
    battleMap.currentWave = battleMap.enemyWaves[0];    
    battleMap.enemyWaves = battleMap.enemyWaves?.slice(1);
}

export const applyWave = (gameState) => {
    const shipTypeKeys = Object.keys(shipConfigs);

    replaceWaveIfDepleted(gameState);

    shipTypeKeys.forEach(shipType => fillLineWithShipType(gameState, shipType))
}