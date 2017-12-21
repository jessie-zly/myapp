/**
 * mutations.js
 * author: jessie-zly
 * 2017/12/20
 * description: 处理 state 突变
 */

import * as types from './mutation-types';

export default {
  // loading
  [types.SHOW_LOADING]: (state) => {
    state.booleanLoading = true;
  },
  [types.HIDE_LOADING]: (state) => {
    state.booleanLoading = false;
  },

  // AppName
  [types.SHOW_APPNAME]: (state) => {
    state.booleanAppName = true;
  },
  [types.HIDE_APPNAME]: (state) => {
    state.booleanAppName = false;
  },

  // // nav-menu
  // [types.SHOW_NAVMENU]: (state,payload) => {
  //
  //    console.log(payload);
  //
  //
  //
  //   state.booleanNavMenu = true;
  // },
  // [types.HIDE_NAVMENU]: (state,payload) => {
  //   state.booleanNavMenu = false;
  // },
  //
  // // nav-user
  // [types.SHOW_NAVUSER]: (state) => {
  //   state.booleanNavUser = true;
  // },
  // [types.HIDE_NAVUSER]: (state) => {
  //   state.booleanNavUser = false;
  // },
}
