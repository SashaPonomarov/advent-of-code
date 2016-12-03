let input = require('./input.js')
let sides = input
    .replace(/\n/g, "")
    .replace(/\s+/g, ",").split(",").slice(1)
let triangles = []
let used = []
for (let index = 0; index < sides.length; index++) {
    if (used.indexOf(index) === -1) {
        triangles.push([sides[index], sides[index+3], sides[index+6]])
        used.push(index, index+3, index+6)
    }
    
}


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

