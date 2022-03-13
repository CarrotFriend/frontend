import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import JoinPage from './components/pages/JoinPage';
import CategoryPage from './components/pages/CategoryPage';

// const AppBlock = styled.div`
//   width: 512px;
//   margin: 0 auto;
//   margin-top: 4rem;
//   border: 1px solid black;
//   padding: 1rem;
// `;
// const list = [
//   {
//     type: 'text',
//     placeholder: '제목 입력해줘',
//     value: '',
//     name: 'jojo',

//     // outline: ,
//   },
//   {
//     type: 'button',
//     placeholder: '',
//     value: 'click!',
//     name: 'btn',
//   },
//   {
//     type: 'email',
//     placeholder: 'navermail',
//     value: '',
//     name: 'mailmail',
//   },
// ];

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
