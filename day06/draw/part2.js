let size = 1000
let re = /^(.*?)\s(\d+),(\d+).*?(\d+),(\d+)/
let instructions = input.split('\n').map((line) => {
    let instruction = line.match(re)
    return {
        command: instruction[1].replace(/ /g,''),
        start: [parseInt(instruction[2]), parseInt(instruction[3])],
        end: [parseInt(instruction[4]), parseInt(instruction[5])]
    }
})


console.log(instructions.length)

let grid = new Array(size).fill('').map(() => new Array(size).fill(0))

let interpreter = {
    turnon: (value) => value+1,
    turnoff: (value) => {
        if (value>0) {
            return value-1
        } 
        else {
            return 0
        }
    },
    toggle: (value) => value+2
}


instructions.forEach((instruction) => {
    for (let i = instruction.start[0]; i <= instruction.end[0]; i++) {
        for (let j = instruction.start[1]; j <= instruction.end[1]; j++) {
            grid[j][i] = interpreter[instruction.command](grid[j][i])
        }
    }
})

draw(grid, size)