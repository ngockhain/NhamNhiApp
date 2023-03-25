import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";

const initialState = [];

const expenseReducer = createReducer(initialState)({
  [types.FETCH_COMPLETED]: (state, action) => action.payload.expense,
  [types.ADD]: (state, action) => {
    const { expense } = action.payload;
    return [...state, expense];
  },
  [types.EDIT]: (state, action) => {
    const { index, expense } = action.payload;
    return [
      ...state.slice(0, index),
      expense,
      ...state.slice(index + 1)
    ];
  },
  [types.REMOVE]: (state, action) => {
    const { index } = action.payload;
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
  }
});

export default expenseReducer;
