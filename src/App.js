import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      change: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      change: event.target.value
    });
  }

  handleClick(event){
        event.preventDefault();

        fetch("https://www.googleapis.com/books/v1/volumes?q="+this.state.change+"")
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
          },
          (error) => {
          }
        )
  }

  componentDidMount(){
    this.ItemList({});
  }

  // shouldComponentUpdate(nextProps, nextState) {
    
  //   console.log('Should I update?');
  //    const differentItem = this.state.items !== nextState.items;
  //    console.log(this.state.items);
  //    console.log(nextState);
  //    if (this.state === nextState){
  //     this.ItemList(nextState);
  //    }
  //   return true;
  // }

  ItemList(items)
  {
    // console.log("Vitamin");
    // console.log(items);

    // if (Object.getOwnPropertyNames(items).length === 0)
    // {
    //     console.log("Vitaminaaa");
    // }
    // else
    // {
    // const search = items.change;

    //       fetch("https://www.googleapis.com/books/v1/volumes?q="+search+"")
    //       .then(res => {
    //           if (res.ok)
    //           {
    //             return res.json();
    //           } else {
    //             throw Error(res.statusText);
    //           }
    //       })
    //       .then(
    //         (json) => {
    //             this.setState({
    //               items: json.items,
    //               isLoaded: true
    //             })
    //         },
    //         (error) => {
    //         }
    //       )

    // }
  }

  render() {

    return (
      <div>
          <div className="App">
                <div  className="animation">
                        <h1>BOOK FINDER</h1>
                </div>
                  <input id="bookSearch" className="search-book" type="search" onChange={this.handleChange} placeholder="Type your book here" />
                  <input className="search-button" type="button" value="SEARCH" onClick={this.handleClick}/>
          </div>
          
          <div>
              {this.state.items.map((item, key) => {

                let image = "";
                if (item.volumeInfo.imageLinks === undefined)  
                {
                }
                else{
                  image = item.volumeInfo.imageLinks.thumbnail;
                }

                   return (
                   <div className="card">
                      <div className="book-image"><img alt="" src={image}/> </div>
                       
                        <div className="book-description"> 
                          <div className="book-title"><h4>{ item.volumeInfo.title }</h4></div>
                          <div className="book-author">{ item.volumeInfo.authors } </div>
                          <div className="book-publisher">{ item.volumeInfo.publisher } </div>

                          <div className="see-more-button"><button className="see-more">See this book</button></div>
                        </div>
                   </div>
                   )
              } )}
          </div>

      </div>
    );
  }
}

export default App;
