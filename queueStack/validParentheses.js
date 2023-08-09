// leetcode 20

const validParentheses = (s) => {

    Array.prototype.peek = function () {
        return this[this.length - 1];
    }

    const stack = [];

    const mapping = {
        '}': '{',
        ']': '[',
        ')': '('
    }


    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (current === '{' || current === '[' || current === '(') {
            stack.push(current);
        } else {
            const peek = stack.peek();
            if (mapping[current] === peek) {
                stack.pop();
            } else {
                stack.push(current);
            }
        }
    }

    if (stack.length) {
        return false;
    } else {
        return true;
    }


}


console.log(validParentheses("()"));

//
// Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false
