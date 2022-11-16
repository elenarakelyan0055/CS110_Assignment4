function GCD(gcd) {
   let a = Math.abs(gcd[0]);
   let b = Math.abs(gcd[1]);

   while (a !== b) {
      if(a > b){
         [a, b] = [a - b, b];
      }
      else{
         [a, b] = [a, b - a];
      }
   }
   return a || b;
}
   
module.exports = {
   "GCD": GCD
};
