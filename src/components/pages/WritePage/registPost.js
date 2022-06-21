import axios from 'axios';

export const registPost = async ({ title, category, image, content, tags }) => {
  const tagList = tags
    .filter((tag) => tag !== '')
    .map((tag) => {
      return { text: tag };
    });
  try {
    const {
      data: {
        data: { postId },
      },
    } = await axios({
      method: 'post',
      url: '/post',
      header: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
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
    return postId;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

export default registPost;
