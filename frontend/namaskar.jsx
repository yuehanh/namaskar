import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store"

// Test
import { login, logout, signup } from "./actions/session_actions.js";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to Namaskar</h1>, root);

  //Test Portion
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
