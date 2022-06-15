import { rest } from 'msw';

export default rest.get('/post/category/*', (req, res, ctx) => {
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
          {
            id: 35,
            userId: 'ddd',
            title: '싸피 면접 스터디',
            imageList: [
              {
                src: 'https://www.ssafy.com/swp/images/sns_img.png',
              },
            ],
            content:
              '싸피 면접 스터디 같이 하실분 구합니다. \n 온라인 줌으로 하기 원합니다. 4~5명 정도 모을 예정이고 \n 시간은 모인 분들과 협의해서 정할 생각입니다',
            regDate: '2022-06-11 11:33:26',
            category: {
              code: '1',
              name: '스터디',
            },
            tag: [
              {
                text: '싸피',
              },
              {
                text: '스터디',
              },
            ],
          },
        ],
      })
    );
  }
  if (req.url.pathname.endsWith('2')) {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: [
          {
            id: 41,
            userId: 'z4z',
            title: '내일 부산 같이 다니실 분',
            imageList: [],
            content:
              '부산 같이 다니실분 구합니다! 제가 여자라 여자분이셨으면 좋겠어요. 자세한 건 쪽지 주세요!!',
            regDate: '2022-06-08 08:28:18',
            category: {
              code: '2',
              name: '여행',
            },
            tag: [
              {
                text: '부산',
              },
              {
                text: '여행',
              },
            ],
          },
          {
            id: 36,
            userId: 'd2d',
            title: '고성 여행',
            imageList: [],
            content:
              '고성은 차가 없으면 힘들다고 하더라고요. \n이번 주말 3분 정도 렌트해서 같이 다니실분 구합니다!',
            regDate: '2022-06-07 06:21:24',
            category: {
              code: '2',
              name: '여행',
            },
            tag: [
              {
                text: '고성',
              },
              {
                text: '렌트',
              },
              {
                text: '여행',
              },
            ],
          },
        ],
      })
    );
  }
  if (req.url.pathname.endsWith('6')) {
    return res(
      ctx.status(200),
      ctx.delay(1000),
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
          {
            id: 13,
            userId: 'zws',
            title: '한밭대 근처 저녁 같이 드실 분',
            imageList: [
              {
                src: 'http://openimage.interpark.com/goods_image_big/6/2/0/2/7706076202_l.jpg',
              },
            ],
            content:
              '혼밥 질렸습니다. 한밭대 저녁 같이 먹어요!! \n 쪽지 주세욧',
            regDate: '2022-05-31 12:24:37',
            category: {
              code: '6',
              name: '맛집 탐방',
            },
            tag: [
              {
                text: '한밭대',
              },
              {
                text: '저녁',
              },
            ],
          },
          {
            id: 11,
            userId: 'abs',
            title: '논산 딸기 드시러 가실분 카풀',
            imageList: [
              {
                src: 'https://i.ytimg.com/vi/4CEGDMoNwrM/maxresdefault.jpg',
              },
            ],
            content:
              '논산 딸기 축제 같이 가서 딸기 부수고 오실 분 \n 포스터의 날짜에 갈거고요 쪽지주세요',
            regDate: '2022-06-02 02:22:22',
            category: {
              code: '6',
              name: '맛집 탐방',
            },
            tag: [
              {
                text: '논산',
              },
              {
                text: '딸기',
              },
              {
                text: '카풀',
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
          {
            id: 29,
            userId: 'abc',
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
//           id: '6',
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
//           id: '8',
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
//           id: '1',
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
//           id: '7',
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
