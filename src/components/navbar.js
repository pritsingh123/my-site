import React from "react";
import "./navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import About from "./About";
import Gallary from "./gallary";
import Contact from "./Contact";

const NavbarMenu = () => {
  return (
    <Router>
      <div>
        <Navbar
          bg="dark"
          variant={"dark"}
          expand="lg"
          style={{ backgroundColor: black }}
        >
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to={"/gallary"}>
                  Gallary
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/about" component={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallary />} />
        </Routes>
      </div>
    </Router>
  );
};
export default NavbarMenu;
