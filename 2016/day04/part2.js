let input = require('./input.js')
let lines = input.split(`
`)
let rooms = lines.map(line => {
    return line.match(/((?:[a-z]+\-)+)(\d+)\[([a-z]+)\]/).slice(1)
})
let trueRooms = []
rooms.forEach(room => {
    let code = room[0].replace(/-/g, '')
    let counts = [...code].reduce((counts, char)=>{
        counts[char] = counts[char] ? counts[char]+1 : 1 
        return counts
    },{})
    let sorted = Object.keys(counts).sort((a,b) => {
        return (counts[a] - counts[b]) || ((a>b) ? -1 : 1)
    })
    let checksum = sorted.reverse().join('').slice(0,5)
    if (checksum === room[2]) {
        trueRooms.push(room)
    }
})

let result = trueRooms.map(room => {
    let shift = room[1] - 26 * Math.floor(room[1]/26);
    room[4] = [...room[0]].map(char => {
        if (char === '-') { return ' ' } 
        let charcode = char.charCodeAt() + shift
        if (charcode > 122) {
            charcode -= 26
        }
        return String.fromCharCode(charcode)
    }).join('')
    return room
})


let north = result.filter(room => {
    return room[4].match(/north/)
})
