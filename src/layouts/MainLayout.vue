<template>
    <audio
        src="https://www.gattitus.com/assets/audio/cat_meow.mp3"
        id="soundMeow"
        preload="auto"
        style="display: none" />
    <div
        class="container-xxl px-0"
        id="app">
        <create-pet-component />
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
                class="col-auto sticky-top ps-4"
                id="sidebar"
                ref="sidebar"
                @click="hideDrawer"
                style="width: 260px; height: 100vh">
                <div class="d-flex flex-column h-100">
                    <div class>
                        <router-link
                            to="/"
                            class="navbar-brand fw-bold text-black d-inline-block p-1 m-3 mb-0"
                            style="font-size: 30px">
                            <img
                                src="/img/icons/icon-72x72.png"
                                style="height: 40px; margin-top: -10px">
                            <span>Gattitus</span>
                        </router-link>
                        <div class="card shadow mt-3 p-2">
                            <ul class="options-sidebar mb-0">
                                <router-link to="/">
                                    <li class="options-sidebar-active">
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
                                        <span>{{ $t('home') }}</span>
                                    </li>
                                </router-link>
                                <router-link :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
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
                                        <span>{{ $t('profile') }}</span>
                                    </li>
                                </router-link>

                                <router-link :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
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
                                        <span>{{ $t('profile') }}</span>
                                    </li>
                                </router-link>
                                <router-link :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
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
                                        <span>{{ $t('profile') }}</span>
                                    </li>
                                </router-link>
                                <router-link :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
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
                                        <span>{{ $t('profile') }}</span>
                                    </li>
                                </router-link>
                                <router-link :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
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
                                        <span>{{ $t('profile') }}</span>
                                    </li>
                                </router-link>
                                <router-link :to="mainStore.userLogged ? ('/@' + mainStore.userLogged.username) : '/'">
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
                                        <span>{{ $t('profile') }}</span>
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div
                    class="px-0 px-sm-4"
                    style="padding-top: 80px">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import CreatePetComponent from "../components/pet/CreatePetComponent.vue"
import { useMainStore } from "@/stores/mainStore"

export default {
    components: {
        HeaderComponent,
        CreatePetComponent,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    mounted () {

    },
    methods: {
        hideDrawer () {
            this.$refs.sidebar.classList.remove("show-sidebar")
            this.$refs.dark.classList.remove("show-dark")
            document.body.style.overflow = "auto"
        }
    }
}
</script>
