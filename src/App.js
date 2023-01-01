import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Gallary from "./components/gallary";
import Contact from "./components/Contact";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import FoundationIcon from "@mui/icons-material/Foundation";
import React from "react";
import "./components/app.css";

function App() {
  //document.body.style.backgroundImage = "url('./media/background.jpeg')";
  return (
    <div className="main-outer-div">
      <BrowserRouter>
        <div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
              <Navbar.Brand href={"/"}>
                {<FoundationIcon />}HSS Construction
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse
                id="navbarScroll"
                className="collapse navbar-collapse"
              >
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
                    Gallery
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallary" element={<Gallary />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
