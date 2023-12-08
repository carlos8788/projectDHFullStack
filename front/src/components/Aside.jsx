import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Container } from 'react-bootstrap';

function Aside() {
  const [show, setShow] = useState(true);

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
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex mt-3">
                <FormControl type="search" placeholder="Search" className="me-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        </aside>
      </Container>
    </Navbar>
  );
}

export default Aside;
