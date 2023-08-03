// leetcode 150


const evalRPN = tokens => {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const element = tokens[i];
        if (!isNaN(element)) {
            stack.push(element);
        } else {
            const second = parseFloat(stack.pop());
            const first = parseFloat(stack.pop());
            if (element === '+') {
                stack.push(first+second);
            }
            if (element === '-') {
                stack.push(first-second);
            }
            if (element === '*') {
                stack.push(first*second);
            }
            if (element === '/') {
                stack.push(first/second > 0 ? Math.floor(first/second) : Math.ceil(first/second));
            }
        }
    }
    return stack.pop();
};


console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));


// Example 1:
//
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9



// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6


// Example 3:
//
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
//     = ((10 * (6 / (12 * -11))) + 17) + 5
//     = ((10 * (6 / -132)) + 17) + 5
//     = ((10 * 0) + 17) + 5
//     = (0 + 17) + 5
//     = 17 + 5
//     = 22
