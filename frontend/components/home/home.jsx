import React from 'react';
import { UserController } from './user_controller';
import { WorkspaceInfoContainer } from './workspace_info_container';
import { ProjectIndexContainer } from '../projects/project_index_container'
export class Home extends React.Component {

  componentDidMount() {
    this.props.fetchWorkspace(this.props.currentUser.homespaceId);
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    if (this.props.homespace === "") return null
    return (
      <div className='workspace'>
        <div className="workspace-header">
          <WorkspaceInfoContainer />
          <UserController
            currentUser={this.props.currentUser}
            workspaces={this.props.workspaces}
            logout={this.props.logout}
            fetchWorkspace={this.props.fetchWorkspace}
            updateUser={this.props.updateUser}
            homespace={this.props.homespace}
          />
        </div>
        <div className="workspace-body">
          <div className="wrapper">
            <ProjectIndexContainer />
          </div>
        </div>
      </div >
    )
  }
}