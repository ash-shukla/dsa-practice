// Two Sum according to the given value of K
function twoSum(nums, target) {
  const numSet = new Set();

  for (let i = 0; i <= nums.length; i++) {
    const complement = target - nums[i];
    if (numSet.has(complement)) {
      console.log("the Array output", [
        nums[nums.indexOf(complement)],
        nums[i],
      ]);
      return [nums.indexOf(complement), i];
    }
    numSet.add(nums[i]);
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4, 5], 5));
/==============================================================================/;
