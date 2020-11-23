import React from "react";
export class UsersSearchList extends React.Component {
  render() {
    const usersSearchItems = this.props.users.map((user) => (
      <li className="search-item" key={user.id}>
        {user.email}
      </li>
    ));
    return <ul className="search-list">{usersSearchItems}</ul>;
  }
}
