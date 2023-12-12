import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { TaskLog } from "./TaskLog";
import { FactorySelector } from './FactorySelector/FactorySelector';
import { ShipyardSelector } from './ShipyardSelector/ShipyardSelector';
import { closeFactoryDialog, changeFactory } from '../redux/gameStateReducer/gameStateReducer';
import { closeShipyardDialog, changeShipyard } from '../redux/gameStateReducer/gameStateReducer';

export const Overlay = ({ globalResources, tickCounter }) => {
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
            <div className="w-full h-16 absolute bg-blue-400 z-10 flex justify-between">
                <div>
                    <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
                        {globalResources.corvette} Corvette
                    </div>
                    <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
                        {globalResources.frigate} Frigate
                    </div>
                    <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
                        {globalResources.destroyer} Destroyer
                    </div>
                    <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
                        {globalResources.cruiser} Cruiser
                    </div>
                </div>
                <div>
                    <div className="inline-block text-right text-lg text-black p-4 font-medium">
                        Tick: {tickCounter}
                    </div>
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

            <div className="absolute bottom-0 right-0 z-10">
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