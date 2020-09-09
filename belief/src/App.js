import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Quote from './Components/Quote';
import Logo from './Components/Logo';
import InputGoal from './Components/InputGoal';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path="/">
          <Logo />
          <Quote />
          <Sidebar />
        </Route>
        <Route path="/goal">
          <InputGoal />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
