let input = require('./input.js')
let lines = input.split('\n')

const abba = s => [...s].some((c, i) => c === s[i+1] && s[i-1] === s[i+2] && c !== s[i-1])
const hypers = l => l.match(/\[\w+\]/g)
const ips = l => l.replace(/\[\w+\]/g, ',').split(',')
let r = lines.reduce((sum, l) => sum + (ips(l).some(abba) && !hypers(l).some(abba)?1:0), 0)