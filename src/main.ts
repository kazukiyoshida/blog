import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import constant from './constants'
import { createI18n } from 'vue-i18n'
import localesEn from './locales/en.json'
import localesJa from './locales/ja.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueElementLoading from "vue-element-loading";

library.add(faTwitter, faGithub, faInstagram)

const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'ja',
  messages: {
    en: localesEn,
    ja: localesJa
  },
})

const app = createApp(App)
app.provide('$C', constant)
app
  .component("fa", FontAwesomeIcon)
  .component("loading", VueElementLoading)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
