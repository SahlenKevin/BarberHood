const shoppingcart = document.getElementById("shopping-cart-list");
const addToCartBtn = document.getElementsByClassName("btn-success");
const serviceList = document.getElementsByClassName("service-list")[0];
console.log(addToCartBtn);

const services = [
    {
        img: "../images/barber.jpg",
        Title: "Skägg",
        Description: "Skäggvård i världsklass",
        Price: 199
    },
    {
        img: "../images/barber.jpg",
        Title: "Skägg + hår",
        Description: "Skäggvård i världsklass + att vi fixar håret på toppen också!",
        Price: 299
    }
]

console.log(services);

displayServices();

function displayServices()
{
    for (const service of services) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src=service.img;
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText=service.Title;
        cardBody.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("card-text");
        description.innerText=service.Description;
        cardBody.appendChild(description);

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.innerText=service.Price;
        cardBody.appendChild(price);

        const addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("btn","btn-success");
        addToCartBtn.innerText="Boka tjänst";

        cardBody.appendChild(addToCartBtn);

        serviceList.appendChild(card);
    }
}

// for (let index = 0; index < addToCartBtn.length; index++) {
//     let button = addToCartBtn[index];
//     button.addEventListener("click", function(event){
//         addItemToCart.call();
//     })
// }

function addRemoveBtn()
{
    for (let index = 0; index < removeItemFromCartBtn.length; index++) {
        let button = removeItemFromCartBtn[index];
        button.addEventListener("click", function(event){
            let buttonClicked = event.target
            console.log("Remove loop");
            console.log(buttonClicked);
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
    
    addRemoveBtn.call();
}

const book = {
  Title: "Titel",
  Author: "Författare",
  Year: 1990,
};


