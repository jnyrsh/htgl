import Vue from 'vue'
import Vuex from 'vuex'

// 引入插件 1
// import createPersistedState from 'vuex-persistedstate'

//引入持久化 2
// import VuexPersist from "vuex-persist";

Vue.use(Vuex)


// 实例化 2
// let vuexLocal = new VuexPersist({
//   storage: window.localStorage,
//   key: "xiaomi"
// })



export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  // 1
  // plugins: [createPersistedState()]

  // 2
  // plugins: [vuexLocal.plugin]
})
