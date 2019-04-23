/**
Read a text file with comma saperated values.
Select data from between rage of dates in given file
sort based on name.


sample Input txt

srinivas,12,2019-01-02,2019-03-03,200
sk,30,2019-03-08,2019-05-01,100
sb,1,2019-01-04,2019-03-03,200
sc,56,2018-02-05,2018-05-01,10

**/


let fs = require('fs');

let data = fs.readFileSync('test.txt','utf8');

let rows = data.split('\n');

let array =  rows.map( eachrow => {
    let row = eachrow.split(",");
    return row;
})

let result = array.filter(obj => {
    let first = new Date('2019-01-01');
    let last = new Date('2019-05-30');
    return (new Date(obj['2']) > first && new Date('2') < last);
});

result.sort(compare);

console.log(result);

function compare(a,b){
    if(a[0] ==  b[0]){
        return 0;
    }
    else{
        return (a[0] < b[0]) ? -1 : 1;
    }
}
