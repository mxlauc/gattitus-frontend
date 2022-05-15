<template>
    lista de pets
    <PetsComponent />
</template>
<script>
// This will also work in `<script setup>`
import PetsComponent from "~~/components/pet/PetsComponent.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        PetsComponent,
    }
}
</script>
