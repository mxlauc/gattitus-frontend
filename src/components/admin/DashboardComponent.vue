<template>
    <h1>Dashboard</h1>
    <router-link to="/admin/users">
        Usuarios
    </router-link>
    <router-link to="/admin/reports/types">
        Tipos de reporte
    </router-link>
    <router-link to="/admin/reports/posts">
        Publicaciones reportadas
    </router-link>
    <router-link to="/admin/pages">
        Pages list
    </router-link>

    <br>
    <router-view />
</template>
