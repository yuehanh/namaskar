import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectIndexContainer } from '../projects/project_index_container'
import { ProfileLinks } from '../splash/profile_links';
import { UserIndexContainer } from '../users/user_index_container';


export class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Link to='/'>
              <img className='nav-logo' src={window.images.fullLogo} />
            </Link>
          </div>
        </div>
        <div className="sidebar-nav-link">
          <ProfileLinks />
          <Link to={{
            pathname: "/home",
          }}>
            <div className="nav-link-home">
              <i className="fas fa-home"></i> Home
             </div>
          </Link>
          <UserIndexContainer />
          <ProjectIndexContainer />
        </div>
      </div >
    )
  }
}