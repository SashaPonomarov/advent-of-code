let input = require('./input.js')
let lines = input.split(`
`)
let triangles = []
lines.forEach(line => {
    triangles.push(line.replace(/\s+/g, ",").split(",").slice(1))
})
let count = 0
triangles.forEach(triangle => {
    let bigger = Math.max(...triangle)
    let index = triangle.indexOf(String(bigger))
    triangle.splice(index, 1)
    let sum = parseInt(triangle[0], 10) + parseInt(triangle[1], 10)
    if (sum > bigger) {
        count++
    }
})

