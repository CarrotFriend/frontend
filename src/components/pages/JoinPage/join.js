import axios from 'axios';

export const join = async ({ id, pw, username, nickname, email, date }) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: '/auth/join',
      header: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      data: {
        userId: id,
        pw,
        userName: username,
        nickName: nickname,
        email: email,
        birthday: date,
      },
    });
    if (data.state === 200) {
      alert('회원가입이 완료되었습니다!');
      return true;
    }
  } catch (err) {
    console.log(err);
  }
};
