<template>
    lista de pages
    <PagesList />
</template>
<script>
// This will also work in `<script setup>`
import PagesList from "~~/components/admin/pages/PagesList.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        PagesList,
    }
}
</script>
