import React from 'react';

import { Link } from 'react-router-dom';

export const ProjectIndexItem = ({ project }) => {
    let pathname, icon, className;

    if (project.new) {
        pathname = "/projects/new"
        icon = <i className="fas fa-plus"></i>
        className = "project-create-item"
    } else {
        pathname = `/project`;
        icon = <i className="fas fa-tasks"></i>;
        className = "project-index-item"
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
