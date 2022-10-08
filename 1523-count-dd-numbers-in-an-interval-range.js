// var countOdds = function (low, hight) {
//     let result = 0
//     for (let i = low; i <= hight; i++) {
//         if (i % 2 == 1) {
//             result++
//             return result
//         }

//     }
// console.log(result);
// };
// console.log(countOdds(10, 20));

// console.log([...Array(10).keys()]);

// console.log(Array.from({ length: 10 }, (_, i) => i + 1));


var countOdds = function (low, high) {
    let numbers = [];
    if (low < high) {
        for (let i = low; i <= high; i++) {
            if (i % 2 == 1) {
                numbers.push(i);
            }
        }
    } else if (low === high && low % 2 == 1 && high % 2 == 1) return 1
    return numbers.length;
}

console.log(countOdds(11, 11));