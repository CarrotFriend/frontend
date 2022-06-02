import { rest } from 'msw';

export default rest.get('/post/category/*', (req, res, ctx) => {
  if (req.url.pathname.endsWith('6')) {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: [
          {
            id: 1,
            userId: 'abc',
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
        ],
      })
    );
  }
  if (req.url.pathname.endsWith('8')) {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: [
          {
            id: 2,
            userId: 'def',
            title: '자전거 엑스포!',
            imageList: [],
            content:
              '충대 정문에서 출발해서 엑스포까지 자전거 분 구합니다! \n 각자 저녁 먹고 8시에 만나면 될 거 같아요',
            regDate: '2022-06-01 13:52:19',
            category: {
              code: '8',
              name: '운동',
            },
            tag: [
              {
                text: '엑스포',
              },
              {
                text: '자전거',
              },
              {
                text: '충대 정문',
              },
            ],
          },
        ],
      })
    );
  }
  if (req.url.pathname.endsWith('1')) {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: [
          {
            id: 3,
            userId: 'aaa',
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
        ],
      })
    );
  }
  if (req.url.pathname.endsWith('7')) {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: [
          {
            id: 4,
            userId: 'bbb',
            title: '롤 동료 모집',
            imageList: [],
            content: '대충 롤 동료 구하는 글',
            regDate: '2022-06-01 17:32:19',
            category: {
              code: '7',
              name: '게임',
            },
            tag: [
              {
                text: '롤',
              },
              {
                text: '게임',
              },
              {
                text: '칼바람',
              },
            ],
          },
        ],
      })
    );
  }
});

// return res(
//   ctx.status(200),
//   ctx.delay(200),
//   ctx.json({
//     state: 200,
//     result: 'success',
//     message: null,
//     data: [
//       {
//         id: 1,
//         userId: 'abc',
//         title: '봉명동 저녁 드실분',
//         imageList: [
//           {
//             src: 'https://contents.sixshop.com/thumbnails/uploadedFiles/56785/blogPost/image_1606197480517_1500.png',
//           },
//           {
//             src: 'http://openimage.interpark.com/goods_image_big/6/2/0/2/7706076202_l.jpg',
//           },
//         ],
//         content:
//           '봉명동에서 저녁 간단히 드실분 구해요 \n 금요일이니 고기나 회 든든하게 먹고 싶네요 \n 6~7시쯤 영풍 문고 앞에서 만나면 될거같습니다.',
//         regDate: '2022-05-31 12:24:37',
//         category: {
//           code: '6',
//           name: '맛집 탐방',
//         },
//         tag: [
//           {
//             text: '봉명동',
//           },
//           {
//             text: '맛집',
//           },
//         ],
//       },
//       {
//         id: 2,
//         userId: 'def',
//         title: '자전거 엑스포!',
//         imageList: [],
//         content:
//           '충대 정문에서 출발해서 엑스포까지 자전거 분 구합니다! \n 각자 저녁 먹고 8시에 만나면 될 거 같아요',
//         regDate: '2022-06-01 13:52:19',
//         category: {
//           code: '8',
//           name: '운동',
//         },
//         tag: [
//           {
//             text: '엑스포',
//           },
//           {
//             text: '자전거',
//           },
//           {
//             text: '충대 정문',
//           },
//         ],
//       },
//       {
//         id: 3,
//         userId: 'aaa',
//         title: '모각코 모집',
//         imageList: [
//           {
//             src: 'https://www.ciokorea.com/sites/default/files/images/GettyImages-522146634.jpg',
//           },
//         ],
//         content:
//           '모각코 하실분 구해요~~~ \n 충대 정문이나 궁동쪽 카페에서 같이 모여서 코딩 얘기도 하고 각자 코딩도 할 생각입니다 \n 시간, 장소는 협의해서 정할 생각입니다 \n 쪽지 주세요!',
//         regDate: '2022-05-28 18:23:16',
//         category: {
//           code: '1',
//           name: '스터디',
//         },
//         tag: [
//           {
//             text: '모각코',
//           },
//         ],
//       },
//       {
//         id: 4,
//         userId: 'bbb',
//         title: '롤 동료 모집',
//         imageList: [],
//         content: '대충 롤 동료 구하는 글',
//         regDate: '2022-06-01 17:32:19',
//         category: {
//           code: '7',
//           name: '게임',
//         },
//         tag: [
//           {
//             text: '롤',
//           },
//           {
//             text: '게임',
//           },
//           {
//             text: '칼바람',
//           },
//         ],
//       },
//     ],
//   })
// );
