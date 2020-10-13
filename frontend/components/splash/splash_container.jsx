import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

import { Splash } from './splash'

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export const SplashContainer = connect(null, mapDispatchToProps)(Splash)