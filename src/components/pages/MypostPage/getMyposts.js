import axios from 'axios';

const getMyPosts = async (navigate) => {
  // 새로고침으로 토큰이 없으면 reissue
  if (!axios.defaults.headers['Authorization']) await reissue();
  const { id } = JSON.parse(localStorage.getItem('user'));

  try {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/mypost/${id}`,
    });

    if (fetchedData.data.state !== 200) {
      window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
      navigate(-1);
    }
    return fetchedData;
  } catch (error) {
    console.log(error);
    window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
    navigate(-1);
  }
};

export default getMyPosts;
