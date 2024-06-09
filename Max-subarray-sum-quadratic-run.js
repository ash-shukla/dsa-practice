function maxSumSubArray(arr, k) {
  let maxSumArr = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    maxSumArr.push(currentSum);
  }
  return Math.max(...maxSumArr);
}

// O(n) method
function maxSumSubArray2(arr, k) {
  let maxSumArr = 0;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    maxSumArr += arr[i];
  }
  currentSum = maxSumArr;
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];

    maxSumArr = Math.max(maxSumArr, currentSum);
  }
  return maxSumArr;
}

console.log(maxSumSubArray([1, 5, -3, 66, 2, -78, -2, 6, 2, -7, 9, 3, 8], 3));
console.log(maxSumSubArray2([1, 5, -3, 66, 2, -78, -2, 6, 2, -7, 9, 3, 8], 3));
