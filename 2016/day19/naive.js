//naive implementation used to find patterns in results

let arr = Array(730).fill(1).map((e, i) => i+5)

arr.forEach(e => {
    across(e)
})

function neighbour(input) {
    input = Math.floor(input/2)
    let elves = Array(input).fill(true).map((e, i) => (i+1)*2+1)
    let len = elves.length * 2 + 1 
    while (elves.length > 1) {
        elves.forEach((elf, i) => {
            let next = i + 1
            if (next === elves.length) {
                next = 0
            }
            elves.splice(next, 1)
        })
    }
console.log('amount - ' + len + ', number - ' + elves[0])
}

function across(input) {
    let elves = Array(input).fill(true).map((e, i) => i+1)
    let len = elves.length
    while (elves.length > 1) {
        for (let i = 0; i < elves.length; i++) {
            let next = i + Math.floor(elves.length/2)
            if (next >= elves.length) {
                next = next % elves.length
                i--
            }
            elves.splice(next, 1)

        }
    }
console.log('amount - ' + len + ', number - ' + elves[0])
}