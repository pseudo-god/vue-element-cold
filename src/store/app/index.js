const state = {
  flexibleObj: {
    isCollapse: false,
    elAside: '194px',
    mainStyle: {
      marginLeft: '195px'
    }
  }
};

const mutations = {
  SETFLEXIBLE: (state, obj) => {
    state.flexibleObj = obj;
  }
};

const actions = {
  setFlexible({ commit }, obj) {
    commit('SETFLEXIBLE', obj);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
