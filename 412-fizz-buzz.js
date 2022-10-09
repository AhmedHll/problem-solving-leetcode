// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


var fizzBuzz = function (n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        result.push(i)
    }
    const arrayOfStrings = result.toString().split(',')
    const final = arrayOfStrings.map((num) =>
        num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz'
            : num % 3 === 0 ? 'Fizz'
                : num % 5 === 0 ? 'Buzz'
                    : num
    )
    return final
};

console.log(fizzBuzz(15));
