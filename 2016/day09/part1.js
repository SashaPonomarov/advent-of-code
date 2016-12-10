let input = require('./input.js')

let re = /\(.+?\)/g,
    match

while (match = re.exec(input)) {
    let len = match[0].length
    let coms = match[0].slice(1,-1).split('x')
    let ind = re.lastIndex
    let str = input.slice(0, ind-len) + input.substr(ind, coms[0]).repeat(coms[1])
    input = str + input.slice(+coms[0] + ind)
    re.lastIndex = str.length
}

console.log(input.length)
