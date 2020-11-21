import React from "react";

export class UserIndex extends React.Component {
  handleRemove(user) {
    let teammates = this.props.teammates;

    const user_ids = [];
    for (const teammate of teammates) {
      if (teammate !== user) {
        user_ids.push(teammate.id);
      }
    }

    const workspace = {
      id: this.props.currentUser.homespaceId,
      user_ids,
    };
    this.props.updateWorkspace(workspace);
  }
  render() {
    const currentUser = this.props.currentUser;
    const currentUserItem = (
      <li key={currentUser.id} className="avatar clickable">
        {currentUser.fullname.slice(0, 2)}
      </li>
    );
    const userIndexItems = this.props.teammates.map((user) => {
      if (user.id !== this.props.currentUser.id) {
        return (
          <li
            key={user.id}
            className="avatar clickable"
            onClick={() => {
              this.handleRemove(user);
            }}
          >
            {user.fullname.slice(0, 2)}
          </li>
        );
      }
    });
    const addUserItem = (
      <li className="avatar clickable user-create">
        {" "}
        <i className="fas fa-plus"></i>
      </li>
    );

    return (
      <div className="user-index">
        <ul className="user-index-items">
          {currentUserItem}
          {userIndexItems}
          {addUserItem}
        </ul>
      </div>
    );
  }
}
