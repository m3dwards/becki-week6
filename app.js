console.log("It's Kanye time...");

document.getElementById("new-quote-button").addEventListener("click", getQuote);

getQuote();

let quoteHistory = [];

async function getQuote() {
  const response = await fetch("https://api.kanye.rest/");
  const json = await response.json();
  const quote = json.quote;

  document.getElementById("kanye-quote").innerText = quote;

  if (!quoteHistory.includes(quote)) {
    quoteHistory.push(quote);

    if (quoteHistory.length > 1) {
      const li = document.createElement("li");
      li.innerText = quoteHistory.slice(-2)[0];
      document.getElementById("kanye-quote-history").appendChild(li);
    }
  }
}
