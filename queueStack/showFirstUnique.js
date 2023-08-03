// leetcode 1129


// Input:
//     ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
//         [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output:
//     [null,2,null,2,null,3,null,-1]
// Explanation:
//     FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1

/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.res = nums;
    this.hashMap = {};
    nums.map(num => {
        if (!this.hashMap[num]) {
            this.hashMap[num] = 1;
        } else {
            this.hashMap[num] = this.hashMap[num] + 1;
        }
    })

};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    return this.res.find(item => this.hashMap[item] === 1) || -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.res.push(value);
    if (!this.hashMap[value]) {
        this.hashMap[value] = 1;
    } else {
        this.hashMap[value] = this.hashMap[value] + 1;
    }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */





