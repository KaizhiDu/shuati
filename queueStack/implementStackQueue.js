var MyStack = function() {
    this.res = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.res.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.res.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
   const length = this.res.length;
    return this.res[length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    const length = this.res.length;
    return !length;
};


// Input
//     ["MyStack", "push", "push", "top", "pop", "empty"]
//     [[], [1], [2], [], [], []]
// Output
//     [null, null, null, 2, 2, false]
//
// Explanation
// const myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False



const test = () => {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    myStack.top();
    myStack.pop();
    console.log(myStack.empty())
}


test();






