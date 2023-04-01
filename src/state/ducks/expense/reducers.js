import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createReducer } from "../../utils";
import { fetchAllExpense, addAsyncExpense, editAsyncExpense, removeAsyncExpense } from './actions';

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
      return {...state, expense: [...state.expense, expense]};
    },
    editExpense: (state, action) => {
      // const { index, expense } = action.payload;
      // console.log('%c ■■■■■■ Edit expense data ■■■■■', "color: orange;");
      // console.log(action);
      // console.log('%c ■■■■■■ Edit expense data ■■■■■', "color: orange;");
      // return {
      //   ...state,
      //   expense: [
      //     ...state.expense.slice(0, index),
      //     expense,
      //     ...state.expense.slice(index + 1)
      //   ]
      // };
    },
    removeExpense: (state, action) => {
      const { index } = action.payload;
      console.log('%c ■■■■■■ Remove expense data ■■■■■', "color: orange;");
      console.log(action);
      console.log('%c ■■■■■■ Remove expense data ■■■■■', "color: orange;");
      return {
        ...state,
        expense: [
          ...state.expense.slice(0, index),
          ...state.expense.slice(index + 1)
        ]
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllExpense.pending, (state) => {
      return (state = {
        ...state,
        isLoading: true,
        expense: [],
      })
    });
    // Request successful
    builder.addCase(fetchAllExpense.fulfilled, (state, action) => {
      const records = action.payload.records ?? [];
      if(records) {
        records.forEach((x, idx) => { Object.keys(x).forEach(k => { records[idx][k] = records[idx][k].value??'' }) });
      }

      return (
        state = {
          ...state,
          isLoading: false,
          expense: records
        }
      )
    });
    // Request error
    builder.addCase(fetchAllExpense.rejected, (state, action) => {
      return (
        state = {
          ...state,
          isLoading: false,
        }
      )
    });

    // Add Async Expense
    builder.addCase(addAsyncExpense.pending, (state) => {
      return (state = {
        ...state,
        isLoading: true,
      })
    });
    // Request successful
    builder.addCase(addAsyncExpense.fulfilled, (state, action) => {
      return (state = {
        ...state,
        isLoading: false,
        expense: [
          ...state.expense.slice(0, action.payload.idx),
          action.payload.raw_data, 
          ...state.expense.slice(action.payload.idx + 1)
        ]
      })
    });
    // Request error
    builder.addCase(addAsyncExpense.rejected, (state, action) => {
      return (
        state = {
          ...state,
          isLoading: false,
        }
      )
    });
    
    // Add Async Expense
    builder.addCase(editAsyncExpense.pending, (state) => {
      return (state = {
        ...state,
        isLoading: true,
      })
    });
    // Request successful
    builder.addCase(editAsyncExpense.fulfilled, (state, action) => {
      return (state = {
        ...state,
        isLoading: false,
        expense: [
          ...state.expense.slice(0, action.payload.idx),
          action.payload.raw_data, 
          ...state.expense.slice(action.payload.idx + 1)
        ]
      })
    });
    // Request error
    builder.addCase(editAsyncExpense.rejected, (state, action) => {
      return (
        state = {
          ...state,
          isLoading: false,
        }
      )
    });

    // Add Async Expense
    builder.addCase(removeAsyncExpense.pending, (state) => {
      return (state = {
        ...state,
        isLoading: true,
      })
    });
    // Request successful
    builder.addCase(removeAsyncExpense.fulfilled, (state, action) => {
      return (state = {
        ...state,
        isLoading: false,
        expense: [
          ...state.expense.slice(0, action.payload.idx),
          ...state.expense.slice(action.payload.idx + 1)
        ]
      })
    });
    // Request error
    builder.addCase(removeAsyncExpense.rejected, (state, action) => {
      return (
        state = {
          ...state,
          isLoading: false,
        }
      )
    });
  },
});

export const { addExpense, editExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;