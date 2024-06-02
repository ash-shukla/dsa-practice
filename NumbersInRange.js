// Numbers in between range
function numbersInRange(num1, num2) {
  let temp = [];

  for (let i = num1 + 1; i < num2; i++) {
    temp.push(i);
  }
  return temp;
}

/@TODO: implement the logic with recursion as its yet not completed  /;
console.log(numbersInRange(2, 8));
