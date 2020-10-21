import React from 'react';

export class UserIndex extends React.Component {

  render() {
    const userIndexItems = this.props.teammates.map(
      (user) => (
        <li key={user.id} className="avatar clickable">
          {user.fullname.slice(0, 2)}
        </li>
      ))
    return (
      <div className="user-index">
        <ul className="user-index-items">
          {userIndexItems}
        </ul>
      </div >
    );
  }
}