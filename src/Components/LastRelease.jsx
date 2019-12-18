import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LibraryCard from './LibraryCard'
import SearchComponent from "./SearchComponent.jsx";
import SingleBook from "./SingleBook.jsx";

class LastRelease extends Component {
    state = {
      books:[],
      selectedBook:undefined,
      searchString:''
    }

    searchChange = (e) => {
      this.setState({
        searchString: e.target.value.toLowerCase()
      })
    }

    selectBook = (book) => {
      this.setState({
        selectedBook: book
      })
    }
    componentDidMount = async () => {
      let request = await fetch("https://backend-bubba-book-store.herokuapp.com/books")
      let reponse = await request.json()
      this.setState({
        books: reponse
      })
    }

  render() {
    let {books}  = this.state
    return (
      <>
        <SearchComponent onChange={this.searchChange} placeholder="search for a book" value={this.state.searchString} ></SearchComponent>
    {this.state.selectedBook && <SingleBook singleBook={this.state.selectedBook} back={this.selectBook}></SingleBook> }
      {!this.state.selectedBook &&  <Row className="my-1">
          {books
                .filter(element => element.title.toLowerCase().includes(this.state.searchString))
                .map((book, i) => (
                  <Col className="col-md-4" key={i}>
                    <LibraryCard 
                          showBook={this.selectBook}
                          book={book}
                          category={book.category}
                          image={book.img}
                          price={book.price}
                          title={book.title}/>
                  </Col>
                ))}
        </Row>
          }
      </>
    );
  }
}

export default LastRelease;
