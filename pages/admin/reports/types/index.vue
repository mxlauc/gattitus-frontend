<template>
    <NuxtLayout name="main">
        <ReportTypesList />
    </NuxtLayout>
</template>
<script>
import ReportTypesList from "~~/components/admin/reports/ReportTypesList.vue"
export default {
    components: {
        ReportTypesList,
    }
}
</script>
