import React from 'react'

export default function Project({ title, image, deployedApp, githubRepo}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div>
        <a href={deployedApp}>Deployed App</a>
        <a href={githubRepo}>GitHub Repo</a>
      </div>
    </div>
  )
}
