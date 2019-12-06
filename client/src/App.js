import React from 'react';
import './App.css';
import { useData } from './Components/Hooks/useData';
import { Display } from './Components/Display';

//class App extends React.Component {

function App() {

// state = { 
 // data: []
//}
  const [data] = useData();
//render()
  return (
    <div className="App">
      <h1>Women Soccer Players</h1>
      <Display data={ data } /> 
      {/* Display data={this.state.data} */}
    </div>
  );
}

export default App;
