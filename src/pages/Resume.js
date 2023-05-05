import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../assets/bia-jorgensen-cv.pdf';
import { frontEndList } from '../helpers/FrontEndList';
import { backEndList } from '../helpers/BackEndList';

export default function Resume() {
  return (
    <div>
      <h2 className="my-3">Resume</h2>
      <h3>Download my <Link to={CV} target="_blank" download>resume</Link></h3>
      <h4>Front-End Proficiencies</h4>
      <ul>
        {/* Mapping though list to populate all items in the array without repeating <li> */}
        {frontEndList.map(item => (
           <li key={item}>{item}</li> 
        ))}
      </ul>
      <h4>Back-End Proficiencies</h4>
      <ul>
        {/* Mapping though list to populate all items in the array without repeating <li> */}
        {backEndList.map(item => (
           <li key={item}>{item}</li> 
        ))}
      </ul>
    </div>
  )
}
