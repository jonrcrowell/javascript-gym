/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

console.log(twoSum([3, 3], 6));

function twoSum(nums, target) {
  let number = [];
  let found = false;
  const findSum = (x, i) => {
    for (let y = i + 1; y <= nums.length; y++) {
      if (x + nums[y] === target && !found) {
        number.push(i);
        number.push(y);
        found = true;
      }
    }
  };
  nums.forEach(findSum);
  return number;
}
