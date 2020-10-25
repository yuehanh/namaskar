import React from "react";
import ContentEditable from "react-contenteditable";
import { Redirect } from "react-router-dom";

export class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="workspace-header-info">
        <h2>{this.props.info.name}</h2>
      </div>
    );
  }
}
