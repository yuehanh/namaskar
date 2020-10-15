import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <div className='splash'>
        <div className="splash-nav">
          <nav className='wrapper'>
            <div className='nav-icons'>
              <Link to='/'>
                <img className='nav-logo' src={window.images.fullLogo} />
              </Link>
            </div>
            <div className='nav-session'>
              <button onClick={this.props.logout} className="sign-up nav-button">Log Out</button>
            </div>
          </nav>
        </div>
      </div>)
  }
}