import React from 'react'
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import '../styles/Navigation.css'

export default function Navigation() {
  return (
    <Nav className="ms-auto">
      <NavLink to="/" tabIndex="0" className={({ isActive }) => {
        return (isActive ? 'active' : 'not-active')
      }}>About me</NavLink>
      <NavLink to="/portfolio" tabIndex="0" className={({ isActive }) => {
        return (isActive ? 'active' : 'not-active')
      }}>Portfolio</NavLink>
      <NavLink to="/contact" tabIndex="0" className={({ isActive }) => {
        return (isActive ? 'active' : 'not-active')
      }}>Contact</NavLink>
      <NavLink to="/resume" tabIndex="0" className={({ isActive }) => {
        return (isActive ? 'active' : 'not-active')
      }}>Resume</NavLink>
    </Nav>
  )
}