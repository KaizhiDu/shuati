// leetcode 767

var reorganizeString = function(s) {

    const freqMap = {};
    for (let char of s) {
        if (!freqMap[char]) {
            freqMap[char] = 0;
        }
        freqMap[char]++;
        if (freqMap[char] > Math.floor((s.length + 1) / 2)) {
            return "";  // impossible case
        }
    }

    const maxHeap = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

    const result = [];

    while (maxHeap.length > 1) {
        const first = maxHeap.shift();
        const second = maxHeap.shift();
        if (first[1] > 0) {
            result.push(first[0]);
        }
        if (second[1] > 0) {
            result.push(second[0]);
        }
        if (first[1] > 0) {
            first[1] --;
        }
        if (second[1] > 0) {
            second[1] --;
        }

        if (first[1]) {
            maxHeap.push(first);
        }
        if (second[1]) {
            maxHeap.push(second);
        }

        maxHeap.sort((a, b) => b[1] - a[1]);
    }

    if (maxHeap.length) {
        result.push(maxHeap[0][0]);
    }

    return result.join('');

};


console.log(reorganizeString('vvvlo'));


// Example 1:
// Input: s = "aab"
// Output: "aba"
//
// Example 2:
//
// Input: s = "aaab"
// Output: ""
