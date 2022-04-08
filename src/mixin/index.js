import * as bootstrap from "bootstrap"

const mixin = {
    methods: {
        timeAgo (date) {
            const ahora = Date.now()
            let diferencia = Math.trunc(((ahora / 1000) - date) / 60) // en minutos
            if (diferencia < 60) {
                return this.$tc("minutesAgo", diferencia)
            }
            diferencia = Math.trunc(diferencia / 60) // en horas
            if (diferencia < 24) {
                return this.$tc("hoursAgo", diferencia)
            }
            diferencia = Math.trunc(diferencia / 24) // en dias
            if (diferencia < 14) {
                return this.$tc("daysAgo", diferencia)
            }
            const fecha = new Date(date * 1000)
            const mm = fecha.getMinutes()
            const h = fecha.getHours()
            const d = fecha.getDate()
            const m = fecha.getMonth()
            const y = fecha.getFullYear()

            return this.$t("date", { year: y, month: m, day: d, hours: h % 12, minutes: mm < 10 ? "0" + mm : mm, ampm: h > 11 ? "PM" : "AM" })
        },
        mostrarLoginModal () {
            const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector("#loginModal"))
            modal.show()
        }
    }
}

export default mixin