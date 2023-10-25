// leetcode 1004

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
//
// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.



var longestOnes = function(nums, k) {
    let i = 0;
    let j = 0;
    let count = k;
    let maxLength = 0;
    while(j < nums.length) {
        if(nums[j] === 1){
            j++;
        } else {
            if(count > 0) {
                count--;
                j++;
            } else {
                if (nums[i] === 0) {
                    count++;
                }
                i++;
            }
        }
        maxLength = Math.max(maxLength, j-i);
    }
    return maxLength
};


console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))

