import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store"
import { Root } from "./components/root"

// Test
import { login, logout, signUp } from "./actions/session_actions.js";
import { createWorkspace, deleteWorkspace, fetchWorkspace, updateWorkspace } from "./actions/workspace_actions";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);

  //Test Portion
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signUp;
  window.createWorkspace = createWorkspace;
  window.updateWorkspace = updateWorkspace;
  window.fetchWorkspace = fetchWorkspace;
  window.deleteWorkspace = deleteWorkspace;
});
