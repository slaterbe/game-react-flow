"use client"

import { Provider } from 'react-redux'
import { store } from '../redux/store'

import { Map } from './map/Map';

export const GameContainer = () => {

    return (
        <>
            <Provider store={store}>
                <Map />
            </Provider>
        </>
    )
}