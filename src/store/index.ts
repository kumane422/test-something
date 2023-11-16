import Vue from 'vue'
import Vuex from 'vuex'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { Animal } from '@/store/types'

Vue.use(Vuex)

const firebaseConfig = {
  apiKey: "AIzaSyDzWTJszr4ecrxwifSBU_XWPPo0Ppkm1i4",
  authDomain: "test-something-db.firebaseapp.com",
  projectId: "test-something-db",
  storageBucket: "test-something-db.appspot.com",
  messagingSenderId: "349501994541",
  appId: "1:349501994541:web:3a330b17f54ecd0e176aa4",
  measurementId: "G-6YRHW4W42Z"
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
