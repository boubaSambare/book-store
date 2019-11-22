import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import MyBadge from "./MyBadge";

class SingleBook extends Component {
    state = {
        comments:undefined
    }
  render() {
    let { singleBook, back } = this.props;
    return (
      <>
        <Row className="my-4">
          <Col className="col-md-6 mb-5">
            <Card>
              <CardImg
                top
                width="100%"
                src={singleBook.img}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle><strong>Code:</strong> {singleBook.asin}</CardTitle>
                <CardSubtitle><MyBadge title="Price" text={singleBook.price+"$"}></MyBadge></CardSubtitle>
                <CardText>
                 { singleBook.title}
                </CardText>
                <Button onClick={() => back(undefined)}>Back</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-md-6">
            
          </Col>
        </Row>
      </>
    );
  }
}

export default SingleBook;
