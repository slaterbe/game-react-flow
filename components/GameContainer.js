"use client"
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../redux/store'
import { battleTick, tick } from '../redux/gameStateReducer/gameStateReducer';

import { NodeMap } from './NodeMap/NodeMap';
import { BattleMap } from './BattleMap/BattleMap';
import { Overlay } from './Overlay';
import { GameOver } from './GameOver/GameOver';

const Container = () => {
    const dispatch = useDispatch();
    const gameState = useSelector((state) => state.gameState)

    const { battleMap, tickCounter } = gameState;
    const { reservePlayerShips } = battleMap;
    const { activeTab } = gameState.ui;

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(tick());
            dispatch(battleTick());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Overlay ships={reservePlayerShips} tickCounter={tickCounter} />
            <div className={`w-full h-full absolute bg-black
                ${activeTab === "node-map" ? "z-20" : "z-0"}`}>
                <NodeMap />
            </div>
            <div className={`w-full h-full absolute bg-black
                ${activeTab === "battle-map" ? "z-20" : "z-0"}`}>
                <BattleMap />
            </div>
            <div className={`w-full h-full absolute bg-black
                ${activeTab === "game-over" ? "z-20" : "z-0"}`}>
                <GameOver />
            </div>
        </>
    )
}

export const GameContainer = () => {
    return (
        <>
            <Provider store={store}>
                <Container />
            </Provider>
            <ToastContainer />
        </>
    )
}