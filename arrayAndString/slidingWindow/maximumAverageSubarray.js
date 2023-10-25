// leetcode 643

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
//
// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

const findMaxAverage = function(nums, k) {
    let left = 0, right = 0, res = -Infinity;
    for (right; right < nums.length; right++) {
        let sum = 0;
        let checkRight = right;
        if ((right - left + 1) === k) {
           while (checkRight >= left) {
               sum = sum + nums[checkRight];
               checkRight--;
           }
           res = Math.max(res, sum);
           left++;
       }
    }
    return res/k
};


// console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
// console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([-1], 1));
