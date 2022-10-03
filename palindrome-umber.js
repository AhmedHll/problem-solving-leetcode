var isPalindrome = function (x) {
    let r = x.toString().split('').reverse().join('');
    const check = x == r ? true : false
    return check
};

