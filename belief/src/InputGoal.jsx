import React, { useState } from 'react';
import axios from 'axios';

const GoalInput = () => {
  const [goal, setGoal] = useState('');
  const [prior, setPrior] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      goal,
      prior,
    };
    
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/belief?`;
    console.log()
    const responser = await axios.post(
      airtableURL,
      { fields },
      { headers: {
        'Authorization': 'Bearer keyTx1dmddCTBSnvZ',
        'Content-Type': 'application/json',
      }}
      );
    console.log(responser);
  }

  // (label+input)*3 with emmet
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="goal">Goal:</label>
      <input
        name="goal"
        type="text"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      />
      {/* {/* <label htmlFor="text">Text:</label>
      <textarea
        name="text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      /> */}
      <br/>
      <label htmlFor="priority">Priority:</label>
      <input
        name="priority"
        type="text"
        value={prior}
        onChange={(event) => setPrior(event.target.value)}
      /> 
      <button type="submit">let'sgo</button>
    </form>
  )
}

export default GoalInput;