/** Exercise 01
Use the Module pattern to create a shopping cart that has one private member: 
basket[], and the following public methods:
upsertItem() add a product to basket if doesn't exist, or update if exist. - products are treated 
the same only if the product id is the same.
getItemsCount() returns back the number of products in the basket.
getTotalPrice() calculates the total price, taking in consideration the count of products.
removeItemById(id) removes a product from the basket.
Every product item has the following structure:
Product = {id: 0, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5, count: 1}
 * 
 */
("use strict")
const shoppingCart = (function(){
    let basket = [];
    return {
        upsertItem: function(product){
            if(basket.length === 0){
                basket.push(product);
            } else {
                for(let i =0; i < basket.length; i++){
                    if(basket[i].id === product.id){
                        basket[i] = product;
                        return;
                    }
                }
                basket.push(product);
            }

                
            },
            getItemsCount: function(){
                return basket.length

            },
            getTotalPrice: function(){
                const totalPrice = basket.reduce((sum, item) => sum + item.price * item.count, 0 );
                return totalPrice;
            },
            removeItemById: function(id){
                basket = basket.filter(item => item.id !== id);


                    }
                };
 
})();

const product1 = { id: 0, name: 'Coffee', description: 'Instant Coffee', price: 4.5, count: 1 }
const product2 = { id: 1, name: 'Soft Drink', description: 'Orange Juice', price: 3.5, count: 12 }
const product3 = { id: 2, name: 'Pizza(frozen)', description: 'Chicken -by Pizza Home', price: 10, count: 3 }

shoppingCart.upsertItem(product1);
shoppingCart.upsertItem(product2);
shoppingCart.upsertItem(product3);
//console.log(shoppingCart)
console.log(shoppingCart.getTotalPrice());
product3.name = 'Himilayan Water';
product3.price = 5;
shoppingCart.upsertItem(product3);

 console.log(shoppingCart.getItemsCount());
 console.log(shoppingCart.getTotalPrice());
 console.log(product3.name)
 shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount());
 console.log(shoppingCart.getTotalPrice());