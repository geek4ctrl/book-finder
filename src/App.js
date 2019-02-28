import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=robert kiyosaki&key=AIzaSyAcSMLOh0LMkos8jk-64mDRfcNOCLuj8fk")
      .then(res => {
          if (res.ok)
          {
            return res.json();
          } else {
            throw Error(res.statusText);
          }
      })
      .then(
        (json) => {
            this.setState({
              items: json.items,
              isLoaded: true
            })
            //console.log(json.items);
        },
        (error) => {
              //console.log(error);
        }
      )
  }

  render() {
    //console.log(this.state.items);
       const { isLoaded, items } = this.state;
      //console.log(items);
    return (
      <div>
          <div className="App">
                <div  className="animation">
                        <h1>BOOK FINDER</h1>
                </div>
                  <input className="search-book" type="search" placeholder="Type your book here"/>
                  <input className="search-button" type="button" value="SEARCH"/>
          </div>
          
          <div>
              {items.map(item => {

                let image = "";
                let dataClean = false;
                //console.log(item.volumeInfo.imageLinks.thumbnail);
                if (item.volumeInfo.imageLinks == undefined)    // Do something if it is undefined
                {
                  console.log("Hola");
                }
                else{
                  console.log(item.volumeInfo.imageLinks.thumbnail);
                  image = item.volumeInfo.imageLinks.thumbnail;
                  dataClean = true;         // If data is clean, display the image  //* Next -->
                }

                   return (
                   <div className="card">
                        <div className="book-image"><img src=""/> </div>

                        <div className="book-description"> 
                          <div className="book-title"><h4>{ item.volumeInfo.title }</h4></div>
                          <div className="book-author">{ item.volumeInfo.authors } </div>
                          <div className="book-publisher">{ item.volumeInfo.publisher } </div>

                          <div className="see-more-button"><button className="see-more">See this book</button></div>
                        </div>
                   </div>)
              } )}
          </div>
      </div>
    );
  }
}

export default App;
