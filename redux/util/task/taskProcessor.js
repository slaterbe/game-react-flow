import { activeNode } from "./functions/activeNode";
import { createEdge } from "./functions/createEdge";
import { shipsCreated } from "./functions/shipsCreated";
import { unblockNode } from "./functions/unblockNode";
import { TASK_TYPE } from "./task";

const processTask = (gameState, task) => {
    const { type } = task;

    switch (type) {
        case TASK_TYPE.CREATE_EDGE:
            createEdge(gameState, task);
            break;
        case TASK_TYPE.SHIP_CREATED:
            shipsCreated(gameState, task);
            break;
        case TASK_TYPE.ACTIVATE_NODE:
            activeNode(gameState, task);
            break;
        case TASK_TYPE.UNBLOCK_NODE:
            unblockNode(gameState, task);
            break;
    }
}

export const taskProcessor = (gameState) => {
    const { tasks } = gameState;

    tasks
        .filter(t => !t.claimed)
        .forEach(t => processTask(gameState, t));
}