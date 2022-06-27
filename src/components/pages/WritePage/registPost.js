import axios from 'axios';

export const registPost = async ({
  title,
  categoryObj,
  image,
  content,
  tags,
}) => {
  const tagList = tags
    .filter((tag) => tag !== '')
    .map((tag) => {
      return { text: tag };
    });

  const imageList =
    image === ''
      ? []
      : [
          {
            imageId: 0,
            src: image,
          },
        ];

  try {
    const { data } = await axios({
      method: 'post',
      url: '/post',
      data: {
        userId: JSON.parse(localStorage.getItem('user')).id,
        title,
        imageList,
        content,
        category: categoryObj,
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
