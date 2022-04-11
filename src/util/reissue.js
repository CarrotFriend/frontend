import axios from 'axios';
import { setRefreshToken } from './cookie';

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

    // 쿠키에 리프레쉬 토큰 셋하면서 access 유효기간 만큼 set timeout도 걸어주기
    setTimeout(() => reissue(), 1000 * 60 * 14);
    // console.log(new Date(data.data.accessTokenExpireTime));
    data.state === 200
      ? setRefreshToken(data.data.refreshToken)
      : console.log('다시 로그인 창으로 리다이렉션');
  } catch (err) {
    console.log(err);
  }
};

export default reissue;
