import React from 'react';
import { Link } from 'react-router-dom';
import { UserController } from './user_controller';

export class Home extends React.Component {

  componentDidMount() {
    this.props.fetchWorkspace(this.props.currentUser.homespaceId);
    this.props.fetchUser(this.props.currentUser.id);
  }


  render() {
    return (
      <div className='workspace'>
        <div className="workspace-header">
          <div className="workspace-header-info"><h2>Home</h2></div>
          <UserController
            currentUser={this.props.currentUser}
            workspaces={this.props.workspaces}
            logout={this.props.logout}
          />
        </div>
      </div>
    )
  }
}