import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';

const props = {
  inputProps: [
    {
      type: 'text',
      placeholder: '',
      name: 'id',
      accept: '',
      size: 'small',
      autoFocus: '',
    },
    {
      type: 'password',
      placeholder: '',
      name: 'pw',
      accept: '',
      size: 'small',
      autoFocus: '',
    },
    {
      type: 'password',
      placeholder: '',
      name: 'pwcheck',
      accept: '',
      size: 'small',
      autoFocus: '',
    },
    {
      type: 'text',
      placeholder: '',
      name: 'username',
      accept: '',
      size: 'small',
      autoFocus: '',
    },
    {
      type: 'text',
      placeholder: '',
      name: 'nickname',
      accept: '',
      size: 'small',
      autoFocus: '',
    },
    {
      type: 'email',
      placeholder: '',
      name: 'email',
      accept: '',
      size: 'small',
      autoFocus: '',
    },
    {
      type: 'date',
      placeholder: '',
      name: 'date',
      accept: '',
      size: 'small',
      autoFocus: '',
    },
  ],
  labelProps: [
    {
      size: 'medium',
      color: 'gray',
      child: '아이디',
      target: 'id',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '비밀번호',
      target: 'pw',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '비밀번호 재확인',
      target: 'pwcheck',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '이름',
      target: 'username',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '닉네임',
      target: 'nickname',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '이메일',
      target: 'email',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '생년월일',
      target: 'date',
    },
  ],
  btnProps: [
    {
      size: 'large',
      color: 'pink',
      child: '회원가입',
    },
  ],
  titleProps: {
    text: '당근친구',
    size: 'medium',
    color: '',
  },
};

const JoinFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: inherit;
  padding: 1rem 0;
`;

const AlertInput = styled.div`
  color: red;
`;

const StyledJoinPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 40rem;
  margin: 5rem;
`;

const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
`;

const JoinPage = () => {
  const [id, setId] = useState('a');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  props.inputProps[0]['value'] = id;
  props.inputProps[0]['setValue'] = setId;
  props.inputProps[1]['value'] = pw;
  props.inputProps[1]['setValue'] = setPw;
  props.inputProps[2]['value'] = pwcheck;
  props.inputProps[2]['setValue'] = setPwcheck;
  props.inputProps[3]['value'] = username;
  props.inputProps[3]['setValue'] = setUsername;
  props.inputProps[4]['value'] = nickname;
  props.inputProps[4]['setValue'] = setNickname;
  props.inputProps[5]['value'] = email;
  props.inputProps[5]['setValue'] = setEmail;
  props.inputProps[6]['value'] = date;
  props.inputProps[6]['setValue'] = setDate;

  const clickLogin = (e) => {
    if (id.trim() === '') {
      setAlert('아이디를 입력해주세요!');
      e.preventDefault();
    } else if (pw.trim() === '') {
      setAlert('비밀번호를 입력해주세요!');
      e.preventDefault();
    }
  };

  return (
    <PageFrame>
      <StyledJoinPage>
        <Text props={props.titleProps} />
        <JoinFormBox action="" method="post">
          <InputLabelList
            inputList={props.inputProps}
            labelList={props.labelProps}
            flex="column"
          />
          <AlertInput>{alert}</AlertInput>
          <ButtonList list={props.btnProps} flex="column" />
        </JoinFormBox>
      </StyledJoinPage>
    </PageFrame>
  );
};

export default JoinPage;
