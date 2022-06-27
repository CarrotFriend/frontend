import axios from 'axios';

const logout = async (navigate) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: '/auth/logout',
    });
    if (data.state !== 200) throw new Error('failed to logout');

    window.alert('로그아웃 되었습니다!');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    navigate('/login');
  } catch (err) {
    console.log(err);
    window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
  }
};

export default logout;
