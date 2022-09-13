/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  credentials: {},
  error: null,
  isLoading: false,
};

export const currentUserThunk = createAsyncThunk('user/profile', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://letscookin-app.herokuapp.com/letscookinapps/users/${userId}`);
    return response?.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data || 'Something wrong!');
  }
});

const userSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: {
    [currentUserThunk.pending]: (state) => {
      state.credentials = {};
      state.error = null;
      state.isLoading = true;
    },
    [currentUserThunk.fulfilled]: (state, { payload }) => {
      state.credentials = {
        name: payload?.name,
        email: payload?.email,
        phonenumber: payload?.phonenumber,
        profile_picture: payload?.profile_picture,
      };
      state.error = null;
      state.isLoading = false;
    },
    [currentUserThunk.rejected]: (state, { payload }) => {
      state.credentials = {};
      state.error = payload?.message;
      state.isLoading = false;
    },
  },
});

export default userSlice?.reducer;
