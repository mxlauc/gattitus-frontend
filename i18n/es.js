const messages = {
    home: "Inicio",
    profile: "Mi perfil",
    myPets: "Mis gatos",
    todayThereIsNewPosts: "Hoy hay nuevas publicaciones para ver",

    minutesAgo: "Hace un momento | Hace un minuto | Hace {n} minutos",
    hoursAgo: "Hace una hora | Hace {n} horas",
    daysAgo: "Hace un día | Hace {n} días",
    monthsName: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],

    date: ({ named, linked }) => `${named("day")} de ${linked(`monthsName.${named("month")}`)} del ${named("year")} a las ${named("hours")}:${named("minutes")} ${named("ampm")}`,
    seePost: "Ver publicación",
    
    deleteComment: "Eliminar publicación",
    rusDeleteComment: "¿Esta seguro de eliminar este comentario?",
    cancel: "Cancelar",
    delete: "Eliminar",
    editComment: "Editar comentario",
    save: "Guardar",
    search: "Buscar",
    like: "Me encanta",
    peopleLikedComment: "These people liked this comment",
    previousComments: "Comentarios anteriores",
    timeAgo: ({named, linked}) => {
        const ahora = Date.now()
        const date = named("date");

        let diferencia = Math.trunc(((ahora / 1000) - date) / 60) // en minutos
        if (diferencia < 60) {
            return linked("message.minutesAgo", diferencia)
        }
        diferencia = Math.trunc(diferencia / 60) // en horas
        if (diferencia < 24) {
            return linked("hoursAgo", diferencia);
        }
        diferencia = Math.trunc(diferencia / 24) // en dias
        if (diferencia < 14) {
            return linked("daysAgo", diferencia)
        }
        const fecha = new Date(date * 1000)
        const mm = fecha.getMinutes()
        const h = fecha.getHours()
        const d = fecha.getDate()
        const m = fecha.getMonth()
        const y = fecha.getFullYear()

        return linked("date", { year: y, month: m, day: d, hours: h % 12, minutes: mm < 10 ? "0" + mm : mm, ampm: h > 11 ? "PM" : "AM" })
    },
}

export default messages
