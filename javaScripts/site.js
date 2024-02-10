const shoppingcart = document.getElementById("shopping-cart-list");
const addToCartBtn = document.getElementsByClassName("btn-success");
const serviceList = document.getElementsByClassName("service-list")[0];
console.log(addToCartBtn);

for (let index = 0; index < addToCartBtn.length; index++) {
    const button = addToCartBtn[index];
    button.addEventListener("click", function(event){
        addItemToCart.call();
    })
}

function addItemToCart(){
    const addCartItem = document.createElement("li");
    const removeButton = document.createElement("btn");
    removeButton.classList.add("btn", "btn-danger")
    removeButton.innerText="Remove from cart"
    addCartItem.classList.add("list-group-item");
    addCartItem.innerText="Prutt";
    addCartItem.appendChild(removeButton);
    shoppingcart.appendChild(addCartItem);
}