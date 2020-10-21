import { connect } from "react-redux";

import { updateWorkspace } from "../../actions/workspace_actions";

import { selectHomespace } from "../../reducers/selector";

import { TopbarInfo } from "./topbar_info";

const mapStateToProps = (state) => {
  
  const info = selectHomespace(state);
  return {
    info,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processUpdate: (workspace) => dispatch(updateWorkspace(workspace)),
  };
};

export const HomespaceInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarInfo);
