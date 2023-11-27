export const factory = () => [
    {
        id: 1,
        name: "Iron Mine",
        options: [
            {
                grade: 1, input: {}, output: { ironOre: 16 }
            }
        ],
        id: 2,
        name: "Copper Mine",
        options: [
            {
                grade : 1, input: {}, output: { copperOre: 32 }
            }
        ]
    },
    {
        id: 11,
        name: "Smelter",
        options: [
            {
                grade: 1, input: { ironOre: 4 }, output: { ironPlate: 3 }
            },
            {
                grade: 0, input: { ironOre: 16 }, output: { laserChasis: 1 }
            },
            {
                grade: 1, input: { copperOre: 4 }, output: { copperPlate: 1 }
            }
        ]
    },
    {
        id: 12,
        name: "Alloyer",
        options: [
            {
                grade: 1, input: { ironOre: 8 }, output: {ironPlate: 1 }
            },
            {
                grade: 2, input: { ironOre: 4, copperOre: 4 }, output: {reinforcedPlate: 1 }
            }
        ]
    },
    {
        id: 13,
        name: "Forge",
        options: [
            { grade: 2, input: { ironOre: 3, copperOre:3 }, output: { reinforcedPlate: 2 }},
            { grade: 3, input: { ironOre: 3, silicon: 1 }, output: { ironPlate: 3 }}
        ]
    },
    {
        id: 14,
        name: "Manufacteur",
        options: [
            { grade: 0, input: { ironPlate: 10 }, output: { corvetteHull: 1 }},
            { grade: 1, input: { ironPlate: 5 }, output: { laserChasis: 1 }},
        ]
    },
    {
        id: 15, 
        name: "Destroyer Factory",
        options: [
            { grade: 0, input: { corvetteHull: 2, }, output: { destroyerHull: 1 }},
            { grade: 0, input: { corvetteHull: 1, reinforcedPlate: 2 }, output: { destroyerHull: 1 }}
        ]
    }
]