import React, { useState } from 'react';
import axios from 'axios';

// import Logo from "./Logo"
import Quote from './Quote'
import Sidebar from './Sidebar'

const GoalInput = (props) => {
  const [goal, setGoal] = useState('');
  const [prior, setPrior] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      goal,
      prior,
    };
    
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/data?`;
    
    await axios.post(
      airtableURL,
      { fields },
      { headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,       
         'Content-Type': 'application/json',
      }}
      );
     props.setFetchGoal(!props.fetchGoal)
  }

  
  return (
    <>
    {/* <Logo /> */}
      <Quote quotes={props.quotes} activeQuote={props.activeQuote} />
      {/* <Sidebar /> */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="goal" className="inputLabel">Goal</label>
      <input className="inputSubmit"
        name="goal"
        type="text"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      />
      <br/>
      <label htmlFor="priority" className="inputLabel">Priority</label>
      <input className="inputSubmit"
        name="priority"
        type="text"
        value={prior}
        onChange={(event) => setPrior(event.target.value)}
        /> 
        <br/>
      <button className="inputButton" type="submit">let'sgo</button>
      </form>
      </>
  )
}

export default GoalInput;