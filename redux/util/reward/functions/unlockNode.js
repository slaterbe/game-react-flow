import { hasResource } from "../../resource";

export const unlockNode = (gameState) => {
    const node = gameState.nodes.find(n => n.nodeState === "hidden")

    if(hasResource(node.blockedResource)){
        node.nodeState = "blocked";
        return;
    }
    
    node.nodeState = "invalid";
}