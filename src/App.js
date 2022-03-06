import React from 'react';
// import Button from './components/atoms/Button';
// import Image from './components/atoms/Image';
// import Text from './components/atoms/Text';
// import Input from './components/atoms/Input';
// import InputList from './components/organisms/InputList';
// import Label from './components/atoms/Label';
// import LoginInput from './components/molecules/LoginInput';
import LoginPage from './components/pages/LoginPage';
import JoinPage from './components/pages/JoinPage';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          },
        }}
      >
        {/* <Button size="medium" color="pink">
          button
        </Button> */}
        {/* <Image src="https://curearthritis.org/wp-content/uploads/2019/11/Snow-man.jpeg" /> */}
        {/* <Image src="https://curearthritis.org/wp-content/uploads/2019/11/Snow-man.jpeg" /> */}
        {/* <Text text="당근친구" /> */}
        {/* <Input type="text" placeholder="제목" accept="image/*" name="jojo" /> */}
        {/* <Label linked="id" text="카테고리1" /> */}
        {/* <LoginInput /> */}
        {/* <InputList list={list} /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
