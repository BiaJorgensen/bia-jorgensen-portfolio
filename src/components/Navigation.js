import React from 'react'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink'

export default function Navigation() {
  return (
    <Nav className="ms-auto">
      <NavLink as={Link} to="/">About me</NavLink>
      <NavLink as={Link} to="/portfolio">Portfolio</NavLink>
      <NavLink as={Link} to="/contact">Contact</NavLink>
      <NavLink as={Link} to="/resume">Resume</NavLink>
    </Nav>
  )
}
