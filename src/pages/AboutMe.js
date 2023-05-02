import React from 'react'
import Bia from '../assets/images/bia-jorgensen.JPG'

export default function AboutMe() {
  return (
    <div>
      <h2>About me</h2>
      <img src={Bia} alt='Bia Jorgensen'></img>
      <p>Short bio about me</p>
    </div>
  )
}
