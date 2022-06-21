const data = {
  loginInputs: [
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
  btns: [
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
  title: {
    text: '당근친구',
    size: 'large',
    color: '',
  },
};

export default data;
