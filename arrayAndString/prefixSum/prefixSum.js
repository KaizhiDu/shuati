// nums = [1, 6, 3, 2, 7, 2]
//
// queries = [[0, 3], [2, 5], [2, 4]]
// limit = 13
// the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].
const prefixSum = (nums, queries, limit) => {
    const preSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        preSum.push(nums[i] + preSum[i-1]);
    }
    const result = [];
    for (const [x, y] of queries) {
        const res = preSum[y] - preSum[x] + nums[x];
        result.push(res < limit)
    }

    return result

};


console.log(prefixSum([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13));
