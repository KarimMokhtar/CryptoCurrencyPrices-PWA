import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Today from './Today/Today'; 
import Past from './Past/Past';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to Cryptocurrency website
        </header>
        <Today />
        <Past /> 
      </div>
    );
  }
}

export default App;
