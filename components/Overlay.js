import React, { useState } from "react";

export const Overlay = ({ globalResources }) => {
    const [questLogOpen, setQuestLogOpen] = useState(false);

    return (
        <>
            <div className="w-full h-16 absolute bg-blue-400 z-10">
                <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
                    {globalResources.corvette} Corvette
                </div>
                <div className="inline-block text-left text-lg text-green-900 p-4 font-medium">
                    {globalResources.destroyer} Destroyer
                </div>
            </div>
            {questLogOpen && <QuestLog close={() => setQuestLogOpen(false)} />}
            <div className="w-16 h-16 absolute bg-blue-400 z-10 bottom-0 right-0 cursor-pointer" onClick={() => setQuestLogOpen(true)}>
                Quest
            </div>
        </>
    )
}