/**
 * actions.js
 * author: jessie-zly
 * 2017/12/20
 * description:
 */

import * as types from './mutation-types';

export default {
  // loading 切换
  showLoading: ({commit}) => {
    commit(types.SHOW_LOADING);
  },
  hideLoading: ({commit}) => {
    commit(types.HIDE_LOADING);
  },

  // AppName 切换
  showAppName: ({commit}) => {
    commit(types.SHOW_APPNAME);
  },
  hideAppName: ({commit}) => {
    commit(types.HIDE_APPNAME);
  },

  // // nav-menu classname 切换
  // showNavMenu: ({commit,state}, payload) => {
  //   //
  //   const originClassName=payload;
  //
  //    console.log(originClassName,1111);
  //
  //   commit(types.SHOW_NAVMENU, payload);
  // },
  // hideNavMenu: ({commit,state}, payload) => {
  //    console.log(state,2222);
  //     console.log(payload,3333);
  //   commit(types.HIDE_NAVMENU, payload);
  // },
  //
  // // nav-user classname 切换
  // showNavUser: ({commit}) => {
  //   commit(types.SHOW_NAVUSER);
  // },
  // hideNavUser: ({commit}) => {
  //   commit(types.HIDE_NAVUSER);
  // },
}
