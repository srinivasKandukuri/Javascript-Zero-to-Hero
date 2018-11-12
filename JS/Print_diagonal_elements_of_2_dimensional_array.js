
/*. Print the diagonal elements of a 2 dimensional array using both multiple loops as well as single loop
   Input Array: 1 2 3
                          4 5 6
                         7 8 9
    Output#1: 1 5 9
    Output#2: 3 5 7
*/



function calculateDiagonals(matrix){
    var n = matrix.length;
    var diag1 = [];
    var diag2 = [];
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1.push( matrix[i][j]);
                
            }
            // an element from the second diagonal
            if(i + j === n - 1){
                 diag2.push( matrix[i][j]);
                  
            }
        }
    }

    console.log(diag1, diag2);
}

var max = [
[1,2,3],
[4,5,6],
[7,8,9]
]

calculateDiagonals(max);
