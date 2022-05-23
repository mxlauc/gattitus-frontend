<template>
    <div>
        <Head>
            <Link
                rel="manifest"
                href="/gattitus.webmanifest" />
            <Script src="/app.js"></Script>
            <Link
                rel="icon"
                href="/img/icons/icon-72x72.png"
                type="image/png" />
        </Head>
        <audio
            id="soundMeow"
            src="https://www.gattitus.com/assets/audio/cat_meow.mp3"
            preload="auto"
            style="display: none" />
        <NuxtPage />
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
const mainStore = useMainStore()

if (process.server) {
    await mainStore.login()
}
if (process.server) {
    await mainStore.setUser()
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
$btn-border-radius-sm: 20px
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

@media (max-width: 575.98px) {
    .card{
        border-radius: unset !important;
    }
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
</style>
