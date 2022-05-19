<template>
    <NuxtLayout name="main">
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
