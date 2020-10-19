import React from 'react';
export class UserController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    return (
      <div className="workspace-user-control" >
        <div
          className="avatar"
          onClick={this.toggleMenu}
        >
          {this.props.currentUser.fullname.slice(0, 2)}
        </div>
        <div className={`user-control-menu ${this.state.menu ? "" : "hidden"}`}>
          <ul>
            {this.props.workspaces.map(workspace => <li key={workspace.id}> {workspace.name} </li>)}
          </ul>

          <ul>
            <settings className="setting"></settings>
            <li >My Profile Settings...</li>
            <li onClick={this.props.logout}>Log Out</li>
          </ul>
        </div>
      </div>
    )
  }
}