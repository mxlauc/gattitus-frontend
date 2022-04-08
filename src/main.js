import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import { createPinia } from "pinia"
import VWave from "v-wave"
import mixin from "./mixin"

import { createI18n } from "vue-i18n"

import messages from "./i18n/index.js"

const i18n = createI18n({
    locale: "es",
    fallbackLocale: "en",
    messages
})

createApp(App).mixin(mixin).use(VWave).use(createPinia()).use(i18n).use(router).mount("#app")
