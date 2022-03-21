import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ borderRadius: "10px" }}>
        <Container fluid>
          <Navbar.Brand href="/">Notes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success">Search</Button>
              </Form>
              <Nav.Link href="/">MyNotes</Nav.Link>
              <NavDropdown title="MyProfile" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">User</NavDropdown.Item>
                <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
