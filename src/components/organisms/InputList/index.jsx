import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';

const StyledInputList = styled.

}

const InputList = (list) => {
  return (
    <>
      <Input type="text" placeholder="아이디" />
      <br />
      <Input type="password" placeholder="비밀번호" />
    </>
  );
};

export default LoginInput;
