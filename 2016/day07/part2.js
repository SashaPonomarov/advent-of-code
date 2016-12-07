let input = require('./input.js')
let lines = input.split('\n')
const abas = arr => arr.reduce(
    (found, s) => {
        [...s].forEach((c, i)=>{
            if (c === s[i+2] && c !== s[i+1]) {
                found.push(s.slice(i,i+3))
            }
        })
        return found
    }, [])
const hypers = l => l.match(/\[\w+\]/g)
const ips = l => l.replace(/\[\w+\]/g, ',').split(',')
const inv = s => s[1]+s[0]+s[1]
const isIn = arr => code => abas(arr).includes(inv(code))
let r = lines.reduce((sum, l) => sum + (abas(hypers(l)).some(isIn(ips(l))) ? 1:0), 0)
