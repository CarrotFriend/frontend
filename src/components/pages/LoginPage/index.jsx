import React, { useState } from 'react';
import Text from '../../atoms/Text';
import InputList from '../../organisms/InputList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';

const props = {
  loginInputProps: [
    {
      type: 'text',
      placeholder: '아이디를 입력해주세요',
      name: 'id',
      accept: '',
      size: 'large',
      autoFocus: 'autoFocus',
    },
    {
      type: 'password',
      placeholder: '비밀번호를 입력해주세요',
      name: 'pw',
      accept: '',
      size: 'large',
      autoFocus: '',
    },
  ],
  btnProps: [
    {
      size: 'large',
      color: 'pink',
      child: '로그인',
    },
    {
      size: 'large',
      color: 'gray',
      child: '회원가입',
    },
  ],
  joinBtnProps: {},
  titleProps: {
    text: '당근친구',
    size: 'large',
    color: '',
  },
};

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: inherit;
  margin: 3rem;
  padding: 4rem 0;
  border: 1px solid black;
`;

const AlertInput = styled.div`
  color: red;
`;

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 40rem;
  margin: 5rem;
  text-align: center;
`;

const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
`;

// 이 페이지에서 idInputValue, pwInputValue state 가지기 / setState는 InputList에 각각 내려보내기
// 아래의 Input 컴포넌트에서 값이 바뀔때 setState -> 이 페이지 state 두개 동기화

// Button 누를때 Login버튼에 콜백함수() 전달, id, pw 값 둘중 하나라도 없으면 preventDefault
// InputList와 ButtonList 사이 빈 div AlertInput 만듦. 없는 값 화면에 띄우기.
// 둘다 있으면 그래도 form 진행

// join 버튼은 클릭하면 JoinPage로 Link or Redirect

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [alert, setAlert] = useState('');
  props.loginInputProps[0]['value'] = id;
  props.loginInputProps[1]['value'] = pw;
  props.loginInputProps[0]['setValue'] = setId;
  props.loginInputProps[1]['setValue'] = setPw;

  const clickLogin = (e) => {
    if (id.trim() === '') {
      setAlert('아이디를 입력해주세요!');
      e.preventDefault();
    } else if (pw.trim() === '') {
      setAlert('비밀번호를 입력해주세요!');
      e.preventDefault();
    }
  };
  const clickJoin = () => {
    console.log('join!');
  };
  props.btnProps[0]['clickBtn'] = clickLogin;
  props.btnProps[1]['clickBtn'] = clickJoin;
  return (
    <PageFrame>
      <StyledLoginPage>
        <Text props={props.titleProps} />
        <LoginFormBox action="" method="post">
          <InputList list={props.loginInputProps} flex="column" />
          <AlertInput>{alert}</AlertInput>
          <ButtonList list={props.btnProps} flex="column" />
        </LoginFormBox>
      </StyledLoginPage>
    </PageFrame>
  );
};

export default LoginPage;
