import Vue from 'vue'
import Vuex from 'vuex'

import {login} from './login'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

import { store } from 'quasar/wrappers';

// export default new Vuex.Store({
//   strict: process.env.DEV === 'true',
//   // modules: {
//   // 	login
//   // }
// });

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      login
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV === 'true',
  });

  return Store;
}

// export default store( function (/* { ssrContext } */) {
//   const Store = new Vuex.Store({
//     modules: {
//       // example
//     },

//     // enable strict mode (adds overhead!)
//     // for dev mode only
//     strict: process.env.DEV === 'true',
//   })

//   return Store
// }
// )