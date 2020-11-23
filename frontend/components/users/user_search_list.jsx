import React from "react";
export class UsersSearchList extends React.Component {
  render() {
    const usersSearchItems = this.props.users.map((user) => {
      if (user.email) {
        return (
          <li
            className="search-item"
            key={user.id}
            onClick={() => this.props.onClick(user)}
          >
            {user.email}
          </li>
        );
      } else {
        return (
          <li className="search-item empty" key="empty">
            {user}
          </li>
        );
      }
    });
    return <ul className="search-list">{usersSearchItems}</ul>;
  }
}
