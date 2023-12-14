"use client"
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import { Map } from './node-map/Map';
import { BattleMap } from './BattleMap/BattleMap';

export const GameContainer = () => {

    return (
        <>
            <Provider store={store}>
                {/* <Map /> */}
                <BattleMap />
            </Provider>
            <ToastContainer />
        </>
    )
}