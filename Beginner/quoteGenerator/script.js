let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";
async function generateQuote(params) {
  try {
    /*  const response = await fetch("https://api.quotable.io/random");*/
    const response = await fetch("https://dummyjson.com/quotes/random");
    //convert response to JSON
    const data = await response.json();
    //display data on UI
    quote.innerHTML = `"${data.quote}"`;
    author.innerHTML = `- ${data.author}`;
  } catch (error) {
    quote.innerHTML = "Failed to load quote.Try again:)";
    author.innerHTML = "- nbhh";
  }
}
