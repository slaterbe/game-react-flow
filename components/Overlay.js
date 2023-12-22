import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { TaskLog } from "./TaskLog";
import { FactorySelector } from './FactorySelector/FactorySelector';
import { ShipyardSelector } from './ShipyardSelector/ShipyardSelector';
import {
    closeFactoryDialog,
    changeFactory,
    closeShipyardDialog,
    changeShipyard,
    openBattleMap,
    openNodeMap
} from '../redux/gameStateReducer/gameStateReducer';
import { shipConfigs } from '../redux/util/ships/shipConfigs';

export const Overlay = ({ ships, tickCounter }) => {
    const [taskLogOpen, setTaskLogOpen] = useState(false);
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.gameState.tasks);

    const factorySelector = useSelector(state => state.gameState.ui.factorySelector);
    const shipyardSelector = useSelector(state => state.gameState.ui.shipyardSelector);
    const factories = useSelector(state => state.gameState.factories);
    const shipyards = useSelector(state => state.gameState.shipyards);
    const nodes = useSelector(state => state.gameState.nodes);

    const factorySelectedNode = nodes.find(n => n.id === factorySelector.nodeId);
    const shipyardSelectedNode = nodes.find(n => n.id === shipyardSelector.nodeId);

    return (
        <>
            <div className="w-full h-24 absolute bg-blue-400 z-40 flex flex-col justify-start">
                <div className="flex justify-between">
                    <div>
                        {
                            shipConfigs.map((config, index) => (
                                <div className="inline-block text-left text-lg text-green-900 px-4 font-medium" key={index}>
                                    {ships[config.id]} {config.name}
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <div className="inline-block text-right text-lg text-black p-4 font-medium">
                            Tick: {tickCounter}
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <button
                        onClick={() => dispatch(openNodeMap())}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded m-2">
                        Resource Nodes
                    </button>
                    <button
                        onClick={() => dispatch(openBattleMap())}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded m-2">
                        Battle Map
                    </button>
                </div>
            </div>

            {factorySelector.isOpen &&
                <FactorySelector
                    close={() => dispatch(closeFactoryDialog())}
                    select={(payload) => dispatch(changeFactory(payload))}
                    node={factorySelectedNode}
                    factories={factories} />}

            {shipyardSelector.isOpen &&
                <ShipyardSelector
                    close={() => dispatch(closeShipyardDialog())}
                    select={(payload) => dispatch(changeShipyard(payload))}
                    node={shipyardSelectedNode}
                    shipyards={shipyards} />}

            {taskLogOpen && <TaskLog close={() => setTaskLogOpen(false)} tasks={tasks} />}

            <div className="absolute bottom-0 right-0 z-50">
                <div className="w-16 h-16 text-xs p-2 m-4 bg-blue-400 cursor-pointer"
                    onClick={() => setTaskLogOpen(true)}>
                    Task Log
                </div>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqAQgFYNl7mrZuojFdmNwm8jrvdQSxTzH6Zdli875E6AeJvg/viewform?usp=pp_url"
                    className="w-16 h-16 text-xs block p-2 m-4 bg-blue-400 cursor-pointer"
                    target="_blank">
                    Feedback
                </a>
            </div>
        </>
    )
}