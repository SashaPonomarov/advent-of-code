let input = 'rrrbmfta',
    crypto = require('crypto'),
    paths = [],
    optimal


function openDoors(passcode, path) {
    let hash = crypto.createHash('md5').update(passcode + path).digest('hex');
    let directions = ['U', 'D', 'L', 'R']
    let coord = coordFromPath(path)
    return [...hash.slice(0, 4)].reduce((sum,c,i) => {
        if (c > 'a' && c < 'g') {
            if (!(i===0 && coord[1]===0) && !(i===1 && coord[1]===3) 
                && !(i===2 && coord[0]===0) && !(i===3 && coord[0]===3)) {
                    sum.push(directions[i])
                }
        }
        return sum
    }, [])
}

function coordFromPath(path) {
    if (path.length === 0) {return [0,0]}
    let commands = [...path].reduce((sum, c) => {
        sum[c]++
        return sum
    },{R: 0, L: 0, D: 0, U: 0})
    return [commands['R'] - commands['L'], commands['D'] - commands['U']]
}

paths = openDoors(input, '')
while (paths.length > 0) {
    let doors
    paths = paths.reduce((newPaths, path, i) => {
        if (!(optimal && path.length >= optimal.length)) {
        // if (!(optimal && path.length < optimal.length)) {  //second part
            let coord = coordFromPath(path)
            if (coord[0] === 3 && coord[1] === 3) {
                optimal = path
            } else {
                doors = openDoors(input, path)
                doors.forEach(door => {
                    newPaths.push(path+door)
                })
            }
        }
        return newPaths
    }, [])
}

console.log('best path is', optimal, ', length is', optimal.length)

//It is a breadth-first search 