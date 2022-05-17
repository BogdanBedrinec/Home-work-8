/*function isPrime (num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return num > 1
}

console.log('1', isPrime(1))
console.log('2', isPrime(2))
console.log('3', isPrime(3))
console.log('4', isPrime(4))
console.log('5', isPrime(5))
*/

/*
let number = 9
let factorial = 1

if (number < 0) {
    console.log("Не можна знайти факторіал від'ємного числа")
}else{
    for (let num = 2; num <= number; num++) {
        factorial = factorial * num
    }

    console.log(`${number} = ${factorial}`)
}
*/

/*
let i;
let fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
*/

/**/

let items = [1, 2, 3];
console.log(items); // [1, 2, 3]

console.log(items.reverse()); // [3, 2, 1]