import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adentan Weather App</h1>
      </header>
      <main>
        {/* add weather fetching component */}
      </main>
      <br></br>
      <Login/>

       
      <footer>
        Page created by Collins Owusu Bempah
      </footer>
    </div>
  );
}

export default App;
