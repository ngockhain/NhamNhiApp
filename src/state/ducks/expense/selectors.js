
// Fetch API
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      'https://fake-rest-api-nodejs.herokuapp.com/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const jsonData = await response.json();

    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(jsonData);
    }

    return jsonData;
  }
);