import authLogin from './handlers/auth_login';
import authJoin from './handlers/auth_join';
import user from './handlers/user';
import category from './handlers/category';
import userCategory from './handlers/user_category';
import post_category_id from './handlers/post_category_id';
import post_detail from './handlers/post_detail';
import post from './handlers/post';
import verify from './handlers/verify';
import post_mypost from './handlers/post_mypost';

const handlers = [
  authLogin,
  authJoin,
  user,
  category,
  userCategory,
  post_category_id,
  post_detail,
  post,
  verify,
  post_mypost,
];

export default handlers;
