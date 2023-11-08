// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
//
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
//
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4



const searchInsert = (nums, target) => {
    let left = 0, right = nums.length;
    while (left < right) {
        const mid = Math.floor((left+right)/2);
        const midValue = nums[mid];
        if (midValue === target) {
            return mid;
        }
        if (midValue >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

console.log(searchInsert([1,3,5,6], 7));
