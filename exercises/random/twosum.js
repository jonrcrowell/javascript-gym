/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// User Lee_leetcode posted much better solutions, with notes
// https://leetcode.com/problems/two-sum/discuss/231428/Javascript-the-3-sample-solutions-with-notes
// Study these and learn, young grasshopper

const twoSumSmarter = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    // work out the complement
    // eg. nums[i] === 3, target === 7, the complement will be 4
    var complement = target - nums[i];

    // Iterate the rest of the number and check if the complement of nums[i] exists
    // This part takes a lot of time
    var found = nums.indexOf(complement, i + 1);
    if (found !== -1) {
      return [i, found];
    }
  }
  return [0, 0];
};

/**
Two-pass Hash Table

eg. nums = [3,5,9,12,15], target = 21

const hashTable = {
	3: 0,
	5: 1,
	9: 2,
	12: 3,
	15: 4
}

1. Create a hashTable
2. Iterate nums
	2.1 Find the complement of nums[i] in the hashTable by checking the key of the hashTable object. In this way, the iteration time will be significantly reduced. If found, return [i, found]
3. If not found, return [0,0]

*/
const twoSumTwoPass = function(nums, target) {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  let hashTable = {};
  for (let i = 0; i < len; i++) {
    // Add a new obj to the hashTable where key = nums[i] and value = i
    hashTable[nums[i]] = i;
  }

  for (let i = 0; i < len; i++) {
    let complement = target - nums[i];
    let found = hashTable[complement]; // Determine whether the complement exist in the hashTable
    if (found !== undefined && found != i) return [i, found];
  }
  return [0, 0];
};

/*
Need to study how this was written.
An even faster solution with less memory consumption - One-pass hash table
Result: 68ms (beats 100%), 16 MB
*/

const twoSumOnePass = function(nums, target) {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  let map = {};
  for (let i = 0; i < len; i++) {
    let n = target - nums[i];
    let find = map[n];
    if (find !== undefined) return [find, i];
    else map[nums[i]] = i;
  }
};

console.log(twoSumSmarter([3, 3], 6));
console.log(twoSumTwoPass([3, 3], 6));
console.log(twoSumOnePass([3, 3], 6));
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
