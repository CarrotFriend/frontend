import axios from 'axios';
import reissue from '../../../util/reissue';

export const login = async (id, pw, setAlert) => {
  try {
    const {
      data: { state, data },
    } = await axios({
      method: 'post',
      url: '/auth/login',
      data: {
        userId: id,
        pw,
      },
    });
    return state === 200 ? loginSuccess(data) : loginFail(setAlert);
  } catch (err) {
    setAlert('서버와의 연결이 불안정합니다. 잠시후에 다시 시도해주세요.');
    console.log(err);
  }
};

const loginSuccess = (data) => {
  // accessToken header에 세팅해주기
  axios.defaults.headers['Authorization'] =
    data.grantType + ' ' + data.accessToken;

  // access 유효기간 만료 1분전 timeout 걸어주기
  setTimeout(() => reissue(), 1000 * 60 * (15 - 1));
  return true;
};
const loginFail = (setAlert) => {
  setAlert('아이디, 패스워드를 정확히 입력해주세요');
  return false;
};
