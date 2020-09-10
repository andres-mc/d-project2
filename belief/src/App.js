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

 const [goal, setGoal] = useState([]);

  useEffect(() => {
    const getGoals = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/data?Grid%20View`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setGoal(response.data.records);
    }
    getGoals();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Logo />
          <Quote />
          <Sidebar />
          <InputGoal />
        </Route>
        {/* <Route path="/">
          <InputGoal />
        </Route> */}
        <Route path="/goals"><div>
          {
            goal && goal.map((goal) => (
              <DisplayGoals goal={goal} key={goal.id} />
            ))
          }
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
