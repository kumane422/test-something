import { ComponentCustomProperties } from "vue"
import { Store } from "vuex"
import { Animal } from "./store/types"

declare module "@vue/runtime-core" {
  // ストアのステートを宣言
  interface State {
    count: number,
    animals: Animal[],
  }
}

// this.$storeの型付け
interface ComponentCustomProperties {
  $store: Store<State>
}