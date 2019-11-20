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

class LibraryCard extends Component {
  render() {
      const {title, category, description, price, image} = this.props
    return (
      <div>
        <Card>
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
              {description}
            </CardText>
            <CardText>
                <strong>PRICE: {price}</strong>
            </CardText>
            <Button>ADD</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LibraryCard;
