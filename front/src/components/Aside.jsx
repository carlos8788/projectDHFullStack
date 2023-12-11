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
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
                <NavDropdown title="Products" id="offcanvasNavbarDropdown">
                  <Link to="/products/all" className='text-decoration-none ms-3 d-block'>
                    All Products
                  </Link>

                  <LinkContainer to="/products/create">
                    <NavDropdown.Item>Create Product</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="Users" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Carts" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
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
