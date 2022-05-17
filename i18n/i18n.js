import { createI18n } from "vue-i18n"
import messages from "~/i18n/index.js"

export default createI18n({
    locale: "es",
    fallbackLocale: "en",
    messages,
})
