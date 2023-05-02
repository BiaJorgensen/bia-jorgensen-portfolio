import React from 'react'
import { BsGithub } from 'react-icons/bs';

export default function Project({ title, image, deployedApp, githubRepo}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div>
        <a href={deployedApp}>{title}</a>
        <a href={githubRepo}><BsGithub /></a>
      </div>
    </div>
  )
}
