import React from 'react';
import Project from '.././components/Project'
import { projectList } from '../helpers/ProjectList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio() {
  return (
    <Container>
      <h2 className="mt-3 mb-5">Portfolio</h2>
      <Row xs={1} sm={2} md={3}>
      {projectList.map(project => (
        <Col key={project.title} className="mb-3 ">
        <Project  {...project} />
        </Col>
      ))}
      </Row>
    </Container>
  )
}
