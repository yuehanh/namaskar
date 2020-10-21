import React from 'react';

import { Link } from 'react-router-dom';

export const ProjectIndexItem = ({ project, createProject }) => {
    let pathname = "/project";
    let icon = <i className="fas fa-tasks"></i>;
    let className = "project-index-item"

    if (createProject) {
        pathname = "/projects/new"
        icon = <i className="fas fa-plus"></i>
        className = "project-create-item"
    }

    return (
        <Link to={{ pathname, project }}  >
            <div className={className} >
                <div className="project-tile">
                    {icon}
                </div >
                <div className="project-name">
                    {project.name}
                </div>
            </div >
        </Link >
    );
};
