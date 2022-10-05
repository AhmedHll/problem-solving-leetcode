var romanToInt = function (s) {

    const nums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let res = 0;
    for (i = 0; i < s.length; i++) {
        if (nums[s[i]] < nums[s[i + 1]]) {
            res += nums[s[i + 1]] - nums[s[i]]
            i++
        } else {
            res += nums[s[i]]
        }
    }
    return res;
};