import React from "react";
export class DeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.props.processForm(this.props.data).then(() => this.props.closeModal());
  }
  render() {
    return (
      <div className="delete-form-container">
        <div className="delete-form-content">
          <h2>
            DO YOU WANT TO <strong>{this.props.formType}</strong>{" "}
          </h2>
          <strong>This cannot be undone!!</strong>

          <div className="session-form-button-group">
            <button
              className="session-form-button button"
              type="button"
              onClick={this.handleClick}
            >
              Delete
            </button>
            <button
              className="session-form-button button"
              type="button"
              onClick={this.props.closeModal}
            >
              No, take me back please
            </button>
          </div>
        </div>
      </div>
    );
  }
}
