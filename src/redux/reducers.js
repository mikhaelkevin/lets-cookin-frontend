import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';

export default combineReducers({
  auth: authReducer,
});
