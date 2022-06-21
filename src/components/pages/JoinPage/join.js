import axios from 'axios';

export const join = async ({ userId, pw, username, nickname, email, date }) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: '/auth/join',
      header: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      data: {
        userId,
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
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
