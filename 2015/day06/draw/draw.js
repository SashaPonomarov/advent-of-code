function draw (grid, size) {
    let canvas = document.createElement('canvas')
    canvas.width  = size
    canvas.height = size
    canvas.style.border = "1px solid"
    document.body.appendChild(canvas)

    let ctx = canvas.getContext("2d"),
        imgData = ctx.getImageData(0, 0, size, size),
        data = imgData.data,
        count,
        k = 5

    for (var i = 0; i < data.length; i += 4) {
        count = i/4
        row = Math.floor(count/size)
        col = count - row*size
        data[i] = k*grid[row][col]
        data[i+1] = k*grid[row][col]
        data[i+2] = k*grid[row][col]
        data[i+3] = 255
    }
    ctx.putImageData(imgData, 0, 0)
}