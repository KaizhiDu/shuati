// leetcode 34
// 5/2
// 0 1 2 3 4

const findTargetIdx = (nums, target, left, right, lastIndex) => {
    const checkIdx = Math.floor((right - left) / 2) + left;
    if (lastIndex === checkIdx) {
        return null;
    }
    if (nums[checkIdx] === target) {
        return checkIdx;
    }
    if (nums[checkIdx] > target) {
       return findTargetIdx(nums, target, 0, checkIdx - 1, checkIdx)
    } else {
       return findTargetIdx(nums, target, checkIdx + 1, right, checkIdx)
    }
};


var searchRange = function(nums, target) {
    const findIdx = findTargetIdx(nums, target, 0, nums.length - 1);
    if (findIdx === null) {
        return [-1,-1];
    }
    let left = findIdx;
    let right = findIdx;
    while (nums[left - 1] !== undefined && nums[left - 1] === target ) {
        left--;
    }
    while (nums[right + 1] !== undefined && nums[right + 1] === target ) {
        right++;
    }
    return [left, right];
};


console.log(searchRange([0,0,0,1,2,3], 0));
// console.log(searchRange([5,7,7,8,8,10], 6));
// console.log(searchRange([], 0));
// console.log(searchRange([1,4], 4));


// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
//
// Input: nums = [], target = 0
// Output: [-1,-1]



// var searchRange = function(nums, target) {
//     let ans = [-1, -1];
//     let start = 0, end = nums.length - 1, mid;
//     // First occurrence
//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);
//         if (target == nums[mid]) {
//             ans[0] = mid;
//             end = mid - 1;
//         } else if (target < nums[mid]) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     // Last occurrence
//     start = 0;
//     end = nums.length - 1;
//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);
//         if (target == nums[mid]) {
//             ans[1] = mid;
//             start = mid + 1;
//         } else if (target < nums[mid]) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return ans;
// };
