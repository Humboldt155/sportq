import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// we first import the module

import sport from './sport'
import place from './place'

const store = new Vuex.Store({
  modules: {
    // then we reference it
    sport,
    place
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./sport'], () => {
    const newSport = require('./sport').default
    store.hotUpdate({ modules: { sport: newSport } })
  })
}

export default store

//
// export default function (/* { ssrContext } */) {
//   const Store = new Vuex.Store({
//     modules: {
//       sport
//     }
//   })
//
//   return Store
// }
