import React from 'react';
import { ProjectIndexItem } from './project_index_item';

export class ProjectIndex extends React.Component {

  render() {
    const projectIndexItems = this.props.projects.map((project) => <li key={project.id}> <ProjectIndexItem project={project} /></li>)
    const newProject = { name: "", description: "" }
    return (
      <div className="project-index">
        <div className="project-index-header">
          <h3>Projects</h3>
        </div>
        <ul className="project-index-items">
          <ProjectIndexItem project={newProject} createProject={true} />
          {projectIndexItems}
        </ul>
      </div >
    );
  }
}