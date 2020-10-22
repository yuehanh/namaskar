import React from 'react';

import { Link } from 'react-router-dom';

export const ProjectIndexItem = ({ project, createProjectModal }) => {
  let pathname, icon, className, name, item;

  if (project.new) {
    icon = <i className="fas fa-plus"></i>
    className = "project-create-item"
    name = "Create Project"
    item = (
      <div className={className} onClick={createProjectModal} >
        <div className="project-tile">
          {icon}
        </div >
        <div className="project-name">
          {name}
        </div>
      </div >)

  } else {
    pathname = `/project/${project.id}`;
    icon = <i className="fas fa-tasks"></i>;
    className = "project-index-item"
    name = project.name

    item = (<Link to={{ pathname, project }}  >
      <div className={className} >
        <div className="project-tile">
          {icon}
        </div >
        <div className="project-name">
          <div>
            {name}
          </div>
          <i className="fas fa-minus"></i>
        </div>
      </div >
    </Link >)
  }

  return item;
};
