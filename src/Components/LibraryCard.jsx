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
      const {title, category,  price, image,book} = this.props
    return (
      <div>
       {book && <Card >
          <CardImg
            top
            width="100%"
            src={image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{category}</CardSubtitle>
            <CardText>
            </CardText>
            <div>
                <strong>PRICE: {price+"$"}</strong><MyBadge title="BLACK FRIDAY" text="SALE 10%"></MyBadge>
            </div>
            <Button>BUY NOW</Button>
          </CardBody>
        </Card>}
      </div>
    );
  }
}

export default LibraryCard;
