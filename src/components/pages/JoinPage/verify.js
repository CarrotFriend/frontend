import axios from 'axios';

export const verify = async (ele, identifier, val) => {
  const user = JSON.parse(localStorage.getItem('user'));
  // input에 적혀진 value가 현재 저장되어 있는 값이면 중복체크 하지 않음
  if (user?.[identifier] === val) return;

  try {
    const {
      data: { state },
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
        : identifier === 'nickName'
        ? '닉네임'
        : '이메일';
    if (state !== 200) {
      window.alert('이미 존재하는 ' + label + '입니다. 다시 입력해 주세요.');
      ele.value = '';
      ele.focus();
    }
  } catch (err) {
    console.log(err);
    window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
  }
};
