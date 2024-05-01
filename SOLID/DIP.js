/*
Dependency Inversion Principle (DIP):
High-level modules should not depend on low-level modules. Both should depend on abstractions.
Abstractions should not depend on details; details should depend on abstractions.
In JavaScript, this can be achieved through techniques like dependency injection, where dependencies are provided externally rather than being instantiated within a class or function.
Using inversion of control containers or frameworks can help manage dependencies and adhere to DIP.
*/


// Violating DIP
class UserService {
    constructor() {
        this.db = new Database(); // Concrete dependency
    }
    
    getUsers() {
        return this.db.getUsers();
    }
}

// Good example following DIP
class UserService {
    constructor(database) {
        this.db = database; // Dependency injected
    }
    
    getUsers() {
        return this.db.getUsers();
    }
}

// Usage
const database = new Database();
const userService = new UserService(database);
