// leetcode 713

// const getProduct = ({ nums, left, right }) => {
//     let checkRight = right;
//     let product = 1;
//     while (checkRight >= left) {
//         product = product * nums[checkRight];
//         checkRight--;
//     }
//     return product;
// }
//
// const numSubarrayProductLessThanK = function(nums, k) {
//     let left = 0, right = 0, res = 0;
//     for (right; right < nums.length; right++) {
//         let product = getProduct({ nums, left, right });
//         while (product >= k && left < nums.length) {
//             left++;
//             product = getProduct({ nums, left, right });
//         }
//         const total = right - left + 1;
//         res = res + (total > 0 ? total : 0);
//     }
//     return res;
// }



const numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) {
        return 0;
    }

    let ans = 0, left = 0, curr = 1;

    for (let right = 0; right < nums.length; right++) {
        curr *= nums[right];
        while (curr >= k) {
            curr /= nums[left];
            left++;
        }

        ans += right - left + 1;
    }

    return ans;
};


console.log(numSubarrayProductLessThanK([10,5,2,6], 10));
