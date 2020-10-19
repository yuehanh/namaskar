import React from 'react';
import { Link } from 'react-router-dom';
export class UserController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.changeHomespace = this.changeHomespace.bind(this)
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  changeHomespace(workspaceId) {
    this.props.updateUser({ id: this.props.currentUser.id, homespace_id: workspaceId })
  }

  render() {
    return (
      <div className="workspace-user-control" >
        <div
          className="avatar clickable"
          onClick={this.toggleMenu}
        >
          {this.props.currentUser.fullname.slice(0, 2)}
        </div>
        <div className={`user-control-menu ${this.state.menu ? "" : "hidden"}`}>
          <ul className="workspace-menu clickable" onClick={this.toggleMenu}>
            <li key={this.props.homespace.id}
              className="selected">{this.props.homespace.name}</li>
            {this.props.workspaces.map(workspace => {
              if (this.props.homespace.id !== workspace.id) {
                return (
                  <li key={workspace.id}
                    onClick={() => this.changeHomespace(workspace.id)}
                  >
                    { workspace.name}
                  </li>
                )
              }

            })}
            <div className="menu-separator"></div>
            <li><Link to="/workspaces/new">Create New Workspace</Link></li>
            <li onClick={this.props.logout}>Log Out</li>
          </ul>
        </div>
      </div >
    )
  }
}