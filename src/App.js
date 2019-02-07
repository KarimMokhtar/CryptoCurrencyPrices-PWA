import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Today from './Today/Today'; 
import Past from './Past/Past';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topheader">
            <header className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <span className="navbar-item">Cryptocurency Prices</span>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item" href="#" target="_blank" rel="noopener noreferrer">Cryptoprice.com</a>
                    </div>
                </nav>
            </header>
        </div>
         <section className="results--section">
            <div className="container">
                <h1>CryptoPrice is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
            </div>
            <div className="results--section__inner">
                <Today />
                <Past /> 
            </div>
        </section>
        
      </div>
    );
  }
}

export default App;
