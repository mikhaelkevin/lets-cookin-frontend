/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {},
  token: null,
  error: null,
  isLoading: false,
};

export const loginThunk = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://letscookin-app.herokuapp.com/letscookinapps/login', credentials);
    return response?.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data || 'Something wrong!');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    doLogout: () => initialState,
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.user = {};
      state.token = null;
      state.error = null;
      state.isLoading = true;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.user = payload?.user;
      state.token = payload?.token;
      state.error = null;
      state.isLoading = false;
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.user = {};
      state.token = null;
      state.error = payload?.message;
      state.isLoading = false;
    },
  },
});

export const { doLogout } = authSlice.actions;
export default authSlice?.reducer;
