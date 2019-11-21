import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";
import LibraryCard from './LibraryCard'
import SearchComponent from "./SearchComponent.jsx";

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
  render() {
    let books = [...Fantasy,...History,...Horror,...Romance,...Scifi]
    return (
      <>
        <SearchComponent onChange={this.searchChange} placeholder="search for a book" value={this.state.searchString}></SearchComponent>
        <Row className="my-1">
          {books.map((book, i) => (
            <Col className="col-md-4" key={i}>
              <LibraryCard 
                    category={book.category}
                    image={book.img}
                    description={book.title}
                    price={book.price}
                    title={book.title}/>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default LastRelease;
