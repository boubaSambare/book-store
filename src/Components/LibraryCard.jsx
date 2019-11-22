import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import MyBadge from "./MyBadge";

class LibraryCard extends Component {
  render() {
      const {title, category,  price, image,showBook,book} = this.props
    return (
      <div>
        <Card onClick={() => showBook(book)}>
          <CardImg
            top
            width="100%"
            src={image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{title.substring(0,14)}</CardTitle>
            <CardSubtitle>{category}</CardSubtitle>
            <CardText>
            </CardText>
            <CardText>
                <strong>PRICE: {price+"$"}</strong><MyBadge title="BLACK FRIDAY" text="SALE 10%"></MyBadge>
            </CardText>
            <Button>BUY NOW</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LibraryCard;
