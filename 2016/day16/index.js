let diskLength = 35651584,
    state = [...'10010000000110000'].map(d => +d)

function check(data) {
    let result = []
    for (let i=0; i < data.length; i=i+2) {
        if (data[i] === data[i+1]) {
            result.push(1)
        } else {
            result.push(0)
        }
    }
    return result
}

while (state.length < diskLength) {
    let b = state.slice().reverse().map(d => (d+1)%2)
    state = [...state, 0, ...b]
}
state.splice(diskLength)

let checksum = state
while (!(checksum.length%2)) {
    checksum = check(checksum)
}

console.log(checksum.join(''))

