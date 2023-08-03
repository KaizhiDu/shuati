// leetcode 281

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.result = [];
    while (v1.length && v2.length) {
        this.result.push(v1.shift())
        this.result.push(v2.shift())
    }
    if (v1.length) {
        this.result = [...this.result, ...v1]
    }
    if (v2.length) {
        this.result = [...this.result, ...v2]
    }
    this.index = 0;
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.result[this.index] !== undefined
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    return this.result[this.index++]
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

const v1 = [1,2]
const v2 = [3,4,5,6]

const a = [];
let i = new ZigzagIterator(v1, v2)
while (i.hasNext()) a.push(i.next())

console.log(a);



