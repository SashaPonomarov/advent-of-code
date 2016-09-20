let input = require('./input.js')

let paper = input.split('\n').map((box) => {
        let [l, w, h] = box.split('x')
        let sides = [l*w, w*h, h*l]
        return 2*sides.reduce((a, b) => a + b, 0) + Math.min(...sides)
    }).reduce((a, b) => a + b, 0)

console.log('paper:', paper)

//second part

let ribbon = input.split('\n').map((box) => {
        let [l, w, h] = box.split('x')
        return 2*l + 2*w + 2*h - 2*Math.max(l, w, h) + l*w*h
    }).reduce((a, b) => a + b, 0)

console.log('ribbon:', ribbon)