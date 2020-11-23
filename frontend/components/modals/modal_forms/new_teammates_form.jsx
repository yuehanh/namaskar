import React from "react";
import { debounce } from "../../../util/query_util";
import { UsersSearchList } from "../../users/user_search_list";
import { SelectedUserList } from "../../users/user_selected_list";
export class NewTeammatesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "", selectedUsers: {}, searched: false };
    this.debounceSearch = debounce(
      () =>
        this.props
          .searchUsers(this.state.searchString)
          .then(this.setState({ searched: true })),
      1000
    );
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleClick(user) {
    this.setState({
      selectedUsers: { ...this.state.selectedUsers, [user.id]: user },
      searchString: "",
    });
  }

  update(field) {
    return (e) =>
      this.setState(
        {
          [field]: e.currentTarget.value,
          searched: false,
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
    if (this.state.searchString !== "" && this.state.searched) {
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
      if (searchResult.length === 0) {
        searchResult.push(`User "${this.state.searchString}" Not Found`);
      }
    }
    return searchResult;
  }

  handleDelete(id) {
    const selectedUsers = this.state.selectedUsers;
    delete selectedUsers[id];

    this.setState({ selectedUsers });
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
    const selectedUsers = Object.values(this.state.selectedUsers);
    let selectedUsersIndex;
    if (selectedUsers.length) {
      selectedUsersIndex = (
        <SelectedUserList
          users={selectedUsers}
          handleDelete={this.handleDelete}
        />
      );
    }
    return (
      <div className="new-workspace-form-container">
        <div className="session-form-content search-form">
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <br />
            <div className="session-form-title">{this.props.formType} </div>

            {this.renderErrors()}
            <br />
            <div className="session-form-elements search">
              <input
                autoFocus
                type="text"
                value={this.state.searchString}
                onChange={this.update("searchString")}
                className="search-input"
                placeholder="Search teammates by email"
              />
              <span>Hint: Type "@" to get a list of all users</span>
              <UsersSearchList
                users={this.parseSearchResults()}
                onClick={this.handleClick}
              />
              <div>{selectedUsersIndex}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
