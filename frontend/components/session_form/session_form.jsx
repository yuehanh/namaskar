import React from "react";
import { Link } from "react-router-dom";
import { ProfileLinks } from "../splash/profile_links";
export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processDemo();
  }
  renderRedirect() {
    const redirectText =
      this.props.formType === "Log In"
        ? "Don't have an account? "
        : "Have an account? ";
    return (
      <div className="session-redirect">
        {redirectText}
        {"  "} {this.props.navLink}
      </div>
    );
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
      <div className="session">
        <div className="login-form-container">
          <div className="session-form-header">
            <Link to="/">
              <img className="session-form-logo" src={window.images.fullLogo} />
            </Link>
            <ProfileLinks />
          </div>
          <div className="session-form-content">
            <form onSubmit={this.handleSubmit} className="session-form-box">
              <br />
              <div className="session-form-title">{this.props.formType}</div>
              {this.renderErrors()}
              <br />
              <div className="session-form-elements">
                <div className="email-password-input">
                  <span className="grey-label-text">Email Address</span>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input password"
                    placeholder="Please enter your email here"
                    required
                  />

                  <br />
                  <span className="grey-label-text">Password</span>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                    placeholder="Minimum six characters"
                    required
                  />
                  <br />
                </div>
                <div className="session-form-button-group">
                  <button
                    className="session-form-button button"
                    id="demo-button"
                    type="button"
                    onClick={this.handleDemo}
                  >
                    Demo User
                  </button>
                  <input
                    className="session-form-button button"
                    type="submit"
                    value={this.props.formType}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="session-form-footer">{this.renderRedirect()}</div>
      </div>
    );
  }
}
