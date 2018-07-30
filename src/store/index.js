import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// we first import the module
import sport from './sport'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      sport
    }
  })

  return Store
}
