const shoppingcart = document.getElementById("shopping-cart-list");
const addToCartBtn = document.getElementsByClassName("btn-success");
const removeItemFromCartBtn = document.getElementsByClassName("btn-danger");
const serviceList = document.getElementsByClassName("service-list")[0];
console.log(addToCartBtn);

for (let index = 0; index < addToCartBtn.length; index++) {
    let button = addToCartBtn[index];
    button.addEventListener("click", function(event){
        addItemToCart.call();
    })
}

function addRemoveBtns()
{
    for (let index = 0; index < removeItemFromCartBtn.length; index++) {
        let button = removeItemFromCartBtn[index];
        button.addEventListener("click", function(event){
            let buttonClicked = event.target
            buttonClicked.parentElement.remove()
        })
        
    }

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

    addRemoveBtns.call();
}