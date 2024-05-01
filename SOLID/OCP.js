/*

Open/Closed Principle (OCP):

Software entities should be open for extension but closed for modification.
In JavaScript, this can be achieved through techniques like inheritance, composition, or dependency injection.
By designing classes and functions to be easily extended without modifying their source code, you can adhere to this principle.

*/

// EX:1

const roles = ["admin", "user"]

checkRole = (user) => {
    if(roles.includes(user.role)){
        return true;
    }else{
        return false;
    }
}

addRole(role){
    roles.push(role);
}

addRole("superuser");
checkRole("admin");



//EX:2

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
