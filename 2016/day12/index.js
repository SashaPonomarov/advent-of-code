let input = require('./input.js'),
    commands = input.split('\n').map(line => line.split(' ')),
    regs = {a: 0, b: 0, c: 0, d: 0},
    //regs = {a: 0, b: 0, c: 1, d: 0}, //for part 2
    i = 0,
    instructions = {
        cpy: (x, y) => {
            if (x >= 'a' && x <= 'd') {
                regs[y] = regs[x]
            } else {
                regs[y] = +x
            }
        },
        inc: x => {
            regs[x] += 1
        },
        dec: x => {
            regs[x] -= 1
        },
        jnz: (x, y) => {
            if (regs[x] === 0) return
            i += +y-1
        }
    }

for (;i < commands.length; i++) {
    instructions[commands[i][0]](...commands[i].slice(1))
}