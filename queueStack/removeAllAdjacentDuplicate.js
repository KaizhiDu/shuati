// leetcode 1209

const removeAllAdjacentDuplicate = (s, k) => {
    // const stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     const current = s[i];
    //     let loop = k - 1;
    //     let check = true;
    //     while (loop) {
    //         if (stack[stack.length - loop] === current) {
    //             loop --;
    //         } else {
    //             check = false;
    //             break;
    //         }
    //     }
    //     if (check) {
    //         for (let j = 0; j < k - 1; j++) {
    //             stack.pop()
    //         }
    //     } else {
    //         stack.push(current)
    //     }
    // }
    // return (stack || []).join('');


    let d = [];
    let output = "";
    for (let i of s) {
        if (d.length && d[d.length - 1][0] === i) {
            d[d.length - 1][1]++;
            if (d[d.length - 1][1] === k) {
                d.pop();
            }
        } else {
            d.push([i, 1]);
        }
    }

    for (let i of d) {
        output += i[0].repeat(i[1]);
    }
    return output;

}


console.log(removeAllAdjacentDuplicate('pbbcggttciiippooaais', 2));

// Example 1:
//
// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:
//
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
//     First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:
//
// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"
