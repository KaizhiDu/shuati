// leetcode 128

const longestConsecutive = function(nums) {
    const set = new Set();
    for (let i = 0; i <nums.length ; i++) {
        set.add(nums[i]);
    }
    let longest = 0;
    for (let item of set) {
        let thisTimeCheck = 1;
        let number = item;
        while (set.has(number-1)) {
            thisTimeCheck = thisTimeCheck + 1;
            number = number - 1;
        }
        longest = Math.max(longest, thisTimeCheck);
    }
};


console.log(longestConsecutive([100,4,200,1,3,2]));





// Example 1:
//
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
//
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
