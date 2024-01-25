import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import "../styles/NavBarComponent.css";

const NavbarComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar-container"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink
                to="/glowna-strona"
                className="nav-link"
                activeClassName="active"
              >
                Główna Strona
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/o-nas"
                className="nav-link"
                activeClassName="active"
              >
                Coś O Nas
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/druzyna"
                className="nav-link"
                activeClassName="active"
              >
                Nasza Drużyna
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/kalendarz"
                className="nav-link"
                activeClassName="active"
              >
                Kalendarz
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/galeria"
                className="nav-link"
                activeClassName="active"
              >
                Galeria
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/dokumenty"
                className="nav-link"
                activeClassName="active"
              >
                Dokumenty
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/kph" className="nav-link" activeClassName="active">
                KPH
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/linki"
                className="nav-link"
                activeClassName="active"
              >
                Linki
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/kontakty"
                className="nav-link"
                activeClassName="active"
              >
                Kontakty
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
