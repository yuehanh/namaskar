import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store"
import { Root } from "./components/root"

// Test
import { createTask, deleteTask,  updateTask } from "./actions/task_actions";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentState) {
    const preloadedState = {
      entities: window.currentState,
      session: { currentUserId: window.currentUserId}
    };
    store = configureStore(preloadedState);
    delete window.currentState;
    delete window.currentUserId;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);

  //Test Portion
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createTask = createTask;
  window.updateTask = updateTask;
  window.deleteTask = deleteTask;
});
