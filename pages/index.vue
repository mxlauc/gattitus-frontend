<template>
    <div>
        <Head>
            <Title>Gattitus</Title>
        </Head>
        <NuxtLayout
            name="main"
            v-if="mainStore.userLogged || true">
            <HomeComponent />
        </NuxtLayout>
        <NuxtLayout v-else>
            <LandingPageComponent />
        </NuxtLayout>
    </div>
</template>
<script setup>
import { useMainStore } from "~~/store/mainStore"
const mainStore = useMainStore()
</script>
<script>
import HomeComponent from "~~/components/sections/HomeComponent.vue"
import LandingPageComponent from "~/components/sections/LandingPageComponent.vue"

export default {
    components: {
        HomeComponent,
        LandingPageComponent,
    }
}
</script>
