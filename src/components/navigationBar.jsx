import React, { Component } from "react";
import logo from "../img/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/navigationBar.css";

class NavigationBar extends Component {
  searchStyle = {
    border: "none",
    borderRadius: "20px",
    width: "20em",
    height: "2em",
    backgroundColor: "#00ffc5",
    padding: "15px",
    color: "black",
  };
  render() {
    let url = {
      logo: "#",
    };

    return (
      <Navbar style={{ padding: "1em 5em" }} expand="lg">
        <Container fluid>
          <Navbar.Brand href={url.logo}>
            <img src={logo} alt="logo" style={{ height: "32px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto bg my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{ color: "#fff2fb" }} href={url.logo}>
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#fff2fb" }} href={url.logo}>
                Movies
              </Nav.Link>
              <Nav.Link style={{ color: "#fff2fb" }} href={url.logo}>
                Show
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={this.searchStyle}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
