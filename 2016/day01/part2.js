let input = require('./input.js')
let commands = input.split(', ')
let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
let dirIndex = 0
let positions = [[0, 0]]
let finalPos

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

commandLoop:
for (command of commands) {
    dirIndex = turn(dirIndex, command[0])
    let position = positions[positions.length - 1]
    let length = command.slice(1)
    for (let step = 1; step <= length; step++) {
        let x = directions[dirIndex][0] + position[0]
        let y = directions[dirIndex][1] + position[1]
        position = [x, y]
        for (pos of positions) {
            if (pos[0] === x && pos[1] === y) {
                finalPos = position
                break commandLoop
            }
        }
        positions.push(position)
    }
}

console.log('final position is', finalPos)
console.log('taxicab length is', Math.abs(finalPos[0]) + Math.abs(finalPos[1]))