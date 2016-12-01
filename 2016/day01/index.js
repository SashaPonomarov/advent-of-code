let input = require('./input.js')
let commands = input.split(', ')
let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
let dirIndex = 0
let position = [0, 0]

function turn(current, direction) {
    switch (direction) {
        case 'L':
            direction = -1
            break;
        case 'R':
            direction = 1
            break;
        default:
            throw new Error('wrong turn direction')
    }
    let newDirection = (current + direction) % 4
    if (newDirection === -1) {
        newDirection = 3
    }
    return newDirection
}

commands.forEach(command => {
    dirIndex = turn(dirIndex, command[0])
    let x = command.slice(1) * directions[dirIndex][0] + position[0]
    let y = command.slice(1) * directions[dirIndex][1] + position[1]
    position = [x, y]
})

console.log('final position is', position)
console.log('taxicab length is', Math.abs(position[0]) + Math.abs(position[1]))