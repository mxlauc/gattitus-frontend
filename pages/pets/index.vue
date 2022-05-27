<template>
    <NuxtLayout name="main">
        <Head>
            <Title>Descubrir gatos | Gattitus</Title>
        </Head>
        <PetsComponent />
    </NuxtLayout>
</template>
<script>
import PetsComponent from "~~/components/pet/PetsComponent.vue"

export default {
    components: {
        PetsComponent,
    }
}
</script>
