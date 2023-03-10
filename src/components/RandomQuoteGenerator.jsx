import React, { useState } from "react";
import "../styles/Random.css";

const RandomQuoteGenerator = () => {
  const quotes = [
    {
      text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
      author: "Gandhi",
    },
    {
      text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
      author: "Steve Jobs",
    },
    {
      text: "La vie est soit une aventure audacieuse, soit rien du tout.",
      author: "Helen Keller",
    },
    {
      text: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "Ne laissez jamais les ombres d'hier obscurcir la lumière de demain.",
      author: "Anony",
    },
  ];
  const [quote, setQuote] = useState(quotes[0]);
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const colors = [
    "#87CEEB",
    "#FFDAB9",
    "#ADD8E6",
    "#FFE5B4",
    "#F0E68C",
    "#98FB98",
    "#FFC0CB",
    "#E0FFFF",
    "#F5DEB3",
    "#DB7093",
    "#B0E0E6",
    "#FFB6C1",
    "#FFA07A",
    "#BA55D3",
    "#E6E6FA",
    "#FFE4E1",
    "#7FFFD4",
    "#F0F8FF",
    "#AFEEEE",
  ];
  const [color, setColor] = useState(colors[0]);

  const getRandomColor = () => {
    const randomIndexColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndexColor]);
  };

  const style = {
    color: color,
  };

  const handleTweet = () => {
    const quoteText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div id="background">
      <div id="quote-box" style={style}>
        <blockquote>
          <h2 id="text">{quote.text}</h2>
          <p id="author">- {quote.author}</p>
        </blockquote>
        <button
          id="new-quote"
          style={style}
          onClick={() => {
            getRandomQuote();
            getRandomColor();
          }}
        >
          New Quote
        </button>
        <a
          href="twitter.com/intent/tweet"
          id="tweet-quote"
          onClick={handleTweet}
        >
          TWEET IT!
        </a>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
