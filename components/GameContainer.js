"use client"
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux';
import { store } from '../redux/store'

import { Map } from './node-map/Map';
import { BattleMap } from './BattleMap/BattleMap';
import { Overlay } from './Overlay';

const Container = () => {
    const gameState = useSelector((state) => state.gameState)

    const { ships, tickCounter } = gameState;

    return (
        <>
            <Overlay ships={ships} tickCounter={tickCounter} />

            {/* <Map /> */}
            <BattleMap />
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