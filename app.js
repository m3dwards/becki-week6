console.log("It's Kanye time...");

document.getElementById("new-quote-button").addEventListener("click", getQuote);

getQuote();

let quoteHistory = [];
let quotePipe = [];

async function getQuote() {
  const response = await fetch("https://api.kanye.rest/");
  const json = await response.json();
  const quote = json.quote;

  document.getElementById("kanye-quote").innerText = quote;

  const historyOL = document.getElementById("kanye-quote-history");

  if (!quoteHistory.includes(quote)) {
    quoteHistory.push(quote);
    quotePipe.push(quote);
    if (quotePipe.length === 1) {
      //don't show quote and history at the same time
      return;
    }
  }
  if (quotePipe.length > 0) {
    const li = document.createElement("li");
    li.innerText = quotePipe.shift();
    historyOL.appendChild(li);
  }
}
