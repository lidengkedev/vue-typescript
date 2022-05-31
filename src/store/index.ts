import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import RootStateTypes from '@/store/types/interface'

import permission from './modules/permission'

// 需要一个唯一的key，该key在注册store时需要用到。
// 该key值的使用，在使用store的时候需要引入
export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

// 在调用 createStore 的时候根据将上一步设置的类型定义在此处传递进去 createStore<RootStateTypes>({ ... })
export default createStore<RootStateTypes>({
  state: {
    test: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    permission
  }
})
