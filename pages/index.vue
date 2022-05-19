<template>
    <div>
        <Head>
            <Title>Gattitus</Title>
        </Head>
        <HomeComponent />
    </div>
</template>
<script>
// This will also work in `<script setup>`
import HomeComponent from "~~/components/sections/HomeComponent.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        HomeComponent,
    }
}
</script>
