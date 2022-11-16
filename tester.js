let num = 10; 
const num1 = 789;
const num2 = 46;
const gcd = [num1, num2];
let number = 324;


const factorial = require("./factorial").factorial
const GCD = require("./gcd").GCD
const LCM = require("./lcm").LCM
const decToHex = require("./hex").decToHex



console.log(factorial(num));
console.log(GCD(gcd));
console.log(LCM(num1, num2));
console.log(decToHex(number))

