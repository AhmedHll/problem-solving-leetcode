var runningSum = function (nums) {
    let total = 0
    let result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(total += nums[i])
    }
    return result
};

console.log(runningSum([1, 2, 3, 4]));

// Runtime: 82 ms, faster than 74.73% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.9 MB, less than 12.61% of JavaScript online submissions for Running Sum of 1d Array.