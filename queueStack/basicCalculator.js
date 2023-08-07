// leetcode 224

// const basicCalculator = s => {
//     const operationQueue = [];
//     const numberStack = [];
//     let num = '';
//     for (let i = 0; i <s.length ; i++) {
//         const current = s[i];
//         if (current !== '(' && current !== ')' && current !== ' ' ) {
//             if (!isNaN(current)) {
//                 if (num) {
//                     numberStack.pop();
//                 }
//                 num = num+''+current;
//                 numberStack.push(num)
//             } else {
//                 operationQueue.push(current);
//                 num = '';
//                 if (operationQueue.length === 2) {
//                     const second = parseFloat(numberStack.pop());
//                     const first = parseFloat(numberStack.pop());
//                     let result;
//                     const operation = operationQueue.shift();
//                     if (operation === '+') {
//                         result = (first || 0) + second;
//                     } else {
//                         result = (first || 0) - second;
//                     }
//                     numberStack.push(result);
//                 }
//             }
//         }
//         // console.log(current);
//         // console.log(numberStack);
//         // console.log(operationQueue);
//         // console.log('-----------------------');
//     }
//
//     if (operationQueue.length) {
//         const second = parseFloat(numberStack.pop());
//         const first = parseFloat(numberStack.pop());
//         let result;
//         const operation = operationQueue.shift();
//         if (operation === '+') {
//             result = (first || 0) + second;
//         } else {
//             result = (first || 0) - second;
//         }
//         numberStack.push(result);
//     }
//     return numberStack.pop();
// };

Array.prototype.peek = function() {
    return this[this.length - 1];
}

const basicCalculator = s => {
    const stack = [];
    for (let i = 0; i <s.length ; i++) {
        const current = s[i];
        if (current !== ' ' ) {
            stack.push(current);
            if (stack.peek() === ')') {
                stack.pop();
                let number = 0;
                let res = 0;
                let num = '';
                while (stack.peek() !== '(') {
                    const popValue = stack.pop();
                    if (!isNaN(popValue)) {
                        num = popValue + '' + num;
                    } else {
                        const floatNumber = parseFloat(num);
                        num = '';
                        if (popValue === '-') {
                            res = 0 - floatNumber;
                        } else {
                            res = floatNumber;
                        }
                        number = number + res;
                    }
                }
                stack.pop();

                if (num) {
                    number = number + parseFloat(num);
                }
                stack.push(number);
            }
        }
    }
    let finalNum = '';
    let finalTotal = 0;
    let finalRes = 0;
    const finalStack = !isNaN(stack[0]) ? [...'+', ...stack] : stack;
    while (finalStack.peek() !== undefined) {
        const popValue = finalStack.pop();
        if (!isNaN(popValue)) {
            finalNum = popValue + '' + finalNum;
        } else {
            const floatNumber = parseFloat(finalNum);
            finalNum = '';
            if (popValue === '-') {
                finalRes = 0 - floatNumber;
            } else {
                finalRes = floatNumber;
            }
            finalTotal = finalTotal + finalRes;
        }
    }
    // console.log(finalTotal);
    return finalTotal;
};

// console.log(basicCalculator("-12312343234"));
// console.log(basicCalculator("( 1 +(41+5+2)-3)+(6+8)"));
// console.log(basicCalculator("1 + 1"));
console.log(basicCalculator("1 - (    -1)"));


// Example 1:
//
// Input: s = "1 + 1"
// Output: 2
// Example 2:
//
// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:
//
// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23
