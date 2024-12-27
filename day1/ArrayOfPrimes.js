var prompt = require("prompt-sync")();

const chkIfPrime = function (num) {
  let isPrime = true;
  for (let idx = 2; idx < num / 2; idx++) {
    if (num % idx === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

// Input an array of numbers

let myArray = new Array(3, 5, 8, 11, 13);

// let flg = myArray.every((num) => {
//   let isPrime = true;
//   for (let idx = 2; idx < num / 2; idx++) {
//     if (num % idx === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   return isPrime;
// });

let flg = myArray.every(chkIfPrime);

if (flg) {
  console.log("All array values are prime");
} else {
  console.log("Array elements are not all prime");
}
