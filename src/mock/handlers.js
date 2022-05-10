import authLogin from './handlers/auth_login';
import authJoin from './handlers/auth_join';
import user from './handlers/user';
import category from './handlers/category';
import userCategory from './handlers/user_category';

const handlers = [authLogin, authJoin, user, category, userCategory];

export default handlers;
