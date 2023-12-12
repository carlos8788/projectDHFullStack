import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Offcanvas, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Aside() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Container fluid>
        <Nav.Link onClick={handleShow} aria-controls="offcanvasNavbar">Dashboard</Nav.Link>
        <aside>
          <Offcanvas show={show} onHide={handleClose} placement="start" id="offcanvasNavbar">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Dashboard</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown title="Products" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/products/all">All Products</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Users" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/users/all">All Users</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Carts" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/carts/all">All Carts</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </aside>
      </Container>
    </Navbar>
  );
}

export default Aside;
