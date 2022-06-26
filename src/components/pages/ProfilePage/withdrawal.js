import axios from 'axios';

const withdrawal = async (navigate) => {
  const reply = window.confirm('정말 탈퇴하시겠습니까?');
  if (!reply) return;

  try {
    const { data } = await axios({
      method: 'delete',
      url: '/user',
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    if (data.state != 200) throw new Error('failed to withdrawal');

    window.alert('탈퇴가 완료되었습니다.');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    navigate('/login');
  } catch (err) {
    console.log(err);
    window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
  }
};

export default withdrawal;
