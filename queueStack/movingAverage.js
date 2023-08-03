/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.res = [];
    this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.res.push(val);
    const length = this.res.length;
    let averageLength = length > this.size ? this.size : length;
    const totalAverageLength = averageLength;
    let total = 0;
    while (averageLength !== 0) {
        const add = this.res[length - averageLength]
        total = total + add;
        averageLength--;
    }
    return total / totalAverageLength;
};



// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3


const test = () => {

    const movingAverage = new MovingAverage(3);

    console.log(movingAverage.next(1));
    console.log(movingAverage.next(10));
    console.log(movingAverage.next(3));
    console.log(movingAverage.next(5));

}


test();
