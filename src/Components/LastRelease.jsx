import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";
import LibraryCard from './LibraryCard'
import SearchComponent from "./SearchComponent.jsx";
import SingleBook from "./SingleBook.jsx";

class LastRelease extends Component {
    state = {
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
  render() {
    let books = [...Fantasy,...History,...Horror,...Romance,...Scifi]
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
