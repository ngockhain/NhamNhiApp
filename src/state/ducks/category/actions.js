// GET HANDLER
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
    AUTH_CODE,
    CATEGORY_GET_URL,
    CATEGORY_ADD_URL, 
    CATEGORY_EDIT_URL,
    CATEGORY_REMOVE_URL
} from '../../utils/constants';


export const fetchAllCategory = createAsyncThunk(
    'category/fetchAllCategory',
    async (url, { rejectWithValue }) => {
        const response = await fetch(CATEGORY_GET_URL,
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

export const addAsyncCategory = createAsyncThunk(
    'category/addAsyncCategory',
    async (categoryData, { rejectWithValue }) => {
        const response = await fetch(
            CATEGORY_ADD_URL,
            {
                method: 'POST',
                headers: {
                    'X-Cybozu-Authorization': AUTH_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    categoryData.record
                )
            }
        );

        const jsonData = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        return { raw_data: { ...categoryData.raw, isNew: false, id: jsonData.id }, idx: categoryData.index };
    }
);

export const editAsyncCategory = createAsyncThunk(
    'category/editAsyncCategory',
    async (categoryData, { rejectWithValue }) => {
        const response = await fetch(
            CATEGORY_EDIT_URL,
            {
                method: 'PUT',
                headers: {
                    'X-Cybozu-Authorization': AUTH_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    categoryData.record
                )
            }
        );

        const jsonData = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        return { raw_data: categoryData.raw, idx: categoryData.index };
    }
)

export const removeAsyncCategory = createAsyncThunk(
    'category/removeAsyncCategory',
    async (categoryData, { rejectWithValue }) => {
        const response = await fetch(
            CATEGORY_REMOVE_URL,
            {
                method: 'DELETE',
                headers: {
                    'X-Cybozu-Authorization': AUTH_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    categoryData.record
                )
            }
        );

        const jsonData = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        return { idx: categoryData.idx };
    }
)