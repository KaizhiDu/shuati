// fiveSort([12, 5, 1, 5, 12, 7]); -> [12, 7, 1, 12, 5, 5]

const fiveSort = (nums) => {
    let right = nums.length - 1;
    for(let i=0;i<right;i++) {
        while(nums[right] === 5) {
            right--;
        }
        if(nums[i] === 5) {
            [nums[i], nums[right]] = [nums[right], nums[i]]
            right--;
        }
    }
    return nums;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
