import axios from 'axios';

const getPostDetail = async (postId) => {
  try {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/detail/${postId}`,
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    if (fetchedData.data.state !== 200)
      throw new Error('Error in Fetching data!');

    return fetchedData;
  } catch (error) {
    throw error;
  }
};

export default getPostDetail;
