// anagrams('restful', 'fluster'); // -> true

const anagrams = (s1, s2) => {
    const s1Array = s1.split('');
    const s2Array = s2.split('');
    const map = {};
    for(let i=0;i<s1Array.length;i++) {
        if(map[s1Array[i]]) {
            map[s1Array[i]] = map[s1Array[i]] + 1;
        } else {
            map[s1Array[i]] = 1;
        }
    }
    for(let i=0;i<s2Array.length;i++) {
        if(map[s2Array[i]] !== null) {
            map[s2Array[i]] = map[s2Array[i]] - 1;
        } else {
            map[s2Array[i]] = 1;
        }
    }
    const check = !!Object.values(map).every(item => item === 0);
    return check;
};

console.log(anagrams('restful', 'fluster'));

