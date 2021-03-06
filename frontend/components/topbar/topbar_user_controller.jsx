import React from "react";

export class TopbarUserController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeHomespace = this.changeHomespace.bind(this);
  }

  toggleMenu() {
    if (this.state.menu) {
      this.setState({ menu: !this.state.menu }, () =>
        document.removeEventListener("click", this.toggleMenu)
      );
    } else {
      this.setState({ menu: !this.state.menu }, () =>
        document.addEventListener("click", this.toggleMenu)
      );
    }
  }

  changeHomespace(workspaceId) {
    this.props
      .updateUser({
        id: this.props.currentUser.id,
        homespace_id: workspaceId,
      })
      .then(() => {
        this.props.history.push("/home");
      });
  }

  render() {
    const avatar = this.props.currentUser.fullname.slice(0, 2);
    const menuHiddenClass = this.state.menu ? "" : "hidden";
    const homespace = (
      <li key={this.props.homespace.id} className="selected">
        <div>{this.props.homespace.name}</div>
      </li>
    );

    const workspaces = this.props.workspaces.map((workspace) => {
      if (this.props.homespace.id !== workspace.id) {
        return (
          <li
            key={workspace.id}
            onClick={() => this.changeHomespace(workspace.id)}
            className="worksapce-name-row"
          >
            <div className="clickable">{workspace.name}</div>
            <i
              className="fas fa-minus clickable"
              onClick={(e) => {
                e.stopPropagation();
                this.props.deleteWorkspaceModal(workspace.id);
              }}
            ></i>
          </li>
        );
      }
    });

    return (
      <div className="workspace-user-control">
        <div className="avatar clickable" onClick={this.toggleMenu}>
          {avatar}
        </div>

        <div className={`user-control-menu ${menuHiddenClass}`}>
          <ul className="workspace-menu ">
            {homespace}
            {workspaces}
            <div className="menu-separator"></div>
            <li onClick={this.props.createWorkspaceModal} className="clickable">
              {" "}
              Create New Workspace{" "}
            </li>
            <li
              onClick={() => this.props.updateUserModal(this.props.currentUser)}
              className="clickable"
            >
              My Profile Settings
            </li>
            <li onClick={this.props.logout} className="clickable">
              Log Out
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
