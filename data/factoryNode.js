export const factoryNode = () => ({
    nodes: [
        {
            id: 1, x: 100, y: 100, factoryId: 1, isEditable: false
        },
        {
            id: 2, x: 200, y: 100, factoryId: 2, isEditable: false
        }
    ],
    edges: [
        { start: 1, end: 2}
    ]
})