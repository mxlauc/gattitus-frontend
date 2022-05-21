<template>
    <div class="container-xxl px-0">
        <nav
            class="bg-white shadow-sm fixed-top"
            style="min-height: 64px">
            <header-component />
        </nav>

        <div class="row gx-0">
            <Sidebar>
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
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path
                                fill-rule="evenodd"
                                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
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
                    to="/help"
                    active-class="options-sidebar-active">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-person-fill"
                            viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <span>
                            Ayuda
                        </span>
                    </li>
                </NuxtLink>
            </Sidebar>
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
import HeaderComponent from "~/components/HeaderComponent.vue"
import Sidebar from "~/components/Sidebar.vue"
import { useMainStore } from "~/store/mainStore"
import { t } from "~/i18n/i18n2"

const mainStore = useMainStore()
</script>
