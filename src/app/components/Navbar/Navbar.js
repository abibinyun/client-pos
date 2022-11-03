import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <div className="">
        <Navbar bg="light" expand="lg" className="mb-3">
          <Container>
            <Navbar.Brand>
              <Link to="/" style={{ textDecoration: "none" }}>
                MERN POS
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>MERN POS</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/profile" className="btn btn-primary mb-2 my-2 mx-2">
                    Profile
                  </Link>
                  <Link to="/" className="btn btn-primary mb-2 ml-2 my-2 mx-2">
                    Home
                  </Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control type="text" className="me-2" aria-label="Search" placeholder="Masukan kata kunci..." />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
