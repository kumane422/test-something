import Vue from 'vue'
import Vuex from 'vuex'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { Animal } from '@/store/types'

Vue.use(Vuex)

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FB_APP_ID,
  measurementId: process.env.VUE_APP_FB_MEASUREMENT_ID
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// localStorageに保存されている値を取得
const savedCount = localStorage.getItem('count')

const store = new Vuex.Store({
  state: {
    count: savedCount ? JSON.parse(savedCount): 0,
    animals: [],
  },
  getters: {
    count: state => state.count,
    animals: state => state.animals,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    resetCount(state) {
      state.count = 0
    },
    getAnimals(state, animals) {
      state.animals = animals
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    resetCount({ commit }) {
      commit('resetCount')
    },
    async getAnimals({ commit }) {
      const animals: Animal[] = []
      const querySnapshot = await getDocs(collection(db, 'animals'))
      querySnapshot.forEach(element => {
        const { name, sound } = element.data()
        animals.push({ name, sound })
      })
      commit('getAnimals', animals)
    },
  }
})

// mutationの後に呼ばれる
store.subscribe((mutation, state) => {
  localStorage.setItem('count', JSON.stringify(state.count))
})

export default store
