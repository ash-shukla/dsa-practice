// Symmetric Difference

function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  let result = [];

  for (let num of arr1) {
    if (!set2.has(num)) {
      result.push(num);
    }
  }

  for (let num of arr2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(symmetricDifference([1, 2, 4, 5, 4], [4, 2, 6, 8, 9, 11]));
