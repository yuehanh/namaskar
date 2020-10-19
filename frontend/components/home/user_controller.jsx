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
          <ul className="workspace-menu clickable">
            {this.props.workspaces.map(workspace => {
              return (
                <li key={workspace.id}
                  onClick={() => this.changeHomespace(workspace.id)}
                  className={`${this.props.currentUser.homespaceId === workspace.id ? "selected" : ""}`}
                >
                  {workspace.name}
                </li>
              )
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