<template>
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
        <div
            class="d-flex flex-column h-100"
            style="overflow-y: auto;">
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
                        <slot />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { t } from "~/i18n/i18n2"
import { useMainStore } from "~/store/mainStore"
const mainStore = useMainStore()
</script>
<script>
export default {
    methods: {
        hideDrawer () {
            this.$refs.sidebar?.classList.remove("show-sidebar")
            this.$refs.dark?.classList.remove("show-dark")

            if (process.client) {
                document.body.style.overflow = "auto"
            }
        }
    },
}
</script>
<style>
/* title */
.title{
    font-family: 'Itim', cursive;
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
        overflow-y: auto;
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

</style>
