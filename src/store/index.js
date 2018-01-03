import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import modalOptions from './modules/modal';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	modalOptions,
    user
  },
  getters
});


export default store;
