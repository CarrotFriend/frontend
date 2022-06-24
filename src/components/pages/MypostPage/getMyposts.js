import axios from 'axios';

const getMyPosts = async (navigate) => {
  const { id } = JSON.parse(localStorage.getItem('user'));
  try {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/mypost/${id}`,
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
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
