const state = {
  tags: []
};

const mutations = {
  SETTAG: (state, tag) => {
    const isExist = state.tags.some((item) => item.name === tag.name);
    if (!isExist) {
      state.tags.push(tag);
    }
  },
  DELTAG: (state, tag) => {
    const index = state.tags.findIndex((item) => item.name === tag.name);
    console.log('index', index);
    state.tags.splice(index, 1);
  }
};

const actions = {
  setTag({ commit }, tag) {
    commit('SETTAG', tag);
  },
  delTag({ commit, state }, tag) {
    return new Promise((resolve) => {
      commit('DELTAG', tag);
      resolve(state.tags);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
