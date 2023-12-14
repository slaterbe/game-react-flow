import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { battleTick } from '../../redux/gameStateReducer/gameStateReducer';

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

    const { friendlyShips, enemyShips } = gameState.battleMap;

    const maxLength = Math.max(friendlyShips.length, enemyShips.length);

    const range = [...Array(maxLength).keys()];

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(battleTick())
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="p-4">
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
                <div className="text-center text-2xl py-2">Active Reserve</div>
                <div>
                    Attack Force 1
                </div>
            </div>
            <div>
                <div className="text-center text-2xl py-2">Incoming Reserve</div>
                <div>
                    Attack Force 1
                </div>
            </div>
        </div>
    )
}