let crypto = require('crypto'),
    input = "ihaygndm",
    finished = false,
    i = 0,
    interest = [],
    keys = []

function manyhash(str, n) {
    let i = n,
        hash = str
    while(i) {
        hash = crypto.createHash('md5').update(hash).digest('hex')
        i--
    }
    return hash
}

while (!finished) {
    let hash = manyhash(input+i, 1)
    // let hash = manyhash(input+i, 2017)  //uncomment for the second part
    let repeats = hash.match(/(\w)\1{2,}/g)
    if (repeats) {
        repeats.filter(s => s.length > 4).forEach(s => {
            interest.filter(h => h.char === s[0]).forEach(h => {
                keys.push(h.i)
                console.log(keys.length, h.i)
                if (keys.length > 65) {finished = true} 
            })
        })
        interest.push({i, char: repeats[0][0]})
    }
    i++
    interest = interest.filter(s => s.i >= (i - 1000))
}
keys.sort((a,b)=>a-b)
console.log(keys[63])


