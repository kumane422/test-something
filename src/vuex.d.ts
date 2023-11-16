import { ComponentCustomProperties } from "vue"
import { Store } from "vuex"

declare module "@vue/runtime-core" {
  // ストアのステートを宣言
  interface State {
    count: number
  }
}

// this.$storeの型付け
interface ComponentCustomProperties {
  $store: Store<State>
}