import axios from 'axios';
import { setRefreshToken } from './cookie';
import logout from './logout';

const reissue = () => {
  try {
    const { data } = axios({
      method: 'post',
      url: '/auth/reissue',
      header: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    });

    // 나중에 redux에 넣게 리팩토링
    localStorage.setItem('accessToken', data.data.accessToken);
    // 쿠키에 리프레쉬 토큰 셋하면서 access 유효기간 만큼 set timeout도 걸어주기
    // 유효기간 : 15분, 1분 전에 다시 reissue하기
    setTimeout(() => reissue(), 1000 * 60 * 14);
    // console.log(new Date(data.data.accessTokenExpireTime));
    data.state === 200 ? setRefreshToken(data.data.refreshToken) : logout(); // refreshToken 만료
  } catch (err) {
    console.log(err);
  }
};

export default reissue;
