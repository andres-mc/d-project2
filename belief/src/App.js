import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Quote from './Components/Quote';
import Logo from './Components/Logo';
import InputGoal from './Components/InputGoal';
import Sidebar from './Components/Sidebar';
import DisplayGoals from './Components/DisplayGoals';
import axios from 'axios'

function App() {

 const [goals, setGoals] = useState('');

  useEffect(() => {
    const getGoals = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/data?Grid%20View`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setGoals(response.data.fields);
    }
    getGoals();
  }, []);

  return (
    <div className="App">
      <div>
        {
          goals.map((goals) => (
            <DisplayGoals goals={goals} key={goals.goal} />
          ))
        }
      </div>
      <Switch>
        <Route exact path="/">
          <Logo />
          <Quote />
          <Sidebar />
          <InputGoal />
        </Route>
        <Route path="/goal">
          <InputGoal />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
