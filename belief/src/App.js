import React from 'react';
import './App.css';
import Quote from './Quote';
import Logo from './Logo';
import InputGoal from './InputGoal';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Logo />
      <Quote />
      <InputGoal />
      <Sidebar />
    </div>
  );
}

export default App;
