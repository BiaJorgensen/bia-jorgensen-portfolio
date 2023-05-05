import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/BiaJorgensen"><BsGithub className="icon me-3" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/beatriz-bia-jorgensen-840a41182/"><BsLinkedin className="icon me-3" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BiaJorgensen"><BsTwitter className="icon" /></a>   
    </footer>
  )
}