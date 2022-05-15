<template>
    <PageCreate />
</template>
<script>
// This will also work in `<script setup>`
import PageCreate from "~~/components/admin/pages/PageCreate.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        PageCreate,
    }
}

</script>
