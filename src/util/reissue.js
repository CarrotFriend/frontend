import axios from 'axios';

const reissue = async () => {
  if (
    window.location.pathname === '/login' ||
    window.location.pathname === '/join'
  )
    return;

  try {
    const {
      data: { state, data },
    } = await axios({
      method: 'post',
      url: '/auth/reissue',
      header: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    });

    // refreshToken invalidate
    if (state !== 200) throw new Error('refreshToken invalidate.');

    axios.defaults.headers['Authorization'] =
      data.grantType + ' ' + data.accessToken;

    // accessToken의 유효기간이 15분이기 때문에 1분 전에 다시 (14분마다) reissue하기
    setTimeout(() => reissue(), 1000 * 60 * (15 - 1));
  } catch (err) {
    // 세션 만료 or 다른 이유로 refreshToken이 유효하지 않으면 재로그인 요청
    console.log(err);
    window.alert('세션이 만료되어 로그인 창으로 이동합니다.');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
};

export default reissue;
