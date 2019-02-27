import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    
    this.state = {
      author: "",
      title: "",
      publishingCompany: "",
      picture: ""
    }
  }



  render() {
    return (
      <div className="App">
            <div  className="animation">
                    <h1>BOOK FINDER</h1>
            </div>
            
            <input className="search-book" type="search" placeholder="Type your book here"/>
            <input className="search-button" type="button" value="SEARCH"/>

           {/* Creating the book element*/}

          <div> {/* This will be used to separate cards in twos */}
              <div className="card">
                  <div className="book-image">Image</div>
                  <div className="book-description">
                      <div className="book-title">Harry Potter and the Cursed Child - Parts One and Two (Special Rehearsal Edition) </div>
                      <div className="book-author">By: No authors found</div>
                      <div className="book-publisher">Published By: Pottermore Publishing</div>

                      <div className="see-more-button"><button className="see-more">See this book</button></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
