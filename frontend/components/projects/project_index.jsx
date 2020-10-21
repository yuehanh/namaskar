import React from 'react';
import { ProjectIndexItem } from './project_index_item';

export class ProjectIndex extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.homespaceId !== prevProps.homespaceId) {
      this.props.fetchWorkspace(this.props.homespaceId)
    }
  }

  render() {
    const projectIndexItems = this.props.projects.map(
      (project) => (
        <li key={project.id}>
          <ProjectIndexItem project={project} />
        </li>
      ))
    const newProject = { name: "", description: "", new: true }
    return (
      <div className="project-index">
        <div className="project-index-header">
          <h3>Projects</h3>
        </div>
        <ul className="project-index-items">
          <ProjectIndexItem project={newProject} />
          {projectIndexItems}
        </ul>
      </div >
    );
  }
}