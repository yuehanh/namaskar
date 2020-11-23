import React from "react";
import { UserIndexItemContainer } from "./user_index_item";

export class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
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

  handleAddTeamates(workspaceId) {
    this.props.addTeammates(workspaceId);
  }

  render() {
    const currentUser = this.props.currentUser;
    const currentUserItem = (
      <UserIndexItemContainer
        key="current"
        user={currentUser}
        handleRemove={() => null}
        currentUser={true}
      />
    );
    const userIndexItems = this.props.teammates.map((user) => {
      if (user.id !== currentUser.id) {
        return (
          <UserIndexItemContainer
            user={user}
            handleRemove={this.handleRemove}
            key={user.id}
          />
        );
      }
    });
    const addUserItem = (
      <li
        key="new"
        className="avatar clickable user-create"
        onClick={() =>
          this.handleAddTeamates(this.props.currentUser.homespaceId)
        }
      >
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
