import React from "react";
export class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.changed = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.changed = true;
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.changed) {
      const user = Object.assign({}, this.state);
      if (user.email === "demo@email.com") {
        alert(
          "Sorry! Demo User's profile settings cannot be edited. Please sign up for a new account"
        );
        return this.props.closeModal();
      }
      this.props.processForm(user).then(() => {
        this.props.closeModal();
      });
    }
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
    const buttonClass = this.changed ? "" : "disabled";
    return (
      <div className="new-workspace-form-container profile">
        <div className="session-form-content">
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <br />
            <div className="session-form-title">{this.props.formType} </div>

            {this.renderErrors()}
            <br />
            <div className="session-form-elements profile">
              <div className="email-password-input">
                <div className="profile-row">
                  <div className="input-item">
                    <span className="grey-label-text">Your full name</span>
                    <input
                      type="text"
                      value={this.state.fullname}
                      onChange={this.update("fullname")}
                      className="login-input profile"
                      placeholder="Please give your workspace a name"
                    />
                  </div>
                  <div className="input-item">
                    <span className="grey-label-text">Pronouns</span>
                    <input
                      type="text"
                      value={this.state.pronouns}
                      onChange={this.update("pronouns")}
                      className="login-input profile"
                      placeholder="e.g. she/her/hers"
                      pattern="[A-Za-z\/\,\ ]{0,}"
                    />
                  </div>
                </div>
                <div className="profile-row">
                  <div className="input-item">
                    <span className="grey-label-text">Role</span>
                    <input
                      type="text"
                      value={this.state.role}
                      onChange={this.update("role")}
                      className="login-input profile"
                    />
                  </div>
                  <div className="input-item">
                    <span className="grey-label-text">Department</span>
                    <input
                      type="text"
                      value={this.state.team}
                      onChange={this.update("team")}
                      className="login-input profile"
                    />
                  </div>
                </div>
                <div className="profile-row">
                  <div className="input-item">
                    <span className="grey-label-text">Email</span>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="login-input profile disabled"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <input
                className={`session-form-button button ${buttonClass}`}
                type="submit"
                value="Save Changes"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
