<template>
    <div
        id="app"
        class="container-xxl px-0">
        <audio
            id="soundMeow"
            src="https://www.gattitus.com/assets/audio/cat_meow.mp3"
            preload="auto"
            style="display: none" />

        <nav
            class="bg-white shadow-sm fixed-top"
            style="min-height: 64px">
            <header-component />
        </nav>

        <div class="row gx-0">
            <div
                id="dark"
                ref="dark"
                @click="hideDrawer" />

            <div
                id="sidebar"
                ref="sidebar"
                class="col-auto sticky-top ps-4"
                style="width: 260px; height: 100vh"
                @click="hideDrawer">
                <div class="d-flex flex-column h-100">
                    <div class>
                        <NuxtLink
                            to="/"
                            class="navbar-brand fw-bold text-black d-inline-block p-1 m-3 mb-0"
                            style="font-size: 30px">
                            <img
                                src="/img/icons/icon-72x72.png"
                                style="height: 40px; margin-top: -10px">
                            <span class="title">Gattitus</span>
                        </NuxtLink>
                        <div class="card shadow mt-3 p-2">
                            <ul class="options-sidebar mb-0">
                                <NuxtLink
                                    to="/"
                                    exact-active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-house"
                                            viewBox="0 0 16 16">
                                            <path
                                                fill-rule="evenodd"
                                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                            <path
                                                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                        </svg>
                                        <span>{{ t('home') }}</span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink
                                    :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'"
                                    active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>{{ t('profile') }}</span>
                                    </li>
                                </NuxtLink>

                                <NuxtLink
                                    :to="'/users'"
                                    active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>Usuarios</span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink
                                    :to="'/pets'"
                                    active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>Gatos</span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>Seguidores</span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>Seguidos</span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>Notificaciones</span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>Más opciones</span>
                                    </li>
                                </NuxtLink>
                                <hr>
                                <NuxtLink
                                    to="/admin/users"
                                    active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>
                                            Usuarios
                                        </span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink
                                    to="/admin/reports/types"
                                    active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>
                                            Tipos de reporte
                                        </span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink
                                    to="/admin/reports/posts"
                                    active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>
                                            Publicaciones reportadas
                                        </span>
                                    </li>
                                </NuxtLink>
                                <NuxtLink
                                    to="/admin/pages"
                                    active-class="options-sidebar-active">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            class="bi bi-person-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>
                                            Pages list
                                        </span>
                                    </li>
                                </NuxtLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div
                    class="px-0 px-sm-4"
                    style="padding-top: 80px">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
import { t } from "~/i18n/i18n2"

const mainStore = useMainStore()

if (process.client) {
    await mainStore.login()
}
await mainStore.setUser()

if (process.client) {
    await import("bootstrap")
}

</script>
<script>
import HeaderComponent from "~/components/HeaderComponent.vue"
import CreatePetComponent from "~/components/pet/CreatePetComponent.vue"

export default {
    components: {
        HeaderComponent,
        CreatePetComponent,
    },
    mounted () {

    },
    methods: {
        hideDrawer () {
            this.$refs.sidebar.classList.remove("show-sidebar")
            this.$refs.dark.classList.remove("show-dark")

            if (process.client) {
                document.body.style.overflow = "auto"
            }
        }
    },
}
</script>
<style lang="sass">
// Required
@import "~~/node_modules/bootstrap/scss/_functions.scss"

// Default variable overrides
$primary: #fd7e14
$body-color: #444
$min-contrast-ratio: 2.5

$btn-border-radius: 20px
$light: #ffffff
//$btn-border-radius-sm: 100px
//$btn-border-radius-lg: 100px

@import "~~/node_modules/bootstrap/scss/_variables.scss"
// Required
@import "~~/node_modules/bootstrap/scss/mixins"
@import "~~/node_modules/bootstrap/scss/bootstrap"

body
    background-color: $gray-200
    line-height: unset

</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Itim&family=Nunito:wght@400;700;800&family=Roboto&family=Rubik&family=Varela+Round&display=swap');
body{
    margin: 0px;
}

:root {
    --popper-theme-background-color: #fff;
    --popper-theme-background-color-hover: #fff;

    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;

    --popper-theme-padding: 0px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, .5);
}
.options-sidebar{
    display: block;
    list-style-type: none;
    padding: 0px;
    color: #999;
}

.options-sidebar  li{
    cursor: pointer;
    list-style-type: none;
    margin: 2px 0px;
    padding: 10px 16px;
    border-radius: 10px;
}

.options-sidebar a {
    text-decoration: none;
}

.options-sidebar  li > span{
    margin-left: 20px;
    font-weight: bold;
}
.options-sidebar  li:hover, .options-sidebar-active li{
    background-color: #f90;
    color: #fff;
}
.options-sidebar  li:hover > svg, .options-sidebar-active > svg{
    color: #fff !important;
}
.image-tool__caption{
    display: none;
}

/* del html */
* {
    font-family: 'Roboto', sans-serif;
}

.f-fredoka {
    font-family: 'Fredoka One', cursive;
}
.f-rubick label, .f-rubick p, .f-rubick span{
    font-family: 'Rubik', sans-serif !important;
}

.card{
    border-radius: 0.7rem !important;
    border: unset !important;
}

.rounded-5{
    border-radius: 0.7rem !important;
}

@media (max-width: 575.98px) {
    .card{
        border-radius: unset !important;
    }
}
@media (max-width: 1199.98px) {
    #sidebar{
        background-color: #fff;
        position: fixed;
        top: 0px;
        left: 0px;
        transform: translateX(-100%);
        transition: transform 0.4s ease-out;
        z-index: 1200;
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
        padding-left: 0px !important;
    }
    #sidebar .shadow{
        box-shadow: unset !important;
    }
    #dark{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        z-index: 1100;
        display: none;
        opacity: 0;
        transition:  opacity 0.4s ease-out;
    }
    .show-sidebar{
        transform: translateX(0%) !important;
    }
    .show-dark{
        display: block !important;
        opacity: 0.5 !important;
    }
}

/* custom scroll */
.custom-scroll::-webkit-scrollbar {
    width: 8px;
}
.custom-scroll::-webkit-scrollbar-thumb {
    background-color: #0004;
    border-radius: 4px;
}
 .custom-scroll::-webkit-scrollbar-thumb:hover {
      background-color: #0006;
  }

.custom-scroll::-webkit-scrollbar-track-piece:start {
    background: transparent;
}

.custom-scroll::-webkit-scrollbar-track-piece:end {
    background: transparent;
}

/* title */
  .title{
    font-family: 'Itim', cursive;
}
</style>
