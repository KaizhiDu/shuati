// mostFrequentChar('bookeeper'); // -> 'e'

const mostFrequentChar = (s) => {
    const checkMap = {};
    for (let item of s) {
        if(!checkMap[item]) {
            checkMap[item] = 1;
        } else {
            checkMap[item] += 1;
        }
    };
    let best = null;
    for (let each of s) {
        if(best === null || checkMap[each] > checkMap[best]) {
            best = each;
        }
    };
    return best;
};

console.log(mostFrequentChar('bookeeper'));

