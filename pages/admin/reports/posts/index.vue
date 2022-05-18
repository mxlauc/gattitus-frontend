<template>
    <ReportedPostsList />
</template>
<script>
// This will also work in `<script setup>`
import ReportedPostsList from "~~/components/admin/reports/ReportedPostsList.vue"

definePageMeta({
    layout: "main",
})
export default {
    components: {
        ReportedPostsList,
    }
}
</script>
