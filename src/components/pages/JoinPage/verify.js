import axios from 'axios';

export const verify = async (ele, identifier, val) => {
  try {
    const {
      data: {
        data: { code },
      },
    } = await axios({
      method: 'get',
      url: '/verify/' + identifier + '/' + val,
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    const label =
      identifier === 'userId'
        ? '아이디'
        : identifier === 'nickname'
        ? '닉네임'
        : '이메일';
    if (code === 400) {
      window.alert('이미 존재하는 ' + label + '입니다. 다시 입력해 주세요.');
      ele.value = '';
      ele.focus();
    }
  } catch (err) {
    console.log(err);
    window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
  }
};
