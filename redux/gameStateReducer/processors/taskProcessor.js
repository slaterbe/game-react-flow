const processTask = (task, globalResources) => {
    const {
        corvette,
        frigate,
        destroyer,
        cruiser
    } = task.requirement;

    if (corvette && globalResources.corvette >= corvette)
        task.claimed = true;

    if (frigate && globalResources.frigate >= frigate)
        task.claimed = true;

    if (destroyer && globalResources.destroyer >= destroyer)
        task.claimed = true;

    if (cruiser && globalResources.cruiser >= cruiser)
        task.claimed = true;
}

export const taskProcessor = (gameState) => {
    const { tasks, globalResources } = gameState;

    tasks
        .filter(t => !t.claimed)
        .forEach(t => processTask(t, globalResources));
}