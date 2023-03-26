// import { combineReducers } from "redux";
// import * as types from "./types";
// import { createReducer } from "../../utils";

// const initialState = [];

// const expenseReducer = createReducer(initialState)({
//   [types.FETCH_COMPLETED]: (state, action) => action.payload.expense,
//   [types.ADD]: (state, action) => {
//     const { expense } = action.payload;
//     return [...state, expense];
//   },
//   [types.EDIT]: (state, action) => {
//     const { index, expense } = action.payload;
//     return [
//       ...state.slice(0, index),
//       expense,
//       ...state.slice(index + 1)
//     ];
//   },
//   [types.REMOVE]: (state, action) => {
//     const { index } = action.payload;
//     return [
//       ...state.slice(0, index),
//       ...state.slice(index + 1)
//     ];
//   }
// });

// export default expenseReducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createReducer } from "../../utils";
import { login } from './selectors';

const initialState = [];

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log('%c ■■■■■■ Add expense data ■■■■■', "color: orange;");
      console.log(action);
      console.log('%c ■■■■■■ Add expense data ■■■■■', "color: orange;");
      const { expense } = action.payload;
      return [...state, expense];
    },
    editExpense: (state, action) => {
      const { index, expense } = action.payload;
      console.log('%c ■■■■■■ Edit expense data ■■■■■', "color: orange;");
      console.log(action);
      console.log('%c ■■■■■■ Edit expense data ■■■■■', "color: orange;");
      return [
        ...state.slice(0, index),
        expense,
        ...state.slice(index + 1)
      ];
    },
    removeExpense: (state, action) => {
      const { index } = action.payload;
      console.log('%c ■■■■■■ Remove expense data ■■■■■', "color: orange;");
      console.log(action);
      console.log('%c ■■■■■■ Remove expense data ■■■■■', "color: orange;");
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    },
  },
  extraReducers: (builder) => {
    // Start login request
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    // Request successful
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    });

    // Request error
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export const { addExpense, editExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;