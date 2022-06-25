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
      name: 'userName',
      ...commonInputAttribute,
    },
    {
      type: 'text',
      name: 'nickName',
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
      target: 'userName',
    },
    {
      ...commonLabelAttribute,
      child: '닉네임',
      target: 'nickName',
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

export default data;
