// leetcode 350

const intersect = (nums1, nums2) => {
    const map = {};
    for (let i = 0; i <nums1.length ; i++) {
        if (map[nums1[i]]) {
            map[nums1[i]] = map[nums1[i]] + 1;
        } else {
            map[nums1[i]] = 1;
        }
    }
    const result = [];
    for (let i = 0; i < nums2.length; i++) {
       if (map[nums2[i]]) {
           map[nums2[i]] = map[nums2[i]] - 1;
           result.push(nums2[i]);
       }
    }
    return result;
}

console.log(intersect([1,2,2,1], [2,2,2]));


// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
