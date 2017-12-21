/**
 * index.js
 * author: jessie-zly
 * 2017/12/19
 * description: 状态管理
 */


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

export default new Vuex.Store({
  actions, mutations, getters, state
});
