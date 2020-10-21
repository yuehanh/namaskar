import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import { ProjectIndexContainer } from '../projects/project_index_container'
import { UserControllerContainer } from '../topbar/topbar_user_controller_container';
import { HomespaceInfoContainer } from '../topbar/homespace_info_container';
import { ProjectInfoContainer } from '../topbar/project_info_container';
import { Sidebar } from '../sidebar/sidebar';
export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.fetchWorkspace(this.props.homespaceId).then(() => console.log("fetch from home")).then(() => this.setState({ loading: false }))
  }

  render() {
    if (this.state.loading) {
      return null
    }

    return (
      <div className="workspace">
        <Sidebar />

        <div className='workspace-content'>
          <div className="workspace-header">
            <Switch>
              <ProtectedRoute exact path="/home" component={HomespaceInfoContainer} />
              <ProtectedRoute exact path="/project/:projectId" component={ProjectInfoContainer} />
            </Switch>
            <UserControllerContainer />
          </div>

          <div className="workspace-body">
            <div className="wrapper">
              <Switch>
                <ProtectedRoute exact path="/home" component={ProjectIndexContainer} />
              </Switch>

            </div>
          </div>

        </div >
      </div>

    )
  }
}