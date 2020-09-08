import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


function QuoteDisplay() {
  const [quotes, setQuotes] = useState();
  const [activeQuote, setActiveQuote] = useState(0);
  useEffect(() => {
    const getQuote = async () => {
      const apiUrl = "https://type.fit/api/quotes";
      const response = await axios.get(apiUrl);
      setQuotes(response.data);
    };
    getQuote();
  }, []);
  const randomQuote = (e, quotes) => {
    const len = quotes.length;
    setActiveQuote(Math.floor(Math.random() * len))
  };
  return (
    <div className="app">
      {quotes &&
        <div className="quotes-container">
          <h3>{quotes[activeQuote].text}</h3>
          <h5>{quotes[activeQuote].author}</h5>
          <button onClick={(e) => randomQuote(e, quotes)}>Random Quotes</button>
        </div>
      }
    </div>
  );
}
export default QuoteDisplay;