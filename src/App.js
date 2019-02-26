import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <div  className="animation">
                    <h1>BOOK FINDER</h1>
            </div>
            
            <input className="search-book" type="search" placeholder="Type your book here"/>
            <input className="search-button" type="button" value="SEARCH"/>
      </div>
    );
  }
}

export default App;
