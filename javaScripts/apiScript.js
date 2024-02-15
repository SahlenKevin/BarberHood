 
 const API = document.getElementById("API");
 
 async function fetchTrumpQuote() {

    const apiUrl = 'https://www.tronalddump.io/random/quote';
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result.value;
}

async function displayTrumpQuote() {

    const quote = await fetchTrumpQuote();
    API.innerText = quote;
}

displayTrumpQuote();