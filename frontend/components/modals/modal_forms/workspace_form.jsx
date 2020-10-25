import React from "react";
export class WorkspaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.workspace;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const workspace = Object.assign({}, this.state);
    this.props.processForm(workspace, this.props.homespaceId).then(() => {
      this.props.closeModal();
    });
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="session-form-error">
          <ul className="session-form-error-messages">
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                <strong>{error}</strong>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="new-workspace-form-container">
        <div className="session-form-content">
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <br />
            <div className="session-form-title">{this.props.formType} </div>

            {this.renderErrors()}
            <br />
            <div className="session-form-elements">
              <div className="email-password-input">
                <span className="grey-label-text">Name</span>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                  className="login-input password"
                  placeholder="Please give your workspace a name"
                />

                <br />
                <span className="grey-label-text">Description</span>
                <textarea
                  value={this.state.description}
                  onChange={this.update("description")}
                  className="login-input"
                />
                <br />
              </div>

              <input
                className="session-form-button button"
                type="submit"
                value={this.props.formType}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
