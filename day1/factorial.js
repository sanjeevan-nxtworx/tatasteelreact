// Factorial of 5 = 5 x 4 x 3 x 2 x 1
// Factorial of 6 = 6 * factorial(5);

function factorial(num) {
  if (num === 1) return num;
  return num * factorial(num - 1);
}

console.log(factorial(5));

factorial(10);
