import React from 'react';
import './App.css';
import { useData } from './Components/Hooks/useData';
import { Display } from './Components/Display';

function App() {
  const [data] = useData();
  return (
    <div className="App">
      <h1>Women Soccer Players</h1>
      <Display data={ data }/>
    </div>
  );
}

export default App;
