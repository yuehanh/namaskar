import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (<div className='home-nav'>
      <button onClick={this.props.logout} className="logout-button">Log Out</button>
    </div>)

  }
}