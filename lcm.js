
const GCD = require("./gcd").GCD;

function LCM(num1, num2) {
    return num1*num2/GCD([num1,num2]);
}

module.exports = {
    LCM: LCM
};
