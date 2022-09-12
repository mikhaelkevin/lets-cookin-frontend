import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import GlobalNavbar from '../components/organism/Global/GlobalNavbar';
import GlobalFooter from '../components/organism/Global/GlobalFooter';

// Pages

import NotFound from '../pages/NotFound';
import AddRecipe from '../pages/AddRecipe';
import Profile from '../pages/Profile';
// import DetailRecipe from '../pages/DetailRecipe';
import EditProfile from '../pages/EditProfile';
import EditRecipe from '../pages/EditRecipe';
import Loader from '../components/atomics/Global/Loader';
import ErrorBoundary from '../components/atomics/Global/ErrorBoundary';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const DetailRecipe = lazy(() => import('../pages/DetailRecipe'));

export default function App() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state?.auth);
  React.useEffect(() => {
    if (!token) navigate('/login');
  }, [token]);

  axios.interceptors.request.use((config) => {
    // eslint-disable-next-line
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  }, (error) => Promise.reject(error));

  return (
    <>
      <GlobalNavbar />
      <Routes>
        <Route path="/">
          <Route
            index
            element={(
              <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                  <LandingPage />
                </Suspense>
              </ErrorBoundary>
            )}
          />
          <Route path="add-recipe" element={<AddRecipe />} />
          <Route
            path="detail-recipe"
            element={(
              <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                  <DetailRecipe />
                </Suspense>
              </ErrorBoundary>
            )}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="edit-recipe" element={<EditRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalFooter />
    </>
  );
}
