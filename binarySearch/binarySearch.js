// leetcode 704

const search = function(nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
       const mid = Math.floor((left+right)/2);
       if (nums[mid] >= target) {
           right = mid
       } else {
           left = mid + 1;
       }
    }
    if (nums[left] !== target) {
        return -1;
    }
    return left;
};

console.log(search([-1,0,3,5,9,12], 2))
