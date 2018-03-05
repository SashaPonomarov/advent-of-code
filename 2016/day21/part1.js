let input = require('./input.js')
let operations = input.split(`\n`).map(line => line.split(' '))

Array.prototype.rotate = function( n ) {
  this.unshift.apply( this, this.splice( -n, this.length ) )
  return this;
}

class Scrambler {
    constructor(password) {
        this.password = [...password]
    }
    swapPosition(x, y) {
        let temp = this.password[x]
        this.password[x] = this.password[y]
        this.password[y] = temp
    }
    swapLetter(x, y) {
        this.swapPosition(this.password.indexOf(x), this.password.indexOf(y))
    }
    rotate(dir, steps, letter) {
        if (dir == 'left') {
            steps = -steps
        }
        if (letter) {
            let index = this.password.indexOf(letter)
            steps = 1 + index
            if (index >= 4) {
                steps++
            }
        }
        steps = steps % this.password.length
        this.password = this.password.rotate(steps)
    }
    reverse(x, y) {
        let reversed = this.password.slice(x, +y+1).reverse()
        this.password.splice(x, reversed.length, ...reversed)
    }
    move(x, y) {
        let char = this.password[x]
        this.password.splice(x, 1)
        this.password.splice(y, 0, char)
    }
}


let scramble = new Scrambler('abcdefgh')

operations.forEach(op => {
    let len = scramble.password.length
    switch (op[0]) {
        case 'swap':
            if (op[1] == 'position') {
                scramble.swapPosition(op[2], op[5])
            }
            else {
                scramble.swapLetter(op[2], op[5])
            }
            break;
        case 'rotate':
            if (op[1] == 'based') {
                scramble.rotate('', '', op[6])
            }
            else {
                scramble.rotate(op[1], op[2])
            }
            break;
        case 'reverse':
            scramble.reverse(op[2], op[4])
            break;
        case 'move':
            scramble.move(op[2], op[5])
            break;
    
        default:
            break;
    }
    if (len != scramble.password.length) {
        console.log('stahp')

    }
})

console.log(scramble.password.join(''))