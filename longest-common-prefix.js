var longestCommonPrefix = function (strs) {
    if (!strs[0] || strs.length == 1) return strs[0] || "";
    let i = 0;
    while (strs[0][i] && strs.every(w => w[i] === strs[0][i]))
        i++;
    return strs[0].substr(0, i);
}

// Runtime: 98 ms, faster than 56.57% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 42.4 MB, less than 70.16% of JavaScript online submissions for Longest Common Prefix.