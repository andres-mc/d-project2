import React from "react";
import "../App.css";

function QuoteDisplay({ quotes, activeQuote }) {
  return (
    <div className="app">
      {quotes && (
        <div className="quotes-container">
          <h3>{quotes[activeQuote].text}</h3>
          <h5>{quotes[activeQuote].author}</h5>
        </div>
      )}
    </div>
  );
}
export default QuoteDisplay;
