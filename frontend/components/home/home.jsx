import React from 'react';
import { Link } from 'react-router-dom';
import { UserController } from './user_controller';
import { WorkspaceInfo } from './workspace_info';

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
          <WorkspaceInfo
            workspace={this.props.homespace}
            updateWorkspace={this.props.updateWorkspace} />
          <UserController
            currentUser={this.props.currentUser}
            workspaces={this.props.workspaces}
            logout={this.props.logout}
            fetchWorkspace={this.props.fetchWorkspace}
            updateUser={this.props.updateUser}
            homespace={this.props.homespace}
          />
        </div>
      </div >
    )
  }
}