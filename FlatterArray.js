// Flatten a nested Array
function flattenArray(arr) {
  let flattenedArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattenedArr = flattenedArr.concat(flattenArray(item));
    } else {
      flattenedArr.push(item);
    }
  }
  return flattenedArr;
}
let arr = [1, 2, [3, 4, [5, 6, [7, 9, 8]]], 10, 11, [21, [23, 24, 25]]];
console.log(flattenArray(arr));
/========================================================================================/;
