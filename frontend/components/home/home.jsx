import React from 'react';

import { ProjectIndexContainer } from '../projects/project_index_container'
import { UserControllerContainer } from '../topbar/topbar_user_controller_container';
import { HomespaceInfoContainer } from '../topbar/homespace_info_container';
export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.fetchWorkspace(this.props.currentUser.homespaceId);
    this.props.fetchUser(this.props.currentUser.id).then(() => this.setState({ loading: false }))
  }

  render() {
    if (this.state.loading) {
      return null
    }
    
    return (
      <div className='workspace'>
        <div className="workspace-header">
          <HomespaceInfoContainer />
          <UserControllerContainer />
        </div>
        <div className="workspace-body">
          <div className="wrapper">
            <ProjectIndexContainer />
          </div>
        </div>
      </div >
    )
  }
}