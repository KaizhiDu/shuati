// leetcode 895

var FreqStack = function() {
    this.freqStack = [];
    this.freqMap = {};
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    this.freqMap[x] = this.freqMap[x] ? this.freqMap[x] + 1 : 1;
    const freq = this.freqMap[x];
    if (this.freqStack.length < freq) {
        this.freqStack.push([x]);
    } else {
        this.freqStack[freq-1].push(x);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const lastPart = this.freqStack[this.freqStack.length - 1];
    const result = lastPart.pop();
    if (lastPart.length === 0) {
        this.freqStack.pop();
    }
    this.freqMap[result] -= 1;
    return result;
};

const freqStack = new FreqStack();


// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// console.log(freqStack.pop());   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// console.log(freqStack.pop());   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// console.log(freqStack.pop());   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// console.log(freqStack.pop());   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack

console.log(freqStack.push(5));
console.log('laodu:after:push', freqStack.freqStack)
console.log('------------------------------------------')
console.log(freqStack.push(1));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(2));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(5));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(5));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(5));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(1));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(6));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(1));
console.log('laodu:after:push', freqStack.freqStack)

console.log('------------------------------------------')
console.log(freqStack.push(5));
console.log('laodu:after:push', freqStack.freqStack)


console.log('------------------------------------------')
console.log(freqStack.pop());
console.log('------------------------------------------')
console.log(freqStack.pop());
console.log('------------------------------------------')
console.log(freqStack.pop());
console.log('------------------------------------------')
console.log(freqStack.pop());
console.log('------------------------------------------')
console.log(freqStack.pop());
console.log('------------------------------------------')
console.log('laodu:before:heap', freqStack.freqStack)
console.log('laodu:before:map', freqStack.freqMap)
console.log(freqStack.pop());
console.log('laodu:after:heap', freqStack.freqStack)
console.log('laodu:after:map', freqStack.freqMap)
console.log('------------------------------------------')
console.log('laodu:before:heap', freqStack.freqStack)
console.log('laodu:before:map', freqStack.freqMap)
console.log(freqStack.pop());
console.log('laodu:after:heap', freqStack.freqStack)
console.log('laodu:after:map', freqStack.freqMap)
console.log('------------------------------------------')
console.log(freqStack.pop());
console.log('------------------------------------------')
console.log(freqStack.pop());
console.log('------------------------------------------')
console.log(freqStack.pop());
// Example 1:
//
// Input
//     ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
//     [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// Output
//     [null, null, null, null, null, null, null, 5, 7, 5, 4]
//
// Explanation
// FreqStack freqStack = new FreqStack();
// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
