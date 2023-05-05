import React from 'react'
import { BsGithub } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import '../styles/Project.css'

export default function Project({ title, image, deployedApp, githubRepo}) {
  return (
    <Card>
      <Card.Img src={image} alt={title} className="image"/>
      <div className="links">
        <Card.Link target="_blank" rel="noopener noreferrer" className="link" href={deployedApp}>{title} Website </Card.Link>
        <Card.Link target="_blank" rel="noopener noreferrer" className="link" href={githubRepo}><BsGithub size={60} /></Card.Link>
      </div>
    </Card>
  )
}
