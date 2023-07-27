// leetcode 27

var removeElement = function(nums, val) {
    let right = nums.length - 1;
    for(let i=0; i< nums.length; i++) {
        while(nums[right] === val) {
            right = right - 1;
            nums.pop();
        }
        const currentValue = nums[i];
        if (currentValue === val) {
            nums[i] = nums[right];
            nums.pop();
            right = right - 1;
        }
    }
    return nums;
};


// const result = removeElement([0,1,2,2,3,0,4,2], 2);
const result = removeElement([3,2,2,3], 3);

console.log(result);




