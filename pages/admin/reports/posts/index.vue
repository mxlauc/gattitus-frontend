<template>
    <NuxtLayout name="main">
        <ReportedPostsList />
    </NuxtLayout>
</template>
<script>
import ReportedPostsList from "~~/components/admin/reports/ReportedPostsList.vue"
export default {
    components: {
        ReportedPostsList,
    }
}
</script>
