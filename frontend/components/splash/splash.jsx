import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileLinks } from './profile_links';

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
          <nav className='wrapper'>
            <div className='nav-icons'>
              <Link to='/'>
                <img className='nav-logo' src={window.images.fullLogo} />
              </Link>
            </div>
            <div className='nav-session'>
              <Link to='/login' className="session-link" >Log In</Link>
              <button
                onClick={this.redirectToSignUp}
                className="sign-up nav-button"
              >
                Try for free
              </button>
            </div>
          </nav>
        </div>
        <div className='splash-body'>
          <section className="splash-slogan">
            <div className="wrapper">
              <div className="splash-col-left">
                <h3>Work on big ideas, without the busywork.</h3>
                <div className="separator"></div>
                <p className="slogan text">From the small stuff to the big picture, Namaskar organizes work so teams are clear what to do, why it matters, and how to get it done.</p>
                <button
                  onClick={this.redirectToSignUp}
                  className="sign-up splash-main"
                >
                  Try for free
                </button>
              </div>
              <div className="splash-col-right">
                <img className='splash-image'
                  src={window.images.splashPhoto} />
              </div>
            </div>
            <section className="before-footer"></section>
          </section>
          <div className='splash-footer'>
            <div className="wrapper">
              <ProfileLinks />
            </div>
          </div>
        </div>
      </div>)
  }
}