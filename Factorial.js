// Factorial of a number
function factorial(number) {
  let result;
  if (number === (0 || 1)) {
    return (result = 1);
  }
  result = number * factorial(number - 1);

  return result === Infinity ? false : result;
}
console.log(factorial(6));
