import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import userReducer from './features/userSlice';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
