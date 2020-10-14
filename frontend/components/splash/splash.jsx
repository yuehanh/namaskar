import React from 'react';
import { Link } from 'react-router-dom';

export class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.redirectToSignUp = this.redirectToSignUp.bind(this)
  }
  redirectToSignUp() {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div className='splash'>
        <div className="splash-nav">
          <nav className='splash-nav-wrapper'>
            <div className='nav-icons'>
              <Link to='/'>
                <img className='nav-logo' src={window.images.fullLogo} />
              </Link>
            </div>
            <div className='nav-session'>
              <Link to='/login' className="session-link" >Log In</Link>
              <button onClick={this.redirectToSignUp} className="sign-up nav-button">Try for free</button>
            </div>
          </nav>
        </div>
      </div>)
  }
}