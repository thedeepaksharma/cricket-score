import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TabComponent from './components/TabComponent';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <NavBar />
        <TabComponent />
      </div>
    </div>
  );
}

export default App;
