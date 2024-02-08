import CrmService from '@/services/crm.service.js';

export const crm = {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    ADD_Posts (state, item) {
      state.posts.push(item);
    },
  },
  actions: {
    async postCrm({ commit }, { option, body }) {
      const item = await CrmService.postCrm(option, body);
      commit('ADD_Posts', item);
    },
  }
};