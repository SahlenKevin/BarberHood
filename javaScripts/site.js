const shoppingCart = document.getElementById("shoppingCart");
const addToCartBtn = document.getElementsByClassName("btn-success");
const serviceList = document.getElementsByClassName("service-list")[0];
const payBtn = document.getElementById("pay-btn");

let totalPrice = 0;

payBtn.addEventListener("click", ()=>{
    
        while (shoppingCart.firstChild) {
            shoppingCart.removeChild(shoppingCart.firstChild);
        }

        totalPrice = 0;
        updateTotalPrice();
})


const services = [
    {
        id: "0",
        img: "../images/barber.WebP",
        Title: "Skägg",
        Description: "Skäggvård i världsklass",
        Price: 199
    },
    {
        id: "1",
        img: "../images/beardthree.WebP",
        Title: "Skägg++",
        Description: "Skäggvård i världsklass + styling",
        Price: 299
    },
    {
        id: "2",
        img: "../images/beardandhair.WebP",
        Title: "Total",
        Description: "Skäggvård i världsklass + styling + Hårvård i världsklass!",
        Price: 399
    }
]


displayServices();

function displayServices()
{
    for (const service of services) {
        //#region Card
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src=service.img;
        img.setAttribute("loading","lazy");
        img.alt="Pic of beard"
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");
        card.appendChild(cardBody);
        
        const title = document.createElement("h5");
        title.classList.add("card-title","text-center");
        title.innerText=service.Title;
        cardBody.appendChild(title);

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.innerText="Pris: " + service.Price +":-";
        cardBody.appendChild(price);
        
        const addToCartBtn = document.createElement("btn");
        addToCartBtn.classList.add("btn","btn-success");
        addToCartBtn.innerText="Boka tjänst";
        cardBody.appendChild(addToCartBtn);
        
        const openModalBtn = document.createElement("btn");
        openModalBtn.setAttribute("type", "btn");
        openModalBtn.innerText = "Info";
        openModalBtn.classList.add("btn", "btn-primary");
        openModalBtn.setAttribute("data-bs-toggle", "modal");
        openModalBtn.setAttribute("data-bs-target", `#modal`);
        openModalBtn.addEventListener("click", function() {
            const mhm = document.getElementById("infoDiv");
            mhm.innerText=service.Description;
        });
        cardBody.appendChild(openModalBtn);

        addToCartBtn.addEventListener("click", function() {
            addServiceToCart(service);
        });
        //#endregion

        serviceList.appendChild(card);
    }
    updateTotalPrice();
}


function addServiceToCart(service) {
    const addCartItem = document.createElement("li");
    addCartItem.classList.add("list-group-item");

    const serviceInfo= document.createElement("p");
    serviceInfo.innerText=service.Title;
    addCartItem.appendChild(serviceInfo);

    const priceInfo= document.createElement("p");
    priceInfo.innerText=`Pris: ${service.Price}:-`;
    addCartItem.appendChild(priceInfo);

    const removeButton = document.createElement("btn");
    removeButton.classList.add("btn", "btn-danger")
    removeButton.innerText="Ta bort tjänst";
    removeButton.addEventListener("click", function (){
        removeServiceFromCart(addCartItem, service.Price);
    })
    addCartItem.appendChild(removeButton);
    
    addCartItem.classList.add("list-group-item");
    shoppingCart.appendChild(addCartItem);
    totalPrice+=service.Price;

    updateTotalPrice();
}

function updateTotalPrice(){
    const displayTotalPrice = document.getElementById("totalPrice");
    displayTotalPrice.innerText=`Totalt: ${totalPrice}:-`; 
}

function removeServiceFromCart(CartItem, price) {
    totalPrice-=price
    updateTotalPrice();
    CartItem.remove();
}


