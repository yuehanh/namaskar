import React from "react";

export class SelectedUserList extends React.Component {
  render() {
    const selectedUsersItem = this.props.users.map((user) => (
      <li key={user.id} className="selected-user">
        {" "}
        <span
          className="selected-delete"
          onClick={() => this.props.handleDelete(user.id)}
        >
          &#10006;
        </span>
        {user.email}
      </li>
    ));

    return (
      <div className="selection-list-container">
        <div className="selected-title">Selected Teammates</div>
        <ul className="selection-list">{selectedUsersItem}</ul>
        <input
          className="session-form-button button search-button"
          type="submit"
          value="Add Teammates"
        />
      </div>
    );
  }
}
