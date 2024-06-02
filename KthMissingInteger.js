// Find the Kth Missing Integer
/Create a function that takes up two parameters ie, an array and an integer k/;
/find the kth missing element/;
/example arr = [2,4,5,7] then missing array = [1,3,6,8]/;
function numbersInRange(num1, num2) {
  let temp = [];
  for (let i = num1 + 1; i < num2; i++) {
    temp.push(i);
  }
  return temp;
}

function missingElement(arr) {
  let temp = [];
  arr
    .sort((a, b) => a - b)
    .forEach((num, i) => {
      temp.push(...numbersInRange(num, arr[i + 1]));
    });
  if (arr[0] !== 1) {
    let initialArr = [...numbersInRange(0, arr[0])];
    temp = [...initialArr, ...temp];
  }
  return temp;
}

console.log(missingElement([2, 3, 5, 12, 9]));
/====================================================================================/;
