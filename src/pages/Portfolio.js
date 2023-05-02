import React from 'react';
import Project from '.././components/Project'
import { projectList } from '../helpers/ProjectList';

export default function Portfolio() {
  return (
    <div>
      <h2>My Projects</h2>
      {projectList.map(project => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  )
}
