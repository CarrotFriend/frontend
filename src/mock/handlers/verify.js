import { rest } from 'msw';

export default rest.get('/verify/*', (req, res, ctx) => {
  // idx === 2 -> userid / idx === 3 -> 'abc'
  const pathArr = decodeURI(req.url.pathname).split('/');
  if (pathArr[2] === 'userId' && pathArr[3] === 'abc') {
    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json({
        state: 400,
        result: 'success',
        message: null,
        data: {},
        error: [],
      })
    );
  }
  if (pathArr[2] === 'nickName' && pathArr[3] === '조조수학') {
    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json({
        state: 400,
        result: 'success',
        message: null,
        data: {},
        error: [],
      })
    );
  }

  if (pathArr[2] === 'email' && pathArr[3] === 'pch468@naver.com') {
    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json({
        state: 400,
        result: 'success',
        message: null,
        data: {},
        error: [],
      })
    );
  }

  return res(
    ctx.status(200),
    ctx.delay(300),
    ctx.json({
      state: 200,
      result: 'success',
      message: null,
      data: {},
      error: [],
    })
  );
});
