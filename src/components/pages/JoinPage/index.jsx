import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';
import { verify } from './verify';
import { join } from './join';

const JoinPage = () => {
  const [userId, setUserId] = useState('');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const stateList = [
    [userId, setUserId],
    [pw, setPw],
    [pwcheck, setPwcheck],
    [username, setUsername],
    [nickname, setNickname],
    [email, setEmail],
    [date, setDate],
  ];
  const inputs = stateList.map(([value, setValue], idx) => {
    return {
      ...data.inputs[idx],
      value,
      setValue,
    };
  });

  // Api 받고 아이디 중복 체크만 확인
  const clickBtn = async (e) => {
    const reg_email =
      /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (userId.trim() === '' || userId.trim().length < 4) {
      setAlert('아이디를 최소 4자 이상 입력해주세요.');
      e.preventDefault();
    } else if (pw.trim() === '' || pw.trim().length < 4) {
      setAlert('비밀번호를 최소 4자 이상 입력해주세요.');
      e.preventDefault();
    } else if (pw.trim() !== pwcheck.trim()) {
      setAlert('비밀번호가 일치하지 않습니다.');
      e.preventDefault();
    } else if (username.trim() === '' || username.length < 2) {
      setAlert('이름을 최소 1자 이상 입력해주세요.');
      e.preventDefault();
    } else if (nickname.trim() === '' || nickname.length < 2) {
      setAlert('닉네임을 최소 1자 이상 입력해주세요.');
      e.preventDefault();
    } else if (!reg_email.test(email)) {
      setAlert('이메일 양식을 올바르게 입력해주세요.');
      e.preventDefault();
    } else if (date.trim() === '') {
      setAlert('생년월일을 선택해주세요.');
      e.preventDefault();
    } else {
      e.preventDefault();
      // if (await checkUserId(userId)) return;
      const isJoined = await join({
        userId,
        pw,
        username,
        nickname,
        email,
        date,
      });
      if (isJoined) navigate('/login');
      else setAlert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
    }
  };

  const btns = [
    {
      ...data.btns[0],
      clickBtn: clickBtn,
    },
  ];

  useEffect(() => {
    const list = document.querySelectorAll('input');
    for (let ele of list) {
      if (
        ele.name === 'userId' ||
        ele.name === 'nickname' ||
        ele.name === 'email'
      )
        ele.addEventListener('focusout', () =>
          verify(ele, ele.name, ele.value)
        );
    }
  }, []);

  return (
    <PageFrame>
      <StyledJoinPage>
        <Text size={data.title.size}>{data.title.text}</Text>
        <JoinFormBox action="" method="post">
          <InputLabelList
            inputList={inputs}
            labelList={data.labels}
            flex={InputLableListFlex}
            isReversed={true}
          />
          <Alert>{alert}</Alert>
          <ButtonList list={btns} flex="column" />
          {/* <button onClick={join}>ddd</button> */}
        </JoinFormBox>
      </StyledJoinPage>
    </PageFrame>
  );
};

const commonInputAttribute = {
  size: 'small',
};
const commonLabelAttribute = {
  size: 'medium',
  color: 'gray',
};

const data = {
  inputs: [
    {
      type: 'text',
      name: 'userId',
      ...commonInputAttribute,
    },
    {
      type: 'password',
      name: 'pw',
      ...commonInputAttribute,
    },
    {
      type: 'password',
      name: 'pwcheck',
      ...commonInputAttribute,
    },
    {
      type: 'text',
      name: 'username',
      ...commonInputAttribute,
    },
    {
      type: 'text',
      name: 'nickname',
      ...commonInputAttribute,
    },
    {
      type: 'email',
      name: 'email',
      ...commonInputAttribute,
    },
    {
      type: 'date',
      name: 'date',
      ...commonInputAttribute,
    },
  ],
  labels: [
    {
      ...commonLabelAttribute,
      child: '아이디',
      target: 'userId',
    },
    {
      ...commonLabelAttribute,
      child: '비밀번호',
      target: 'pw',
    },
    {
      ...commonLabelAttribute,
      child: '비밀번호 재확인',
      target: 'pwcheck',
    },
    {
      ...commonLabelAttribute,
      child: '이름',
      target: 'username',
    },
    {
      ...commonLabelAttribute,
      child: '닉네임',
      target: 'nickname',
    },
    {
      ...commonLabelAttribute,
      child: '이메일',
      target: 'email',
    },
    {
      ...commonLabelAttribute,
      child: '생년월일',
      target: 'date',
    },
  ],
  btns: [
    {
      size: 'large',
      color: 'pink',
      child: '회원가입',
    },
  ],
  title: {
    text: '당근친구',
    size: 'large',
    color: '',
  },
};

const InputLableListFlex = {
  listDirection: 'column',
  contentDirection: 'column',
};

const JoinFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;

const Alert = styled.div`
  color: red;
`;

const StyledJoinPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 50rem;
  margin: 2rem;
`;

const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
`;

export default JoinPage;
