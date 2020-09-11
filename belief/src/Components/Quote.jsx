import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";



function QuoteDisplay({ quotes, activeQuote }) {
  


  return (
    <div className="app">
      {quotes &&
        <div className="quotes-container">
          <h3>{quotes[activeQuote].text}</h3>
          <h5>{quotes[activeQuote].author}</h5>
          {/* <button onClick={(e) => randomQuote(e, quotes)}>Random Quotes</button> */}
      
        </div>
      }
    </div>
  );
}
export default QuoteDisplay;