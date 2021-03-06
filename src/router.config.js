/**
 * router.config.js
 * author: jessie-zly
 * 2017/12/16
 * description: 路由模块
 */

/***********************************
 *                                 *
 *            路由引入              *
 *                                 *
 **********************************/

// home
import home from './components/home/AppHome';
// detail
import detail from './components/film/AppDetail';


// menu
import menu from './components/common/AppMenu';


// film
import film from './components/film/AppFilm';
import playing from './components/film/FilmPlaying'; // 子路由--> playing
import coming from './components/film/FilmComing'; // 子路由--> coming


// user
import user from './components/user/AppUser';
import origin from './components/user/UserOrigin'; // 子路由--> origin
import login from './components/user/UserLogin'; // 子路由--> login
import reg from './components/user/UserReg'; // 子路由--> reg
import order from './components/user/UserOrder'; // 子路由--> reg


// error
import error from './components/common/AppError';


// 配置路由
const routes = [
  {path: '/menu', component: menu},
  {path: '/home', component: home},
  {
    path: '/film',
    component: film,
    children: [
      {path: 'playing', component: playing},
      {path: 'coming', component: coming},
      {path: '/', redirect: '/film/playing'}
    ]
  },
  {path: '/detail/:id', component: detail},
  {
    path: '/user',
    component: user,
    children: [
      {path: 'origin', component: origin},
      {path: 'login', component: login},
      {path: 'reg', component: reg},
      {path: 'order', component: order},
      {path: '/', redirect: '/user/origin'},
    ]
  },
  {path: '/', redirect: '/home'},
  {path: '*', component: error},
];

// 暴露接口
export default {
  routes,
  mode: 'history'
};
