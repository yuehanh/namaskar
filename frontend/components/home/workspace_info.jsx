import React from 'react';
import ContentEditable from 'react-contenteditable'

export class WorkspaceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.workspace
    this.handleBlur = this.handleBlur.bind(this);
    console.log("constructed")
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.id !== nextProps.workspace.id) {
      return nextProps.workspace
        ;
    }

    // Return null to indicate no change to state.
    return null;
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
        <h2>Home -- <ContentEditable
          onChange={this.update('name')}
          onBlur={this.handleBlur}
          html={this.state.name} />
        </h2>
        <div className="workspace-header-description">
          <input onChange={this.update('description')}
            onBlur={this.handleBlur}
            value={this.state.description}
            className="editable-description"
            placeholder="You might want to add a description" />
        </div>
      </div >
    );
  }
}