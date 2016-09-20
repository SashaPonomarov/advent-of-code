let input = require('./input.js')
let workers = {santa: [0, 0], robosanta: [0, 0]}
let worker
let visited = new Set
visited.add('0,0')

for (let i = 0; i < input.length; i++) {
    if (i%2) {
        worker = 'robosanta'
    }
    else {
        worker = 'santa'
    }
    let x = workers[worker][0]
    let y = workers[worker][1]
    switch(input.charAt(i)) {
        case '>':
            workers[worker] = [x+1, y]
            break;
        case 'v':
            workers[worker] = [x, y-1]
            break;
        case '^':
            workers[worker] = [x, y+1]
            break;
        case '<':
            workers[worker] = [x-1, y]
            break;
    }
    visited.add(workers[worker].join())
}

console.log('Houses with presents:', visited.size)