import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Ósma Londyńska Drużyna Harcerzy</h1>
        <small>im. Stefana Starzyńskiego</small>
      </header>
      <Navbar className = "navbar navbar-dark bg-dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
