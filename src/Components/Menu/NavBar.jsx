import React from 'react'
import '../Menu/NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { CartWidget } from '../Cart/CartWidget'

export function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Thunder Gamer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Ofertas</Nav.Link>
              <NavDropdown title="Equipos y Accesorios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pc Gamer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Notebooks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Monitores</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartWidget />

    </>
  )
}
