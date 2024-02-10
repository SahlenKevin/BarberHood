const shoppingcart = document.getElementById("shopping-cart-list");
const addToCartBtn = document.getElementsByClassName("btn-success");
const serviceList = document.getElementsByClassName("service-list")[0];
console.log(addToCartBtn);

for (let index = 0; index < addToCartBtn.length; index++) {
    const button = addToCartBtn[index];
    button.addEventListener("click", function(event){
        const addCartItem = document.createElement("li")
        addCartItem.classList.add("list-group-item")
        addCartItem.innerText="Prutt";
        shoppingcart.appendChild(addCartItem);
        
    })
}
