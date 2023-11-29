import React, { useState } from "react";
import { QuestLog } from "./QuestLog";

export const Overlay = ({ globalResources, tickCounter }) => {
    const [questLogOpen, setQuestLogOpen] = useState(false);

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
            {questLogOpen && <QuestLog close={() => setQuestLogOpen(false)} />}
            <div className="absolute bottom-0 right-0 z-10">
                <div className="w-16 h-16 text-xs p-2 m-4 bg-blue-400 cursor-pointer" onClick={() => setQuestLogOpen(true)}>
                    Quest
                </div>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqAQgFYNl7mrZuojFdmNwm8jrvdQSxTzH6Zdli875E6AeJvg/viewform?usp=pp_url"
                    className="w-16 h-16 text-xs block p-2 m-4 bg-blue-400 cursor-pointer">
                    Feedback
                </a>
            </div>
        </>
    )
}