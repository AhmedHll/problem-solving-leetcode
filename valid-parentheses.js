var isValid = function (s) {
    const hashMap = { '(': ')', '{': '}', '[': ']' }
    const stack = []
    for (let ch of s) {
        if (hashMap[ch]) {
            stack.push(hashMap[ch])
        } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}

// Runtime: 98 ms, faster than 58.71% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 43.2 MB, less than 18.10% of JavaScript online submissions for Valid Parentheses.