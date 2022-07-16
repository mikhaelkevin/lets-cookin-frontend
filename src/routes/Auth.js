import React from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import axios from 'axios';
import App from './App';
import ProfileContext from '../pages/Context';

// Pages
import Login from '../pages/Login';
import Register from '../pages/Register';

// Context
export default function Auth() {
  return (

    <ProfileContext.Provider value={
      localStorage.getItem('userInformation')
        ? JSON.parse(localStorage.getItem('userInformation'))
        : null
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ProfileContext.Provider>

  );
}
