<template>
    <router-view />
</template>
<script>
import { useMainStore } from "./stores/mainStore"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    mounted () {
        this.mainStore.login()
    }
}
</script>
<style lang="sass">
// Required
@import "@/../node_modules/bootstrap/scss/_functions.scss"

// Default variable overrides
$primary: #fd7e14
$body-color: #444
$min-contrast-ratio: 2.5

$btn-border-radius: 20px
$light: #ffffff
//$btn-border-radius-sm: 100px
//$btn-border-radius-lg: 100px

@import "@/../node_modules/bootstrap/scss/_variables.scss"
// Required
@import "@/../node_modules/bootstrap/scss/mixins"
@import "@/../node_modules/bootstrap/scss/bootstrap"

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
.options-sidebar  li:hover, .options-sidebar-active{
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
