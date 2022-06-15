import { rest } from 'msw';

export default rest.get('/post/detail/*', (req, res, ctx) => {
  const pathArr = req.url.pathname.split('/');
  if (pathArr[pathArr.length - 1] === '3') {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 3,
          title: '모각코 모집',
          imageList: [
            {
              src: 'https://www.ciokorea.com/sites/default/files/images/GettyImages-522146634.jpg',
            },
          ],
          content:
            '모각코 하실분 구해요~~~ \n충대 정문이나 궁동쪽 카페에서 같이 모여서 코딩 얘기도 하고 각자 코딩도 할 생각입니다 \n시간, 장소는 협의해서 정할 생각입니다 \n 쪽지 주세요!',
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
          user: {
            id: '1',
            nickName: '성훈123',
            degree: '36.5',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '35') {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 35,
          title: '싸피 면접 스터디',
          imageList: [
            {
              src: 'https://www.ssafy.com/swp/images/sns_img.png',
            },
          ],
          content:
            '싸피 면접 스터디 같이 하실분 구합니다. \n온라인 줌으로 하기 원합니다. 4~5명 정도 모을 예정이고 \n시간은 모인 분들과 협의해서 정할 생각입니다',
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
          user: {
            id: '2',
            nickName: '유비123',
            degree: '42.3',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '41') {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 41,
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
          user: {
            id: '3',
            nickName: '조_조',
            degree: '32.1',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '36') {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 36,
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
          user: {
            id: '4',
            nickName: '관우',
            degree: '37.5',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '1') {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 1,
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
            '봉명동에서 저녁 간단히 드실분 구해요 \n금요일이니 고기나 회 든든하게 먹고 싶네요 \n6~7시쯤 영풍 문고 앞에서 만나면 될거같습니다.',
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
          user: {
            id: '5',
            nickName: '장비',
            degree: '33.4',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '13') {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 13,
          title: '한밭대 근처 저녁 같이 드실 분',
          imageList: [
            {
              src: 'http://openimage.interpark.com/goods_image_big/6/2/0/2/7706076202_l.jpg',
            },
          ],
          content: '혼밥 질렸습니다. 한밭대 저녁 같이 먹어요!! \n쪽지 주세욧',
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
          user: {
            id: '6',
            nickName: '조자12룡',
            degree: '36.7',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '11') {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 11,
          title: '논산 딸기 드시러 가실분 카풀',
          imageList: [
            {
              src: 'https://i.ytimg.com/vi/4CEGDMoNwrM/maxresdefault.jpg',
            },
          ],
          content:
            '논산 딸기 축제 같이 가서 딸기 부수고 오실 분 \n포스터의 날짜에 갈거고요 쪽지주세요',
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
          user: {
            id: '7',
            nickName: 'ㅎㅎ제갈량',
            degree: '36.5',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '4') {
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
            user: {
              id: '8',
              nickName: '손권',
              degree: '36.9',
            },
          },
        ],
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '2') {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 2,
          title: '자전거 엑스포!',
          imageList: [],
          content:
            '충대 정문에서 출발해서 엑스포까지 자전거 분 구합니다! \n각자 저녁 먹고 8시에 만나면 될 거 같아요',
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
          user: {
            id: '9',
            nickName: '손책;;',
            degree: '37.6',
          },
        },
      })
    );
  }
  if (pathArr[pathArr.length - 1] === '29') {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        state: 200,
        result: 'success',
        message: null,
        data: {
          id: 29,
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
          user: {
            id: '10',
            nickName: '주유소유주',
            degree: '39.9',
          },
        },
      })
    );
  }
});
