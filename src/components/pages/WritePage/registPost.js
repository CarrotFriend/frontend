import axios from 'axios';

export const registPost = async ({ title, category, image, content, tags }) => {
  const tagList = tags
    .filter((tag) => tag !== '')
    .map((tag) => {
      return { text: tag };
    });
  try {
    const { data } = await axios({
      method: 'post',
      url: '/post',
      data: {
        userId: localStorage.getItem('user').id,
        title,
        imageList: [
          {
            src: image,
          },
        ],
        content,
        category,
        tagList,
      },
    });
    if (data.state !== 200) return -1;

    return data.data.postId;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

export default registPost;
