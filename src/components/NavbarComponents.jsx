import { Navbar, Container, Nav, Button, Col, Form, Row} from "react-bootstrap";

import {navLinks} from '../data/index'
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
  return (
    <div>
    <Navbar expand="lg" className="Main-Navbar">
      <Container>

        <Navbar.Brand href="/">
            <img
              src="./src/assets/develo-logo.svg"
              width="Auto"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </div>
              )
            })}
          </Nav>

        <Form>
        <Row>
          <Col xs="auto">
            <Button type="submit">Let's Talk</Button>
          </Col>
        </Row>
        </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponents