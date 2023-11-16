import Vue from 'vue'
import { initializeApp } from 'firebase/app'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDzWTJszr4ecrxwifSBU_XWPPo0Ppkm1i4",
  authDomain: "test-something-db.firebaseapp.com",
  projectId: "test-something-db",
  storageBucket: "test-something-db.appspot.com",
  messagingSenderId: "349501994541",
  appId: "1:349501994541:web:3a330b17f54ecd0e176aa4",
  measurementId: "G-6YRHW4W42Z"
}

initializeApp(firebaseConfig)
Vue.use(VueGtag, { config: { id: 'G-6YRHW4W42Z' } }, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
