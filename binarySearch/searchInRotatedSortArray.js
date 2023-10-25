// leetcode 33
const findTargetIdx = (nums, target, left, right) => {
    if (left > right) {
        return -1;
    }
    const checkIdx = Math.floor((left + right) / 2);
    if (nums[checkIdx] === target) {
        return checkIdx;
    } else if (nums[checkIdx] < target) {
        return findTargetIdx(nums, target, checkIdx + 1, right)
    } else {
        return findTargetIdx(nums, target, left, checkIdx - 1)
    }
};

var search = function(nums, target) {
    const findIdx = findTargetIdx(nums, target, 0, nums.length - 1);
    return findIdx;
};


console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([0,1,2,3,5,6,7], 0));



// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:
//
// Input: nums = [1], target = 0
// Output: -1
