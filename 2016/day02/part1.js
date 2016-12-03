let input = require('./input.js')
let lines = input.split(`
`)
let position = [-2, 0]

let keypad = {
    '-2': {'0': 5}, 
    '-1': {'-1': 'A', '0': 6, '1': 2}, 
    '0': {'-2': 'D', '-1': 'B', '0': 7, '1': 3, '2': 1}, 
    '1': {'-1': 'C', '0': 8, '1': 4}, 
    '2': {'0': 9}
}
let keys = []
let moves = {'U': [0, 1], 'D': [0, -1], 'L': [-1, 0], 'R': [1, 0]}
lines.forEach(line => {
    for (char of line) {
        x = position[0] + moves[char][0]
        y = position[1] + moves[char][1]
        if (!keypad[x] || !keypad[x][y]) {
            x = position[0]
            y = position[1]
        }
        position = [x, y]
    }
    keys.push(position)
})
keys.forEach(key => {
    console.log(keypad[key[0]][key[1]])
})