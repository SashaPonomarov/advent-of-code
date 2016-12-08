let input = require('./input.js')
let lines = input.split('\n')

class Display {
    constructor(width, height){
        this.height = height
        this.width = width
        this.pixels = new Array(height).fill('.').map(() => new Array(width).fill('.')) 
    }
    rotate(arr, n) {
        arr.unshift.apply(arr, arr.splice(-n, arr.length))
        return arr
    }
    rect(a, b) {
        for (let i=0; i<b; i++) {
            for (let j=0; j<a; j++) {
                this.pixels[i][j] = '#'
            }
        }
    }
    rColumn(x,shift) {
        let column = []
        for (let i=0; i<this.height; i++) {
            column.push(this.pixels[i][x])
        }
        this.rotate(column, shift).forEach(function(val, i) {
            this.pixels[i][x] = val
        }, this)
    }
    rRow(y,shift) {
        this.pixels[y] = this.rotate(this.pixels[y], shift)
    }
    checksum() {
        return this.pixels.reduce((sum, row) => sum + row.filter(p => p === '#').length, 0)
    }
    render() {
        console.log(this.pixels.map(row => row.reduce((s, p)=>s+p,'')).join('\n'))
    }
}

let d = new Display(50,6)
lines.forEach(line => {
    let command = line.split(' ')
    if (command[0] === 'rect') {
        let dimensions = command[1].split('x')
        d.rect(dimensions[0], dimensions[1])
        return
    } 
    let index = command[2].slice(2)
    switch (command[1]) {
        case 'column':
            d.rColumn(index, command[4])
            break;
        case 'row':
            d.rRow(index, command[4])
            break;
        default:
            break;
    }
})

console.log('checksum is', d.checksum())
d.render()