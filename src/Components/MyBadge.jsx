import React, { Component } from "react";
import { Badge } from "reactstrap";

class MyBadge extends Component {
  render() {
    let { color = "danger", text, title = "" } = this.props;
    return (
      <div>
        <h2>
          {title} <Badge color={color}>{text}</Badge>
        </h2>
      </div>
    );
  }
}

export default MyBadge;
