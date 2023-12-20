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

const Container = () => {
    const dispatch = useDispatch();
    const gameState = useSelector((state) => state.gameState)

    const { ships, tickCounter } = gameState;
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
            <Overlay ships={ships} tickCounter={tickCounter} />
            {activeTab === "node-map" && <NodeMap />}
            {activeTab === "battle-map" && <BattleMap />}
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