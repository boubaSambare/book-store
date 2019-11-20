import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";
import LibraryCard from './LibraryCard'

class LastRelease extends Component {
  render() {
    return (
      <>
        <h3 className="text-center">Fantasy</h3>
        <Row className="my-1">
          {Fantasy.map((book, i) => (
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
        <h3 className="text-center">History</h3>
        <Row>
          {History.map((book, i) => (
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
        <h3 className="text-center">Horror</h3>
        <Row>
          {Horror.map((book, i) => (
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
        <h3 className="text-center">Romance</h3>
        <Row>
          {Romance.map((book, i) => (
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
        <h3 className="text-center">Scifi</h3>
        <Row>
          {Scifi.map((book, i) => (
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
