import React from "react";
import { ProjectIndexItemContainer } from "./project_index_item_container";

export class ProjectIndex extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.homespaceId !== prevProps.homespaceId) {
      this.props.fetchWorkspace(this.props.homespaceId);
    }
  }

  render() {
    const projectIndexItems = this.props.projects.map((project) => (
      <li key={project.id}>
        <ProjectIndexItemContainer project={project} />
      </li>
    ));
    const newProject = { name: "", description: "", new: true };
    return (
      <div className="project-index">
        <ul className="project-index-items">
          <ProjectIndexItemContainer project={newProject} />
          {projectIndexItems}
        </ul>
      </div>
    );
  }
}
