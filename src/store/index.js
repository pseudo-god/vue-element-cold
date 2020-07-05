import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters';
import app from './app'
import tags from './app/tags'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tags
  }
  // getters
})

export default store
