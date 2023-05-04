import React from 'react';
import { Link } from "react-router-dom";
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css'

export default function Header() {
  return (
    <Navbar className="header" collapseOnSelect expand="lg" variant="dark">
      <Container>
        {/* Makes 'Bia Jorgensen' clickable and goes back to main page */}
        <Navbar.Brand as={Link} to="/">Bia Jorgensen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Component Navigation */}
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
