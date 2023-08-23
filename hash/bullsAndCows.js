// leetcode 299

const bullsAndCows = (secret, guess) => {
    const map = {};
    const map2 = {}
    for (let i = 0; i <secret.length ; i++) {
        const current = secret[i];
        if (map[current]) {
            map[current] = map[current] + 1;
        } else {
            map[current] = 1;
        }
    }
    let a = 0;
    let b = 0;
    for (let i = 0; i <guess.length; i++) {
        const current = guess[i];
        if (current === secret[i]) {
            map2[i] = true;
            a++;
            map[current] = map[current] - 1;
        }
    }

    for (let i = 0; i <guess.length; i++) {
        const current = guess[i];
        if (!map2[i] && map[current]) {
            b++;
            map[current] = map[current] - 1;
        }
    }

    return `${a}A${b}B`;
}


console.log(bullsAndCows("1123", '0111'));


// 1122
// 1222

// Example 1:
//
// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
//     "1807"
//       |
//     "7810"
// Example 2:
//
// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
//     "1123"        "1123"
//       |      or     |
//     "0111"        "0111"
// Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
