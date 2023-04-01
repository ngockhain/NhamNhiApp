// GET HANDLER
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
    AUTH_CODE,
    EXPENSE_GET_URL,
    EXPENSE_ADD_URL, 
    EXPENSE_EDIT_URL,
    EXPENSE_REMOVE_URL
} from '../../utils/constants';

export const fetchAllExpense = createAsyncThunk(
    'expense/fetchAllExpense',
    async (url, { rejectWithValue }) => {
        const response = await fetch(EXPENSE_GET_URL,
            {
                method: 'GET',
                headers: {
                    'X-Cybozu-Authorization': AUTH_CODE,
                },
            }
        );

        const jsonData = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        return jsonData;
    }
);

export const addAsyncExpense = createAsyncThunk(
    'expense/addAsyncExpense',
    async (expenseData, { rejectWithValue }) => {
        const response = await fetch(
            EXPENSE_ADD_URL,
            {
                method: 'POST',
                headers: {
                    'X-Cybozu-Authorization': AUTH_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    expenseData.record
                )
            }
        );

        const jsonData = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        return { raw_data: { ...expenseData.raw, isNew: false, id: jsonData.id }, idx: expenseData.index };
    }
);

export const editAsyncExpense = createAsyncThunk(
    'expense/editAsyncExpense',
    async (expenseData, { rejectWithValue }) => {
        const response = await fetch(
            EXPENSE_EDIT_URL,
            {
                method: 'PUT',
                headers: {
                    'X-Cybozu-Authorization': AUTH_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    expenseData.record
                )
            }
        );

        const jsonData = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        return { raw_data: expenseData.raw, idx: expenseData.index };
    }
)

export const removeAsyncExpense = createAsyncThunk(
    'expense/removeAsyncExpense',
    async (expenseData, { rejectWithValue }) => {
        const response = await fetch(
            EXPENSE_REMOVE_URL,
            {
                method: 'DELETE',
                headers: {
                    'X-Cybozu-Authorization': AUTH_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    expenseData.record
                )
            }
        );

        const jsonData = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        return { idx: expenseData.idx };
    }
)