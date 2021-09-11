
// Custom function supports deepcloning without losing data

function clone(obj) {
    if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    if (obj instanceof Date)
        let temp = new obj.constructor(); 
    else
        let temp = obj.constructor();

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }
    return temp;
}



// Native clone 

/*

Native deep cloning is known as “structured cloning” in Node.js. 
This feature is not available in the browser. 
Structured cloning supports an additional set of data types along with the ones that are supported by JSON. 
Here’s a list of additional data types it supports.

*/


const v8 = require('v8');
const structuredClone = obj => {
 return v8.deserialize(v8.serialize(obj));
};

let sampleObject = {
 hello: 'hello',
 a: 'worlds',
 nested: {
   first: 'first object value'
 }
};
let cloned = structuredClone(sampleObject);



