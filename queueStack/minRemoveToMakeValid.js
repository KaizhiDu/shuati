// leetcode 1249

const minRemoveToMakeValid = (s) => {
    const stack = [];
    Array.prototype.peek = function() {
        return this[this.length - 1];
    }
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (current === '(' || current === ')') {
            if (current === '(') {
                stack.push({
                    idx: i,
                    val: current
                });
            } else {
                if ((stack.peek() || {}).val === '(') {
                    stack.pop();
                } else {
                    stack.push({
                        idx: i,
                        val: current
                    });
                }
            }
        }
    }

    const needToRemove = (stack || []).reduce((accum, item)=> {
        const { idx } = item || {};
        return {
            ...accum,
            [idx]: true
        }
    }, {});

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!needToRemove[i]) {
            result = result+s[i];
        }
    }
    return result;
}

minRemoveToMakeValid('a)b(c)d');



// Example 1:
//
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
//     Example 2:
//
// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:
//
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
