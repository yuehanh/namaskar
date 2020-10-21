import React from 'react';
import { ProjectInfoContainer } from '../topbar/project_info_container';
import { UserControllerContainer } from '../topbar/topbar_user_controller_container';

export class ProjectShow extends React.Component {
  render() {
    return (
      <div className="workspace-header">
        <ProjectInfoContainer project={this.props.project} />
        <UserControllerContainer />
      </div >)
  }
}
