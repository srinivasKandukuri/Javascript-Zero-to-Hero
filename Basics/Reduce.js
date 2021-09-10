let scores = [1, 4, 6, 5, 465, 5, 6, 75, 345, 465];
let initialVal = [];

//removes duplicate values in array

let noDupArray = scores.reduce(RemoveDuplicates, initialVal);

function RemoveDuplicates(accumulator, currentval) {
    if (!accumulator.includes(currentval))
        accumulator.push(currentval);
    return accumulator;
}

console.log(noDupArray);





////// polyfill //////


Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialVal === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator != undefined)
            accumulator = callback(this[i], i, this)
        else
            accumulator = this[i];
    }
    return accumulator;
}



let noDupArray1 = scores.myReduce(RemoveDuplicates, initialVal);


console.log(noDupArray1);
