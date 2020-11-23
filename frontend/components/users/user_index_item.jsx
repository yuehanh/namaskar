import React from "react";

export class UserIndexItem extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <li
        className="avatar clickable"
        onClick={() => {
          this.props.handleRemove(user);
        }}
      >
        {user.fullname.slice(0, 2)}
        <div className="user-info-pop">
          <h2>About Me</h2>
          <div>
            <span>Email: </span> <span>{user.email}</span>
          </div>
          <div>
            <span>Name: </span> <span>{user.fullname}</span>
          </div>
          <div>
            <span>Pronouns: </span> <span>{user.pronouns}</span>
          </div>
          <div>
            <span>Role: </span> <span>{user.role}</span>
          </div>
          <div>
            <span>Department: </span> <span>{user.team}</span>
          </div>
        </div>
      </li>
    );
  }
}
