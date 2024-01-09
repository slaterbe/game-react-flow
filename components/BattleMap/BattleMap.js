import React from 'react';
import { useSelector } from 'react-redux';
import { WaveDetail } from './WaveDetail';
import { shipConfigs } from '@/redux/util/ships/shipConfigs';

const Ship = ({ ship }) => {
    const backgroundColour = ship.isPlayer ? "bg-blue-500" : "bg-red-500";

    return (
        <div className={`${backgroundColour} h-32 w-32 my-4 rounded-full flex flex-col justify-center text-center`}>
            <div>{ship.name}</div>
            <div>{ship.healthCurrent} / {ship.healthTotal} ❤️</div>
            <div>{ship.damage} 🔥</div>
        </div>
    )
}

export const BattleMap = () => {
    const gameState = useSelector((state) => state.gameState)

    const { playerShips, enemyShips, enemyWaves, currentWave } = gameState.battleMap;
    const { currentHealth, totalHealth } = gameState.mothership;

    const maxLength = Math.max(playerShips.length, enemyShips.length);

    const range = [...Array(maxLength).keys()];

    return (
        <div className="pt-24">
            <div className="m-4">
                <div className="bg-blue-500 rounded-full text-center py-8 text-xl mb-4">
                    <div>Mothership</div>
                    <div className="text-xs">{currentHealth} / {totalHealth}  HP</div>
                </div>
                <div>Battle Map</div>
                <div className="flex justify-start gap-x-4">
                    {range.map((key, index) => (
                        <div key={index}>
                            {playerShips[index] && <Ship ship={playerShips[index]} />}
                            {enemyShips[index] && <Ship ship={enemyShips[index]} />}
                        </div>
                    ))}
                </div>
                {currentWave && <div>
                    <div className="text-center text-2xl py-2">Current Wave: {currentWave.name}</div>
                    <div className="p-2">
                        <WaveDetail detail={currentWave} shipTypes={shipConfigs} />
                    </div>
                </div>}

                <div>
                    <div className="text-center text-2xl py-2">Incoming Waves</div>
                    {
                        enemyWaves.map((wave, index) => (
                            <div className="p-2" key={index}>
                                <div className="font-bold">{wave.name}</div>
                                <WaveDetail detail={wave} shipTypes={shipConfigs} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}