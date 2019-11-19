import React, { Component } from "react";
import { Nav, NavItem, NavLink, NavbarBrand, Navbar } from "reactstrap";

class MyNav extends Component {
  render() {
    return (
      <Navbar color="dark">
          <NavbarBrand className="text-danger">LaFeltrinelli</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="text-white" href="#">
              
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="#">
              
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="#">
              Browse
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MyNav;
