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
}
