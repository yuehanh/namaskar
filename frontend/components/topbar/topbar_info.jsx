import React from "react";
import ContentEditable from "react-contenteditable";

export class TopbarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
    this.handleBlur = this.handleBlur.bind(this);
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

  render() {
    return (
      <div className="workspace-header-info">
        <h2>
          <ContentEditable
            onChange={this.update("name")}
            onBlur={this.handleBlur}
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
