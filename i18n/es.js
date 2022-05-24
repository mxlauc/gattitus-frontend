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
}

export default messages
