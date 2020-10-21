import { combineReducers } from "redux";

import modal from "./modal_reducer";

export const uiReducer = combineReducers({
  modal,
});
