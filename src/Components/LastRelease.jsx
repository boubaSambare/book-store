import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LibraryCard from "./LibraryCard";
import SearchComponent from "./SearchComponent.jsx";
import SingleBook from "./SingleBook.jsx";

class LastRelease extends Component {
  state = {
    books: []
  };

 

  render() {
    let { books } = this.state;
    console.log(books);
    return (
      <>
        <Row>
           {books.length > 0 &&  books.map((book, i) => (
            <Col className="col-md-4" key={i}>
              <LibraryCard
                book={book}
                category={book.category}
                image={book.img}
                price={book.price}
                title={book.title}
              />
            </Col>
          ))}
        </Row>
           
      </>
    );
      
  }

componentDidMount = async () => {
    let request = await fetch(
      "https://backend-bubba-book-store.herokuapp.com/books"
    );
    let reponse = await request.json();
    this.setState({
      books: [...reponse]
    });
  };

}
  

export default LastRelease;
