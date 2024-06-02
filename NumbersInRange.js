// Numbers in between range
function numbersInRange(num1, num2) {
  let temp = [];

  for (let i = num1 + 1; i < num2; i++) {
    temp.push(i);
  }
  return temp;
}
// console.log(numbersInRange(2, 8));

/@TODO: implement the logic with recursion as its yet not completed  /;
function numbersInRange2(num1, num2) {
  if (num1 === num2) {
    return [num1];
  }
  const numbers = numbersInRange2(num1, num2 - 1);
  numbers.push(num2);
  // console.log("numbers", numbers);
  return numbers;
}
console.log(numbersInRange2(1, 99));
