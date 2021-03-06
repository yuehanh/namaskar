import React from "react";
import ContentEditable from "react-contenteditable";
import { Redirect } from "react-router-dom";

export class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.info;
    this.handleBlur = this.handleBlur.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.info) return null;
    if (prevState.id !== nextProps.info.id) {
      return nextProps.info;
    }

    // Return null to indicate no change to state.
    return null;
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  handleBlur() {
    const info = Object.assign({}, this.state);
    this.props.processUpdate(info);
  }

  handleEnter() {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleBlur();
    }
  }

  render() {
    return (
      <div className="workspace-header-info">
        <h2>
          <ContentEditable
            onChange={this.update("name")}
            onBlur={this.handleBlur}
            onKeyDown={this.handleEnter}
            html={this.state.name}
          />
        </h2>
        <div className="workspace-header-description">
          <input
            onChange={this.update("description")}
            onBlur={this.handleBlur}
            value={this.state.description ?? ""}
            className="editable-description"
            placeholder="You might want to add a description"
          />
        </div>
      </div>
    );
  }
}
