import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

export class UserIndexItem extends React.Component {
  render() {
    const user = this.props.user;
    const action = this.props.currentUser ? (
      <span
        className="action clickable"
        onClick={() => {
          this.props.updateUser(user);
        }}
      >
        Edit
      </span>
    ) : (
      <span
        className="action clickable"
        onClick={() => {
          this.props.handleRemove(user);
        }}
      >
        Remove
      </span>
    );
    return (
      <li className="avatar">
        {user.fullname.slice(0, 2)}
        <div className="user-info-pop">
          <div
            className="
          header"
          >
            <h2>{user.fullname}</h2>
            {action}
          </div>

          <div>
            <span>Email: </span> <span>{user.email}</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(openModal({ type: "editUser", data: user }));
    },
  };
};

export const UserIndexItemContainer = connect(
  null,
  mapDispatchToProps
)(UserIndexItem);
