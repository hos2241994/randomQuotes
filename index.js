const quoteBtn = document.getElementById("quote");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteArr = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
];

let quoteIndex = 0;
function generateRandomIndex(arr) {
  let newQuoteIndex = Math.floor(Math.random() * arr.length);

  while (newQuoteIndex === quoteIndex) {
    newQuoteIndex = Math.floor(Math.random() * arr.length);
  }

  quoteIndex = newQuoteIndex;

  return newQuoteIndex;
}

function newQuote() {
  const newQuoteIndex = generateRandomIndex(quoteArr);

  quoteText.innerHTML = quoteArr[newQuoteIndex].quote;
  quoteAuthor.innerHTML = quoteArr[newQuoteIndex].author;
}
