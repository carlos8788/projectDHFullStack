import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import img from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <div className="d-flex justify-content-around w-100 align-items-center">

            <Link to="/">
              <img
                src={img}
                alt="Logo"
                width={70}
              />
            </Link>

            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="http://localhost:3000">Ir a la app</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

