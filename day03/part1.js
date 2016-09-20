let input = require('./input.js')
let position = [0, 0]

let visited = new Set
visited.add(position.join())

for (let i = 0; i < input.length; i++) {
    switch(input.charAt(i)) {
        case '>':
            position = [position[0]+1, position[1]]
            break;
        case 'v':
            position = [position[0], position[1]-1]
            break;
        case '^':
            position = [position[0], position[1]+1]
            break;
        case '<':
            position = [position[0]-1, position[1]]
            break;
    }
    visited.add(position.join())
}

console.log(position.join())
console.log('Houses with presents:', visited.size)