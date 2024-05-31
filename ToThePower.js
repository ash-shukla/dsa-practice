// Calculate power of a number

// Method-1
function toThePower(num, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result = num * result;
  }
  return result;
}
console.log(toThePower(3, 1));
//3

//Method-2
function toThePower2(num, power) {
  if (power === 0) {
    return 1;
  }

  return num * toThePower2(num, power - 1);
}

console.log(toThePower2(3, 7));
//2187
/===================================================================/;
