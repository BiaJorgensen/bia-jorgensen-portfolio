import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';


export default function Footer() {
  return (
    <footer>
        <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/BiaJorgensen"><BsGithub /></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/beatriz-bia-jorgensen-840a41182/"><BsLinkedin /></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BiaJorgensen"><BsTwitter /></a></li> 
        </ul>
    </footer>
  )
}
