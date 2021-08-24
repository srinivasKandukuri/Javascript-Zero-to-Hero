//EX1


var shoppingCart = (function(){
    var items= [];
    function createinstance(){
        return {
            getItems : function(){
                return items;
            },
            addItems : function(item){
                items.push(item);
            }
        }
    }

    return {
        GetInstance : function(){
            return createinstance();
        }

    }
})();




shoppingCart.GetInstance().addItems("one");
shoppingCart.GetInstance().addItems("two");
console.log(shoppingCart.GetInstance().getItems());
