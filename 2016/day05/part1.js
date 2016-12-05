const md5 = require("blueimp-md5")
const input = "ojvtpuvg"
let password = ''
let i = 0
while (password.length < 8) {
    let hash = md5(input+i)
    if (hash.slice(0,5) === "00000") {
        password += hash[5]
        console.log('password so far:', password)
    }
    i++
}

console.log('password is:', password)