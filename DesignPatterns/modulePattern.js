var mymodule = (function(){
 let _some_var = "Hello";

 function private_fun (){
     let _some_var = "xyz";
     console.log(_some_var);
}

 return {
     public_method : function(){
         private_fun();
     }
 }
})();


mymodule.public_method();
