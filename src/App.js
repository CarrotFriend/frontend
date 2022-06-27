import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import JoinPage from './components/pages/JoinPage';
import CategoryPage from './components/pages/CategoryPage';
import PrivateRoute from './util/PrivateRoute';
import LoggedinPrivateRoute from './util/LoggedinPrivateRoute';
import axios from 'axios';
import reissue from './util/reissue';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mock/browser');

//   worker.start();
// }

axios.defaults.baseURL = 'https://carrot-back.herokuapp.com';
axios.defaults.headers.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8';

function App() {
  useEffect(() => {
    // 새로 고침 시 reissue로 accessToken 가져오기
    reissue();
  }, []);
  return (
    <div className="App">
      <ThemeProvider
        theme={{
          palette: {
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06596',
            white: '#ffffff',
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login/*"
              element={
                <LoggedinPrivateRoute>
                  <LoginPage />
                </LoggedinPrivateRoute>
              }
            />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/join" element={<JoinPage />} />
            <Route path="/category" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
