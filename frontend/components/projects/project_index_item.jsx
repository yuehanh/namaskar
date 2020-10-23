import React from 'react';

import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
export class ProjectIndexItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.deleteProjectModal()
  }
  render() {
    let pathname, icon, className, name, item;

    if (this.props.project.new) {
      icon = <i className="fas fa-plus clickable"></i>
      className = "project-create-item clickable"
      name = "Create Project"
      item = (
        <div className={className} onClick={this.props.createProjectModal} >
          <div className="project-tile">
            {icon}
          </div >
          <div className="project-name">
            {name}
          </div>
        </div >)

    } else {
      pathname = `/project/${this.props.project.id}`;
      icon = <i className="fas fa-tasks"></i>;
      className = "project-index-item"
      name = this.props.project.name
      item = (
        <div className="project-row" >
          <Link to={{ pathname, project: this.props.project }} >
            <div className={className} >
              <div className="project-tile">
                {icon}
              </div >
              <div className="project-name">
                {name}
              </div >
            </div>
          </Link >
          <i className="fas fa-minus clickable" onClick={this.handleDelete} />
        </div >
      )
    }

    return item;
  }
};
