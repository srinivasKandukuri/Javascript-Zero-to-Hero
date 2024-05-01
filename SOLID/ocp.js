/*

Open/Closed Principle (OCP):

Software entities should be open for extension but closed for modification.
In JavaScript, this can be achieved through techniques like inheritance, composition, or dependency injection.
By designing classes and functions to be easily extended without modifying their source code, you can adhere to this principle.

*/



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