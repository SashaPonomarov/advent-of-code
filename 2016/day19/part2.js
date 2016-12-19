let n = 3004953
let k = Math.pow(3,Math.floor(Math.log(n)/Math.log(3))) //nearest power of 3
let elf
if (n-k <= k) {
    elf = n - k 
} else {
    elf = k + (n - 2*k) * 2
}
console.log(elf)