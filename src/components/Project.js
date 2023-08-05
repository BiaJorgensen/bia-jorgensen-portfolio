import React from 'react'
import { BsGithub } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import '../styles/Project.css'

export default function Project({ title, image, deployedApp, githubRepo, summary, technologies}) {
  return (
    <Card>
      <Card.Body>
        <Card.Img src={image} alt={title} className="image"/>
        <div className='info'>
          <Card.Text>{summary}</Card.Text>
          <Card.Text>Technologies: {technologies}</Card.Text>
          </div>
          <div className="links">
            <Card.Link target="_blank" rel="noopener noreferrer" className="link" href={deployedApp}>Website</Card.Link>
            <Card.Link target="_blank" rel="noopener noreferrer" className="link" href={githubRepo}><BsGithub size={20} /></Card.Link>
          </div>
      </Card.Body>
    </Card>
  )
}
