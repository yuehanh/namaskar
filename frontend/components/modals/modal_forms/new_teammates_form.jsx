import React from "react";
import { debounce } from "../../../util/query_util";
import { UsersSearchList } from "../../users/user_search_list";
export class NewTeammatesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "", selectedUsers: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.debounceSearch = debounce(
      () => this.props.searchUsers(this.state.searchString),
      1000
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleClick(user) {
    this.setState({
      selected: { ...this.state.selectedUsers, [user.id]: user },
      searchString: "",
    });
  }

  update(field) {
    return (e) =>
      this.setState(
        {
          [field]: e.currentTarget.value,
        },
        () => {
          if (this.state.searchString.length !== "") {
            this.debounceSearch();
          }
        }
      );
  }

  parseSearchResults() {
    let searchResult = [];
    const searches = this.props.searches;
    const searchUserIds = Object.keys(searches);
    if (this.state.searchString !== "" && searchUserIds.length > 0) {
      const { selectedUsers } = this.state;
      for (const userId of searchUserIds) {
        if (
          !this.props.teammates.has(parseInt(userId)) &&
          selectedUsers[userId] === undefined &&
          searches[userId].email
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase())
        ) {
          searchResult.push(searches[userId]);
        }
      }
    }
    return searchResult;
  }

  handleSubmit(e) {
    e.preventDefault();

    let user_ids;
    user_ids = Array.from(this.props.teammates).concat(
      Object.keys(this.state.selectedUsers)
    );

    const currSearch = this.state.searchString.trim().toLowerCase();
    const searches = this.props.searches;
    const searchUserIds = Object.keys(searches);

    if (currSearch) {
      for (const userId of searchUserIds) {
        if (searches[userId].email.toLowerCase() === currSearch) {
          user_ids.push(userId);
        }
      }
    }

    const workspace = { id: this.props.workspaceId, user_ids };
    this.props.processForm(workspace).then(() => {
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
                <input
                  type="text"
                  value={this.state.searchString}
                  onChange={this.update("searchString")}
                  className="login-input password"
                  placeholder="Search teammates by email"
                />
                <UsersSearchList users={this.parseSearchResults()} />

                <br />
              </div>

              <input
                className="session-form-button button"
                type="submit"
                value="Add Teammates"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
