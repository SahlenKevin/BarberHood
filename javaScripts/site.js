const shoppingCart = document.getElementById("shopping-cart-list");
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
    },
    {
        img: "../images/beardtwo.jpg",
        Title: "Skägg + hår",
        Description: "Skäggvård i världsklass + att vi fixar håret på toppen också!",
        Price: 399
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
        title.classList.add("card-title","text-center");
        title.innerText=service.Title;
        cardBody.appendChild(title);

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.innerText="Pris: " + service.Price +":-";
        cardBody.appendChild(price);
        
        const addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("btn","btn-success");
        addToCartBtn.innerText="Boka tjänst";

        cardBody.appendChild(addToCartBtn);

        const description = document.createElement("p");
        description.classList.add("card-text");
        description.innerText=service.Description;
        addToCartBtn.addEventListener("click", function () {
            addServiceToCart(service);
        });
        cardBody.appendChild(description);

        serviceList.appendChild(card);
    }
}

function addServiceToCart(service) {
    // Add the service object to the shopping cart
    const addCartItem = document.createElement("li");
    addCartItem.classList.add("list-group-item");

    const serviceInfo= document.createElement("p");
    serviceInfo.innerText=service.Title;
    addCartItem.appendChild(serviceInfo);

    const priceInfo= document.createElement("p");
    priceInfo.innerText=`Pris: ${service.Price}:-`;
    addCartItem.appendChild(priceInfo);
    // addCartItem.innerText = `Tjänst: ${service.Title}, Pris: ${service.Price}:-`;

    const removeButton = document.createElement("btn");
    removeButton.classList.add("btn", "btn-danger")
    removeButton.innerText="Ta bort tjänst";
    removeButton.addEventListener("click", function (){
        removeServiceFromCart(addCartItem);
    })
    addCartItem.appendChild(removeButton);
    
    addCartItem.classList.add("list-group-item");
    shoppingCart.appendChild(addCartItem);
}

function removeServiceFromCart(CartItem) {
    CartItem.remove();
}


const book = {
  Title: "Titel",
  Author: "Författare",
  Year: 1990,
};


