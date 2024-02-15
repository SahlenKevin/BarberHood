 
 const API = document.getElementById("API");
 
 async function fetchRandomQuote() {

    const apiUrl = 'https://www.tronalddump.io/random/quote';
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result.value;
}

async function fetchAndSetRandomQuote() {

    const quote = await fetchRandomQuote();
    API.innerText = quote;
}

fetchAndSetRandomQuote();