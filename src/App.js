import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import JoinPage from './components/pages/JoinPage';
import CategoryPage from './components/pages/CategoryPage';

function App() {
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
            <Route path="/*" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/category" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
