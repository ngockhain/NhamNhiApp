import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createReducer } from "../../utils";
import { fetchAllCategory, addAsyncCategory, editAsyncCategory, removeAsyncCategory } from './actions';

const initialState = [];

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            console.log('%c ■■■■■■ Add category data ■■■■■', "color: orange;");
            console.log(action);
            console.log('%c ■■■■■■ Add category data ■■■■■', "color: orange;");
            const { category } = action.payload;
            return { ...state, category: [...state.category, category] };
        },
        editCategory: (state, action) => {
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
        removeCategory: (state, action) => {
            const { index } = action.payload;
            console.log('%c ■■■■■■ Remove category data ■■■■■', "color: orange;");
            console.log(action);
            console.log('%c ■■■■■■ Remove category data ■■■■■', "color: orange;");
            return {
                ...state,
                category: [
                    ...state.category.slice(0, index),
                    ...state.category.slice(index + 1)
                ]
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategory.pending, (state) => {
            return (state = {
                ...state,
                isLoading: true,
                category: [],
            })
        });
        // Request successful
        builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
            const records = action.payload.records ?? [];
            if (records) {
                records.forEach((x, idx) => { Object.keys(x).forEach(k => { records[idx][k] = records[idx][k].value ?? '' }) });
            }

            return (
                state = {
                    ...state,
                    isLoading: false,
                    category: records
                }
            )
        });
        // Request error
        builder.addCase(fetchAllCategory.rejected, (state, action) => {
            return (
                state = {
                    ...state,
                    isLoading: false,
                }
            )
        });

        // Add Async Expense
        builder.addCase(addAsyncCategory.pending, (state) => {
            return (state = {
                ...state,
                isLoading: true,
            })
        });
        // Request successful
        builder.addCase(addAsyncCategory.fulfilled, (state, action) => {
            return (state = {
                ...state,
                isLoading: false,
                category: [
                    ...state.category.slice(0, action.payload.idx),
                    action.payload.raw_data,
                    ...state.category.slice(action.payload.idx + 1)
                ]
            })
        });
        // Request error
        builder.addCase(addAsyncCategory.rejected, (state, action) => {
            return (
                state = {
                    ...state,
                    isLoading: false,
                }
            )
        });


        // Edit Async Expense
        builder.addCase(editAsyncCategory.pending, (state) => {
            return (state = {
                ...state,
                isLoading: true,
            })
        });
        // Request successful
        builder.addCase(editAsyncCategory.fulfilled, (state, action) => {
            return (state = {
                ...state,
                isLoading: false,
                category: [
                    ...state.category.slice(0, action.payload.idx),
                    action.payload.raw_data,
                    ...state.category.slice(action.payload.idx + 1)
                ]
            })
        });
        // Request error
        builder.addCase(editAsyncCategory.rejected, (state, action) => {
            return (
                state = {
                    ...state,
                    isLoading: false,
                }
            )
        });

        // Remove Async Expense
        builder.addCase(removeAsyncCategory.pending, (state) => {
            return (state = {
                ...state,
                isLoading: true,
            })
        });
        // Request successful
        builder.addCase(removeAsyncCategory.fulfilled, (state, action) => {
            return (state = {
                ...state,
                isLoading: false,
                category: [
                    ...state.category.slice(0, action.payload.idx),
                    ...state.category.slice(action.payload.idx + 1)
                ]
            })
        });
        // Request error
        builder.addCase(removeAsyncCategory.rejected, (state, action) => {
            return (
                state = {
                    ...state,
                    isLoading: false,
                }
            )
        });
    }
});

export const { addCategory, editCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;