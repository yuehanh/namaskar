import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store"
import { Root } from "./components/root"

// Test
import { login, logout, signUp } from "./actions/session_actions.js";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

  //Test Portion
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signUp;
});
