import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
});

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n;
};

export { i18n };



// import { AxiosInstance } from 'axios';

// declare module 'vue/types/vue' {
// interface Vue {
// $axios: AxiosInstance;
// }
// }

// import { boot } from 'quasar/wrappers';

// // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// // @ts-ignore
// export default boot( ({ app }) => {
//   // Set i18n instance on app
//   app.i18n = i18n
// }

// export { i18n }
// )
