import Vue from 'vue';
import Vuex from 'vuex';
import influencers from '@/store/influencers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    influencers,
  },
});
