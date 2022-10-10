// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/

var numberOfSteps = function (num) {
    let count = 0;

    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num -= 1;
        }
        count++;
    }

    return count;
};

console.log(numberOfSteps(14));

// Runtime: 100 ms, faster than 38.24% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 41.9 MB, less than 68.18% of JavaScript online submissions for Number of Steps to Reduce a