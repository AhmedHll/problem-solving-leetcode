function ArrayChallenge(arr) {
    let result = []
    const firstNum = arr[0];
    const cut = arr.slice(firstNum);
    const afterCut = arr.slice(0, cut)
    // const afterCut = (...arr , ...cut)
    result.push(...cut)
    console.log(afterCut);
    return arr;

}

console.log(ArrayChallenge([3, 2, 1, 6]));