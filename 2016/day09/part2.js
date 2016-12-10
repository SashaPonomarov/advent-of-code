let input = require('./input.js')

let re = /\(.+?\)/g

function decomp (str, n) {
    re.lastIndex = 0
    let sum = 0,
        leftover = str.length,
        match
    while (match = re.exec(str)) {
        let len = match[0].length
        let [amount,repeat] = match[0].slice(1,-1).split('x').map(v => parseInt(v, 10))
        let ind = re.lastIndex
        sum += decomp(str.substr(ind,amount), repeat)
        leftover -= amount + len
        re.lastIndex = ind + amount
    }
    return (sum + leftover) * n
}

console.log(decomp(input, 1))