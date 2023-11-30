export const activeNodes = (gameState) => {
    const {
        factories,
        resources,
        shipyards,
        nodes,
        edges
    } = gameState;

    const newNodes = nodes
        .filter(n.isActive)
        .map(n => ({
            id: n.id,
            type: n.type,
            output: { ...n.output },
            input: { ...n.input },
            available: { ...n.input }
        }))

    const filledNodes = newNodes.filter(n => n.type === "resourceNodes");
    const unfilledNodes = newNodes.filter(n => n.type !== "resourceNodes");

    while (true) {
        const result = updateNodes(filledNodes, unfilledNodes, edges);

        if (!result) break;
    }

    nodes.filter(filledNodes.id).forEach(n => {
        n.isActive = true;
    })

    nodes.filter(unfilledNodes.id).forEach(n => {
        n.isActive = false;
    })
}

const updateNodes = ({ filledNodes, unfilledNodes, edges }) => {
    const filledNodeIds = newNodes.map(n => n.id);
    const unfilledNeighboursId = edges.filter(e => filledNodeIds.includes(e.source))
        .map(n => n.target)
        .unique();

    const unfilledNeighbours = unfilledNodes
        .filter(n => unfilledNeighboursId.include(n.id));

    if (unfilledNeighbours.length === 0)
        return false

    unfilledNeighbours.forEach();

    return false;
}