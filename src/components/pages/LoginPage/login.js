import axios from 'axios';
import { setRefreshToken } from '../../../util/cookie';
import reissue from '../../../util/reissue';

export const login = async (id, pw, setAlert) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: '/auth/login',
      header: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      data: {
        userId: id,
        pw,
      },
    });
    // console.log(new Date(data.data.accessTokenExpireTime));
    return data.state === 200 ? loginSuccess(data.data) : loginFail(setAlert);
  } catch (err) {
    setAlert('서버와의 연결이 불안정합니다. 잠시후에 다시 시도해주세요.');
    console.log(err);
  }
};

const loginSuccess = (data) => {
  // 나중에 redux에 넣게 리팩토링
  localStorage.setItem('accessToken', data.accessToken);
  // 쿠키에 리프레쉬 토큰 셋하면서 access 유효기간 만큼 set timeout도 걸어주기
  setTimeout(() => reissue(), 1000 * 60 * 14);
  setRefreshToken(data.refreshToken);
  return true;
};
const loginFail = (setAlert) => {
  setAlert('아이디, 패스워드를 정확히 입력해주세요');
  return false;
};
