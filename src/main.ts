import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createI18n } from 'vue-i18n'
import localesEn from './locales/en.json'
import localesJa from './locales/ja.json'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter)

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages: {
    en: localesEn,
    ja: localesJa
  },
})

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
