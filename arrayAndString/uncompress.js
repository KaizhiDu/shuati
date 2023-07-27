// uncompress("2c3a1t"); // -> 'ccaaat'

const uncompress = (s) => {
    const result = [];
    let left = 0;
    let right = 0;
    const array = s.split('');

    for (let i=0;i<array.length;i++) {
        const currentIsNumber = !isNaN(array[i]);
        if(currentIsNumber) {
            right++;
        } else {
            let number = parseInt(s.slice(left, right));
            while(number > 0) {
                result.push(array[i]);
                number--;
            }
            left = i + 1;
            right = i + 1;
        }
    }
    return result.join('');
};


console.log(uncompress("2c3a1t"));

