// compress('ccaaatsss'); // -> '2c3at3s'

const compress = (s) => {
    let result = '';
    const array = s.split('');
    let left = 0;
    let right = 1;
    for(let i=0;i<array.length;i++) {
        const element = array[i];
        const nextElement = array[i+1];
        if(element !== nextElement) {
            let total = right - left;
            const append = total === 1 ? element : `${total}${element}`;
            result = `${result}${append}`
            left = i;
            right = i+1;
        } else {
            right++;
        }
    }
    return result;
};


console.log(compress("ccaaatsss"));

