import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WaveDetail } from './WaveDetail';

const Ship = ({ ship }) => {
    const backgroundColour = ship.isFriendly ? "bg-blue-500" : "bg-red-500";

    return (
        <div className={`${backgroundColour} h-32 w-32 my-4 rounded-full flex flex-col justify-center text-center`}>
            <div>{ship.name}</div>
            <div>{ship.healthCurrent} / {ship.healthTotal} ❤️</div>
            <div>{ship.damage} 🔥</div>
        </div>
    )
}

export const BattleMap = () => {
    const dispatch = useDispatch()
    const gameState = useSelector((state) => state.gameState)

    const { shipTypes } = gameState;
    const { friendlyShips, enemyShips, enemyWaves } = gameState.battleMap;

    const maxLength = Math.max(friendlyShips.length, enemyShips.length);

    const range = [...Array(maxLength).keys()];

    return (
        <div className="pt-24">
            <div className="m-4">
                <div>Battle Map</div>
                <div className="flex justify-start gap-x-4">
                    {range.map((key, index) => (
                        <div key={index}>
                            {friendlyShips[index] && <Ship ship={friendlyShips[index]} />}
                            {enemyShips[index] && <Ship ship={enemyShips[index]} />}
                        </div>
                    ))}
                </div>
                <div>
                    <div className="text-center text-2xl py-2">Incoming Reserve</div>
                    {
                        enemyWaves.map((wave, index) => (
                            <div className="p-2" key={index}>
                                <div className="font-bold">{wave.name}</div>
                                <WaveDetail detail={wave} shipTypes={shipTypes} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}