let scores = [1, 4, 6, 5, 465, 5, 6, 75, 345, 465];
let initialVal = [];

//removes duplicate values in array

let noDupArray = scores.reduce(function (accumulator, currentval) {
    if (!accumulator.includes(currentval))
        accumulator.push(currentval);
    return accumulator;
}, initialVal);

console.log(noDupArray);