var input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

function run(input, result) {
    if (input.length == 0) {
        return result;
    }

    // add the first row to result
    result = result.concat(input.shift());

    // add the last element of each remaining row
    input.forEach(function(rightEnd) {
        result.push(rightEnd.pop());
    });

    // add the last row in reverse order
    result = result.concat(input.pop().reverse());

    // add the first element in each remaining row (going upwards)
    var tmp = [];
    input.forEach(function(leftEnd) {    
        tmp.push(leftEnd.shift());
    });
    result = result.concat(tmp.reverse());

    return run(input, result);
}

var result = run(input, []);

console.log('result', result);

//[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
