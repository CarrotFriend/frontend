import { rest } from 'msw';

export default rest.get('/post/mypost/*', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json({
      state: 200,
      result: 'success',
      message: null,
      data: {
        post: [
          {
            postId: 1,
            userId: 1,
            title: '봉명동 저녁 드실분',
            imageList: [
              {
                src: 'https://contents.sixshop.com/thumbnails/uploadedFiles/56785/blogPost/image_1606197480517_1500.png',
              },
              {
                src: 'http://openimage.interpark.com/goods_image_big/6/2/0/2/7706076202_l.jpg',
              },
            ],
            content:
              '봉명동에서 저녁 간단히 드실분 구해요 \n 금요일이니 고기나 회 든든하게 먹고 싶네요 \n 6~7시쯤 영풍 문고 앞에서 만나면 될거같습니다.',
            regDate: '2022-05-31 12:24:37',
            category: {
              code: '6',
              name: '맛집 탐방',
            },
            tag: [
              {
                text: '봉명동',
              },
              {
                text: '맛집',
              },
            ],
          },
          {
            postId: 3,
            userId: 1,
            title: '모각코 모집',
            imageList: [
              {
                src: 'https://www.ciokorea.com/sites/default/files/images/GettyImages-522146634.jpg',
              },
            ],
            content:
              '모각코 하실분 구해요~~~ \n 충대 정문이나 궁동쪽 카페에서 같이 모여서 코딩 얘기도 하고 각자 코딩도 할 생각입니다 \n 시간, 장소는 협의해서 정할 생각입니다 \n 쪽지 주세요!',
            regDate: '2022-05-28 18:23:16',
            category: {
              code: '1',
              name: '스터디',
            },
            tag: [
              {
                text: '모각코',
              },
            ],
          },
          {
            postId: 29,
            userId: 1,
            title: '충남대 농구',
            imageList: [],
            content:
              '충대 남부에서 농구하실분 구합니다! 최대 8명 구하니까 쪽지주세요',
            regDate: '2022-06-13 17:50:11',
            category: {
              code: '8',
              name: '운동',
            },
            tag: [
              {
                text: '충남대',
              },
              {
                text: '농구',
              },
            ],
          },
        ],
      },
    })
  );
});
