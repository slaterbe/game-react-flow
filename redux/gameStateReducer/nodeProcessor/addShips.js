import { addShips, emptyShipConfigs } from '../../util/ships/shipConfigs';

export const addShipProcessor = (gameState) => {
    const { shipyards } = gameState;
    const outputs = [];

    gameState.nodes
        .filter(n => n.type === "shipyardNode" && n.nodeState === 'active')
        .forEach(n => {
            const shipyard = shipyards[n.shipyardType]
            n.counterTick = (n.counterTick ?? 0)

            if(n.counterTick === shipyard.requiredTicks){
                outputs.push(shipyard.output);
                n.counterTick = 0;
            }
            else{
                n.counterTick = n.counterTick + 1;
            }
        })

    const newShips = outputs
        .reduce(addShips, emptyShipConfigs);

    gameState.battleMap.reserveFriendlyShips = addShips(gameState.battleMap.reserveFriendlyShips, newShips);
}