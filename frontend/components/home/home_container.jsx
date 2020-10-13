import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

import { Home } from './home'

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export const HomeContainer = connect(null, mapDispatchToProps)(Home)