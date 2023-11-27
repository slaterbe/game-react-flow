export const events = () => [
    {
        id: 1,
        name: "Make 10 Plate.  Gain a new factory",
        dependency: []
    },
    {
        id: 2,
        name: "Make 3 Corvette Hulls.  Gain a new factory",
        dependency: [ 1 ]
    }

]