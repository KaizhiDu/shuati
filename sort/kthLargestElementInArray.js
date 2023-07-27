// leetcode 215

const quickSelect = (nums, k) => {
    const middle = Math.floor(nums.length/2);

    const value = nums[middle];

    const { left, right } = (nums || []).reduce((accum, item, idx) => {
        if (middle === idx) {
            return accum;
        }
        if (item > value) {
            accum.left.push(item);
        } else {
            accum.right.push(item);
        }
        return accum;
    }, {
        left: [],
        right: []
    });

    if (left.length >= k) {
        return quickSelect(left, k);
    } else if (nums.length - right.length < k) {
        return quickSelect(right, k - (nums.length - right.length));
    } else {
        return value;
    }
}

const kthLargestElementInArray = (nums, k) => {
    const result = quickSelect(nums, k);
    return result;
}


const res = kthLargestElementInArray([7,6,5,4,3,2,1], 2);


console.log(res);
