import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/">About me</Link> </li>
            <li><Link to="/portfolio">Portfolio</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
            <li><Link to="/resume">Resume</Link> </li>
        </ul>
    </nav>
  )
}
