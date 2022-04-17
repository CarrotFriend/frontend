import { rest } from 'msw';

const handlers = [
  rest.post('/auth/login', (req, res, ctx) => {
    const { userId, pw } = req.body;

    // 현재 시간에서 15분 후
    const _15MinFromNow = new Date();
    _15MinFromNow.setMinutes(_15MinFromNow.getMinutes() + 15);

    if (userId === 'abc' && pw === '1234') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          state: 200,
          data: {
            grantType: 'Bearer',
            accessToken:
              'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjMiLCJhdXRoIjoiVVNFUl9ST0xFIiwiaWF0IjoxNjQ3NTQzNjk4LCJleHAiOjE2NDc1NDU0OTh9.FYwtEcgwc6rNPSdSdHHTArPrbairve3RlGs1t1LUjWF1WV0MR_a_cG4DM3kB2h5wcOD02ARC1plrJBsasFCeHw',
            refreshToken:
              'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NDc1NDM2OTgsImV4cCI6MTY0ODE0ODQ5OH0._Ni_NyxB8WddyJRCAPyE7NfbCV0MA01oD7DmMoE9T2Lr1ciorAU8VhS9DCs5FlT_sJPHye0uVZ60C_ru0mAZ-A',
            accessTokenExpireTime: _15MinFromNow,
          },
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        state: 401,
        data: null,
      })
    );
  }),

  rest.post('/auth/join', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        state: 200,
      })
    );
  }),
];

export default handlers;
