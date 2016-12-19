let n = 3004953

let k = Math.pow(2,Math.floor(Math.log(n)/Math.log(2))) //nearest power of 2
let elf = (n - k)*2 + 1

console.log(elf)