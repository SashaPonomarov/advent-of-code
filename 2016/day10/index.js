let input = require('./input.js'),
    lines = input.split('\n'),
    reVal = /value (\d+) goes to bot (\d+)/,
    reBot = /bot (\d+) gives low to (.+) and high to (.+)/,
    bots = [],
    outputs = [],
    process = true,
    num, mult

lines.forEach(line => {
    switch (line.split(' ')[0]) {
        case 'value':
            let [vals, ind] = line.match(reVal).slice(1)
            if (bots[ind]) {
                bots[ind].vals.push(vals)
            } else {
                bots[ind] = {vals: [vals], ind}
            }
            break;

        case 'bot':
            let [bot, low, high] = line.match(reBot).slice(1)
            low = low.split(' ')
            high = high.split(' ')
            if (bots[bot]) {
                bots[bot].low = low
                bots[bot].high = high  
            } else {
                bots[bot] = {low, high, vals: [], ind: bot}
            }
            break;
    
        default:
            break;
    }
})

while (process) {
    let full = bots.filter(bot => bot.vals.length > 1)
    full.forEach(bot => {
        let vals = bot.vals.sort((a,b) => a-b)

        if (vals[0] == 17 && vals[vals.length-1] == 61) {
            num = bot.ind
        }

        if (outputs[0] && outputs[1] && outputs[2]) {
            mult = outputs[0] * outputs[1] * outputs[2]
            process = false
            return
        }

        if (bot.low[0] === 'bot') {
            bots[bot.low[1]].vals.push(vals[0])
        } else {
            outputs[bot.low[1]] = vals[0]
        }

        if (bot.high[0] === 'bot') {
            bots[bot.high[1]].vals.push(vals[vals.length-1])
        } else {
            outputs[bot.high[1]] = vals[vals.length-1]
        }
    })
}

console.log('part 1 solution:',num)
console.log('part 2 solution:',mult)