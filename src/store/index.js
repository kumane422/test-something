import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// localStorageに保存されている値を取得
const savedCount = localStorage.getItem('count')

const store = new Vuex.Store({
  state: {
    count: savedCount ? JSON.parse(savedCount): 0
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  }
})

// mutationの後に呼ばれる
store.subscribe((mutation, state) => {
  localStorage.setItem('count', JSON.stringify(state.count))
})

export default store
