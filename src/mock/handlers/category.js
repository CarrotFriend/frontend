import { rest } from 'msw';

export default rest.get('/category', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json({
      state: 200,
      data: [
        {
          code: '1',
          name: '스터디',
        },
        {
          code: '2',
          name: '여행',
        },
        {
          code: '3',
          name: '교통',
        },
        {
          code: '4',
          name: '구인/구직',
        },
        {
          code: '5',
          name: '독서',
        },
        {
          code: '6',
          name: '맛집 탐방',
        },
      ],
    })
  );
});
