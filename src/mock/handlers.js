import auth_login from './handlers/auth_login';
import auth_join from './handlers/auth_join';
import auth_logout from './handlers/auth_logout';
import user from './handlers/user';
import category from './handlers/category';
import user_category from './handlers/user_category';
import post_category_id from './handlers/post_category_id';
import post_detail from './handlers/post_detail';
import post from './handlers/post';
import verify from './handlers/verify';
import post_mypost from './handlers/post_mypost';
import user_put from './handlers/user_put';
import user_delete from './handlers/user_delete';

const handlers = [
  auth_login,
  auth_join,
  auth_logout,
  user,
  category,
  user_category,
  post_category_id,
  post_detail,
  post,
  verify,
  post_mypost,
  user_put,
  user_delete,
];

export default handlers;
