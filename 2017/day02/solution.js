let input = `5 9 2 8
9 4 7 3
3 8 6 5`

let rows = input.split(`
`)
let data = rows.map( r => r.split(` `) )
let first = data.map( r => Math.max(...r) - Math.min(...r) )


let second = data.map(r => {
  let found = {}
  found.a = r.find((a, i, ar) => {
    found.b = [...ar.slice(0, i), ...ar.slice(i+1)].find((b) => !(a%b))
    return found.b
  })
  return found.a / found.b
})

//first part
console.log(first.reduce((a, b) => a+b))
//second part
console.log(second.reduce((a, b) => a+b))