import i18n from "~/i18n/i18n"

const { t, tc } = i18n.global

const timeAgo = (date) => {
    const ahora = Date.now()
    let diferencia = Math.trunc(((ahora / 1000) - date) / 60) // en minutos
    if (diferencia < 60) {
        return tc("minutesAgo", diferencia)
    }
    diferencia = Math.trunc(diferencia / 60) // en horas
    if (diferencia < 24) {
        return tc("hoursAgo", diferencia)
    }
    diferencia = Math.trunc(diferencia / 24) // en dias
    if (diferencia < 14) {
        return tc("daysAgo", diferencia)
    }
    const fecha = new Date(date * 1000)
    const mm = fecha.getMinutes()
    const h = fecha.getHours()
    const d = fecha.getDate()
    const m = fecha.getMonth()
    const y = fecha.getFullYear()

    return t("date", { year: y, month: m, day: d, hours: h % 12, minutes: mm < 10 ? "0" + mm : mm, ampm: h > 11 ? "PM" : "AM" })
}

export { t, timeAgo }
