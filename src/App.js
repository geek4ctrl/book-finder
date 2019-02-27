import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=robert kiyosaki&key=AIzaSyAcSMLOh0LMkos8jk-64mDRfcNOCLuj8fk")
      .then(res => res.json())
      .then(
        (result) => {
              for (let i = 0; i < 10; i++)
              {
                this.state.items.push({
                  title: result.items[i].volumeInfo.title,
                  authors: result.items[i].volumeInfo.authors,
                  publisher: result.items[i].volumeInfo.publisher
                })
              }
        },
        (error) => {
              //console.log(error);
        }
      )
  }

  render() {

    //console.log("Testing");
    //console.log(this.state.items[0].volumeInfo);

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
