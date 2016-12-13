class Maze {
    constructor(width, height, input) {
        this.width = width
        this.height = height
        this.input = input
        this.cells = []
        this.paths = []
        this.step = 0
        this.visited = {}
        for (let i = 0; i < width; i++) {
            this.cells[i] = []
            for (let j = 0; j < height; j++) {
                this.cells[i][j] = this.isWall(i,j)
            }
        }
    }
    isWall(x,y) {
        let binStr = (x*x + 3*x + 2*x*y + y + y*y + this.input).toString(2);
        return [...binStr].filter(c => c === '1').length % 2
    }
    findPath(x, y, path) {
        path = [...path, [x,y]]
        if (!this.part2) {
            this.visited[[x,y]] = path.length - 1
            if (this.visited[[x,y]] > 50) {
                this.part2 = Object.keys(this.visited).length
            }
        }
        if (x === 31 && y === 39) {
            return path
        }
        let open = this.findOpen(x,y,path)
        if (open.length === 0) {
            this.paths.push(path)
            return false
        }
        let i = 0
        while (open[i]) {
            let found = this.findPath(...open[i], path)
            if (found) {
                this.path = found
                return found
            }
            i++
        }
    }
    neighbours(x, y) {
        let list = []
        if (x-1 >= 0) {
            list.push([x-1, y])
        }
        if (x+1 < this.width) {
            list.push([x+1, y])
        }
        if (y-1 >= 0) {
            list.push([x, y-1])
        }
        if (y+1 < this.height) {
            list.push([x, y+1])
        }
        return list
    }
    findOpen(x, y, path) {
        return this.neighbours(x, y).filter(([cx, cy]) => {
            return !this.cells[cx][cy] && !path.some(([px,py])=>px === cx && py === cy)
        })
    }
    render(path) {
        let str = ''
        for (let i = 0; i < this.height; i++ ) {
            for (let j = 0; j < this.width; j++ ) {
                if (path.some(([cx, cy]) => cx === j && cy === i)) {
                    str += 'o'
                    continue
                }
                if (i === 39 && j === 31) {
                    str += 'O'    
                } else {
                    str += this.cells[j][i] ? '#' : '.'
                }
            }
            str += '\n'
        }
        console.log(str)
    }

    renderDiv(path) {
        let mazeUL = document.getElementsByClassName('maze')[0] 
        while (mazeUL.firstChild) {
            mazeUL.removeChild(mazeUL.firstChild);
        }
        let divs = document.createDocumentFragment()
        let str = ''
        for (let i = 0; i < this.height; i++ ) {
            for (let j = 0; j < this.width; j++ ) {
                let li = document.createElement("li");
                if (i === 39 && j === 31) {
                    li.className += ' target'    
                }
                if (path.some(([cx, cy]) => cx === j && cy === i)) {
                    li.className += ' path'
                }
                li.className += this.cells[j][i] ? ' wall' : ' floor'
                divs.appendChild(li)
            }
        }
        document.getElementsByClassName('maze')[0].appendChild(divs)
        document.getElementsByClassName('steps')[0].innerHTML = 'journey took '+(path.length-1)+' steps'
    }
    animate(n) {
        if (this.paths[n]) {
            let that = this
            setTimeout(function() {
                that.renderDiv(that.paths[n])
                that.animate(n+1)
            }, 100)
        } else {
            this.renderDiv(this.path)
        }
    }
}


let maze = new Maze(50, 50, 1350)
let z = maze.findPath(1, 1, [])

// maze.renderDiv(z)
maze.animate(0)

