import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import GlobalNavbar from '../components/organism/Global/GlobalNavbar';
import GlobalFooter from '../components/organism/Global/GlobalFooter';

// Pages
// import Login from './pages/Login';
// import Register from './pages/Register';

import NotFound from '../pages/NotFound';
import AddRecipe from '../pages/AddRecipe';
import Profile from '../pages/Profile';
import LandingPage from '../pages/LandingPage';
import DetailRecipe from '../pages/DetailRecipe';
import EditProfile from '../pages/EditProfile';
import EditRecipe from '../pages/EditRecipe';

export default function App() {
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login';
    }
  }, []);

  axios.interceptors.request.use((config) => {
    // eslint-disable-next-line
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return config;
  }, (error) => Promise.reject(error));

  return (
    <>
      <GlobalNavbar />
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="add-recipe" element={<AddRecipe />} />
          <Route path="profile" element={<Profile />} />
          <Route path="detail-recipe" element={<DetailRecipe />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="edit-recipe" element={<EditRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalFooter />
    </>
  );
}
