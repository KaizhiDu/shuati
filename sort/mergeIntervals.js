// leetcode 56

var merge = function(intervals, i = 0, result = []) {
    if (i > intervals.length - 1) {
        return result;
    }
    if (!result.length) {
        result.push(intervals[i]);
    } else {
        const lastIndexOfResult = result.length - 1;
        const [resultLeft, resultRight] = result[lastIndexOfResult];
        const [left, right] = intervals[i];
        if (resultRight >= left) {
            result[lastIndexOfResult] = [resultLeft, right];
        } else {
            result.push(intervals[i]);
        }}
    return merge(intervals, ++i, result);
};


const result = merge([[1,3],[2,6],[8,10],[15,18]]);


console.log(result);



