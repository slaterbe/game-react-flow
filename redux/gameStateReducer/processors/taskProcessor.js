const processTask = (task, ships) => {
    const {
        corvette,
        frigate,
        destroyer,
        cruiser
    } = task.requirement;

    if (corvette && ships.corvette >= corvette)
        task.claimed = true;

    if (frigate && ships.frigate >= frigate)
        task.claimed = true;

    if (destroyer && ships.destroyer >= destroyer)
        task.claimed = true;

    if (cruiser && ships.cruiser >= cruiser)
        task.claimed = true;
}

export const taskProcessor = (gameState) => {
    const { tasks, ships } = gameState;

    tasks
        .filter(t => !t.claimed)
        .forEach(t => processTask(t, ships));
}