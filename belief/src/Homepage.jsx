import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


function HomePage() {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    const getQuote = async () => {
      const apiUrl = "https://type.fit/api/quotes";
      const response = await axios.get(apiUrl);
      setQuotes(response.data);
    };
    getQuote();
  }, []);

  const randomQuote = () => {
    const random = Math.floor(Math.random() * 10);
    setQuotes(random);
  };

  return (
    <div className="app">
      <h1>Quotes</h1>
      <h3>{setQuotes[quotes].text}</h3>
      <button onClick={() => randomQuote()}>Random Quotes</button>
    </div>
  );
}
export default HomePage;