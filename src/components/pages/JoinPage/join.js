import axios from 'axios';

export const join = async ({ userId, pw, userName, nickName, email, date }) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: '/auth/join',
      data: {
        userId,
        pw,
        userName,
        nickName,
        email,
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
