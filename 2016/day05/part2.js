const md5 = require("blueimp-md5"),
    input = "ojvtpuvg"
let password = Array(8),
    finished = false,
    i = 0
while (!finished) {
    let hash = md5(input+i)
    i++
    if (hash.slice(0,5) === "00000") {
        let index = hash[5]
        if (!(index<8) || password[index]) { continue }
        password[index] = hash[6]
        console.log('password so far:', password.join(""))
        if (password.reduce(a => a+1, 0) === 8) {
            finished = true
        }
    }    
}

console.log('password is:', password.join(""))