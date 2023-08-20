// leetcode 380

var RandomizedSet = function() {
    this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const response = !this.set.has(val);
    this.set.add(val);
    console.log('insert', this.set, val)
    return response;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const response = this.set.has(val);
    this.set.delete(val);
    console.log('remove', this.set, val)
    return response;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const getValue = (min, max) => Math.floor(Math.random() * (max - min + 1));
    let arrayFromSet = [...this.set];
    return arrayFromSet[getValue(0, arrayFromSet.length - 1)]
};



// const randomizedSet = new RandomizedSet();
// console.log(randomizedSet.insert(1)); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// console.log(randomizedSet.remove(2)); // Returns false as 2 does not exist in the set.
// console.log(randomizedSet.insert(2)); // Inserts 2 to the set, returns true. Set now contains [1,2].
// console.log(randomizedSet.getRandom()); // getRandom() should return either 1 or 2 randomly.
// console.log(randomizedSet.remove(1)); // Removes 1 from the set, returns true. Set now contains [2].
// console.log(randomizedSet.insert(2)); // 2 was already in the set, so return false.
// console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.


const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(2));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
console.log(randomizedSet.remove(1));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
