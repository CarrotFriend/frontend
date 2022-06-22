import axios from 'axios';

const getPostDetail = async (id) => {
  try {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/detail/${id}`,
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    if (fetchedData.data.state !== 200) return { data: false };

    return fetchedData;
  } catch (error) {
    console.log(error);
    return { data: false };
  }
};

export default getPostDetail;
