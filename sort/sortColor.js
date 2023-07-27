// leetcode 75
// bucket sort

const sortColor = (nums) => {
    const map = {
        0: 0,
        1: 0,
        2: 0
    };
    for (let i = 0; i <nums.length ; i++) {
        const currentValue = nums[i];
        map[currentValue] = map[currentValue] + 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (map[0]) {
            map[0] = map[0] - 1;
            nums[i] = 0;
        } else if (map[1]) {
            map[1] = map[1] - 1;
            nums[i] = 1;
        } else if (map[2]) {
            map[2] = map[2] - 1;
            nums[i] = 2;
        }
    }

return nums;


}

const result = sortColor([2,0,2,1,1,0]);


console.log(result);
