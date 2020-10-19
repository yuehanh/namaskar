import React from 'react';
import ContentEditable from 'react-contenteditable'

export class WorkspaceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.workspace
    this.handleBlur = this.handleBlur.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    };
  }

  handleBlur() {
    const workspace = Object.assign({}, this.state);
    this.props.updateWorkspace(workspace)
  }

  render() {
    return (
      <div className="workspace-header-info">
        <h2>Home  --<ContentEditable
          onChange={this.update('name')}
          onBlur={this.handleBlur}
          html={this.state.name} />
        </h2>
        <div className="workspace-header-description"><ContentEditable
          onChange={this.update('description')}
          onBlur={this.handleBlur}
          html={this.state.description}
          className="editable-description"
        />
        </div>

      </div >
    );
  }
}