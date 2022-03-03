import React from 'react';
import Input from '../../atoms/Input';

const LoginInput = () => {
  return (
    <>
      <Input type="text" placeholder="아이디" />
      <br />
      <Input type="password" placeholder="비밀번호" />
    </>
  );
};

export default LoginInput;
