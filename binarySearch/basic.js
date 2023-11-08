// const binarySearch = (arr, target) => {
//     let left = 0;
//     let right = arr.length;
//     // first target
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] >= target) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//
//     return left;
// }

let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // right-most insertion point
        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}


console.log(binarySearch([1,2,7,7,7,9,100], 9));
