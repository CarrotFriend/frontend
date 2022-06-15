import authLogin from './handlers/auth_login';
import authJoin from './handlers/auth_join';
import user from './handlers/user';
import category from './handlers/category';
import userCategory from './handlers/user_category';
import post_category_id from './handlers/post_category_id';
import post_detail from './handlers/post_detail';

const handlers = [
  authLogin,
  authJoin,
  user,
  category,
  userCategory,
  post_category_id,
  post_detail,
];

export default handlers;
