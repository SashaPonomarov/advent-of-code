let input = [...'^^.^..^.....^..^..^^...^^.^....^^^.^.^^....^.^^^...^^^^.^^^^.^..^^^^.^^.^.^.^.^.^^...^^..^^^..^.^^^^']
            .map(tile => tile === '^'),
    floor = [input]
    
function rules (left, right) {
    if (left !== right) {
        return true
    }
    return false
}

for (let i = 0; i < 39; i++) {
    floor.push(floor[i].map((tile, index) => {
        let [left, right] = [floor[i][index-1], floor[i][index+1]]
        if (left === undefined) {left = false}
        if (right === undefined) {right = false}
        return rules(left, right)
    }))
    if (i%50000 === 0) {
        console.log('now at row', i)
    }
}

console.log(floor.reduce((sum, line) => sum + line.reduce((sum, tile) => sum + (tile ? 0 : 1), 0), 0))