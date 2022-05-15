<template>
    lista de rerpots types
    <ReportTypesList />
</template>
<script>
// This will also work in `<script setup>`
import ReportTypesList from "~~/components/admin/reports/ReportTypesList.vue"
definePageMeta({
    layout: "main",
})
export default {
    components: {
        ReportTypesList,
    }
}
</script>
