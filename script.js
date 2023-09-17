// button
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterbtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const facebookbtn = document.getElementById('facebook');
const instagrambtn = document.getElementById('instagram');
const linkedinbtn = document.getElementById('linkedin');
const githubbtn = document.getElementById('github');

let apiQuotes = [];

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// Hide loading
function complete() {
  quoteContainer.hidden = false; 
  loader.hidden = true;
}
// Show New Quote
function newQuote() {
  // Random quote from apiQuote array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check if Author is blank and replace it with unknown
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote lenght to determine the styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else { 
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();
}

//API Quote
async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();     
        newQuote();
    } catch (error) {
        // Catch Error 
    }
  }

// Quote Tweet
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}
// Connect links
function facebookken() {
  const facebookUrl = `https://www.facebook.com/fghjkenl/`;
  window.open(facebookUrl);
}
function instagramken() {
  const instagramUrl = `https://www.instagram.com/colorless.knt`;
  window.open(instagramUrl);
}
function linkedinken() {
  const linkedinUrl = `https://www.linkedin.com/in/ktsanchez/`;
  window.open(linkedinUrl);
}
function githubken() {
  const githubUrl = `https://github.com/imjavahater`;
  window.open(githubUrl);
}

// Event Listeners
newQuotebtn.addEventListener('click', newQuote);
twitterbtn.addEventListener('click', tweetQuote);
facebookbtn.addEventListener('click', facebookken);
instagrambtn.addEventListener('click', instagramken);
linkedinbtn.addEventListener('click', linkedinken);
githubbtn.addEventListener('click', githubken);

// Load
getQuotes();

