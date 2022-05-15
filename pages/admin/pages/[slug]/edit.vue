<template>
    <PageEdit />
</template>
<script>
// This will also work in `<script setup>`
import PageEdit from "~/components/admin/pages/PageEdit.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        PageEdit,
    }
}
</script>
