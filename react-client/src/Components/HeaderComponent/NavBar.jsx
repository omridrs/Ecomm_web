import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/about">
              About
            </NavItem>
            <NavItem eventKey={2} href="/contactUs">
              Contact Us
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown (if necessary)" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
    )
  }
}

export default NavBar;
