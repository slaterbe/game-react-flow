const SPACING = 300;

export const buildPosition = (node) => ({ 
    x: node.position.x * SPACING, 
    y: node.position.y * SPACING 
})