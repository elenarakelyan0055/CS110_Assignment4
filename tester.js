let num = 3; 
const num1 = 92;
const num2 = 70;
const gcd = [num1, num2];
let number = 14;


const factorial = require("./factorial").factorial
const GCD = require("./gcd").GCD
const LCM = require("./lcm").LCM
const decToHex = require("./hex").decToHex



console.log(`The factorial of ${num} is ${factorial(num)}`);
console.log(`The greatest common divisor of ${gcd} is ${GCD(gcd)}`);
console.log(`The least common multiple is ${LCM(num1, num2)}`);
console.log(decToHex(number))

