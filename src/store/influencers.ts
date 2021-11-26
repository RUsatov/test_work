import FieldService from '@/FieldService';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { InfluencerType, Sort, SortDirection } from '@/models/types';

class State {
  influencers: InfluencerType[] = [];
  direction: SortDirection = '';
  sortBy: Sort = '';
}

const mutations = <MutationTree<State>>{
  setInfluencers(state, influencers) {
    state.influencers = influencers;
  },
  setSortDirection(state, direction) {
    state.direction = direction;
  },
  setSortBy(state, sortBy) {
    state.sortBy = sortBy;
  },
  sortInfluencers(state) {
    state.influencers = state.influencers.sort((userA, userB) => {
      if (state.sortBy && state.direction === 'desc') {
        return userA[state.sortBy] > userB[state.sortBy] ? 1 : -1;
      } else if (state.sortBy) {
        return userA[state.sortBy] < userB[state.sortBy] ? 1 : -1;
      } else {
        return 0;
      }
    });
  },
};

const actions = <ActionTree<State, any>>{
  async getInfluencers({ commit }): Promise<void> {
    const fieldService = new FieldService();
    const influencers = await fieldService.getInfluencers();
    commit('setInfluencers', influencers.map(user => (
      {
        ...user,
        erPercent: Math.floor((user.er / user.followers) * 100),
      }),
    ));
  },
};

const getters = <GetterTree<State, any>>{
  influencers: (state): InfluencerType[] => state.influencers,
  direction: (state): SortDirection => state.direction,
  sortBy: (state): Sort => state.sortBy,
};

const Influencers = {
  namespaced: true,
  state: new State(),
  mutations,
  actions,
  getters,
};

export default Influencers;
