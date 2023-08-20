// leetcode 49

const groupAnagrams = (strs) => {
    const map = {};
    for (let i = 0; i <strs.length ; i++) {
        const current = strs[i];
        const key = (current || '').split('').sort((a, b) => a > b ? -1 : 1).join('');
       if (map[key]) {
           map[key].push(current);
       } else {
           map[key] = [current];
       }
    }
    const result = Object.values(map);
    return result;
}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));



// Example 1:
//
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
//
// Input: strs = [""]
// Output: [[""]]
// Example 3:
//
// Input: strs = ["a"]
// Output: [["a"]]
