const human = {
    name: "John",
    age: 37,
};

const traits = {
    age: 29,
    hobby: "Programming computers",
};

const person = Object.assign(human, traits);

console.log(human); // { name: "John", age: 29, hobby: "Programming computers" }
console.log(person); // { name: "John", age: 29, hobby: "Programming computers" }


/*
  As shown in the code above, both human and person objects will have the same properties. If you don’t want to modify the original array, you can pass a new empty object ({}) as the target argument while the rest of the objects are passed as the sources:
*/


const human = {
    name: "John",
    age: 37,
};

const traits = {
    age: 29,
    hobby: "Programming computers",
};

const person = Object.assign({}, human, traits);

console.log(person); // { name: "John", age: 29, hobby: "Programming computers" }
console.log(human); // { name: "John", age: 37 }





//Reusable function to merge many objects

function mergeObj(...arr) {
    return arr.reduce((acc, val) => {
        return {
            ...acc,
            ...val
        };
    }, {});
}

const human = {
    name: "John",
    age: 37,
};

const traits = {
    age: 29,
    hobby: "Programming computers",
};

const attribute = {
    age: 40,
    nationality: "Belgian"
};

const person = mergeObj(human, traits, attribute);
console.log(person);
// { name: "John", age: 40, hobby: "Programming computers", nationality: "Belgian" }