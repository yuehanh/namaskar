import React from 'react';

import { Link } from 'react-router-dom';

export const ProjectIndexItem = ({ project }) => {
    let pathname, icon, className, name;

    if (project.new) {
        pathname = "/projects/new"
        icon = <i className="fas fa-plus"></i>
        className = "project-create-item"
        name = "Create Project"
    } else {
        pathname = `/project/${project.id}`;
        icon = <i className="fas fa-tasks"></i>;
        className = "project-index-item"
        name = project.name
    }

    return (
        <Link to={{ pathname, project }}  >
            <div className={className} >
                <div className="project-tile">
                    {icon}
                </div >
                <div className="project-name">
                    {name}
                </div>
            </div >
        </Link >
    );
};
