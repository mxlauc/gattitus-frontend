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
                    v-if="mainStore.userLogged"
                    :to="'/@' + mainStore.userLogged.username"
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
                            viewBox="0 0 1000 1000"
                            enable-background="new 0 0 1000 1000">
                            <g>
                                <path d="M491.3,926.6c-45.7,0.4-86.8,9.6-128,18.3c-39.3,8.3-78.4,16.9-119,16.8c-86.2-0.3-135.1-78.1-108.8-155.3c15.7-46.2,44.1-83.9,80.2-115.7c30.8-27.1,62.5-53.2,87.5-86.1c18.6-24.5,36.2-49.8,54.2-74.7c17.6-24.5,35.4-48.9,59-68.1c41.4-33.7,87.9-44,139-27.8c25.9,8.2,45.7,25.9,60.6,48c14.9,22,27.7,45.4,41.3,68.3c34,57.5,74.8,109.6,123.6,155c33.5,31.2,60.1,66.5,70.2,112.3c6,27.4,4.1,54.2-6.3,80.5c-16.6,42.2-47.1,64.1-92.3,65.1c-34.4,0.8-67.7-6.3-101.3-12.2c-46.7-8.2-93.5-15.8-140.4-23.3C503.4,926.5,495.6,926.8,491.3,926.6" />
                                <path d="M800,196.7c-1.7,53.8-17.2,104.7-54,147.8c-13.2,15.5-28.9,28-47.3,36.8c-43.2,20.7-90,10.9-121.3-25.6c-26.6-31-38-68-39.7-108.2c-2.6-62.2,13.9-118.3,55.3-165.5c22-25.1,49-42.6,82.9-45c43.7-3.1,74.9,18.5,97.4,54.5C792.8,122.9,799.6,157.9,800,196.7" />
                                <path d="M463.6,242.6c-0.7,39.2-7.8,73.5-27.1,104.3c-36.3,57.8-101.4,70.6-156.1,30.1c-41.7-30.8-64.1-74.1-74.5-124c-9.2-44.1-7.2-87.7,11.2-129.4c14.6-33,36.8-59,72.4-69.3c41.8-12.1,77.4,2.3,107.9,30.6c39.1,36.2,58.1,82.7,64.5,135.1C462.9,228.5,463.2,237.2,463.6,242.6" />
                                <path d="M990,460.4c-3,55.8-24.7,110-74.5,150.3c-24.3,19.7-52.2,30.4-83.8,23.3c-37.9-8.5-57.3-36.3-67.3-71.7C744.1,490,779.4,396,841.7,354.7c21.5-14.2,44.8-22.2,70.6-18.1c30.5,4.8,50.8,23.8,64,51.1C986.2,408.3,989.8,430.4,990,460.4" />
                                <path d="M241.4,519.3c-0.2,24.1-4.2,47.3-15.5,68.8c-22.6,42.9-66.9,59.1-111.3,40.3c-37-15.7-62.5-43.8-80.3-79.1C10,501.1,1.2,450.7,20.5,398.5c12.6-34.1,36.4-56.5,73.8-59.9c26.3-2.4,49.6,7.1,70.2,22.9c44.6,34.1,67.7,80.7,75.4,135.7c0.7,5.1,1.1,10.2,1.4,15.4C241.6,514.8,241.4,517.1,241.4,519.3" />
                            </g>
                        </svg>
                        <span>Gatos</span>
                    </li>
                </NuxtLink>
                <hr>
                <!--
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
                -->
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
