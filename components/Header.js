import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">HSS Construction</Navbar.Brand>
          <Nav style={{ color: "white" }} className="me-auto">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About Us</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
